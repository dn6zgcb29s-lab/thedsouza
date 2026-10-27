"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type {
  DocumentCategory,
  KnowledgeDocument,
} from "@/lib/ai-intranet/types";
import { formatDate, intranetBase } from "@/lib/ai-intranet/format";

type Props = {
  documents: KnowledgeDocument[];
  categories: DocumentCategory[];
};

export default function LibraryBrowser({ documents, categories }: Props) {
  const [category, setCategory] = useState<DocumentCategory | "All">("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return documents.filter(
      (doc) =>
        (category === "All" || doc.category === category) &&
        (needle === "" ||
          `${doc.title} ${doc.summary} ${doc.category}`
            .toLowerCase()
            .includes(needle))
    );
  }, [documents, category, query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          {(["All", ...categories] as const).map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={category === name}
              onClick={() => setCategory(name)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-ring ${
                category === name
                  ? "border-sky-400/60 bg-sky-400/15 text-sky-200"
                  : "border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        <label className="relative block md:w-72">
          <span className="sr-only">Filter documents by title</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter by title"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus-ring"
          />
        </label>
      </div>

      <p className="text-sm text-slate-400" aria-live="polite">
        Showing {visible.length} of {documents.length} documents
      </p>

      {visible.length === 0 ? (
        <p className="card p-6 text-slate-300">
          No documents match that filter.
        </p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {visible.map((doc) => (
            <li key={doc.slug}>
              <Link
                href={`${intranetBase}/library/${doc.slug}`}
                className="card-interactive block h-full p-5"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                  {doc.category}
                </span>
                <span className="mt-2 block text-lg font-semibold text-white">
                  {doc.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-300">
                  {doc.summary}
                </span>
                <span className="mt-4 block text-xs text-slate-400">
                  Updated {formatDate(doc.updated)} · Owner: {doc.owner}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
