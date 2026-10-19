export const metadata = {
  title: "PulseOps AI Case Study | Mohammed Al-Obaido",
  description: "PulseOps AI, a full-stack incident operations and applied-AI platform case study by Mohammed Al-Obaido.",
};

const systems = [
  ["Multi-tenant operations", "Users work inside isolated organizations with role-based permissions around services, incidents and operational data."],
  ["Uptime monitoring", "A Redis/BullMQ worker performs HTTP checks, records monitor history and uses retry/backoff before confirming outages."],
  ["Incident lifecycle", "Incidents connect affected services, authored timeline updates, health state and resolution into one traceable workflow."],
  ["Realtime coordination", "Redis-backed events keep operational views and public status information synchronized as incident state changes."],
  ["Evidence-grounded AI", "AI analysis receives stored incident evidence and returns probable causes, confidence indicators, next actions and customer-update drafts."],
  ["Postmortems", "Resolved incidents can generate AI-assisted postmortems while preserving known unknowns and keeping human review in the publication loop."],
];

const stack = [
  ["Web", "Next.js · React · TypeScript · authenticated operations dashboard"],
  ["API", "Fastify · TypeScript · RBAC · SSE / operational endpoints"],
  ["Data", "PostgreSQL · Prisma · persisted incidents, monitor history and AI artifacts"],
  ["Workers", "Redis · BullMQ · HTTP monitoring · retry/backoff"],
  ["AI & delivery", "OpenAI Responses API · Docker Compose · lint · typecheck · builds"],
];

export default function PulseOpsCaseStudy() {
  return (
    <main className="case-page case-workgrid">
      <header className="case-nav container">
        <a className="case-brand" href="/"><span>~/</span>mohammed</a>
        <a className="case-back" href="/#work">← Back to selected work</a>
      </header>

      <section className="case-hero container">
        <div className="case-kicker">CASE STUDY · INCIDENT OPERATIONS · APPLIED AI · 2026</div>
        <h1>PULSEOPS <em>AI</em></h1>
        <p className="case-lead">A full-stack incident operations platform combining uptime monitoring, realtime coordination, public status communication and evidence-grounded AI assistance inside one operational workflow.</p>
        <div className="case-meta-grid">
          <div><span>ROLE</span><strong>Full-Stack / Applied AI Developer</strong></div>
          <div><span>FOCUS</span><strong>Monitoring · Incidents · Realtime · AI Analysis · Postmortems</strong></div>
          <div><span>STACK</span><strong>Next.js · Fastify · PostgreSQL · Redis · BullMQ · OpenAI</strong></div>
        </div>
        <a className="case-live-link" href="https://github.com/Mohamedaloubaido/pulseops-ai" target="_blank" rel="noreferrer">VIEW SOURCE CODE ↗</a>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHY I BUILT IT</div>
        <div className="case-two-col">
          <h2>Operational AI is useful when it works from evidence and stays inside a controlled incident process.</h2>
          <div className="case-copy">
            <p>PulseOps AI was designed as an incident-management system first and an AI feature second. Services, monitor checks, outages, incident timelines and customer-facing status all exist independently of the model.</p>
            <p>The AI layer consumes that operational evidence to help operators form hypotheses, prioritize next actions, prepare status communication and draft postmortems. Generated output remains advisory and is persisted for traceability rather than silently automating remediation.</p>
          </div>
        </div>
      </section>

      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">INCIDENT PIPELINE</div>
          <div className="flow-map">
            <div><span>01</span><strong>Monitor Check</strong><small>Worker tests service health</small></div>
            <b>→</b>
            <div><span>02</span><strong>Incident</strong><small>Affected services + timeline</small></div>
            <b>→</b>
            <div><span>03</span><strong>AI Analysis</strong><small>Evidence-grounded assistance</small></div>
            <b>→</b>
            <div><span>04</span><strong>Resolution</strong><small>Status + postmortem</small></div>
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
        <div className="case-section-label">OPERATIONS FLOW</div>
        <div className="state-chain">
          {['monitor','detect','coordinate','communicate','resolve'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
        </div>
        <p className="chain-note">Monitoring and incident state are linked: checks establish evidence, incidents organize response, realtime events synchronize views, public status communicates impact and resolved incidents become reviewable postmortems.</p>
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
            <article className="system-card"><span>01</span><h3>Worker isolation</h3><p>Monitoring runs in its own BullMQ worker instead of tying recurring network checks to the web request lifecycle.</p></article>
            <article className="system-card"><span>02</span><h3>Evidence before AI</h3><p>Incident analysis is grounded in stored service, timeline and monitoring evidence rather than asking the model to infer an outage from a vague prompt.</p></article>
            <article className="system-card"><span>03</span><h3>Human publication</h3><p>AI can prepare customer-facing drafts, but publication and operational decisions remain controlled by human operators.</p></article>
            <article className="system-card"><span>04</span><h3>Persisted artifacts</h3><p>AI outputs are stored with the operational record so generated analysis can be reviewed alongside the incident that produced it.</p></article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHAT THIS PROVES</div>
        <div className="impact-grid">
          <article><strong>Backend depth</strong><p>The product includes relational data, background workers, Redis coordination, monitoring logic and incident state beyond a standard CRUD application.</p></article>
          <article><strong>Applied AI judgment</strong><p>AI is constrained to evidence-backed assistance and explicit human review rather than being presented as an autonomous root-cause authority.</p></article>
          <article><strong>Operational product design</strong><p>Internal response workflows and public status communication share the same incident source of truth.</p></article>
          <article><strong>System integration</strong><p>Web, API, PostgreSQL, Redis, workers and AI form one coherent operational architecture.</p></article>
        </div>
      </section>

      <section className="case-next"><div className="container"><span>NEXT CASE STUDY</span><a href="/work/arabdevkit">ARABDEVKIT <b>↗</b></a></div></section>
      <footer className="footer container"><span>© 2026 Mohammed Al-Obaido</span><a href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com ↗</a></footer>
    </main>
  );
}
