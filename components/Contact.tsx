import ContactCtas from "@/components/ContactCtas";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-800 px-6 py-20 text-white sm:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Start a conversation
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Discuss Your Project
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Tell me what your business is trying to improve, build or fix. I will
          help clarify the problem, suggest a sensible first step and tell you
          honestly whether I am the right person for the job.
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

        <div className="mt-10">
          <ContactCtas />
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Prefer to see the code first?{" "}
          <a
            href="https://github.com/lbbextreme"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-sky-400 underline underline-offset-4 hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            View my GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>

        <p className="mt-10 text-sm leading-6 text-slate-400">
          Technology consulting delivered through TD Group of Companies Pty Ltd.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          glen@thedsouza.com · Melbourne, Victoria · Remote consulting across
          Australia
        </p>
      </div>
    </section>
  );
}
