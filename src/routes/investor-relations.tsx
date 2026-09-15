import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CountUp,
  Kpi,
  PageHead,
  Reveal,
  Section,
  SectionLabel,
} from "@/components/site/primitives";
import {
  INCENTIVES,
  ECONOMICS_KPIS,
  FDI_PROCESS,
  INVESTOR_ECOSYSTEM,
  IR_DISCLAIMER,
  KPIS,
  PROJECTION,
  PROJECTION_YEARS,
  PROJECT_COST,
  POLICY_TAILWINDS,
  RISKS,
  RETURN_MATRIX,
  VALUATION,
} from "@/lib/site-data";

export const Route = createFileRoute("/investor-relations")({
  head: () => ({
    meta: [
      { title: "Investor Relations | PowerIn Urja" },
      {
        name: "description",
        content:
          "Investor information for PowerIn Urja's PowerIn Integrated Manufacturing Campus, including Phase I financial indicators, incentives and key risks.",
      },
    ],
  }),
  component: InvestorRelations,
});

function InvestorRelations() {
  return (
    <>
      <PageHead
        eyebrow="05 · Investor Relations"
        title="Infrastructure for India's next"
        highlight="upstream manufacturing platform."
        lead="Phase I is a 6 GW N-Type ingot and wafer manufacturing platform at MIDC Additional Butibori, Nagpur, designed as the first stage of a broader integrated campus."
      />

      <Section className="pt-4">
        <SectionLabel>Selected indicators</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {KPIS.map((kpi, i) => (
            <Reveal key={kpi.label} delay={i * 60}>
              <Kpi label={kpi.label} note={kpi.note}>
                <CountUp
                  value={kpi.value}
                  decimals={kpi.decimals}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                />
              </Kpi>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionLabel>Phase I project economics</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {ECONOMICS_KPIS.map((kpi, i) => (
            <Reveal key={kpi.label} delay={i * 60}>
              <Kpi label={kpi.label} note={kpi.note}>{kpi.value}</Kpi>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 border border-border bg-surface p-7">
            <div className="flex h-5 overflow-hidden bg-surface-2" aria-label="65.7 percent debt and 34.3 percent equity">
              <div className="bg-accent" style={{ width: "65.7%" }} />
              <div className="bg-foreground" style={{ width: "34.3%" }} />
            </div>
            <div className="mt-4 flex flex-wrap justify-between gap-3 text-sm text-muted-foreground">
              <span><b className="text-accent">65.7%</b> debt · ₹3,150 Cr</span>
              <span><b className="text-foreground">34.3%</b> equity · ₹1,643 Cr</span>
            </div>
          </div>
        </Reveal>
        <p className="mt-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">
          Figures reflect Phase-I project cost and financing structure as referenced. PowerIn Urja
          does not present revenue, margin, or profitability projections not provided in source material.
        </p>
      </Section>

      <Section className="bg-surface-2">
        <SectionLabel>Capital and investor ecosystem</SectionLabel>
        <div className="grid gap-6 md:grid-cols-3">
          {INVESTOR_ECOSYSTEM.map((investor, i) => (
            <Reveal key={investor.title} delay={i * 80}>
              <Card className={investor.pending ? "border-dashed" : undefined}>
                <span className="eyebrow text-accent">{investor.status}</span>
                <h2 className="mt-5 text-xl">{investor.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{investor.location}</p>
                <p className="num mt-6 text-2xl">{investor.amount}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          Contemplated capital reflects a range under discussion and should not be read as a closed transaction.
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Phase I project cost</SectionLabel>
            <div className="space-y-3">
              {PROJECT_COST.map((item, i) => (
                <Reveal key={item.label} delay={i * 70}>
                  <div className="flex items-center justify-between border-b border-border py-4">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="num text-lg">₹{item.value.toLocaleString("en-IN")} Cr</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel>Valuation context</SectionLabel>
            <div className="space-y-4">
              {VALUATION.map((item, i) => (
                <Reveal key={item.period} delay={i * 80}>
                  <Card className="flex-row items-center justify-between gap-5">
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                    <span className="num whitespace-nowrap text-xl text-accent">{item.value}</span>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionLabel>Selected financial projection</SectionLabel>
        <div className="overflow-x-auto border border-border bg-surface">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead className="bg-inverse text-inverse-foreground">
              <tr>
                <th className="p-4 font-semibold">Particulars</th>
                {PROJECTION_YEARS.map((year) => (
                  <th key={year} className="p-4 font-semibold">{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Net Revenue (₹ Cr)", PROJECTION.revenue.map((value) => value.toLocaleString("en-IN", { minimumFractionDigits: 1 }))],
                ["PBDIT incl. incentives (₹ Cr)", PROJECTION.pbdit.map((value) => value.toLocaleString("en-IN", { minimumFractionDigits: 1 }))],
                ["PAT (₹ Cr)", PROJECTION.pat.map((value) => value.toLocaleString("en-IN", { minimumFractionDigits: 1 }))],
                ["Gross DSCR", PROJECTION.dscr],
              ].map(([label, values], rowIndex) => (
                <tr key={label as string} className={rowIndex % 2 ? "bg-surface-2" : undefined}>
                  <th className="whitespace-nowrap p-4 font-semibold">{label as string}</th>
                  {(values as string[]).map((value, i) => (
                    <td key={`${label}-${i}`} className="whitespace-nowrap p-4 text-muted-foreground">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Source-derived projections from the supplied July 2026 investment materials. They are
          illustrative, forward-looking and subject to independent diligence.
        </p>
      </Section>

      <Section>
        <SectionLabel>Anchor investor return matrix</SectionLabel>
        <div className="overflow-x-auto border border-border bg-surface">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-inverse text-inverse-foreground">
              <tr>
                {['Investment', 'Discount', 'Pre-money', 'Post-money stake', 'MOIC @ 8× EBITDA', 'MOIC @ 12× EBITDA'].map((heading) => (
                  <th key={heading} className="p-4 font-semibold">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RETURN_MATRIX.map((row, i) => (
                <tr key={`${row[0]}-${row[1]}-${i}`} className={i % 2 ? "bg-surface-2" : undefined}>
                  {row.map((value) => <td key={value} className="p-4 text-muted-foreground">{value}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-inverse text-inverse-foreground">
        <SectionLabel>Investment case</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["Capital structure", "Phase I equity requirement of ₹1,643 Cr / US$172.9 Mn against total project cost of ₹4,793 Cr / US$504.5 Mn."],
            ["Industrial support", "Maharashtra incentives include FCI reimbursement, capital subsidy, SGST support, interest subsidy and power-tariff benefits."],
            ["Strategic demand", "Domestic ingot and wafer manufacturing addresses a structurally import-dependent upstream solar node."],
            ["Platform optionality", "The campus roadmap extends into semiconductor MiniFAB, energy storage, hydrogen, photonics and mechatronics."],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 70}>
              <article className="border-t border-current/30 pt-6">
                <h2 className="text-xl">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Incentive framework</SectionLabel>
            <ul className="space-y-3">
              {INCENTIVES.map((incentive, i) => (
                <Reveal as="li" key={incentive} delay={i * 35} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{incentive}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel>Key risks to diligence</SectionLabel>
            <div className="space-y-4">
              {RISKS.map((risk, i) => (
                <Reveal key={risk.title} delay={i * 70}>
                  <Card>
                    <h2 className="text-xl">{risk.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{risk.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-2">
        <SectionLabel>FDI and regulatory context</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Manufacturing classification", "The supplied FDI note classifies PIU's ingot and wafer activity as manufacturing under Paragraph 5.2.5 of the Consolidated FDI Policy, rather than power generation."],
            ["Indicative route", "The note states that manufacturing is eligible for up to 100% FDI under the automatic route, subject to instrument, pricing, reporting and beneficial-ownership checks."],
            ["Compliance checkpoints", "The note highlights compulsorily convertible instruments where applicable, Rule 21 valuation, Form FC-GPR reporting through an AD bank, and investor ownership screening."],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 70}>
              <Card>
                <span className="num text-sm text-accent">0{i + 1}</span>
                <h2 className="mt-5 text-xl">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a className="text-accent hover:underline" href="https://dpiit.gov.in/foreign-direct-investment/foreign-direct-investment-policy" target="_blank" rel="noreferrer">
            DPIIT FDI policy reference ↗
          </a>
          <a className="text-accent hover:underline" href="https://www.rbi.org.in/Scripts/BS_FemaNotifications.aspx" target="_blank" rel="noreferrer">
            RBI FEMA notifications ↗
          </a>
        </div>
      </Section>

      <Section>
        <SectionLabel>Policy tailwinds</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {POLICY_TAILWINDS.map((policy, i) => (
            <Reveal key={policy.title} delay={i * 70}>
              <Card>
                <span className="num text-sm text-accent">0{i + 1}</span>
                <h2 className="mt-5 text-xl">{policy.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{policy.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          Policy frameworks and eligibility conditions are subject to applicable government rules and may change.
        </p>
      </Section>

      <Section>
        <SectionLabel>FDI / regulatory position</SectionLabel>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {[
            ["100%", "FDI permitted"],
            ["Automatic Route", "Manufacturing"],
            ["Para 5.2.5", "DPIIT FDI Policy"],
          ].map(([value, label], i) => (
            <Reveal key={value} delay={i * 70} className="bg-background p-7">
              <p className="num text-3xl text-accent">{value}</p>
              <p className="mt-3 text-sm text-muted-foreground">{label}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-7 max-w-4xl leading-relaxed text-muted-foreground">
          PIU's manufacturing activity qualifies for up to 100% FDI under the automatic route,
          subject to FEMA/NDI Rules, pricing, reporting and beneficial-ownership requirements.
        </p>
        <div className="mt-7 flex gap-2 overflow-x-auto pb-3">
          {FDI_PROCESS.map((step, i) => (
            <div key={step} className="flex shrink-0 items-center gap-2">
              <span className="border border-border px-4 py-3 text-sm">{step}</span>
              {i < FDI_PROCESS.length - 1 ? <span className="text-muted-foreground">→</span> : null}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Regulatory position based on the cited advisory note and subject to verification at financial close. This is not legal advice.
        </p>
      </Section>

      <Section className="pt-0">
        <p className="max-w-4xl border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          {IR_DISCLAIMER}
        </p>
      </Section>
    </>
  );
}