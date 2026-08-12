import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import farmerImg from "@/assets/farmer.jpg";

export function FarmerSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={farmerImg}
        alt="A farmer holding young seedlings in a green crop field"
        loading="lazy"
        width={1400}
        height={900}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-primary-deep/80" />
      <div className="container-page py-20 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Better Seeds. Better Opportunities for Farmers.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">
            The right seed choice shapes an entire season. We work with growers to match varieties to
            their land, water and market, so every acre has a fair chance to perform.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-7">
            <Link to="/seeds">Find the Right Seed</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}