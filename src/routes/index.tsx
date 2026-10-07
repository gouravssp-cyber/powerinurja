import { createFileRoute, Link } from "@tanstack/react-router";
import { useId, useState } from "react";
import { Card, Eyebrow, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import {
  CONTACT,
  KPIS,
  ROADMAP,
  SEMICONDUCTOR_VALUE_CHAIN,
  TEAM,
  VALUE_CHAIN,
  VISION_PILLARS,
} from "@/lib/site-data";
const waferHero = "/img1.jpeg";
const siteContext = "/site-context.png";
const solarPanel = "/about.png";
const rajBasu = "/raj-basu.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PowerIn Urja | India. Energy Security. National Security." },
      {
        name: "description",
        content:
          "PowerIn Urja is developing the PowerIn Integrated Manufacturing Campus at MIDC Butibori, Nagpur — 6 GW N-Type solar ingot and wafer manufacturing and a semiconductor pilot line.",
      },
      {
        property: "og:title",
        content: "PowerIn Urja | India.  Energy Security. National Security.",
      },
      {
        property: "og:description",
        content:
          "An integrated solar and semiconductor manufacturing campus building India's strategic upstream.",
      },
    ],
  }),
  component: Index,
});

const WHY = [
  {
    n: "01",
    title: "Critical upstream capacity",
    body: "Focuses on ingots and wafers — the upstream layer on which downstream solar cell and module manufacturing depends.",
  },
  {
    n: "02",
    title: "Designed for N-Type",
    body: "Czochralski mono-crystal growth and Tungsten-wire wafering are aligned to TOPCon, HJT and next-generation tandem-compatible products.",
  },
  {
    n: "03",
    title: "Built for optionality",
    body: "Campus infrastructure is intended to support future semiconductor, energy storage, hydrogen, photonics and mechatronics programmes.",
  },
];

const HOME_LINKS = [
  ["Project", "Phase I, masterplan and the three-phase campus.", "/project"],
  ["Team", "Operators, advisors and industrial delivery experience.", "/team"],
  [
    "Founder's Vision",
    "The mission behind national capability and technology sovereignty.",
    "/vision",
  ],
  [
    "Investor Relations",
    "Selected financial information and diligence context.",
    "/investor-relations",
  ],
  ["Contact Us", "Discuss partnerships, technology, manufacturing and investment.", "/contact"],
] as const;

const DEMAND_YEARS = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035] as const;
const DEMAND_SERIES = [
  {
    label: "Solar wafer demand",
    color: "#5aa7ff",
    values: [15, 20, 28, 38, 52, 69, 88, 110, 138, 170],
  },
  {
    label: "AI/data-centre capacity",
    color: "#f2d04b",
    values: [5, 8, 12, 18, 26, 36, 48, 61, 78, 96],
  },
  {
    label: "Battery storage capacity",
    color: "#bd7af7",
    values: [4, 7, 11, 17, 25, 34, 46, 60, 77, 96],
  },
  {
    label: "Thermal storage equivalent",
    color: "#ff6b9a",
    values: [3, 5, 8, 11, 15, 21, 29, 39, 52, 67],
  },
] as const;

// ---------- Polysilicon (tonnes/year) ----------
// Values read off the earlier chart screenshot (approx. ±2,000 t). Replace with exact model numbers.
const POLY_YEARS = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035];
const POLY_VALUES = [90000, 106000, 123000, 143000, 165000, 185000, 207000, 230000, 255000, 280000];

// ---------- Semiconductor wafers (million 300 mm wafers/year) ----------
const SEMI_YEARS = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035];
const SEMI_GLOBAL = [100, 105, 111, 117, 123, 130, 137, 144, 152, 160];
const SEMI_INDIA = [8.7, 10.3, 12.2, 14.5, 17, 20, 22.2, 24.3, 25.9, 27.6];

type TrendSeries = { label: string; color: string; values: number[] };

function TrendChart({
  years,
  series,
  unit,
  yMax,
  extrapolateFrom,
  format = (v: number) => v.toLocaleString("en-US"),
  area = false,
  logarithmic = false,
  showProjection = true,
}: {
  years: number[];
  series: TrendSeries[];
  unit: string;
  yMax: number;
  extrapolateFrom: number; // index of last "solid" point; everything after is dashed
  format?: (v: number) => string;
  area?: boolean;
  logarithmic?: boolean;
  showProjection?: boolean;
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [hover, setHover] = useState<number | null>(null);
  const [active, setActive] = useState(series[0].label);
  const pad = { top: 20, right: 18, bottom: 34, left: 68 };
  const W = 960;
  const H = 360;
  const iw = W - pad.left - pad.right;
  const ih = H - pad.top - pad.bottom;
  const getX = (i: number) => pad.left + (i / (years.length - 1)) * iw;
  const minY = logarithmic ? 5 : 0;
  const getY = (v: number) =>
    logarithmic
      ? H -
        pad.bottom -
        ((Math.log(v) - Math.log(minY)) / (Math.log(yMax) - Math.log(minY))) * ih
      : H - pad.bottom - (v / yMax) * ih;
  const yTicks = logarithmic
    ? [5, 10, 20, 50, 100, 200]
    : [0, 1, 2, 3, 4].map((l) => (yMax / 4) * l);
  const toPath = (vals: number[], from: number, to: number) =>
    vals
      .map((v, i) => [i, v] as const)
      .filter(([i]) => i >= from && i <= to)
      .map(([i, v], k) => `${k === 0 ? "M" : "L"} ${getX(i)} ${getY(v)}`)
      .join(" ");

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface-2 p-3 dark:border-white/10 dark:bg-[#0b1017] md:p-4">
      <div className="mb-3 flex items-center justify-between">
        {showProjection ? (
          <div className="flex items-center gap-4 text-[0.65rem] text-muted-foreground dark:text-white/70">
            <span className="inline-flex items-center gap-2">
              <svg width="22" height="6" aria-hidden="true">
                <line x1="0" x2="22" y1="3" y2="3" stroke="currentColor" strokeWidth="2.5" />
              </svg>
              Modelled
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="22" height="6" aria-hidden="true">
                <line
                  x1="0"
                  x2="22"
                  y1="3"
                  y2="3"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />
              </svg>
              Extrapolated
            </span>
          </div>
        ) : (
          <div />
        )}
        <div className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground dark:text-white/70">
          {unit}
        </div>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="group"
          aria-label={`${series.map((s) => s.label).join(" and ")} chart, ${years[0]} to ${years[years.length - 1]}`}
        >
          <defs>
            {series.map((s, i) => (
              <linearGradient key={s.label} id={`area-${uid}-${i}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={s.color} stopOpacity="0.28" />
                <stop offset="100%" stopColor={s.color} stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {showProjection ? (
            <>
              <rect
                x={getX(extrapolateFrom)}
                y={pad.top}
                width={W - pad.right - getX(extrapolateFrom)}
                height={ih}
                fill="currentColor"
                fillOpacity={0.04}
                className="text-foreground dark:text-white"
              />
              <text
                x={W - pad.right - 8}
                y={pad.top + 14}
                textAnchor="end"
                fontSize="10"
                letterSpacing="1.5"
                fill="currentColor"
                fillOpacity={0.5}
                className="text-foreground dark:text-white"
              >
                EXTRAPOLATED
              </text>
            </>
          ) : null}

          {yTicks.map((v) => (
              <g key={v}>
                <line
                  x1={pad.left}
                  x2={W - pad.right}
                  y1={getY(v)}
                  y2={getY(v)}
                  stroke="currentColor"
                  strokeOpacity={0.14}
                  strokeDasharray="4 8"
                  className="text-foreground dark:text-white"
                />
                <text
                  x={pad.left - 12}
                  y={getY(v) + 4}
                  textAnchor="end"
                  fontSize="11"
                  fill="currentColor"
                  fillOpacity={0.7}
                  className="text-foreground dark:text-white"
                >
                  {format(v)}
                </text>
              </g>
          ))}

          {years.map((y, i) => (
            <text
              key={y}
              x={getX(i)}
              y={H - 8}
              textAnchor="middle"
              fontSize="12"
              fill="currentColor"
              fillOpacity={0.72}
              className="text-foreground dark:text-white"
            >
              {y}
            </text>
          ))}

          {hover !== null && (
            <line
              x1={getX(hover)}
              x2={getX(hover)}
              y1={pad.top}
              y2={H - pad.bottom}
              stroke="currentColor"
              strokeOpacity={0.25}
              className="text-foreground dark:text-white"
            />
          )}

          {series.map((s, si) => {
            const isActive = active === s.label;
            const common = {
              fill: "none",
              stroke: s.color,
              strokeWidth: isActive ? 3.5 : 2.2,
              opacity: isActive ? 1 : 0.4,
              strokeLinecap: "round" as const,
              strokeLinejoin: "round" as const,
            };
            return (
              <g key={s.label}>
                {area && isActive && (
                  <path
                    d={`${toPath(s.values, 0, years.length - 1)} L ${getX(years.length - 1)} ${H - pad.bottom} L ${getX(0)} ${H - pad.bottom} Z`}
                    fill={`url(#area-${uid}-${si})`}
                  />
                )}
                {showProjection ? (
                  <>
                    <path d={toPath(s.values, 0, extrapolateFrom)} {...common} />
                    <path
                      d={toPath(s.values, extrapolateFrom, years.length - 1)}
                      {...common}
                      strokeDasharray="7 7"
                    />
                  </>
                ) : (
                  <path d={toPath(s.values, 0, years.length - 1)} {...common} />
                )}
                {s.values.map((v, i) => (
                  <circle
                    key={i}
                    cx={getX(i)}
                    cy={getY(v)}
                    r={hover === i ? 6 : 4.5}
                    fill={s.color}
                    stroke="rgba(7,11,18,0.9)"
                    strokeWidth={2}
                    opacity={isActive ? 1 : 0.7}
                  />
                ))}
              </g>
            );
          })}

          {years.map((y, i) => {
            const start = i === 0 ? pad.left : (getX(i - 1) + getX(i)) / 2;
            const end = i === years.length - 1 ? W - pad.right : (getX(i) + getX(i + 1)) / 2;
            return (
              <rect
                key={y}
                x={start}
                y={pad.top}
                width={end - start}
                height={ih}
                fill="transparent"
                className="cursor-crosshair outline-none focus-visible:stroke-accent focus-visible:stroke-2"
                tabIndex={0}
                role="button"
                aria-label={`Show values for ${y}`}
                onPointerEnter={() => setHover(i)}
                onPointerLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
              />
            );
          })}
        </svg>

        {hover !== null && (
          <div
            role="tooltip"
            className={`pointer-events-none absolute top-3 z-10 w-[min(17rem,calc(100%-1.5rem))] rounded-xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur-md dark:border-white/15 dark:bg-[#101722]/95 sm:p-4 ${
              hover < 2 ? "left-3" : hover > years.length - 3 ? "right-3" : "-translate-x-1/2"
            }`}
            style={
              hover >= 2 && hover <= years.length - 3
                ? { left: `${(getX(hover) / W) * 100}%` }
                : undefined
            }
          >
            <div className="mb-3 flex items-end justify-between border-b border-border pb-2.5 dark:border-white/10">
              <p className="text-lg font-semibold leading-none text-foreground dark:text-white">
                {years[hover]}
              </p>
              <span className="rounded-full bg-accent-soft px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-accent">
                {hover > extrapolateFrom ? "Extrapolated" : "Modelled"}
              </span>
            </div>
            <div className="space-y-2">
              {series.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-xs"
                >
                  <span className="flex min-w-0 items-center gap-2 text-muted-foreground dark:text-white/75">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: s.color }}
                    />
                    <span className="truncate">{s.label}</span>
                  </span>
                  <span className="num font-semibold text-foreground dark:text-white">
                    {format(s.values[hover])}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {series.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
          {series.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setActive(s.label)}
              className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-[0.7rem] transition-colors md:text-xs ${
                active === s.label
                  ? "border-accent bg-accent-soft text-foreground dark:text-white"
                  : "border-border text-muted-foreground hover:border-accent hover:text-foreground dark:text-white/75 dark:hover:text-white"
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface-2 p-4 dark:border-white/10 dark:bg-[#0b1017]">
      <p className="eyebrow text-muted-foreground">{label}</p>
      <p className="num mt-2 text-2xl text-accent">{value}</p>
      {sub ? <p className="mt-1 text-xs text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

function Index() {
  const [selectedValueChainStage, setSelectedValueChainStage] = useState("Ingot");
  const selectedStage =
    VALUE_CHAIN.find((stage) => stage.name === selectedValueChainStage) ?? VALUE_CHAIN[1];
  const [selectedSemiconductorStage, setSelectedSemiconductorStage] = useState("Ingot Growth");
  const selectedSemiconductorValueChainStage =
    SEMICONDUCTOR_VALUE_CHAIN.find((stage) => stage.name === selectedSemiconductorStage) ??
    SEMICONDUCTOR_VALUE_CHAIN[1];
  const [highlightedDemandSeries, setHighlightedDemandSeries] = useState<string>(
    DEMAND_SERIES[0].label,
  );
  const [hoveredDemandYearIndex, setHoveredDemandYearIndex] = useState<number | null>(null);

  const maxDemandValue = Math.max(...DEMAND_SERIES.flatMap((series) => series.values));
  const chartPadding = { top: 20, right: 18, bottom: 34, left: 68 };
  const chartWidth = 960;
  const chartHeight = 420;
  const innerWidth = chartWidth - chartPadding.left - chartPadding.right;
  const innerHeight = chartHeight - chartPadding.top - chartPadding.bottom;

  const getX = (index: number) =>
    chartPadding.left + (index / (DEMAND_YEARS.length - 1)) * innerWidth;
  const getY = (value: number) =>
    chartHeight - chartPadding.bottom - (value / maxDemandValue) * innerHeight;

  const polyCagr =
    ((POLY_VALUES[POLY_VALUES.length - 1] / POLY_VALUES[0]) ** (1 / (POLY_VALUES.length - 1)) - 1) *
    100;

  return (
    <>
      <Section className="pt-10 md:py-6">
        <div className="grid gap-14 lg:items-stretch lg:grid-cols-12 mt-2">
          <Reveal className="min-w-0 lg:col-span-6">
            <Eyebrow>Energy • Materials • Semiconductors</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.02]">
              India.
              <br />
              Energy Security.
              <br />
              <span className="inline-block whitespace-nowrap text-accent">National Security.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              PowerIn Urja is developing an integrated manufacturing campus designed to strengthen
              India's clean-tech and semiconductor supply chains — beginning with advanced N-Type
              solar ingot and wafer manufacturing.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link
                to="/project"
                className="inline-flex items-center justify-center whitespace-nowrap bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Explore the Project →
              </Link>
              <Link
                to="/vision"
                className="inline-flex items-center justify-center whitespace-nowrap border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Founder's Vision
              </Link>
            </div>
          </Reveal>

          <Reveal
            className="min-w-0 lg:relative lg:col-span-6 lg:mt-10 lg:flex lg:flex-col"
            delay={120}
          >
            <div className="relative flex-col flex items-start justify-center">
              <img
                src={waferHero}
                alt="PowerIn Integrated Manufacturing Campus, Nagpur"
                className="block h-auto max-w-full w-full object-contain"
              />
              <p className="mt-2 break-words text-xs uppercase tracking-[0.14em] text-muted-foreground lg:absolute lg:left-0 lg:top-full lg:mt-4">
                PowerIn Integrated Manufacturing Campus · Nagpur, Maharashtra
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <hr className="rule" />
          <div className="grid gap-8 pt-8 sm:grid-cols-3">
            {[
              ["Green powered", "100% green-energy ambition"],
              ["Upstream", "Critical ingot & wafer node"],
              ["3-phase campus", "Solar • Semiconductor • Advanced devices"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="eyebrow text-foreground">{k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <SectionLabel>The thesis</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.02]">
              From energy security to technology sovereignty.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={80}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              PowerIn Urja's strategy is to create domestic manufacturing capability at the most
              structurally constrained points of the energy-transition and technology value chain.
              The platform is designed to move from Solar critical materials into Semiconductor,
              Neocloud, Storage, Hydrogen, Photonics and Mechatronics opportunities over time.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                ["300+", "acre campus vision"],
                ["6 GW", "Phase I ingot & wafer platform"],
                ["3", "phased development roadmap"],
              ].map(([b, s]) => (
                <div key={s}>
                  <p className="num text-4xl text-accent">{b}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-inverse text-inverse-foreground">
        <div className="mb-8">
          <p className="eyebrow text-current opacity-70">Why it matters</p>
        </div>
        <div className="grid gap-0 md:grid-cols-3 md:items-stretch">
          {WHY.map((c, i) => (
            <Reveal
              key={c.n}
              delay={i * 90}
              className="flex h-full bg-inverse p-8 md:border-r md:border-current/20 last:md:border-r-0"
            >
              <div className="flex w-full flex-col justify-center">
                <span className="num text-sm opacity-50">{c.n}</span>
                <h3 className="mt-6 text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionLabel>About the campus</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className=" text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.02]">
              Integrated by design.
            </h2>
            <h3 className="font-bold mt-5 text-xl leading-snug text-accent md:text-2xl">
              A Platform, not a single plant.
            </h3>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              PowerIn Urja India Private Limited (PIU) is developing the PowerIn Integrated
              Manufacturing Campus (PIMC) at MIDC Additional Butibori, Nagpur, Maharashtra. The
              wider campus is planned across 300+ acres, with Phase I focused on advanced solar
              ingot and wafer manufacturing.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The platform is conceived to span a value chain from hyper-pure polysilicon, solar and
              semiconductor ingots / wafers through devices and critical consumables, neocloud,
              energy storage, hydrogen-based devices, photonics, mechatronics and selected
              ancillaries and R&D.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-5">
              {[
                ["300+ acres", "planned campus"],
                ["6 GW ", "N-Type Ingot + Wafer "],
                ["250,000 wafers", "Semiconductor pilot line + Neocloud"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="num text-2xl text-accent">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Solar critical materials",
                "Semiconductor materials",
                "Energy storage",
                "Hydrogen devices",
                "Photonics",
                "Mechatronics",
                "AI Neocloud",
              ].map((pill) => (
                <span
                  key={pill}
                  className="border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={80}>
            <div className="grid h-full gap-px bg-border sm:grid-cols-2">
              {ROADMAP.map((item, i) => (
                <article key={item.period} className="bg-surface p-6 md:p-7">
                  <span className="num text-sm text-accent">{item.period}</span>
                  <h3 className="mt-4 text-lg font-medium md:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface-2">
        <SectionLabel>Project at a glance</SectionLabel>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="border border-border bg-background p-3">
              <img
                src={solarPanel}
                alt="Site context map for the PowerIn Integrated Manufacturing Campus at Additional Butibori, Nagpur"
                className="w-full"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={80}>
            <p className="eyebrow">Phase I · 6 GW platform</p>
            <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.02]">
              N-Type monocrystalline ingots and wafers.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              State-of-the-art Czochralski mono-crystal growth combined with Tungsten-wire wafering,
              compatible with PERC, TOPCon, HJT, next-generation tandem applications and
              semiconductors.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5">
              {[
                ["Campus", "300+ acres planned"],
                ["Phase I site", "60 acres"],
                ["Technology", "Mono-CZ + Tungsten-wire"],
                ["Power ambition", "Green-energy powered"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="eyebrow text-foreground">{label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
            <Link
              to="/project"
              className="mt-7 inline-flex bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              View Project →
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionLabel>The Solar Value Chain</SectionLabel>
        <Reveal>
          <div className="flex gap-2 overflow-x-auto pb-3">
            {VALUE_CHAIN.map((stage, i) => (
              <div key={stage.name} className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  aria-pressed={selectedValueChainStage === stage.name}
                  onClick={() => setSelectedValueChainStage(stage.name)}
                  className={`border px-4 py-3 text-left text-sm transition-colors ${
                    selectedValueChainStage === stage.name
                      ? "border-accent bg-accent text-accent-foreground"
                      : stage.piu
                        ? "border-accent text-accent hover:bg-accent-soft"
                        : "border-border hover:border-accent"
                  }`}
                >
                  <span className="block font-semibold">{stage.name}</span>
                  {stage.piu ? <span className="mt-1 block text-xs opacity-80">— PIU</span> : null}
                </button>
                {i < VALUE_CHAIN.length - 1 ? (
                  <span className="text-muted-foreground">→</span>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Card className="mt-5">
            <p className="eyebrow text-accent">Selected stage</p>
            <h3 className="mt-4 text-2xl">
              {selectedStage.name}
              {selectedStage.piu ? " — PIU" : ""}
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
              {selectedStage.description}
            </p>
          </Card>
        </Reveal>
      </Section>

      <Section>
        <SectionLabel>The Semiconductor Value Chain</SectionLabel>
        <Reveal>
          <div className="flex gap-2 overflow-x-auto pb-3">
            {SEMICONDUCTOR_VALUE_CHAIN.map((stage, i) => (
              <div key={stage.name} className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  aria-pressed={selectedSemiconductorStage === stage.name}
                  onClick={() => setSelectedSemiconductorStage(stage.name)}
                  className={`border px-4 py-3 text-left text-sm transition-colors ${
                    selectedSemiconductorStage === stage.name
                      ? "border-accent bg-accent text-accent-foreground"
                      : stage.piu
                        ? "border-accent text-accent hover:bg-accent-soft"
                        : "border-border hover:border-accent"
                  }`}
                >
                  <span className="block font-semibold">{stage.name}</span>
                  {stage.piu ? <span className="mt-1 block text-xs opacity-80">— PIU</span> : null}
                </button>
                {i < SEMICONDUCTOR_VALUE_CHAIN.length - 1 ? (
                  <span className="text-muted-foreground">→</span>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Card className="mt-5">
            <p className="eyebrow text-accent">Selected stage</p>
            <h3 className="mt-4 text-2xl">
              {selectedSemiconductorValueChainStage.name}
              {selectedSemiconductorValueChainStage.piu ? " — PIU" : ""}
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
              {selectedSemiconductorValueChainStage.description}
            </p>
          </Card>
        </Reveal>
      </Section>

      {/* ---------- Chart 1: Four-sector demand outlook (unchanged) ---------- */}
      <Section className="py-6 md:py-8">
        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-surface/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-[#070b12]/90 sm:p-6 md:p-8 lg:min-h-[72vh] lg:p-7">
          <SectionLabel>India Opportunity</SectionLabel>

          <div className="space-y-5">
            <div className="space-y-2 text-foreground">
              <h3 className="text-[clamp(1.5rem,2vw,2.25rem)] font-semibold leading-tight text-foreground dark:text-white">
                India Strategic Energy &amp; Technology Demand Outlook (2026–2035)
              </h3>
              <p className="max-w-5xl text-sm leading-relaxed text-muted-foreground dark:text-white/80 md:text-base">
                A consolidated chart comparing four sectors, all in GW, using EY, Deloitte, KPMG,
                PwC, MeitY and CRISIL as the permitted source set.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-surface-2 p-3 dark:border-white/10 dark:bg-[#0b1017] md:p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-muted-foreground dark:text-white/70 md:text-sm">
                  <span className="mr-2">India: Four-sector demand outlook, 2026–2035</span>
                </div>
                <div className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground dark:text-white/70">
                  GW
                </div>
              </div>

              <div className="relative">
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="h-auto w-full lg:h-[38vh]"
                  role="group"
                  aria-label="India strategic energy and technology demand outlook chart 2026 to 2035"
                >
                  {[0, 1, 2, 3, 4].map((line) => {
                    const value = (maxDemandValue / 4) * line;
                    const y = getY(value);
                    return (
                      <g key={line}>
                        <line
                          x1={chartPadding.left}
                          x2={chartWidth - chartPadding.right}
                          y1={y}
                          y2={y}
                          stroke="currentColor"
                          strokeOpacity={0.14}
                          strokeDasharray="4 8"
                          className="text-foreground dark:text-white"
                        />
                        <text
                          x={chartPadding.left - 12}
                          y={y + 4}
                          textAnchor="end"
                          fill="currentColor"
                          fillOpacity={0.7}
                          fontSize="11"
                          className="text-foreground dark:text-white"
                        >
                          {Math.round(value).toLocaleString("en-US")}
                        </text>
                      </g>
                    );
                  })}

                  {DEMAND_YEARS.map((year, index) => (
                    <g key={year}>
                      <line
                        x1={getX(index)}
                        x2={getX(index)}
                        y1={chartPadding.top}
                        y2={chartHeight - chartPadding.bottom}
                        stroke="currentColor"
                        strokeOpacity={0.08}
                        className="text-foreground dark:text-white"
                      />
                      <text
                        x={getX(index)}
                        y={chartHeight - 8}
                        textAnchor="middle"
                        fill="currentColor"
                        fillOpacity={0.72}
                        fontSize="12"
                        className="text-foreground dark:text-white"
                      >
                        {year}
                      </text>
                    </g>
                  ))}

                  {DEMAND_SERIES.map((series) => {
                    const isActive = highlightedDemandSeries === series.label;
                    const path = series.values
                      .map(
                        (value, index) =>
                          `${index === 0 ? "M" : "L"} ${getX(index)} ${getY(value)}`,
                      )
                      .join(" ");

                    return (
                      <g key={series.label}>
                        <path
                          d={path}
                          fill="none"
                          stroke={series.color}
                          strokeWidth={isActive ? 3.5 : 2.2}
                          opacity={isActive ? 1 : 0.38}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {series.values.map((value, index) => {
                          const x = getX(index);
                          const y = getY(value);
                          return (
                            <g key={`${series.label}-${DEMAND_YEARS[index]}`}>
                              <circle
                                cx={x}
                                cy={y}
                                r={4.5}
                                fill={series.color}
                                stroke="rgba(7,11,18,0.9)"
                                strokeWidth={2}
                                opacity={isActive ? 1 : 0.7}
                                style={{ cursor: "pointer" }}
                              />
                            </g>
                          );
                        })}
                      </g>
                    );
                  })}

                  {DEMAND_YEARS.map((year, index) => {
                    const bandStart =
                      index === 0 ? chartPadding.left : (getX(index - 1) + getX(index)) / 2;
                    const bandEnd =
                      index === DEMAND_YEARS.length - 1
                        ? chartWidth - chartPadding.right
                        : (getX(index) + getX(index + 1)) / 2;

                    return (
                      <rect
                        key={year}
                        x={bandStart}
                        y={chartPadding.top}
                        width={bandEnd - bandStart}
                        height={innerHeight}
                        fill="transparent"
                        className="cursor-crosshair outline-none focus-visible:stroke-accent focus-visible:stroke-2"
                        role="button"
                        tabIndex={0}
                        aria-label={`Show all sector demand values for ${year}`}
                        aria-pressed={hoveredDemandYearIndex === index}
                        aria-describedby={
                          hoveredDemandYearIndex === index ? "demand-chart-tooltip" : undefined
                        }
                        onPointerEnter={() => setHoveredDemandYearIndex(index)}
                        onPointerLeave={() => setHoveredDemandYearIndex(null)}
                        onFocus={() => setHoveredDemandYearIndex(index)}
                        onBlur={() => setHoveredDemandYearIndex(null)}
                      />
                    );
                  })}
                </svg>

                {hoveredDemandYearIndex !== null ? (
                  <div
                    id="demand-chart-tooltip"
                    role="tooltip"
                    className={`pointer-events-none absolute top-3 z-10 w-[min(19rem,calc(100%-1.5rem))] rounded-xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur-md dark:border-white/15 dark:bg-[#101722]/95 sm:p-4 ${
                      hoveredDemandYearIndex < 2
                        ? "left-3"
                        : hoveredDemandYearIndex > DEMAND_YEARS.length - 3
                          ? "right-3"
                          : "-translate-x-1/2"
                    }`}
                    style={
                      hoveredDemandYearIndex >= 2 &&
                      hoveredDemandYearIndex <= DEMAND_YEARS.length - 3
                        ? { left: `${(getX(hoveredDemandYearIndex) / chartWidth) * 100}%` }
                        : undefined
                    }
                  >
                    <div className="mb-3 flex items-end justify-between gap-3 border-b border-border pb-2.5 dark:border-white/10">
                      <div>
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-accent">
                          Demand outlook
                        </p>
                        <p className="mt-0.5 text-lg font-semibold leading-none text-foreground dark:text-white">
                          {DEMAND_YEARS[hoveredDemandYearIndex]}
                        </p>
                      </div>
                      <span className="rounded-full bg-accent-soft px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-accent">
                        GW
                      </span>
                    </div>
                    <div className="space-y-2">
                      {DEMAND_SERIES.map((series) => (
                        <div
                          key={series.label}
                          className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-xs"
                        >
                          <span className="flex min-w-0 items-center gap-2 text-muted-foreground dark:text-white/75">
                            <span
                              className="h-2 w-2 shrink-0 rounded-full"
                              style={{ backgroundColor: series.color }}
                            />
                            <span className="truncate">{series.label}</span>
                          </span>
                          <span className="num font-semibold text-foreground dark:text-white">
                            {series.values[hoveredDemandYearIndex].toLocaleString("en-US")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
                {DEMAND_SERIES.map((series) => (
                  <button
                    key={series.label}
                    type="button"
                    onClick={() => setHighlightedDemandSeries(series.label)}
                    className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-[0.7rem] transition-colors md:text-xs ${
                      highlightedDemandSeries === series.label
                        ? "border-accent bg-accent-soft text-foreground dark:text-white"
                        : "border-border bg-transparent text-muted-foreground hover:border-accent hover:text-foreground dark:text-white/75 dark:hover:text-white"
                    }`}
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: series.color }}
                    />
                    {series.label}
                  </button>
                ))}
              </div>

              <p className="mt-4 text-[0.65rem] leading-relaxed text-muted-foreground dark:text-white/55 md:text-xs">
                Illustrative model based on permitted source benchmarks. Solar = annual wafer
                demand; other series = installed power capacity or GW-equivalent.
              </p>
              <p className="mt-4 text-[0.65rem] leading-relaxed text-muted-foreground dark:text-white/55 md:text-xs">
            Data points taken from EY, Deloitte, KPMG, PwC, Meity, Crisil. Compiled by Claude and ChatGPT
          </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- Chart 2: Polysilicon ---------- */}
      <Section className="py-6 md:py-8">
        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-surface/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-[#070b12]/90 sm:p-6 md:p-8">
          <SectionLabel>Hyper-Pure Polysilicon</SectionLabel>
          <h3 className="text-[clamp(1.5rem,2vw,2.25rem)] font-semibold leading-tight text-foreground dark:text-white">
            India Hyper-Pure Polysilicon Demand Outlook (2026–2035)
          </h3>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-muted-foreground dark:text-white/80 md:text-base">
            Illustrative solar-grade polysilicon demand in metric tonnes per year, based on assumed
            annual solar wafer demand and 2,500 tonnes of polysilicon per GW.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat
              label="2026"
              value="90,000Mt"
              sub="Starting demand"
            />
            <Stat
              label="2035"
              value="280,000Mt"
              sub="Modelled endpoint"
            />
            <Stat
              label="CAGR 2026–35"
              value={`${polyCagr.toFixed(1)}%`}
              sub="Compound annual growth"
            />
          </div>

          <div className="mt-5">
            <TrendChart
              years={POLY_YEARS}
              series={[{ label: "Polysilicon demand", color: "#5aa7ff", values: POLY_VALUES }]}
              unit="tonnes/year"
              yMax={300000}
              extrapolateFrom={4}
              format={(v) => `${Math.round(v).toLocaleString("en-US")}`}
              area
            />
          </div>
          
          <p className="mt-4 text-[0.65rem] leading-relaxed text-muted-foreground dark:text-white/55 md:text-xs">
            Data points taken from EY, Deloitte, KPMG, PwC, Meity, Crisil. Compiled by Claude and ChatGPT
          </p>
        </div>
      </Section>

      {/* ---------- Chart 3: Semiconductor wafers ---------- */}
      <Section className="py-6 md:py-8">
        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-surface/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-[#070b12]/90 sm:p-6 md:p-8">
          <SectionLabel>Semiconductor Wafers</SectionLabel>
          <h3 className="text-[clamp(1.5rem,2vw,2.25rem)] font-semibold leading-tight text-foreground dark:text-white">
            300 mm Wafer Demand, Modelled Estimate (2026–2035)
          </h3>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-muted-foreground dark:text-white/80 md:text-base">
            Estimated global and India 300 mm wafer demand in millions of wafers per year.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Global 2035" value="~160M" sub="300 mm wafers/year" />
            <Stat label="India 2035" value="~27.6M" sub="300 mm wafers/year" />
            <Stat
              label="India share 2035"
              value={`${((SEMI_INDIA[SEMI_INDIA.length - 1] / SEMI_GLOBAL[SEMI_GLOBAL.length - 1]) * 100).toFixed(1)}%`}
              sub="Of global wafer demand"
            />
          </div>

          <div className="mt-5">
            <TrendChart
              years={SEMI_YEARS}
              series={[
                { label: "Global 300 mm wafers", color: "#3785ef", values: SEMI_GLOBAL },
                { label: "India 300 mm equivalent", color: "#f15a24", values: SEMI_INDIA },
              ]}
              unit="million wafers per year"
              yMax={200}
              extrapolateFrom={0}
              format={(v) => `${Math.round(v)}`}
              logarithmic
              showProjection={false}
            />
          </div>
          <p className="mt-4 text-[0.65rem] leading-relaxed text-muted-foreground dark:text-white/55 md:text-xs">
            Modelled estimates for 300 mm wafer demand; India values are shown as 300 mm
            equivalents.
          </p>
          <p className="mt-4 text-[0.65rem] leading-relaxed text-muted-foreground dark:text-white/55 md:text-xs">
            Data points taken from EY, Deloitte, KPMG, PwC, Meity, Crisil. Compiled by Claude and ChatGPT
          </p>
        </div>
      </Section>

      <Section>
        <SectionLabel>People, vision and mission</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <Card>
              <img
                src={rajBasu}
                alt="Rajdeep Basu, Founder and Executive Chairman"
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="eyebrow mt-6 text-accent">Team</p>
              <h3 className="mt-3 text-2xl">Operators who have delivered.</h3>
              <div className="mt-3 space-y-1 text-sm leading-relaxed text-muted-foreground">
                {TEAM.slice(0, 3).map((member) => (
                  <div key={member.name}>
                    {member.name} · {member.role}
                  </div>
                ))}
              </div>
              <Link to="/team" className="mt-6 text-sm font-semibold text-accent hover:underline">
                View the team →
              </Link>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card>
              <p className="eyebrow text-accent">Founder's Vision & Mission</p>
              <h3 className="mt-6 text-2xl">
                Build capability where India’s future depends on it.
              </h3>
              <div className="mt-6 space-y-4">
                {VISION_PILLARS.slice(0, 3).map((pillar) => (
                  <div key={pillar.n} className="border-t border-border pt-3">
                    <span className="num text-sm text-accent">{pillar.n}</span>
                    <p className="mt-1 text-sm font-semibold">{pillar.title}</p>
                  </div>
                ))}
              </div>
              <Link to="/vision" className="mt-6 text-sm font-semibold text-accent hover:underline">
                View the vision →
              </Link>
            </Card>
          </Reveal>
          <Reveal delay={160}>
            <Card>
              <p className="eyebrow text-accent">Investor Relations</p>
              <h3 className="mt-6 text-2xl">The financial case, in one place.</h3>
              <div className="mt-6 space-y-3">
                {KPIS.slice(0, 3).map((kpi) => (
                  <div
                    key={kpi.label}
                    className="flex items-baseline justify-between gap-4 border-t border-border pt-3"
                  >
                    <span className="text-sm text-muted-foreground">{kpi.label}</span>
                    <span className="num text-lg">
                      {kpi.prefix}
                      {kpi.value}
                      {kpi.suffix}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/investor-relations"
                className="mt-6 text-sm font-semibold text-accent hover:underline"
              >
                View investor relations →
              </Link>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Semiconductor Pilot Line",
              b: "Phase I includes a semiconductor ingot / wafer pilot line alongside the solar upstream platform.",
            },
            {
              t: "Hyper-Pure Poly",
              b: "Team experience includes a 6,000 TPA hyper-pure polysilicon re-engineering plan and a non-Chinese polysilicon sourcing strategy.",
            },
            {
              t: "Atmanirbhar Bharat",
              b: "Domestic upstream manufacturing where the supply chain is structurally import-dependent.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <Card>
                <h3 className="text-xl">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2">
        <SectionLabel>Explore the platform</SectionLabel>
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {HOME_LINKS.map(([title, body, to], i) => (
            <Reveal key={title} delay={i * 60}>
              <Link
                to={to}
                className="group flex h-full flex-col border border-border bg-background p-7 transition-colors hover:border-accent"
              >
                <p className="eyebrow text-accent">0{i + 1}</p>
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <span className="mt-6 block text-sm font-semibold text-accent">Open page →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-inverse text-inverse-foreground">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] leading-[1.02]">
            India's energy transition needs more than generation. It needs manufacturing.
          </h2>
          <p className="mt-6 text-lg opacity-70">PowerIn Urja is building upstream.</p>
        </Reveal>
      </Section>

      <Section className="bg-accent text-accent-foreground">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="eyebrow text-current opacity-70">Contact Us</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] leading-[1.02]">
              Partner with us in revolutionising critical supply chains.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed opacity-80">
              Engage with PowerIn Urja on strategic partnerships, technology, manufacturing,
              investment and the PowerIn Integrated Manufacturing Campus.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/contact"
              className="inline-flex bg-background px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              View contact details →
            </Link>
            <p className="mt-4 text-right text-xs opacity-70">{CONTACT.email}</p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}