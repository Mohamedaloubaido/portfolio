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
    <main className="case-page">
      <header className="case-nav container">
        <a className="brand" href="/" aria-label="Mohammed Al-Obaido home">M<span>/</span>A</a>
        <a className="text-link" href="/#work">← Back to portfolio</a>
      </header>
      <section className="case-hero container">
        <div className="case-kicker">CASE STUDY · OCTOBER 2026</div>
        <h1>TAWADUD</h1>
        <p className="case-lead">An AI customer experience platform that connects a website chatbot, company knowledge and human conversations.</p>
        <div className="case-meta-grid">
          <div><span>MY ROLE</span><strong>Designer / Developer · AI-assisted development</strong></div>
          <div><span>FOCUS</span><strong>AI Agent · Shared Inbox · Knowledge · Human Handoff</strong></div>
          <div><span>STACK</span><strong>Next.js · React · TypeScript · Supabase · OpenAI</strong></div>
        </div>
        <a className="text-link tawadud-live-link" href="https://gettawadud.com" target="_blank" rel="noreferrer">Open TAWADUD ↗</a>
      </section>
      <section className="tawadud-showcase">
        <div className="container">
          <p className="case-kicker">AI CUSTOMER EXPERIENCE</p>
          <h2>Better customer conversations,<br />handled intelligently.</h2>
          <p>AI answers. Humans step in. Everything stays connected.</p>
          <div className="tawadud-feature-labels"><span>AI AGENT</span><span>SHARED INBOX</span><span>KNOWLEDGE</span><span>HUMAN HANDOFF</span></div>
        </div>
      </section>
      <section className="case-section container">
        <div className="case-section-label">THE PROBLEM</div>
        <div className="case-two-col">
          <h2>Repeated questions need consistent answers and a clear path to a person.</h2>
          <div className="case-copy">
            <p>Customer information often sits across documents, web pages and individual conversations. Repeated questions add work, while a disconnected handoff makes customers explain the same issue again.</p>
            <p>I designed and developed TAWADUD around approved knowledge and connected conversation workflows: AI handles questions it can answer, and people take over when needed.</p>
          </div>
        </div>
      </section>
      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">WHAT I BUILT</div>
          <div className="system-grid">{features.map(([title, description], index) => (
            <article className="system-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
          ))}</div>
        </div>
      </section>
      <section className="case-section container">
        <div className="case-section-label">IMPLEMENTATION</div>
        <div className="case-two-col">
          <h2>From product design to tested web workflows.</h2>
          <div className="case-copy">
            <p>My work covers the interface, Next.js and React implementation, TypeScript application logic, Supabase/PostgreSQL data structure, OpenAI integration and Vercel deployment, using AI-assisted development tools.</p>
            <p>The platform includes an embeddable website widget, knowledge import and indexing, conversation assignment, analytics, workspace roles, multi-factor authentication and account security controls.</p>
            <p>I tested customer and operator flows, reviewed failures and iterated on the product. The portfolio uses the same TAWADUD widget to answer questions about my work.</p>
          </div>
        </div>
      </section>
      <section className="case-next"><div className="container"><span>MORE SELECTED WORK</span><a href="/work/zorvenaq">Zorvenaq <b>↗</b></a></div></section>
      <footer className="footer container"><span>© 2026 Mohammed Al-Obaido</span><a href="mailto:obedomohammed@gmail.com">Contact me ↗</a></footer>
    </main>
  );
}
