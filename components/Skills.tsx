export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "Linux",
    "Git",
    "PowerShell",
    "Microsoft 365",
    "Azure",
    "VMware",
    "Proxmox",
    "AI & Automation",
  ];

  return (
<section
  id="skills"
  className="bg-slate-800 py-20"
>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-600 px-5 py-2 text-white font-medium shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
