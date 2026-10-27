# TD Services — AI Business Intranet (Proof of Concept)

A self-contained demonstration of an AI-assisted business intranet, built to
support consulting conversations with small-business prospects.

**Status: proof of concept. Not production-ready. Not deployed.**

## Run it

```bash
npm run dev          # then open http://localhost:3000/demo/ai-intranet
npm test             # retrieval, citation and unsupported-question tests
npm run lint
npx tsc --noEmit
npm run build
```

Routes:

| Route                                  | Purpose                                      |
| -------------------------------------- | -------------------------------------------- |
| `/demo/ai-intranet`                    | Dashboard: announcements, links, demo vs prod |
| `/demo/ai-intranet/library`            | Browse and filter documents                  |
| `/demo/ai-intranet/library/[slug]`     | Read a document (sections are linkable)      |
| `/demo/ai-intranet/assistant`          | Ask questions; run the evaluation set        |

## What it is

- Seven **synthetic** documents for a fictional company, "Northbridge
  Supplies", in four categories (policies, contractor onboarding, IT help,
  operational procedures). No real people, customers or contractors.
- An assistant that answers **only** from those documents, quotes the source
  sentences verbatim, and links to the cited section.
- An explicit "not enough evidence" response for unsupported questions.
- 11 repeatable evaluation questions (8 supported, 3 unsupported), runnable in
  the UI and in `npm test`.

## Is it generative AI? No.

The assistant uses **deterministic keyword retrieval** (`lib/ai-intranet/retrieval.ts`):
stemming, TF-IDF-style weighting, section ranking, and verbatim sentence
extraction. No model, API key or network call is involved. The UI labels this
on the assistant page.

Limitations:

- Matches words, not meaning: no synonyms, paraphrase or multi-section reasoning.
- Answers are quoted sentences, not composed prose.
- The "not enough evidence" decision is a coverage threshold
  (`COVERAGE_THRESHOLD`, 60% of weighted question terms), tuned on the
  evaluation set. It can be wrong in both directions on unseen questions.
- Tiny corpus: 7 documents, 24 sections.

## Architecture

```
lib/ai-intranet/
  types.ts            Document, Citation, KnowledgeAnswer, KnowledgeProvider
  documents.ts        Synthetic content (the only data source)
  retrieval.ts        Deterministic provider implementing KnowledgeProvider
  evaluate.ts         Judge answers against expectations
  eval-questions.ts   The 11 repeatable questions
  retrieval.test.ts   node:test suite
components/ai-intranet/  IntranetNav, LibraryBrowser, Assistant, EvalPanel
app/demo/ai-intranet/    Layout (POC banner, noindex) and pages
```

Data flow: question → `KnowledgeProvider.answer()` (runs in the browser) →
`KnowledgeAnswer` (`answered` with citations, or `insufficient-evidence`) → UI.
The documents are bundled into the client JavaScript; there is no server call,
database or external service.

**Swapping in real AI:** implement `KnowledgeProvider` with a generative
backend and return the same `KnowledgeAnswer` shape. The UI and evaluation
harness need no changes. Validate that every citation points at a real section
(the test suite already does this for the current provider).

## Security position

- **No authentication.** The route is public if deployed. It is labelled as a
  demonstration and contains no sensitive data. No login screen was invented.
- Marked `noindex, nofollow`; not in the sitemap; not linked from existing
  pages. (`robots.txt` was not changed, so this is not access control.)
- No secrets, environment variables or credentials. Existing CSP and security
  headers are untouched; the POC makes no cross-origin requests.
- Production security has **not** been assessed or validated.

## Changes outside the new feature

- `package.json`: added a `test` script (no dependencies added).
- `tsconfig.json`: added `allowImportingTsExtensions` so tests can run under
  Node's built-in TypeScript support with `node --test`.
- `package.json` and `package-lock.json`: security dependency update, listed
  under "Security dependency update" below. This is not part of the feature.

## Path to production (rough estimate)

| Work                                                        | Effort      |
| ----------------------------------------------------------- | ----------- |
| Real authentication, roles, per-document permissions        | 3–5 days    |
| Document ingestion, storage, versioning (needs a database)  | 4–6 days    |
| Generative provider with grounding, citation validation     | 3–5 days    |
| Evaluation on the client's real questions, tuning           | 2–3 days    |
| Audit logging, privacy review, security testing, hosting    | 3–5 days    |
| **Total**                                                   | **~3–5 weeks** |

Estimates assume one engineer and a client with documents ready to ingest.

## Decisions for Glen

1. Which provider (and budget) for a real AI version, and whether client data
   may leave Australia.
2. Whether to link the demo from the main site, or keep it URL-only for
   sales conversations.
3. Whether to add `/demo/` to `robots.txt` (touches an existing file).
4. Whether the `tsconfig.json` flag and `test` script are acceptable.
5. Whether and when to merge the security update (`ce3c9bf`) into `main`.
6. How access to any hosted copy will be restricted (not yet designed).

## Security dependency update

Next.js 16.4.0 was affected by three published advisories: GHSA-2464-fhr4-w9xw
(critical), GHSA-673q-mjm6-r5xr (critical) and GHSA-p3m5-59mp-jv5r (high),
all patched in 16.4.1. A separate advisory, GHSA-mrhx-c7xc-m3w5, affected
`zod` below 4.6.6. `zod` is a dev-tooling dependency, reached through
`eslint-config-next`.

This working tree uses the patched versions:

| Package              | Version |
| -------------------- | ------- |
| `next`               | 16.4.1  |
| `eslint-config-next` | 16.4.1  |
| `zod` (transitive)   | 4.6.7   |

The same remediation exists as commit `ce3c9bf` on the branch
`fix/nextjs-security-advisories` (a separate worktree). That commit is **not
merged into `main`**, so `main` still pins Next.js 16.4.0. The change here
duplicates its `package.json` version lines and `package-lock.json` diff.

After the update: lint, the 10 POC tests, the type-check, the production build
and `npm audit` (0 vulnerabilities) passed on this working tree. The first
build run before the update was interrupted by an upgrade prompt, which is why
it was recorded as unverified at the time.

## Current status and limits

- Local use only. Not approved for deployment or public access.
- Deterministic keyword retrieval over synthetic documents, not generative AI.
- No authentication. Hosting, DNS and access control have not been decided, and
  none of the hosting facts have been verified.
