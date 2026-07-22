import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "AI Recruitment Platform",
    description:
      "An AI-powered recruitment platform for intelligent candidate screening.",
    tech: "FastAPI • React • PostgreSQL",
  },
  {
    title: "TD Group Website",
    description:
      "Business website showcasing services and digital transformation projects.",
    tech: "Next.js • Tailwind CSS",
  },
  {
    title: "thedsouza.com",
    description:
      "My personal portfolio documenting my journey as a developer.",
    tech: "Next.js • TypeScript • Tailwind",
  },
  {
    title: "Epping Tennis Club",
    description:
      "Managed Microsoft 365, email migration and IT improvements.",
    tech: "Microsoft 365 • Outlook • DNS",
  },
  {
    title: "GVI Home Lab",
    description:
      "Built a virtual home lab using Proxmox, Docker and Linux.",
    tech: "Proxmox • Docker • Linux",
  },
  {
    title: "Microbetting Framework",
    description:
      "Designed a data-driven betting framework using statistical analysis.",
    tech: "Python • Excel • Data Analysis",
  },
];

export default function Projects() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
