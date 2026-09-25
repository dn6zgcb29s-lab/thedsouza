import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  href?: string;
  status?: string;
  action?: string;
  relevance?: string[];
};

export default function ProjectCard({
  title,
  description,
  tech,
  href,
  status,
  action,
  relevance,
}: ProjectCardProps) {
  const cardContent = (
    <>
      {status && (
        <span className="mb-4 inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
          {status}
        </span>
      )}

      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>

      <p className="mb-4 text-slate-400">{description}</p>

      <span className="text-sm font-medium text-blue-400">{tech}</span>

      {relevance && relevance.length > 0 && (
        <p className="mt-4 text-sm text-slate-300">
          <span className="font-semibold text-slate-200">Relevant to: </span>
          {relevance.join(" · ")}
        </p>
      )}

      {action && (
        <span className="mt-5 block font-semibold text-sky-400">
          {action} <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  if (href) {
    const cardClassName =
      "block rounded-xl border border-slate-700 bg-slate-800 p-6 transition hover:border-blue-500 hover:shadow-lg";

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={cardClassName}>
          {cardContent}
        </Link>
      );
    }

    return (
      <a href={href} target="_blank" rel="noreferrer" className={cardClassName}>
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
