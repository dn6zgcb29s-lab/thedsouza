import Link from "next/link";

const workflow = [
  {
    number: "01",
    title: "Define the problem",
    description:
      "Clarify the practical need, intended users and successful outcome before selecting technology.",
  },
  {
    number: "02",
    title: "Confirm evidence and boundaries",
    description:
      "Separate verified facts from assumptions while identifying privacy, ownership and disclosure constraints.",
  },
  {
    number: "03",
    title: "Design the smallest useful solution",
    description:
      "Choose a maintainable technical approach that delivers useful value without unnecessary complexity.",
  },
  {
    number: "04",
    title: "Build in focused micro-sprints",
    description:
      "Implement small, reviewable increments with explicit scope and stopping points.",
  },
  {
    number: "05",
    title: "Validate quality and privacy",
    description:
      "Run type, lint, build, responsive, accessibility, security and privacy checks appropriate to the work.",
  },
  {
    number: "06",
    title: "Review before release",
    description:
      "Inspect the complete change, confirm claims and obtain approval before committing or publishing.",
  },
  {
    number: "07",
    title: "Publish through controlled versioning",
    description:
      "Use Git history and normal deployment workflows so every production change remains attributable and recoverable.",
  },
  {
    number: "08",
    title: "Verify production",
    description:
      "Confirm live routes, content, metadata, security behavior and browser health after propagation.",
  },
];

export default function Delivery() {
  return (
    <section
      id="delivery"
      className="border-t border-white/5 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow">Delivery approach</p>

          <h2 className="section-title mt-5">
            A controlled path from problem to production
          </h2>

          <p className="lead mt-6">
            Every engagement is divided into focused, reviewable steps so
            decisions remain clear, risk stays contained and releases remain
            recoverable.
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
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
