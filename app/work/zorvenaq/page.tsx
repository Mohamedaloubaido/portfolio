export const metadata = {
  title: "Zorvenaq Case Study | Mohammed Al-Obaido",
  description: "Zorvenaq, a full-stack freelance marketplace product case study by Mohammed Al-Obaido.",
};

const systems = [
  ["Hiring", "Matching, applications, invitations, interviews and offers connected as one stateful flow."],
  ["Contracts", "Commitment, milestones, workspace activity, QA and delivery health across the contract lifecycle."],
  ["Finance", "Deposits, internal wallet balances, locked funds, withdrawals, transaction IDs and auditability."],
  ["Governance", "Role-based administration, disputes, appeals, reviews and controlled operational actions."],
];

export default function ZorvenaqCaseStudy() {
  return (
    <main className="case-page case-zorvenaq">
      <header className="case-nav container">
        <a className="case-brand" href="/"><span>~/</span>mohammed</a>
        <a className="case-back" href="/#work">← Back to selected work</a>
      </header>

      <section className="case-hero container">
        <div className="case-kicker">CASE STUDY · MARKETPLACE · 2026</div>
        <h1>ZORV<em>ENAQ</em></h1>
        <p className="case-lead">A freelance marketplace built around hiring, contracts, milestone delivery, internal finance, disputes and role-based administration.</p>
        <div className="case-meta-grid">
          <div><span>ROLE</span><strong>Full-Stack Product Builder</strong></div>
          <div><span>FOCUS</span><strong>Marketplace Workflows · Contracts · Wallet · RBAC</strong></div>
          <div><span>STACK</span><strong>Next.js · React · TypeScript · Supabase · PostgreSQL · Docker</strong></div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">SYSTEM ARCHITECTURE</div>
        <div className="flow-map">
          <div><span>01</span><strong>Product UI</strong><small>Client and freelancer flows across matching, applications, contracts and workspaces</small></div>
          <b>→</b>
          <div><span>02</span><strong>Application logic</strong><small>Next.js and TypeScript rules controlling state transitions and product behavior</small></div>
          <b>→</b>
          <div><span>03</span><strong>Data & access</strong><small>Supabase/PostgreSQL, authentication, relational state and role-based permissions</small></div>
          <b>→</b>
          <div><span>04</span><strong>Operations</strong><small>Finance verification, disputes, reviews, auditability and administrative controls</small></div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">THE ENGINEERING CHALLENGE</div>
        <div className="case-two-col">
          <h2>A marketplace is a network of dependent states, not a collection of pages.</h2>
          <div className="case-copy">
            <p>Matching, offers, funding, contracts, milestones, reviews, disputes and permissions all affect one another. A state transition in one system can change what another user, wallet or admin role is allowed to do.</p>
            <p>I structured the product around explicit workflows and operational states, then iterated on the interface and implementation so both users and administrators could understand what happens next.</p>
          </div>
        </div>
      </section>

      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">CORE SYSTEMS</div>
          <div className="system-grid">
            {systems.map(([title, body], index) => (
              <article className="system-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">ESCROW STATE MODEL</div>
        <div className="state-chain">
          {['funded','locked','submitted','approved','released'].map((item, index) => <div key={item}><span>0{index+1}</span><strong>{item}</strong></div>)}
        </div>
        <p className="chain-note">The product also handles disputed and refunded paths, permission-aware finance actions and transaction traceability so money movement stays tied to contract state.</p>
      </section>

      <section className="case-section container">
        <div className="case-section-label">TECH STACK</div>
        <div className="impact-grid">
          <article><strong>Next.js + React</strong><p>Product interfaces, route structure and responsive user workflows.</p></article>
          <article><strong>TypeScript</strong><p>Typed product logic across contracts, finance states, permissions and UI behavior.</p></article>
          <article><strong>Supabase + PostgreSQL</strong><p>Authentication, relational data, application state and secure access patterns.</p></article>
          <article><strong>Docker + Vercel</strong><p>Local environment support, deployment workflows and production-oriented iteration.</p></article>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHAT I BUILT AROUND</div>
        <div className="impact-grid">
          <article><strong>Product state</strong><p>Clear end-to-end transitions from matching and offers through contracts, delivery and completion.</p></article>
          <article><strong>Permission logic</strong><p>Role-based access across super admin, finance, support, moderation and operational review.</p></article>
          <article><strong>Financial flows</strong><p>Wallet, deposit verification, locked funds, withdrawals, transaction uniqueness and audit logs.</p></article>
          <article><strong>QA & resilience</strong><p>Edge-case testing, failure review and iteration across multi-step user and admin workflows.</p></article>
        </div>
      </section>

      <section className="case-next"><div className="container"><span>NEXT CASE STUDY</span><a href="/work/naqsha">NAQSHA <b>↗</b></a></div></section>
      <footer className="footer container"><span>© 2026 Mohammed Al-Obaido</span><a href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com ↗</a></footer>
    </main>
  );
}
