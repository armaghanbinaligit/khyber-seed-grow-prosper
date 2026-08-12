import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Farmers"
          description="Placeholder feedback shown for demonstration — real grower testimonials can replace these at any time."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}