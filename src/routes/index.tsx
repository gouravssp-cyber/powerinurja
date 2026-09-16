import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Card, Eyebrow, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { CONTACT, KPIS, ROADMAP, TEAM, VALUE_CHAIN, VISION_PILLARS } from "@/lib/site-data";
import waferHero from "@/assets/img1.jpeg";
import siteContext from "@/assets/site-context.png";
import rajBasu from "@/assets/raj-basu.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PowerIn Urja |India. Energy Security. National Security." },
      {
        name: "description",
        content:
          "PowerIn Urja is developing the PowerIn Integrated Manufacturing Campus at MIDC Butibori, Nagpur — 6 GW N-Type solar ingot and wafer manufacturing and a semiconductor pilot line.",
      },
      { property: "og:title", content: "PowerIn Urja | India.  Energy Security. National Security." },
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
    body: "Czochralski mono-crystal growth and diamond-wire wafering are aligned to TOPCon, HJT and next-generation tandem-compatible products.",
  },
  {
    n: "03",
    title: "Built for optionality",
    body: "Campus infrastructure is intended to support future semiconductor, energy storage, hydrogen, photonics and mechatronics programmes.",
  },
];

const HOME_LINKS = [
  ["About Us", "The campus, roadmap and manufacturing platform.", "/about"],
  ["Project", "Phase I, masterplan and the three-phase campus.", "/project"],
  ["Team", "Operators, advisors and industrial delivery experience.", "/team"],
  ["Founder's Vision", "The mission behind national capability and technology sovereignty.", "/vision"],
  ["Investor Relations", "Selected financial information and diligence context.", "/investor-relations"],
  ["Contact Us", "Discuss partnerships, technology, manufacturing and investment.", "/contact"],
] as const;

function Index() {
  const [selectedValueChainStage, setSelectedValueChainStage] = useState("Ingot");
  const selectedStage = VALUE_CHAIN.find((stage) => stage.name === selectedValueChainStage) ?? VALUE_CHAIN[1];

  return (
    <>
      <Section className="pt-24 md:py-6">
        <div className="grid gap-14 lg:items-stretch lg:grid-cols-12 mt-2">
          <Reveal className="lg:col-span-6">
            <Eyebrow>Energy • Materials • Semiconductors</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.02]">
              India.
              <br />
              Energy Security.
              <br />
              <span className="text-accent text-nowrap 
">National Security.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              PowerIn Urja is developing an integrated manufacturing campus designed to strengthen
              India's clean-tech and semiconductor supply chains — beginning with advanced N-Type
              solar ingot and wafer manufacturing.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/project"
                className="bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Explore the Project →
              </Link>
              <Link
                to="/vision"
                className="border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Founder's Vision
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:relative lg:col-span-6 lg:mt-10 lg:flex lg:flex-col" delay={120}>
            <div className="relative flex items-start justify-center">
              <img
                src={waferHero}
                alt="Silicon wafer and wafering visual, PowerIn Integrated Manufacturing Campus"
                className="aspect-[16/10] h-auto w-full object-cover"
              />
              <p className=" text-xs uppercase tracking-[0.14em] text-muted-foreground lg:absolute lg:left-0 lg:top-full lg:mt-4">
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
              ["3-phase campus", "Solar • semiconductor • advanced devices"],
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
              The platform is designed to move from solar critical materials into semiconductor,
              storage, hydrogen, photonics and mechatronics opportunities over time.
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
        <div className="mb-10">
          <hr className="mb-4 border-t border-current opacity-40" />
          <p className="eyebrow text-current opacity-70">Why it matters</p>
        </div>
        <div className="grid gap-px bg-current/20 md:grid-cols-3">
          {WHY.map((c, i) => (
            <Reveal key={c.n} delay={i * 90} className="bg-inverse p-8">
              <span className="num text-sm opacity-50">{c.n}</span>
              <h3 className="mt-6 text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-70">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionLabel>About the campus</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.02]">
              A platform, not a single plant.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              PowerIn Urja India Private Limited is developing the PowerIn Integrated Manufacturing
              Campus at MIDC Additional Butibori, Nagpur. The wider campus is planned across 300+
              acres, beginning with advanced solar ingot and wafer manufacturing.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              View About Us →
            </Link>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={80}>
            <div className="grid gap-px bg-border md:grid-cols-2">
              {ROADMAP.map((item, i) => (
                <article key={item.period} className="bg-background p-6">
                  <span className="num text-sm text-accent">{item.period}</span>
                  <h3 className="mt-4 text-xl">{item.title}</h3>
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
                src={siteContext}
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
              State-of-the-art Czochralski mono-crystal growth combined with diamond-wire wafering,
              compatible with PERC, TOPCon, HJT and next-generation tandem applications.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5">
              {[
                ["Campus", "300+ acres planned"],
                ["Phase I site", "60 acres"],
                ["Technology", "Mono-CZ + diamond-wire"],
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
                  className={`border px-4 py-3 text-left text-sm transition-colors ${selectedValueChainStage === stage.name
                    ? "border-accent bg-accent text-accent-foreground"
                    : stage.piu
                      ? "border-accent text-accent hover:bg-accent-soft"
                      : "border-border hover:border-accent"
                    }`}
                >
                  <span className="block font-semibold">{stage.name}</span>
                  {stage.piu ? <span className="mt-1 block text-xs opacity-80">— PIU</span> : null}
                </button>
                {i < VALUE_CHAIN.length - 1 ? <span className="text-muted-foreground">→</span> : null}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Card className="mt-5">
            <p className="eyebrow text-accent">Selected stage</p>
            <h3 className="mt-4 text-2xl">{selectedStage.name}{selectedStage.piu ? " — PIU" : ""}</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{selectedStage.description}</p>
          </Card>
        </Reveal>
      </Section>

      <Section className="bg-surface-2">
        <SectionLabel>India Opportunity</SectionLabel>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex min-h-[320px] items-center justify-center border border-border bg-background p-8">
              <svg viewBox="0 0 300 360" className="h-auto w-full max-w-[260px] text-accent" role="img" aria-label="Stylized map of India marking Nagpur and Butibori">
                <path d="M119 16 158 32 177 61 211 76 223 111 254 133 239 164 252 195 228 218 218 251 191 266 178 310 151 344 130 315 108 302 104 270 77 251 84 218 58 195 67 161 46 139 65 109 58 78 87 65 91 35Z" fill="currentColor" fillOpacity=".08" stroke="currentColor" strokeWidth="3" />
                <path d="M112 182 127 174 141 184 135 198 119 201 108 192Z" fill="currentColor" />
                <circle cx="125" cy="188" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="146" y="185" fill="currentColor" fontSize="13" fontWeight="600">Nagpur</text>
                <text x="146" y="202" fill="currentColor" fontSize="11">Additional Butibori</text>
              </svg>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-3">
              {[
                "India solar demand",
                "Domestic manufacturing",
                "Cell & module expansion",
                "Domestic wafer requirement",
                "Upstream manufacturing opportunity",
                "PowerIn Urja",
              ].map((item, i, items) => (
                <div key={item} className="flex items-center gap-3">
                  <span className={`h-3 w-3 shrink-0 ${i === items.length - 1 ? "bg-accent" : "border border-accent"}`} />
                  <div className={`flex-1 border-b py-3 ${i === items.length - 1 ? "border-accent" : "border-border"}`}>
                    <span className={i === items.length - 1 ? "font-semibold text-accent" : "text-sm"}>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionLabel>People, vision and mission</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <Card>
              <img src={rajBasu} alt="Rajdeep Basu, Founder and Executive Chairman" className="aspect-[4/5] w-full object-cover" />
              <p className="eyebrow mt-6 text-accent">Team</p>
              <h3 className="mt-3 text-2xl">Operators who have delivered.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {TEAM.slice(0, 3).map((member) => `${member.name} · ${member.role}`).join(" | ")}
              </p>
              <Link to="/team" className="mt-6 text-sm font-semibold text-accent hover:underline">
                View the team →
              </Link>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card>
              <p className="eyebrow text-accent">Founder's Vision & Mission</p>
              <h3 className="mt-6 text-2xl">Build capability where India’s future depends on it.</h3>
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
                  <div key={kpi.label} className="flex items-baseline justify-between gap-4 border-t border-border pt-3">
                    <span className="text-sm text-muted-foreground">{kpi.label}</span>
                    <span className="num text-lg">{kpi.prefix}{kpi.value}{kpi.suffix}</span>
                  </div>
                ))}
              </div>
              <Link to="/investor-relations" className="mt-6 text-sm font-semibold text-accent hover:underline">
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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {HOME_LINKS.map(([title, body, to], i) => (
            <Reveal key={title} delay={i * 60}>
              <Link
                to={to}
                className="group block border border-border bg-background p-7 transition-colors hover:border-accent"
              >
                <p className="eyebrow text-accent">0{i + 1}</p>
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
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
