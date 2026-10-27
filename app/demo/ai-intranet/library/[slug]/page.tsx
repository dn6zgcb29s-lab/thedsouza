import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bot } from "lucide-react";
import { documents, getDocument } from "@/lib/ai-intranet/documents";
import { formatDate, intranetBase } from "@/lib/ai-intranet/format";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return documents.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const doc = getDocument((await params).slug);
  return { title: doc ? `${doc.title} (POC)` : "Document not found" };
}

export default async function DocumentPage({ params }: { params: Params }) {
  const doc = getDocument((await params).slug);
  if (!doc) notFound();

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <Link
        href={`${intranetBase}/library`}
        className="text-link inline-flex items-center gap-2 text-sm"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Knowledge Library
      </Link>

      <header>
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
          {doc.category}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {doc.title}
        </h1>
        <p className="mt-3 text-sm text-slate-400">
          Updated {formatDate(doc.updated)} · Owner: {doc.owner} · Synthetic
          document
        </p>
      </header>

      <nav aria-label="Sections" className="card p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          In this document
        </p>
        <ul className="mt-2 space-y-1 text-sm">
          {doc.sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-link">
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {doc.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="card scroll-mt-6 p-6 target:border-sky-400/70 target:bg-sky-400/5"
        >
          <h2 className="text-xl font-semibold text-white">
            {section.heading}
          </h2>
          <div className="mt-3 space-y-3 leading-7 text-slate-300">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <Link href={`${intranetBase}/assistant`} className="btn-secondary">
        <Bot aria-hidden="true" className="h-5 w-5" />
        Ask the assistant a question
      </Link>
    </article>
  );
}
