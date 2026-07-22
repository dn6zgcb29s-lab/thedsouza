import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="AI Recruitment Platform"
            description="An AI-powered recruitment platform for intelligent candidate screening."
            tech="FastAPI • React • PostgreSQL"
          />

          <ProjectCard
            title="TD Group Website"
            description="Business website showcasing services and digital transformation projects."
            tech="Next.js • Tailwind CSS"
          />

          <ProjectCard
            title="thedsouza.com"
            description="My personal portfolio documenting my journey as a developer."
            tech="Next.js • TypeScript • Tailwind"
          />

          <ProjectCard
            title="Epping Tennis Club"
            description="Managed Microsoft 365, email migration and IT improvements."
            tech="Microsoft 365 • Outlook • DNS"
          />

          <ProjectCard
            title="GVI Home Lab"
            description="Built a virtual home lab using Proxmox, Docker and Linux."
            tech="Proxmox • Docker • Linux"
          />

          <ProjectCard
            title="Microbetting Framework"
            description="Designed a data-driven betting framework using statistical analysis."
            tech="Python • Excel • Data Analysis"
          />
        </div>
      </div>
    </section>
  );
}
