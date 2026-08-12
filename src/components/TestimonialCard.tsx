import { Star } from "lucide-react";
import type { Testimonial } from "@/data/site";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)] sm:p-6">
      <div
        className="flex items-center gap-0.5"
        aria-label={`Rated ${testimonial.rating} out of 5`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            aria-hidden="true"
            className={
              index < testimonial.rating
                ? "h-4 w-4 fill-accent text-accent"
                : "h-4 w-4 text-border"
            }
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 border-t border-border/70 pt-4">
        <p className="text-sm font-semibold text-primary-deep">{testimonial.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {testimonial.location} · {testimonial.crop} grower
        </p>
      </figcaption>
    </figure>
  );
}