"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { CircleAlert, Send } from "lucide-react";
import { retrievalProvider } from "@/lib/ai-intranet/retrieval";
import { intranetBase } from "@/lib/ai-intranet/format";
import type { KnowledgeAnswer } from "@/lib/ai-intranet/types";

const suggestions = [
  "How many days a week can I work from home?",
  "How much notice do I need to give for annual leave?",
  "My laptop was stolen. What should I do?",
  "When are contractor invoices paid?",
  "What is our parental leave entitlement?",
];

export default function Assistant() {
  const inputId = useId();
  const [question, setQuestion] = useState("");
  const [thread, setThread] = useState<KnowledgeAnswer[]>([]);
  const [busy, setBusy] = useState(false);

  async function ask(text: string) {
    if (busy || text.trim() === "") return;
    setBusy(true);
    const result = await retrievalProvider.answer(text);
    setThread((previous) => [result, ...previous]);
    setQuestion("");
    setBusy(false);
  }

  return (
    <div className="space-y-8">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void ask(question);
        }}
        className="space-y-4"
      >
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-white"
        >
          Ask a question about company documents
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id={inputId}
            value={question}
            maxLength={300}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="e.g. When do I need a purchase order?"
            className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-500 focus-ring"
          />
          <button
            type="submit"
            disabled={busy || question.trim() === ""}
            className="btn-primary disabled:opacity-50"
          >
            <Send aria-hidden="true" className="h-4 w-4" />
            Ask
          </button>
        </div>
        <div
          className="flex flex-wrap gap-2"
          aria-label="Suggested questions"
          role="group"
        >
          {suggestions.map((text) => (
            <button
              key={text}
              type="button"
              onClick={() => void ask(text)}
              className="rounded-full border border-white/10 px-3.5 py-1.5 text-left text-sm text-slate-300 transition-colors hover:border-sky-400/50 hover:text-white focus-ring"
            >
              {text}
            </button>
          ))}
        </div>
      </form>

      <p className="text-xs text-slate-400">
        Method:{" "}
        <strong className="text-slate-200">{retrievalProvider.label}</strong>.{" "}
        {retrievalProvider.description}
      </p>

      <div aria-live="polite" className="space-y-6">
        {thread.length === 0 && (
          <p className="card p-6 text-slate-300">
            Ask a question or pick a suggestion. Answers always show the
            document and section they came from. Questions the documents
            can&rsquo;t support are declined, not guessed.
          </p>
        )}
        {thread.map((result, position) => (
          <AnswerCard
            key={`${thread.length - position}-${result.question}`}
            result={result}
          />
        ))}
      </div>
    </div>
  );
}

function AnswerCard({ result }: { result: KnowledgeAnswer }) {
  return (
    <article className="card space-y-4 p-6">
      <p className="text-sm text-slate-400">
        You asked: <span className="text-white">{result.question}</span>
      </p>

      {result.status === "answered" ? (
        <>
          <div className="space-y-2 border-l-2 border-sky-400 pl-4 text-lg leading-8 text-white">
            {result.answer.map((sentence) => (
              <p key={sentence}>{sentence}</p>
            ))}
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Sources
            </h3>
            <ul className="mt-2 space-y-2">
              {result.citations.map((citation) => (
                <li key={`${citation.documentSlug}#${citation.sectionId}`}>
                  <Link
                    href={`${intranetBase}/library/${citation.documentSlug}#${citation.sectionId}`}
                    className="card-interactive block p-3 text-sm"
                  >
                    <span className="font-medium text-sky-300">
                      {citation.documentTitle}
                    </span>
                    <span className="text-slate-300">
                      {" "}
                      → {citation.sectionHeading}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-slate-500">
            Extracted verbatim from the cited section. Match coverage{" "}
            {Math.round(result.coverage * 100)}%.
          </p>
        </>
      ) : (
        <div
          role="status"
          className="flex gap-3 rounded-lg border border-amber-400/30 bg-amber-400/10 p-4 text-amber-50"
        >
          <CircleAlert
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 shrink-0 text-amber-300"
          />
          <div className="space-y-2">
            <p className="font-semibold">
              Not enough evidence in the approved documents
            </p>
            <p className="text-sm leading-6">{result.reason}</p>
            {result.unmatchedTerms.length > 0 && (
              <p className="text-xs text-amber-100/80">
                Not found in any document: {result.unmatchedTerms.join(", ")}
              </p>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
