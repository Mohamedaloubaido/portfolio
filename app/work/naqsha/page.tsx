import { Base64Image } from "../../components/Base64Asset";

export const metadata = {
  title: "NAQSHA Case Study | Mohammed Al-Obaido",
  description: "Product operations, workflow design and e-commerce case study for NAQSHA.",
};

const phases = [
  ["01", "Define", "Turn the business idea into concrete store, studio and admin requirements."],
  ["02", "Design", "Map product selection, customization, proof approval, pricing and order journeys."],
  ["03", "Test", "Review real flows, find friction and edge cases, and iterate on rules and UX."],
  ["04", "Operate", "Extend the system with returns, support and custom-design service workflows."],
];

export default function NaqshaCaseStudy() {
  return (
    <main className="case-page">
      <header className="case-nav container">
        <a className="brand" href="/">M<span>/</span>A</a>
        <a className="text-link" href="/">← Back to portfolio</a>
      </header>

      <section className="case-hero container">
        <div className="case-kicker">CASE STUDY · 2026</div>
        <h1>NAQSHA</h1>
        <p className="case-lead">A custom-printing e-commerce concept shaped into a structured product, customization and operations system.</p>
        <div className="case-meta-grid">
          <div><span>ROLE</span><strong>Founder / Product Builder</strong></div>
          <div><span>FOCUS</span><strong>Product Operations · UX · Workflow Design</strong></div>
          <div><span>STACK EXPOSURE</span><strong>Next.js · React · TypeScript · Vercel</strong></div>
        </div>
      </section>

      <section className="case-gallery">
        <div className="container case-gallery-grid">
          <div>
            <div className="case-photo">
              <Base64Image dataPath="/assets/naqsha-cover.webp.b64" alt="NAQSHA product and campaign collection" />
            </div>
            <div className="case-caption"><span>Brand system & product presentation</span><span>NAQSHA / 2026</span></div>
          </div>
          <div>
            <div className="case-photo portrait">
              <Base64Image dataPath="/assets/naqsha-editorial.webp.b64" alt="NAQSHA editorial fashion campaign" />
            </div>
            <div className="case-caption"><span>Editorial direction</span><span>Syrian-contemporary identity</span></div>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">THE CHALLENGE</div>
        <div className="case-two-col">
          <h2>Custom printing creates operational complexity very quickly.</h2>
          <div className="case-copy">
            <p>A standard store can stop at product, variant and checkout. NAQSHA needed to support ready-made designs, user uploads, product-dependent options, proof approval and custom requests while keeping the customer journey understandable.</p>
            <p>The challenge was to define what happens before, during and after an order — and make each step manageable from an operations perspective.</p>
          </div>
        </div>
      </section>

      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">MY APPROACH</div>
          <div className="phase-grid">
            {phases.map(([num, title, body]) => (
              <article className="phase-card" key={num}>
                <span>{num}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WORKFLOW ARCHITECTURE</div>
        <div className="flow-map">
          <div><span>01</span><strong>Choose product</strong><small>Category-specific attributes</small></div>
          <b>→</b>
          <div><span>02</span><strong>Customize</strong><small>Design, upload or describe idea</small></div>
          <b>→</b>
          <div><span>03</span><strong>Approve proof</strong><small>Customer confirmation gate</small></div>
          <b>→</b>
          <div><span>04</span><strong>Fulfil order</strong><small>Support, delivery and returns</small></div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHAT I CONTRIBUTED</div>
        <div className="impact-grid">
          <article><strong>Customer journey</strong><p>Mapped flows from product selection through customization, approval and order handling.</p></article>
          <article><strong>Operational rules</strong><p>Defined proof approval, product attributes, pricing, support and return requirements.</p></article>
          <article><strong>QA & iteration</strong><p>Reviewed implementation behavior, identified edge cases and refined workflows.</p></article>
          <article><strong>Brand continuity</strong><p>Directed a consistent Syrian-contemporary visual and product experience.</p></article>
        </div>
      </section>

      <section className="case-next">
        <div className="container">
          <span>NEXT CASE STUDY</span>
          <a href="/work/zorvenaq">Zorvenaq <b>↗</b></a>
        </div>
      </section>
    </main>
  );
}
