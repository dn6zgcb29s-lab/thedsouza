import { careerStages, formatPeriod } from "@/data/career";

export default function Timeline() {
  return (
    <section id="timeline" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Career Timeline
        </h2>

        <ol className="space-y-8">
          {careerStages.map((stage) => (
            <li key={stage.id}>
              <article className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                <p className="mb-2 text-sm font-semibold text-blue-400">
                  {formatPeriod(stage)}
                </p>

                <h3 className="mb-3 text-2xl font-semibold">{stage.title}</h3>

                <p className="leading-7 text-slate-400">{stage.description}</p>

                {stage.milestones?.map((milestone) => (
                  <div
                    key={`${milestone.year}-${milestone.title}`}
                    className="mt-6 border-l-2 border-sky-500/60 pl-4"
                  >
                    <p className="text-sm font-semibold text-sky-400">
                      {milestone.year}
                    </p>
                    <h4 className="mt-1 text-lg font-semibold">
                      {milestone.title}
                    </h4>
                    <p className="mt-2 leading-7 text-slate-400">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </article>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-center leading-7 text-slate-400">
          Today, I&apos;m continuing to learn, create and develop practical
          technology that makes a meaningful difference.
        </p>
      </div>
    </section>
  );
}
