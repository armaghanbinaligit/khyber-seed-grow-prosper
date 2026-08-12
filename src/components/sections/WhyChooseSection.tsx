import { FlaskConical, Handshake, ShieldCheck, Sprout, Truck, Users, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { benefits } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  ShieldCheck,
  Sprout,
  Users,
  Truck,
  FlaskConical,
  Handshake,
};

export function WhyChooseSection() {
  return (
    <section id="why" className="scroll-mt-24 bg-primary-soft/50 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Khyber Seed"
          title="Why Farmers Choose Khyber Seed"
          description="A seed partner judged on the things that matter in the field: quality, consistency and honest advice."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon] ?? Sprout;
            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-primary-deep">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}