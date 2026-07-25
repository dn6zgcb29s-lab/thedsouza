type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  href?: string;
  status?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  href,
  status,
}: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold">{title}</h3>

        {status && (
          <span className="shrink-0 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
            {status}
          </span>
        )}
      </div>

      <p className="mb-4 text-slate-400">{description}</p>

      <span className="text-sm font-medium text-blue-400">{tech}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block rounded-xl border border-slate-700 bg-slate-800 p-6 transition hover:border-blue-500 hover:shadow-lg"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
      {cardContent}
    </div>
  );
}
