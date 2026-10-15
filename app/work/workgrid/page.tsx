export const metadata = {
  title: "Workgrid Case Study | Mohammed Al-Obaido",
  description: "Workgrid, a project management SaaS backend case study by Mohammed Al-Obaido.",
};

const systems = [
  ["Authentication", "JWT-based registration and login with hashed passwords, expiring access tokens and protected routes."],
  ["Multi-tenancy", "Users belong to isolated workspaces through explicit memberships instead of global application roles."],
  ["Authorization", "OWNER, ADMIN and MEMBER permissions are enforced on the server before workspace actions execute."],
  ["Auditability", "Important mutations create workspace-scoped audit records so operational changes remain traceable."],
];

const stack = [
  ["Runtime", "Node.js 22 · Fastify · TypeScript"],
  ["Data", "PostgreSQL · Prisma ORM · relational constraints"],
  ["Security", "JWT · bcrypt · RBAC · request validation · rate limiting"],
  ["Quality", "Vitest · ESLint · Docker · GitHub Actions · OpenAPI"],
];

export default function WorkgridCaseStudy() {
  return (
    <main className="case-page case-workgrid">
      <header className="case-nav container">
        <a className="case-brand" href="/"><span>~/</span>mohammed</a>
        <a className="case-back" href="/#work">← Back to selected work</a>
      </header>

      <section className="case-hero container">
        <div className="case-kicker">CASE STUDY · BACKEND SAAS · 2026</div>
        <h1>WORK<em>GRID</em></h1>
        <p className="case-lead">A multi-tenant project management backend built to make authentication, relational data, authorization, auditability and API quality visible in one focused engineering project.</p>
        <div className="case-meta-grid">
          <div><span>ROLE</span><strong>Backend / Full-Stack Developer</strong></div>
          <div><span>FOCUS</span><strong>REST API · RBAC · Multi-tenancy · Audit Logs</strong></div>
          <div><span>STACK</span><strong>Fastify · TypeScript · PostgreSQL · Prisma · Docker</strong></div>
        </div>
        <a className="case-live-link" href="https://github.com/Mohamedaloubaido/workgrid" target="_blank" rel="noreferrer">VIEW SOURCE CODE ↗</a>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHY I BUILT IT</div>
        <div className="case-two-col">
          <h2>Backend quality becomes visible when permissions, data and state have to agree.</h2>
          <div className="case-copy">
            <p>Workgrid was designed as a portfolio project that goes beyond CRUD screens. The goal was to model the concerns that appear in real SaaS systems: workspace isolation, user roles, protected actions, relational constraints and traceable mutations.</p>
            <p>The API keeps authentication separate from authorization. A valid session proves who the user is; workspace membership and role checks decide what that user is allowed to do.</p>
          </div>
        </div>
      </section>

      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">SYSTEM ARCHITECTURE</div>
          <div className="flow-map">
            <div><span>01</span><strong>HTTP API</strong><small>Fastify routes + OpenAPI</small></div>
            <b>→</b>
            <div><span>02</span><strong>Validation</strong><small>Zod request boundaries</small></div>
            <b>→</b>
            <div><span>03</span><strong>Authorization</strong><small>Workspace-scoped RBAC</small></div>
            <b>→</b>
            <div><span>04</span><strong>Persistence</strong><small>Prisma + PostgreSQL</small></div>
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
        <div className="case-section-label">DATA MODEL</div>
        <div className="state-chain">
          {['user','membership','workspace','project','task'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
        </div>
        <p className="chain-note">Membership is the authorization boundary. Projects and tasks inherit workspace ownership through their relational path, while audit records bind actions to both an actor and a workspace.</p>
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
            <article className="system-card"><span>01</span><h3>Server-side RBAC</h3><p>Permission checks live beside backend operations rather than relying on hidden UI controls.</p></article>
            <article className="system-card"><span>02</span><h3>Database constraints</h3><p>Unique workspace slugs, project keys and relational foreign keys protect invariants below the HTTP layer.</p></article>
            <article className="system-card"><span>03</span><h3>Predictable failures</h3><p>Validation, authorization, not-found and conflict paths return explicit error shapes instead of generic failures.</p></article>
            <article className="system-card"><span>04</span><h3>Quality gates</h3><p>The repository includes linting, type checking, automated tests, Docker configuration and CI workflow definitions.</p></article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHAT THIS PROVES</div>
        <div className="impact-grid">
          <article><strong>Backend architecture</strong><p>Route boundaries, services, persistence and domain rules are separated enough to grow without becoming one file.</p></article>
          <article><strong>Security thinking</strong><p>Identity, authorization and tenant isolation are treated as product rules, not optional polish.</p></article>
          <article><strong>Relational modeling</strong><p>Workspace membership, projects, tasks and audit history are represented as explicit PostgreSQL relationships.</p></article>
          <article><strong>Production mindset</strong><p>Documentation, Docker, graceful shutdown, rate limiting and automated quality checks are part of the repository from the start.</p></article>
        </div>
      </section>

      <section className="case-next"><div className="container"><span>NEXT CASE STUDY</span><a href="/work/tawadud">TAWADUD <b>↗</b></a></div></section>
      <footer className="footer container"><span>© 2026 Mohammed Al-Obaido</span><a href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com ↗</a></footer>
    </main>
  );
}
