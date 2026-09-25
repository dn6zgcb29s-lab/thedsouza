import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";

const featuredProjects = [
  {
    title: "Epping Tennis Club — Digital Support",
    description:
      "Ongoing email, domain and user support, alongside a functional merchandise-store proof of concept.",
    tech: "Outlook • DNS • Email Migration • GitHub Pages",
    href: "/projects/epping-tennis-club",
    action: "Read the Epping Tennis Club case study",
    status: "Ongoing support • POC completed",
    relevance: [
      "Workplace technology",
      "Websites and digital platforms",
      "Difficult technical problems",
    ],
  },
  {
    title: "Self-Hosted Business Mail Server",
    description:
      "A privately operated business email platform designed and validated with secure mail delivery, authenticated outbound relay, TLS and modern domain authentication.",
    tech: "Mailcow • Postfix • Docker • DNS • TLS",
    href: "/projects/self-hosted-mail-server",
    status: "Operational proof of concept",
    action: "Explore the mail server case study",
    relevance: ["Reliable, secure infrastructure"],
  },
  {
    title: "GHDC — Home Datacenter",
    description:
      "A two-year infrastructure and professional-development project evolving my working home lab into a secure, modular and heterogeneous private datacenter.",
    tech: "Proxmox • Linux • Docker • Tailscale • Private Cloud",
    href: "/projects/home-datacenter",
    status: "In development · Phase 0",
    action: "Explore the GHDC roadmap",
    relevance: ["Reliable, secure infrastructure"],
  },
];

const moreProjects = [
  {
    title: "thedsouza.com",
    description:
      "This consulting site, built with Next.js and a controlled delivery workflow.",
    href: "/projects/thedsouza-com",
  },
  {
    title: "GVI — Foundation of GHDC",
    description: "The personal virtualisation lab that evolved into GHDC.",
    href: "/projects/gvi-home-lab",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Case studies: the work behind the services
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-400">
          Real systems I have built, supported or operate, each written up with
          what was done and what was learned. More case studies are added as
          work is completed.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            More case studies
          </h3>

          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {moreProjects.map((project) => (
              <li key={project.title}>
                <Link
                  href={project.href}
                  className="block rounded-xl border border-slate-800 p-5 transition hover:border-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  <span className="font-semibold text-white">
                    {project.title}
                  </span>
                  <span className="mt-1 block text-sm text-slate-400">
                    {project.description}
                  </span>
                  <span className="mt-3 block text-sm font-semibold text-sky-400">
                    Read the case study <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <CurrentlyBuilding />
      </div>
    </section>
  );
}
