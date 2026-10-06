export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-slate-950 px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <span aria-hidden="true" className="title-rule mx-auto mb-5" />
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          The technical toolkit underneath
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
              Web &amp; Application
            </h3>
            <ul className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "FastAPI",
                "PostgreSQL",
              ].map((skill) => (
                <li key={skill}>
                  <span className="inline-block rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-200">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
              Infrastructure &amp; DevOps
            </h3>
            <ul className="flex flex-wrap gap-2">
              {[
                "Docker",
                "Linux",
                "Git",
                "PowerShell",
                "Azure",
                "VMware",
                "Proxmox",
              ].map((skill) => (
                <li key={skill}>
                  <span className="inline-block rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-200">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
              Enterprise &amp; Emerging
            </h3>
            <ul className="flex flex-wrap gap-2">
              {["Microsoft 365", "AI & Automation"].map((skill) => (
                <li key={skill}>
                  <span className="inline-block rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-200">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
