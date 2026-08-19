import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, ShieldCheck, Sprout, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-field.jpg";
import seedBagsImg from "@/assets/seed-bags.jpg";
import farmerImg from "@/assets/farmer.jpg";

const heroPoints = [
  { label: "95%+ germination", icon: ShieldCheck },
  { label: "Certified seed lots", icon: Sprout },
  { label: "Nationwide delivery", icon: Truck },
] as const;

const slides = [
  {
    image: heroImg,
    alt: "Golden wheat field stretching towards rolling green farmland at sunrise",
    eyebrow: "Agricultural Seed Company",
    title: "Growing Better Seeds.",
    highlight: "Growing Better Futures.",
    description:
      "Quality agricultural seeds developed to help farmers achieve stronger crops, better yields, and a more productive future.",
    primary: { label: "Explore Our Seeds", to: "/seeds" },
    secondary: { label: "Learn About Khyber Seed", to: "/about" },
  },
  {
    image: seedBagsImg,
    alt: "Stacked branded seed bags ready for dispatch in a storage warehouse",
    eyebrow: "Certified Seed Lots",
    title: "Lab-Tested Seed,",
    highlight: "Packed for Every Season.",
    description:
      "Every batch is graded, treated and tested for purity and germination before it reaches your field.",
    primary: { label: "Browse Catalog", to: "/seeds" },
    secondary: { label: "Talk to Our Team", to: "/contact" },
  },
  {
    image: farmerImg,
    alt: "Farmer inspecting healthy young crop plants in a green field",
    eyebrow: "Farmer First",
    title: "Trusted by Growers",
    highlight: "Across the Country.",
    description:
      "From wheat to vegetables, our agronomy support helps farmers pick the right variety for their soil and season.",
    primary: { label: "See Crop Range", to: "/crops" },
    secondary: { label: "Contact Us", to: "/contact" },
  },
] as const;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative isolate overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Khyber Seed highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          width={1920}
          height={1088}
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-deep/85 via-primary-deep/70 to-primary-deep/90 lg:bg-gradient-to-r lg:from-primary-deep/92 lg:via-primary-deep/70 lg:to-primary-deep/30" />

      <div className="container-page py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              aria-hidden={i !== index}
              className={i === index ? "animate-in fade-in slide-in-from-bottom-4 duration-700" : "hidden"}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-primary-foreground/10 py-1.5 pl-2.5 pr-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/90 backdrop-blur-md">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/20">
                  <Leaf className="h-3 w-3 text-accent" aria-hidden="true" />
                </span>
                {slide.eyebrow}
              </span>
              <h1 className="mt-6 text-balance font-display text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.02em] text-primary-foreground sm:text-6xl lg:text-[4.25rem]">
                {slide.title}{" "}
                <span className="relative inline-block italic text-accent">
                  {slide.highlight}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-accent via-accent/60 to-transparent"
                  />
                </span>
              </h1>
              <p className="mt-7 max-w-lg text-[1.02rem] leading-[1.75] text-primary-foreground/80 sm:text-lg sm:leading-[1.8]">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="gold">
                  <Link to={slide.primary.to}>
                    {slide.primary.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="onDark">
                  <Link to={slide.secondary.to}>{slide.secondary.label}</Link>
                </Button>
              </div>
            </div>
          ))}

          <ul className="mt-10 grid max-w-xl gap-2.5 sm:grid-cols-3">
            {heroPoints.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.08] px-3.5 py-2.5 text-[0.8rem] font-medium tracking-tight text-primary-foreground/90 backdrop-blur-md transition hover:border-accent/40 hover:bg-primary-foreground/15"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent" : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/70"
                  }`}
                />
              ))}
            </div>
            <span className="font-display text-sm tabular-nums text-primary-foreground/70">
              <span className="text-primary-foreground">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-1 text-primary-foreground/40">/</span>
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
