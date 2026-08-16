import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Building GHDC | Glen D'Souza" },
  description:
    "Follow the staged development of Glen D'Souza’s secure, modular and heterogeneous private home datacenter built with Proxmox, Linux, Docker and Tailscale.",
};

const projectStatus = [
  ["Status", "In development"],
  ["Current phase", "Phase 0 — Network stabilisation"],
  ["Next milestone", "NAS storage foundation"],
  ["Time horizon", "Two-year staged build"],
  [
    "Primary objective",
    "Securely host, protect, test and demonstrate authorised projects",
  ],
];

const purposes = [
  "Secure access to my development environment from anywhere.",
  "A dependable platform for hosting and demonstrating authorised projects.",
  "A private environment for testing ideas before moving them to a public cloud.",
  "Centralised storage for virtual machines, project data and backups.",
  "Practical experience with virtualisation, networking, storage, cybersecurity, automation and observability.",
  "A heterogeneous environment combining x86, ARM64, Windows, Linux and macOS capabilities over time.",
  "A platform that grows according to workload demand and available resources.",
];

const operationalFoundation = [
  "Intel NUC running Proxmox VE.",
  "Windows and Linux virtual environments.",
  "Linux containers and Docker workloads.",
  "Portainer and Nginx Proxy Manager.",
  "Tailscale private remote access.",
  "MacBook Air administration and demonstration workstation.",
  "Existing private development and project-hosting services.",
];

const architecture = [
  ["Authorised operator devices", "Operational now"],
  ["Tailscale private access", "Operational now"],
  ["Security and network layer", "Planned"],
  ["Heterogeneous compute", "Planned"],
  ["Centralised storage", "Planned"],
  ["Virtual machines and containers", "Operational now"],
  ["Backup and recovery", "Planned"],
  ["Monitoring and automation", "Planned"],
];

const roadmap = [
  {
    phase: "Phase 0 — Stabilise",
    status: "In progress",
    copy: "Stabilise the Proxmox host’s network connection and validate it through sustained transfers, virtual-machine activity and network-performance testing.",
  },
  {
    phase: "Phase 1 — Storage and remote demonstrations",
    status: "Planned",
    copy: "Introduce a Synology NAS with NAS-grade drives for central project storage, backups and selected virtual-machine storage. Migrate and validate one workload at a time, then test secure project demonstrations from outside the home network.",
  },
  {
    phase: "Phase 2 — Protection and recovery",
    status: "Planned",
    copy: "Introduce Proxmox Backup Server, versioned and deduplicated backups, regular recovery testing, service-health monitoring and an independent or off-site copy of irreplaceable data.",
    note: "Storage redundancy will not be treated as a substitute for an independent backup strategy.",
  },
  {
    phase: "Phase 3 — Network and security",
    status: "Planned",
    copy: "Introduce managed multi-gigabit networking, separated management and storage traffic, VLAN segmentation, a dedicated OPNsense firewall and gateway, central identity, stronger monitoring and more deliberate access controls.",
  },
  {
    phase: "Phase 4 — Automation and heterogeneous computing",
    status: "Planned",
    copy: "Explore observability, infrastructure automation and additional heterogeneous compute using technologies such as Prometheus, Grafana, OpenTelemetry, Loki, Ansible, OpenTofu and a future K3s container environment.",
  },
  {
    phase: "Phase 5 — Continued evolution",
    status: "Future",
    copy: "Continue evolving GHDC after the initial roadmap, selecting improvements according to measured workload requirements and useful learning outcomes rather than technology trends alone.",
  },
];

const principles = [
  [
    "Reuse before replacement",
    "Existing equipment should continue providing value wherever it remains suitable.",
  ],
  [
    "Modular architecture",
    "Networking, storage, compute, security and operator devices should remain independently replaceable.",
  ],
  [
    "Secure remote access",
    "Management systems should use private authenticated access rather than direct exposure to the public internet.",
  ],
  [
    "Incremental validation",
    "One service or workload should be migrated and tested before the next.",
  ],
  [
    "Backup independence",
    "Storage redundancy is useful, but it is not a complete backup strategy.",
  ],
  [
    "Open standards and portability",
    "Projects should remain portable enough to move between GHDC and commercial cloud platforms.",
  ],
  [
    "Technology with purpose",
    "New technology should be introduced when it removes a measured constraint or creates a useful learning opportunity.",
  ],
];

const developmentAreas = [
  "Datacenter architecture",
  "Linux and container operations",
  "Network design and segmentation",
  "Private-cloud storage",
  "Cybersecurity",
  "Infrastructure automation",
  "Application hosting",
  "Monitoring and observability",
  "Disaster recovery",
  "Heterogeneous computing",
];

const operationalTechnologies = [
  "Proxmox",
  "Linux",
  "Windows",
  "Docker",
  "Portainer",
  "Nginx Proxy Manager",
  "Tailscale",
];

const plannedTechnologies = [
  "Synology",
  "iSCSI",
  "Proxmox Backup Server",
  "OPNsense",
  "VLANs",
  "Multi-gigabit networking",
  "Infrastructure as Code",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  "Loki",
  "ARM64",
  "Apple Silicon",
  "K3s",
  "Disaster recovery",
];

const section = "px-6 py-20 sm:px-8";
const heading = "text-3xl font-bold sm:text-4xl";
const body = "text-lg leading-8 text-slate-300";
const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
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

function TechnologyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-slate-600 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-200"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function HomeDatacenterPage() {
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
              In development · Two-year roadmap
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
              Building GHDC: A Staged Heterogeneous Home Datacenter
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              GHDC is my private project-hosting, demonstration and test-cloud
              platform. It is evolving from an operational home lab into a
              secure, modular and heterogeneous datacenter through measured,
              independently validated stages.
            </p>
            <p className="mt-8 font-medium text-sky-400">
              Proxmox • Linux • Windows • Docker • Tailscale
            </p>
            <p className="mt-6 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">
              Phase 0 — Network stabilisation
            </p>
          </div>
        </header>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Project status</h2>
            <dl className="mt-8 grid overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 sm:grid-cols-2">
              {projectStatus.map(([label, value], index) => (
                <div
                  key={label}
                  className={`min-w-0 p-5 sm:p-6 ${index === projectStatus.length - 1 ? "sm:col-span-2" : "border-b border-slate-700 sm:[&:nth-child(odd)]:border-r"}`}
                >
                  <dt className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                    {label}
                  </dt>
                  <dd className="mt-2 break-words text-lg text-slate-200">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-4xl">
            <h2 className={heading}>Project mission</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                The GVI Heterogeneous Home Datacenter, or GHDC, is being
                developed as my private project-hosting, demonstration and
                test-cloud platform.
              </p>
              <p>
                The project begins with equipment and capabilities already
                available, including an Intel NUC running Proxmox, Windows and
                Linux virtual environments, Docker services, secure private
                access through Tailscale and a MacBook Air used as the operator
                console.
              </p>
              <p>
                Rather than replacing everything at once, GHDC follows a staged
                and evidence-led approach. Existing equipment is reused wherever
                practical, each new component must address a demonstrated
                constraint, and every expansion is tested before the next stage
                begins.
              </p>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-6xl">
            <h2 className={heading}>What GHDC is designed to provide</h2>
            <BulletList items={purposes} />
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className={heading}>Operational foundation</h2>
              <span className="w-fit rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                Operational now
              </span>
            </div>
            <p className={`mt-6 ${body}`}>
              Every capability listed in this section is operational now.
            </p>
            <BulletList items={operationalFoundation} />
            <p className={`mt-8 ${body}`}>
              This operational home-lab foundation is the starting point for
              GHDC. The current engineering priority is stabilising the Proxmox
              host’s network connection before centralised storage is
              introduced.
            </p>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-4xl">
            <h2 className={heading}>Current milestone</h2>
            <div className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
                Phase 0 — Network stabilisation
              </p>
              <div className="mt-5 space-y-5 leading-7 text-slate-200">
                <p>
                  The immediate milestone is to improve the reliability of the
                  Proxmox host’s network connection and validate it through
                  sustained file transfers, virtual-machine activity and
                  network-performance testing.
                </p>
                <p>
                  Storage expansion will begin only after the network foundation
                  is demonstrated to be stable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-6xl">
            <h2 className={heading}>Target architecture</h2>
            <p className={`mt-6 max-w-4xl ${body}`}>
              GHDC is being designed as a modular environment in which operator
              access, networking, compute, storage, workloads, protection and
              observability can evolve independently.
            </p>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {architecture.map(([name, status], index) => (
                <li
                  key={name}
                  className="min-w-0 rounded-xl border border-slate-700 bg-slate-900 p-5"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Logical component {index + 1}
                  </span>
                  <h3 className="mt-3 break-words text-lg font-semibold text-slate-100">
                    {name}
                  </h3>
                  <span
                    className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${status === "Planned" ? "bg-violet-400/10 text-violet-200" : "bg-emerald-400/10 text-emerald-200"}`}
                  >
                    {status}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-6 text-slate-400">
              The numbered sequence communicates the conceptual path; status
              text identifies whether each component is operational or planned.
            </p>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Two-year roadmap</h2>
            <ol className="mt-10 space-y-6">
              {roadmap.map((item) => (
                <li
                  key={item.phase}
                  className="rounded-2xl border border-slate-700 bg-slate-800 p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-xl font-semibold text-slate-100 sm:text-2xl">
                      {item.phase}
                    </h3>
                    <span
                      className={`w-fit shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${item.status === "In progress" ? "bg-amber-400/10 text-amber-200" : "bg-violet-400/10 text-violet-200"}`}
                    >
                      Status: {item.status}
                    </span>
                  </div>
                  <p className="mt-5 leading-7 text-slate-300">{item.copy}</p>
                  {item.note && (
                    <p className="mt-4 border-l-2 border-sky-400 pl-4 font-medium leading-7 text-sky-200">
                      {item.note}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-6xl">
            <h2 className={heading}>Engineering principles</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {principles.map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-700 bg-slate-900 p-6"
                >
                  <h3 className="text-xl font-semibold text-sky-300">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>
              From enterprise support to platform engineering
            </h2>
            <p className={`mt-8 ${body}`}>
              GHDC represents the next stage of more than 20 years of
              professional IT experience. My background in service desk
              consulting, end-user computing, Windows administration,
              virtualisation and enterprise support is being extended into
              designing, building and operating an independent technology
              platform.
            </p>
            <BulletList items={developmentAreas} />
            <p className={`mt-8 ${body}`}>
              The project demonstrates a deliberate transition from supporting
              enterprise technology to designing, building and operating a
              platform of my own.
            </p>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                Current capability
              </p>
              <h2 className="mt-3 text-2xl font-bold">Operational now</h2>
              <TechnologyList items={operationalTechnologies} />
            </div>
            <div className="rounded-2xl border border-violet-400/30 bg-violet-400/5 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-300">
                Future capability
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Planned or under evaluation
              </h2>
              <TechnologyList items={plannedTechnologies} />
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <aside className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-sky-300">
                Security-conscious disclosure
              </h2>
              <div className="mt-5 space-y-5 leading-7 text-slate-200">
                <p>
                  This public case study presents GHDC at an architectural and
                  professional-development level. It intentionally excludes IP
                  addresses, subnet details, credentials, internal hostnames,
                  device identities, firewall rules, login addresses, serial
                  numbers, exact physical location, backup-encryption details
                  and information about private or third-party projects.
                </p>
                <p>
                  Individual software projects will only be identified publicly
                  when I own the work or have explicit permission to disclose
                  it.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-4xl">
            <h2 className={heading}>Built to grow with purpose</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                GHDC is more than a home lab. It is a long-term investment in
                practical engineering capability—a privately operated
                environment where authorised projects can be built, protected,
                demonstrated and validated before graduating to the public
                cloud.
              </p>
              <p>
                The platform will grow alongside my technical knowledge,
                businesses and future software products.
              </p>
            </div>
            <Link
              href="/#projects"
              className={`mt-12 inline-flex font-semibold text-sky-400 transition hover:text-sky-300 ${focus}`}
            >
              Return to selected projects
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
