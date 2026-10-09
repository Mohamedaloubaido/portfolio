const experience = [
  {
    role: "Office of Complaints — Human Resources Directorate",
    company: "Ministry of Interior",
    period: "Apr 2026 — Present",
    summary:
      "Handle complaint intake, case follow-up, official correspondence, record review and administrative coordination across recruitment-related workflows.",
    highlights: ["Case follow-up", "Official correspondence", "Record verification", "Administrative coordination"],
  },
  {
    role: "Data Entry Specialist",
    company: "New Horizons Student Services",
    period: "2019 — Mar 2026",
    summary:
      "Managed high-volume student application records, CRM updates, data verification and administrative processing for private-university applications in Türkiye.",
    highlights: ["High-volume data entry", "CRM operations", "Application processing", "Data quality"],
  },
  {
    role: "Cashier",
    company: "Retail Operations",
    period: "Jun 2025 — Jun 2026",
    summary:
      "Handled daily transactions, customer-facing operations and cash reconciliation while maintaining accuracy under time pressure.",
    highlights: ["Cash reconciliation", "Customer service", "Transaction accuracy"],
  },
];

const projects = [
  {
    number: "01",
    title: "NAQSHA",
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
    items: ["Administrative Reporting", "Case Follow-up", "Process Improvement", "Quality Control", "Workflow Design"],
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
          <a className="brand" href="#top" aria-label="Mohammed Al-Obaido home">
            M<span>/</span>A
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
          </div>
          <a className="nav-cta" href="#contact">Let&apos;s talk ↗</a>
        </nav>
      </header>

      <section className="hero container">
        <div className="hero-grid">
          <div>
            <div className="status"><span /> Open to international opportunities</div>
            <p className="kicker">DATA · CRM · OPERATIONS · ADMINISTRATION</p>
            <h1>
              Mohammed<br />
              <em>Al-Obaido</em>
            </h1>
          </div>

          <div className="hero-side">
            <p>
              I turn high-volume information and operational complexity into
              <strong> accurate records, clear workflows and practical systems.</strong>
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore selected work <span>↘</span></a>
              <a className="button ghost" href="mailto:kawderex@gmail.com">Email me ↗</a>
            </div>
          </div>
        </div>

        <div className="hero-footer">
          <span>Based in Syria · Open to relocation & remote work</span>
          <span>English · Turkish</span>
          <a href="https://github.com/Mohamedaloubaido" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <section className="stats-band" aria-label="Career highlights">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section container" id="about">
        <div className="section-head">
          <span className="section-index">01</span>
          <span className="section-label">Profile</span>
        </div>
        <div className="about-grid">
          <h2>Accuracy first.<br />Systems second.<br /><em>Always practical.</em></h2>
          <div className="body-copy">
            <p className="lead">
              I am a data and operations professional with experience spanning high-volume record processing,
              CRM administration, complaint follow-up, reporting and customer-facing operations.
            </p>
            <p>
              Alongside my administrative work, I develop and test digital product ideas. That gives me a useful
              perspective: I understand both the person using a workflow and the operational structure behind it.
            </p>
            <p>
              I work best where information must stay organized, mistakes have real consequences and processes
              need to become clearer, faster and easier to audit.
            </p>
          </div>
        </div>
      </section>

      <section className="section container" id="experience">
        <div className="section-head">
          <span className="section-index">02</span>
          <span className="section-label">Experience</span>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={`${item.company}-${item.role}`}>
              <div className="period">{item.period}</div>
              <div className="experience-main">
                <h3>{item.role}</h3>
                <div className="company">{item.company}</div>
                <p>{item.summary}</p>
              </div>
              <div className="mini-tags">
                {item.highlights.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="container">
          <div className="section-head light-head">
            <span className="section-index">03</span>
            <span className="section-label">Selected work</span>
          </div>
          <div className="work-intro">
            <h2>Selected systems,<br />products & workflows.</h2>
            <p>
              Projects shown here focus on the parts I actively shaped: requirements, workflow logic,
              operations, QA, usability and product direction.
            </p>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-layout">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-headline">{project.headline}</p>
                  </div>
                  <div className="project-details">
                    <p>{project.description}</p>
                    <div className="contribution">
                      <span className="tiny-label">MY CONTRIBUTION</span>
                      <ul>
                        {project.contribution.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <div className="tags dark-tags">
                      {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="capabilities">
        <div className="section-head">
          <span className="section-index">04</span>
          <span className="section-label">Capabilities</span>
        </div>
        <div className="capability-grid">
          {capabilityGroups.map((group, index) => (
            <article className="capability-card" key={group.title}>
              <span className="cap-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="cap-list">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <span className="section-label">Available for the right opportunity</span>
            <h2>Need someone who<br />cares about the details?</h2>
          </div>
          <div className="contact-side">
            <p>
              I am interested in Data Entry, CRM, Operations, Administrative and selected product-support roles,
              including remote, freelance and relocation opportunities.
            </p>
            <a className="email" href="mailto:kawderex@gmail.com">kawderex@gmail.com ↗</a>
            <a className="text-link" href="https://github.com/Mohamedaloubaido" target="_blank" rel="noreferrer">GitHub profile ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <span>© 2026 Mohammed Al-Obaido</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
