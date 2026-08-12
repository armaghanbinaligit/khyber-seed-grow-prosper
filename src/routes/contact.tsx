import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Khyber Seed — Seed Availability & Inquiries" },
      {
        name: "description",
        content:
          "Contact Khyber Seed for seed availability, variety guidance, dealer inquiries and bulk supply. Phone, email and WhatsApp.",
      },
      { property: "og:title", content: "Contact Khyber Seed" },
      {
        property: "og:description",
        content: "Let's grow together — reach our team for seed availability and product information.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: "Office Address", value: company.address },
    { icon: Clock, label: "Business Hours", value: company.hours },
  ];

  return (
    <>
      <section className="border-b border-border/70 bg-primary-soft/50 py-12 sm:py-16">
        <div className="container-page">
          <h1 className="text-3xl font-semibold text-primary-deep sm:text-4xl">Let's Grow Together</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Tell us what you grow and what you need. Our team responds to seed inquiries, dealer
            requests and bulk supply questions.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-border/70 bg-card p-5 shadow-[var(--shadow-card)] sm:p-8">
            <h2 className="text-xl font-semibold text-primary-deep">Send an inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              All fields marked with a label are used only to respond to your request.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="grid gap-4 content-start">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="mt-1 block text-sm font-medium text-primary-deep hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-primary-deep">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-primary/20 bg-primary-soft/60 p-5">
              <h2 className="text-base font-semibold text-primary-deep">Prefer a quick message?</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Chat with our team directly for availability and dealer information.
              </p>
              <Button asChild size="lg" className="mt-4">
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-soft/40 py-14">
        <div className="container-page">
          <SectionHeading
            title="Looking for a dealership?"
            description="We work with distributors and agri-input dealers across multiple districts. Send an inquiry and mention your area."
            align="center"
          />
        </div>
      </section>
    </>
  );
}