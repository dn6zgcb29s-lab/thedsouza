export default function Contact() {
  return (
    <section id="contact" className="bg-slate-800 px-6 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Start a conversation
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Discuss Your Project
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Tell me what your business is trying to improve, build or resolve. I
          can help clarify the problem, identify the right next step and
          determine whether we are a good fit to work together.
        </p>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-sky-400/30 bg-sky-400/10 p-6">
          <p className="font-semibold text-sky-200">
            Begin with a free 15-minute fit discussion
          </p>
          <p className="mt-2 leading-7 text-slate-300">
            No obligation and no technical preparation required. A short
            description of the business problem is enough to begin.
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:glen@td-group.com.au?subject=Project%20discussion"
            className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            Email Glen
          </a>

          <a
            href="https://github.com/lbbextreme"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            View GitHub
          </a>
        </div>

        <p className="mt-10 text-sm leading-6 text-slate-400">
          Technology consulting delivered through TD Group of Companies Pty
          Ltd.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          glen@td-group.com.au · thedsouza.com
        </p>
      </div>
    </section>
  );
}