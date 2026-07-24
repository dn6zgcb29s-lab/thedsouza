export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-8 text-white">
      <div className="max-w-4xl text-center">
        <p className="mb-4 uppercase tracking-[0.3em] text-sky-400">
          Welcome
        </p>

        <h1 className="text-6xl font-bold md:text-7xl">
          Glen D&apos;Souza
        </h1>

        <h2 className="mt-6 text-2xl text-slate-300 md:text-3xl">
          Building technology that makes a difference.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          I&apos;m documenting my journey as I build websites, explore AI,
          create digital products and help businesses embrace technology.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400">
            View My Projects
          </button>

          <button className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
