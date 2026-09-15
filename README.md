# PowerIn Urja Website

Website Build Prompt — PowerIn Urja

Project

Build a professional, investor-grade corporate website for PowerIn Urja (PowerIn Urja India Private Limited), an integrated solar and semiconductor infrastructure company developing the PowerIn Integrated Manufacturing Campus (PIMC) at MIDC Additional Butibori, Nagpur, Maharashtra.

Full content, structure, team bios, financials, and copy are in the attached demo website (HTML) and the attached FDI Eligibility Note PDF — use these as the authoritative source of truth for every fact, figure, and name. Do not invent numbers or claims not present in the source material.

Tagline / positioning (use prominently in the hero and section framing)

Primary line: "India. Energy. National Security."

Supporting phrases to weave through the Project/About sections: "Semiconductor Pilot Line", "Hyper-Pure Poly"

Overall narrative arc: energy security → technology sovereignty → national security, via domestic upstream manufacturing (ingots, wafers, and eventually semiconductor-grade materials).

Stack & delivery

Core PHP (no framework), MySQL/PDO if any dynamic content is needed (e.g. contact form), otherwise static PHP includes for header/footer/nav across pages

Tailwind CSS (CDN or compiled — confirm build step), Alpine.js for interactivity (tab nav, dark/light toggle, accordions, counters)

AOS for scroll-reveal animation, GLightbox if a masterplan/gallery lightbox is needed, Font Awesome for icons

Deliver as an XAMPP-ready project structure (organized /assets, /includes, /documents for the two PDFs/DPR)

Keep the existing single-page-with-tabs IA (Homepage, About Us, Project, Team, Founder's Vision & Mission, Investor Relations, Contact Us) unless told otherwise

Theme system: dark/light toggle

Implement a persistent (localStorage-free is fine since PHP static — use a simple JS class toggle on <html> or <body>, default to system preference or light) dark/light mode switch, accessible from the header

Light mode: background whites/soft off-whites, text in a dark charcoal/navy, section-dividing <hr> elements in blue (pull the exact blue from the client's logo color palette — confirm hex codes when the logo is shared)

Dark mode: deep charcoal/near-black background, light text, section-dividing <hr> elements in white

All brand accent colors (buttons, KPI highlights, active nav state, phase-card active states) should derive from the logo's color palette in both themes — request the logo/brand palette as an input asset before finalizing tokens; use CSS custom properties (--color-accent, --color-divider, --color-bg, --color-surface, --color-text) so both themes swap cleanly

Charts, KPI cards, and the donut/DSCR visualizations in Investor Relations must also re-theme correctly (don't hardcode dark-only or light-only chart colors)

Design direction (apply core UI/UX principles explicitly)

This is a serious infrastructure/investment brand — favor a Swiss/editorial, high-contrast, confident register over anything playful or trendy. Concretely:

Hierarchy & emphasis: one dominant headline per section, KPI numbers and the tagline get the largest type weight on the page; everything else recedes

Contrast: strong light/dark contrast in both themes, and clear size/weight contrast between eyebrow labels, headlines, and body copy

Grid & alignment: consistent modular grid (12-col desktop), strict alignment of card grids, KPI grids, and the team grid — no ad-hoc spacing

Proximity & grouping: keep related data grouped (e.g. all DSCR-related figures together, all incentive line items together) with clear whitespace separating unrelated blocks

Repetition & consistency: one card pattern reused for team members, one card pattern for phase cards, one KPI-card pattern reused throughout Investor Relations — don't invent a new component per section

White space: generous section padding; this is a document-dense site (financials, tables, long bios) so whitespace is what keeps it from feeling like a brochure dump

Balance: alternate text-left/image-right and text-right/image-left across About/Project sections to avoid monotony while staying aligned to the grid

Scale & proportion: hero headline and KPI figures should be visibly the largest elements on the page; use scale to signal what matters (IRR, valuation, DSCR)

Suggested layout styles to draw from: editorial layout for About/Vision, dashboard-style card/KPI grid for Investor Relations, bento-style card grid for the "Why It Matters" / Atmanirbhar Bharat sections

Typography: one strong display serif or high-contrast grotesque for headlines, one clean grotesque/sans for body and data tables/KPIs — avoid more than 2 type families

Subtle, purposeful motion only: on-scroll fade/slide-in (AOS), animated number count-up for KPIs, no gimmicky parallax or heavy 3D — this is an investor-facing site, restraint signals credibility

Content fidelity requirements

Reproduce all sections from the demo HTML: Homepage, About Us (with the 2023–24 → 2031–33 roadmap timeline), Project (Phase I specs, masterplan gallery, Atmanirbhar Bharat cards, three-phase campus), Team (all listed team members and their bios/track record), Founder's Vision & Mission (including the National Vision pillars and Implementation Agenda), Investor Relations (KPI grid, revenue/DSCR charts, project cost donut, means of finance, anchor investor return matrix, financial projection table, Maharashtra incentives, valuation upside, risk architecture, document library linking the FDI note and DPR), Contact Us

Investor Relations stays the sole home for financial figures, per the existing footer note — keep that convention

Keep the confidentiality/disclaimer language on the Investor Relations tab intact (source note referencing the Investment Memorandum, DPR, and FDI Eligibility Note)

Contact details, email, and phone as already listed on the Contact page

Inputs I will provide

This prompt

The current demo website (HTML/CSS/JS) as content and IA reference

The FDI Eligibility Note PDF (regulatory/legal content — summarize faithfully in the Investor Relations document library, don't reproduce it in full on-page)

The client's logo file — extract the exact brand color palette from it before finalizing the dark/light CSS variables

Any additional image assets (masterplan renders, team photos, hero imagery) referenced in the demo site's /assets folder

Deliverable

A production-ready, XAMPP-deployable PHP/Tailwind site matching the above, with a working dark/light toggle, using the logo-derived color palette, blue dividers in light mode and white dividers in dark mode, and every fact drawn only from the supplied source materials.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0a18a433-2b87-4e2d-8311-73967d4bdab6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
