import type { Metadata } from "next";
import LibraryBrowser from "@/components/ai-intranet/LibraryBrowser";
import { categories, documents } from "@/lib/ai-intranet/documents";

export const metadata: Metadata = { title: "Knowledge Library (POC)" };

export default function LibraryPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="eyebrow">Knowledge Library</p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Policies, procedures and guides
        </h1>
        <p className="lead mt-4 max-w-2xl">
          The approved documents the assistant is allowed to answer from. All
          content is synthetic.
        </p>
      </header>
      <LibraryBrowser documents={documents} categories={categories} />
    </div>
  );
}
