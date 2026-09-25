import ContactCtas from "@/components/ContactCtas";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-28 text-white sm:px-8"
    >
      <div className="hero-rise max-w-5xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400 sm:tracking-[0.3em]">
          Glen D&apos;Souza · Technology Engineer
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          Practical technology engineering for small businesses and founders.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
          When your computers, email, website or systems are slowing the
          business down, I design, build and fix the technology myself—from
          everyday workplace IT to websites, automation and infrastructure.
        </p>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
          22+ years of professional IT experience, applied hands-on to
          businesses that don&apos;t have an IT department of their own.
        </p>

        <p className="mt-6 text-sm font-medium text-slate-400">
          Melbourne, Victoria · Remote consulting across Australia
        </p>

        <div className="mt-10">
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
