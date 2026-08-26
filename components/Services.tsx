const services = [
  {
    title: "Technology direction",
    description:
      "Clear advice for business owners who need to understand what to improve, replace or build next.",
    outcomes: [
      "Technology consultations and roadmaps",
      "System and security reviews",
      "Practical recommendations and planning",
    ],
  },
  {
    title: "AI solutions and proofs of concept",
    description:
      "Focused prototypes that test whether an AI-enabled idea can solve a real business problem before major investment.",
    outcomes: [
      "AI-assisted workflows",
      "Proof-of-concept applications",
      "Testing and explainable results",
    ],
  },
  {
    title: "Websites and digital presence",
    description:
      "Practical website improvement and development focused on credibility, usability and business outcomes.",
    outcomes: [
      "Website reviews and improvements",
      "New project and business websites",
      "SEO and performance coordination",
    ],
  },
  {
    title: "Business systems and communication",
    description:
      "Dependable setup and migration of the everyday systems a business relies on to communicate and operate.",
    outcomes: [
      "Business email and domain migration",
      "Microsoft 365, devices and identity",
      "User setup, support and training",
    ],
  },
  {
    title: "Infrastructure and secure operations",
    description:
      "Infrastructure designed around reliability, secure access and the actual scale of the business.",
    outcomes: [
      "Networking and virtualisation",
      "Cloud and self-hosted planning",
      "Troubleshooting and security reviews",
    ],
  },
  {
    title: "Automation and technical delivery",
    description:
      "Structured delivery that turns repetitive work and complex technical projects into manageable stages.",
    outcomes: [
      "Workflow and process automation",
      "Technical project management",
      "Documentation, testing and handover",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 px-6 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Consulting services
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Practical technology support from advice through delivery
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every engagement begins with the business problem. From there, I
            help define the right-sized solution and deliver it in clear,
            testable stages.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold text-sky-300">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex gap-3 leading-6 text-slate-400"
                  >
                    <span aria-hidden="true" className="text-sky-400">
                      •
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}