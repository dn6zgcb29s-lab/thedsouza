import type { Metadata } from "next";
import { socialImageUrl } from "@/components/StructuredData";

const title = "Introducing JG";
const description =
  "JG (Junior Glen AI) is an experimental AI operating environment from TD Group of Companies, launching as a proof of concept on 14 November 2026.";
const section = "px-6 py-20 sm:px-8";
const heading = "text-3xl font-bold text-white sm:text-4xl";
const body = "text-lg leading-8 text-slate-300";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/jg" },
  openGraph: {
    type: "article",
    url: "https://www.thedsouza.com/jg",
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

const vision = [
  "Bring together intelligence from multiple AI providers.",
  "Coordinate specialist agents for different tasks.",
  "Maintain useful project and business context.",
  "Research, analyse and work with information and documents.",
  "Interact with digital tools and applications under human control.",
  "Eventually connect approved digital intelligence with the physical world.",
];

export default function JgPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <section className="px-6 pb-20 pt-28 sm:px-8">
        <div className="hero-rise mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Born 14 November 2026</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Introducing JG
          </h1>
          <p className="lead mx-auto mt-6 max-w-2xl">
            Junior Glen (AI). Intelligence without boundaries. A vision built
            over time.
          </p>
          <p className={`${body} mx-auto mt-6 max-w-2xl`}>
            JG, Junior Glen (AI), is an experimental AI operating environment created by TD Group
            of Companies. Our ambition is to bring the world&apos;s leading
            artificial intelligence capabilities together in one intelligent
            environment, combining different AI models, specialist agents,
            persistent context and the ability to work across the digital world.
          </p>
          <p className={`${body} mt-4`}>We call this the beginning of JG.</p>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto max-w-3xl">
          <h2 className={heading}>More than another chatbot</h2>
          <p className={`${body} mt-6`}>
            Today&apos;s AI systems offer extraordinary individual capabilities.
            But working across multiple providers, tools, projects and business
            environments can still be fragmented.
          </p>
          <p className={`${body} mt-4`}>
            JG is being developed around a different idea: one operating
            environment that can bring those capabilities together. The goal is
            to make AI more connected, useful, adaptable and capable of
            meaningful work.
          </p>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto max-w-3xl">
          <h2 className={heading}>Our vision</h2>
          <p className={`${body} mt-6`}>
            Inspired by the idea of a real-world intelligent assistant, JG is
            being developed towards a future where AI can:
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {vision.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className={`${body} mt-8`}>
            This is a long-term ambition. We intend to build it carefully,
            capability by capability.
          </p>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto max-w-3xl">
          <h2 className={heading}>Starting with a proof of concept</h2>
          <p className={`${body} mt-6`}>
            JG launches as a proof of concept on 14 November 2026. It represents
            the beginning of an ongoing development programme. Not every
            capability described in our vision is available today. We will
            continue to develop, test and improve the environment as the project
            progresses.
          </p>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto max-w-3xl">
          <h2 className={heading}>Built by TD Group. Developed for the future.</h2>
          <p className={`${body} mt-6`}>
            JG is an in-house TD Group initiative. We believe the future of AI
            should not be limited to using one model or one provider. It should
            be about bringing the right intelligence and capabilities together
            to solve real problems.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28 pt-12 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-semibold text-white">This is day one.</p>
          <p className="lead mt-4">JG — The beginning of something bigger.</p>
        </div>
      </section>
    </main>
  );
}
