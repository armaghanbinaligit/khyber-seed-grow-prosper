import { Link } from "@tanstack/react-router";
import { Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Khyber Seed — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors",
          inverted ? "bg-primary-foreground/15 text-primary-foreground" : "bg-primary text-primary-foreground",
        )}
      >
        <Sprout className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-tight",
            inverted ? "text-primary-foreground" : "text-primary-deep",
          )}
        >
          Khyber Seed
        </span>
        <span
          className={cn(
            "mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em]",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          Agricultural Seeds
        </span>
      </span>
    </Link>
  );
}