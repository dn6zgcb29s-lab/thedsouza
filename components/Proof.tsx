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
      className="border-y border-slate-800 bg-slate-950 px-6 py-20 text-white sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Proof of delivery
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Evidence, not promises
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              22+ years of professional IT experience, supported by demonstrable
              systems, published case studies and a controlled delivery
              workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-slate-700 sm:grid-cols-3">
            {proofMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="border-b border-r border-slate-700 bg-slate-900/60 p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs text-slate-500">
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

        <div className="mt-10 grid gap-8 border-t border-slate-800 pt-8 lg:grid-cols-[1fr_2fr] lg:items-start">
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Google PageSpeed Insights mobile lab results measured 9 September
            2026. Scores can vary between test runs.
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {deliverySignals.map((signal) => (
              <li
                key={signal}
                className="flex items-start gap-3 border border-slate-700 px-4 py-3 text-sm leading-6 text-slate-300"
              >
                <span aria-hidden="true" className="mt-1 text-sky-400">
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
