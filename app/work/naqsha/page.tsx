export const metadata = {
  title: "NAQSHA Case Study | Mohammed Al-Obaido",
  description: "NAQSHA, a custom-printing e-commerce product case study by Mohammed Al-Obaido.",
};

const phases = [
  ["01", "Model", "Translate products, variants, customization and proof approval into explicit application states."],
  ["02", "Build", "Shape storefront and admin flows around understandable customer and operator actions."],
  ["03", "Validate", "Test product-dependent options, pricing, order states and edge cases across the journey."],
  ["04", "Iterate", "Extend support, returns and custom-design workflows without fragmenting the experience."],
];

export default function NaqshaCaseStudy() {
  return (
    <main className="case-page case-naqsha">
      <header className="case-nav container">
        <a className="case-brand" href="/"><span>~/</span>mohammed</a>
        <a className="case-back" href="/#work">← Back to selected work</a>
      </header>

      <section className="case-hero container">
        <div className="case-kicker">CASE STUDY · E-COMMERCE · 2026</div>
        <h1>NAQ<em>SHA</em></h1>
        <p className="case-lead">A custom-printing commerce experience where product selection, personalization, proof approval and operations need to behave as one connected workflow.</p>
        <div className="case-meta-grid">
          <div><span>ROLE</span><strong>Full-Stack Product Builder</strong></div>
          <div><span>FOCUS</span><strong>E-commerce UX · Product Logic · Customization Workflows</strong></div>
          <div><span>STACK</span><strong>Next.js · React · TypeScript · Responsive UI · Vercel</strong></div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">THE PRODUCT CHALLENGE</div>
        <div className="case-two-col">
          <h2>Customization adds application logic to what looks like a simple store.</h2>
          <div className="case-copy">
            <p>A standard product page can stop at variant and checkout. NAQSHA needed ready-made designs, user uploads, product-dependent options, proof approval and custom requests without turning the journey into a confusing form.</p>
            <p>I approached it as a product-state problem: define what data exists at each step, what the customer can change, what requires confirmation, and what the operator needs to fulfil the order correctly.</p>
          </div>
        </div>
      </section>

      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">BUILD APPROACH</div>
          <div className="phase-grid">
            {phases.map(([num, title, body]) => (
              <article className="phase-card" key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">CUSTOMIZATION FLOW</div>
        <div className="flow-map">
          <div><span>01</span><strong>Choose product</strong><small>Category-specific options and variants</small></div>
          <b>→</b>
          <div><span>02</span><strong>Customize</strong><small>Select design, upload artwork or describe an idea</small></div>
          <b>→</b>
          <div><span>03</span><strong>Approve proof</strong><small>Confirmation gate before fulfilment</small></div>
          <b>→</b>
          <div><span>04</span><strong>Fulfil</strong><small>Production, support, delivery and returns</small></div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">TECH STACK</div>
        <div className="impact-grid">
          <article><strong>Next.js + React</strong><p>Storefront and workflow interfaces designed around fast, understandable customer actions.</p></article>
          <article><strong>TypeScript</strong><p>Product and customization logic with clearer states, options and validation rules.</p></article>
          <article><strong>Responsive UI</strong><p>Flows designed to stay usable across desktop and mobile shopping contexts.</p></article>
          <article><strong>Vercel</strong><p>Deployment and iteration around a production-oriented web application workflow.</p></article>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">ENGINEERING FOCUS</div>
        <div className="impact-grid">
          <article><strong>Stateful UX</strong><p>Kept the customer aware of what was selected, what was editable and what needed approval.</p></article>
          <article><strong>Product rules</strong><p>Structured product-dependent attributes, pricing logic and customization requirements.</p></article>
          <article><strong>Responsive flows</strong><p>Designed the experience to remain understandable across storefront and mobile contexts.</p></article>
          <article><strong>QA & edge cases</strong><p>Reviewed implementation behavior and refined cases around files, options, proof states and support.</p></article>
        </div>
      </section>

      <section className="case-next"><div className="container"><span>BACK TO FEATURED PRODUCT</span><a href="/work/tawadud">TAWADUD <b>↗</b></a></div></section>
      <footer className="footer container"><span>© 2026 Mohammed Al-Obaido</span><a href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com ↗</a></footer>
    </main>
  );
}
