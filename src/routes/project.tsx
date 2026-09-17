import { createFileRoute } from "@tanstack/react-router";
import { Card, CountUp, PageHead, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { EXECUTION_DISCIPLINES, PROCESS_FLOW, PROJECT_PHASES } from "@/lib/site-data";
import siteContext from "@/assets/site-context.png";
import masterplan from "@/assets/masterplan.png";
import phase1Layout from "@/assets/phase1-layout.png";

export const Route = createFileRoute("/project")({
  head: () => ({
    meta: [
      { title: "Project | PowerIn Integrated Manufacturing Campus" },
      {
        name: "description",
        content:
          "Phase I of the PowerIn Integrated Manufacturing Campus: 6 GW N-Type monocrystalline ingots and wafers on 60 acres at MIDC Additional Butibori, Nagpur.",
      },
      { property: "og:title", content: "Project | PowerIn Integrated Manufacturing Campus" },
      {
        property: "og:description",
        content:
          "Manufacturing the critical upstream in India — masterplan, Phase I specifications and the three-phase campus.",
      },
    ],
  }),
  component: Project,
});

const SPECS = [
  ["Campus", "300+ acres planned"],
  ["Phase I site", "60 acres"],
  ["Technology", "Mono-CZ + diamond-wire"],
  ["Power ambition", "Green-energy powered"],
];

const LENS = [
  {
    icon: "◎",
    title: "Import substitution",
    body: "Builds domestic upstream capability where the supply chain is structurally import-dependent.",
  },
  {
    icon: "↗",
    title: "Supply-chain resilience",
    body: "Pairs a non-Chinese polysilicon sourcing strategy with domestic ingot and wafer production.",
  },
  {
    icon: "▦",
    title: "Technology depth",
    body: "Creates a base for semiconductor-grade materials, MiniFAB and other advanced device opportunities.",
  },
  {
    icon: "✦",
    title: "Industrial ecosystem",
    body: "Provides a plug-and-play environment for partners, JVs and captive vendors supporting the campus.",
  },
];

const PHASES = [
  {
    n: "01",
    title: "Solar upstream",
    body: "Advanced N-Type ingot & wafer production, semiconductor ingot / wafer pilot line and initial energy-storage capability.",
    active: true,
  },
  {
    n: "02",
    title: "Scale + MiniFAB",
    body: "10+ GW solar ingot & wafer platform, semiconductor MiniFAB, expanded ESS and next-generation solar technology.",
  },
  {
    n: "03",
    title: "Next-generation devices",
    body: "Hydrogen devices, photonics, mechatronics and additional upstream / advanced manufacturing opportunities.",
  },
];

function Project() {
  return (
    <>
      <PageHead
        eyebrow="02 · Project · Atmanirbhar Bharat"
        title="Manufacturing the"
        highlight="critical upstream in India."
        lead="PowerIn Urja's PIMC is positioned as strategic infrastructure for domestic supply-chain resilience, clean-tech capability and technology sovereignty."
      />

      <Section className="pt-4">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="order-2 lg:order-1 lg:col-span-7">
            <div className="flex bg-surface-2 p-4">
              <img
                src={siteContext}
                alt="Site context map showing the proposed PIUPL campus at Additional Butibori, Nagpur"
                className="w-full"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2 lg:col-span-5" delay={80}>
            <span className="eyebrow">Phase I</span>
            <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.7rem)]">
              N-Type monocrystalline ingots & wafers
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              State-of-the-art Czochralski mono-crystal growth combined with diamond-wire wafering.
              Product architecture is compatible with PERC / TOPCon / HJT downstream platforms and
              next-generation tandem applications.
            </p>
            <dl className="mt-8">
              {SPECS.map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border py-3">
                  <dt className="text-sm text-muted-foreground">{k}</dt>
                  <dd className="text-sm font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionLabel>Technology process flow</SectionLabel>
        <Reveal>
          <div className="flex gap-3 overflow-x-auto pb-3">
            {PROCESS_FLOW.map((step, i) => (
              <div key={step} className="flex shrink-0 items-center gap-3">
                <span className={`border px-4 py-3 text-sm ${step === "Wafer" ? "border-accent bg-accent text-accent-foreground" : "border-border"}`}>
                  {step}
                </span>
                {i < PROCESS_FLOW.length - 1 ? <span className="text-muted-foreground">→</span> : null}
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-8 grid gap-px bg-border md:grid-cols-3">
          {["N-Type", "Czochralski", "Diamond-Wire"].map((stat, i) => (
            <Reveal key={stat} delay={i * 70} className="bg-background p-6">
              <p className="num text-2xl text-accent">{stat}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {i === 0 ? "Designed for advanced solar cell platforms." : i === 1 ? "Mono-crystal growth process for ingot production." : "Wafering process for precision silicon substrates."}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionLabel>PIMC masterplan</SectionLabel>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { src: masterplan, cap: "Campus masterplan · MIDC Additional Butibori" },
            { src: phase1Layout, cap: "Phase I layout and building geometry" },
          ].map((f, i) => (
            <Reveal key={f.cap} delay={i * 100}>
              <figure>
                <div className="border border-border bg-surface p-3">
                  <img src={f.src} alt={f.cap} className="w-full" />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {f.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2">
        <SectionLabel>Manufacturing scale</SectionLabel>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            <Reveal>
              <div className="border border-border bg-background p-7">
                <p className="eyebrow text-foreground">Annual capacity</p>
                <p className="num mt-4 text-5xl text-accent"><CountUp value={6} suffix=" GW" /></p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="border border-border bg-background p-7">
                <p className="eyebrow text-foreground">Phase I site</p>
                <p className="num mt-4 text-5xl text-accent"><CountUp value={60} suffix=" acres" /></p>
              </div>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7" delay={120}>
            <div className="border border-border bg-background p-5">
              <svg viewBox="0 0 640 260" className="w-full text-accent" role="img" aria-label="Stylized Phase I facility footprint">
                <rect x="20" y="30" width="180" height="85" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeWidth="2" />
                <rect x="220" y="30" width="180" height="85" fill="currentColor" fillOpacity=".16" stroke="currentColor" strokeWidth="2" />
                <rect x="20" y="145" width="280" height="85" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth="2" />
                <rect x="320" y="145" width="280" height="85" fill="currentColor" fillOpacity=".08" stroke="currentColor" strokeWidth="2" />
                <text x="110" y="78" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="600">Ingot Growth</text>
                <text x="310" y="78" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="600">Crystal / Squaring</text>
                <text x="160" y="193" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="600">Wafer Slicing</text>
                <text x="460" y="193" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="600">Logistics / QC</text>
              </svg>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionLabel>Atmanirbhar Bharat lens</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {LENS.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <Card>
                <span className="text-2xl text-accent">{c.icon}</span>
                <h3 className="mt-6 text-xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionLabel>Three-phase campus</SectionLabel>
        <div className="grid gap-6 md:grid-cols-3">
          {PHASES.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <Card
                className={
                  p.active ? "border-accent bg-accent-soft" : undefined
                }
              >
                <span className="num text-sm text-accent">{p.n}</span>
                <h3 className="mt-6 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionLabel>Strategic roadmap</SectionLabel>
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECT_PHASES.map((phase, i) => (
            <Reveal key={phase.n} delay={i * 80}>
              <Card className={phase.active ? "border-accent bg-accent-soft md:-translate-y-3" : undefined}>
                <span className="num text-sm text-accent">{phase.n}</span>
                <h3 className="mt-6 text-2xl">{phase.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{phase.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2">
        <SectionLabel>Strategic positioning</SectionLabel>
        <Reveal>
          <div className="overflow-x-auto border border-border bg-background p-6">
            <svg
              viewBox="0 0 760 430"
              className="min-w-[680px] w-full"
              role="img"
              aria-label="Strategic positioning quadrant showing PowerIn Urja near ingot and wafer manufacturing"
            >
              <line x1="90" y1="350" x2="700" y2="350" stroke="currentColor" strokeWidth="2" />
              <line x1="90" y1="350" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
              <text x="385" y="405" textAnchor="middle" className="fill-foreground text-sm">
                Upstream → Downstream
              </text>
              <text
                x="28"
                y="205"
                textAnchor="middle"
                transform="rotate(-90 28 205)"
                className="fill-foreground text-sm"
              >
                Conventional → Advanced
              </text>

              <path
                d="M 185 90 L 225 120 L 280 150 L 445 225 L 530 260 L 570 300"
                fill="none"
                stroke="var(--color-foreground)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.7"
              />
              <path
                d="M 185 90 L 210 110"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeDasharray="5 4"
                strokeLinecap="round"
              />

              {[
                ["Ingot Manufacturer", 205, 105, true],
                ["Wafer Manufacturer", 280, 130, true],
                ["Cell Manufacturer", 445, 225, false],
                ["Module Manufacturer", 530, 260, false],
                ["Solar EPC", 570, 300, false],
                ["Advanced Semiconductor / Materials", 470, 85, false],
              ].map(([label, x, y, isAccent]) => (
                <g key={label as string}>
                  <circle
                    cx={x as number}
                    cy={y as number}
                    r="7"
                    fill={isAccent ? "var(--color-accent)" : "var(--color-foreground)"}
                  />
                  <text
                    x={(x as number) + 12}
                    y={(y as number) + 5}
                    className="fill-foreground text-xs"
                  >
                    {label}
                  </text>
                </g>
              ))}

              <text x="120" y="80" className="fill-accent text-sm font-semibold">
                PowerIn Urja
              </text>
            </svg>
          </div>
        </Reveal>
      </Section>

      <Section>
        <SectionLabel>Six disciplines of execution</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {EXECUTION_DISCIPLINES.map((discipline, i) => (
            <Reveal key={discipline.title} delay={i * 60}>
              <Card>
                <span className="num text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl">{discipline.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{discipline.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
