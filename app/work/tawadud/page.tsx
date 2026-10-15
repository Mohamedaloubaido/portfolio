export const metadata = {
  title: "TAWADUD Case Study | Mohammed Al-Obaido",
  description: "TAWADUD, an AI customer experience platform designed and developed by Mohammed Al-Obaido.",
};

const features = [
  ["AI Agent", "Arabic and English answers grounded in approved company knowledge, with uncertainty routed to a person."],
  ["Shared Inbox", "A shared view of conversations, assignment, follow-up and replies from human teammates."],
  ["Knowledge", "Import and index website pages, documents and written answers for retrieval during conversations."],
  ["Human Handoff", "Move a conversation from AI to a person while keeping its history in the same workspace."],
];

export default function TawadudCaseStudy() {
  return (
    <main className="case-page case-tawadud">
      <header className="case-nav container">
        <a className="case-brand" href="/" aria-label="Mohammed Al-Obaido home"><span>~/</span>mohammed</a>
        <a className="case-back" href="/#work">← Back to selected work</a>
      </header>

      <section className="case-hero container">
        <div className="case-kicker">CASE STUDY · AI SAAS · 2026</div>
        <h1>TAWADUD</h1>
        <p className="case-lead">A full-stack customer experience platform connecting an AI agent, company knowledge, shared conversations and human support in one system.</p>
        <div className="case-meta-grid">
          <div><span>ROLE</span><strong>Full-Stack Developer · Product Designer</strong></div>
          <div><span>SYSTEMS</span><strong>AI Agent · Shared Inbox · Knowledge · Human Handoff</strong></div>
          <div><span>STACK</span><strong>Next.js · React · TypeScript · Supabase · PostgreSQL · OpenAI</strong></div>
        </div>
        <a className="case-live-link" href="https://gettawadud.com" target="_blank" rel="noreferrer">Open live product <span>↗</span></a>
      </section>

      <section className="case-stage">
        <div className="container">
          <div className="case-stage-head"><span>PRODUCT INTERFACE</span><span>AI + HUMAN WORKFLOW</span></div>
          <div className="case-product-window">
            <div className="case-window-bar"><i /><i /><i /><span>tawadud / workspace / inbox</span></div>
            <div className="tawadud-case-ui">
              <aside className="tawadud-case-rail"><b>T</b><span /><span /><span /></aside>
              <div className="tawadud-case-list">
                <small>SHARED INBOX</small>
                <h3>Conversations</h3>
                <div className="tawadud-case-item active"><strong>Website inquiry</strong>AI answered · now</div>
                <div className="tawadud-case-item"><strong>Product question</strong>Assigned · 4m</div>
                <div className="tawadud-case-item"><strong>Support request</strong>Human handoff · 9m</div>
              </div>
              <div className="tawadud-case-chat">
                <header><span>Customer conversation</span><b>AI ACTIVE</b></header>
                <div className="tawadud-bubble customer">Can you explain how this service works?</div>
                <div className="tawadud-bubble ai">Yes. I can answer from the company knowledge base, and hand the conversation to a teammate when needed.</div>
                <div className="tawadud-case-compose">Reply or take over… <span>↵</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">THE PROBLEM</div>
        <div className="case-two-col">
          <h2>Customer support breaks when knowledge and conversations live in separate places.</h2>
          <div className="case-copy">
            <p>Repeated questions create unnecessary workload when information is scattered across documents, web pages and individual conversations. A disconnected handoff also forces customers to repeat context.</p>
            <p>I built TAWADUD around one connected workflow: the AI answers from approved knowledge, conversations stay visible to the team, and a person can take over without losing history.</p>
          </div>
        </div>
      </section>

      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">CORE SYSTEMS</div>
          <div className="system-grid">
            {features.map(([title, description], index) => (
              <article className="system-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">IMPLEMENTATION</div>
        <div className="case-two-col">
          <h2>From interface and data model to AI behavior and deployment.</h2>
          <div className="case-copy">
            <p>The application combines Next.js and React interfaces with TypeScript product logic, Supabase/PostgreSQL data, workspace access controls, OpenAI-powered answers and Vercel deployment.</p>
            <p>I implemented the embeddable website widget, knowledge ingestion flows, conversation assignment, analytics, workspace roles, multi-factor authentication and account security controls.</p>
            <p>I also tested customer and operator paths, reviewed failure states and iterated on behavior until the product worked as one coherent system rather than a set of disconnected screens.</p>
          </div>
        </div>
      </section>

      <section className="case-next"><div className="container"><span>NEXT CASE STUDY</span><a href="/work/zorvenaq">Zorvenaq <b>↗</b></a></div></section>
      <footer className="footer container"><span>© 2026 Mohammed Al-Obaido</span><a href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com ↗</a></footer>
    </main>
  );
}
