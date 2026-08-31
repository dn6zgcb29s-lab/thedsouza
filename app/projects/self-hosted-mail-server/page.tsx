import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Self-Hosted Business Mail Server | Glen D'Souza",
  description:
    "How Glen D'Souza designed and validated a privately operated business email platform using Mailcow, Postfix, Docker, TLS and authenticated mail delivery.",
};

const section = "px-6 py-20 sm:px-8";
const heading = "text-3xl font-bold sm:text-4xl";
const body = "text-lg leading-8 text-slate-300";
const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-xl border border-slate-700 bg-slate-800 p-5 leading-7 text-slate-300"
        >
          <span aria-hidden="true" className="text-sky-400">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function StatusList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-xl border border-slate-700 bg-slate-800 p-5 text-slate-200"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function SelfHostedMailServerPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <article>
        <header className="border-b border-slate-800 px-6 pb-20 pt-10 sm:px-8 sm:pt-12">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/#projects"
              className={`inline-flex font-medium text-slate-300 transition hover:text-sky-400 ${focus}`}
            >
              ← Back to selected projects
            </Link>
            <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400 sm:tracking-[0.25em]">
              Infrastructure engineering · Operational proof of concept
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
              Building a Self-Hosted Business Mail Server
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              I designed and validated a privately operated email platform to
              develop practical experience across Linux, containers, mail
              delivery, DNS authentication, security and infrastructure
              operations.
            </p>
            <p className="mt-8 font-medium text-sky-400">
              Mailcow • Postfix • Docker • DNS • TLS
            </p>
            <p className="mt-6 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">
              Operational proof of concept
            </p>
          </div>
        </header>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Project objective</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                The objective was to establish whether a small-business email
                platform could be operated on privately managed infrastructure
                using open-source software while maintaining dependable inbound
                delivery, authenticated outbound delivery and modern domain
                protection.
              </p>
              <p>
                The project was also a practical infrastructure exercise:
                building the environment, diagnosing delivery problems,
                validating each mail-flow stage and documenting a path from
                proof of concept to responsibly operated service.
              </p>
              <p>
                Open-source software reduces licensing costs, but domains,
                infrastructure, backups, connectivity and relay services may
                still carry costs. The goal was to validate the architecture and
                operational discipline, not to claim a zero-cost platform.
              </p>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Logical mail architecture</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                "Public email and DNS",
                "Protected inbound mail gateway",
                "Privately operated Mailcow platform",
                "Mailbox services",
                "Authenticated outbound relay",
                "External recipients",
              ].map((item, index) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-700 bg-slate-900 p-5"
                >
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                    Step {index + 1}
                  </div>
                  <div className="text-lg font-medium text-slate-200">
                    {item}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>What I implemented</h2>
            <BulletList
              items={[
                "Provisioned a dedicated Linux environment for the mail platform.",
                "Deployed and operated the containerised Mailcow service stack.",
                "Configured a protected inbound mail path.",
                "Configured authenticated outbound delivery through a reputable relay service.",
                "Implemented TLS for encrypted mail transport.",
                "Configured and validated SPF, DKIM and DMARC.",
                "Tested inbound and outbound delivery using external mail providers.",
                "Inspected queues and service logs while diagnosing mail-flow issues.",
                "Confirmed the operational health of the service stack.",
                "Created a recoverable infrastructure checkpoint after successful validation.",
              ]}
            />
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Validation results</h2>
            <StatusList
              items={[
                "Public inbound mail delivery succeeded.",
                "Encrypted TLS delivery was verified.",
                "Authenticated outbound delivery succeeded.",
                "SPF validation passed.",
                "DKIM validation passed.",
                "DMARC validation passed.",
                "Mail queues were confirmed clear after testing.",
                "The mail platform’s services were confirmed healthy.",
              ]}
            />
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>What the project demonstrated</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Linux server administration",
                "Docker and container operations",
                "SMTP mail-flow troubleshooting",
                "DNS and domain authentication",
                "TLS certificate implementation",
                "Log and queue analysis",
                "Secure relay integration",
                "Infrastructure validation",
                "Backup and recovery planning",
                "Responsible operational boundaries",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-700 bg-slate-800 p-5 leading-7 text-slate-300"
                >
                  <span aria-hidden="true" className="text-sky-400">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>
              From proof of concept to dependable service
            </h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                Successful email delivery is only one part of operating a mail
                platform. A dependable production service also requires
                monitoring, patching, backups, recovery testing, abuse
                protection, certificate renewal, reputation management and
                documented support procedures.
              </p>
              <p>
                The proof of concept validates the architecture and core mail
                flow. Continued operation will be governed by reliability,
                security and recovery requirements rather than by software
                licensing cost alone.
              </p>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Built through GHDC</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                The mail platform is one of the infrastructure workloads used to
                extend GHDC from a virtualisation home lab into a privately
                operated project-hosting and test-cloud environment.
              </p>
              <Link
                href="/projects/home-datacenter"
                className={`inline-flex font-medium text-sky-400 transition hover:text-sky-300 ${focus}`}
              >
                Explore the GHDC roadmap →
              </Link>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-amber-200">
                Security-conscious disclosure
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                This case study describes the platform at an architectural and
                professional-development level. It intentionally excludes email
                addresses, IP addresses, subnets, internal hostnames, device
                identifiers, credentials, DNS record values, ports, firewall
                rules, access methods, backup details and security-sensitive
                configuration.
              </p>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>
              Infrastructure built through practical validation
            </h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                This project demonstrates my progression from enterprise support
                and end-user computing into Linux infrastructure, container
                operations, secure communications and privately operated
                business platforms.
              </p>
              <Link
                href="/#projects"
                className={`inline-flex font-medium text-sky-400 transition hover:text-sky-300 ${focus}`}
              >
                Return to selected projects →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
