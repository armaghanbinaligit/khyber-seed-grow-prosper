import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Eye, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCard } from "@/components/StatCard";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/site";
import aboutImg from "@/assets/about-company.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Khyber Seed — Seeds Built for Better Agriculture" },
      {
        name: "description",
        content:
          "Khyber Seed provides high-quality, scientifically improved agricultural seed. Learn about our mission, vision and quality commitment.",
      },
      { property: "og:title", content: "About Khyber Seed" },
      {
        property: "og:description",
        content: "Our mission, vision and quality commitment as an agricultural seed company.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Compass,
    title: "Our Mission",
    text: "To put dependable, well-tested seed within reach of every farmer we serve, backed by practical agronomic guidance.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "A farming community that makes confident seed decisions and builds steadily more productive land season after season.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Commitment",
    text: "Every lot is cleaned, graded and germination-tested, with records maintained from intake through dispatch.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border/70 bg-primary-soft/50 py-12 sm:py-16">
        <div className="container-page">
          <h1 className="text-3xl font-semibold text-primary-deep sm:text-4xl">
            Seeds Built for Better Agriculture
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Khyber Seed focuses on providing high-quality, scientifically improved agricultural seeds
            designed to support farmers and improve crop productivity.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="overflow-hidden rounded-3xl border border-border/70 shadow-[var(--shadow-card)]">
            <img
              src={aboutImg}
              alt="Agricultural specialists inspecting seed samples at a Khyber Seed facility"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About Khyber Seed"
              title="Two decades of work in the field, not just the office"
              description="We began as a small seed supply operation and grew by doing one thing consistently: sending out seed we would be willing to plant on our own land. Today our range covers cereals, fibre, vegetables, fodder, oilseeds and pulses."
            />
            <div className="mt-8 grid gap-4">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-primary-deep">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8">
              <Link to="/seeds">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background pb-14">
        <div className="container-page grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      <WhyChooseSection />
      <QualitySection />
    </>
  );
}