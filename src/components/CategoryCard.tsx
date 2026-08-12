import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/site";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/seeds"
      search={{ category: category.id, q: "" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={category.image}
          alt={category.imageAlt}
          loading="lazy"
          width={900}
          height={700}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-primary-deep sm:text-lg">{category.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          View Seeds
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}