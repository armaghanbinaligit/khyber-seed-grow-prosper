import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle, Package, Sprout } from "lucide-react";
import { SeedCard } from "@/components/SeedCard";
import { Button } from "@/components/ui/button";
import { company, seeds } from "@/data/site";

export const Route = createFileRoute("/seeds/$slug")({
  loader: ({ params }) => {
    const seed = seeds.find((item) => item.slug === params.slug);
    if (!seed) throw notFound();
    return { seed };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Seed not found — Khyber Seed" }, { name: "robots", content: "noindex" }] };
    }
    const { seed } = loaderData;
    return {
      meta: [
        { title: `${seed.name} — ${seed.categoryName} Seed | Khyber Seed` },
        { name: "description", content: seed.shortDescription },
        { property: "og:title", content: `${seed.name} — Khyber Seed` },
        { property: "og:description", content: seed.shortDescription },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/seeds/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/seeds/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: seed.name,
            category: `${seed.categoryName} seed`,
            description: seed.shortDescription,
            brand: { "@type": "Brand", name: "Khyber Seed" },
          }),
        },
      ],
    };
  },
  component: SeedDetailPage,
  notFoundComponent: SeedNotFound,
});

function SeedNotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-semibold text-primary-deep">Seed variety not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        This variety may have been renamed or removed from the catalog.
      </p>
      <Button asChild className="mt-6">
        <Link to="/seeds">Back to all seeds</Link>
      </Button>
    </div>
  );
}

function SeedDetailPage() {
  const { seed } = Route.useLoaderData();
  const related = seeds
    .filter((item) => item.slug !== seed.slug && item.category === seed.category)
    .concat(seeds.filter((item) => item.slug !== seed.slug && item.category !== seed.category))
    .slice(0, 4);

  return (
    <>
      <section className="border-b border-border/70 bg-primary-soft/40 py-8">
        <div className="container-page">
          <Link
            to="/seeds"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-deep"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All seeds
          </Link>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-3xl border border-border/70 shadow-[var(--shadow-card)]">
            <img
              src={seed.image}
              alt={seed.imageAlt}
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-deep">
              <Sprout className="h-3.5 w-3.5" aria-hidden="true" />
              {seed.categoryName}
            </span>
            <h1 className="mt-4 text-3xl font-semibold text-primary-deep sm:text-4xl">{seed.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground">Variety code: {seed.variety}</p>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">{seed.description}</p>

            <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Key Features
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {seed.features.map((feature: string) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Contact for Availability</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Request Information
                </a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Pricing is shared on request — contact us for current availability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary-soft/40 py-12 sm:py-16">
        <div className="container-page grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border/70 bg-card p-5">
            <h2 className="text-base font-semibold text-primary-deep">Recommended Usage</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{seed.usage}</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card p-5">
            <h2 className="text-base font-semibold text-primary-deep">Growing Information</h2>
            <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground">
              {seed.growingInfo.map((info: string) => (
                <li key={info}>{info}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card p-5">
            <h2 className="text-base font-semibold text-primary-deep">Available Packaging</h2>
            <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground">
              {seed.packaging.map((pack: string) => (
                <li key={pack} className="flex items-center gap-2">
                  <Package className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {pack}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card p-5">
            <h2 className="text-base font-semibold text-primary-deep">Quality Information</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{seed.quality}</p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page">
          <h2 className="text-2xl font-semibold text-primary-deep">Related Seeds</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <SeedCard key={item.slug} seed={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}