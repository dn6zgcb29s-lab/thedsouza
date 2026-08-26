const experienceAreas = [
  "Enterprise IT support and end-user computing",
  "Microsoft environments, devices and identity",
  "Infrastructure, virtualisation and troubleshooting",
  "AI-enabled applications and proof-of-concept delivery",
];

export default function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Experience and approach
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          Enterprise experience applied to practical small-business problems
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m Glen D&apos;Souza, a technology consultant with more than
              22 years of professional IT experience supporting people,
              workplaces and business-critical systems.
            </p>

            <p>
              My background spans service desk consulting, end-user computing,
              Microsoft environments, virtualisation, infrastructure,
              troubleshooting and technical delivery across large enterprise
              environments.
            </p>

            <p>
              Today, I bring that experience to small businesses and founders
              who need clear advice, dependable implementation and practical
              technology that supports how their business actually operates.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Practical capability
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
          My approach is straightforward: understand the business problem,
          recommend only what is useful, document the work and deliver in
          controlled, testable stages.
        </p>
      </div>
    </section>
  );
}