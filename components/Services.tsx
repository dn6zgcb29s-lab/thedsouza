import ContactCtas from "@/components/ContactCtas";
import { scopeCommitment } from "@/data/contact";
import Link from "next/link";

type ProofLink = { label: string; href: string };

const services: {
  title: string;
  description: string;
  deliverables: string[];
  proof?: ProofLink[];
}[] = [
  {
    title: "AI Opportunity & Strategy",
    description:
      "Work out where AI could genuinely help your business, and where it would not, before you spend money building anything.",
    deliverables: [
      "Finding the processes and decisions worth testing with AI",
      "Weighing AI against simple automation, or no change at all",
      "Understanding data, privacy and ownership constraints up front",
      "A clear, prioritised view of sensible next steps",
    ],
  },
  {
    title: "AI-Enabled Applications",
    description:
      "Design and build practical applications and internal tools that use AI where it adds value, with people reviewing the results.",
    deliverables: [
      "Internal tools and workflows with an AI-assisted step",
      "Web applications built with Next.js, React and TypeScript",
      "Human review designed into AI-assisted work",
      "Documentation so you can own and maintain what is built",
    ],
  },
  {
    title: "Technology Architecture & Integration",
    description:
      "Design how your systems, data and services fit together, and connect the tools you already use, with security and recovery planned from the start.",
    deliverables: [
      "Practical cloud, on-premises or hybrid designs",
      "Integrations and automation between existing systems",
      "Microsoft 365, identity and email set up to be easy to manage",
      "Secure remote access, backup and recovery planning",
    ],
    proof: [
      {
        label: "Epping Tennis Club (volunteer)",
        href: "/projects/epping-tennis-club",
      },
      { label: "GVI", href: "/projects/gvi-home-lab" },
      { label: "GHDC", href: "/projects/home-datacenter" },
    ],
  },
  {
    title: "Technical Discovery & Prototyping",
    description:
      "Explore an idea at small scale before committing to a full build, and get an honest answer about whether it is worth pursuing.",
    deliverables: [
      "A short, scoped discovery to define the problem and test feasibility",
      "Working prototypes you can try with real users",
      "Plain findings, including when an idea should not go ahead",
      "Scope and cost agreed before any work starts",
    ],
  },
];

const engagementModels = [
  {
    title: "Technology Health Check",
    description:
      "For when technology is slowing the business down and you are not sure why, or where to start. I review how your systems are set up and used, and find the practical improvements that matter most.",
    outcome:
      "A clear, prioritised action plan you can act on yourself or hand to me to implement.",
  },
  {
    title: "Focused Build Sprint",
    description:
      "A short, defined piece of hands-on work: fixing a specific workplace problem, improving your website, automating a repetitive process or making a defined infrastructure improvement.",
    outcome:
      "The work done, tested and handed over, with notes on what changed.",
  },
  {
    title: "Project Delivery",
    description:
      "For larger or multi-stage work, such as a new platform, a migration or a significant infrastructure build. Scope is agreed up front and delivered in stages you can review.",
    outcome:
      "An agreed scope, visible progress at each milestone and a documented handover.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/5 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow">Services</p>

          <h2 className="section-title mt-5">
            Where I can help your business with AI and technology
          </h2>

          <p className="lead mt-6">
            You don&apos;t need to know the technical terms. Tell me the
            challenge your business is facing, and I will help you decide what
            to do about it, then design and build it.
          </p>

          <p className="mt-5 leading-7 text-slate-400">
            Engagements can begin with a focused discovery session, a defined
            piece of technical work or a complete project delivered in clear
            stages.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card flex flex-col p-6 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="font-mono text-sm text-sky-400"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {service.description}
              </p>

              <h4 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                What this can look like
              </h4>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex gap-4 leading-6 text-slate-300"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-px w-4 shrink-0 bg-sky-400"
                    />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>

              {service.proof && (
                <p className="mt-auto border-t border-white/10 pt-6 text-sm leading-6 text-slate-400">
                  <span className="font-semibold text-slate-200">
                    Related work:{" "}
                  </span>
                  {service.proof.map((item, proofIndex) => (
                    <span key={item.label}>
                      {proofIndex > 0 && ", "}
                      <Link href={item.href} className="text-link">
                        {item.label}
                      </Link>
                    </span>
                  ))}
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-400">
          The case studies below show the engineering behind these services.
          AI-specific work is added there once it is complete and can be
          evidenced.
        </p>

        <div className="mt-24 max-w-3xl">
          <p className="eyebrow">How to get started</p>

          <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            Ways to work together
          </h3>

          <p className="lead mt-5">
            Bring me the problem. Most work starts small, with a Health Check or
            a single focused sprint, and grows into a staged project only if
            that is what the business actually needs.
          </p>

          <p className="mt-4 font-semibold text-sky-300">{scopeCommitment}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <article
              key={model.title}
              className="card flex flex-col p-6 sm:p-8"
            >
              <h4 className="text-xl font-semibold text-white">
                {model.title}
              </h4>

              <p className="mt-4 leading-7 text-slate-300">
                {model.description}
              </p>

              <div className="mt-auto border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                  Outcome
                </p>
                <p className="mt-2 leading-7 text-slate-300">{model.outcome}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-sky-400/25 bg-sky-400/[0.06] p-6 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
              Not sure where your challenge fits?
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Start with the problem you are trying to solve. A short email is
              enough to work out the right first step before committing to
              anything larger.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 lg:shrink-0">
            <ContactCtas align="start" />
          </div>
        </div>
      </div>
    </section>
  );
}
