const skillGroups = [
  {
    title: "Enterprise IT & End User Computing",
    skills: [
      "Service Desk and IT Operations",
      "End User Computing Engineering",
      "Microsoft Intune",
      "Windows Autopilot",
      "Microsoft Entra ID / Azure AD",
      "Microsoft 365",
      "VMware and PowerCLI",
      "ServiceNow",
    ],
  },
  {
    title: "Software & Web Engineering",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "API integration",
    ],
  },
  {
    title: "AI Engineering & Automation",
    skills: [
      "AI-assisted software development",
      "AI-enabled applications",
      "LLM integration",
      "AI agents and automation",
      "Human-in-the-loop workflows",
    ],
  },
  {
    title: "Infrastructure & Platform Engineering",
    skills: [
      "Docker and containerisation",
      "Linux and Debian",
      "Proxmox",
      "VMware virtualisation",
      "Git and GitHub",
      "Vercel",
      "PowerShell",
    ],
  },
  {
    title: "Technology Consulting",
    skills: [
      "Technical discovery",
      "Solution design",
      "Infrastructure architecture",
      "Troubleshooting and problem resolution",
      "Technical documentation",
      "Project delivery and integration",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow">Skills</p>

          <h2 className="section-title mt-5">
            The technical toolkit underneath
          </h2>

          <p className="lead mt-6">
            Enterprise IT experience combined with current software, AI and
            infrastructure engineering, applied hands-on from discovery to
            delivery.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="card p-6">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-200">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
