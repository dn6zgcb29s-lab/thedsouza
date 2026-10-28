import { careerStages, formatPeriod } from "@/data/career";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">About</p>

        <h2 className="section-title mt-5 max-w-3xl">
          Technology consulting from someone who also builds the solution
        </h2>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="max-w-[65ch] space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m Glen D&apos;Souza. I work with business owners who want
              to know where AI and technology can genuinely help, and who need
              someone to turn the right ideas into working systems.
            </p>

            <p>
              That starts with the problem, not the tool. Sometimes AI is the
              right answer, sometimes simple automation is better, and
              sometimes neither is needed. I&apos;ll tell you honestly which,
              and test an idea with a prototype before you commit to a larger
              build.
            </p>

            <p>
              The person you talk to is the person who does the work. I
              don&apos;t hand you a report and leave. I get into the problem,
              design the fix, build it, test it and explain it in plain
              language.
            </p>

            <p>
              I combine that approach with Next.js, React, TypeScript, Docker,
              AI-assisted development, APIs and automation, backed by years of
              enterprise IT work across service desk, end-user computing,
              Microsoft environments and virtualisation.
            </p>
          </div>

          {/* Compatibility anchor: existing links to /#experience land here. */}
          <div
            id="experience"
            className="card scroll-mt-24 self-start p-6 sm:p-8 lg:sticky lg:top-28"
          >
            <h3 className="text-lg font-semibold text-white">Background</h3>

            <ol className="mt-6 divide-y divide-white/5">
              {careerStages.map((stage) => (
                <li
                  key={stage.id}
                  className="py-5 first:pt-0 last:pb-0"
                >
                  <p className="font-mono text-xs text-sky-400">
                    {formatPeriod(stage)}
                  </p>
                  <h4 className="mt-2 font-semibold leading-snug text-white">
                    {stage.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {stage.summary}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
