const proofMetrics = [
  { value: "22+", label: "Years of professional IT experience" },
  { value: "5", label: "Published technical case studies" },
  { value: "98", label: "Mobile performance", score: true },
  { value: "96", label: "Accessibility", score: true },
  { value: "100", label: "Best Practices", score: true },
  { value: "100", label: "SEO", score: true },
];

const deliverySignals = [
  "Security-conscious implementation",
  "Accessible and responsive delivery",
  "Human-led, AI-assisted workflow",
  "Controlled GitHub-to-production releases",
];

export default function Proof() {
  return (
    <section
      id="proof"
      className="border-t border-white/5 bg-slate-900/40 px-6 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Proof of delivery</p>

            <h2 className="section-title mt-5">Evidence, not promises</h2>

            <p className="lead mt-6">
              The best evidence is working technology. The case studies below
              show real systems I have designed, built and supported, from a
              community club&apos;s email and domains to self-hosted
              infrastructure. They sit on top of 22+ years of professional IT
              experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {proofMetrics.map((metric, index) => (
              <div key={metric.label} className="bg-slate-950 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs text-slate-400">
                    0{index + 1}
                  </span>
                  {metric.score && (
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-sky-400">
                      / 100
                    </span>
                  )}
                </div>
                <p className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16">
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Scores are this website&apos;s own Google PageSpeed Insights mobile
            lab results, measured 9 September 2026, shown as an example of build
            quality. Scores can vary between test runs.
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {deliverySignals.map((signal) => (
              <li
                key={signal}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300"
              >
                <span aria-hidden="true" className="mt-px text-sky-400">
                  +
                </span>
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
