import { Link } from "@tanstack/react-router";
import { Home, Leaf, Mail, Sprout, Wheat } from "lucide-react";

const tabs = [
  { label: "Home", to: "/", icon: Home, exact: true },
  { label: "Seeds", to: "/seeds", icon: Sprout, exact: false },
  { label: "Crops", to: "/crops", icon: Wheat, exact: false },
  { label: "About", to: "/about", icon: Leaf, exact: false },
  { label: "Contact", to: "/contact", icon: Mail, exact: false },
] as const;

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Primary mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/98 shadow-[0_-6px_24px_-12px_oklch(0.31_0.075_152/0.4)] backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-5">
        {tabs.map(({ label, to, icon: Icon, exact }) => (
          <li key={label}>
            <Link
              to={to}
              activeOptions={{ exact }}
              className="flex min-h-14 flex-col items-center justify-center gap-1 px-1 py-2 text-[11px] font-medium text-muted-foreground transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {({ isActive }) => (
                <>
                  <span
                    className={
                      isActive
                        ? "grid h-8 w-10 place-items-center rounded-full bg-primary-soft text-primary"
                        : "grid h-8 w-10 place-items-center rounded-full"
                    }
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>{label}</span>
                </>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}