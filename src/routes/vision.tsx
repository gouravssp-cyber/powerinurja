import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHead, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { IMPLEMENTATION, VISION_PILLARS } from "@/lib/site-data";
import rajBasu from "@/assets/raj-basu.png";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Founder's Vision & Mission | PowerIn Urja" },
      {
        name: "description",
        content:
          "The Founder's Vision & Mission for a more capable, self-reliant and technologically sovereign India.",
      },
    ],
  }),
  component: Vision,
});

function Vision() {
  return (
    <>
      <PageHead
        eyebrow="04 · Founder's Vision & Mission"
        title="Technology sovereignty is built through"
        highlight="long-term national capability."
        lead="PowerIn Urja's industrial platform sits within a wider vision for economic strength, human development, environmental quality and strategic self-reliance."
      />

      <Section className="pt-4">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <img src={rajBasu} alt="Rajdeep Basu, Founder and Executive Chairman" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal className="lg:col-span-5">
            <SectionLabel>Mission</SectionLabel>
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.02]">
              Make critical capability an Indian strength.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={90}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The mission is to create durable industrial capacity in the materials and technologies
              that shape India's energy transition, digital economy and national security.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              That requires patient capital, excellent execution, stronger research institutions,
              skilled people and infrastructure that lets the next generation of Indian companies
              build at scale.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionLabel>Five pillars</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2">
          {VISION_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.n} delay={i * 70}>
              <Card>
                <span className="num text-sm text-accent">{pillar.n}</span>
                <h2 className="mt-6 text-2xl">{pillar.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{pillar.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionLabel>From principle to action</SectionLabel>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {IMPLEMENTATION.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="bg-background p-7">
              <span className="num text-sm text-accent">0{i + 1}</span>
              <h2 className="mt-5 text-xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}