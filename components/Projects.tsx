import ProjectCard, { type ProjectTone } from "@/components/ProjectCard";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";

const projects: {
  title: string;
  description: string;
  tech: string;
  href: string;
  status: string;
  tone: ProjectTone;
  action: string;
}[] = [
  {
    title: "GHDC — Home Datacenter",
    description:
      "A two-year infrastructure and professional-development project evolving my working home lab into a secure, modular and heterogeneous private datacenter.",
    tech: "Proxmox • Linux • Docker • Tailscale • Private Cloud",
    href: "/projects/home-datacenter",
    status: "In development · Phase 0",
    tone: "development",
    action: "Explore the GHDC roadmap",
  },
  {
    title: "thedsouza.com",
    description:
      "A continuously evolving consulting portfolio built with modern web technologies, structured case studies and a controlled delivery workflow.",
    tech: "Next.js • TypeScript • Tailwind CSS • Vercel",
    href: "/projects/thedsouza-com",
    action: "Read the thedsouza.com case study",
    status: "Live • Continuously improved",
    tone: "completed",
  },
  {
    title: "Epping Tennis Club — Digital Support",
    description:
      "Email, domain and user support, including the migration and stabilisation of the club's email environment.",
    tech: "Outlook • DNS • Email Migration",
    href: "/projects/epping-tennis-club",
    action: "Read the Epping Tennis Club case study",
    status: "Email migration completed • Technology consulting available",
    tone: "completed",
  },
  {
    title: "GVI — Foundation of GHDC",
    description:
      "A personal virtualisation lab that applied enterprise experience to Proxmox, mixed workloads, containerised services and remote operations.",
    tech: "Proxmox • PowerCLI • Docker • Linux",
    href: "/projects/gvi-home-lab",
    action: "Read the GVI case study",
    status: "Operational foundation • Evolved into GHDC",
    tone: "completed",
  },
  {
    title: "Self-Hosted Business Mail Server",
    description:
      "A business email platform designed and validated as a proof of concept, with secure mail delivery, authenticated outbound relay, TLS and modern domain authentication. Since retired.",
    tech: "Mailcow • Postfix • Docker • DNS • TLS",
    href: "/projects/self-hosted-mail-server",
    status: "Completed proof of concept • Retired",
    tone: "completed",
    action: "Explore the mail server case study",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 bg-slate-900/40 px-6 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span aria-hidden="true" className="title-rule" />
          <h2 className="section-title mt-5">
            Case studies: the work behind the services
          </h2>
          <p className="lead mt-6 text-slate-400">
            Real systems I have built, supported or operate, each written up
            with what was done and what was learned. More case studies are added
            as work is completed.
          </p>
        </div>

        <div className="mt-14">
          <CurrentlyBuilding />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              href={project.href}
              status={project.status}
              tone={project.tone}
              action={project.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
