import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Home Datacenter Case Study | Glen D'Souza",
  },
  description:
    "A privacy-conscious case study demonstrating Glen D'Souza’s practical experience with Proxmox, Docker, Linux, virtualization and secure private access using Tailscale.",
};

const capabilities = [
  {
    title: "Proxmox administration",
    description:
      "Using Proxmox as the virtualization platform for creating, organising and managing isolated computing workloads.",
  },
  {
    title: "Virtualization",
    description:
      "Separating workloads into virtual environments so systems can be developed, tested and maintained without relying on a single shared operating environment.",
  },
  {
    title: "Linux operations",
    description:
      "Installing, configuring and maintaining Linux systems that provide the foundation for containerized applications and supporting services.",
  },
  {
    title: "Docker workloads",
    description:
      "Packaging and operating services as containers to improve consistency, isolation and repeatability across the environment.",
  },
  {
    title: "Private remote access",
    description:
      "Using Tailscale to provide secure private access over the internet without publicly exposing Proxmox, Linux or other management interfaces.",
  },
];

const operationalPrinciples = [
  "Keep workloads logically separated.",
  "Prefer private management paths.",
  "Document architecture without exposing operational secrets.",
  "Make services reproducible and easier to maintain.",
  "Use the environment to test ideas before applying them elsewhere.",
];

const architectureLayers = [
  "Authorised remote device",
  "Tailscale private network",
  "Private management and services",
  "Proxmox • Linux • Docker",
];

export default function HomeDatacenterPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article>
        <header className="border-b border-slate-800 px-6 pb-20 pt-10 sm:px-8 sm:pt-12">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/#projects"
              className="inline-flex font-medium text-slate-300 transition hover:text-sky-400"
            >
              ← Back to selected projects
            </Link>

            <p className="mt-16 uppercase tracking-[0.25em] text-sky-400">
              Featured infrastructure project
            </p>
            <h1 className="mt-4 text-5xl font-bold sm:text-6xl">
              Home Datacenter
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              A private environment for developing practical experience with
              virtualization, Linux systems, containerized services and secure
              remote administration.
            </p>
            <p className="mt-8 font-medium text-sky-400">
              Proxmox • Docker • Linux • Virtualization • Tailscale
            </p>
          </div>
        </header>

        <section className="bg-slate-900 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Project overview</h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                I built and operate a home datacenter as a controlled
                environment for learning, experimentation and self-hosted
                infrastructure. It allows me to work directly with virtual
                machines, Linux operating systems and Docker-based services
                while developing the operational habits required to keep an
                environment understandable, maintainable and secure.
              </p>
              <p>
                The project is intentionally documented at an architectural
                level. Infrastructure identifiers and details that could expose
                the environment are excluded.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-800 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">
              Capabilities demonstrated
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-xl border border-slate-700 bg-slate-900 p-6"
                >
                  <h3 className="text-xl font-semibold text-sky-400">
                    {capability.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Architecture</h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              The environment follows a layered structure that separates remote
              access, private management and the infrastructure technologies
              used to operate workloads.
            </p>

            <ol className="mt-10 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
              {architectureLayers.map((layer, index) => (
                <li key={layer} className="contents">
                  <span className="flex min-h-24 flex-1 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 p-5 text-center font-semibold text-slate-200">
                    {layer}
                  </span>
                  {index < architectureLayers.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-center text-2xl text-sky-400 md:-rotate-90"
                    >
                      ↓
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <p className="mt-10 text-lg leading-8 text-slate-300">
              This structure provides authorised devices with a private access
              path to management interfaces and services. Proxmox manages
              virtualized resources, Linux provides operating environments, and
              Docker runs individual services. Tailscale provides private
              connectivity without requiring management interfaces to be made
              publicly reachable.
            </p>
          </div>
        </section>

        <section className="bg-slate-800 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Secure private access with Tailscale
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                Remote administration is provided through Tailscale, which
                creates an encrypted private network between authorised devices
                over the internet. This allows management interfaces and
                internal services to remain privately accessible rather than
                being published directly to the public internet.
              </p>
              <p>
                Access is limited to the private Tailscale network. This case
                study does not publish network addresses, credentials, internal
                names, device identities, connection details or service
                endpoints.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Operational approach
            </h2>
            <p className="mt-8 text-lg leading-8 text-slate-300">
              The value of the project is not limited to deploying technology.
              It provides ongoing practice in planning workload boundaries,
              maintaining Linux systems, managing containers, troubleshooting
              across infrastructure layers and making deliberate security
              decisions.
            </p>
            <ul className="mt-8 space-y-4">
              {operationalPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="flex gap-4 rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-300"
                >
                  <span className="text-sky-400" aria-hidden="true">
                    •
                  </span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-slate-800 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Outcome</h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                The home datacenter provides a reusable platform for hands-on
                infrastructure development. It demonstrates my ability to
                combine virtualization, Linux administration, Docker and private
                remote access into a coherent working environment.
              </p>
              <p>
                It also gives me a safe foundation for continued learning
                without revealing the private services or projects that run
                within it.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <aside className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-sky-300">
                Security-conscious disclosure
              </h2>
              <p className="mt-4 leading-7 text-slate-200">
                This case study intentionally omits IP addresses, credentials,
                internal hostnames, device names, ports, client information,
                network-specific configuration and details of private projects.
                Its purpose is to demonstrate technical capability and
                architectural reasoning without publishing information that
                could expose the environment.
              </p>
            </aside>

            <Link
              href="/#projects"
              className="mt-12 inline-flex font-semibold text-sky-400 transition hover:text-sky-300"
            >
              Return to selected projects
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
