export const metadata = {
  title: "AgentGate Case Study | Mohammed Al-Obaido",
  description: "AgentGate, an AI agent reliability and CI platform case study by Mohammed Al-Obaido.",
};

const systems = [
  ["Evaluation datasets", "JSONL evaluation cases turn agent behavior into repeatable test inputs instead of one-off manual prompting."],
  ["Evaluator API", "A FastAPI service scores cases with deterministic heuristics and can optionally use an OpenAI LLM-as-a-Judge provider."],
  ["CI quality gates", "Threshold failures return a non-zero CLI exit code so regressions can block a pull request or deployment pipeline."],
  ["Developer CLI", "The agentgate eval command provides a small developer-facing surface for running evaluation suites locally or in CI."],
  ["Trace-ready data model", "Projects, datasets, runs, cases and traces are modeled in PostgreSQL/Supabase for persistent evaluation history."],
  ["Dashboard foundation", "A Next.js dashboard presents production-style metrics and trace previews while keeping the evaluator as a separate service."],
];

const stack = [
  ["Evaluation", "Python · FastAPI · heuristic scoring · optional LLM judge"],
  ["Developer tooling", "Node.js CLI · JSONL datasets · reusable GitHub Action"],
  ["Frontend", "Next.js · React · TypeScript"],
  ["Data", "PostgreSQL · Supabase schema · evaluation runs and traces"],
  ["Quality", "GitHub Actions · evaluator tests · CLI syntax checks"],
];

export default function AgentGateCaseStudy() {
  return (
    <main className="case-page case-workgrid">
      <header className="case-nav container">
        <a className="case-brand" href="/"><span>~/</span>mohammed</a>
        <a className="case-back" href="/#work">← Back to selected work</a>
      </header>

      <section className="case-hero container">
        <div className="case-kicker">CASE STUDY · AI RELIABILITY · OPEN SOURCE · 2026</div>
        <h1>AGENT<em>GATE</em></h1>
        <p className="case-lead">An evaluation and CI quality-gate platform for AI agents — built to make answer quality, grounding and regression risk testable before agent changes are merged or deployed.</p>
        <div className="case-meta-grid">
          <div><span>ROLE</span><strong>Full-Stack / Applied AI Developer</strong></div>
          <div><span>FOCUS</span><strong>Evaluation · CI Gates · Developer Tooling · AI Reliability</strong></div>
          <div><span>STACK</span><strong>FastAPI · Python · Next.js · TypeScript · PostgreSQL</strong></div>
        </div>
        <a className="case-live-link" href="https://github.com/Mohamedaloubaido/agentgate" target="_blank" rel="noreferrer">VIEW SOURCE CODE ↗</a>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHY I BUILT IT</div>
        <div className="case-two-col">
          <h2>AI agents need regression tests that understand behavior, not only deterministic code output.</h2>
          <div className="case-copy">
            <p>Traditional unit tests work well when the same input should always produce the same output. Agent systems are different: generated answers, tool calls and judged quality can vary while still needing a reliable release process.</p>
            <p>AgentGate turns that problem into an engineering workflow. Evaluation datasets define expected behavior, an evaluator produces metrics, thresholds decide whether the run passes, and CI can block a change when quality drops below the configured gate.</p>
          </div>
        </div>
      </section>

      <section className="case-dark">
        <div className="container case-section">
          <div className="case-section-label light">EVALUATION PIPELINE</div>
          <div className="flow-map">
            <div><span>01</span><strong>Agent Change</strong><small>Prompt or implementation</small></div>
            <b>→</b>
            <div><span>02</span><strong>Dataset</strong><small>Repeatable evaluation cases</small></div>
            <b>→</b>
            <div><span>03</span><strong>Evaluator</strong><small>Heuristics + optional LLM judge</small></div>
            <b>→</b>
            <div><span>04</span><strong>Quality Gate</strong><small>Pass or block CI</small></div>
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
        <div className="case-section-label">DEVELOPER WORKFLOW</div>
        <div className="state-chain">
          {['change agent','run evals','score cases','check thresholds','merge / block'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
        </div>
        <p className="chain-note">The same evaluation suite can run locally through the CLI and inside GitHub Actions, keeping the release criterion explicit instead of relying on subjective spot checks.</p>
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
            <article className="system-card"><span>01</span><h3>Deterministic first</h3><p>Local heuristic scoring keeps the foundation testable without requiring an external model for every evaluation run.</p></article>
            <article className="system-card"><span>02</span><h3>LLM judge is optional</h3><p>Model-based judging extends the evaluator for semantic quality while keeping the system usable when no AI provider is configured.</p></article>
            <article className="system-card"><span>03</span><h3>CI-native failure</h3><p>Threshold failures map directly to process exit codes so evaluation quality can become a required engineering gate.</p></article>
            <article className="system-card"><span>04</span><h3>Extensible boundaries</h3><p>Dashboard, evaluator, CLI, action and persistence are separate surfaces so each part can evolve without collapsing into one monolith.</p></article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-section-label">WHAT THIS PROVES</div>
        <div className="impact-grid">
          <article><strong>Applied AI engineering</strong><p>The project treats AI quality as a measurable software concern rather than simply adding a model call to an interface.</p></article>
          <article><strong>Developer tooling</strong><p>The product includes an evaluator API, CLI and GitHub Action designed around an actual engineering workflow.</p></article>
          <article><strong>Release discipline</strong><p>Agent regressions can be evaluated before merge or deployment through explicit thresholds and repeatable cases.</p></article>
          <article><strong>System design</strong><p>Evaluation, persistence, UI and CI integration are separated into clear architectural responsibilities.</p></article>
        </div>
      </section>

      <section className="case-next"><div className="container"><span>NEXT CASE STUDY</span><a href="/work/pulseops-ai">PULSEOPS AI <b>↗</b></a></div></section>
      <footer className="footer container"><span>© 2026 Mohammed Al-Obaido</span><a href="mailto:obedomohammed@gmail.com">obedomohammed@gmail.com ↗</a></footer>
    </main>
  );
}
