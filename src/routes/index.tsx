import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, PhoneCall, ShieldCheck, Sprout, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCard } from "@/components/StatCard";
import { CategoryCard } from "@/components/CategoryCard";
import { SeedCard } from "@/components/SeedCard";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FarmerSection } from "@/components/sections/FarmerSection";
import { categories, seeds, stats } from "@/data/site";
import heroImg from "@/assets/hero-field.jpg";
import aboutImg from "@/assets/about-company.jpg";

export const Route = createFileRoute("/")({
  // eslint-disable-next-line
  head: () => ({
    meta: [
      { title: "Khyber Seed — Quality Agricultural Seeds for Better Yields" },
      {
        name: "description",
        content:
          "Khyber Seed supplies quality wheat, cotton, rice, maize, vegetable, fodder, oilseed and pulse seed varieties to help farmers grow stronger crops.",
      },
      { property: "og:title", content: "Khyber Seed — Quality Agricultural Seeds for Better Yields" },
      {
        property: "og:description",
        content:
          "Khyber Seed supplies quality wheat, cotton, rice, maize, vegetable, fodder, oilseed and pulse seed varieties to help farmers grow stronger crops.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Khyber Seed",
          description: "Agricultural seed company supplying quality crop seed varieties.",
          areaServed: "PK",
        }),
      },
    ],
  }),
  component: Index,
});

const heroPoints = [
  { label: "95%+ germination", icon: ShieldCheck },
  { label: "Certified seed lots", icon: Sprout },
  { label: "Nationwide delivery", icon: Truck },
] as const;

function Index() {
  const featured = seeds.filter((seed) => seed.featured);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Golden wheat field stretching towards rolling green farmland at sunrise"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-deep/85 via-primary-deep/70 to-primary-deep/90 lg:bg-gradient-to-r lg:from-primary-deep/92 lg:via-primary-deep/70 lg:to-primary-deep/30" />

        <div className="container-page py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground backdrop-blur">
              <Leaf className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              Agricultural Seed Company
            </span>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
              Growing Better Seeds. Growing Better Futures.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Quality agricultural seeds developed to help farmers achieve stronger crops, better
              yields, and a more productive future.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="gold">
                <Link to="/seeds">
                  Explore Our Seeds
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="onDark">
                <Link to="/about">Learn About Khyber Seed</Link>
              </Button>
            </div>
            <ul className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {heroPoints.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-3.5 py-3 text-sm font-medium text-primary-foreground backdrop-blur"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Company statistics" className="relative z-10 bg-background pb-10 pt-10 sm:pb-12 lg:-mt-16 lg:pt-0">
        <div className="container-page grid grid-cols-2 gap-3 rounded-3xl sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-2 overflow-hidden rounded-3xl border border-border/70 shadow-[var(--shadow-card)] lg:order-1">
            <img
              src={aboutImg}
              alt="Seed specialists examining graded seed samples in a greenhouse facility"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About Khyber Seed"
              title="Seeds Built for Better Agriculture"
              description="Khyber Seed focuses on providing high-quality, scientifically improved agricultural seeds designed to support farmers and improve crop productivity."
            />
            <dl className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-primary-soft/60 p-4">
                <dt className="text-sm font-semibold text-primary-deep">Mission</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Put dependable, well-tested seed within reach of every farmer we serve.
                </dd>
              </div>
              <div className="rounded-2xl bg-primary-soft/60 p-4">
                <dt className="text-sm font-semibold text-primary-deep">Vision</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  A farming community that makes confident seed decisions every season.
                </dd>
              </div>
              <div className="rounded-2xl bg-accent-soft p-4 sm:col-span-2">
                <dt className="text-sm font-semibold text-primary-deep">Quality Commitment</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Cleaned, graded and germination-tested lots with records maintained from intake
                  through dispatch.
                </dd>
              </div>
            </dl>
            <Button asChild size="lg" className="mt-7">
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary-soft/40 py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Seed Categories"
            title="Explore Our Seed Categories"
            description="Eight crop categories, each backed by varieties chosen for local growing conditions."
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured"
              title="Our Featured Seeds"
              description="A selection of varieties farmers ask for most across our crop range."
            />
            <Button asChild variant="outline" className="self-start sm:self-end">
              <Link to="/seeds">
                View full catalog
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 lg:grid-cols-3">
            {featured.map((seed) => (
              <SeedCard key={seed.slug} seed={seed} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />
      <QualitySection />
      <FarmerSection />
      <TestimonialsSection />

      <section className="bg-primary-soft/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Grow Together"
            description="Tell us what you grow and we'll help you find the right variety, packaging and supply plan."
            align="center"
          />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">Send an Inquiry</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/crops">Browse Crops</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
