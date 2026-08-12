import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Crop } from "@/data/site";

export function CropCard({ crop }: { crop: Crop }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)] md:grid md:grid-cols-2">
      <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full md:min-h-64">
        <img
          src={crop.image}
          alt={crop.imageAlt}
          loading="lazy"
          width={900}
          height={700}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 sm:p-7">
        <h3 className="text-xl font-semibold text-primary-deep">{crop.label}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{crop.overview}</p>
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Available Varieties
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {crop.varieties.map((variety) => (
              <li
                key={variety}
                className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-deep"
              >
                {variety}
              </li>
            ))}
          </ul>
        </div>
        <Link
          to="/seeds"
          search={{ category: crop.id, q: "" }}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-deep"
        >
          Explore Seeds
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}