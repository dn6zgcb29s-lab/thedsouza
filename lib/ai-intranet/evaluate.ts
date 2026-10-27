import type {
  EvalQuestion,
  KnowledgeAnswer,
  KnowledgeProvider,
} from "./types.ts";

export type EvalResult = {
  question: EvalQuestion;
  answer: KnowledgeAnswer;
  passed: boolean;
  detail: string;
};

export function judge(
  question: EvalQuestion,
  answer: KnowledgeAnswer
): EvalResult {
  const { expect } = question;
  if (expect.kind === "insufficient-evidence") {
    const passed = answer.status === "insufficient-evidence";
    return {
      question,
      answer,
      passed,
      detail: passed
        ? "Correctly declined to answer."
        : "Answered a question the documents do not support.",
    };
  }
  if (answer.status !== "answered") {
    return {
      question,
      answer,
      passed: false,
      detail: "Declined, but the documents contain the answer.",
    };
  }
  const cited = answer.citations.some(
    (c) =>
      c.documentSlug === expect.documentSlug && c.sectionId === expect.sectionId
  );
  const contains = answer.answer.join(" ").includes(expect.contains);
  const passed = cited && contains;
  return {
    question,
    answer,
    passed,
    detail: passed
      ? `Cited ${expect.documentSlug} / ${expect.sectionId} and quoted the expected text.`
      : !cited
        ? `Expected a citation to ${expect.documentSlug} / ${expect.sectionId}.`
        : `Answer did not contain "${expect.contains}".`,
  };
}

export async function runEvaluation(
  provider: KnowledgeProvider,
  questions: EvalQuestion[]
): Promise<EvalResult[]> {
  const results: EvalResult[] = [];
  for (const question of questions) {
    results.push(judge(question, await provider.answer(question.question)));
  }
  return results;
}
