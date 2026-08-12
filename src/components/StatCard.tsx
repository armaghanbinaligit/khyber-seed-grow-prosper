import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 45;
    const id = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setValue(Math.round(target * progress));
      if (frame >= total) window.clearInterval(id);
    }, 20);
    return () => window.clearInterval(id);
  }, [target, active]);

  return value;
}

export function StatCard({ value, suffix = "", label }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const current = useCountUp(value, active);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border/70 bg-card p-5 text-center shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)] sm:p-6"
    >
      <p className="font-display text-3xl font-semibold text-primary-deep sm:text-4xl">
        {current.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-2 text-sm leading-snug text-muted-foreground">{label}</p>
    </div>
  );
}