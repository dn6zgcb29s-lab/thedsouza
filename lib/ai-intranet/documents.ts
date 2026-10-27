import type { DocumentCategory, KnowledgeDocument } from "./types.ts";

/**
 * Synthetic demonstration content for a fictional business, "Northbridge
 * Supplies Pty Ltd". Nothing here describes a real company, employee,
 * customer or contractor. Do not add real business data to this file.
 */
export const documents: KnowledgeDocument[] = [
  {
    slug: "hybrid-work-policy",
    title: "Hybrid and Remote Work Policy",
    category: "Company Policies",
    updated: "2026-09-12",
    owner: "People and Culture",
    summary:
      "Where and when staff work, core hours, and the home office allowance.",
    sections: [
      {
        id: "eligibility",
        heading: "Eligibility and office attendance",
        paragraphs: [
          "Full-time staff may work from home up to three days per week. Staff are expected to be in the office at least two days per week.",
          "Fully remote arrangements are only available with written approval from your manager and a director. Staff in their first three months are expected to attend the office four days per week.",
        ],
      },
      {
        id: "core-hours",
        heading: "Core hours",
        paragraphs: [
          "Core hours are 10:00 am to 3:00 pm, Monday to Friday, Melbourne time. Staff must be available for meetings and messages during core hours, wherever they are working.",
          "Outside core hours, working times can be agreed with your manager as long as your total weekly hours are met.",
        ],
      },
      {
        id: "home-office-allowance",
        heading: "Home office allowance",
        paragraphs: [
          "Staff approved for hybrid work receive a one-off home office allowance of $400 to buy a chair, desk accessories or a monitor. Claim the allowance through the expense claim process with a receipt.",
          "The allowance can be claimed once, within six months of your hybrid arrangement starting. Equipment purchased remains the property of the staff member.",
        ],
      },
      {
        id: "working-securely",
        heading: "Working securely from home",
        paragraphs: [
          "Use only your company laptop for company work. Do not store company files on personal computers, personal cloud storage or USB drives.",
          "Lock your screen whenever you leave your laptop unattended. Public Wi-Fi may only be used with the company VPN switched on.",
        ],
      },
    ],
  },
  {
    slug: "leave-policy",
    title: "Annual and Personal Leave Policy",
    category: "Company Policies",
    updated: "2026-07-03",
    owner: "People and Culture",
    summary:
      "How to request annual leave and report personal or carer's leave.",
    sections: [
      {
        id: "annual-leave-requests",
        heading: "Requesting annual leave",
        paragraphs: [
          "Submit annual leave requests in the HR portal. Requests for five days or fewer need at least one week of notice. Requests for more than five days need at least four weeks of notice.",
          "Your manager will approve or decline a request within three business days. Leave is not confirmed until the HR portal shows the request as approved.",
        ],
      },
      {
        id: "personal-leave",
        heading: "Personal and carer's leave",
        paragraphs: [
          "If you are unwell or need to care for someone, notify your manager before your normal start time, by phone or message. Do not rely on email alone.",
          "A medical certificate or statutory declaration is required for absences of two or more consecutive days.",
        ],
      },
      {
        id: "public-holidays",
        heading: "Public holidays",
        paragraphs: [
          "Staff are not required to work on Victorian public holidays. The office is closed between Christmas Day and New Year's Day, and these days are not deducted from annual leave.",
        ],
      },
    ],
  },
  {
    slug: "contractor-onboarding-guide",
    title: "Contractor Onboarding Guide",
    category: "Contractor Onboarding",
    updated: "2026-08-19",
    owner: "Operations",
    summary:
      "What a contractor must provide before starting and what to expect in the first week.",
    sections: [
      {
        id: "before-day-one",
        heading: "Before your first day",
        paragraphs: [
          "Before starting, each contractor must return a signed services agreement, a valid ABN, and a certificate of currency for public liability insurance of at least $5 million.",
          "Contractors without a current certificate of currency cannot start work. Send documents to the Operations team using the onboarding checklist.",
        ],
      },
      {
        id: "site-induction",
        heading: "Site induction",
        paragraphs: [
          "All contractors must complete the safety induction on their first day before entering the warehouse or workshop. The induction takes about 45 minutes and is run by the Operations team.",
          "Contractors who work only remotely complete the online induction module instead, within five business days of starting.",
        ],
      },
      {
        id: "access-and-equipment",
        heading: "Access passes and equipment",
        paragraphs: [
          "A visitor access pass is issued on day one at reception. Bring photo identification to collect it.",
          "System access is requested by your Northbridge sponsor through the IT service desk. Allow three business days for accounts to be created. Contractors are given a loan laptop only when their agreement says so.",
        ],
      },
      {
        id: "invoicing",
        heading: "Invoicing and payment",
        paragraphs: [
          "Submit invoices to accounts payable by the 25th of each month. Every invoice must quote the purchase order number issued by your sponsor.",
          "Valid invoices are paid within 30 days of receipt. Invoices without a purchase order number are returned unpaid.",
        ],
      },
    ],
  },
  {
    slug: "it-service-desk-guide",
    title: "IT Service Desk Guide",
    category: "IT Help",
    updated: "2026-09-28",
    owner: "IT Services",
    summary:
      "How to get IT help, reset a password, report a lost device and request software.",
    sections: [
      {
        id: "getting-help",
        heading: "Getting help",
        paragraphs: [
          "Log requests in the IT service portal, email the service desk, or call extension 100. The service desk is staffed from 8:00 am to 6:00 pm on weekdays.",
          "Urgent issues that stop you working, such as no network access, should be reported by phone rather than the portal.",
        ],
      },
      {
        id: "password-reset",
        heading: "Passwords and multi-factor authentication",
        paragraphs: [
          "Reset a forgotten password yourself using the self-service password page. You will need your registered authenticator app to verify your identity.",
          "Passwords must be at least 14 characters long. Multi-factor authentication is required for all accounts. Never share your password with anyone, including the service desk.",
        ],
      },
      {
        id: "lost-device",
        heading: "Lost or stolen devices",
        paragraphs: [
          "If a laptop or phone is lost or stolen, report it to the service desk by phone within one hour of noticing. The device will be locked and wiped remotely.",
          "Do not wait until the end of the day to report. Also tell your manager and, if the device was stolen, file a police report.",
        ],
      },
      {
        id: "software-requests",
        heading: "Requesting software",
        paragraphs: [
          "Request new software through the IT service portal. Your manager must approve the request, and IT will assess it for security and licensing.",
          "Standard requests are completed within five business days. Do not install unapproved software on company devices.",
        ],
      },
    ],
  },
  {
    slug: "expenses-and-purchasing",
    title: "Expenses and Purchasing Procedure",
    category: "Operational Procedures",
    updated: "2026-06-17",
    owner: "Finance",
    summary:
      "Claiming expenses, approval limits and when a purchase order is required.",
    sections: [
      {
        id: "expense-claims",
        heading: "Submitting expense claims",
        paragraphs: [
          "Submit expense claims in the finance portal within 30 days of the expense, with a tax invoice or receipt attached. Claims without a receipt are not reimbursed.",
          "Approved claims are paid in the next fortnightly pay run.",
        ],
      },
      {
        id: "approval-limits",
        heading: "Approval limits",
        paragraphs: [
          "Managers can approve expenses and purchases up to $1,000. Amounts between $1,000 and $10,000 need approval from a director. Amounts above $10,000 need approval from two directors.",
        ],
      },
      {
        id: "purchase-orders",
        heading: "Purchase orders",
        paragraphs: [
          "A purchase order is required for any purchase from a supplier over $500. Raise the purchase order before ordering, not afterwards.",
          "Purchase orders are raised in the finance portal and sent to the supplier by the requester.",
        ],
      },
    ],
  },
  {
    slug: "incident-reporting-procedure",
    title: "Workplace Incident Reporting Procedure",
    category: "Operational Procedures",
    updated: "2026-05-30",
    owner: "Health and Safety",
    summary:
      "How to report incidents and near misses and what to do in an emergency.",
    sections: [
      {
        id: "reporting-incidents",
        heading: "Reporting incidents and near misses",
        paragraphs: [
          "Report every workplace injury, incident or near miss to your supervisor immediately, and complete the incident form within 24 hours.",
          "Serious incidents must be reported by phone to the Health and Safety Officer straight away. Do not disturb the scene unless it is needed to prevent further harm.",
        ],
      },
      {
        id: "emergency-evacuation",
        heading: "Emergency evacuation",
        paragraphs: [
          "On hearing the alarm, leave the building by the nearest exit and go to the assembly point in Car Park B. Do not use the lifts.",
          "Floor wardens will check each area and report to the Emergency Coordinator. Do not re-enter the building until the all-clear is given.",
        ],
      },
      {
        id: "first-aid",
        heading: "First aid",
        paragraphs: [
          "First aid kits are located in the kitchen on each floor and at the warehouse office. Trained first aid officers are listed on the noticeboard beside reception.",
        ],
      },
    ],
  },
  {
    slug: "customer-complaints-procedure",
    title: "Customer Complaint Handling Procedure",
    category: "Operational Procedures",
    updated: "2026-04-22",
    owner: "Customer Service",
    summary: "Response times and escalation steps for customer complaints.",
    sections: [
      {
        id: "acknowledging",
        heading: "Acknowledging a complaint",
        paragraphs: [
          "Acknowledge every complaint within one business day. Record it in the customer service log with the customer's contact details and a summary of the issue.",
        ],
      },
      {
        id: "resolving",
        heading: "Resolving a complaint",
        paragraphs: [
          "Aim to resolve complaints within ten business days. Keep the customer updated at least every three business days until the complaint is closed.",
        ],
      },
      {
        id: "escalation",
        heading: "Escalation",
        paragraphs: [
          "Escalate to the Operations Manager if a complaint is not resolved within ten business days, involves a safety concern, or if the customer asks for escalation.",
          "Refunds above $500 must be approved by the Operations Manager.",
        ],
      },
    ],
  },
];

export const categories: DocumentCategory[] = [
  "Company Policies",
  "Contractor Onboarding",
  "IT Help",
  "Operational Procedures",
];

export function getDocument(slug: string): KnowledgeDocument | undefined {
  return documents.find((doc) => doc.slug === slug);
}
