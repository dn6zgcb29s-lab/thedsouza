import { careerStages, formatPeriod } from "@/data/career";

const capabilities = [
  "End User Computing",
  "Microsoft Cloud and Endpoint Management",
  "Infrastructure and Virtualisation",
  "Technical Troubleshooting",
  "Documentation and Knowledge Transfer",
  "Web and Technical Project Delivery",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 bg-slate-900/40 px-6 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Background</p>

        <h2 className="section-title mt-5 max-w-3xl">
          Enterprise-grade depth, applied{" "}
          <span className="whitespace-nowrap">hands-on</span>
        </h2>

        <p className="lead mt-6 max-w-3xl">
          22+ years of professional IT experience, starting on the frontline of
          enterprise support and moving into engineering.
        </p>

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {careerStages.map((stage, index) => (
            <li
              key={stage.id}
              className="card relative overflow-hidden p-6 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-400/70 via-sky-400/20 to-transparent"
              />

              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                  Stage {index + 1}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {formatPeriod(stage)}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-snug text-white">
                {stage.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">{stage.summary}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Technical foundation
            </h3>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex gap-4 leading-7 text-slate-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3.5 h-px w-4 shrink-0 bg-sky-400"
                  />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
            <a href="#contact" className="btn-primary">
              Discuss a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
