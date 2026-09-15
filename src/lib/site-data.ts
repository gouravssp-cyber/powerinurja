// Every figure and claim below is drawn from the supplied PowerIn Urja source
// materials (Investment Memorandum vf1 July 2026, corporate presentation,
// PIUPL DPR-E 16 Jul 2026, FDI Eligibility Note v1) via the client demo site.

export const NAV = [
  { to: "/", label: "Homepage" },
  { to: "/about", label: "About Us" },
  { to: "/project", label: "Project" },
  { to: "/team", label: "Team" },
  { to: "/vision", label: "Founder's Vision & Mission" },
  { to: "/investor-relations", label: "Investor Relations" },  
  { to: "/contact", label: "Contact Us" },
] as const;

export const CONTACT = {
  email: "",
  phone: "+91 99028 19166",
  phoneHref: "tel:+919902819166",
};

export const ROADMAP = [
  {
    period: "2023–24",
    title: "Concept → Campus",
    body: "Company formed; PIMC concept developed; state / location, technology and OEM partners selected; government approvals and incentives pursued.",
  },
  {
    period: "2025–27",
    title: "Approvals → Financial Close",
    body: "Government approvals and incentive framework progressed; equity commitments and strategic supply / offtake arrangements established; Phase I implementation underway.",
  },
  {
    period: "2028–30",
    title: "Scale → Semiconductor",
    body: "Phase II expands solar ingot & wafer capacity and introduces semiconductor MiniFAB capability, expanded energy storage and next-generation solar technology.",
  },
  {
    period: "2031–33",
    title: "Platform → Ecosystem",
    body: "Further expansion of ingot / wafering, solar cell capability and additional product lines based on business case and technology readiness.",
  },
];

export const TEAM = [
  {
    name: "Rajdeep Basu",
    role: "Founder & Executive Chairman",
    bio: "Negotiated 2 GW solar supply-chain agreements with GE; secured US$50 Mn equity from EFS (GE Capital) and CAD146 Mn from Invest Québec; led OEM negotiations for a 1.5 GW US cell & module facility with US$119 Mn incentives; invested in and managed 700+ rooftop and utility-scale solar projects.",
    photo: "raj-basu",
  },
  {
    name: "Ramesh Nair",
    role: "MD Designate",
    bio: "Former CEO, Adani Solar; former CEO, Avaada Group, BALCO and Sterlite. Independent Director, LG India. Nominee Director, Norfund and British International Investment.",
  },
  {
    name: "Dr. Puneet Gupta",
    role: "CEO Designate",
    bio: "Joint President, Adani Mundra Solar — India's only operational ingot & wafer facility. Directly involved in establishing GCL's FBR polysilicon plant in China and the sale of MEMC assets to Samsung; 20+ years across the solar materials value chain.",
  },
  {
    name: "Rajiv Kapahi, FCA",
    role: "COO Designate",
    bio: "35+ years of Board and CXO-level leadership across technology, manufacturing, financial services and healthcare, including E&Y, Ricoh Japan, Gillette, Owens Illinois, Max Healthcare, Dell, Prudential Financial and Boston Scientific.",
  },
  {
    name: "M.C. Sashi Kumar",
    role: "Director · Corporate Affairs",
    bio: "Led fund syndication of ~₹5,000 Cr for Bangalore Metro Rail Corporation and the Bangalore International Airport raise; advised South Indian state governments and SEBs on large-scale mandates and debt restructuring.",
    photo: "sashi-kumar",
  },
  {
    name: "Ranjit Ghosh",
    role: "Director · Projects & Asset Management",
    bio: "Industrial plant delivery across Toyota Tsusho India, Honda India, Suzuki & Futuba and AISIN Corporation.",
  },
  {
    name: "Dr. Jaijit Bhattacharya",
    role: "Director & Board Member",
    bio: "Key role negotiating incentives for the US$1.8 Bn Kia Motors India greenfield facility. Founder of the Centre for Digital Economy Policy Research and co-author of the Government of India's Start-up India policy.",
  },
  {
    name: "Ben Krause",
    role: "Director · Technical Services",
    bio: "Technology selection, OEM negotiations and plant design for large-scale solar manufacturing, including a 1.5 GW US cell & module facility and a 6,000 TPA hyper-pure polysilicon plant; former US military nuclear-operations / polysilicon professional.",
  },
  {
    name: "Graham Fennell",
    role: "Financial Controller",
    bio: "Finance leadership role within the initial PowerIn Urja team.",
    photo: "graham-fennell",
  },
  {
    name: "Jalpesh Mehta",
    role: "Advisor · Finance",
    bio: "Specialist finance advisory role within the initial PowerIn Urja team.",
  },
  {
    name: "Kevin Stratton",
    role: "Advisor · Insurance",
    bio: "Insurance advisory role supporting risk architecture for the project.",
  },
];

export const TRACK_RECORD = [
  "US$1.8 Bn Kia Motors India greenfield facility",
  "2 GW solar supply-chain agreements with GE",
  "₹1,200 Cr + ₹500 Cr Honda India plant programme",
  "₹600 Cr Toyota Tsusho India campus",
  "₹5,000 Cr Bangalore Metro fund syndication",
  "US$119 Mn federal & state incentives for a 1.5 GW US project",
  "6,000 TPA hyper-pure polysilicon re-engineering plan",
  "Adani Mundra Solar ingot & wafer plant leadership",
];

export const KPIS = [
  { label: "Project IRR", value: 23.91, suffix: "%", note: "With Maharashtra incentives", decimals: 2 },
  { label: "Equity IRR", value: 41.38, suffix: "%", note: "With incentives · phased drawdown", decimals: 2 },
  { label: "Min. Gross DSCR", value: 2.29, suffix: "×", note: "FY30 · average 3.89×", decimals: 2 },
  { label: "Total Project Cost", value: 4793, prefix: "₹", suffix: " Cr", note: "US$504.5 Mn", decimals: 0 },
  { label: "Independent Valuation", value: 699.3, prefix: "US$", suffix: " Mn", note: "Pre-IPO, pre-incentive", decimals: 1 },
  { label: "Phase I Equity Raise", value: 1643, prefix: "₹", suffix: " Cr", note: "US$172.9 Mn", decimals: 0 },
];

export const PROJECTION_YEARS = [
  "FY29",
  "FY30",
  "FY31",
  "FY32",
  "FY33",
  "FY34",
  "FY35",
  "FY36",
  "FY37",
  "FY38",
  "FY40",
];

export const PROJECTION = {
  revenue: [824.3, 2033.3, 2618.0, 2904.0, 3049.2, 3201.7, 3361.8, 3529.8, 3706.3, 3891.6, 4290.5],
  pbdit: [533.8, 1310.8, 1697.8, 1925.5, 2017.6, 2114.3, 2216.0, 2323.1, 2435.8, 2554.4, 2347.0],
  pat: [163.3, 507.3, 812.1, 1003.5, 1102.7, 1204.1, 1306.7, 1413.4, 1523.3, 1637.0, 1504.5],
  dscr: ["2.96×", "2.29×", "3.04×", "2.49×", "2.77×", "3.08×", "3.42×", "3.84×", "4.32×", "4.86×", "Debt-free"],
};

export const DSCR_SERIES = [
  { year: "FY29", value: 2.96 },
  { year: "FY30", value: 2.29 },
  { year: "FY31", value: 3.04 },
  { year: "FY32", value: 2.49 },
  { year: "FY33", value: 2.77 },
  { year: "FY34", value: 3.08 },
  { year: "FY35", value: 3.42 },
  { year: "FY36", value: 3.84 },
  { year: "FY37", value: 4.32 },
  { year: "FY38", value: 4.86 },
];

export const PROJECT_COST = [
  { label: "Plant & machinery", value: 2257 },
  { label: "Electricals & installation", value: 908 },
  { label: "Civil / shed / site development", value: 783 },
  { label: "Other hard + soft costs", value: 845 },
];

export const RETURN_MATRIX = [
  ["US$75 Mn", "50%", "US$350 Mn", "17.6%", "4.05×", "6.08×"],
  ["US$100 Mn", "50%", "US$350 Mn", "22.2%", "3.82×", "5.74×"],
  ["US$75 Mn", "40%", "US$420 Mn", "15.2%", "3.48×", "5.22×"],
  ["US$100 Mn", "40%", "US$420 Mn", "19.2%", "3.31×", "4.96×"],
];

export const INCENTIVES = [
  "110% FCI fiscal incentives",
  "30% capital subsidy",
  "100% gross SGST refund on finished-product sales",
  "100% SGST reimbursement on plant & machinery",
  "4% interest subsidy",
  "₹3 / unit power tariff discount + open-access waiver",
  "30% technical knowhow subsidy, capped at ₹2,000 Cr",
  "50% employer EPF subsidy",
  "100% stamp-duty exemption",
  "100% electricity-duty exemption",
  "MIDC land at pass-through cost",
];

export const VALUATION = [
  { period: "2026 · Independent assessment", value: "US$699 Mn", weight: 9 },
  { period: "2030 · Conservative Phase I exit / partial exit", value: "US$2.4 Bn", weight: 30 },
  { period: "2032+ · Projected post-Phase II listing scenario", value: "US$8.0 Bn", weight: 100 },
];

export const RISKS = [
  {
    title: "Debt service",
    body: "Minimum gross DSCR is projected at 2.29× during the ramp-up year, with average DSCR of 3.89× over the loan life.",
  },
  {
    title: "Equity funding",
    body: "US$100 Mn of Phase I equity is identified as committed in term sheets, against a total Phase I equity requirement of US$172.9 Mn.",
  },
  {
    title: "Raw material",
    body: "A five-year non-Chinese polysilicon supply agreement is described with United Solar Polysilicon, backed by the Government of Oman / IFC.",
  },
  {
    title: "Execution",
    body: "An operational partner is described as the world's second-largest ingot & wafer OEM, with an 8-month CTO-led training programme and knowledge transfer.",
  },
];

export const VISION_PILLARS = [
  {
    n: "01",
    title: "Economic Strategy & Currency Stability",
    body: "Promote high-value, high-margin manufacturing in semiconductors, green technology and advanced machinery; deepen domestic capital markets; strengthen the Rupee through local-currency trade and disciplined fiscal policy; and formalize the economy through broader tax participation and access to micro-equity.",
  },
  {
    n: "02",
    title: "Human Capital: Education & Health",
    body: "Shift education toward critical thinking, STEM and technical and vocational learning; scale national R&D intensity toward 3–4% of GDP; and emphasize preventive healthcare, sanitation, clean water, primary care and nutritional security.",
  },
  {
    n: "03",
    title: "Environmental Quality & Modern Urbanization",
    body: "Modernize cities through transit-oriented development, green building standards, intelligent waste systems and resilient utilities; accelerate clean transport, wastewater treatment and regenerative agriculture; and strengthen food standards and cold-chain logistics.",
  },
  {
    n: "04",
    title: "Social Cohesion, Inclusivity & Discipline",
    body: "Bridge inequality through progressive taxation, broad access to digital public infrastructure and asset creation for rural and underprivileged populations, while reinforcing rule of law, civic responsibility and community engagement.",
  },
  {
    n: "05",
    title: "Technological & Military Sovereignty",
    body: "Build self-reliance in strategic technologies and defence, including autonomous systems, AI-enabled electronic warfare, cyber defence and space capabilities, alongside domestic supply chains for critical minerals, advanced computing, biotech and energy storage.",
  },
];

export const IMPLEMENTATION = [
  {
    title: "Economic reform",
    body: "Analyse reforms needed to materially lift per-capita GDP and strengthen long-term investment capacity.",
  },
  {
    title: "R&D acceleration",
    body: "Develop a pathway toward significantly higher national research intensity, including a 5% of GDP long-term objective.",
  },
  {
    title: "21st-century cities",
    body: "Outline practical urban-planning blueprints built around cleaner mobility, better infrastructure and stronger environmental outcomes.",
  },
];

export const IR_DISCLAIMER =
  "This Investor Relations page incorporates the PowerIn Urja Investment Memorandum (vf1, July 2026), the PowerIn Urja corporate presentation, the PIUPL Detailed Project Report E (16 July 2026) and the FDI Eligibility Note (v1). The underlying materials are confidential / internal discussion documents, contain forward-looking statements and projections, and state that prospective investors should conduct their own independent diligence. The FDI note is a regulatory-research summary and is not a substitute for advice from qualified Indian legal counsel or an Authorised Dealer bank.";

export const VALUE_CHAIN = [
  { name: "Polysilicon", description: "Semiconductor-grade raw material used as the feedstock for crystal growth.", piu: false },
  { name: "Ingot", description: "Monocrystalline silicon crystal produced through Czochralski growth; a PowerIn Urja operating stage.", piu: true },
  { name: "Wafer", description: "Diamond-wire-sawn silicon substrate supplied onward to solar cell and module manufacturers; a PowerIn Urja operating stage.", piu: true },
  { name: "Cell", description: "Downstream conversion of a wafer into a photovoltaic cell.", piu: false },
  { name: "Module", description: "Assembly of cells into a finished solar module.", piu: false },
  { name: "Solar Project", description: "Deployment of modules in utility-scale and distributed solar projects.", piu: false },
  { name: "Electricity", description: "Clean electricity generated from installed solar capacity.", piu: false },
] as const;

export const POLICY_TAILWINDS = [
  { title: "ALMM List-III", body: "Domestic wafer sourcing requirement from June 2028, subject to applicable rules." },
  { title: "PLI", body: "Production-Linked Incentive support for high-efficiency solar PV modules through MNRE schemes." },
  { title: "Maharashtra Incentives", body: "Project-specific industrial incentives subject to applicable scheme and MoU conditions." },
  { title: "India Semiconductor Mission", body: "Future strategic optionality; not currently part of Phase I." },
];

export const PROJECT_PHASES = [
  { n: "01", title: "Phase I", body: "6 GW, N-Type Ingot + Wafer, In execution", active: true },
  { n: "02", title: "Phase II", body: "Integrated Solar Manufacturing, Strategic direction / subject to execution" },
  { n: "03", title: "Phase III", body: "Advanced Materials / Semiconductor Optionality, Future optionality" },
];

export const EXECUTION_DISCIPLINES = [
  { title: "Technology", body: "Yield, quality, efficiency" },
  { title: "Project Execution", body: "Construction, equipment, commissioning" },
  { title: "Capital", body: "Equity, debt, working capital" },
  { title: "Supply", body: "Competitive polysilicon availability" },
  { title: "Customers", body: "Qualification and long-term offtake" },
  { title: "Policy", body: "ALMM / PLI / state incentives" },
];

export const INVESTOR_ECOSYSTEM = [
  { title: "United Solar Polysilicon", location: "Oman / Government of Oman / IFC-backed", amount: "US$20 Mn", status: "Committed" },
  { title: "Greenback Capital", location: "Dubai / UAE", amount: "US$80 Mn with option to US$100 Mn", status: "Committed" },
  { title: "Potential New Anchor / Co-investor", location: "To be finalised", amount: "US$30–100 Mn", status: "Contemplated — under discussion, not yet closed", pending: true },
] as const;

export const PROCESS_FLOW = [
  "Polysilicon",
  "Melting",
  "Crystal Growth",
  "Ingot",
  "Squaring",
  "Diamond-Wire Slicing",
  "Wafer",
] as const;

export const ECONOMICS_KPIS = [
  { label: "Total Project Cost", value: "₹4,793 Cr", note: "US$504.5 Mn" },
  { label: "Phase I Equity", value: "₹1,643 Cr", note: "US$172.9 Mn" },
  { label: "Approx. Domestic Term Loan", value: "₹3,150 Cr", note: "Domestic rupee debt" },
  { label: "Debt / Equity", value: "1.917:1", note: "Phase I financing structure" },
  { label: "Referenced Third-Party Valuation", value: "US$699.3 Mn", note: "Pre-IPO, pre-incentive" },
  { label: "Minimum Gross DSCR", value: "2.29×", note: "FY30; average 3.89×" },
] as const;

export const FDI_PROCESS = [
  "Investor",
  "Beneficial Ownership Screening",
  "Eligible Instrument",
  "Fair Value Certification",
  "Share Allotment",
  "FC-GPR Reporting",
] as const;
