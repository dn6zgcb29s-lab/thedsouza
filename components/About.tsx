const experienceAreas = [
  "Supported users, devices and business systems across large enterprise environments",
  "Managed Microsoft workplace environments, device deployment and identity",
  "Built and run my own infrastructure, from virtualisation labs to a self-hosted mail platform",
  "Designed, built and shipped websites and web applications, including this one",
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">About me</p>

        <h2 className="section-title mt-5 max-w-3xl">
          I&apos;ve realised I&apos;ve always been a problem solver
        </h2>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="max-w-[65ch] space-y-6 text-lg leading-8 text-slate-300">
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
              The titles changed; the way I approached problems didn&apos;t.
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

          <div className="card self-start p-6 sm:p-8 lg:sticky lg:top-28">
            <h3 className="text-lg font-semibold text-white">
              What that experience includes
            </h3>

            <ul className="mt-6 divide-y divide-white/5">
              {experienceAreas.map((area) => (
                <li
                  key={area}
                  className="flex gap-4 py-4 leading-7 text-slate-300 first:pt-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3.5 h-px w-4 shrink-0 bg-sky-400"
                  />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 max-w-4xl border-l-2 border-sky-400 pl-6 text-xl font-medium leading-9 text-white sm:text-2xl sm:leading-10">
          Find the problem. Understand the real need. Design the simplest
          practical solution. Build it. Automate what can be automated. Then let
          the technology do the repetitive work.
        </p>
      </div>
    </section>
  );
}
