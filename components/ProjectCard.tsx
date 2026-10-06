import Link from "next/link";

/** Visual tone of the status badge; the status wording itself is unchanged. */
export type ProjectTone = "completed" | "development";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  href?: string;
  status?: string;
  tone?: ProjectTone;
  action?: string;
};

const toneStyles: Record<ProjectTone, { badge: string; dot: string }> = {
  completed: {
    badge: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
    dot: "bg-emerald-400",
  },
  development: {
    badge: "border-amber-400/25 bg-amber-400/10 text-amber-300",
    dot: "bg-amber-400",
  },
};

export default function ProjectCard({
  title,
  description,
  tech,
  href,
  status,
  tone = "completed",
  action,
}: ProjectCardProps) {
  const cardContent = (
    <>
      <h3 className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
        {title}
      </h3>

      {/* Shown above the title, but read after it. */}
      {status && (
        <span
          className={`order-first mb-5 inline-flex items-center gap-2 self-start rounded-full border px-3 py-1 text-xs font-medium [overflow-wrap:anywhere] ${toneStyles[tone].badge}`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${toneStyles[tone].dot}`}
          />
          {status}
        </span>
      )}

      <p className="mb-6 mt-3 leading-7 text-slate-400">{description}</p>

      <span className="mt-auto block border-t border-white/10 pt-5 font-mono text-xs leading-6 text-slate-400">
        {tech}
      </span>

      {action && (
        <span className="mt-5 block font-semibold text-sky-400 transition-colors group-hover:text-sky-300">
          {action}{" "}
          <span
            aria-hidden="true"
            className="inline-block transition-transform motion-safe:group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      )}
    </>
  );

  if (href) {
    const cardClassName =
      "group card-interactive flex h-full flex-col p-6 sm:p-7";

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
    <div className="card flex h-full flex-col p-6 sm:p-7">{cardContent}</div>
  );
}
