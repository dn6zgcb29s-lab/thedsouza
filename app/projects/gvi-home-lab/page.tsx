import type { Metadata } from "next";
import Link from "next/link";

const title = "GVI: The Virtualisation Foundation of GHDC";
const description =
  "How Glen Virtualization Intelligence translated enterprise virtualisation experience into a personal Proxmox home lab and the foundation for GHDC.";
const section = "px-6 py-20 sm:px-8";
const heading = "text-3xl font-bold sm:text-4xl";
const body = "text-lg leading-8 text-slate-300";
const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects/gvi-home-lab",
  },
  openGraph: {
    type: "article",
    url: "https://www.thedsouza.com/projects/gvi-home-lab",
    siteName: "Glen D'Souza",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const transferablePractices = [
  "Repeatable configuration",
  "Automation-first thinking",
  "Structured troubleshooting",
  "Workload separation",
  "Resource awareness",
  "Documentation",
  "Controlled change",
  "Operational responsibility",
];

const foundationCapabilities = [
  "Confidence operating mixed Windows and Linux workloads",
  "Practical Proxmox administration",
  "Container and Docker experience",
  "Remote troubleshooting and administration",
  "Monitoring and service-awareness habits",
  "Resource and capacity awareness",
  "Understanding the difference between building a lab and operating a dependable platform",
];

const evolutionDrivers = [
  "Clearer architecture",
  "Better documentation",
  "More deliberate storage planning",
  "Recovery thinking",
  "Observability",
  "Network resilience",
  "Controlled expansion",
  "Separation between current capability and future plans",
];

const lessons = [
  "Enterprise practices can improve even a small personal environment.",
  "Automation is most valuable when paired with validation and documentation.",
  "Operational reliability requires more than successfully starting a service.",
  "Resource constraints encourage deliberate architecture.",
  "A working lab can become a platform when its purpose, boundaries and roadmap are made explicit.",
];

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

export default function GviHomeLabPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <article>
        <header className="border-b border-slate-800 px-6 pb-20 pt-10 sm:px-8 sm:pt-12">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/#projects"
              className={`inline-flex font-medium text-slate-300 transition hover:text-sky-400 ${focus}`}
            >
              Back to projects
            </Link>
            <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400 sm:tracking-[0.25em]">
              Historical foundation
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              Glen Virtualization Intelligence began as a personal environment
              for applying years of enterprise virtualisation experience in a
              practical, independently managed home lab. It became the
              operational foundation from which the larger GHDC platform was
              later designed.
            </p>
            <p className="mt-8 inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              Operational foundation • Evolved into GHDC
            </p>
          </div>
        </header>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Where GVI began</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                The idea grew from more than ten years of virtualisation work at
                NTT DATA. During that professional experience, Glen developed
                strong PowerCLI capability and used automation for repeatable
                virtual-infrastructure provisioning and administrative work.
              </p>
              <p>
                GVI provided a personal environment where that accumulated
                virtualisation knowledge could be explored independently. The
                project used Glen&apos;s experience, not employer systems, code,
                architecture, client data or confidential information.
              </p>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>
              From enterprise experience to a personal lab
            </h2>
            <p className={`mt-8 ${body}`}>
              The personal lab provided a place to apply transferable
              engineering practices without claiming to reproduce an enterprise
              environment.
            </p>
            <BulletList items={transferablePractices} />
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>The practical foundation</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                At an architectural level, GVI used Proxmox VE as the
                virtualisation platform for Linux workloads and Windows virtual
                machines, alongside containers and Docker-based services.
              </p>
              <p>
                DNS and monitoring capabilities supported service operation, and
                Tailscale provided secure private remote administration.
                Resource allocation and service operation were explored
                practically without exposing operational configuration.
              </p>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>What GVI helped develop</h2>
            <BulletList items={foundationCapabilities} />
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Why GVI evolved</h2>
            <p className={`mt-8 ${body}`}>
              The original lab proved the value of the environment but also
              exposed the need for a more deliberate platform approach.
            </p>
            <BulletList items={evolutionDrivers} />
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>From GVI to GHDC</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                GVI was not replaced as a failed experiment. It became the
                working foundation and learning environment from which GHDC
                emerged as a more structured, documented and expandable private
                datacentre platform.
              </p>
              <Link
                href="/projects/home-datacenter"
                className={`inline-flex font-semibold text-sky-400 transition hover:text-sky-300 ${focus}`}
              >
                Explore the GHDC roadmap
              </Link>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Engineering lessons</h2>
            <BulletList items={lessons} />
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <aside className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-amber-200 sm:text-3xl">
                Public disclosure boundary
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                This case study describes GVI at an architectural and
                professional-development level. Private addressing, hostnames,
                workload identifiers, credentials, access configuration and
                other administrative details are intentionally excluded.
              </p>
            </aside>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <aside className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-sky-300 sm:text-3xl">
                Planning a virtualisation or infrastructure project?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                I can help turn practical requirements into a staged, documented
                technical environment with clear operational boundaries.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className={`inline-flex justify-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 ${focus}`}
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/#projects"
                  className={`inline-flex justify-center rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400 ${focus}`}
                >
                  Return to Projects
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}
