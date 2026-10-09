import { Base64Image } from "../../components/Base64Asset";

export const metadata = {
  title: "Zorvenaq Case Study | Mohammed Al-Obaido",
  description: "Product requirements, workflow architecture and QA case study for Zorvenaq.",
};

const systems = [
  ["Hiring", "Matching, applications, invitations, interviews and offers."],
  ["Contracts", "Commitment, milestones, workspace activity and delivery health."],
  ["Finance", "Deposits, internal wallet, locked funds, withdrawals and auditability."],
  ["Governance", "Roles, permissions, disputes, appeals and administrative review."],
];

export default function ZorvenaqCaseStudy() {
  return (
    <main className="case-page">
      <header className="case-nav container">
        <a className="brand" href="/">M<span>/</span>A</a>
        <a className="text-link" href="/">← Back to portfolio</a>
      </header>

      <section className="case-hero container">
        <div className="case-kicker">CASE STUDY · 2026</div>
        <h1>ZORVENAQ</h1>
        <p className="case-lead">A freelance marketplace shaped around reliable hiring, contract execution, internal finance and operational control.</p>
        <div className="case-meta-grid">
          <div><span>ROLE</span><strong>Founder / Product Builder</strong></div>
          <div><span>FOCUS</span><strong>Requirements · QA · Workflow Architecture</strong></div>
          <div><span>STACK EXPOSURE</span><strong>Next.js · React · TypeScript · Supabase</strong></div>
        </div>
      </section>

      <section className="case-gallery zorvenaq-gallery">
        <div className="container case-gallery-grid">
          <div>
            <div className="case-photo">
              <Base64Image dataPath="/assets/zorvenaq-cover.webp.b64" alt="Zorvenaq platform visual journey" />
            </div>
            <div className="case-caption"><span>Marketplace concept & product communication</span><span>ZORVENAQ / 2026</span></div>
          </div>
        </div>
      </section>

      <section className="case-visual zorvenaq-visual">
        <div className="container mockup-frame">
          <div className="mock-dashboard">
            <aside><b>Z</b><span>Overview</span><span>Matching</span><span>Contracts</span><span>Finance</span><span>Disputes</span></aside>
            <div className="dash-main">
              <div className="dash-head"><small>OPERATIONS DASHBOARD</small><strong>Contract lifecycle</strong></div>
              <div className="dash-cards"><div><small>FUNDED</small><b>24</b></div><div><small>IN DELIVERY</small><b>11</b></div><div><small>REVIEW</small><b>08</b></div></div>
              <div className="dash-flow"><span>Offer</span><i>→</i><span>Fund</span><i>→</i><span>Work</span><i>→</i><span>Approve</span><i>→</i><span>Release</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">THE CHALLENGE</div>
        <div className="case-two-col">
          <h2>A marketplace is not one workflow. It is a network of dependent states.</h2>
          <div className="case-copy">
            <p>Hiring, funding, contracts, milestones, disputes and permissions all affect each other. A weak rule in one area can create operational or financial problems elsewhere.</p>
            <p>My work focused on defining those dependencies clearly, testing implemented behavior and making the product easier to reason about from both user and admin perspectives.</p>
          </div>
        </div>
      </section>

      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">SYSTEMS I SHAPED</div>
          <div className="system-grid">
            {systems.map(([title, body], index) => (
              <article className="system-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">ESCROW LOGIC</div>
        <div className="state-chain">
          {['funded','locked','submitted','approved','released'].map((item, index) => <div key={item}><span>0{index+1}</span><strong>{item}</strong></div>)}
        </div>
        <p className="chain-note">The product rules also account for disputed and refunded paths, with role-based administrative actions and auditability.</p>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHAT I CONTRIBUTED</div>
        <div className="impact-grid">
          <article><strong>Requirements</strong><p>Translated business decisions into clear user, finance and admin behaviors.</p></article>
          <article><strong>Workflow architecture</strong><p>Structured the end-to-end path from matching to review, disputes and completion.</p></article>
          <article><strong>Functional QA</strong><p>Tested flows, reproduced failures and iterated on implementation details.</p></article>
          <article><strong>Operational risk</strong><p>Focused on permissions, double-spend prevention, transaction uniqueness and traceability.</p></article>
        </div>
      </section>

      <section className="case-next">
        <div className="container">
          <span>PREVIOUS CASE STUDY</span>
          <a href="/work/naqsha">NAQSHA <b>↗</b></a>
        </div>
      </section>
    </main>
  );
}
