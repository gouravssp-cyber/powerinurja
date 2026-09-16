const ENTERPRISE_VALUE_DATA = [
  { label: "10x Conservative", value: "2,033", height: "71%" },
  { label: "12x Base", value: "2,440", height: "86%" },
  { label: "14x Upside", value: "2,847", height: "100%" },
];

const MOIC_DATA = [
  { label: "10x Conservative", value: "5.1", height: "70%" },
  { label: "12x Base", value: "6.2", height: "85%" },
  { label: "14x Upside", value: "7.3", height: "100%" },
];

const KPI_DATA = [
  ["US$2,033–2,850 Mn", "FY32 Enterprise value at 10–14x"],
  ["5.0x–7.3x", "MOIC on a US$45 Mn ticket"],
  ["≈12.0x", "EV/EBITDA median"],
] as const;

type BarDatum = {
  label: string;
  value: string;
  height: string;
};

function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto h-1 w-36 bg-[#3218C8]" />
      <p className="mt-2 font-display text-[1.15rem] font-bold tracking-[-0.02em] text-foreground sm:text-[1.35rem]">
        {value}
      </p>
      <p className="mt-1 text-[0.72rem] font-medium text-muted-foreground sm:text-[0.8rem]">{label}</p>
    </div>
  );
}

function BarChart({ title, legend, color, data }: { title: string; legend: string; color: string; data: BarDatum[] }) {
  return (
    <figure aria-label={title}>
      <figcaption className="text-center text-[0.7rem] font-bold text-foreground sm:text-[0.78rem]">
        {title}
      </figcaption>
      <div className="mt-3 flex items-center justify-center gap-2 text-[0.65rem] text-muted-foreground">
        <span className="h-2 w-2" style={{ backgroundColor: color }} aria-hidden="true" />
        <span>{legend}</span>
      </div>
      <div className="mt-3 grid grid-cols-3 items-end gap-4 border-b border-border px-2 pt-3 sm:gap-8 sm:px-4" style={{ height: "10.5rem" }}>
        {data.map((item) => (
          <div key={item.label} className="flex h-full min-w-0 flex-col items-center justify-end">
            <span className="mb-1 text-[0.64rem] font-bold text-foreground">{item.value}</span>
            <div
              className="w-full max-w-[5.5rem] rounded-t-[2px]"
              style={{ height: item.height, backgroundColor: color }}
              aria-label={`${item.label}: ${item.value}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[0.56rem] font-semibold leading-tight text-muted-foreground sm:text-[0.65rem]">
        {data.map((item) => <span key={item.label}>{item.label}</span>)}
      </div>
    </figure>
  );
}

export function ExitMultipleCard() {
  return (
    <article className="mx-auto w-full max-w-[900px] border border-border border-t-2 border-t-accent bg-surface px-5 py-6 text-foreground sm:px-8 sm:py-8">
      <header>
        <h2 className="font-display text-[1.65rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[1.9rem]">
          Exit Multiple Sensitivity and Investor MOIC
        </h2>
        <div className="mt-3 flex items-stretch gap-4">
          <span className="w-1 shrink-0 bg-[#3218C8]" aria-hidden="true" />
          <p className="text-[0.78rem] italic leading-relaxed text-muted-foreground sm:text-[0.9rem]">
            FY32 Proj. EBITDA of US$ 225 Mn; at 10–14x listed peer multiples
          </p>
        </div>
      </header>

      <section className="mt-7 grid gap-6 sm:grid-cols-3 sm:gap-4" aria-label="Key exit multiple metrics">
        {KPI_DATA.map(([value, label]) => <KPI key={label} value={value} label={label} />)}
      </section>

      <section className="mt-9 grid gap-10 md:grid-cols-2" aria-label="Exit multiple charts">
        <BarChart
          title="Enterprise Value at Exit (US$ Mn)"
          legend="Enterprise Value"
          color="#3218C8"
          data={ENTERPRISE_VALUE_DATA}
        />
        <BarChart
          title="Investor MOIC on US$45 Mn Ticket (x)"
          legend="MOIC"
          color="#16C6A3"
          data={MOIC_DATA}
        />
      </section>

      <p className="mt-6 text-[0.68rem] leading-relaxed text-muted-foreground sm:text-[0.76rem]">
        <strong className="text-[#3218C8]">Peer EV/EBITDA — basis for the 10–14x range:</strong>{" "}
        First Solar 10–13x · Waaree 11.0x · Premier 19.4x · Jinko Solar 9.6x · LONGi 23x
      </p>

      <div className="mt-3 bg-[#16C6A3] px-3 py-2 text-[0.75rem] font-bold text-white sm:text-[0.85rem]">
        Conservative case still provides 5.1x MOIC at a multiple of 10x
      </div>
    </article>
  );
}
