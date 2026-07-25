export default function Skills() {
  return (
    <section id="skills" className="bg-slate-800 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-sky-400">
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
                  <span className="rounded-lg bg-slate-700/50 px-3 py-1.5 text-sm font-medium text-slate-200 border border-slate-600">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-sky-400">
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
                  <span className="rounded-lg bg-slate-700/50 px-3 py-1.5 text-sm font-medium text-slate-200 border border-slate-600">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-sky-400">
              Enterprise &amp; Emerging
            </h3>
            <ul className="flex flex-wrap gap-2">
              {["Microsoft 365", "AI & Automation"].map((skill) => (
                <li key={skill}>
                  <span className="rounded-lg bg-slate-700/50 px-3 py-1.5 text-sm font-medium text-slate-200 border border-slate-600">
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
