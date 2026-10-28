/**
 * Canonical career history. The Experience section renders from this
 * list — edit dates and roles here only.
 */

export type CareerStage = {
  id: string;
  start: number;
  /** null = current / ongoing. */
  end: number | null;
  /** Optional label shown instead of the year range. */
  label?: string;
  title: string;
  /** Short capability-focused summary (Experience section). */
  summary: string;
};

export const careerStages: CareerStage[] = [
  {
    id: "enterprise-it-support",
    start: 2003,
    end: 2011,
    title: "Enterprise IT Support, Kuwait",
    summary:
      "Enterprise IT support and help desk for an engineering company: user support, incident resolution, Windows environments and structured troubleshooting.",
  },
  {
    id: "end-user-computing",
    start: 2011,
    end: 2025,
    title: "Service Desk and End User Computing, Melbourne",
    summary:
      "Service desk and end-user computing roles in enterprise environments, expanding into endpoint engineering and deployment: Microsoft Intune, Autopilot, Microsoft Entra ID, VMware vCenter and PowerCLI.",
  },
  {
    id: "independent-engineering",
    start: 2025,
    end: null,
    label: "Now",
    title: "Independent IT Engineering Services",
    summary:
      "Available for contract and project engagements, including MSP overflow, alongside self-hosted infrastructure and web projects.",
  },
];

export function formatPeriod(
  stage: Pick<CareerStage, "start" | "end" | "label">
) {
  return stage.label ?? `${stage.start}–${stage.end ?? "Present"}`;
}
