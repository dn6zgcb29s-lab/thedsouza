import Link from "next/link";

const workflow = [
  {
    number: "01",
    title: "Explore",
    description:
      "Clarify the real need, who it is for and what success looks like. Separate verified facts from assumptions, and test whether AI is the right tool at all.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Choose the simplest maintainable approach, with privacy, ownership and cost boundaries agreed before anything is built.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Deliver in small, reviewable increments with explicit scope and stopping points. AI can assist the work; people make the decisions.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Check quality, accessibility, security and privacy before release, and document what was built so it can be maintained.",
  },
];

export default function Delivery() {
  return (
    <section
      id="delivery"
      className="border-t border-white/5 bg-slate-900/40 px-6 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow">Approach</p>

          <h2 className="section-title mt-5">
            Explore, design, build, validate
          </h2>

          <p className="lead mt-6">
            Every engagement is divided into focused, reviewable steps so
            decisions stay clear, risk stays contained and the work can be
            handed over.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step) => (
            <li key={step.number} className="card p-5 sm:p-6">
              <span className="font-mono text-sm text-sky-400">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-slate-400">
            AI can support research, implementation and verification.
            Architecture, judgment, privacy decisions and publication control
            remain human-led.
          </p>

          <Link href="/#contact" className="btn-primary shrink-0">
            Discuss a challenge
          </Link>
        </div>
      </div>
    </section>
  );
}
