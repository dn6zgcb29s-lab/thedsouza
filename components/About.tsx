const experienceAreas = [
  "Supported users, devices and business systems across large enterprise environments",
  "Managed Microsoft workplace environments, device deployment and identity",
  "Built and run my own infrastructure, from virtualisation labs to a self-hosted mail platform",
  "Designed, built and shipped websites and web applications, including this one",
];

export default function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          About me
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          I&apos;ve realised I&apos;ve always been a problem solver
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m Glen D&apos;Souza, a technology consultant and engineer.
              In 22+ years of IT, I&apos;ve worked under different titles and
              across different technologies: Service Desk, End User Computing,
              systems administration, infrastructure, virtualisation, Microsoft
              technologies, automation and now software development.
            </p>

            <p>
              Looking back, there has always been one consistent thread:{" "}
              <strong className="font-semibold text-white">
                I solve problems.
              </strong>
            </p>

            <p>
              I&apos;ve always been the person who looks at a complicated
              process and asks, &ldquo;Why does this have to be so
              complicated?&rdquo; Then I look for a simpler way.
            </p>

            <p>
              Sometimes that meant automating a repetitive IT task with
              PowerCLI. Sometimes it meant designing a better workflow, reducing
              unnecessary workload, fixing an infrastructure problem, or finding
              a practical way to connect different systems.
            </p>

            <p>
              I didn&apos;t always have the title Solution Architect, but
              increasingly I realise that the way I approached problems was very
              much solution architecture.
            </p>

            <p>
              Today I combine that experience with Next.js, React, TypeScript,
              Docker, AI-assisted development, APIs and automation to build
              practical software and business solutions. What interests me
              isn&apos;t technology for the sake of technology. I&apos;m not
              trying to know every technology; I look at a problem, understand
              the bigger picture and work out how to make it work.
            </p>

            <p>
              And the person you talk to is the person who does the work. I
              don&apos;t hand you a report and leave. I get into the problem,
              design the fix, build it, test it and explain it in plain
              language.
            </p>
          </div>

          <div className="self-start rounded-2xl border border-slate-700 bg-slate-800 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              What that experience includes
            </h3>

            <ul className="mt-6 space-y-4">
              {experienceAreas.map((area) => (
                <li key={area} className="flex gap-3 leading-7 text-slate-300">
                  <span aria-hidden="true" className="text-sky-400">
                    •
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-l-2 border-sky-400 pl-5 text-lg leading-8 text-slate-300">
          Find the problem. Understand the real need. Design the simplest
          practical solution. Build it. Automate what can be automated. Then let
          the technology do the repetitive work.
        </p>
      </div>
    </section>
  );
}
