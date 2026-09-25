/**
 * Canonical career history. Experience and Timeline both render from this
 * list — edit dates and roles here only.
 */

export const experienceClaim = "22+ years of professional IT experience";

export type CareerMilestone = {
  year: number;
  title: string;
  description: string;
};

export type CareerStage = {
  id: string;
  start: number;
  /** null = current / ongoing. */
  end: number | null;
  title: string;
  /** Short capability-focused summary (Experience section). */
  summary: string;
  /** Narrative description (Career Timeline). */
  description: string;
  milestones?: CareerMilestone[];
};

export const careerStages: CareerStage[] = [
  {
    id: "enterprise-it-support",
    start: 2003,
    end: 2024,
    title: "Enterprise IT Support",
    summary:
      "Built a strong foundation in user support, incident resolution, Windows environments and structured troubleshooting.",
    description:
      "Built more than two decades of experience supporting users, devices, infrastructure and business systems across complex enterprise environments.",
  },
  {
    id: "end-user-computing",
    start: 2024,
    end: 2025,
    title: "End User Computing Engineer",
    summary:
      "Expanded into endpoint engineering, deployment, Microsoft Intune, Autopilot, Microsoft Entra ID, VMware vCenter, PowerCLI and enterprise support workflows.",
    description:
      "Progressed into a broader engineering role focused on modern workplace technology, endpoint management and user experience.",
  },
  {
    id: "independent-consulting",
    start: 2025,
    end: null,
    title: "Independent Technology Consulting",
    summary:
      "Applying practical experience to independent consulting, self-hosted infrastructure, web projects and documented technical delivery.",
    description:
      "Started building websites, digital services and technology solutions independently through TD Group.",
    milestones: [
      {
        year: 2026,
        title: "AI and Product Development",
        description:
          "Expanded into AI-powered applications, recruitment technology, automation, home-lab infrastructure and modern web development.",
      },
    ],
  },
];

export function formatPeriod(stage: Pick<CareerStage, "start" | "end">) {
  return `${stage.start}–${stage.end ?? "Present"}`;
}
