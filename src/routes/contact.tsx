import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site-data";
import { PageHead, Reveal, Section, SectionLabel } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | PowerIn Urja" },
      {
        name: "description",
        content:
          "Connect with PowerIn Urja on strategic partnerships, technology, manufacturing, investment and the PowerIn Integrated Manufacturing Campus.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHead
        eyebrow="06 · Contact Us"
        title="Partner with us in"
        highlight="revolutionising critical supply chains."
        lead="Engage with PowerIn Urja on strategic partnerships, technology, manufacturing, investment and the PowerIn Integrated Manufacturing Campus."
      />

      <Section className="pt-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Start a conversation</SectionLabel>
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.02]">
              Access to emerging technologies starts with the right industrial platform.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              PowerIn Urja is building partnerships across manufacturing, technology, financing,
              supply and offtake as the campus moves from Phase I into its wider platform roadmap.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Email the team
              </a>
              <a
                href={CONTACT.phoneHref}
                className="border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Call {CONTACT.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border border-border bg-surface p-8">
              <p className="eyebrow">PowerIn Urja India Private Limited</p>
              <h2 className="mt-5 text-2xl">Nagpur, Maharashtra</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                MIDC Additional Butibori
                <br />
                PowerIn Integrated Manufacturing Campus
              </p>
              <hr className="rule my-7" />
              <a className="block text-sm hover:text-accent" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
              <a className="mt-3 block text-sm hover:text-accent" href={CONTACT.phoneHref}>
                {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionLabel>Continue exploring</SectionLabel>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          <Link to="/project" className="text-accent hover:underline">Explore the project →</Link>
          <Link to="/team" className="text-accent hover:underline">Meet the team →</Link>
          <Link to="/investor-relations" className="text-accent hover:underline">Investor relations →</Link>
        </div>
      </Section>
    </>
  );
}