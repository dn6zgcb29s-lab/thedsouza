import type { Metadata } from "next";
import Link from "next/link";

const title = "Epping Tennis Club Digital Support and Merchandise POC";
const description =
  "A case study covering email migration, domain and Outlook support, and a functional merchandise-store proof of concept for a community tennis club.";
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
  },
  twitter: {
    card: "summary",
    title,
    description,
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

const merchandiseFeatures = [
  "Product browsing",
  "Product filtering",
  "Product-detail pages",
  "Shopping-cart behaviour",
  "A sample checkout flow",
  "Demonstration deployment through GitHub Pages",
];

const outcomes = [
  "Club mailboxes were migrated to domain-based email.",
  "Email, Outlook and account-access issues received structured technical investigation and support.",
  "Email-authentication configuration was reviewed as part of deliverability troubleshooting.",
  "The merchandise proof of concept demonstrated a complete sample shopping journey.",
  "The POC provided a practical basis for discussing a future production implementation.",
];

const lessons = [
  "Small organisations often depend on technology with unclear ownership and limited documentation.",
  "Email migration requires attention to user continuity, domain configuration and handover.",
  "A proof of concept can validate a user journey without being misrepresented as a production system.",
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
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
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
              Ongoing technical support • Merchandise proof of concept completed
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              Supporting a community tennis club with practical email, domain
              and user-account issues while also exploring a future merchandise
              experience through a functional web proof of concept.
            </p>
          </div>
        </header>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-4xl">
            <h2 className={heading}>The context</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                Epping Tennis Club needed practical assistance across email,
                domain services and digital-account continuity. Alongside that
                operational work, a merchandise-store concept was explored to
                demonstrate how club products could be presented online.
              </p>
              <p>
                The work developed into two separate streams: ongoing technical
                support for existing services and a standalone merchandise proof
                of concept.
              </p>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>
              Workstream 1 — Email, domain and user support
            </h2>
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
            <h2 className={heading}>
              Workstream 2 — Merchandise-store proof of concept
            </h2>
            <p className={`mt-8 ${body}`}>
              Glen created a functional demonstration containing:
            </p>
            <BulletList items={merchandiseFeatures} />
            <aside className="mt-10 rounded-2xl border border-sky-400/40 bg-sky-400/10 p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-sky-200">
                Proof-of-concept limitation
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                The proof of concept was built to demonstrate the user journey
                and technical direction. It was not an official ETC production
                store, did not process genuine orders or payments, and was never
                launched as the club&apos;s live ecommerce platform.
              </p>
            </aside>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Practical outcomes</h2>
            <BulletList items={outcomes} />
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Engineering and consulting lessons</h2>
            <BulletList items={lessons} />
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Current status</h2>
            <div className={`mt-8 space-y-6 ${body}`}>
              <p>
                Glen continues to provide technical assistance to ETC. The next
                operational step is to formalise the support arrangement so that
                ongoing responsibilities, project scope and costs are clearly
                understood.
              </p>
              <p>
                The merchandise store remains a completed proof of concept only.
                Any production implementation would require separate approval,
                scope, hosting, payment, privacy, security and operational
                decisions.
              </p>
            </div>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
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
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className={`inline-flex justify-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 ${focus}`}
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/#projects"
                  className={`inline-flex justify-center rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400 ${focus}`}
                >
                  Return to Projects
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}
