export type DocumentCategory =
  | "Company Policies"
  | "Contractor Onboarding"
  | "IT Help"
  | "Operational Procedures";

export type DocumentSection = {
  id: string;
  heading: string;
  /** One string per paragraph. Sentences are the unit of answer extraction. */
  paragraphs: string[];
};

export type KnowledgeDocument = {
  slug: string;
  title: string;
  category: DocumentCategory;
  /** ISO date (YYYY-MM-DD). */
  updated: string;
  owner: string;
  summary: string;
  sections: DocumentSection[];
};

export type Citation = {
  documentSlug: string;
  documentTitle: string;
  sectionId: string;
  sectionHeading: string;
  /** Sentences quoted verbatim from the section. */
  excerpt: string[];
  /** Relative strength of this match, 0 to 1 (top citation = 1). */
  relevance: number;
};

export type KnowledgeAnswer =
  | {
      status: "answered";
      question: string;
      /** Verbatim sentences extracted from the best-matching section. */
      answer: string[];
      citations: Citation[];
      /** Share of the question's weighted terms found in the top section. */
      coverage: number;
    }
  | {
      status: "insufficient-evidence";
      question: string;
      reason: string;
      /** Terms in the question that no approved document mentions. */
      unmatchedTerms: string[];
      coverage: number;
    };

/**
 * Seam for swapping in a genuine inference provider later. Anything that
 * returns a KnowledgeAnswer with verifiable citations can replace the
 * deterministic retrieval provider without UI changes.
 */
export interface KnowledgeProvider {
  id: string;
  label: string;
  kind: "deterministic-retrieval" | "generative-ai";
  description: string;
  answer(question: string): Promise<KnowledgeAnswer>;
}

export type EvalQuestion = {
  id: string;
  question: string;
  expect:
    | {
        kind: "answered";
        documentSlug: string;
        sectionId: string;
        contains: string;
      }
    | { kind: "insufficient-evidence" };
};
