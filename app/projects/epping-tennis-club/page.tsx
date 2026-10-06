import type { Metadata } from "next";
import Link from "next/link";
import ContactCtas from "@/components/ContactCtas";
import { ProjectStructuredData, socialImageUrl } from "@/components/StructuredData";

const title = "Epping Tennis Club Digital Support";
const description =
  "A case study covering email migration, domain and Outlook support for a community tennis club.";
const section = "px-6 py-20 sm:px-8";
const heading = "text-3xl font-bold sm:text-4xl";
const body = "text-lg leading-8 text-slate-300";
const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects/epping-tennis-club",
  },
  openGraph: {
    type: "article",
    url: "https://www.thedsouza.com/projects/epping-tennis-club",
    siteName: "Glen D'Souza",
    title,
    description,
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImageUrl],
  },
};

const supportWork = [
  "Supporting Microsoft and Outlook account configuration",
  "Troubleshooting mailbox and email-client issues",
  "Migrating club mailboxes from a previous hosting and email arrangement to domain-based email",
  "Assisting with hosting and email-service migration",
  "Reviewing SPF, DKIM and DMARC configuration",
  "Investigating junk-folder placement and sending or receiving problems",
  "Reviewing domain, account-ownership and access issues",
  "Providing general technical assistance to club users",
];

const outcomes = [
  "Club mailboxes were migrated to domain-based email.",
  "Email, Outlook and account-access issues received structured technical investigation and support.",
  "Email-authentication configuration was reviewed as part of deliverability troubleshooting.",
];

const lessons = [
  "Small organisations often depend on technology with unclear ownership and limited documentation.",
  "Email migration requires attention to user continuity, domain configuration and handover.",
  "Ongoing informal support benefits from clearly defined scope, responsibility and cost.",
  "Documentation and knowledge transfer are essential for organisational continuity.",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-xl border border-slate-700 bg-slate-800 p-5 leading-7 text-slate-300"
        >
          <span aria-hidden="true" className="text-sky-400">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EppingTennisClubPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen overflow-x-hidden bg-slate-950 text-white"
    >
      <ProjectStructuredData
        title={title}
        description={description}
        path="/projects/epping-tennis-club"
      />
      <article>
        <header className="border-b border-slate-800 px-6 pb-20 pt-10 sm:px-8 sm:pt-12">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/#projects"
              className={`inline-flex font-medium text-slate-300 transition hover:text-sky-400 ${focus}`}
            >
              Back to projects
            </Link>
            <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400 sm:tracking-[0.25em]">
              Email migration completed • Technology consulting available
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              Supporting a community tennis club with practical email, domain
              and user-account issues, including the migration and stabilisation
              of its email environment.
            </p>
          </div>
        </header>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-4xl">
            <h2 className={heading}>The context</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                Epping Tennis Club needed practical assistance across email,
                domain services and digital-account continuity.
              </p>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Email, domain and user support</h2>
            <p className={`mt-8 ${body}`}>
              Glen contributed by supporting the club&apos;s existing services
              and users across the following areas:
            </p>
            <BulletList items={supportWork} />
            <aside className="mt-10 rounded-2xl border border-amber-400/40 bg-amber-400/10 p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-amber-200">
                Scope clarification
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                This work involved Microsoft-account and Outlook support. It
                should not be interpreted as full administration of the
                club&apos;s Microsoft 365 tenant.
              </p>
            </aside>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Practical outcomes</h2>
            <BulletList items={outcomes} />
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Engineering and consulting lessons</h2>
            <BulletList items={lessons} />
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Current status</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                The email migration and associated technical work are now
                complete. I remain available to ETC as their technology
                consultant for any future technical, website or software
                development requirements.
              </p>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <aside className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-sky-300 sm:text-3xl">
                Need practical support or a proof of concept?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                I can help clarify an existing technology problem, complete a
                focused migration or build a working demonstration before a
                larger project is commissioned.
              </p>
              <div className="mt-8">
                <ContactCtas align="start" />
              </div>
              <Link
                href="/#projects"
                className={`mt-6 inline-flex font-medium text-sky-400 transition hover:text-sky-300 ${focus}`}
              >
                Return to Projects
              </Link>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}
