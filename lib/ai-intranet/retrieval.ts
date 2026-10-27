import { documents as defaultDocuments } from "./documents.ts";
import type {
  Citation,
  KnowledgeAnswer,
  KnowledgeDocument,
  KnowledgeProvider,
} from "./types.ts";

/**
 * Deterministic, lexical retrieval over the synthetic documents.
 *
 * This is NOT generative AI. It stems and weights words (TF-IDF style),
 * ranks document sections, and returns sentences copied verbatim from the
 * best section. It cannot paraphrase, reason across sections, or understand
 * synonyms. It is a stand-in behind the KnowledgeProvider interface.
 */

/** Minimum share of the question's weighted terms a section must contain. */
export const COVERAGE_THRESHOLD = 0.6;
/** A second citation must score at least this fraction of the best one. */
const SECONDARY_SCORE_RATIO = 0.6;
const MAX_ANSWER_SENTENCES = 2;

const STOPWORDS = new Set(
  (
    "a about an and any are as at be been being but by can could did do does " +
    "for from get got had has have how i if in into is it its me my of on or " +
    "our please should so than that the their them then there these they this " +
    "to up us was we were what when where which who why will with would you " +
    "your tell need needs want many much long policy procedure company " +
    "staff employee employees"
  ).split(" ")
);

export function stem(word: string): string {
  if (word.length > 4 && word.endsWith("ies")) return word.slice(0, -3) + "y";
  if (word.length > 5 && word.endsWith("ing")) return word.slice(0, -3);
  if (word.length > 4 && word.endsWith("ed")) return word.slice(0, -2);
  if (word.length > 4 && /(?:s|x|z|ch|sh)es$/.test(word))
    return word.slice(0, -2);
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss"))
    return word.slice(0, -1);
  return word;
}

export function tokenise(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/['’]s\b/g, "")
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 1 && !STOPWORDS.has(word))
    .map(stem);
}

type IndexedSection = {
  document: KnowledgeDocument;
  sectionIndex: number;
  /** stemmed term -> weighted frequency (heading and title count more). */
  weights: Map<string, number>;
};

function buildIndex(docs: KnowledgeDocument[]): IndexedSection[] {
  const indexed: IndexedSection[] = [];
  for (const document of docs) {
    document.sections.forEach((section, sectionIndex) => {
      const weights = new Map<string, number>();
      const add = (text: string, weight: number) => {
        for (const term of tokenise(text)) {
          weights.set(term, (weights.get(term) ?? 0) + weight);
        }
      };
      add(document.title, 0.5);
      add(section.heading, 3);
      for (const paragraph of section.paragraphs) add(paragraph, 1);
      indexed.push({ document, sectionIndex, weights });
    });
  }
  return indexed;
}

function splitSentences(paragraph: string): string[] {
  return (
    paragraph.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g)?.map((s) => s.trim()) ??
    []
  );
}

export function createRetrievalProvider(
  docs: KnowledgeDocument[] = defaultDocuments
): KnowledgeProvider {
  const index = buildIndex(docs);
  const sectionCount = index.length;
  const docFrequency = new Map<string, number>();
  for (const { weights } of index) {
    for (const term of weights.keys()) {
      docFrequency.set(term, (docFrequency.get(term) ?? 0) + 1);
    }
  }
  const idf = (term: string): number => {
    const df = docFrequency.get(term) ?? 0;
    // A term no document mentions is treated as maximally informative, so an
    // unknown word in the question lowers coverage instead of being ignored.
    return Math.log(1 + sectionCount / Math.max(df, 1));
  };

  function answer(question: string): KnowledgeAnswer {
    const trimmed = question.trim();
    const terms = [...new Set(tokenise(trimmed))];
    if (terms.length === 0) {
      return {
        status: "insufficient-evidence",
        question: trimmed,
        reason:
          "The question did not contain any searchable terms. Try asking about a specific policy or procedure.",
        unmatchedTerms: [],
        coverage: 0,
      };
    }

    const totalWeight = terms.reduce((sum, term) => sum + idf(term), 0);
    const scored = index
      .map((entry) => {
        let score = 0;
        let matchedWeight = 0;
        for (const term of terms) {
          const frequency = entry.weights.get(term);
          if (!frequency) continue;
          score += idf(term) * (1 + Math.log(frequency));
          matchedWeight += idf(term);
        }
        return { entry, score, coverage: matchedWeight / totalWeight };
      })
      .filter((candidate) => candidate.score > 0)
      .sort((a, b) => b.score - a.score);

    const best = scored[0];
    if (!best || best.coverage < COVERAGE_THRESHOLD) {
      const unmatchedTerms = terms.filter((term) => !docFrequency.has(term));
      return {
        status: "insufficient-evidence",
        question: trimmed,
        reason:
          "The approved documents do not contain enough information to answer this question. " +
          "Nothing has been guessed. Please check with the relevant team.",
        unmatchedTerms,
        coverage: best?.coverage ?? 0,
      };
    }

    const citations: Citation[] = scored
      .filter(
        (candidate) =>
          candidate.coverage >= COVERAGE_THRESHOLD &&
          candidate.score >= best.score * SECONDARY_SCORE_RATIO
      )
      .slice(0, 2)
      .map((candidate) => {
        const { document, sectionIndex } = candidate.entry;
        const section = document.sections[sectionIndex];
        return {
          documentSlug: document.slug,
          documentTitle: document.title,
          sectionId: section.id,
          sectionHeading: section.heading,
          excerpt: pickSentences(section.paragraphs, terms),
          relevance: candidate.score / best.score,
        };
      });

    return {
      status: "answered",
      question: trimmed,
      answer: citations[0].excerpt,
      citations,
      coverage: best.coverage,
    };
  }

  return {
    id: "deterministic-retrieval",
    label: "Deterministic document retrieval",
    kind: "deterministic-retrieval",
    description:
      "Keyword retrieval over the synthetic documents. Answers are sentences copied from the best-matching section. No generative AI model is used.",
    answer: async (question) => answer(question),
  };
}

/** Pick the sentences that share the most question terms, in document order. */
function pickSentences(paragraphs: string[], terms: string[]): string[] {
  const sentences = paragraphs.flatMap(splitSentences);
  const ranked = sentences
    .map((sentence, position) => {
      const sentenceTerms = new Set(tokenise(sentence));
      const hits = terms.filter((term) => sentenceTerms.has(term)).length;
      return { sentence, position, hits };
    })
    .sort((a, b) => b.hits - a.hits || a.position - b.position);

  const chosen = ranked
    .filter((r) => r.hits > 0)
    .slice(0, MAX_ANSWER_SENTENCES);
  const fallback = chosen.length > 0 ? chosen : ranked.slice(0, 1);
  return fallback
    .sort((a, b) => a.position - b.position)
    .map((r) => r.sentence);
}

export const retrievalProvider = createRetrievalProvider();
