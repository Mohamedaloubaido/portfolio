import PrintButton from "./PrintButton";
import { DownloadResumeButton } from "../components/Base64Asset";

export const metadata = {
  title: "Resume | Mohammed Al-Obaido",
  description: "Professional resume of Mohammed Al-Obaido.",
};

const roles = [
  {
    title: "Data Entry & Complaints Operations",
    company: "Ministry of Interior — Damascus, Syria",
    period: "Apr 2026 — Present",
    bullets: [
      "Processed, documented and followed up on 6,000+ complaints while validating data, updating records and preparing periodic reports.",
    ],
  },
  {
    title: "Currency Exchange & Remittance Officer",
    company: "Al-Hussein Exchange & Remittances",
    period: "Jun 2025 — Jun 2026",
    bullets: [
      "Processed and delivered 10,000+ remittances and completed 50,000+ local and foreign currency exchange transactions with verification and accuracy controls.",
      "Performed daily, weekly and monthly cash/inventory reconciliation and prepared reports, accounts, balance follow-ups and financial settlements.",
    ],
  },
  {
    title: "Data Entry Specialist",
    company: "New Horizons Student Services — Istanbul, Türkiye",
    period: "2019 — Mar 2026",
    bullets: [
      "Entered 50,000+ records per month with 99%+ accuracy and improved data-entry forms, contributing to a 40% reduction in errors.",
    ],
  },
  {
    title: "Data Entry Representative",
    company: "Apply for Free — Istanbul, Türkiye",
    period: "2018 — 2019",
    bullets: [
      "Maintained customer, invoice and daily operational records, prepared administrative reports and protected confidential information.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar container">
        <a className="text-link" href="/">← Back to portfolio</a>
        <div className="resume-toolbar-actions">
          <DownloadResumeButton className="resume-download" />
          <PrintButton />
        </div>
      </div>

      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <h1>Mohammed Al-Obaido</h1>
            <p>AI-Assisted Digital Product Developer | Data & Operations Specialist</p>
          </div>
          <div className="resume-contact">
            <span>Idlib, Syria</span>
            <a href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com</a>
            <span>Open to Remote, Contract & GCC Relocation</span>
          </div>
        </header>

        <section className="resume-block">
          <h2>Professional Summary</h2>
          <p>Data and operations professional with 7+ years of experience in high-volume data entry, verification, reporting, transaction processing and complaint handling, complemented by hands-on experience building digital products with AI-assisted development tools. Strong in operational accuracy, requirements analysis, functional testing, defect tracking and structured data management.</p>
        </section>

        <section className="resume-block">
          <h2>Professional Experience</h2>
          {roles.map((role) => (
            <div className="resume-role" key={role.title + role.company}>
              <div className="resume-role-head"><strong>{role.title} | {role.company}</strong><span>{role.period}</span></div>
              <ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
          ))}
        </section>

        <section className="resume-block">
          <h2>Selected Digital Projects</h2>
          <div className="resume-role"><div className="resume-role-head"><strong>ZORVENAQ | Freelance Marketplace — Founder / Product Builder</strong><span>2026</span></div><ul><li>Led product development using AI-assisted tools: defined requirements, tested workflows, tracked defects and worked within a Next.js / React / TypeScript and Supabase / PostgreSQL environment.</li><li>Defined flows for offers, contracts, internal wallet, permissions and transaction handling, then reviewed and validated implementation before acceptance.</li></ul></div>
          <div className="resume-role"><div className="resume-role-head"><strong>NAQSHA | Custom Printing E-commerce Store — Founder / Product Builder</strong><span>2026</span></div><ul><li>Led development of storefront and admin workflows, product customization, pricing logic and order flows using AI-assisted development.</li></ul></div>
        </section>

        <section className="resume-block resume-columns">
          <div><h2>Skills & Tools</h2><p><strong>Data & Operations:</strong> Microsoft Excel, Google Sheets, data verification, reporting, reconciliation, record management, complaint handling.</p><p><strong>Digital Product Work:</strong> requirements analysis, functional testing, defect tracking, Git/GitHub, Supabase, Vercel, AI-assisted development tools.</p><p><strong>Practical Exposure:</strong> Next.js, React, TypeScript, JavaScript, PostgreSQL, SQL, Docker, Node.js/npm, HTML/CSS.</p></div>
          <div><h2>Education & Languages</h2><p><strong>Education:</strong> Programming Diploma — Ataşehir Adıgüzel Meslek Yüksekokulu, Türkiye.</p><p><strong>Certifications:</strong> Professional Data Entry Certificate; Microsoft Excel — Advanced.</p><p><strong>Languages:</strong> Arabic — Native; Turkish — Good; English — Advanced.</p></div>
        </section>
      </article>
    </main>
  );
}
