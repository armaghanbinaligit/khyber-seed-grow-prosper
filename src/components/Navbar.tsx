import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Seeds", to: "/seeds" },
  { label: "Crops", to: "/crops" },
  { label: "Why Khyber Seed", to: "/about", hash: "why" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/95 shadow-sm backdrop-blur"
          : "bg-background/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...("hash" in item ? { hash: item.hash } : {})}
              activeOptions={{ exact: item.to === "/", includeHash: false }}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-primary-soft hover:text-primary-deep"
              activeProps={{ className: "text-primary-deep font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden lg:inline-flex">
            <Link to="/seeds">Explore Seeds</Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="lg:hidden" aria-label="Call Khyber Seed">
            <a href="tel:+923000000000">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <Menu className="h-5 w-5 hidden" /> : null}
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          aria-label="Mobile menu"
          className="border-t border-border/70 bg-background px-5 py-3 lg:hidden"
        >
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  {...("hash" in item ? { hash: item.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}