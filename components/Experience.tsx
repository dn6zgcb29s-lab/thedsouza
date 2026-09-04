const stages = [
  {
    period: "2003–2024",
    title: "IT Support Foundation",
    description:
      "Built a strong foundation in user support, incident resolution, Windows environments and structured troubleshooting.",
  },
  {
    period: "2024–2025",
    title: "End User Computing Engineering",
    description:
      "Expanded into endpoint engineering, deployment, Microsoft Intune, Autopilot, Microsoft Entra ID, VMware vCenter, PowerCLI and enterprise support workflows.",
  },
  {
    period: "2025–Present",
    title: "Technical Consulting and Project Delivery",
    description:
      "Applying practical experience to independent consulting, self-hosted infrastructure, web projects and documented technical delivery.",
  },
];

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
          Professional experience
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          Experience that connects support, engineering and delivery
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          My career began in frontline IT support and evolved through enterprise
          end-user computing into hands-on infrastructure projects and
          independent technical consulting. That background helps me understand
          both the user experience and the systems operating behind it.
        </p>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <li
              key={stage.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
                  Stage {index + 1}
                </span>
                <span className="text-sm text-slate-400">{stage.period}</span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {stage.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Practical capabilities
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
