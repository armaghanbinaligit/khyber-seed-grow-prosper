import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { Logo } from "@/components/Logo";
import { company, crops } from "@/data/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Seeds", to: "/seeds" },
  { label: "Crops", to: "/crops" },
  { label: "Contact", to: "/contact" },
] as const;

const socials = [
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/${company.whatsapp}` },
];

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            Khyber Seed supplies quality agricultural seed across wheat, cotton, rice, maize,
            vegetables, fodder, oilseeds and pulses — selected and handled with a strong focus on
            quality.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Quick Links</h2>
          <ul className="mt-4 grid gap-2.5 text-sm text-primary-foreground/80">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Seed Categories
          </h2>
          <ul className="mt-4 grid gap-2.5 text-sm text-primary-foreground/80">
            {crops.slice(0, 6).map((crop) => (
              <li key={crop.id}>
                <Link
                  to="/seeds"
                  search={{ category: crop.id, q: "" }}
                  className="transition-colors hover:text-accent"
                >
                  {crop.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Contact</h2>
          <ul className="mt-4 grid gap-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="hover:text-accent">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page py-5 text-center text-xs text-primary-foreground/65">
          © 2026 Khyber Seed. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}