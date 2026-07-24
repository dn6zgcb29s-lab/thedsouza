export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-8">
      <div className="max-w-4xl text-center">
        <p className="uppercase tracking-[0.3em] text-sky-400 mb-4">Welcome</p>

        <h1 className="text-6xl md:text-7xl font-bold">Glen D'Souza</h1>

        <h2 className="mt-6 text-2xl md:text-3xl text-slate-300">
          Building technology that makes a difference.
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
          I'm documenting my journey as I build websites, explore AI, create
          digital products and help businesses embrace technology.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-sky-500 hover:bg-sky-400 transition px-6 py-3 rounded-xl text-white font-semibold">
            View My Projects
          </button>

          <button className="border border-slate-600 hover:border-sky-400 hover:text-sky-400 transition px-6 py-3 rounded-xl text-white font-semibold">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
