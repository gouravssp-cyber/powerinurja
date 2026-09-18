import { createFileRoute } from "@tanstack/react-router";
import { Card, Initials, PageHead, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { TEAM, TRACK_RECORD } from "@/lib/site-data";
const benKrause = "/ben-krause.png";
const grahamFennell = "/graham-fennell.jpeg";
const jaijitBhattacharya = "/jaijit-bhattacharya.png";
const jalpeshMehta = "/jalpesh-mehta.png";
const kevinStratton = "/kevin-stratton.png";
const puneetGupta = "/puneet-gupta.png";
const rajBasu = "/raj-basu.png";
const rajivKapahi = "/rajiv-kapahi.png";
const rameshNair = "/ramesh-nair.png";
const ranjitGhosh = "/ranjit-ghosh.png";
const sashiKumar = "/sashi-kumar.jpeg";
const counsellingPsychology = "/Counselling-Psychology.png";
const udayMahurkar = "/Uday-Mahurkar.png";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team | PowerIn Urja" },
      {
        name: "description",
        content:
          "The PowerIn Urja team brings experience across solar manufacturing, infrastructure, finance, technology and industrial project delivery.",
      },
    ],
  }),
  component: Team,
});

const PHOTOS: Record<string, string> = {
  "Rajdeep Basu": rajBasu,
  "Ramesh Nair": rameshNair,
  "Dr. Puneet Gupta": puneetGupta,
  "Rajiv Kapahi, FCA": rajivKapahi,
  "M.C. Sashi Kumar": sashiKumar,
  "Ranjit Ghosh": ranjitGhosh,
  "Dr. Jaijit Bhattacharya": jaijitBhattacharya,
  "Ben Krause": benKrause,
  "Graham Fennell": grahamFennell,
  "Jalpesh Mehta": jalpeshMehta,
  "Kevin Stratton": kevinStratton,
  "Shri Uday Mahurkar": udayMahurkar,
  "Smt. Nirvana Basu": counsellingPsychology,
};

function Team() {
  return (
    <>
      <PageHead
        eyebrow="03 · Team"
        title="Built by people who have delivered"
        highlight="complex industrial platforms."
        lead="PowerIn Urja brings together operating, technical, financial and public-policy experience across the energy and manufacturing value chain."
      />

      <Section className="pt-4">
        <SectionLabel>PowerIn Urja leadership</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 45}>
              <Card>
                {PHOTOS[member.name] ? (
                  <img src={PHOTOS[member.name]} alt={member.name} className="aspect-[4/5] w-full object-cover" />
                ) : (
                  <Initials name={member.name} />
                )}
                <p className="eyebrow mt-6 text-accent">{member.role}</p>
                <h2 className="mt-3 text-2xl">{member.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                {"qualifications" in member ? (
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="eyebrow text-foreground">Qualifications</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {member.qualifications.map((qualification) => (
                        <li key={qualification}>{qualification}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionLabel>Selected projects and transactions</SectionLabel>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {TRACK_RECORD.map((item, i) => (
            <Reveal key={item} delay={i * 45} className="bg-background p-6">
              <span className="num text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-5 text-sm leading-relaxed">{item}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}