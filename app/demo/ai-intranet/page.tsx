import Link from "next/link";
import {
  ArrowRight,
  Bot,
  FileText,
  Megaphone,
  ShieldAlert,
} from "lucide-react";
import { categories, documents } from "@/lib/ai-intranet/documents";
import { formatDate, intranetBase } from "@/lib/ai-intranet/format";

const announcements = [
  {
    date: "2026-10-20",
    title: "Hybrid work policy refreshed",
    body: "Core hours and the home office allowance have been clarified. See the updated policy in the library.",
    href: `${intranetBase}/library/hybrid-work-policy`,
  },
  {
    date: "2026-10-14",
    title: "Service desk hours extended",
    body: "The IT service desk now opens at 8:00 am on weekdays. Urgent issues should still be phoned in.",
    href: `${intranetBase}/library/it-service-desk-guide`,
  },
  {
    date: "2026-10-06",
    title: "Contractor onboarding checklist updated",
    body: "Certificates of currency are now checked before a start date is confirmed.",
    href: `${intranetBase}/library/contractor-onboarding-guide`,
  },
];

const quickLinks = [
  {
    label: "Request annual leave",
    href: `${intranetBase}/library/leave-policy#annual-leave-requests`,
  },
  {
    label: "Report an incident",
    href: `${intranetBase}/library/incident-reporting-procedure#reporting-incidents`,
  },
  {
    label: "Reset a password",
    href: `${intranetBase}/library/it-service-desk-guide#password-reset`,
  },
  {
    label: "Submit an expense claim",
    href: `${intranetBase}/library/expenses-and-purchasing#expense-claims`,
  },
];

export default function IntranetHome() {
  const recent = [...documents]
    .sort((a, b) => b.updated.localeCompare(a.updated))
    .slice(0, 4);

  return (
    <div className="space-y-12">
      <section>
        <p className="eyebrow">Northbridge Supplies · Staff hub</p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Good morning. Everything you need, in one place.
        </h1>
        <p className="lead mt-5 max-w-2xl">
          Policies, procedures and IT help, with an assistant that answers
          questions from approved documents and shows exactly where each answer
          came from.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href={`${intranetBase}/assistant`} className="btn-primary">
            <Bot aria-hidden="true" className="h-5 w-5" />
            Ask the assistant
          </Link>
          <Link href={`${intranetBase}/library`} className="btn-secondary">
            Browse the library
          </Link>
        </div>
      </section>

      <section aria-labelledby="quick-links" className="space-y-4">
        <h2 id="quick-links" className="text-xl font-semibold text-white">
          Quick links
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="card-interactive flex items-center justify-between gap-3 p-4 text-sm font-medium text-white"
              >
                {link.label}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 text-sky-400"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-8 lg:grid-cols-5">
        <section
          aria-labelledby="announcements"
          className="space-y-4 lg:col-span-3"
        >
          <h2
            id="announcements"
            className="flex items-center gap-2 text-xl font-semibold text-white"
          >
            <Megaphone aria-hidden="true" className="h-5 w-5 text-sky-400" />
            Announcements
          </h2>
          <ul className="space-y-3">
            {announcements.map((item) => (
              <li key={item.title} className="card p-5">
                <p className="text-xs text-slate-400">
                  {formatDate(item.date)}
                </p>
                <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="text-link mt-3 inline-block text-sm"
                >
                  Read the document
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="recent" className="space-y-4 lg:col-span-2">
          <h2
            id="recent"
            className="flex items-center gap-2 text-xl font-semibold text-white"
          >
            <FileText aria-hidden="true" className="h-5 w-5 text-sky-400" />
            Recently updated
          </h2>
          <ul className="space-y-3">
            {recent.map((doc) => (
              <li key={doc.slug}>
                <Link
                  href={`${intranetBase}/library/${doc.slug}`}
                  className="card-interactive block p-4"
                >
                  <span className="block font-medium text-white">
                    {doc.title}
                  </span>
                  <span className="mt-1 block text-xs text-slate-400">
                    {doc.category} · Updated {formatDate(doc.updated)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-400">
            {documents.length} documents across {categories.length} categories.
          </p>
        </section>
      </div>

      <section
        aria-labelledby="demo-vs-production"
        className="card border-amber-400/30 bg-amber-400/5 p-6"
      >
        <h2
          id="demo-vs-production"
          className="flex items-center gap-2 text-lg font-semibold text-white"
        >
          <ShieldAlert aria-hidden="true" className="h-5 w-5 text-amber-300" />
          What this demonstration is, and is not
        </h2>
        <div className="mt-4 grid gap-6 text-sm leading-6 text-slate-300 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-white">This demo</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                {documents.length} synthetic documents for a fictional company
              </li>
              <li>Keyword retrieval that quotes the source section</li>
              <li>An explicit “not enough evidence” response</li>
              <li>No login, database, or external service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              A production build adds
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Real sign-in, roles and per-document permissions</li>
              <li>Your documents, kept current and access-controlled</li>
              <li>A generative AI model grounded in those documents</li>
              <li>Audit logging, privacy review and security testing</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
