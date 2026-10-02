import ContactCtas from "@/components/ContactCtas";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-slate-950 px-6 pb-20 pt-24 text-white sm:px-8 sm:py-28"
    >
      <div className="hero-rise max-w-5xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
          Glen D&apos;Souza · Technology Consultant &amp; Engineer
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          I solve problems.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:mt-8 sm:text-xl">
          I look at a complicated process and ask why it has to be so
          complicated—then find a simpler way. I combine 22+ years of IT
          experience with modern software development, infrastructure,
          automation and AI-assisted development to build practical solutions.
        </p>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400 sm:mt-6">
          Understand the real need, design the simplest practical solution,
          build it and automate what can be automated.
        </p>

        <p className="mt-4 text-sm font-medium text-slate-400 sm:mt-6">
          Melbourne, Victoria · Remote consulting across Australia
        </p>

        <div className="mt-8 sm:mt-10">
          <ContactCtas />
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Or{" "}
          <a
            href="#projects"
            className="font-medium text-sky-400 underline underline-offset-4 hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            see the work behind the services
          </a>
        </p>
      </div>
    </section>
  );
}
