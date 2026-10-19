type Project = {
  index: string;
  title: string;
  status: string;
  type: string;
  description: string;
  stack: string[];
  caseUrl: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  visual: "tawadud" | "system" | "records" | "naqsha";
  visualLabel?: string;
  visualTitle?: string;
  visualBadge?: string;
  features?: string[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "TAWADUD",
    status: "LIVE PRODUCT",
    type: "AI Customer Experience SaaS",
    description:
      "A full-stack customer experience platform with grounded AI answers, shared inbox workflows, knowledge management, human handoff, analytics and multi-workspace access controls.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "OpenAI", "Vercel"],
    caseUrl: "/work/tawadud",
    liveUrl: "https://gettawadud.com",
    githubUrl: null,
    visual: "tawadud",
  },
  {
    index: "02",
    title: "AGENTGATE",
    status: "OPEN SOURCE · V0.1",
    type: "AI Agent Reliability & CI",
    description:
      "An evaluation and quality-gate platform for AI agents that measures answer quality, grounding, tool behavior, cost and latency before changes are merged or deployed.",
    stack: ["FastAPI", "Python", "Next.js", "TypeScript", "PostgreSQL", "OpenAI", "GitHub Actions"],
    caseUrl: "/work/agentgate",
    liveUrl: null,
    githubUrl: "https://github.com/Mohamedaloubaido/agentgate",
    visual: "system",
    visualLabel: "agent evaluations / ci gate",
    visualTitle: "AI quality gate",
    visualBadge: "PASS / FAIL",
    features: ["Datasets", "Evaluators", "LLM Judge", "CI Gate"],
  },
  {
    index: "03",
    title: "PULSEOPS AI",
    status: "SOURCE · FULL STACK",
    type: "AI Incident Operations Platform",
    description:
      "A multi-tenant incident operations system with uptime monitoring, realtime coordination, public status pages, evidence-grounded AI analysis and AI-assisted postmortems.",
    stack: ["Next.js", "Fastify", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "OpenAI", "Docker"],
    caseUrl: "/work/pulseops-ai",
    liveUrl: null,
    githubUrl: "https://github.com/Mohamedaloubaido/pulseops-ai",
    visual: "system",
    visualLabel: "incident ops / monitoring",
    visualTitle: "Incident command",
    visualBadge: "REALTIME",
    features: ["Monitors", "Incidents", "AI Analysis", "Postmortems"],
  },
  {
    index: "04",
    title: "ARABDEVKIT",
    status: "OPEN SOURCE · V0.1",
    type: "Arab-World Developer Infrastructure",
    description:
      "An open-source toolkit for Arabic-first software: 22-market country metadata, Arabic text normalization, phone and IBAN handling, localized money, validation, React primitives, Faker and CLI tooling.",
    stack: ["TypeScript", "Monorepo", "Zod", "React", "CLI", "Vitest", "pnpm"],
    caseUrl: "/work/arabdevkit",
    liveUrl: null,
    githubUrl: "https://github.com/Mohamedaloubaido/ArabDevKit",
    visual: "system",
    visualLabel: "arabic developer infrastructure",
    visualTitle: "22-market toolkit",
    visualBadge: "OPEN SOURCE",
    features: ["Core API", "Zod", "React", "CLI + Faker"],
  },
  {
    index: "05",
    title: "WORKGRID",
    status: "LIVE FRONTEND + SOURCE",
    type: "Project Management SaaS",
    description:
      "A production-minded multi-tenant project management system with JWT authentication, workspace-scoped RBAC, PostgreSQL relationships, audit logs, Kanban workflows, Docker and automated quality gates.",
    stack: ["Fastify", "React", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Docker"],
    caseUrl: "/work/workgrid",
    liveUrl: "https://workgrid-web.vercel.app",
    githubUrl: "https://github.com/Mohamedaloubaido/workgrid",
    visual: "system",
    visualLabel: "workspace / project api",
    visualTitle: "Multi-tenant workspace",
    visualBadge: "RBAC",
    features: ["Auth", "Workspaces", "Kanban", "Audit Logs"],
  },
  {
    index: "06",
    title: "ZORVENAQ",
    status: "IN DEVELOPMENT",
    type: "Freelance Marketplace",
    description:
      "A marketplace system covering matching, applications, invitations, offers, contracts, milestones, workspaces, disputes, role-based administration and internal wallet and escrow flows.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Docker", "RBAC"],
    caseUrl: "/work/zorvenaq",
    liveUrl: null,
    githubUrl: null,
    visual: "system",
    visualLabel: "marketplace / contract lifecycle",
    visualTitle: "Marketplace workflow",
    visualBadge: "ESCROW",
    features: ["Matching", "Contracts", "Milestones", "Wallet"],
  },
  {
    index: "07",
    title: "EMPLOYEE RECORDS",
    status: "LIVE + SOURCE",
    type: "Data Management Dashboard",
    description:
      "A responsive employee-management application with persistent CRUD, search, multi-filtering, sorting, pagination, department reporting and CSV export.",
    stack: ["React", "TypeScript", "Vite", "LocalStorage", "Responsive UI", "Vercel"],
    caseUrl: null,
    liveUrl: "https://employee-records-dashboard.vercel.app",
    githubUrl: "https://github.com/Mohamedaloubaido/employee-records-dashboard",
    visual: "records",
  },
  {
    index: "08",
    title: "NAQSHA",
    status: "CASE STUDY",
    type: "E-commerce Experience",
    description:
      "A custom-printing commerce concept shaped around product discovery, customization, proof approval, support flows and a consistent responsive storefront experience.",
    stack: ["E-commerce", "UX", "Product Flows", "Responsive Design", "AI-assisted Development"],
    caseUrl: "/work/naqsha",
    liveUrl: null,
    githubUrl: null,
    visual: "naqsha",
  },
];

const stackGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces for modern web products that stay responsive and understandable.",
    items: ["Next.js", "React", "TypeScript", "Vite", "Responsive UI", "Component Systems"],
  },
  {
    number: "02",
    title: "Backend & Data",
    description: "Application logic, APIs, relational models, queues and secure access boundaries.",
    items: ["Fastify", "FastAPI / Python", "PostgreSQL", "Supabase", "Prisma", "Redis", "RLS / RBAC"],
  },
  {
    number: "03",
    title: "AI & Delivery",
    description: "Applied AI, evaluation, automation and production-minded delivery workflows.",
    items: ["OpenAI", "LLM Evaluation", "GitHub Actions", "Docker", "Vercel", "Testing", "Product QA"],
  },
];

const engineeringScope = [
  ["Authentication", "Accounts, sessions and protected product areas."],
  ["Authorization", "Role-based permissions, tenant boundaries and workspace access rules."],
  ["Data modeling", "Structured relational data, queues, auditability and operational state."],
  ["Applied AI", "Grounded AI workflows, evaluation pipelines, human review and traceability."],
  ["Product workflows", "Multi-step business states that remain understandable to users."],
  ["Deployment", "Docker, CI, monitoring, public deployments and iterative product QA."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "tawadud") {
    return (
      <div className="dev-visual dev-visual-tawadud" aria-hidden="true">
        <div className="dev-window-bar"><i /><i /><i /><span>workspace / inbox</span></div>
        <div className="dev-tawadud-layout">
          <div className="dev-rail"><b>T</b><span /><span /><span /></div>
          <div className="dev-inbox-list">
            <small>INBOX</small>
            <strong>Conversations</strong>
            <div className="dev-inbox-item active"><i /><p><b>Website inquiry</b><span>AI answered · now</span></p></div>
            <div className="dev-inbox-item"><i /><p><b>Product question</b><span>Assigned · 4m</span></p></div>
            <div className="dev-inbox-item"><i /><p><b>Support request</b><span>Human handoff · 9m</span></p></div>
          </div>
          <div className="dev-conversation">
            <div className="dev-conversation-head"><span>Customer conversation</span><b>AI ACTIVE</b></div>
            <div className="dev-message customer">Can I get more details about the service?</div>
            <div className="dev-message ai">Absolutely. Here&apos;s a concise answer grounded in the company knowledge base.</div>
            <div className="dev-composer">Reply or take over… <span>↵</span></div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "records") {
    return (
      <div className="dev-visual dev-visual-records" aria-hidden="true">
        <div className="dev-window-bar"><i /><i /><i /><span>employees / dashboard</span></div>
        <div className="dev-records-head"><div><small>WORKFORCE</small><strong>Employee Records</strong></div><button>+ Add employee</button></div>
        <div className="dev-record-stats"><article><span>Total</span><b>128</b></article><article><span>Active</span><b>112</b></article><article><span>Departments</span><b>8</b></article></div>
        <div className="dev-record-table">
          <div className="head"><span>Employee</span><span>Department</span><span>Status</span></div>
          <div><span><i />M. Carter</span><span>Engineering</span><b>Active</b></div>
          <div><span><i />S. Ahmed</span><span>Product</span><b>Active</b></div>
          <div><span><i />L. Martin</span><span>Operations</span><b>Active</b></div>
        </div>
      </div>
    );
  }

  if (project.visual === "naqsha") {
    return (
      <div className="dev-visual dev-visual-naqsha" aria-hidden="true">
        <div className="dev-naqsha-copy"><small>CUSTOM PRINT / 2026</small><strong>Wear your idea.</strong><span>Contemporary products, built around personal expression.</span></div>
        <div className="dev-shirt"><div>NQ</div></div>
        <div className="dev-naqsha-index">08</div>
      </div>
    );
  }

  const features = project.features ?? ["Architecture", "API", "Data", "Delivery"];

  return (
    <div className="dev-visual dev-visual-zorvenaq" aria-hidden="true">
      <div className="dev-window-bar"><i /><i /><i /><span>{project.visualLabel ?? project.type}</span></div>
      <div className="dev-zorvenaq-layout">
        <div className="dev-z-side">
          <b>{project.title.slice(0, 1)}</b>
          {features.slice(0, 4).map((feature) => <span key={feature}>{feature}</span>)}
        </div>
        <div className="dev-z-main">
          <div className="dev-z-title"><small>{project.status}</small><strong>{project.visualTitle ?? project.title}</strong><span>{project.visualBadge ?? "SYSTEM"}</span></div>
          <div className="dev-milestones">
            {features.slice(0, 3).map((feature, index) => (
              <article className={index === 1 ? "active" : undefined} key={feature}>
                <small>0{index + 1}</small><b>{feature}</b><span>{index === 0 ? "Ready" : index === 1 ? "Active" : "Integrated"}</span>
              </article>
            ))}
          </div>
          <div className="dev-z-bottom"><span>Engineering stack</span><b>{project.stack[0]}</b><i>{project.stack.slice(1, 4).join(" · ")}</i></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="dev-home" id="top">
      <header className="dev-nav-shell">
        <nav className="dev-nav dev-container" aria-label="Primary navigation">
          <a className="dev-brand" href="#top" aria-label="Mohammed Al-Obaido home"><span>~/</span>mohammed</a>
          <div className="dev-nav-links">
            <a href="#work">Work</a>
            <a href="#stack">Stack</a>
            <a href="#about">About</a>
          </div>
          <div className="dev-nav-actions">
            <a className="dev-nav-github" href="https://github.com/Mohamedaloubaido" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a className="dev-nav-cta" href="#contact">Let&apos;s build <Arrow /></a>
          </div>
        </nav>
      </header>

      <section className="dev-hero dev-container">
        <div className="dev-hero-copy">
          <div className="dev-status"><span /> Available for full-stack opportunities</div>
          <p className="dev-eyebrow">FULL-STACK DEVELOPER · APPLIED AI · PRODUCT BUILDER</p>
          <h1>I build products<br />from <em>interface</em> to infrastructure.</h1>
          <p className="dev-hero-lead">
            I design and develop full-stack web products with TypeScript, React, PostgreSQL and Python — combining product workflows, secure backend systems and applied AI into software that can actually ship.
          </p>
          <div className="dev-hero-actions">
            <a className="dev-button dev-button-primary" href="#work">View selected work <span>↓</span></a>
            <a className="dev-button dev-button-secondary" href="https://github.com/Mohamedaloubaido" target="_blank" rel="noreferrer">GitHub profile <Arrow /></a>
          </div>
        </div>

        <div className="dev-hero-panel" aria-label="Developer profile summary">
          <div className="dev-panel-top"><span><i /><i /><i /></span><b>profile.ts</b><small>main</small></div>
          <div className="dev-code-card">
            <p><span className="token-purple">const</span> <span className="token-blue">developer</span> = {'{'}</p>
            <p className="indent">name: <span className="token-green">&quot;Mohammed Al-Obaido&quot;</span>,</p>
            <p className="indent">role: <span className="token-green">&quot;Full-Stack Developer&quot;</span>,</p>
            <p className="indent">focus: [</p>
            <p className="indent-2"><span className="token-green">&quot;SaaS&quot;</span>, <span className="token-green">&quot;AI Systems&quot;</span>, <span className="token-green">&quot;Developer Tools&quot;</span></p>
            <p className="indent">],</p>
            <p className="indent">shipping: <span className="token-green">&quot;TAWADUD · AgentGate · PulseOps&quot;</span>,</p>
            <p className="indent">available: <span className="token-orange">true</span>,</p>
            <p>{'}'}</p>
          </div>
          <div className="dev-panel-footer"><span><i /> building production-minded systems</span><span>TypeScript · Python · PostgreSQL</span></div>
        </div>
      </section>

      <section className="dev-tech-strip" aria-label="Primary technology stack">
        <div className="dev-container dev-tech-row">
          {['NEXT.JS', 'REACT', 'TYPESCRIPT', 'POSTGRESQL', 'FASTIFY', 'FASTAPI', 'REDIS', 'DOCKER'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="dev-section dev-container" id="work">
        <div className="dev-section-heading">
          <div><span className="dev-section-number">01</span><p className="dev-eyebrow">SELECTED WORK</p></div>
          <h2>Products, infrastructure and applied AI.</h2>
          <p>Projects where I worked across product logic, frontend, APIs, data modeling, permissions, background jobs, AI workflows, testing and delivery.</p>
        </div>

        <div className="dev-projects">
          {projects.map((project) => (
            <article className="dev-project" key={project.title}>
              <div className="dev-project-meta">
                <span>{project.index}</span>
                <span>{project.type}</span>
                <b>{project.status}</b>
              </div>
              <ProjectVisual project={project} />
              <div className="dev-project-body">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="dev-project-side">
                  <div className="dev-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="dev-project-links">
                    {project.caseUrl && <a href={project.caseUrl}>Case study <Arrow /></a>}
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project <Arrow /></a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source code <Arrow /></a>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="dev-section dev-stack-section" id="stack">
        <div className="dev-container">
          <div className="dev-section-heading compact">
            <div><span className="dev-section-number">02</span><p className="dev-eyebrow">TECHNICAL STACK</p></div>
            <h2>Tools I use to ship.</h2>
          </div>
          <div className="dev-stack-grid">
            {stackGroups.map((group) => (
              <article className="dev-stack-card" key={group.title}>
                <span>{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div>{group.items.map((item) => <b key={item}>{item}</b>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dev-section dev-container" id="about">
        <div className="dev-about-grid">
          <div className="dev-about-copy">
            <div><span className="dev-section-number">03</span><p className="dev-eyebrow">HOW I BUILD</p></div>
            <h2>I care about the system behind the screen.</h2>
            <p>
              A polished interface is only one layer. I think about tenant boundaries, data structure, permissions, queues, failure paths, observability and how AI behaves inside real product workflows. My strongest work is where frontend, backend, infrastructure and product logic need to meet cleanly.
            </p>
            <a href="/resume" className="dev-text-link">View resume <Arrow /></a>
          </div>
          <div className="dev-scope-list">
            {engineeringScope.map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="dev-contact" id="contact">
        <div className="dev-container dev-contact-grid">
          <div>
            <p className="dev-eyebrow">OPEN TO THE RIGHT OPPORTUNITY</p>
            <h2>Have a product<br />worth shipping?</h2>
          </div>
          <div className="dev-contact-side">
            <p>I&apos;m open to full-stack development opportunities, remote work and product-focused teams where I can keep building real systems end to end.</p>
            <a className="dev-email" href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com <Arrow /></a>
            <div className="dev-contact-links">
              <a href="https://github.com/Mohamedaloubaido" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href="/resume">Resume <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="dev-footer dev-container">
        <span>© 2026 Mohammed Al-Obaido</span>
        <span>Built with Next.js + TypeScript</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
