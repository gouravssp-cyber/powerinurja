import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { ROADMAP } from "@/lib/site-data";
import solarPanel from "@/assets/about.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | PowerIn Urja" },
      {
        name: "description",
        content:
          "PowerIn Urja is developing the PowerIn Integrated Manufacturing Campus across 300+ planned acres at MIDC Additional Butibori, Nagpur — a platform, not a single plant.",
      },
      { property: "og:title", content: "About Us | PowerIn Urja" },
      {
        property: "og:description",
        content:
          "A diversified manufacturing campus focused on energy-transition materials, devices and ecosystem infrastructure.",
      },
    ],
  }),
  component: About,
});

const PILLS = [
  "Solar critical materials",
  "Semiconductor materials",
  "Energy storage",
  "Hydrogen devices",
  "Photonics",
  "Mechatronics",
];

function About() {
  return (
    <>
      <PageHead
        eyebrow="01 · About Us"
        title="PowerIn Urja is being built as a"
        highlight="platform, not a single plant."
        lead="A diversified manufacturing campus focused on energy-transition materials, devices and ecosystem infrastructure."
      />

      <Section className="pt-4">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)]">Integrated by design.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              PowerIn Urja India Private Limited (PIU) is developing the PowerIn Integrated
              Manufacturing Campus (PIMC) at MIDC Additional Butibori, Nagpur, Maharashtra. The
              wider campus is planned across 300+ acres, with Phase I focused on advanced solar
              ingot and wafer manufacturing.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The platform is conceived to span a value chain from hyper-pure polysilicon and solar
              ingots / wafers through semiconductor materials and devices, energy storage,
              hydrogen-based devices, photonics, mechatronics and selected ancillaries.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {PILLS.map((p) => (
                <span
                  key={p}
                  className="border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={100}>
            <div className="flex justify-center p-10">
              <img
                src={solarPanel}
                alt="Solar panel from the PowerIn Urja corporate presentation"
                className="max-h-[420px] w-auto"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionLabel>Evolution roadmap</SectionLabel>
        <div className="grid gap-px bg-border md:grid-cols-4">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.period} delay={i * 90} className="bg-background p-7">
              <p className="num text-sm text-accent">{r.period}</p>
              <h3 className="mt-5 text-xl">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
