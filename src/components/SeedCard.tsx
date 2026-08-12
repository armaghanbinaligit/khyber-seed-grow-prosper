import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { Seed } from "@/data/site";

export function SeedCard({ seed }: { seed: Seed }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={seed.image}
          alt={seed.imageAlt}
          loading="lazy"
          width={900}
          height={700}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary-deep backdrop-blur">
          {seed.categoryName}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-primary-deep sm:text-lg">{seed.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{seed.shortDescription}</p>
        <ul className="mt-4 grid gap-1.5">
          {seed.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-foreground/80">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to="/seeds/$slug"
          params={{ slug: seed.slug }}
          className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full bg-primary-soft px-4 py-2 text-sm font-semibold text-primary-deep transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          View Details
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}