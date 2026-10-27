"use client";

import { useState } from "react";
import { CircleCheck, CircleX, Play } from "lucide-react";
import { evalQuestions } from "@/lib/ai-intranet/eval-questions";
import { runEvaluation, type EvalResult } from "@/lib/ai-intranet/evaluate";
import { retrievalProvider } from "@/lib/ai-intranet/retrieval";

export default function EvalPanel() {
  const [results, setResults] = useState<EvalResult[] | null>(null);

  async function run() {
    setResults(await runEvaluation(retrievalProvider, evalQuestions));
  }

  const passed = results?.filter((r) => r.passed).length ?? 0;

  return (
    <section aria-labelledby="eval-heading" className="card space-y-4 p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="eval-heading" className="text-lg font-semibold text-white">
            Evaluation questions
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            A repeatable set with expected sources. Three questions are
            deliberately unsupported and must be declined.
          </p>
        </div>
        <button
          type="button"
          onClick={() => void run()}
          className="btn-secondary shrink-0 px-4 py-2 text-sm"
        >
          <Play aria-hidden="true" className="h-4 w-4" />
          Run all {evalQuestions.length}
        </button>
      </div>

      {results && (
        <p role="status" className="text-sm font-medium text-white">
          {passed} of {results.length} passed
        </p>
      )}

      <ul className="divide-y divide-white/10">
        {evalQuestions.map((item) => {
          const result = results?.find((r) => r.question.id === item.id);
          return (
            <li key={item.id} className="flex gap-3 py-3 text-sm">
              <span className="w-8 shrink-0 font-mono text-slate-400">
                {item.id}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-white">{item.question}</p>
                <p className="mt-1 text-xs text-slate-400">
                  Expected:{" "}
                  {item.expect.kind === "answered"
                    ? `${item.expect.documentSlug} → ${item.expect.sectionId}`
                    : "insufficient evidence"}
                </p>
                {result && (
                  <p className="mt-1 text-xs text-slate-300">{result.detail}</p>
                )}
              </div>
              {result &&
                (result.passed ? (
                  <span className="flex shrink-0 items-center gap-1 text-emerald-300">
                    <CircleCheck aria-hidden="true" className="h-4 w-4" /> Pass
                  </span>
                ) : (
                  <span className="flex shrink-0 items-center gap-1 text-rose-300">
                    <CircleX aria-hidden="true" className="h-4 w-4" /> Fail
                  </span>
                ))}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
