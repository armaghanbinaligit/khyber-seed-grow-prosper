import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            inverted ? "text-accent" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "text-balance text-3xl font-semibold sm:text-4xl",
          inverted ? "text-primary-foreground" : "text-primary-deep",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            inverted ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}