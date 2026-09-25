import Link from "next/link";

const workflow = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "We talk through what is going wrong or what you need, and what a good outcome looks like, before any technology is chosen.",
  },
  {
    number: "02",
    title: "Agree a focused plan",
    description:
      "The smallest useful solution, with clear scope, stopping points and any privacy or ownership constraints agreed up front.",
  },
  {
    number: "03",
    title: "Build and check in small steps",
    description:
      "Work is delivered in small, reviewable increments and checked for security, accessibility and reliability as it goes.",
  },
  {
    number: "04",
    title: "Release safely and hand over",
    description:
      "Changes go live through a controlled, recoverable process, are verified afterwards and come with clear notes so you are not dependent on one person.",
  },
];

export default function Delivery() {
  return (
    <section
      id="delivery"
      className="border-y border-slate-800 bg-slate-900 px-6 py-20 text-white sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Delivery approach
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            A controlled path from problem to production
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Four simple steps, so you always know what is being done, why, and
            what comes next.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step) => (
            <li
              key={step.number}
              className="border border-slate-700 bg-slate-950/60 p-5 sm:p-6"
            >
              <span className="font-mono text-xs text-sky-400">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-6 border-t border-slate-700 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-slate-400">
            AI can support research, implementation and verification.
            Architecture, judgment, privacy decisions and publication control
            remain human-led.
          </p>

          <Link
            href="/#contact"
            className="inline-flex shrink-0 justify-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
