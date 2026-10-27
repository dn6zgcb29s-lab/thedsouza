import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { documents } from "./documents.ts";
import { evalQuestions } from "./eval-questions.ts";
import { runEvaluation } from "./evaluate.ts";
import {
  createRetrievalProvider,
  retrievalProvider,
  tokenise,
} from "./retrieval.ts";

describe("synthetic documents", () => {
  it("has unique slugs and section ids, and valid dates", () => {
    const slugs = documents.map((d) => d.slug);
    assert.equal(new Set(slugs).size, slugs.length);
    for (const doc of documents) {
      const ids = doc.sections.map((s) => s.id);
      assert.equal(new Set(ids).size, ids.length, doc.slug);
      assert.match(doc.updated, /^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

describe("tokenise", () => {
  it("drops stopwords, possessives and stems plurals", () => {
    assert.deepEqual(tokenise("What are the CEO's invoices?"), [
      "ceo",
      "invoice",
    ]);
  });
});

describe("retrieval provider", () => {
  it("answers a supported question with a verifiable citation", async () => {
    const result = await retrievalProvider.answer(
      "When do I need a purchase order?"
    );
    assert.equal(result.status, "answered");
    if (result.status !== "answered") return;
    const top = result.citations[0];
    assert.equal(top.documentSlug, "expenses-and-purchasing");
    assert.equal(top.sectionId, "purchase-orders");
    assert.match(result.answer.join(" "), /over \$500/);
  });

  it("quotes only text that exists verbatim in the cited section", async () => {
    for (const { question } of evalQuestions) {
      const result = await retrievalProvider.answer(question);
      if (result.status !== "answered") continue;
      for (const citation of result.citations) {
        const doc = documents.find((d) => d.slug === citation.documentSlug);
        const section = doc?.sections.find((s) => s.id === citation.sectionId);
        assert.ok(section, `${question}: citation points at a real section`);
        assert.equal(section.heading, citation.sectionHeading);
        assert.equal(doc?.title, citation.documentTitle);
        const sectionText = section.paragraphs.join(" ");
        for (const sentence of citation.excerpt) {
          assert.ok(
            sectionText.includes(sentence),
            `${question}: "${sentence}"`
          );
        }
      }
    }
  });

  it("declines unsupported questions explicitly", async () => {
    for (const question of [
      "What is the CEO's salary?",
      "What is our parental leave entitlement?",
      "Can I bring my dog to the office?",
      "What is the share price today?",
    ]) {
      const result = await retrievalProvider.answer(question);
      assert.equal(result.status, "insufficient-evidence", question);
    }
  });

  it("declines empty and stopword-only input", async () => {
    for (const question of ["", "   ", "what is the?"]) {
      const result = await retrievalProvider.answer(question);
      assert.equal(
        result.status,
        "insufficient-evidence",
        JSON.stringify(question)
      );
    }
  });

  it("does not answer from a corpus that lacks the topic", async () => {
    const withoutIt = createRetrievalProvider(
      documents.filter((d) => d.slug !== "it-service-desk-guide")
    );
    const result = await withoutIt.answer("How do I reset my password?");
    assert.equal(result.status, "insufficient-evidence");
  });

  it("is deterministic", async () => {
    const a = await retrievalProvider.answer("How do I reset my password?");
    const b = await retrievalProvider.answer("How do I reset my password?");
    assert.deepEqual(a, b);
  });

  it("is labelled as deterministic retrieval, not generative AI", () => {
    assert.equal(retrievalProvider.kind, "deterministic-retrieval");
  });
});

describe("evaluation set", () => {
  it("passes every repeatable evaluation question", async () => {
    const results = await runEvaluation(retrievalProvider, evalQuestions);
    const failures = results.filter((r) => !r.passed);
    assert.deepEqual(
      failures.map((f) => `${f.question.id}: ${f.detail}`),
      []
    );
  });
});
