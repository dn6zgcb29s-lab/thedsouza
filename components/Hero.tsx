export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-28 text-white sm:px-8"
    >
      <div className="hero-rise max-w-5xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400 sm:tracking-[0.3em]">
          Glen D&apos;Souza · Technology Consultant
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          Technology consulting, AI solutions and digital infrastructure for
          small businesses.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
          I help small-business owners and founders solve practical technology
          problems, build proof-of-concept solutions and create reliable systems
          that support their next stage of growth.
        </p>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
          Backed by more than 22 years of enterprise IT experience and a
          hands-on, owner-focused approach to delivery.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            Discuss Your Project
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
}
