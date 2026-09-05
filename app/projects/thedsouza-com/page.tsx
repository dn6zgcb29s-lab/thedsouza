import type { Metadata } from "next";
import Link from "next/link";

const title = "Building thedsouza.com as a Consulting Portfolio";
const description =
  "A case study covering the design, development, SEO, accessibility and controlled delivery of Glen D’Souza’s Next.js consulting portfolio.";
const section = "px-6 py-20 sm:px-8";
const heading = "text-3xl font-bold sm:text-4xl";
const body = "text-lg leading-8 text-slate-300";
const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects/thedsouza-com",
  },
  openGraph: {
    type: "article",
    url: "https://www.thedsouza.com/projects/thedsouza-com",
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

const objectives = [
  "Introduce Glen as a technical consultant",
  "Connect more than two decades of IT experience with current project work",
  "Clearly explain available services",
  "Present technical work through evidence-based case studies",
  "Give prospective clients a straightforward path to make contact",
  "Remain maintainable as Glen’s skills and projects develop",
];

const technicalFoundation = [
  "Next.js App Router",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GitHub",
  "Vercel",
];

const homepageJourney = [
  "Hero",
  "About",
  "Experience",
  "Services",
  "Projects",
  "Skills",
  "Timeline",
  "Contact",
];

const searchFeatures = [
  "Unique page titles and descriptions",
  "Canonical URLs",
  "Open Graph metadata",
  "Twitter card metadata",
  "Sitemap",
  "robots.txt",
  "Person JSON-LD",
  "Existing favicon and application identity assets",
];

const accessibilityPractices = [
  "Semantic headings and sections",
  "Keyboard-accessible navigation and links",
  "Visible focus styles",
  "Responsive desktop and mobile layouts",
  "Reduced-motion consideration where implemented",
  "Contrast-conscious dark interface",
  "Checks for overflow, clipping and awkward wrapping",
];

const improvements = [
  "Technical-consulting positioning",
  "Services and engagement models",
  "Professional experience section",
  "GHDC case study and roadmap",
  "Self-hosted mail-server case study",
  "Epping Tennis Club support and merchandise-POC case study",
  "SEO and structured metadata foundation",
  "Removal or correction of outdated portfolio records",
  "Responsive and accessibility verification",
];

const lessons = [
  "Clear information architecture matters as much as visual design.",
  "A portfolio becomes stronger when claims are supported by detailed case studies.",
  "Small controlled releases are easier to review and recover than large uncontrolled changes.",
  "AI-assisted development still requires human judgement, verification and accountability.",
  "Privacy review is essential when presenting infrastructure and operational work publicly.",
  "A personal website should evolve alongside real experience rather than presenting future plans as completed work.",
];

const workflow = [
  "Define one bounded milestone",
  "Verify the clean repository baseline",
  "Implement only the approved scope",
  "Run formatting, TypeScript, lint and production-build checks",
  "Review source changes and privacy exposure",
  "Test desktop, mobile, navigation and browser behaviour",
  "Commit only after review",
  "Publish normally through GitHub",
  "Verify the live Vercel deployment",
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

export default function ThedsouzaComPage() {
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
              Live • Continuously improved
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              A personal website developed into a practical consulting platform
              that communicates experience, services and technical work through
              responsive design, structured case studies and a disciplined
              release process.
            </p>
          </div>
        </header>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Project objective</h2>
            <p className={`mt-8 ${body}`}>
              The website needed to move beyond a basic personal portfolio and
              become a credible platform that:
            </p>
            <BulletList items={objectives} />
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Technical foundation</h2>
            <p className={`mt-8 ${body}`}>
              The implementation uses a focused set of technologies already
              present in the repository:
            </p>
            <BulletList items={technicalFoundation} />
            <p className={`mt-8 ${body}`}>
              The site is built from reusable, section-based React components,
              responsive layouts for desktop and mobile, data-driven project and
              service cards, static case-study routes, same-page homepage
              navigation, and production deployment through GitHub and Vercel.
            </p>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Information architecture and content</h2>
            <p className={`mt-8 ${body}`}>
              The homepage follows a deliberate journey:
            </p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {homepageJourney.map((item, index) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-700 bg-slate-800 p-5"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-400">
                    Section {index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-100">
                    {item}
                  </h3>
                </li>
              ))}
            </ol>
            <p className={`mt-8 ${body}`}>
              This order helps visitors understand who Glen is, his professional
              background, the services he provides, evidence of completed and
              ongoing work, and how to start a conversation.
            </p>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Search and sharing foundation</h2>
            <p className={`mt-8 ${body}`}>
              The site includes a deliberate search and sharing foundation
              without claiming guaranteed search outcomes:
            </p>
            <BulletList items={searchFeatures} />
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Accessibility and responsive design</h2>
            <p className={`mt-8 ${body}`}>
              The implementation is reviewed as an interactive public site, with
              attention to structure, keyboard access and small-screen behavior
              rather than a claim of formal certification.
            </p>
            <BulletList items={accessibilityPractices} />
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>AI-assisted delivery workflow</h2>
            <div className="mt-8 rounded-2xl border border-sky-400/40 bg-sky-400/10 p-6 sm:p-8">
              <p className="text-lg leading-8 text-slate-200">
                Development uses an AI-assisted workflow, but each change is
                deliberately scoped, reviewed, tested and approved before
                publication. AI supports implementation and analysis; project
                direction, factual accuracy, acceptance decisions and
                publication control remain human-led.
              </p>
            </div>
            <p className={`mt-8 ${body}`}>The controlled workflow is:</p>
            <ol className="mt-8 space-y-4">
              {workflow.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-700 bg-slate-900 p-5 leading-7 text-slate-300"
                >
                  <span className="shrink-0 font-semibold text-sky-400">
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Selected improvements delivered</h2>
            <BulletList items={improvements} />
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Engineering lessons</h2>
            <BulletList items={lessons} />
          </div>
        </section>

        <section className={`${section} bg-slate-900`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={heading}>Current status and next direction</h2>
            <p className={`mt-8 ${body}`}>
              The website is live and remains under controlled, incremental
              development. Future improvements will add stronger project
              evidence, refine contact conversion, expand selected case studies
              and continue improving performance and accessibility.
            </p>
          </div>
        </section>

        <section className={`${section} bg-slate-800`}>
          <div className="mx-auto max-w-5xl">
            <aside className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-sky-300 sm:text-3xl">
                Need a website or technical project delivered clearly?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                I can help move an idea from discovery through implementation,
                verification and handover using a transparent, staged approach.
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
