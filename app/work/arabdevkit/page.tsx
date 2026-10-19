export const metadata = {
  title: "ArabDevKit Case Study | Mohammed Al-Obaido",
  description: "ArabDevKit, open-source developer infrastructure for Arabic-first software, by Mohammed Al-Obaido.",
};

const systems = [
  ["Country registry", "A shared registry models 22 Arab markets with ISO codes, Arabic and English names, calling codes, locales and currency metadata."],
  ["Arabic text primitives", "Normalization and Arabic-Indic digit conversion make Arabic input handling a first-class engineering concern instead of an afterthought."],
  ["Phone and money", "Country-aware phone normalization and localized money formatting expose one consistent API across different markets."],
  ["IBAN support", "The toolkit validates ISO 13616 structure, country BBAN formats and MOD-97 checks for supported Arab markets without claiming unsupported rules."],
  ["Framework packages", "Core logic is separated from Zod schemas, React primitives, Faker data and CLI tooling so teams can adopt only what they need."],
  ["Provenance boundaries", "Country-specific regulatory helpers are added only when backed by authoritative specifications, with unverified capabilities labeled explicitly."],
];

const stack = [
  ["Core", "TypeScript · country registry · Arabic text · phone · money · IBAN"],
  ["Validation", "Zod · country-aware schemas · conservative capability states"],
  ["UI", "React · unstyled accessible country, phone, IBAN and address primitives"],
  ["Developer tools", "CLI · seedable Faker · project readiness audit"],
  ["Delivery", "pnpm monorepo · tests · CI · framework examples"],
];

export default function ArabDevKitCaseStudy() {
  return (
    <main className="case-page case-workgrid">
      <header className="case-nav container">
        <a className="case-brand" href="/"><span>~/</span>mohammed</a>
        <a className="case-back" href="/#work">← Back to selected work</a>
      </header>

      <section className="case-hero container">
        <div className="case-kicker">CASE STUDY · DEVELOPER INFRASTRUCTURE · OPEN SOURCE · 2026</div>
        <h1>ARAB<em>DEVKIT</em></h1>
        <p className="case-lead">Open-source developer infrastructure for software built for the Arab world — one consistent API for Arabic text, country metadata, phones, money, IBANs, validation, form primitives, test data and developer tooling.</p>
        <div className="case-meta-grid">
          <div><span>ROLE</span><strong>Open-Source / Full-Stack Developer</strong></div>
          <div><span>FOCUS</span><strong>Arabic DX · Localization · Validation · Reusable Packages</strong></div>
          <div><span>STACK</span><strong>TypeScript · Zod · React · CLI · pnpm Monorepo</strong></div>
        </div>
        <a className="case-live-link" href="https://github.com/Mohamedaloubaido/ArabDevKit" target="_blank" rel="noreferrer">VIEW SOURCE CODE ↗</a>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHY I BUILT IT</div>
        <div className="case-two-col">
          <h2>Teams building for Arab markets repeatedly solve the same localization and validation problems in isolation.</h2>
          <div className="case-copy">
            <p>Arabic text normalization, local phone input, currencies, address structures, IBAN rules, tax identifiers and realistic test data are common product requirements across the region. They are often reimplemented independently inside each application.</p>
            <p>ArabDevKit turns that repeated work into shared infrastructure. The core package owns country-aware rules and metadata while framework-specific packages reuse the same logic for validation, React inputs, synthetic data and CLI workflows.</p>
          </div>
        </div>
      </section>

      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">PACKAGE ARCHITECTURE</div>
          <div className="flow-map">
            <div><span>01</span><strong>Core</strong><small>Country + Arabic primitives</small></div>
            <b>→</b>
            <div><span>02</span><strong>Zod / React</strong><small>Validation + UI primitives</small></div>
            <b>→</b>
            <div><span>03</span><strong>Faker / CLI</strong><small>Test data + developer tooling</small></div>
            <b>→</b>
            <div><span>04</span><strong>Applications</strong><small>Reusable regional infrastructure</small></div>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">CORE SYSTEMS</div>
        <div className="system-grid">
          {systems.map(([title, body], index) => (
            <article className="system-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">DEVELOPER EXPERIENCE</div>
        <div className="state-chain">
          {['choose country','normalize input','validate','render / format','ship'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
        </div>
        <p className="chain-note">The same country model powers formatting, validation, UI primitives, generated test data and CLI checks, reducing divergence between application layers.</p>
      </section>

      <section className="case-section container">
        <div className="case-section-label">TECHNICAL STACK</div>
        <div className="impact-grid">
          {stack.map(([title, body]) => <article key={title}><strong>{title}</strong><p>{body}</p></article>)}
        </div>
      </section>

      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">ENGINEERING DECISIONS</div>
          <div className="system-grid">
            <article className="system-card"><span>01</span><h3>One source of truth</h3><p>Country metadata and capabilities live in the core package so React, Zod, Faker and CLI layers do not invent their own regional rules.</p></article>
            <article className="system-card"><span>02</span><h3>Verified, not guessed</h3><p>Regulatory validators are implemented only when authoritative structure is available; unsupported or unverified states remain explicit.</p></article>
            <article className="system-card"><span>03</span><h3>Framework-independent core</h3><p>Business rules stay outside React so server code, scripts, validation and UI packages can consume the same underlying primitives.</p></article>
            <article className="system-card"><span>04</span><h3>Arabic first-class</h3><p>Unicode normalization, Arabic digits, bilingual metadata and RTL-oriented workflows are core features rather than optional localization patches.</p></article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHAT THIS PROVES</div>
        <div className="impact-grid">
          <article><strong>Library design</strong><p>The project is organized as reusable packages with clear responsibilities instead of application-specific helpers.</p></article>
          <article><strong>Regional engineering</strong><p>Arabic language behavior and country differences are modeled as software architecture concerns.</p></article>
          <article><strong>Data discipline</strong><p>Capability states and authoritative-source boundaries prevent the library from presenting assumptions as verified rules.</p></article>
          <article><strong>Developer experience</strong><p>Core APIs, schemas, UI primitives, Faker and CLI tooling are designed to work together across real project workflows.</p></article>
        </div>
      </section>

      <section className="case-next"><div className="container"><span>NEXT CASE STUDY</span><a href="/work/workgrid">WORKGRID <b>↗</b></a></div></section>
      <footer className="footer container"><span>© 2026 Mohammed Al-Obaido</span><a href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com ↗</a></footer>
    </main>
  );
}
