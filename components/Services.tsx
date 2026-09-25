import Link from "next/link";

type ProofLink = { label: string; href: string };

const services: {
  title: string;
  description: string;
  deliverables: string[];
  proof?: ProofLink[];
}[] = [
  {
    title: "Workplace technology that just works",
    description:
      "Get computers, email, accounts and Microsoft 365 set up properly, secured and easy to manage, so your team can get on with their work.",
    deliverables: [
      "Setting up and securing new computers and staff accounts",
      "Sorting out email, domains and mail delivery problems",
      "Moving email and files away from old or unreliable services",
      "Tidying up who has access to what",
      "Clear notes so you are not dependent on one person",
    ],
    proof: [
      {
        label: "Epping Tennis Club",
        href: "/projects/epping-tennis-club",
      },
    ],
  },
  {
    title: "Websites and digital platforms",
    description:
      "Design and build fast, maintainable websites, online stores and internal tools that you own and that keep working after launch.",
    deliverables: [
      "New websites or rebuilds of outdated ones",
      "Online store and ordering proofs of concept",
      "Internal tools and simple business applications",
      "Hosting, domains and deployment you control",
      "Testing on phones, tablets and desktops before go-live",
    ],
    proof: [
      { label: "thedsouza.com", href: "/projects/thedsouza-com" },
      {
        label: "Epping Tennis Club store POC",
        href: "/projects/epping-tennis-club",
      },
    ],
  },
  {
    title: "Automating repetitive work",
    description:
      "Replace manual copying, re-keying and repetitive admin with scripts, integrations and sensible automation that is documented and easy to hand over.",
    deliverables: [
      "Identifying the tasks that are worth automating",
      "Scripts and scheduled jobs for routine admin",
      "Connecting the systems you already use",
      "Documentation so the automation can be maintained",
    ],
  },
  {
    title: "Reliable, secure infrastructure",
    description:
      "Design, build and fix the servers, networks, cloud and self-hosted services your business depends on, with security and recovery planned from the start.",
    deliverables: [
      "Planning practical cloud, on-premises or hybrid setups",
      "Building and hardening servers and self-hosted services",
      "Secure remote access for you and your team",
      "Backup and recovery that has actually been tested",
      "Operational documentation for what was built",
    ],
    proof: [
      {
        label: "Self-hosted mail server",
        href: "/projects/self-hosted-mail-server",
      },
      { label: "GHDC", href: "/projects/home-datacenter" },
      { label: "GVI", href: "/projects/gvi-home-lab" },
    ],
  },
  {
    title: "Solving difficult technical problems",
    description:
      "When something keeps breaking and nobody can explain why, I investigate the root cause, fix it and show you what changed.",
    deliverables: [
      "Investigating recurring faults and unexplained failures",
      "Untangling inherited or undocumented setups",
      "A clear explanation of the cause and the fix",
      "A practical plan for anything that should change next",
    ],
    proof: [
      {
        label: "Epping Tennis Club",
        href: "/projects/epping-tennis-club",
      },
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
            What I can help with
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Technology problems I can solve for your business
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            You don&apos;t need to know the technical terms. Tell me what is
            slowing the business down, and I will design, build or fix the
            technology behind it.
          </p>

          <p className="mt-5 leading-7 text-slate-400">
            Engagements can begin with a focused discovery session, a defined
            piece of technical work or a complete project delivered in clear
            stages.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  What this can look like
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

              {service.proof && (
                <p className="mt-6 border-t border-slate-800 pt-4 text-sm leading-6 text-slate-400">
                  <span className="font-semibold text-slate-300">
                    See it in practice:{" "}
                  </span>
                  {service.proof.map((item, index) => (
                    <span key={item.label}>
                      {index > 0 && ", "}
                      <Link
                        href={item.href}
                        className={`text-sky-400 underline-offset-4 hover:underline ${linkFocus}`}
                      >
                        {item.label}
                      </Link>
                    </span>
                  ))}
                </p>
              )}
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
