const experience = [
  {
    role: "Office of Complaints — Human Resources Directorate",
    company: "Ministry of Interior",
    period: "Apr 2026 — Present",
    summary:
      "Support complaint intake, case follow-up, official correspondence and administrative coordination within recruitment-related workflows.",
  },
  {
    role: "Data Entry Specialist",
    company: "New Horizons Student Services",
    period: "2019 — Mar 2026",
    summary:
      "Managed high-volume student application records, CRM updates, data verification and administrative processing for private university applications in Türkiye.",
  },
  {
    role: "Cashier",
    company: "Retail Operations",
    period: "Jun 2025 — Jun 2026",
    summary:
      "Handled daily transactions, customer-facing operations and cash reconciliation while maintaining accuracy under time pressure.",
  },
];

const projects = [
  {
    title: "NAQSHA",
    type: "E-commerce & Brand Operations",
    description:
      "A Syrian contemporary custom-printing brand and commerce platform. Work includes product workflows, studio customization, customer proof approval, returns, support flows, content direction and store UX.",
    stack: ["E-commerce", "Product Operations", "UX", "Brand Systems", "AI-assisted workflows"],
  },
  {
    title: "Zorvenaq",
    type: "Freelance Platform",
    description:
      "A freelance marketplace product with hiring flows, contracts, milestones, internal wallet concepts, escrow logic, role-based administration and bilingual product requirements.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Product QA"],
  },
  {
    title: "Operations & Reporting Systems",
    type: "Data & Administration",
    description:
      "Structured spreadsheets, complaint classification, employee evaluation models, reporting templates and process-oriented administrative tools designed for accuracy and traceability.",
    stack: ["Excel", "Google Sheets", "Reporting", "Data Quality", "Workflow Design"],
  },
];

const skills = [
  "Data Entry",
  "CRM Operations",
  "Data Verification",
  "Microsoft Excel",
  "Google Sheets",
  "Microsoft Office",
  "Administrative Reporting",
  "Process Improvement",
  "Quality Control",
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "AI-assisted Workflows",
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" aria-label="Home">MA.</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className="hero container" id="top">
        <div className="eyebrow">DATA · OPERATIONS · DIGITAL PROJECTS</div>
        <h1>Mohammed<br />Al-Obaido</h1>
        <p className="hero-copy">
          Data and operations professional focused on accuracy, structured workflows,
          administrative execution and practical digital products.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View selected work</a>
          <a className="button secondary" href="#contact">Contact me</a>
        </div>
        <div className="hero-meta">
          <span>Available for international opportunities</span>
          <span>English · Turkish</span>
        </div>
      </section>

      <section className="section container" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="two-col">
          <h2>Reliable execution.<br />Structured thinking.</h2>
          <div className="body-copy">
            <p>
              I work across data entry, CRM operations, administration and digital project development.
              My background combines high-volume record processing with process improvement, reporting,
              customer-facing workflows and hands-on product work.
            </p>
            <p>
              I am most effective in environments where accuracy matters, information needs to stay organized,
              and operational problems need practical solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section container" id="experience">
        <div className="section-label">02 / EXPERIENCE</div>
        <div className="stack">
          {experience.map((item) => (
            <article className="experience-row" key={`${item.company}-${item.role}`}>
              <div className="period">{item.period}</div>
              <div>
                <h3>{item.role}</h3>
                <div className="company">{item.company}</div>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="projects">
        <div className="section-label">03 / SELECTED WORK</div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-index">0{index + 1}</div>
              <div>
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="skills">
        <div className="section-label">04 / CAPABILITIES</div>
        <div className="skills-grid">
          {skills.map((skill) => <div className="skill" key={skill}>{skill}</div>)}
        </div>
      </section>

      <section className="section contact container" id="contact">
        <div className="section-label">05 / CONTACT</div>
        <div className="contact-block">
          <h2>Open to the next<br />serious opportunity.</h2>
          <p>
            Interested in Data Entry, CRM, Operations, Administrative and selected digital roles.
          </p>
          <a className="email" href="mailto:kawderex@gmail.com">kawderex@gmail.com</a>
        </div>
      </section>

      <footer className="footer container">
        <span>© 2026 Mohammed Al-Obaido</span>
        <span>Built for clarity, credibility and performance.</span>
      </footer>
    </main>
  );
}
