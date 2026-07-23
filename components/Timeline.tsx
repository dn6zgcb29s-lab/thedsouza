const timeline = [
  {
    period: "2003–2024",
    title: "Enterprise IT Support",
    description:
      "Built more than two decades of experience supporting users, devices, infrastructure and business systems across complex enterprise environments.",
  },
  {
    period: "2024",
    title: "End User Computing Engineer",
    description:
      "Progressed into a broader engineering role focused on modern workplace technology, endpoint management and user experience.",
  },
  {
    period: "2025",
    title: "Independent Technology Builder",
    description:
      "Started building websites, digital services and technology solutions independently through TD Group.",
  },
  {
    period: "2026",
    title: "AI and Product Development",
    description:
      "Expanded into AI-powered applications, recruitment technology, automation, home-lab infrastructure and modern web development.",
  },
  {
    period: "Today",
    title: "Building the Future",
    description:
      "Continuing to learn, create and develop practical technology that makes a meaningful difference.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Career Timeline
        </h2>

        <div className="space-y-8">
          {timeline.map((item) => (
            <article
              key={`${item.period}-${item.title}`}
              className="rounded-xl border border-slate-700 bg-slate-800 p-6"
            >
              <p className="mb-2 text-sm font-semibold text-blue-400">
                {item.period}
              </p>

              <h3 className="mb-3 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
