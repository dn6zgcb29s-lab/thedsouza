type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 transition hover:border-blue-500 hover:shadow-lg">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>

      <p className="text-slate-400 mb-4">{description}</p>

      <span className="text-sm text-blue-400 font-medium">{tech}</span>
    </div>
  );
}
