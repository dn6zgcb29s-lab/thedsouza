import ContactCtas from "@/components/ContactCtas";
import { scopeCommitment } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-slate-900/40 px-6 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-10%,rgb(56_189_248/0.14),transparent_70%)]"
        />

        <p className="eyebrow justify-center">Start a conversation</p>

        <h2 className="section-title mt-5">Discuss Your Project</h2>

        <p className="lead mx-auto mt-6 max-w-2xl">
          Tell me what your business is trying to improve, build or fix. I will
          help clarify the problem, suggest a sensible first step and tell you
          honestly whether I am the right person for the job.
        </p>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8">
          <p className="font-semibold text-white">Start with a short email</p>
          <p className="mt-2 leading-7 text-slate-300">
            Explain what you are trying to achieve and the problem you would
            like help with. No technical preparation is required; a short
            description is enough to begin.
          </p>
          <p className="mt-4 border-t border-white/10 pt-4 font-medium leading-7 text-sky-300">
            {scopeCommitment}
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
            className="text-link"
          >
            View my GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>

        <div className="mx-auto mt-12 max-w-2xl border-t border-white/10 pt-8">
          <p className="text-sm leading-6 text-slate-400">
            Technology consulting delivered through TD Group of Companies Pty
            Ltd.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            glen@thedsouza.com · Melbourne, Victoria · Remote consulting across
            Australia
          </p>
        </div>
      </div>
    </section>
  );
}
