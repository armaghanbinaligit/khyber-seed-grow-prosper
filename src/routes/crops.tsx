import { createFileRoute } from "@tanstack/react-router";
import { CropCard } from "@/components/CropCard";
import { SectionHeading } from "@/components/SectionHeading";
import { crops } from "@/data/site";

export const Route = createFileRoute("/crops")({
  head: () => ({
    meta: [
      { title: "Crops We Serve — Khyber Seed" },
      {
        name: "description",
        content:
          "Wheat, cotton, rice, maize, vegetables, fodder, oilseeds and pulses — see the crops Khyber Seed supplies seed for.",
      },
      { property: "og:title", content: "Crops We Serve — Khyber Seed" },
      {
        property: "og:description",
        content: "Explore the major crop categories covered by the Khyber Seed portfolio.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/crops" },
    ],
    links: [{ rel: "canonical", href: "/crops" }],
  }),
  component: CropsPage,
});

function CropsPage() {
  return (
    <>
      <section className="border-b border-border/70 bg-primary-soft/50 py-12 sm:py-16">
        <div className="container-page">
          <h1 className="text-3xl font-semibold text-primary-deep sm:text-4xl">Crops We Serve</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our portfolio spans the crops that shape regional agriculture — food grains, fibre,
            vegetables, fodder, oilseeds and pulses.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-6">
          {crops.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      </section>

      <section className="bg-primary-soft/50 py-14">
        <div className="container-page">
          <SectionHeading
            title="Not sure which crop programme fits your land?"
            description="Share your soil type, water availability and sowing window — our team can suggest suitable varieties."
            align="center"
          />
        </div>
      </section>
    </>
  );
}