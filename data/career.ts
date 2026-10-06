/**
 * Canonical career history. The Experience section renders from this
 * list — edit dates and roles here only.
 */

export const experienceClaim = "22+ years of professional IT experience";

export type CareerStage = {
  id: string;
  start: number;
  /** null = current / ongoing. */
  end: number | null;
  title: string;
  /** Short capability-focused summary (Experience section). */
  summary: string;
};

export const careerStages: CareerStage[] = [
  {
    id: "enterprise-it-support",
    start: 2003,
    end: 2024,
    title: "Enterprise IT Support",
    summary:
      "Built a strong foundation in user support, incident resolution, Windows environments and structured troubleshooting.",
  },
  {
    id: "end-user-computing",
    start: 2024,
    end: 2025,
    title: "End User Computing Engineer",
    summary:
      "Expanded into endpoint engineering, deployment, Microsoft Intune, Autopilot, Microsoft Entra ID, VMware vCenter, PowerCLI and enterprise support workflows.",
  },
  {
    id: "independent-consulting",
    start: 2025,
    end: null,
    title: "Independent Technology Consulting",
    summary:
      "Applying practical experience to independent consulting, self-hosted infrastructure, web projects and documented technical delivery.",
  },
];

export function formatPeriod(stage: Pick<CareerStage, "start" | "end">) {
  return `${stage.start}–${stage.end ?? "Present"}`;
}
