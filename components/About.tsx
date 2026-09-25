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
          Why work with me
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          The person you talk to is the person who does the work
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m Glen D&apos;Souza, a technology engineer with 22+ years
              of professional IT experience. Most of that time was spent inside
              large enterprise environments, where technology has to work for
              thousands of people and problems have to be properly solved, not
              patched over.
            </p>

            <p>
              I now bring that same standard to small businesses and founders. I
              don&apos;t hand you a report and leave, and I don&apos;t resell
              products. I get into the problem, design the fix, build it, test
              it and explain it in plain language.
            </p>

            <p>
              I also run my own infrastructure and build my own software, so the
              advice I give comes from technology I operate every day.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 sm:p-8">
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
          My approach is straightforward: understand the business problem, build
          only what is useful, document the work and deliver in small, tested
          stages you can see working.
        </p>
      </div>
    </section>
  );
}
