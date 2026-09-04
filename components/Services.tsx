const services = [
  {
    title: "Modern Workplace and End User Computing",
    description:
      "Support and improve the devices, identity systems and workplace technology people use every day.",
    deliverables: [
      "Windows endpoint assessment",
      "Microsoft Intune and Autopilot guidance",
      "Microsoft Entra ID administration",
      "Device deployment and troubleshooting",
      "Process and support documentation",
    ],
  },
  {
    title: "Infrastructure and Virtualisation",
    description:
      "Plan, build and improve practical infrastructure for small environments, laboratories and self-hosted services.",
    deliverables: [
      "Infrastructure discovery and planning",
      "Virtual machine and service deployment",
      "VMware and Proxmox-based environments",
      "Self-hosted service implementation",
      "Operational and recovery documentation",
    ],
  },
  {
    title: "Websites and Digital Projects",
    description:
      "Create and improve modern websites that communicate clearly, work across devices and remain maintainable after launch.",
    deliverables: [
      "Website planning and information architecture",
      "Responsive interface implementation",
      "Next.js and React development",
      "Content and project presentation",
      "Deployment and post-launch verification",
    ],
  },
  {
    title: "Technical Discovery and Documentation",
    description:
      "Turn unclear requirements or inherited technology into an understandable plan with documented next steps.",
    deliverables: [
      "Current-state discovery",
      "Technical option assessment",
      "Implementation roadmap",
      "Troubleshooting and remediation plan",
      "Knowledge-transfer documentation",
    ],
  },
];

const engagementModels = [
  {
    title: "Discovery and Roadmap",
    description:
      "For an unclear problem, early-stage idea or environment that needs assessment before implementation.",
    outcome:
      "A documented understanding of the current state, priorities, options and recommended next steps.",
  },
  {
    title: "Focused Technical Sprint",
    description:
      "For a defined task or small technical outcome that can be completed and verified within a tightly controlled scope.",
    outcome:
      "A completed piece of work with testing, documentation and a clear handover.",
  },
  {
    title: "Staged Project Delivery",
    description:
      "For larger outcomes that need to be planned, implemented and reviewed across multiple controlled milestones.",
    outcome:
      "A structured delivery process with agreed scope, progress checkpoints, verification and final handover.",
  },
];

const linkFocus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 px-6 py-20 text-white sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Consulting services
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Practical technology services built around real needs
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            I help individuals, small organisations and growing teams improve
            the technology they rely on—from workplace devices and cloud
            administration to infrastructure, websites and documented technical
            projects.
          </p>

          <p className="mt-5 leading-7 text-slate-400">
            Engagements can begin with a focused discovery session, a defined
            piece of technical work or a complete project delivered in clear
            stages.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-sky-300">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {service.description}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Typical deliverables
                </h4>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex gap-3 leading-6 text-slate-400"
                    >
                      <span aria-hidden="true" className="text-sky-400">
                        •
                      </span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Engagement models
          </p>

          <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
            Ways we can work together
          </h3>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            The right starting point depends on how clearly the problem is
            understood and how much delivery support is required.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <article
              key={model.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >
              <h4 className="text-xl font-semibold text-white">
                {model.title}
              </h4>

              <p className="mt-4 leading-7 text-slate-300">
                {model.description}
              </p>

              <div className="mt-6 border-l-2 border-sky-400 pl-4">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
                  Outcome
                </p>
                <p className="mt-2 leading-7 text-slate-400">{model.outcome}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-sky-400/30 bg-sky-400/10 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
              Not sure where your project fits?
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Start with the problem you are trying to solve. I can help define
              the right first step before committing to a larger piece of work.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:mt-0 sm:shrink-0">
            <a
              href="#contact"
              className={`inline-flex justify-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 ${linkFocus}`}
            >
              Discuss Your Project
            </a>
            <a
              href="#projects"
              className={`inline-flex justify-center rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400 ${linkFocus}`}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
