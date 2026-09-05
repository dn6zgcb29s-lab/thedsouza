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
    title: "thedsouza.com",
    description:
      "A continuously evolving consulting portfolio built with modern web technologies, structured case studies and a controlled delivery workflow.",
    tech: "Next.js • TypeScript • Tailwind CSS • Vercel",
    href: "/projects/thedsouza-com",
    status: "Live • Continuously improved",
  },
  {
    title: "Epping Tennis Club — Digital Support",
    description:
      "Ongoing email, domain and user support, alongside a functional merchandise-store proof of concept.",
    tech: "Outlook • DNS • Email Migration • GitHub Pages",
    href: "/projects/epping-tennis-club",
    status: "Ongoing support • POC completed",
  },
  {
    title: "GVI — Foundation of GHDC",
    description:
      "A personal virtualisation lab that applied enterprise experience to Proxmox, mixed workloads, containerised services and remote operations.",
    tech: "Proxmox • PowerCLI • Docker • Linux",
    href: "/projects/gvi-home-lab",
    status: "Operational foundation • Evolved into GHDC",
  },
  {
    title: "Self-Hosted Business Mail Server",
    description:
      "A privately operated business email platform designed and validated with secure mail delivery, authenticated outbound relay, TLS and modern domain authentication.",
    tech: "Mailcow • Postfix • Docker • DNS • TLS",
    href: "/projects/self-hosted-mail-server",
    status: "Operational proof of concept",
    action: "Explore the mail server case study",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-20 text-white">
      <style>{`
        #projects > div > div > :is(a, div) > div:first-child > span {
          min-width: 0;
          overflow-wrap: anywhere;
          text-align: right;
          white-space: normal;
          flex-shrink: 1;
        }
      `}</style>
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
