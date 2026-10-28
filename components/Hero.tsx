import ContactCtas from "@/components/ContactCtas";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pb-20 pt-32 text-white sm:px-8 sm:pb-28 sm:pt-40"
    >
      {/* Static accent lighting only; no animated background. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(56rem_36rem_at_12%_-8%,rgb(56_189_248/0.13),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="hero-rise mx-auto flex w-full max-w-6xl flex-col">
        <p className="eyebrow">
          Glen D&apos;Souza · Technology Consultant &amp; Engineer
        </p>

        <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:mt-8 sm:text-7xl lg:text-8xl">
          I solve <span className="text-sky-400">problems.</span>
        </h1>

        <div className="order-4 mt-10 grid gap-8 lg:order-3 lg:mt-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            I help businesses fix, build and automate their technology —
            workplace IT and Microsoft 365, websites and internal tools,
            automation and infrastructure. Extensive enterprise IT experience,
            delivered hands-on with a human-led, AI-assisted workflow. Available
            for contract and project engagements, including MSP overflow.
          </p>

          <div className="border-l border-sky-400/60 pl-6 lg:self-end">
            <p className="leading-7 text-slate-200">
              Understand the real need, design the simplest practical solution,
              build it and automate what can be automated.
            </p>

            <p className="mt-4 text-sm font-medium text-slate-400">
              Melbourne, Victoria · Onsite in Melbourne, remote across Australia
            </p>
          </div>
        </div>

        <div className="order-3 mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8 lg:order-4 lg:mt-14">
          <ContactCtas align="start" />

          <p className="text-sm text-slate-400 sm:pt-3.5">
            Or{" "}
            <a href="#projects" className="text-link">
              see the work behind the services
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
