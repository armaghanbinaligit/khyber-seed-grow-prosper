import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, SearchX } from "lucide-react";
import { SeedCard } from "@/components/SeedCard";
import { Button } from "@/components/ui/button";
import { crops, seeds, type CategoryId } from "@/data/site";

type SeedsSearch = { category?: CategoryId | "all"; q?: string };

export const Route = createFileRoute("/seeds/")({
  validateSearch: (search: Record<string, unknown>): SeedsSearch => {
    const category = String(search["category"] ?? "all");
    const valid = crops.some((crop) => crop.id === category);
    return {
      category: valid ? (category as CategoryId) : "all",
      q: typeof search["q"] === "string" ? search["q"] : "",
    };
  },
  head: () => ({
    meta: [
      { title: "Explore Our Seeds — Khyber Seed Catalog" },
      {
        name: "description",
        content:
          "Browse Khyber Seed's catalog of wheat, cotton, rice, maize, vegetable, fodder, oilseed and pulse seed varieties.",
      },
      { property: "og:title", content: "Explore Our Seeds — Khyber Seed" },
      {
        property: "og:description",
        content: "Quality seed varieties selected for different crops, conditions and farming needs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/seeds" },
    ],
    links: [{ rel: "canonical", href: "/seeds" }],
  }),
  component: SeedsPage,
});

function SeedsPage() {
  const search = Route.useSearch();
  const category = search.category ?? "all";
  const q = search.q ?? "";
  const navigate = useNavigate({ from: "/seeds/" });
  const [query, setQuery] = useState(q);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return seeds.filter((seed) => {
      const matchesCategory = category === "all" || seed.category === category;
      const matchesTerm =
        term.length === 0 ||
        seed.name.toLowerCase().includes(term) ||
        seed.variety.toLowerCase().includes(term) ||
        seed.categoryName.toLowerCase().includes(term) ||
        seed.shortDescription.toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  }, [category, query]);

  const chips: { id: CategoryId | "all"; label: string }[] = [
    { id: "all", label: "All" },
    ...crops.map((crop) => ({ id: crop.id as CategoryId | "all", label: crop.label })),
  ];

  return (
    <>
      <section className="border-b border-border/70 bg-primary-soft/50 py-12 sm:py-16">
        <div className="container-page">
          <h1 className="text-3xl font-semibold text-primary-deep sm:text-4xl">Explore Our Seeds</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Discover quality seed varieties selected for different crops, growing conditions, and
            farming needs.
          </p>

          <div className="mt-7 max-w-xl">
            <label htmlFor="seed-search" className="sr-only">
              Search seeds
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                id="seed-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by seed name, variety or crop"
                className="w-full rounded-full border border-input bg-background py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-30 border-b border-border/70 bg-background/95 backdrop-blur lg:top-20">
        <div className="container-page">
          <div
            role="group"
            aria-label="Filter seeds by category"
            className="hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-3"
          >
            {chips.map((chip) => {
              const active = chip.id === category;
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    navigate({ search: { category: chip.id as CategoryId, q: query }, replace: true })
                  }
                  className={
                    active
                      ? "shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                      : "shrink-0 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:border-primary/40 hover:text-primary-deep"
                  }
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container-page">
          <p className="text-sm text-muted-foreground">
            Showing {filtered.length} {filtered.length === 1 ? "variety" : "varieties"}
          </p>

          {filtered.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((seed) => (
                <SeedCard key={seed.slug} seed={seed} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-border bg-card p-10 text-center">
              <SearchX className="mx-auto h-8 w-8 text-muted-foreground" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold text-primary-deep">No seeds match yet</h2>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                Try a different crop category or clear your search to see the full catalog.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setQuery("");
                  navigate({ search: { category: "all" as CategoryId, q: "" }, replace: true });
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}