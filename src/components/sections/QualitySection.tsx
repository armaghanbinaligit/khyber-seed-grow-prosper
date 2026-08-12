import { SectionHeading } from "@/components/SectionHeading";
import { qualitySteps } from "@/data/site";
import seedBags from "@/assets/seed-bags.jpg";

export function QualitySection() {
  return (
    <section className="bg-primary-deep py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Quality & Research"
          title="Quality at Every Stage"
          description="Seed quality is decided long before a bag reaches the field. Here is how every lot moves through our process."
          inverted
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ol className="relative grid gap-5 border-l border-primary-foreground/20 pl-6">
            {qualitySteps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[34px] grid h-7 w-7 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {index + 1}
                </span>
                <h3 className="text-base font-semibold text-primary-foreground">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-primary-foreground/75">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="overflow-hidden rounded-3xl border border-primary-foreground/15">
            <img
              src={seedBags}
              alt="Stacked seed bags stored in a clean distribution warehouse"
              loading="lazy"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}