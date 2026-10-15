import PrintButton from "./PrintButton";

export const metadata = {
  title: "Developer Resume | Mohammed Al-Obaido",
  description: "Full-stack developer resume of Mohammed Al-Obaido.",
};

const projects = [
  {
    name: "TAWADUD",
    type: "AI Customer Experience SaaS",
    href: "/work/tawadud",
    body: "Designed and developed a multi-workspace customer experience platform with a website chatbot, shared inbox, grounded AI answers, knowledge ingestion, human handoff, analytics, roles and account security.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "OpenAI", "Vercel"],
  },
  {
    name: "ZORVENAQ",
    type: "Freelance Marketplace",
    href: "/work/zorvenaq",
    body: "Built and iterated product workflows covering matching, applications, offers, contracts, milestones, workspaces, internal wallet flows, disputes, admin roles and auditability.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Docker", "RBAC"],
  },
  {
    name: "EMPLOYEE RECORDS",
    type: "Data Management Dashboard",
    href: "https://employee-records-dashboard.vercel.app",
    external: true,
    body: "Built a responsive employee-management application with persistent CRUD, search, filtering, sorting, pagination, department reporting and CSV export.",
    tags: ["React", "TypeScript", "Vite", "LocalStorage", "Responsive UI"],
  },
  {
    name: "NAQSHA",
    type: "Custom Printing E-commerce",
    href: "/work/naqsha",
    body: "Shaped storefront and admin workflows around product discovery, customization, proof approval, pricing logic, order states, responsive UX and operational edge cases.",
    tags: ["Next.js", "React", "TypeScript", "E-commerce", "Product UX"],
  },
];

const strengths = [
  ["Frontend", "Next.js, React, TypeScript, JavaScript, HTML/CSS, responsive UI, component-based interfaces."],
  ["Backend & Data", "Supabase, PostgreSQL, SQL, authentication, RLS/RBAC, REST APIs, relational data modeling."],
  ["Product & Shipping", "Git/GitHub, Vercel, Docker, Sentry, functional QA, AI integration, workflow design and deployment."],
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar container">
        <a className="text-link" href="/">← Back to portfolio</a>
        <div className="resume-toolbar-actions">
          <a className="resume-download" href="https://github.com/Mohamedaloubaido" target="_blank" rel="noreferrer">GitHub ↗</a>
          <PrintButton />
        </div>
      </div>

      <div className="resume-shell">
        <article className="resume-sheet">
          <header className="resume-dev-hero">
            <div>
              <div className="resume-dev-role">FULL-STACK DEVELOPER · PRODUCT BUILDER</div>
              <h1>Mohammed<br />Al-Obaido</h1>
              <p className="resume-dev-summary">I build modern web applications from interface to infrastructure, with a focus on SaaS products, AI-powered workflows, secure data, authentication, permissions and deployable product systems.</p>
            </div>
            <div className="resume-contact">
              <span>Syria · Open to remote and relocation</span>
              <a href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com</a>
              <a href="https://github.com/Mohamedaloubaido" target="_blank" rel="noreferrer">github.com/Mohamedaloubaido</a>
              <span>Arabic · Turkish · English</span>
            </div>
          </header>

          <section className="resume-block">
            <h2>SELECTED DEVELOPMENT WORK</h2>
            <div className="resume-project-grid">
              {projects.map((project) => (
                <a className="resume-project-card" key={project.name} href={project.href} target={project.external ? "_blank" : undefined} rel={project.external ? "noreferrer" : undefined}>
                  <small>{project.type.toUpperCase()}</small>
                  <h3>{project.name} ↗</h3>
                  <p>{project.body}</p>
                  <div className="resume-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </a>
              ))}
            </div>
          </section>

          <section className="resume-block">
            <h2>TECHNICAL STACK</h2>
            <div className="resume-skill-grid">
              {strengths.map(([title, body]) => (
                <div className="resume-skill-group" key={title}><h3>{title}</h3><p>{body}</p></div>
              ))}
            </div>
          </section>

          <section className="resume-block">
            <h2>ENGINEERING FOCUS</h2>
            <div className="impact-grid">
              <article><strong>Product workflows</strong><p>Multi-step application states, clear user actions, failure paths and admin operations.</p></article>
              <article><strong>Authentication & access</strong><p>Accounts, sessions, multi-factor authentication, workspace permissions and role-based controls.</p></article>
              <article><strong>Data & backend</strong><p>PostgreSQL-backed products, structured relational data, API-driven features and secure access patterns.</p></article>
              <article><strong>AI integration</strong><p>Grounded answers, knowledge retrieval, human handoff and AI-assisted product workflows.</p></article>
            </div>
          </section>

          <section className="resume-block resume-columns">
            <div>
              <h2>EDUCATION</h2>
              <p><strong>Programming Diploma</strong><br />Türkiye</p>
              <p>Continued hands-on development through production-oriented web projects, GitHub repositories and deployed applications.</p>
            </div>
            <div>
              <h2>LANGUAGES & AVAILABILITY</h2>
              <p><strong>Arabic:</strong> Native<br /><strong>Turkish:</strong> Good<br /><strong>English:</strong> Advanced</p>
              <p><strong>Availability:</strong> Remote · Freelance · Contract · Full-time opportunities · GCC relocation</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
