# MS-018 — Consulting Positioning & Conversion Discovery

- **Date:** 2026-09-29
- **Type:** Discovery and proposal only. No application source was changed, no branch was created, P4/P5 were not merged, nothing was pushed.
- **Source inspected:** `dev-gvi:~/projects/thedsouza.com`, branch `feat/ms2-conversion-cleanup` @ `ef267de` (the P2 → P3 → MS2 stack; **not yet on `main`**, which is still `1f75975`, so production does not show this state). P4 (`b206438`) and P5 (`e4dee89`) were read as diffs only.
- **Method:** every homepage component, `data/`, all 5 case-study routes, layout metadata, structured data, sitemap/robots and `next.config.ts` were read in full. The production build was then served on GVI `127.0.0.1:3302` and checked in a browser at desktop and 375 px, in light and dark colour schemes. The server was stopped afterwards.

**Convention used below.** **Evidence** = something present in the repository at `ef267de` (file references given). **Recommendation** = a proposal for Glen to accept or reject. Where a point relies on something outside this repository, it is labelled **External**.

---

## 1. Current state

### What the site says, in order

The homepage (`app/page.tsx`) has nine sections, about 10,700 px tall at desktop width. At 375 px wide the case studies do not start until roughly 14,600 px down.

| # | Section | Primary message (Evidence) |
|---|---|---|
| 1 | Hero (`components/Hero.tsx`) | Eyebrow "Glen D'Souza · Technology Engineer". H1 "Practical technology engineering for small businesses and founders." Problem-led sub-copy (computers, email, website, systems). "22+ years of professional IT experience". "Melbourne, Victoria · Remote consulting across Australia". Book-call and Email CTAs. |
| 2 | About (`About.tsx`) | "The person you talk to is the person who does the work": enterprise background brought to small businesses, and he runs his own infrastructure. |
| 3 | Experience (`Experience.tsx`, `data/career.ts`) | Three stages: Enterprise IT Support 2003–2024, End User Computing Engineer 2024–2025, Independent Technology Consulting 2025–present. Six capability bullets. |
| 4 | Services (`Services.tsx`) | Five problem-led service cards with "See it in practice" links. Three engagement models (Health Check, Build Sprint, Project Delivery) with **"$X" price placeholders**. A "Not sure where your project fits?" CTA. |
| 5 | Proof (`Proof.tsx`) | "Evidence, not promises": 22+ years, 5 case studies and four PageSpeed scores for this site (measured 9 Sep 2026), plus four delivery signals. |
| 6 | Delivery (`Delivery.tsx`) | An eight-step internal release process ("micro-sprints", "controlled versioning", "verify production"). |
| 7 | Projects (`Projects.tsx`) | The "Currently building: thebharattalent.com" teaser, **then** five case-study cards in the order GHDC, thedsouza.com, Epping, GVI, Mail server. |
| 8 | Skills (`Skills.tsx`) | Three tag groups: Web & Application, Infrastructure & DevOps, Enterprise & Emerging. |
| 9 | Contact (`Contact.tsx`) | "Discuss Your Project", the free 15-minute fit discussion, the CTA pair, a GitHub link, "Technology consulting delivered through TD Group of Companies Pty Ltd." |

### How a visitor reads it
The site has already moved well beyond a job-seeking portfolio (P2/P3/MS2). The hero and services are client-facing and problem-led.

Three things still make it read partly as a *technical portfolio*:
- **Evidence order.** Evidence sits in the bottom third of the page, and at 375 px the first things shown are a private-product teaser and two self-owned projects (GHDC, then this site).
- **Delivery section voice.** It uses internal engineering-process language.
- **Proof section content.** Its numbers describe the website itself rather than client work.

### Conversion points today
The homepage has six CTA placements (Navbar, Hero, Experience, the Services box, Delivery and Contact), and each case study has one more.
- **Booking** points to `https://cal.com/PLACEHOLDER` (`data/contact.ts`) and is visibly tagged as a placeholder.
- **Email** is `mailto:glen@thedsouza.com?subject=Project%20discussion`, **the only working enquiry path**.
- There is no form, no LinkedIn link and no phone number.

---

## 2. Current strengths (preserve)

| Strength | Evidence | Why keep it |
|---|---|---|
| Problem-led hero copy for non-technical buyers | `Hero.tsx` sub-copy | Speaks in the buyer's terms (email, computers, website), not a technology list. |
| "The person you talk to is the person who does the work" | `About.tsx` H2 | The clearest differentiator a sole practitioner has over an MSP or agency. |
| Honest scoping language | Epping "Scope clarification" and "Proof-of-concept limitation" asides; mail server "not to claim a zero-cost platform"; Contact "tell you honestly whether I am the right person" | Builds trust and matches the no-invented-claims rule. Rare on consulting sites. |
| Service cards linked to case studies | `Services.tsx` `proof` links | Already the right pattern: claim, then evidence. |
| Clear, small-first engagement ladder | `Services.tsx` `engagementModels` | Health Check → Sprint → Project is an easy buying path, once prices are set. |
| Single source for contact/pricing | `data/contact.ts` | Placeholders are resolved in one file. |
| Security-conscious disclosure on infra case studies | GHDC, GVI and mail server "disclosure" asides | Shows professional judgement about what is safe to publish. |
| Technical hygiene | Skip link, focus styles, reduced-motion, progressive-enhancement `FadeIn`, CSP and security headers (`next.config.ts`), canonical URLs, OG/Twitter metadata, sitemap, per-page `CreativeWork` + `BreadcrumbList` JSON-LD | Credibility for technically literate buyers, and a basis for SEO. |
| Mobile basics | 375 px: no horizontal overflow; menu toggle works | Verified in this MS. |

---

## 3. Current gaps

### 3a. Who Glen serves
- **Evidence:** "small businesses and founders", "businesses that don't have an IT department of their own", Melbourne plus remote Australia (`Hero.tsx`, `layout.tsx`).
- **Gap:** there is no qualifying signal beyond size, such as typical team size, sectors or the situations he is good for. The only client case (Epping) is a community club, not a business. A "good fit if…" statement is absent.

### 3b. What Glen offers
- **Gap: five service areas plus three engagement models give eight things to read before any proof.** The five areas span workplace IT, web, automation, infrastructure and troubleshooting. That breadth is true to the evidence, but it reads as "does everything".
- **Gap: evidence mismatches inside Services.**
  - *Workplace technology* promises Microsoft 365 set-up and access tidy-up, but its only proof link, Epping, explicitly says it "should not be interpreted as full administration of the club's Microsoft 365 tenant". The real M365/Intune/Entra evidence is the enterprise career (`data/career.ts`), which is not linked.
  - *Automating repetitive work* has **no proof link**. The only automation evidence in the repository is PowerCLI provisioning in the employer context (`gvi-home-lab/page.tsx`) and *planned* automation in GHDC Phase 4.
- **Gap: role title is inconsistent.** It appears as "Technology Engineer" (Hero eyebrow), "Technology Consultant" (JSON-LD `jobTitle`), "Independent Technology Consulting" (career) and "technical consultant" (thedsouza.com case study).

### 3c. Why engage him
- **Gap: the proof is mostly self-referential.**
  - 3 of the 5 case studies are Glen's own infrastructure (GHDC, GVI, mail server), and 1 is this website.
  - Only one involves a third party (Epping), and it is informal support plus an unlaunched POC.
  - The Proof metrics are this site's own PageSpeed scores, measured 9 Sep 2026, before the P2/P3/MS2 changes, so they are unverified for the current build.
- **Gap: the Experience section shows years, not outcomes.** The enterprise career is the strongest credibility asset, but it is summarised in three sentences. There are no scale indicators, and no employer is named except once in the GVI case study ("NTT DATA").
- **Gap: the Delivery section is written for engineers.** Eight steps of internal release discipline ("controlled versioning", "verify production after propagation") answer a question most small-business buyers don't ask. P5 already addresses this (see §11).

### 3d. What action to take
- **Gap: the booking link is a placeholder,** so the primary CTA cannot go live as-is.
- **Gap: nothing says what happens after the first contact.** There is no response time, no word on what the 15-minute call covers or what follows, and no cost of the first step (prices are "$X").
- **Gap: case-study pages have no site navigation or footer** (verified: no `<nav>`, no `<footer>`). A visitor arriving from search sees only "Back to projects" and the CTA pair, with no path to Services or About.
- **Gap: the email CTA gives no prompt** about what to include, although the Contact copy promises "a short description of the business problem is enough".

### 3e. Accuracy and staleness issues (fix before any positioning work)

| Issue | Evidence | Status |
|---|---|---|
| thedsouza.com case study lists **Framer Motion** as part of the stack | `app/projects/thedsouza-com/page.tsx:54`; `framer-motion` was removed from `package.json` in this stack | Stale claim |
| Mail server case study describes an ongoing "operational proof of concept" | `self-hosted-mail-server/page.tsx` ("Continued operation will be governed…") | **External:** `gdc-infrastructure/docs/mailcow.md` records Mailcow "permanently decommissioned on 2026-09-13". Needs Glen's confirmation (Q4). |
| GHDC status "Phase 0 — Network stabilisation", "Next milestone: NAS" | `home-datacenter/page.tsx` | Written in August; may be stale (Q5) |
| JSON-LD `knowsAbout` includes "AI solutions", "Cybersecurity", "Disaster recovery"; keywords include "AI solutions", "proof of concept development" | `app/layout.tsx` | Broader than the published evidence (disaster recovery is *planned* in GHDC Phase 2) |
| Proof section PageSpeed scores | `Proof.tsx` | Measured before the current stack; must be re-measured or removed before merge |
| GVI "more than ten years of virtualisation work at NTT DATA" vs `career.ts` stages (virtualisation/PowerCLI first appears in the 2024–2025 EUC stage) | `gvi-home-lab/page.tsx:141`, `data/career.ts` | Possibly consistent (virtualisation inside the "Enterprise IT Support" years), but it reads as a contradiction (Q6) |

### 3f. Defects found during this MS
- **Skills section is unreadable in light colour scheme.** `Skills.tsx` sets no text colour on the section, so the H2 inherits `--foreground` (`rgb(23,23,23)`) on `bg-slate-800`. This was verified in the browser with light-scheme emulation. Dark-scheme visitors are unaffected.
- **Status badges break mid-word at 375 px** ("Continuous / ly improved") because of the `overflow-wrap:anywhere` override in `Projects.tsx`. P4 removes this override (see §11).
- **Dead or boilerplate files:** empty `components/Building.tsx`, `Learning.tsx` and `Story.tsx`; unused `FeatureCard.tsx`; create-next-app `public/*.svg`; boilerplate `README.md`. They have no visitor impact, but they are visible to anyone reviewing the repository (and GitHub is linked from the site).
- **Not reproduced:** a blank viewport after an instant programmatic jump to `#projects` in the browser pane. The pane was a hidden document, and sections revealed normally on the next real scroll. Worth one check on a real phone, nothing more.

---

## 4. Positioning options

All three are supported by the repository. None requires inventing experience. They differ in who the site is *for* and which evidence leads.

### Option A — Hands-on technology partner for small businesses without IT staff
*"Your technology person: I set up, fix and look after the computers, email, website and systems a small business depends on."*

- **Built on:** the 22+ years of enterprise support and EUC (Intune, Autopilot, Entra ID, Windows); Epping email/domain migration and deliverability work; the About differentiator. This is closest to the current hero (P2).
- **Buyer:** a 2–20 person business or club with no IT function.
- **Pros:** the largest local market, matches the current copy, and the strongest *third-party* evidence (Epping) sits here.
- **Cons:** it competes directly with MSPs and local IT support on price and availability, and invites expectations of ongoing support and response times. The infrastructure depth (GHDC, mail) becomes secondary. Only one real client case exists, and it is informal.
- **Evidence gaps before publishing stronger claims:** a formalised client engagement (Epping says the arrangement is not yet formalised), any business (not club) example, and M365 evidence that can be cited publicly.

### Option B — Infrastructure and self-hosting engineer for small teams and founders
*"Enterprise-grade infrastructure, sized for a small team: virtualisation, private hosting, secure remote access, mail and domain authentication — designed, documented and recoverable."*

- **Built on:** GHDC, GVI, the mail server (SPF/DKIM/DMARC, TLS, relay), enterprise virtualisation and PowerCLI, the security headers on this site, and the disclosure discipline.
- **Buyer:** a technically aware founder or small team that wants control over hosting, email or infrastructure, or wants to leave an unreliable set-up.
- **Pros:** the deepest and most detailed evidence on the site, and a clearer niche with less direct MSP competition.
- **Cons:** all of that evidence is Glen's own environment. The mail platform is (externally) decommissioned, and GHDC is still largely planned (5 of 8 architecture components "Planned"). The market is narrower and more technical. Self-hosting is a hard sell to non-technical small businesses.
- **Evidence gaps:** an infrastructure engagement for someone else; current, accurate GHDC and mail status; tested backup/recovery (the "Backup and recovery that has actually been tested" deliverable in `Services.tsx` has no published evidence yet).

### Option C — Technical build partner: from idea to working proof of concept to production
*"I turn a business idea or manual process into a working, tested system — starting with a proof of concept you can see before committing to a full build."*

- **Built on:** the Epping merchandise-store POC, thedsouza.com itself (the most fully documented build), the thebharattalent.com build (private), the Health Check → Sprint → Project ladder, the delivery method and human-led AI-assisted workflow (`Delivery.tsx`, thedsouza.com case study), and React/Next/TypeScript/FastAPI/PostgreSQL (`Skills.tsx`).
- **Buyer:** founders and small businesses with an idea, a manual process or an outdated website.
- **Pros:** uses the AI-assisted, staged delivery method as a real differentiator. The honest POC framing (Epping aside) turns "it's only a POC" into the offer itself. It fits "founders" in the current H1.
- **Cons:** only one third-party POC is published, and it was never launched. FastAPI/PostgreSQL appear only as skill tags with no case study. "AI-assisted" can attract or deter buyers depending on audience. It overlaps with web agencies and freelancers.
- **Evidence gaps:** a shipped build for someone other than Glen; a case study for any back-end/data work; whether thebharattalent.com can be shown, and when.

### Trade-off summary

| | A — SMB technology partner | B — Infrastructure engineer | C — Build partner |
|---|---|---|---|
| Strongest evidence | Career + Epping | GHDC, GVI, mail | Epping POC, thedsouza.com, method |
| Third-party proof today | Weak (1 informal) | None | Weak (1 unlaunched POC) |
| Market size / competition | Large / high | Small / low | Medium / medium–high |
| Fit with current copy | High | Medium | Medium–high |
| Rewrite effort | Low | Medium | Medium |

A blend is possible: A as the front door, with B and C as named service lines. That largely describes the current site, and its weakness is the breadth identified in §3b. The choice is Glen's (Q1).

---

## 5. Homepage proposal (information hierarchy only)

**Recommendation:** this hierarchy works for any option; only the wording and emphasis change.

1. **Hero:** who it is for, the problem, one sentence of credibility (22+ years), location, one primary CTA plus email. *(Keep the current structure.)*
2. **"Good fit if…" strip (new, short):** 3–4 situations the chosen positioning serves. Also say who it is *not* for, if Glen wants that.
3. **Services (compressed):** the 3–5 service areas for the chosen option, each card ending in its proof link. Move the engagement models next to the CTA (step 6), not here.
4. **Evidence / case studies (moved up):** featured client-relevant cases first, the rest as "More case studies" (P4 already does this), teaser last.
5. **Credibility:** merge About and Experience into one "Who you'll work with" section: the "person who does the work" message, the career stages and the technical foundation. Keep the Skills tags as a compact sub-block (fix its colour).
6. **How engagements work:** P5's four-step process plus the three engagement models, with real prices or "from" prices.
7. **Contact:** what to send, what happens next, CTAs.

The **Proof metrics section** would be dissolved. The 22+ years goes to the hero and credibility sections, and the case-study count becomes redundant once case studies sit higher. PageSpeed, if kept, moves to the thedsouza.com case study with a fresh date.

The net effect is 9 sections becoming 6–7, with evidence reached after the second scroll instead of the sixth.

---

## 6. Services proposal

The categories are derived only from existing evidence. The names are working names, not final copy.

| Proposed name | Problem it addresses | Evidence already present | Missing before a stronger claim |
|---|---|---|---|
| **Workplace IT set-up and clean-up** | Computers, accounts, email and access set up badly or inherited undocumented | Career: EUC, Intune, Autopilot, Entra ID (`career.ts`); Epping mailbox migration and Outlook support | A citable M365 engagement outside the employer context; whether Glen will do tenant administration for clients (Epping disclaims it) |
| **Email, domain and deliverability** | Mail going to junk, migrations off old hosting, SPF/DKIM/DMARC | Epping (migration, deliverability troubleshooting); mail server (SPF/DKIM/DMARC validated, TLS, relay) | Current mail-server status (Q4); a before/after deliverability outcome that can be published without identifying data |
| **Websites and proofs of concept** | Outdated site; idea needs a working demo before a bigger spend | thedsouza.com case study; Epping store POC; web skills | A launched third-party site; whether thebharattalent.com can be referenced |
| **Infrastructure, hosting and secure remote access** | Unreliable servers or hosting; unsafe remote access; no documentation | GHDC (operational: Proxmox, Docker, Portainer, NPM, Tailscale), GVI, mail server; enterprise virtualisation | An engagement for someone else; **tested backup/recovery evidence** (currently promised in Services but only planned in GHDC) |
| **Troubleshooting and technology review (Health Check)** | "Something keeps breaking and nobody knows why"; "where do we start?" | Epping investigations; mail-flow diagnosis (logs, queues); 20+ years of support | A defined Health Check scope and deliverable; a price |
| *(Automation, currently a separate card)* | Manual re-keying and repetitive admin | Only PowerCLI provisioning in the employer context and planned GHDC automation | **Either** a published automation example **or** fold it into the other services as a technique rather than a stand-alone claim (Q8) |

---

## 7. Case study proposal

No case study was rewritten.

| Case study | What it evidences | Recommendation | Why |
|---|---|---|---|
| **Epping Tennis Club** | The only third-party work: migration, deliverability troubleshooting, a POC | **Strengthen and reframe** | Lead with the club's problem and outcome rather than two workstreams; keep the honest scope and POC asides. Needs Glen's input on naming permission and whether the club would provide a quote (never invented) (Q7). Glen previously flagged an Epping rewrite as needing his input. |
| **Self-hosted mail server** | Mail-flow engineering, DNS authentication, TLS, operational discipline | **Reframe (status)** | The copy implies ongoing operation. If Mailcow is decommissioned (External), reframe it as a completed and retired POC with the lessons, which is honest and still strong evidence for "email and deliverability". |
| **GHDC** | Current infrastructure capability plus a roadmap | **Strengthen (status) and de-emphasise** | Update the phase status. It is mostly roadmap (planned items outnumber operational ones), so it is weaker as *proof* than as evidence of *direction*. Keep it featured only under Option B. |
| **GVI** | Enterprise virtualisation background applied personally | **Retain as-is; keep secondary** | Accurate and honest, but historical. P4 already moves it to "More case studies". Resolve the NTT DATA wording question (Q6). |
| **thedsouza.com** | Build quality, SEO, accessibility, security, AI-assisted delivery | **Retain, with a factual fix; potentially replace later** | Remove the stale Framer Motion item and update the "homepage journey" if the order changes. It is the best evidence for Option C's *method*, but a self-built site is weak client proof; replace or supplement it once a client build exists. |

**Later (not now):** once a paid engagement is completed and Glen has permission, one client case study would outweigh all three self-owned infrastructure studies for Options A and C.

---

## 8. Conversion proposal

### Current CTAs, evaluated
- **The pairing is right:** book (primary) plus email (secondary), from `data/contact.ts`.
- **The booking link cannot ship as a placeholder.** With it removed, email is the only path. **The site's entire conversion therefore depends on `glen@thedsouza.com` being delivered and monitored** (Q3).
- **Too many identical CTAs:** six placements on the homepage. MS2 already reduced these, but Navbar, Hero, Experience, Services, Delivery and Contact still all repeat "Discuss" or the CTA pair.
- **Nothing sets expectations:** no response time, no agenda for the call, no first-step cost.

### Possible enquiry journey (recommendation, not implemented)

1. **Self-identify.** The hero and "Good fit if…" let the visitor recognise their situation.
2. **See proof for that situation.** Each service card links to the one most relevant case study.
3. **Choose a first step:**
   - **Book** a free 15-minute fit call (real Cal.com URL), **or**
   - **Email** with a pre-filled prompt in the body, for example "What's the business?", "What's going wrong or what do you need?", "Any deadline?". This is a mailto `body=` change, not a form.
4. **Know what happens next.** A short list near the CTAs:
   - reply within *[Glen to define]*
   - the 15-minute call confirms fit and the first step
   - a written proposal for a Health Check or Sprint at *[price]*
   - no obligation
5. **First paid step.** The Health Check or a Focused Build Sprint, with a published price or "from" price.

A contact form is **not** recommended at this stage. It would add a server or third-party dependency, privacy handling and spam control for no gain over mailto plus Cal.com.

Measuring conversion (for example Vercel Analytics, or the `data-cta` attributes already on the CTAs) needs its own decision on privacy and CSP; it is listed in §12 as optional.

---

## 9. Trust and credibility

Concrete evidence **already in the repository** that could be surfaced better:

1. **The honesty pattern:** the scope-clarification, POC-limitation, "not a zero-cost platform" and disclosure-boundary asides. **Recommendation:** make this a visible principle, "I tell you what was and wasn't done", near the CTA.
2. **Career specifics:** Intune, Autopilot, Entra ID, VMware vCenter, PowerCLI (`career.ts`), and the mention of 10+ years of virtualisation (GVI). This is currently spread across three places.
3. **Verified technical results:** SPF, DKIM and DMARC validated; TLS verified; queues confirmed clear (mail server "Validation results"). These are specific and checkable in kind, not marketing claims.
4. **The site's own engineering:** CSP and security headers, skip link, reduced-motion support, progressive enhancement and structured data. Any technically literate buyer can inspect them.
5. **Business identity:** "Technology consulting delivered through TD Group of Companies Pty Ltd" (`Contact.tsx`, JSON-LD `worksFor`). Showing an ABN would strengthen this, but needs Glen's approval (Q2).
6. **Public code:** GitHub `lbbextreme` is linked. Its contents were not reviewed in this MS, and whether it supports or undermines trust depends on what is public there (Q10).

**Missing (must come from Glen, never invented):** client testimonials or quotes, a LinkedIn profile link (in the agreed P3 roadmap but absent from the code), certifications if any, and client logos or names with permission.

*This section overlaps the "Trust & Credibility" audit that was deferred on 2026-09-27. Glen can treat this as covering it or still run it separately.*

---

## 10. SEO and technical discovery

Items relevant to the consulting positioning, as **recommendations**:

1. **One consistent professional title** across the hero eyebrow, `<title>`, OG and JSON-LD `jobTitle` (Q2).
2. **Align JSON-LD `knowsAbout` and `keywords` with the published evidence:** drop or defer "AI solutions", "Disaster recovery" and "Cybersecurity" until there is evidence, or add the evidence first.
3. **Add service-business structured data** once the positioning is chosen: a `ProfessionalService` (or `Organization` for TD Group) with `areaServed` (Melbourne/Victoria/Australia), `founder`/`employee` linked to the existing `Person`, and `makesOffer`/`Service` entries matching the final service names. There is no `Service` or `areaServed` data today.
4. **Case-study pages need site navigation and a footer.** This helps crawl paths and visitors arriving from search.
5. **Case-study titles are topic-led** ("Building GHDC…"). Consider problem-led meta descriptions for the featured client-relevant cases.
6. **`sitemap.ts` has no `lastModified`.** Add it when content changes.
7. **Re-measure or remove the PageSpeed figures** (dated before the current stack).
8. **Fix the Skills light-scheme contrast defect** (§3f). It is a WCAG contrast failure for light-mode visitors.
9. **Repository hygiene** (dead files, boilerplate README), because the GitHub link invites inspection.
10. **Out of scope and unchanged:** DNS, Cloudflare, hosting, dependencies.

---

## 11. P4 / P5 findings

Both branches are **unmerged**, branch from P3 (`54e17d0`) in parallel with MS2, and touch **no files that MS2 changed**: `CurrentlyBuilding.tsx`, `Delivery.tsx`, `ProjectCard.tsx`, `Projects.tsx`. They were inspected as diffs only.

### P4 — `feat/p4-featured-projects` @ `b206438` ("feature three client-relevant case studies")
- **Reorders the evidence.** Featured: Epping, Mail server, GHDC. The others move to "More case studies" (thedsouza.com, GVI) as compact links.
- **Moves the thebharattalent.com teaser** from above the case studies to below them.
- **Adds a "Relevant to:" line** on featured cards, mapping each case study to service names (for example Epping → Workplace technology, Websites, Difficult technical problems).
- **Moves the status badge above the title** and removes the `overflow-wrap:anywhere` style override. This fixes the mid-word badge break seen at 375 px (§3f).
- **Relevance to MS-018: high.** It directly implements "evidence first, client-relevant first" (§5 step 4, §7).
- **Considerations:**
  - The "Relevant to" labels hard-code current service names, so they must follow any service renaming.
  - It features the mail server, whose status needs confirming (Q4).
  - Under Option A, GHDC may not belong in the featured three.

### P5 — `feat/p5-compress-process` @ `e4dee89` ("compress delivery process to four client-facing steps")
- **Replaces the eight internal release steps with four client-facing ones:** Understand the problem, Agree a focused plan, Build and check in small steps, Release safely and hand over. The intro becomes "Four simple steps, so you always know what is being done, why, and what comes next."
- **Relevance to MS-018: high.** It removes the engineer-facing process language identified in §3c and fits §5 step 6.
- **Consideration:** the thedsouza.com case study describes the eight-step method separately. That is fine, as that page is for technical readers.

**Recommendation:** integrate P4 and P5 early in the sequence, before copy rework, because they are already built and conflict-free with MS2. They would need rebasing onto MS2 or merging in stack order. The earlier plan was to use them as-is after a 375 px check of P4; this MS saw the problem P4 fixes at 375 px on the current build.

---

## 12. Proposed implementation sequence

Each MS is one branch and one PR, per the existing workflow. There are **at most two MSes per working session.** Nothing below is started without Glen's go-ahead.

| Session | MS | Scope | Depends on |
|---|---|---|---|
| 1 | **MS-019 — Decisions and fact corrections** | Record Glen's answers to §13. Content-only fixes: Framer Motion, mail-server status, GHDC status, NTT DATA wording, JSON-LD claims and title consistency. No restructuring. | Q1–Q6 |
| 1 | **MS-020 — Integrate P4** | Bring P4 onto the MS2 stack as-is. Check 375 px. Adjust the "Relevant to" labels only if Q4 or Q8 require it. | MS-019 |
| 2 | **MS-021 — Integrate P5 + hygiene** | P5 as-is; Skills light-scheme contrast fix; remove dead files. | MS-020 |
| 2 | **MS-022 — Homepage hierarchy** | §5: "Good fit if…", merged About/Experience, dissolve Proof, move engagement models next to the CTA. Copy follows the chosen option. | Q1, MS-021 |
| 3 | **MS-023 — Services alignment** | §6: rename or merge cards to the chosen option; correct the proof links; resolve the automation card. | Q1, Q8 |
| 3 | **MS-024 — Conversion** | §8: real Cal.com URL, prices, "what happens next", mailto body prompt, CTA de-duplication. | Q3, prices and URL from Glen |
| 4 | **MS-025 — Case-study reframes** | §7: Epping opening and outcome framing (with permission), mail-server status reframe, and site nav/footer on case-study pages. | Q7 |
| 4 | **MS-026 — SEO and structured data** | §10: `ProfessionalService`/`Service`/`areaServed`, keywords, `lastModified`, re-measure PageSpeed. | MS-022–025 |
| later | **Merge to `main`** | The stacked PRs go to production (Vercel deploys `main`) only after placeholders are resolved. | All of the above |
| optional | Conversion measurement | Privacy-respecting analytics or CSP decision. | Glen's decision |

---

## 13. Open questions for Glen

Only decisions that block implementation are listed.

1. **Positioning:** Option A, B, C, or a blend with a stated front door (§4)?
2. **Title and identity:** which single title ("Technology Engineer", "Technology Consultant", other)? Should TD Group of Companies Pty Ltd be shown more prominently, and may an ABN be published?
3. **Enquiry path:**
   - Is `glen@thedsouza.com` currently delivered and monitored? It is the only working CTA.
   - What is the real Cal.com URL?
   - What are the Health Check and Build Sprint prices, or "from" prices?
   - What response time can you commit to?
4. **Mail server:** the infrastructure docs record Mailcow as permanently decommissioned on 2026-09-13. Should the case study be reframed as a completed and retired POC, kept featured, or moved to secondary?
5. **GHDC:** what is its current phase and status, for the case study and the card badge?
6. **Employer naming and career dates:** keep "NTT DATA" in the GVI case study? How should "10+ years of virtualisation" reconcile with the career stages?
7. **Epping:** may the club continue to be named? Would you ask them for a short quote? Has the support arrangement been formalised, which changes whether it can be called a client engagement?
8. **Automation:** is there publishable automation work? If not, should "Automating repetitive work" be folded into other services?
9. **thebharattalent.com teaser:** keep it (at the bottom, as P4 does), or remove it from the consulting homepage until it launches?
10. **GitHub link:** is `github.com/lbbextreme` curated enough to be presented as evidence? If not, should the link be removed or de-emphasised?

---

*End of MS-018. No implementation has been started.*
