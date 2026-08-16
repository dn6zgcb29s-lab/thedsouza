import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "GHDC — Home Datacenter",
    description:
      "A two-year infrastructure and professional-development project evolving my working home lab into a secure, modular and heterogeneous private datacenter.",
    tech: "Proxmox • Linux • Docker • Tailscale • Private Cloud",
    href: "/projects/home-datacenter",
    status: "In development · Phase 0",
    action: "Explore the GHDC roadmap",
  },
  {
    title: "TD Group Website",
    description:
      "Business website showcasing services and digital transformation projects.",
    tech: "Next.js • Tailwind CSS",
    status: "Case study coming soon",
  },
  {
    title: "thedsouza.com",
    description: "My personal portfolio documenting my journey as a developer.",
    tech: "Next.js • TypeScript • Tailwind",
    href: "https://thedsouza.com",
  },
  {
    title: "Epping Tennis Club",
    description: "Managed Microsoft 365, email migration and IT improvements.",
    tech: "Microsoft 365 • Outlook • DNS",
    href: "http://www.eppingtennisclub.com.au",
    status: "Under construction",
  },
  {
    title: "GVI Home Lab",
    description: "Built a virtual home lab using Proxmox, Docker and Linux.",
    tech: "Proxmox • Docker • Linux",
    status: "Case study coming soon",
  },
  {
    title: "Microbetting Framework",
    description:
      "Designed a data-driven betting framework using statistical analysis.",
    tech: "Python • Excel • Data Analysis",
    status: "Case study coming soon",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Selected Technical Initiatives
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-400">
          A selection of my recent work, ranging from live deployments and
          active development to system architecture and design. Documentation
          and case studies are actively being added.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              href={project.href}
              status={project.status}
              action={project.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
