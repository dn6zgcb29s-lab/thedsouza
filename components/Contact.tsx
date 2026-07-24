export default function Contact() {
  return (
    <section id="contact" className="bg-slate-800 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-4xl font-bold">Let&apos;s Connect</h2>

        <p className="mx-auto mb-10 max-w-2xl leading-7 text-slate-400">
          I&apos;m always open to discussing technology, AI, digital projects
          and opportunities to build something meaningful.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:glen@thedsouza.com"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Email Me
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:text-blue-400"
          >
            GitHub
          </a>
        </div>

        <p className="mt-10 text-sm text-slate-500">thedsouza.com</p>
      </div>
    </section>
  );
}
