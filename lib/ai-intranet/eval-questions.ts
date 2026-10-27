import type { EvalQuestion } from "./types.ts";

/**
 * Repeatable evaluation set. Each supported question names the document
 * section that must be cited and a phrase the extracted answer must contain.
 * Unsupported questions must receive an explicit insufficient-evidence reply.
 */
export const evalQuestions: EvalQuestion[] = [
  {
    id: "Q1",
    question: "How many days a week can I work from home?",
    expect: {
      kind: "answered",
      documentSlug: "hybrid-work-policy",
      sectionId: "eligibility",
      contains: "up to three days per week",
    },
  },
  {
    id: "Q2",
    question: "What are the core hours?",
    expect: {
      kind: "answered",
      documentSlug: "hybrid-work-policy",
      sectionId: "core-hours",
      contains: "10:00 am to 3:00 pm",
    },
  },
  {
    id: "Q3",
    question: "How much notice do I need to give for annual leave?",
    expect: {
      kind: "answered",
      documentSlug: "leave-policy",
      sectionId: "annual-leave-requests",
      contains: "at least one week of notice",
    },
  },
  {
    id: "Q4",
    question: "What insurance does a contractor need before starting?",
    expect: {
      kind: "answered",
      documentSlug: "contractor-onboarding-guide",
      sectionId: "before-day-one",
      contains: "public liability insurance",
    },
  },
  {
    id: "Q5",
    question: "When are contractor invoices paid?",
    expect: {
      kind: "answered",
      documentSlug: "contractor-onboarding-guide",
      sectionId: "invoicing",
      contains: "within 30 days",
    },
  },
  {
    id: "Q6",
    question: "My laptop was stolen. What should I do?",
    expect: {
      kind: "answered",
      documentSlug: "it-service-desk-guide",
      sectionId: "lost-device",
      contains: "within one hour",
    },
  },
  {
    id: "Q7",
    question: "When do I need a purchase order?",
    expect: {
      kind: "answered",
      documentSlug: "expenses-and-purchasing",
      sectionId: "purchase-orders",
      contains: "over $500",
    },
  },
  {
    id: "Q8",
    question: "Where is the emergency assembly point?",
    expect: {
      kind: "answered",
      documentSlug: "incident-reporting-procedure",
      sectionId: "emergency-evacuation",
      contains: "Car Park B",
    },
  },
  {
    id: "Q9",
    question: "What is our parental leave entitlement?",
    expect: { kind: "insufficient-evidence" },
  },
  {
    id: "Q10",
    question: "What is the CEO's salary?",
    expect: { kind: "insufficient-evidence" },
  },
  {
    id: "Q11",
    question: "Can I bring my dog to the office?",
    expect: { kind: "insufficient-evidence" },
  },
];
