import { responseCommitment } from "@/data/contact";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pb-20 pt-32 text-white sm:px-8 sm:pb-28 sm:pt-40"
    >
      {/* Static accent lighting only; no animated background. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(56rem_36rem_at_12%_-8%,rgb(77_148_255/0.12),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="hero-rise mx-auto flex w-full max-w-6xl flex-col">
        <p className="eyebrow">
          Glen D&apos;Souza · AI Technology Consultant &amp; Engineer
        </p>

        <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:mt-8 sm:text-6xl lg:text-7xl">
          I take on complex{" "}
          <span className="text-sky-400">technology challenges.</span>
        </h1>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            I help businesses explore AI, design practical technology solutions
            and turn promising ideas into working systems.
          </p>

          <div className="border-l border-sky-400/60 pl-6 lg:self-end">
            <p className="leading-7 text-slate-200">
              The person you talk to is the person who does the work: from
              understanding the problem to building and testing the solution.
            </p>

            <p className="mt-4 text-sm font-medium text-slate-400">
              Melbourne, Victoria · Onsite in Melbourne and remote across
              Australia
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <a href="#contact" className="btn-primary">
              Discuss a challenge
            </a>
            <a href="#projects" className="btn-secondary">
              Explore my work
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-400">{responseCommitment}</p>
        </div>
      </div>
    </section>
  );
}
