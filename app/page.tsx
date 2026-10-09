import { Base64Image, DownloadResumeButton } from "./components/Base64Asset";

const experience = [
  {
    role: "Data Entry & Complaints Operations",
    company: "Ministry of Interior — Damascus, Syria",
    period: "Apr 2026 — Present",
    summary:
      "Process, document and follow up on complaints while validating data, updating records and preparing periodic reports within approved procedures.",
    highlights: ["6,000+ complaints", "Case follow-up", "Record verification", "Reporting"],
  },
  {
    role: "Currency Exchange & Remittance Officer",
    company: "Al-Hussein Exchange & Remittances",
    period: "Jun 2025 — Jun 2026",
    summary:
      "Processed remittances and local and foreign currency exchange transactions, with daily reconciliation, balance follow-up and financial reporting.",
    highlights: ["10,000+ remittances", "50,000+ exchange transactions", "Reconciliation", "Financial reporting"],
  },
  {
    role: "Data Entry Specialist",
    company: "New Horizons Student Services — Istanbul, Türkiye",
    period: "2019 — Mar 2026",
    summary:
      "Managed high-volume student application records, CRM updates, data verification and administrative processing for private-university applications.",
    highlights: ["50,000+ records/month", "99%+ accuracy", "CRM operations", "Data quality"],
  },
  {
    role: "Data Entry Representative",
    company: "Apply for Free — Istanbul, Türkiye",
    period: "2018 — 2019",
    summary:
      "Maintained customer, invoice and daily operational records, prepared administrative reports and handled confidential information.",
    highlights: ["Record management", "Administrative reports", "Data verification"],
  },
];

const projects = [
  {
    number: "01",
    title: "NAQSHA",
    href: "/work/naqsha",
    image: "/assets/naqsha-cover.webp.b64",
    imageAlt: "NAQSHA fashion campaign and product presentation",
    type: "E-commerce · Product Operations · Brand System",
    headline: "Turning a custom-printing concept into a structured customer journey.",
    description:
      "NAQSHA is a Syrian contemporary custom-printing brand and commerce platform. My work spans business requirements, product flows, store UX, customization logic, proof approval, returns, customer support and launch content direction.",
    contribution: [
      "Mapped customer journeys from product selection through customization and order handling.",
      "Defined operational requirements for proof approval, returns, support and custom-design requests.",
      "Directed UX and brand consistency across the store and campaign assets.",
    ],
    stack: ["Product Operations", "E-commerce", "UX", "Workflow Design", "AI-assisted execution"],
  },
  {
    number: "02",
    title: "Zorvenaq",
    href: "/work/zorvenaq",
    image: "/assets/zorvenaq-cover.webp.b64",
    imageAlt: "Zorvenaq marketplace visual journey",
    type: "Marketplace · Product QA · Workflow Architecture",
    headline: "Designing operational logic for a freelance marketplace.",
    description:
      "A freelance platform covering matching, applications, offers, contracts, milestones, workspace operations, disputes and internal finance concepts. My role centers on requirements, workflow design, testing, QA and product iteration.",
    contribution: [
      "Structured end-to-end hiring and contract workflows for clients and freelancers.",
      "Specified wallet, escrow, deposit, withdrawal and administration requirements.",
      "Tested product flows, identified failures and iterated on usability and operational rules.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Product QA", "Requirements"],
  },
  {
    number: "03",
    title: "Operations & Reporting Systems",
    href: null,
    image: null,
    imageAlt: "",
    type: "Data · Administration · Process Control",
    headline: "Making administrative work easier to trace, review and improve.",
    description:
      "A collection of spreadsheet models, complaint-classification systems, employee-evaluation frameworks and reporting templates built around accuracy, accountability and operational visibility.",
    contribution: [
      "Designed structured records and reporting formats for recurring administrative work.",
      "Built classification approaches for complaints, delays and operational issues.",
      "Introduced traceability concepts to identify where errors originated in a process.",
    ],
    stack: ["Excel", "Google Sheets", "Reporting", "Data Quality", "Process Design"],
  },
];

const capabilityGroups = [
  {
    title: "Data & CRM",
    items: ["Data Entry", "CRM Operations", "Data Verification", "Data Quality", "Excel", "Google Sheets"],
  },
  {
    title: "Operations",
    items: ["Administrative Reporting", "Case Follow-up", "Reconciliation", "Process Improvement", "Quality Control", "Workflow Design"],
  },
  {
    title: "Digital",
    items: ["Next.js", "React", "TypeScript", "Supabase", "Product QA", "AI-assisted Workflows"],
  },
];

const stats = [
  { value: "7+", label: "Years across data and administrative work" },
  { value: "99%+", label: "Accuracy maintained in high-volume data workflows" },
  { value: "50K+", label: "Records handled monthly at peak volume" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Mohammed Al-Obaido home">M<span>/</span>A</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="/resume">Resume</a>
          </div>
          <a className="nav-cta" href="#contact">Let&apos;s talk ↗</a>
        </nav>
      </header>

      <section className="hero container">
        <div className="hero-grid">
          <div>
            <div className="status"><span /> Open to international opportunities</div>
            <p className="kicker">DATA · CRM · OPERATIONS · ADMINISTRATION</p>
            <h1>Mohammed<br /><em>Al-Obaido</em></h1>
          </div>

          <div className="hero-side">
            <p>I turn high-volume information and operational complexity into <strong>accurate records, clear workflows and practical systems.</strong></p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore selected work <span>↘</span></a>
              <DownloadResumeButton className="button ghost" />
              <a className="button ghost" href="mailto:obedomohammed@gmail.com">Email me ↗</a>
            </div>
          </div>
        </div>

        <div className="hero-footer">
          <span>Based in Syria · Open to relocation & remote work</span>
          <span>Arabic · English · Turkish</span>
          <a href="https://github.com/Mohamedaloubaido" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <section className="stats-band" aria-label="Career highlights">
        <div className="container stats-grid">
          {stats.map((stat) => <div className="stat" key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <section className="section container" id="about">
        <div className="section-head"><span className="section-index">01</span><span className="section-label">Profile</span></div>
        <div className="about-grid">
          <h2>Accuracy first.<br />Systems second.<br /><em>Always practical.</em></h2>
          <div className="body-copy">
            <p className="lead">I am a data and operations professional with experience spanning high-volume record processing, CRM administration, complaint follow-up, reporting, reconciliation and customer-facing operations.</p>
            <p>Alongside my administrative work, I develop and test digital product ideas using AI-assisted development workflows. That gives me a useful perspective: I understand both the person using a process and the operational structure behind it.</p>
            <p>I work best where information must stay organized, mistakes have real consequences and processes need to become clearer, faster and easier to audit.</p>
          </div>
        </div>
      </section>

      <section className="section container" id="experience">
        <div className="section-head"><span className="section-index">02</span><span className="section-label">Experience</span></div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={`${item.company}-${item.role}`}>
              <div className="period">{item.period}</div>
              <div className="experience-main"><h3>{item.role}</h3><div className="company">{item.company}</div><p>{item.summary}</p></div>
              <div className="mini-tags">{item.highlights.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="container">
          <div className="section-head light-head"><span className="section-index">03</span><span className="section-label">Selected work</span></div>
          <div className="work-intro">
            <h2>Selected systems,<br />products & workflows.</h2>
            <p>Projects shown here focus on the parts I actively shaped: requirements, workflow logic, operations, QA, usability and product direction.</p>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline"><span>{project.number}</span><span>{project.type}</span></div>
                <div className="project-layout">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-headline">{project.headline}</p>
                    {project.href && <a className="project-case-link" href={project.href}>View full case study ↗</a>}
                    {project.image && (
                      <div className="project-media">
                        <Base64Image dataPath={project.image} alt={project.imageAlt} />
                      </div>
                    )}
                  </div>
                  <div className="project-details">
                    <p>{project.description}</p>
                    <div className="contribution"><span className="tiny-label">MY CONTRIBUTION</span><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></div>
                    <div className="tags dark-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="capabilities">
        <div className="section-head"><span className="section-index">04</span><span className="section-label">Capabilities</span></div>
        <div className="capability-grid">
          {capabilityGroups.map((group, index) => (
            <article className="capability-card" key={group.title}><span className="cap-number">0{index + 1}</span><h3>{group.title}</h3><div className="cap-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div><span className="section-label">Available for the right opportunity</span><h2>Need someone who<br />cares about the details?</h2></div>
          <div className="contact-side">
            <p>I am interested in Data Entry, CRM, Operations, Administrative and selected product-support roles, including remote, freelance and relocation opportunities.</p>
            <a className="email" href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com ↗</a>
            <a className="text-link" href="/resume">View resume ↗</a><br />
            <a className="text-link" href="https://github.com/Mohamedaloubaido" target="_blank" rel="noreferrer">GitHub profile ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer container"><span>© 2026 Mohammed Al-Obaido</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
