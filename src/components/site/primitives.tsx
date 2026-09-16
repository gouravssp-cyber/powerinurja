import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-10">
      <hr className="rule mb-4" />
      <p className="eyebrow">{children}</p>
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-6 py-6 md:px-10 md:py-6", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function PageHead({
  eyebrow,
  title,
  highlight,
  lead,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  lead?: string;
}) {
  return (
    <Section className="pb-8 pt-28 md:pb-10 md:pt-36">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-5xl text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.98]">
          {title} {highlight ? <span className="text-accent">{highlight}</span> : null}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
        ) : null}
        <hr className="rule mt-12" />
      </Reveal>
    </Section>
  );
}

export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col border border-border bg-surface p-7 transition-colors hover:border-accent",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function Kpi({
  label,
  children,
  note,
}: {
  label: string;
  children: ReactNode;
  note?: string;
}) {
  return (
    <div className="border border-border bg-surface p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="num mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-none text-foreground">
        {children}
      </p>
      {note ? <p className="mt-3 text-sm text-muted-foreground">{note}</p> : null}
    </div>
  );
}

export function Initials({ name }: { name: string }) {
  const initials = name
    .replace(/(Dr\.|Mr\.|Ms\.)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="flex aspect-[4/5] w-full items-center justify-center bg-accent-soft">
      <span className="num text-5xl text-accent">{initials}</span>
    </div>
  );
}
