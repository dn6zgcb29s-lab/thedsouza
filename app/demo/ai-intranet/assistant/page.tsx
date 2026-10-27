import type { Metadata } from "next";
import Assistant from "@/components/ai-intranet/Assistant";
import EvalPanel from "@/components/ai-intranet/EvalPanel";

export const metadata: Metadata = { title: "AI Assistant (POC)" };

export default function AssistantPage() {
  return (
    <div className="space-y-10">
      <header>
        <p className="eyebrow">AI Assistant</p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ask a question, see the source
        </h1>
        <p className="lead mt-4 max-w-2xl">
          Answers come only from the approved demonstration documents. This
          version uses deterministic retrieval, not a generative AI model, and
          runs entirely in your browser.
        </p>
      </header>
      <Assistant />
      <EvalPanel />
    </div>
  );
}
