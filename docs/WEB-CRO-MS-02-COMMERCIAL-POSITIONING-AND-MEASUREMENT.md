# WEB-CRO-MS-02 — Commercial Positioning and Enquiry Measurement

- **Date:** 2026-10-17.
- **Type:** Decision document only. No code, analytics, hosting, deployment, commit or push. This file is the only change.
- **Baseline:** `docs/WEB-CRO-MS-01-CURRENT-STATE-AUDIT.md`, plus committed production code at `b1bae40` (= `main` = `origin/main` at last fetch).
- **Prior decisions honoured:** `docs/MS-019-HOMEPAGE-POSITIONING.md` §0, D1–D12 (2026-09-29). Where this document proposes changing one of them, it says so and leaves the decision to Glen.
- **External sources:** none used. Every market statement here is an **inference** or a **hypothesis**, not external evidence. The only technical facts relied on are site behaviour verified in MS-01, plus general, well-known browser behaviour (a `mailto:` link hands off to the visitor's mail app, and the website gets no signal of what happens next).

Labels: **[V]** verified (MS-01 or this sprint), **[D]** an existing Glen decision, **[I]** inference, **[H]** hypothesis to test, **[U]** unknown.

---

## 1. Executive recommendation

1. **Measure before changing.** Start a zero-cost enquiry baseline now: a manual enquiry log, using the existing pre-filled email subject. Add no analytics service yet. [I]
2. **Test one primary audience, without dropping D3.** Lead with small organisations that have no IT staff, and keep the broader "any technology problem" door open. This is a proposal to refine D3, so Glen decides. [H]
3. **Run three cheap, low-risk experiments first:**
   - a visible enquiry CTA on the first mobile screen;
   - a positioning line naming who the site is for;
   - stronger evidence in the Epping case study.
4. **Don't build an AI-builder prototype or migrate platforms now.** No measured problem exists that one would solve better than the current Next.js site (MS-01 §7, §9). [I]

## 2. Audit findings relevant to commercial outcomes (from MS-01)

| Finding | Label | Commercial relevance |
|---|---|---|
| The only enquiry route is `mailto:glen@thedsouza.com`, subject "Technology enquiry", with a body template | V, D4 | Simple and private, but visitors without a configured mail app may stall [H]. It can't be measured on the site at all |
| No analytics or cookies seen browser-side; no conversion data exists anywhere known | V / U | Today nobody can tell whether the site produces enquiries |
| The audience is stated as "your business", i.e. broad | V, D3 | Matches D3. May reduce relevance for any particular buyer [H] |
| The mobile hero CTA starts at 790px of an 812px screen | V | A first-time mobile visitor sees no enquiry action without scrolling |
| 5 case studies; 1 client engagement (Epping), qualitative only, with no dates, numbers or quote | V | Client-facing proof is the weakest part of the site |
| No headshot, imagery or LinkedIn link | V | Personal trust signals are absent [H that this matters] |
| Project pages lack site navigation in production (PR #10 pending) | V | Readers who finish a case study have only "Back" and the email button |
| GHDC says "Phase 0"; PageSpeed scores are dated 9 Sep | V, D7 | Accurate to the decisions made then. Whether they're still current needs Glen to confirm [U] |
| No pricing published | V, D5 | Normal for consulting [I]. May filter out some early-stage enquirers either way [H] |

## 3. Target-client hypotheses

None of these is validated, and no client results, demand or revenue are assumed.

### H1: Small organisations with no IT staff (micro-businesses, clubs, associations, not-for-profits)
- **Context:** fewer than about 20 people. Technology is handled by a founder, office manager or volunteer.
- **Problem they may pay to solve:** unreliable email or domains, M365 accounts and access in a mess, an outdated website, unclear ownership of their technology, and no documentation.
- **Credible offer and outcome:** a Technology Health Check giving a prioritised plan, then a Focused Build Sprint (e.g. email/domain clean-up, a secured M365, a rebuilt website).
- **Evidence present:** the Epping Tennis Club engagement (email migration, domains, SPF/DKIM/DMARC review, account access) [V]; the Services copy "Workplace technology that just works" [V]; the self-hosted mail POC, which shows email depth [V].
- **Evidence missing:** a second client, a quote or testimonial (with permission), dates, a before/after outcome, and any indication of price.
- **Likely friction:** small budgets and price sensitivity [I]. Volunteer-run groups decide slowly [I]. Trust usually comes from referrals rather than search [I].
- **Major assumptions:** that these buyers will pay for a Health Check, and that Glen wants this work.
- **Low-cost validation:** Glen contacts 5–10 organisations from his existing network or local associations, offering the Health Check. Record replies, conversations and paid conversions in the enquiry log. Cost: time only.

### H2: Owner-led small businesses needing a website or a simple internal tool
- **Context:** businesses of about 5–50 staff with an outdated site, manual processes, or a tool built on spreadsheets.
- **Problem:** a website that doesn't produce enquiries or can't be maintained, or repetitive admin that could be automated.
- **Offer:** a website rebuild or internal tool delivered in stages, with hosting and ownership the client controls (Services 02 and 03).
- **Evidence present:** thedsouza.com itself, a well-documented case study [V].
- **Evidence missing:** a client website or tool. Per D12, no other project evidence exists in the repo [D].
- **Friction:** a crowded market with agencies, freelancers and DIY website builders [I]. With one self-built example, it's hard to stand out [I].
- **Validation:** one paid or reduced-rate pilot for a known business, written up as a case study with permission. Track interest via the enquiry log.

### H3: Small and mid-size businesses wanting AI-enabled automation
- **Context:** businesses curious about AI that have repetitive, document- or email-heavy work.
- **Problem:** time lost to manual triage, data entry and reporting.
- **Offer:** a bounded discovery that names one workflow and tests whether automation, with or without AI, measurably helps.
- **Evidence present:** "AI-assisted development" and AI-assisted operations language, and the GHDC focus [V]. There is **no client-facing AI deliverable in the portfolio** [V].
- **Evidence missing:** any working, measured example.
- **Friction:** demand is uncertain [U]. There's a high risk of over-claiming, and buyers struggle to judge quality [I].
- **Validation:** don't lead with this. Offer it inside H1/H2 conversations and record how often prospects raise it.

### H4: Contract engineering for IT teams or managed service providers (end-user computing, Intune/Autopilot, virtualisation)
- **Context:** IT managers or MSPs who need short-term, hands-on engineering capacity.
- **Problem:** project backlogs, device-deployment rollouts and infrastructure work without enough staff.
- **Offer:** fixed-term or project-based engineering.
- **Evidence present:** the 2003–2025 career stages, including EUC Engineer work with Intune, Autopilot, Entra ID, vCenter and PowerCLI [V]; GVI/GHDC [V].
- **Evidence missing:** named outcomes from enterprise roles (they may be confidential).
- **Friction:** these buyers usually hire through networks, LinkedIn or recruiters, so the website is a supporting reference rather than the place they find Glen [I]. This may be the quickest path to revenue but the least website-driven [H].
- **Validation:** count conversations from existing professional networks. The website's job here is to look credible when a buyer checks it.

## 4. Value proposition (proposal only, not approved copy)

**Primary (based on H1, kept compatible with D2 and D3):**
- **For:** small organisations without an IT department, while still welcoming any legitimate technology problem.
- **Problem:** email, accounts, websites and systems that are unreliable, undocumented or that nobody owns.
- **Offer:** a consultant who gets hands-on and builds the fix (D2), starting with a Technology Health Check and delivering in reviewable stages.
- **Why trust it:** 22+ years of IT, the Epping engagement, honest scoping, documented handover, and "the person you talk to does the work".
- **Next action:** email a short description of the problem, with a reply within 48 hours (D6).
- **Illustrative wording:** *"Practical technology help for small organisations without an IT department — I find the real problem, fix it and leave it documented."* This is a placeholder for review.

**Alternative A (H4):** lead with enterprise endpoint and infrastructure engineering for IT teams; small-organisation work becomes secondary. Choose this if Glen's revenue priority is contract engineering.

**Alternative B (H2):** lead with websites and simple business tools for owner-led businesses. Choose this only once at least one client website case study exists.

## 5. Enquiry measurement comparison

What each stage can and can't tell you:

| Stage | Meaning | Observable today? |
|---|---|---|
| S1. CTA click | A visitor clicked an email button | No [V] |
| S2. Email composition | The mail app opened and the visitor started writing | **Can't be measured by the site under any method:** the browser hands off to the mail app [I] |
| S3. Enquiry received | An email arrives at glen@thedsouza.com | Yes, in the mailbox [V] |
| S4. Qualified lead | It fits a target hypothesis and is workable | Glen's judgement, recorded manually |
| S5. Client won | Paid engagement agreed | Glen's records |

Methods:

| Method | Measures | Can't prove | Effort / cost | Privacy | External service? | Zero cost now? | How to check it works |
|---|---|---|---|---|---|---|---|
| **M0. Mailbox count** of the "Technology enquiry" subject | S3 | Which page or button prompted it; enquiries where the visitor changed the subject | None / $0 | Uses mail Glen already receives; nothing new collected | No (existing mailbox) | **Yes** | Send a test email from the site; confirm it's found and counted |
| **M1. Manual enquiry log** (date, source as stated by the enquirer, hypothesis H1–H4, qualified Y/N, outcome); a short "How did you find me?" question in the reply | S3–S5 | Anything the enquirer doesn't say | Minutes per enquiry / $0 | Store the minimum (no copied message bodies); keep it in-house, e.g. on GVI or Forgejo, not in a SaaS spreadsheet | No | **Yes** | Weekly check: mailbox count equals log count |
| **M2. Subject-tag attribution:** each CTA pre-fills a slightly different subject (e.g. "Technology enquiry – home" or "– case study") | S3 by originating CTA | Clicks that never became emails | Small code change in `data/contact.ts` and the CTAs (future sprint) / $0 | No tracking; the visitor sees and can edit the subject | No | Yes (needs a code change later) | Click each CTA in a test; check each subject |
| **M3. Hosting-platform analytics** (Vercel's own product) | Page views; possibly custom click events | S3–S5 | Small / plan-dependent; **pricing, limits and data handling not verified in this sprint** | Vercel already hosts the site, but analytics sends visitor data to it | **Yes** | Unknown | Needs Glen's decision under the in-house rule before evaluation |
| **M4. Self-hosted analytics on GVI** (privacy-focused, open-source) | Page views, S1 clicks | S2–S5 | Medium: a public endpoint through the GDC Gateway, a CSP `connect-src` change, and ongoing upkeep / $0 licence | In-house; can be configured without cookies | No | Yes, but it costs operator time | Test events from a known browser; compare against M0 |
| **M5. Server-side counter route** (the CTA goes through `/go/email` on the site, which counts and redirects) | S1 | S2–S5; it may break `mailto:` behaviour on some devices [U] | Medium; code change | Count only, no identifiers | Depends where counts are stored | Partly | Device testing needed; **not recommended** |
| **M6. Search-engine webmaster tools** | Search impressions and clicks | Enquiries | Small; needs an account with the search provider | External provider | **Yes** | Yes ($0) | Needs Glen's decision under the in-house rule |

**Recommendation:** start M0 and M1 now, at no cost and with no code. Add M2 in a later approved code sprint, because it gives per-CTA attribution without tracking anyone. Reconsider M3, M4 or M6 only if enquiry volume makes per-page data worth having, and after a decision under the in-house rule. [I]

## 6. Baseline and success measurement

- **Primary business outcome:** qualified leads (S4) and clients won (S5) per period, by target hypothesis.
- **Leading indicators:** enquiries received (S3), and per-CTA enquiries once M2 exists. Clicks (S1) are only available with M3/M4/M5.
- **Baseline:** **no traffic, enquiry or conversion data exists today** [V/U]. No baseline values or targets are set here.
- **Baseline period:** at least 4 weeks of M0/M1 before any homepage change (MS-01 §12). Choose the evaluation window after the baseline shows actual volume. If enquiries are rare, judge on longer windows and qualitative evidence rather than percentages. [I]
- **Rules to avoid false success:**
  1. Never claim success from clicks (S1) alone. A click doesn't show composition (S2) or receipt (S3).
  2. Change one thing at a time, and record the change date in the log.
  3. Note outside causes (referrals, LinkedIn posts, seasonality) next to the counts.
  4. With low volume, treat results as directional, not statistically proven. [I]

## 7. Prioritised experiments

Value = expected commercial value. Confidence = strength of the evidence that it matters.

| Rank | Experiment | Value | Confidence | Effort | Cost | Risk | Why here |
|---|---|---|---|---|---|---|---|
| 1 | **Enquiry baseline (M0 + M1)** | High: needed before anything else can be judged | High | Low | $0 | Very low | Measurement prerequisite, no code |
| 2 | **Mobile CTA on the first screen** | Medium | Medium (verified 790px measurement) | Low | $0 | Low | Small, reversible layout change |
| 3 | **Positioning line + service hierarchy aligned with the chosen hypothesis** | Medium–high | Low–medium | Low–medium | $0 | Medium (affects D3 wording) | Needs Glen's audience decision |
| 4 | **Stronger Epping evidence** (dates, permission-based quote, before/after) | Medium–high | Medium | Low | $0 | Low (needs the club's consent) | Strengthens the only client proof |
| 5 | **Professional headshot + LinkedIn link** | Medium | Low–medium | Low | $0 if an existing photo is used | Low | Trust signal; Glen's preference |
| 6 | **Second enquiry option:** a copy-email button now, a self-hosted form later | Low–medium | Low | Low (copy) / medium (form) | $0 | Low / medium (a form adds spam handling and data storage) | Only if M1 shows people asking for alternatives, or friction appears |
| 7 | **Project-page navigation consistency** | Medium | High (verified) | Already built (PR #10) | $0 | Low | **Keep separate:** belongs to the WEB-GS release workstream |
| 8 | **AI-builder prototype** | Unknown | Low | Medium | Possibly paid | Medium | Only with a specific question (e.g. "does a redesigned mobile hero raise M2-tagged enquiries?") and evaluation criteria |

**Why not an AI-builder rebuild:**
- MS-01 found no material technical problem: headers, structure, contrast and SEO basics are sound [V].
- The gaps are content, proof and measurement, which a different builder doesn't fix [I].
- A rebuild adds migration risk, possible subscription cost and third-party hosting (against the in-house rule), and loses the documented, AI-friendly codebase [I].
- It becomes justified only if a measured problem appears that the current stack can't solve cheaply.

## 8. Costs, privacy and risks

- **Cost:** recommendations 1–5 cost $0 beyond Glen's time. M3 and M6 may involve external accounts, and M3 may involve plan costs (unverified). An AI builder may involve subscriptions. None are approved.
- **Privacy:**
  - M0/M1 handle email Glen already receives. Minimise what's logged (date, stated source, category, outcome), and keep the log in-house.
  - Nothing is collected about visitors.
  - Forms (exp. 6) would add stored personal data, plus a privacy notice and spam controls.
- **Risks:**
  - narrowing the audience could deter other enquiries (the reason for D3) [H];
  - over-claiming AI capability [I];
  - low volume making results inconclusive [I];
  - measurement work distracting from outreach that may matter more for H1 and H4 [I].

## 9. Decisions required from Glen

1. **Audience:** keep D3 (broad), adopt the primary H1-led hypothesis while keeping the broad door, or pick Alternative A or B.
2. **Revenue priority:** small-organisation consulting (H1/H2) or contract engineering (H4).
3. **Start M0 + M1 now?** And where the in-house enquiry log should live.
4. **Allowed for later evaluation?** Vercel analytics (M3) or search-engine webmaster tools (M6), given the in-house rule.
5. **Permission to approach Epping Tennis Club** for dates, an outcome and a quote.
6. **Headshot and LinkedIn link:** yes or no.
7. **Pricing (D5):** keep it unpublished, or add a "Health Check from $X" indicator later.
8. **Currency of the GHDC page (D7):** confirm whether "Phase 0" still reflects reality.

## 10. Recommended next micro-sprint

**WEB-CRO-MS-03: decision record and measurement start (no code).**
- **Objective:** record Glen's answers to §9 and start the M0/M1 baseline.
- **Done when:**
  1. Glen's decisions for §9 items 1–4 are recorded in a short decision record in `docs/`;
  2. the enquiry log exists in the agreed in-house location, with fields date, stated source, hypothesis, qualified, outcome;
  3. a test enquiry has been sent from the live site and logged;
  4. a baseline start date is set and the review date is at least 4 weeks later;
  5. no website code has changed.

## 11. Evidence gaps and confidence

| Gap | Effect | Confidence |
|---|---|---|
| No traffic, enquiry or conversion data | No baseline or targets possible | — |
| No external market research in this sprint | Every market and buyer statement is inference | H1–H4: **low** until validated |
| Vercel analytics pricing, limits and data handling not checked | M3 can't be costed | **Unknown** |
| `mailto:` friction for webmail users is untested | Exp. 6 priority uncertain | **Low** |
| Glen's revenue priority and capacity unknown | Primary hypothesis choice | — |
| Epping's consent for a quote unknown | Exp. 4 feasibility | — |

## 12. Change control

- **Created:** this file only, `docs/WEB-CRO-MS-02-COMMERCIAL-POSITIONING-AND-MEASUREMENT.md`. Untracked, not committed.
- **Untouched:** all website code, the uncommitted GHDC page edit, `docs/WEB-CRO-MS-01-CURRENT-STATE-AUDIT.md`, branches and PR #10.
- **No other changes:** no analytics configured, no data collected or sent, no hosting, deployment, external-system or billing changes. No web sources were consulted.
