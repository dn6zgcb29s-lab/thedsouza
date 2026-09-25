import { careerStages, formatPeriod } from "@/data/career";

const capabilities = [
  "End User Computing",
  "Microsoft Cloud and Endpoint Management",
  "Infrastructure and Virtualisation",
  "Technical Troubleshooting",
  "Documentation and Knowledge Transfer",
  "Web and Technical Project Delivery",
];

const linkFocus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-20 text-white sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Background
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          Enterprise-grade depth, applied to smaller businesses
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          22+ years of professional IT experience, starting on the frontline of
          enterprise support and moving into engineering. Today that depth goes
          directly to small businesses and founders, who get the same standard
          of work without needing an enterprise budget or an IT department.
        </p>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {careerStages.map((stage, index) => (
            <li
              key={stage.id}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
                  Stage {index + 1}
                </span>
                <span className="text-sm text-slate-400">
                  {formatPeriod(stage)}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {stage.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">{stage.summary}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Technical foundation
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex gap-3 leading-7 text-slate-300"
                >
                  <span aria-hidden="true" className="text-sky-400">
                    •
                  </span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end lg:pt-1">
            <a
              href="#projects"
              className={`inline-flex rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400 ${linkFocus}`}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={`inline-flex rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 ${linkFocus}`}
            >
              Discuss a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
