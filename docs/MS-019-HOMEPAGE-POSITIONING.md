# MS-019 — Homepage Positioning Specification

- **Date:** 2026-09-29. This was run as a third MS that day; Glen explicitly overrode the 2-MS cap.
- **Type:** Specification only. No application source changed, no branch created, P4/P5 not merged, nothing pushed, no dependency/hosting/DNS changes.
- **Source reviewed:** `dev-gvi:~/projects/thedsouza.com`, branch `feat/ms2-conversion-cleanup` @ `ef267de` (tree `4e88ae9`). P4 (`b206438`) and P5 (`e4dee89`) were read as diffs only.
- **Builds on:** `docs/MS-018-CONSULTING-POSITIONING.md`. This document supersedes MS-018 §5 (homepage hierarchy), §8 (conversion) and §12 (sequence), where they differ.

## 0. Inputs and evidence rules

### Glen's decisions (2026-09-29): the authority for new claims

| # | Decision |
|---|---|
| D1 | Identity: **Technology Consultant & Engineer** |
| D2 | Positioning: **a technology consultant who gets hands-on and builds the solution.** Consulting is the front door and hands-on engineering is the differentiator. Not "web developer", not "infrastructure-only", not "AI-only". |
| D3 | Audience: **broad**. Anyone with a legitimate technology problem Glen can help solve. |
| D4 | Primary enquiry: **glen@thedsouza.com** (monitored). **No Cal.com** (not set up). |
| D5 | **No pricing** is published at this stage. |
| D6 | **Every enquiry receives a response within 48 hours.** Must not imply the problem is resolved in 48 hours. |
| D7 | GHDC: **In development · Phase 0**. |
| D8 | Epping Tennis Club: a **formalised technology engagement**, represented within existing repository evidence. |
| D9 | Mail server: a **completed/retired POC**; never described as currently operating. |
| D10 | thebharattalent.com: **secondary / currently building**, not a primary case study. |
| D11 | GitHub: **de-emphasise, do not remove**. |
| D12 | Other projects (MyJobs etc.): existing repository evidence only. **There is none at `ef267de`, so nothing is added.** |

### Evidence labels used in this document
- **[Site]:** existing copy or data at `ef267de` (file named).
- **[D#]:** one of Glen's decisions above.
- **[P5]:** content from the unmerged P5 branch (already written and reviewed by Glen as PR #6).
- **⚠ Needs evidence / decision:** must not be published until Glen supplies evidence or a decision.

All proposed copy below is **draft wording for review**. It is assembled from [Site] phrases and [D#] decisions, and no new facts are introduced.

---

## 1. Evaluation of the current homepage (`ef267de`)

| Order | Section (component) | Verdict against D1–D12 |
|---|---|---|
| 1 | Hero (`Hero.tsx`) | Structure is good. **Wrong title** (D1), **audience narrowed** to "small businesses and founders" (D3), **primary CTA is a placeholder booking link** (D4). |
| 2 | About (`About.tsx`) | Strong differentiator ("the person you talk to is the person who does the work", which matches D2). Audience narrowed (D3). Placed before any evidence. |
| 3 | Experience (`Experience.tsx`, `data/career.ts`) | Accurate career stages. Duplicates About's role, and has its own duplicate CTA pair. |
| 4 | Services (`Services.tsx`) | Problem-led cards (good). No explicit *consulting* offer (D2). Automation card has no evidence. The Workplace card's proof link doesn't evidence M365. **Price placeholders** (D5) and **"free 15-minute call"** booking framing (D4). |
| 5 | Proof (`Proof.tsx`) | Metrics describe the website itself. PageSpeed scores are dated before the current stack. |
| 6 | Delivery (`Delivery.tsx`) | Eight internal engineering steps. P5 already rewrites this into four client-facing steps. |
| 7 | Projects (`Projects.tsx`, `CurrentlyBuilding.tsx`) | The teaser is shown *before* the evidence; a Phase 0 roadmap (GHDC) is the first card; mail-server copy is present-tense (D9); Epping copy says "ongoing" (D8). The badge breaks mid-word at 375 px. |
| 8 | Skills (`Skills.tsx`) | Useful tags. **Heading unreadable in light colour scheme** (no text colour set). |
| 9 | Contact (`Contact.tsx`) | Good honesty copy. Booking-dependent "15-minute" box (D4). No 48-hour commitment (D6). GitHub is prominent (D11). |
| — | Navbar / Footer | Navbar labels follow the old order. Footer tagline narrows the audience (D3). |
| — | Metadata / JSON-LD (`app/layout.tsx`) | Title narrows the audience. `jobTitle` is "Technology Consultant" (D1). `knowsAbout` claims "AI solutions" and "Disaster recovery" without evidence. |

**Conclusion:** the suggested hierarchy in the brief is sound, with two evidence-driven adjustments:
- **Evidence comes directly after Services,** before "How I work". Each service claim is then followed by its proof, and case studies are reached on the second or third scroll instead of the seventh.
- **"Currently building" sits directly after Evidence,** so in-progress work (GHDC Phase 0, thebharattalent.com) is visibly separated from completed evidence rather than mixed in with it.

---

## 2. Proposed homepage structure

```
Navbar
1  Hero                    #home
2  What I help with        #services
3  Selected work           #work        (id change from #projects; keep #projects as alias, see §2.3)
4  Currently building      #building
5  How I work              #how-i-work  (id change from #delivery)
6  About                   #about       (About + Experience + Skills merged)
7  Contact                 #contact
Footer
```

The homepage goes from 9 sections to 7.
- **Removed:** Proof (its content redistributed, see §2.10) and Experience/Skills as stand-alone sections (merged into About).
- **Added:** "Currently building" as its own short section, split out of Projects.

### 2.1 Hero

| Field | Specification |
|---|---|
| **Purpose** | Say who Glen is and what he does, and give an immediate enquiry path. |
| **Current** | Eyebrow "Glen D'Souza · Technology Engineer". H1 "Practical technology engineering for small businesses and founders." Problem-led sub-copy. 22+ years line. Location. `ContactCtas` (booking + email + placeholder tag). "Or see the work behind the services". |
| **Remains** | Layout, `hero-rise` animation, the problem-led sub-copy pattern, the 22+ years line, the location line, the "see the work" link. |
| **Changes** | Title (D1); H1 to the D2 statement; audience broadened (D3); CTA to email-only (D4); 48-hour line (D6). |
| **Proposed content** | **Eyebrow:** "Glen D'Souza · Technology Consultant & Engineer" [D1]. **H1:** "A technology consultant who gets hands-on and builds the solution." [D2, verbatim]. **Sub:** "Bring me the technology problem — workplace IT and email, a website or business application, servers and infrastructure, or a fault nobody can explain. I help work out the right approach, then design, build and test it myself." [Site: `Hero.tsx` sub-copy; the five `Services.tsx` card themes]. **Credibility:** "22+ years of professional IT experience, from enterprise support and end-user computing to infrastructure and web builds." [Site: `career.ts`, case studies]. **Location:** unchanged [Site]. **Response line under the CTA:** "I reply to every enquiry within 48 hours." [D6]. |
| **Primary CTA** | **"Email glen@thedsouza.com"** as a mailto with a subject and body prompt (§3). Secondary: text link "Or see the work behind the services" → `#work`. |
| **Evidence** | D1, D2, D4, D6; `Hero.tsx`; `data/career.ts`; `Services.tsx`. |
| **Change type** | **Copy-only** in `Hero.tsx`, plus **existing component reuse** (`ContactCtas`, modified per §3). |

### 2.2 What I help with (Services)

| Field | Specification |
|---|---|
| **Purpose** | Consulting as the front door, then the hands-on areas, each with proof. |
| **Current** | 5 cards (Workplace, Websites, Automation, Infrastructure, Difficult problems). "Ways to work together" with 3 priced engagement models. "Not sure where your project fits?" box with the booking CTA. |
| **Remains** | Problem-led card format, "What this can look like" lists, "See it in practice" proof links, most card copy. |
| **Changes** | Add a **consulting card first** (D2). **Fold Automation** into Websites/Applications (it has no stand-alone evidence). Fix the proof links. Soften one unevidenced deliverable. **Move the engagement models out** to "How I work" (§2.5), **without prices** (D5). Remove the booking box (D4). |
| **Proposed intro** | Eyebrow "What I help with". H2 "Technology problems I can help solve" [Site: current H2, "for your business" dropped per D3]. Body: "You don't need to know the technical terms. Start with advice or go straight to the work — the person who helps you decide is the person who builds it." [Site: current body + `About.tsx` H2; D2]. |
| **Evidence** | Per card, below. |
| **Change type** | **Layout/content change** in `Services.tsx` (card set, engagement block removed). |

**Proposed cards** (5; order matters: consulting first):

| # | Card title | Problem (description) | Deliverables (from [Site] unless marked) | Proof links | Evidence status |
|---|---|---|---|---|---|
| 1 | **Technology advice and direction** *(new)* | "When you're not sure what's wrong, what to change or where to start, I review how things are set up and give you a clear, prioritised plan." [Site: Health Check description + outcome] | Review of the current set-up and how it's used [Site: Health Check]; a prioritised action plan you can act on yourself or hand to me [Site: Health Check outcome]; an honest view of whether I'm the right person for the job [Site: `Contact.tsx`] | Epping Tennis Club (structured investigation of email, domain and access issues) | Supported by existing offer copy and Epping. **No stand-alone consulting case study.** ⚠ Stronger claims (e.g. strategy, vendor selection) need evidence. |
| 2 | **Workplace technology and email** *(was "Workplace technology that just works")* | [Site: current description, unchanged] | [Site: current 5 bullets, unchanged] | Epping Tennis Club (email and domain migration); **"Enterprise background" → `#about`** (M365, Intune, Autopilot, Entra ID in `career.ts`) | Supported. Fixes the MS-018 finding that Epping alone does not evidence M365 administration. |
| 3 | **Websites and business applications** *(was "Websites and digital platforms" + Automation)* | [Site: current description] + "…and simple automation that removes repetitive admin." | [Site: current 5 bullets] + "Scripts and integrations for repetitive admin" [Site: Automation card] | thedsouza.com; Epping store POC | Web: supported. ⚠ **Automation: no published example.** Keep it as one bullet only; do not expand until evidence exists. |
| 4 | **Infrastructure, hosting and secure access** *(was "Reliable, secure infrastructure")* | [Site: current description] | [Site: current bullets], **except** "Backup and recovery that has actually been tested" → **"Backup and recovery planning"** [Site: mail server "What the project demonstrated"] | Mail server (completed POC); GVI; GHDC (in development) | Supported. ⚠ "Tested recovery" needs evidence before it is restored. |
| 5 | **Solving difficult technical problems** | [Site: unchanged] | [Site: unchanged] | Epping Tennis Club; mail server (mail-flow diagnosis) | Supported. |

**AI:** there is no AI service card. Evidence supports **human-led, AI-assisted delivery** as a *way of working* ([Site] `Proof.tsx` signals, `Delivery.tsx` note, thedsouza.com case study), which goes in §2.5. ⚠ **"AI solutions for clients" is not evidenced;** do not claim it.

### 2.3 Selected work (Evidence)

| Field | Specification |
|---|---|
| **Purpose** | Prove capability with the most client-relevant, *completed* work. |
| **Current** | Teaser first, then 5 equal cards: GHDC, thedsouza.com, Epping, GVI, Mail. |
| **Remains** | `ProjectCard`, the H2 "Case studies: the work behind the services", the intro paragraph (tense adjusted), all 5 case-study routes. |
| **Changes** | **Featured 3 + "More case studies"** (the P4 pattern). **GHDC and the teaser move** to §2.4. Status and description updated per D8/D9. "Relevant to:" tags mapped to the new service names. The badge sits above the title (fixes the 375 px break). |
| **Featured (order)** | 1. **Epping Tennis Club — Technology Engagement**. 2. **Self-Hosted Business Mail Server**. 3. **thedsouza.com**. |
| **More case studies** | GVI — Foundation of GHDC. |
| **Proposed intro** | "Real systems I have built, supported or operated, each written up with what was done and what was learned." [Site; "operate" → "operated" per D9]. |
| **Proposed card copy** | **Epping:** status "Formalised engagement · Store POC completed" [D8, Site]; description "A formalised technology engagement covering email migration, domain and user support, plus a completed merchandise-store proof of concept." [D8 + Site case study]; relevant to: Technology advice · Workplace technology and email · Websites and business applications · Difficult problems. **Mail server:** status "Completed proof of concept · Retired" [D9]; description "A business email platform designed and validated as a proof of concept — secure inbound delivery, authenticated outbound relay, TLS and SPF, DKIM and DMARC — and since retired." [Site validation results + D9]; relevant to: Infrastructure · Difficult problems. **thedsouza.com:** status "Live · Continuously improved" [Site]; description [Site, unchanged]; relevant to: Websites and business applications. |
| **Primary CTA** | None in-section (proof, not a sales block). Each card links to its case study, and each case study ends with the CTA. |
| **Evidence** | Case-study routes; D8, D9. |
| **Change type** | **Layout/content change** in `Projects.tsx` and `ProjectCard.tsx`, reusing P4's implemented pattern (§5). **Anchor:** rename the section id to `#work`. Keep a `#projects` target (for example an empty anchor element) because every case study links back to `/#projects`; alternatively update those five links in the same MS. |

Why thedsouza.com is featured and GHDC is not:
- The D2 positioning needs web/application evidence among the featured work, and thedsouza.com is the only *completed, live* build.
- GHDC is Phase 0 (D7), with 5 of its 8 architecture components still "Planned" [Site]. That is evidence of direction, not delivered capability, so it belongs in §2.4.

### 2.4 Currently building

| Field | Specification |
|---|---|
| **Purpose** | Show active work honestly, separated from completed evidence. |
| **Current** | The thebharattalent.com teaser sits above the case studies; GHDC is a case-study card. |
| **Remains** | Teaser copy [Site: `CurrentlyBuilding.tsx`], the GHDC card copy and link [Site]. |
| **Changes** | A new short section with two items: **GHDC** (status "In development · Phase 0" [D7], existing description, link to the case study) and **thebharattalent.com** (existing teaser, secondary [D10]). |
| **Proposed heading** | Eyebrow "Currently building". H2 "Work in progress". An optional one-line intro is not needed. |
| **Primary CTA** | None. |
| **Evidence** | D7, D10; `Projects.tsx` GHDC entry; `CurrentlyBuilding.tsx`. |
| **Change type** | **Existing component reuse** (`ProjectCard` for GHDC, `CurrentlyBuilding` for the teaser) in a small **new wrapper section**. It can live inside `Projects.tsx` as a second block; a new file is not required. |

### 2.5 How I work

| Field | Specification |
|---|---|
| **Purpose** | Explain the process in client terms, and the ways to start, without prices. |
| **Current** | `Delivery.tsx`: 8 internal steps plus an AI note and a CTA. Engagement models sit in `Services.tsx` with "$X". |
| **Remains** | The section wrapper; the AI note (human-led) [Site]. |
| **Changes** | **The 4 steps from P5** replace the 8 [P5]. The **three engagement types** move here **without price lines** [D5]. **Delivery signals** move here from Proof as one short list. |
| **Proposed steps** | [P5, verbatim]: 01 **Understand the problem**. 02 **Agree a focused plan**. 03 **Build and check in small steps**. 04 **Release safely and hand over**. Intro: "Four simple steps, so you always know what is being done, why, and what comes next." [P5]. |
| **Engagement types** | **Technology Health Check**, **Focused Build Sprint** and **Project Delivery**, each keeping [Site] description + outcome. Remove "Fixed price · $X", "From $X", "Quoted by project or milestone" and the placeholder tags [D5]. Optional replacement line: "Scope and cost are agreed before any work starts." ⚠ Needs Glen's confirmation (it is a commitment). |
| **Ways of working** | [Site: `Proof.tsx` delivery signals]: security-conscious implementation · accessible and responsive delivery · human-led, AI-assisted workflow · controlled, recoverable releases. AI note [Site: `Delivery.tsx`]: "AI can support research, implementation and verification. Architecture, judgment, privacy decisions and publication control remain human-led." |
| **Support** | "Deploy/support where applicable" is covered by step 04 (handover with notes) [P5, Site]. ⚠ **Do not advertise ongoing support or retainers.** Epping shows an arrangement exists, but offering support as a product needs Glen's decision (the earlier P3 plan said no retainer). |
| **Primary CTA** | One link: "Discuss a problem" → `#contact`. |
| **Evidence** | P5; `Services.tsx` engagement models; `Proof.tsx`; `Delivery.tsx`. |
| **Change type** | **Layout/content change** (`Delivery.tsx` content from P5 + engagement block moved from `Services.tsx`). |

### 2.6 About

| Field | Specification |
|---|---|
| **Purpose** | Credibility: who you'll work with. |
| **Current** | `About.tsx` (section 2), `Experience.tsx` (section 3, with its own CTA pair), `Skills.tsx` (section 8, broken light-scheme heading). |
| **Remains** | About H2 "The person you talk to is the person who does the work" [Site]; the "What that experience includes" list [Site]; the career stages from `data/career.ts` [Site]; the "Technical foundation" list [Site]; the Skills tags [Site]. |
| **Changes** | One section in position 6 containing About → career stages → technical foundation → skills tags. The title updates [D1], the audience broadens [D3], Experience's duplicate CTAs are removed, and the Skills contrast defect is fixed. |
| **Proposed content** | **About para 1:** "I'm Glen D'Souza, a technology consultant and engineer with 22+ years of professional IT experience…" (rest [Site] unchanged). **Para 2:** "I bring that same standard to the people and organisations I work with. I don't hand you a report and leave. I get into the problem, design the fix, build it, test it and explain it in plain language." [Site; "small businesses and founders" removed per D3]. **Para 3:** [Site] unchanged. **Career sub-heading:** "Enterprise-grade depth, applied hands-on" [Site H2, audience clause removed]. **Career intro:** "22+ years of professional IT experience, starting on the frontline of enterprise support and moving into engineering." [Site, final sentence removed per D3]. |
| **Primary CTA** | None (the Contact section follows directly). |
| **Evidence** | `About.tsx`, `Experience.tsx`, `data/career.ts`, `Skills.tsx`; D1, D3. |
| **Change type** | **Existing component reuse + copy-only.** Render About, Experience and Skills consecutively under `#about`, with Experience's heading level demoted and its CTAs removed. Add an explicit text colour to `Skills.tsx`. A new component is not required. |

### 2.7 Contact

| Field | Specification |
|---|---|
| **Purpose** | A clear invitation to describe the problem, with the email address, the 48-hour reply and what to include. |
| **Current** | H2 "Discuss Your Project", honesty copy, "Begin with a free 15-minute fit discussion" box, `ContactCtas`, GitHub line, TD Group line, email/location line. |
| **Remains** | Eyebrow "Start a conversation"; the honesty paragraph [Site]; the TD Group line [Site]; the location line [Site]. |
| **Changes** | H2 wording; the booking-dependent box is replaced by a "what to include" box plus the 48-hour line; email-only CTA; the GitHub line is removed from here (moves to the footer only, D11). |
| **Proposed content** | **H2:** "Tell me about the technology problem". **Body:** "Tell me what you are trying to improve, build or fix. I will help clarify the problem, suggest a sensible first step and tell you honestly whether I am the right person for the job." [Site, "your business" removed per D3]. **Box, "What to include":** who you are and what the organisation does · what is going wrong or what you need · any deadline or constraint. ("A short description of the problem is enough to begin." [Site]). **Response:** "I reply to every enquiry within 48 hours." [D6]. **Business line:** "Technology consulting delivered through TD Group of Companies Pty Ltd." [Site]. |
| **Primary CTA** | "Email glen@thedsouza.com" (mailto, §3), with the address also shown as plain text so it can be copied. |
| **⚠ Decision** | The "free 15-minute fit discussion" was tied to Cal.com. **Is a free first conversation still offered?** If yes, the box can say "The first conversation is free and without obligation." If not, omit it. |
| **Evidence** | `Contact.tsx`; D4, D6, D11. |
| **Change type** | **Copy-only** plus **existing component reuse** (`ContactCtas`). |

### 2.8 Navbar and Footer

| Element | Current | Proposed | Type |
|---|---|---|---|
| Navbar links | Home, About, Experience, Services, Projects, Contact | **Services, Work, How I work, About, Contact** (the brand name links to `#home`) | Copy-only (`Navbar.tsx` array) |
| Navbar CTA | "Discuss Your Project" → `#contact` | Keep the label and target (it lands on the "what to include" guidance before email) | No change |
| Footer tagline | "Practical technology engineering for small businesses and founders" | "Technology Consultant & Engineer · Melbourne, Victoria" [D1, Site] | Copy-only |
| Footer links | About, Projects, Contact, GitHub | Services, Work, About, Contact, **glen@thedsouza.com**, then GitHub as the final, visually secondary item [D11] | Copy-only |

### 2.9 Homepage metadata and structured data (`app/layout.tsx`)

| Element | Current | Proposed | Evidence |
|---|---|---|---|
| `<title>` / OG / Twitter title | "Glen D'Souza \| Technology Engineering for Small Businesses" | "Glen D'Souza \| Technology Consultant & Engineer" | D1 |
| Description | "Practical technology engineering for small businesses and founders in Melbourne and across Australia: workplace IT, websites, automation and infrastructure, backed by 22+ years…" | "Technology consultant and engineer in Melbourne, working across Australia: advice and hands-on delivery for workplace IT and email, websites and applications, and infrastructure, backed by 22+ years of professional IT experience." | D1–D3, Site |
| JSON-LD `jobTitle` | "Technology Consultant" | "Technology Consultant & Engineer" | D1 |
| JSON-LD `knowsAbout` | includes "AI solutions", "Disaster recovery" | Remove both. ⚠ Keep "Cybersecurity" only if Glen confirms; otherwise replace it with "Email authentication and deliverability" [Site: mail server, Epping]. | MS-018 §3e |
| `keywords` | includes "AI solutions" | Remove "AI solutions"; add "technology consultant and engineer" | D1, no AI evidence |

Change type: **copy-only**. `ProfessionalService`/`Service` schema stays in a later SEO MS (MS-018 §10).

### 2.10 Removed from the homepage: Proof section (`Proof.tsx`)

| Content | Destination |
|---|---|
| "22+ years" | Hero credibility line and About (already present) |
| "5 published technical case studies" | Implicit in Selected work; dropped |
| PageSpeed 98/96/100/100 (9 Sep 2026) | **Remove from the homepage.** They are already on the thedsouza.com case study; ⚠ re-measure after merge before relying on them there. |
| Delivery signals | §2.5 "Ways of working" |

Change type: remove `<Proof />` from `app/page.tsx`. The component file can be deleted in the same MS or kept until the hygiene clean-up.

---

## 3. Enquiry mechanics (shared by Hero, Contact and all 5 case studies)

The shared component is **existing component reuse, modified**: `components/ContactCtas.tsx` plus `data/contact.ts`.

- **`data/contact.ts`:**
  - Remove `bookingUrl`, `bookingIsPlaceholder`, `PRICE_PLACEHOLDER`, `pricing` and `isPricePlaceholder` [D4, D5], or keep `bookingUrl` as `null` for a future Cal.com.
  - Add `responseCommitment = "I reply to every enquiry within 48 hours."` [D6] so there is one source.
  - Change `emailHref` to subject `Technology enquiry` and add a body prompt, URL-encoded:
    ```
    Hi Glen,

    Who I am / what the organisation does:

    What is going wrong or what I need:

    Any deadline or constraint:
    ```
- **`ContactCtas`:** a single primary button, "Email glen@thedsouza.com". Remove the booking button and the `PlaceholderTag` usage. Optionally render `responseCommitment` beneath (Hero and Contact yes; case studies yes).
- **Effect:** every case study's CTA block updates automatically; their headings and copy are unchanged.
- **Must not say:** anything implying the problem is fixed within 48 hours (for example "48-hour turnaround" or "solved in 48 hours") [D6].

---

## 4. Content comparison

| Current copy/element | Proposed treatment | Reason | Evidence |
|---|---|---|---|
| Hero eyebrow "Glen D'Souza · Technology Engineer" | "Glen D'Souza · Technology Consultant & Engineer" | Agreed identity | D1 |
| H1 "Practical technology engineering for small businesses and founders." | "A technology consultant who gets hands-on and builds the solution." | Consulting front door, engineering differentiator; broad audience | D2, D3 |
| Hero sub "When your computers, email, website or systems are slowing the business down…" | Rewritten to name the problem areas and "I help work out the right approach, then design, build and test it myself" | Adds the consulting step; keeps hands-on | D2; Site |
| "22+ years… applied hands-on to businesses that don't have an IT department of their own." | "22+ years of professional IT experience, from enterprise support and end-user computing to infrastructure and web builds." | Audience broadened; the career span is evidenced | D3; `career.ts` |
| "Book a free 15-minute call" (all pages) | Remove | Cal.com not set up | D4 |
| "Placeholder: booking link not yet live" tag | Remove | No placeholders on a public site | D4 |
| "Email me" (secondary) | Primary "Email glen@thedsouza.com" + 48-hour line | The only enquiry path; response commitment | D4, D6 |
| About "I now bring that same standard to small businesses and founders." | "…to the people and organisations I work with." | Broad audience | D3 |
| Experience section (separate, with "View Projects"/"Discuss a Project") | Merged into About; CTAs removed | Duplication; evidence first | MS-018 §3 |
| Experience "Today that depth goes directly to small businesses and founders…" | Remove the sentence | Broad audience | D3 |
| No consulting service card | Add "Technology advice and direction" first | Consulting is the front door | D2; Site Health Check copy |
| "Automating repetitive work" card | Fold into "Websites and business applications" as one bullet | No published automation evidence | MS-018 §6 |
| Workplace card proof: Epping only | Epping + link to career (M365/Intune/Entra) | Epping disclaims M365 tenant administration | Site: Epping aside, `career.ts` |
| "Backup and recovery that has actually been tested" | "Backup and recovery planning" | No published tested-recovery evidence | Site: mail server list; GHDC Phase 2 "Planned" |
| "Fixed price · $X", "From $X", "Quoted by project or milestone" + tags | Remove price lines; keep the engagement descriptions | No pricing | D5 |
| "Not sure where your project fits? … free 15-minute call" box | Remove | Booking-dependent; duplicate CTA | D4 |
| Proof section (metrics, PageSpeed, signals) | Remove the section; redistribute (§2.10) | Self-referential; dated scores | MS-018 §3c |
| Delivery 8 steps | P5's 4 steps | Client-facing | P5 |
| Teaser above the case studies | Move to "Currently building" after the evidence | Secondary | D10 |
| GHDC as first case-study card | Move to "Currently building", "In development · Phase 0" | Phase 0; mostly planned | D7; Site |
| Mail card "Operational proof of concept" / "A privately operated… platform designed and validated…" | "Completed proof of concept · Retired" / past tense, "since retired" | Not currently operating | D9 |
| Epping card "Ongoing support • POC completed" / "Ongoing email, domain and user support…" | "Formalised engagement · Store POC completed" / "A formalised technology engagement covering…" | Engagement formalised | D8 |
| Projects intro "Real systems I have built, supported or operate" | "…supported or operated" | Mail server retired | D9 |
| Skills heading (no colour → dark on dark in light scheme) | Explicit text colour | Contrast defect | MS-018 §3f (verified) |
| Contact "Prefer to see the code first? View my GitHub" | Remove from Contact; GitHub stays in the footer | De-emphasise | D11 |
| Contact H2 "Discuss Your Project" | "Tell me about the technology problem" | Problem-led, broad | D2, D3 |
| Contact "Begin with a free 15-minute fit discussion" box | "What to include" box + 48-hour line | Booking-dependent; D6 | D4, D6 |
| Footer tagline "…small businesses and founders" | "Technology Consultant & Engineer · Melbourne, Victoria" | Identity, audience | D1, D3 |
| Navbar links (old order) | Services, Work, How I work, About, Contact | Match the new order | — |
| `<title>`, description, OG, `jobTitle`, `knowsAbout`, `keywords` | Per §2.9 | Identity; unevidenced claims | D1–D3; MS-018 §3e |

### 4.1 Now-inaccurate content outside the homepage (correct in the same stack)

These are not homepage sections, but they would contradict the new homepage.

| File | Current | Correction | Basis |
|---|---|---|---|
| `app/projects/self-hosted-mail-server/page.tsx` | Badge and eyebrow "Operational proof of concept"; "Continued operation will be governed…"; "The mail platform is one of the infrastructure workloads used to extend GHDC" (present tense) | "Completed proof of concept · Retired"; past tense; add one line saying the platform has been retired | D9 |
| `app/projects/epping-tennis-club/page.tsx` | "The next operational step is to formalise the support arrangement…" | State that the engagement has been formalised. **Do not add terms, scope or outcomes that are not already in the repository.** | D8 |
| `app/projects/thedsouza-com/page.tsx` | "Framer Motion" in the technical foundation; the "homepage journey" list of 9 sections; "Person JSON-LD"; the PageSpeed paragraph | Remove Framer Motion; update the journey list to the §2 order; re-measure PageSpeed or date it clearly | `package.json`; this spec |
| All 5 case studies | Booking CTA via `ContactCtas` | Fixed automatically by §3 | D4 |

---

## 5. P4 / P5 review (read-only)

| | P4 `feat/p4-featured-projects` @ `b206438` | P5 `feat/p5-compress-process` @ `e4dee89` |
|---|---|---|
| **Changes** | `Projects.tsx`: featured 3 (Epping, Mail, GHDC) + "More case studies" (thedsouza.com, GVI) as compact links; teaser moved below. `ProjectCard.tsx`: status badge above the title, new `relevance` prop ("Relevant to: …"). Removes the `overflow-wrap:anywhere` style hack. `CurrentlyBuilding.tsx`: margin and heading-size tweak. | `Delivery.tsx`: 8 steps → 4 client-facing steps; new intro sentence; grid `md:` → `sm:`. |
| **Relevant to this spec** | **Pattern: yes.** The featured/more split, the `relevance` prop and the badge fix are all used in §2.3. **Content: partly.** Featured GHDC conflicts with D7/§2.4 (GHDC moves to Currently building; thedsouza.com is featured instead); the mail and Epping copy predates D8/D9; the relevance labels use the old service names. | **Fully.** The 4 steps are used verbatim in §2.5. |
| **Conflicts with MS2** | None: touches only `CurrentlyBuilding.tsx`, `ProjectCard.tsx`, `Projects.tsx` (untouched by MS2). | None: touches only `Delivery.tsx`. |
| **Recommendation** | **Use P4 as the starting point of the Evidence MS (§6, MS-022),** not as a stand-alone merge. Merging P4 as-is and then changing its featured set, statuses and labels would churn the same files twice. Glen's call: rebase P4 onto MS2 and extend it in the same PR, or close PR #5 and re-implement the pattern. | **Integrate as-is, separately** (small, already reviewed). The engagement-type move into the same section is a *later* MS, so P5 stays unchanged when it lands. |

Nothing was cherry-picked, merged or rebased in this MS.

---

## 6. Implementation sequence

Each MS is one feature branch and one PR, stacked on `feat/ms2-conversion-cleanup`, with the diff and preview shown before the next MS. There are **at most 2 MSes per working session.** Nothing here reaches `main` until Glen approves the stack.

| Session | MS | Scope | Files | Blocked by |
|---|---|---|---|---|
| **Next** | **MS-020 — Enquiry path & placeholder removal** *(smallest sensible next MS)* | §3 in full; Contact §2.7; remove the price lines and booking box from Services (engagement descriptions kept in place for now) | `data/contact.ts`, `ContactCtas.tsx`, `Contact.tsx`, `Services.tsx` (price/booking lines only) | Free-first-conversation decision (§2.7 ⚠); otherwise none |
| Next | MS-021 — Identity & accuracy copy | Hero §2.1; About/Experience copy (not the merge); footer tagline; metadata §2.9; mail/Epping card and case-study corrections §4.1 | `Hero.tsx`, `About.tsx`, `Experience.tsx`, `Footer.tsx`, `layout.tsx`, `Projects.tsx` (two entries' copy), 3 case-study pages | "Cybersecurity" in `knowsAbout` (§2.9 ⚠) |
| +1 | MS-022 — Integrate P5 + Skills contrast | P5 as-is; Skills text colour | `Delivery.tsx`, `Skills.tsx` | — |
| +1 | MS-023 — Evidence & Currently building | §2.3 + §2.4, starting from P4 | `Projects.tsx`, `ProjectCard.tsx`, `CurrentlyBuilding.tsx`, back-links if the anchor changes | Glen: rebase P4 or re-implement |
| +2 | MS-024 — Services restructure + How I work | §2.2 cards; move the engagement types + ways of working into How I work (§2.5); remove Proof (§2.10) | `Services.tsx`, `Delivery.tsx`, `Proof.tsx`, `page.tsx` | "Scope and cost agreed" line (§2.5 ⚠) |
| +2 | MS-025 — Order, About merge, navigation | §2 order in `page.tsx`; About/Experience/Skills under `#about`; Navbar/Footer links; GitHub de-emphasis; thedsouza.com "homepage journey" update | `page.tsx`, `Navbar.tsx`, `Footer.tsx`, `Experience.tsx`, thedsouza.com case study | MS-020–024 |
| later | Merge stack to `main` | Production (Vercel deploys `main`) | — | Glen's review of the full stack |

**Why MS-020 first:**
- It is the smallest change (4 files).
- It removes every public placeholder (booking link, "$X" prices), which is the one thing that must be fixed before the P2 → MS2 stack can ever go to production.
- It enables the only real enquiry path with the agreed 48-hour commitment, and it fixes the CTA on all 5 case studies at once.
- It is independent of the positioning copy.

---

## 7. Items needing Glen's evidence or decision before implementation

1. **Free first conversation:** still offered, now by email, without Cal.com? (§2.7)
2. **"Scope and cost are agreed before any work starts":** OK to publish as a commitment? (§2.5)
3. **"Cybersecurity" in structured data:** keep, or replace with the evidenced "Email authentication and deliverability"? (§2.9)
4. **P4 handling:** rebase and extend PR #5 in MS-023, or close it and re-implement the pattern? (§5)
5. **Evidence gaps, not blocking** (these stay unclaimed until evidence exists): published automation work; tested backup/recovery; AI solutions delivered for clients; ongoing support as an offered service.

*End of MS-019. Specification only. No implementation started.*
