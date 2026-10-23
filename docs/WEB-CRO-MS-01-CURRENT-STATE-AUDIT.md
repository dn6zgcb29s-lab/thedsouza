# WEB-CRO-MS-01 — Verified Current-State Audit

- **Date:** 2026-10-17 (observations taken 08:40–09:00 AEDT).
- **Type:** Research only. No application source changed, no branch switched, nothing committed, pushed or deployed. This file is the only change.
- **Source reviewed:** committed production code at `b1bae40` (read with `git show main:<path>`), plus the live site `https://www.thedsouza.com` in a Chromium browser on the MBA.
- **Excluded:** the uncommitted GHDC page edit in `app/projects/home-datacenter/page.tsx` (not part of production).
- **Builds on:** `docs/MS-018-CONSULTING-POSITIONING.md`, `docs/MS-019-HOMEPAGE-POSITIONING.md`.

Evidence labels: **[V]** verified in this audit, **[R]** reported in an earlier session and not re-checked today, **[H]** hypothesis, **[U]** unknown.

---

## 1. Executive summary and scope

The site is technically sound and honest in tone. Its gaps are commercial, not technical:

- **One enquiry path, unmeasured.** Every call to action is an email (`mailto:`) link. There's no measurement, so nobody can currently tell whether the site produces enquiries. [V]
- **Client evidence is thin.** Of five case studies, one is a client engagement (a community tennis club). The rest are Glen's own projects. [V]
- **Some content may be out of date.** The GHDC page and the dated PageSpeed scores need checking against current reality. [V for what the page says; U for whether it's still accurate]
- **Three fixes are already built but unreleased** (WEB-GS-013, 014 and 016). [V]

**Scope:** six live pages, the committed repository, and in-browser checks. No analytics accounts, Search Console, PageSpeed service or other third-party tools were used.

## 2. Repository and production baseline

| Item | Finding | Label |
|---|---|---|
| Machine | Glen's MacBook Air, macOS 27.0.1 | V |
| Repository | `~/Documents/thedsouza.com`, package `thedsouza`, remote `origin` = `github.com/dn6zgcb29s-lab/thedsouza` | V |
| Branch | `fix/web-gs-013-ghdc-stage-c-copy`, **not `main`** as the brief expected. HEAD `b1bae40` is identical to `main` and `origin/main`, so the audited code is the same | V |
| `origin/main` | `b1bae40`, last fetched 2026-10-15 05:36. Live GitHub state not re-checked | V / U |
| Working tree | Only ` M app/projects/home-datacenter/page.tsx` (diff fingerprint SHA-256 `2b0fa6d4…`, unchanged) | V |
| Hosting | Response headers show `server: Vercel`, served from Sydney (`x-vercel-id: syd1…`), cache HIT | V |
| Pending work | PR #10 (WEB-GS-013, navigation and footer on project pages) is open. WEB-GS-014 (GitHub link) and WEB-GS-016 (hash-load fix) exist only as branches, preserved on Forgejo | R (PR status as of 2026-10-16) |
| Storage risk | The checkout sits inside iCloud-synced `~/Documents` | R (MS-2, 2026-10-16) |

## 3. Pages and navigation

| URL | Status | H1 | Words in main | Notes |
|---|---|---|---|---|
| `/` | 200 | "I solve problems." | ~1,690 | 9 H2 sections; full nav and footer |
| `/projects/home-datacenter` | 200 | Building GHDC… | ~1,100 | No site nav or footer |
| `/projects/thedsouza-com` | 200 | Building thedsouza.com… | ~700 | No site nav or footer |
| `/projects/gvi-home-lab` | 200 | GVI: The Virtualisation Foundation of GHDC | ~430 | No site nav or footer |
| `/projects/epping-tennis-club` | 200 | Epping Tennis Club Digital Support | ~290 | No site nav or footer |

All [V]. Sources: `app/page.tsx`, `app/projects/*/page.tsx`, live fetches.

- **Homepage order:** Hero → About → Experience → Services → Proof → Delivery → Projects → Skills → Contact. The navbar links Home, About, Experience, Services, Projects and Contact (`components/Navbar.tsx`). [V]
- **Project pages** offer only "Back to projects" (`/#projects`) and the email button. Some also link to GHDC. In production there is no site navigation or footer; PR #10 contains the fix. [V]
- **Domain:** `thedsouza.com/<path>` redirects to `www.thedsouza.com/<path>` with the path kept. [V]
- **404 page:** correct status 404 and `noindex`, but it has no navigation and no link home (its only link is the skip link). It's a dead end. [V]

## 4. Positioning, services, portfolio and credibility

**Positioning** [V] (`components/Hero.tsx`, `components/About.tsx`)
- "Technology Consultant & Engineer", "I solve problems."
- 22+ years of IT (`data/career.ts`), Melbourne, remote across Australia.
- "The person you talk to is the person who does the work."

**Services** [V] (`components/Services.tsx`): five areas — workplace technology/M365, websites and platforms, automation, infrastructure, and difficult technical problems.
- Each lists plain-language examples, and some link to a case study.
- The audience is "your business". It never says what size or type of organisation, or what industry. [V that it isn't stated; H that this weakens qualification]

**Engagement models** [V] (`components/Delivery.tsx` area): Technology Health Check, Focused Build Sprint and Project Delivery.
- Each has a stated outcome, and "Scope and cost are agreed before any work starts."
- No price guidance is given. [V]

**Proof section** [V] (`components/Proof.tsx:65-66`): "22+ years", "5 case studies", and PageSpeed mobile lab scores of 98/96/100/100 "measured 9 September 2026".
- These are self-reported and dated more than five weeks ago. I didn't re-measure them (no third-party tools were in scope). [U whether they're still accurate]
- The list includes "Controlled GitHub-to-production releases". [V] This fits today's setup. Whether it should stay depends on Glen's open GitHub decision under the in-house rule. [H]

**Portfolio** [V]

| Case study | Type | Status shown | Evidence quality |
|---|---|---|---|
| Epping Tennis Club | **Client** (community club) | "Email migration completed" | Clear scope, including an honest note that it wasn't full M365 administration. Outcomes are qualitative; **no dates, no numbers, no testimonial** |
| GHDC | Own project | "In development · Phase 0 — Network stabilisation"; stack includes Tailscale, Portainer and Nginx Proxy Manager | Detailed roadmap. **May be out of date:** GVI work since 13 Oct has moved well past "Phase 0", and the in-house plan retires Tailscale [H, needs Glen to confirm] |
| thedsouza.com | Own project | "Live • Continuously improved" | Good technical detail; references the dated PageSpeed scores |
| GVI | Own lab | "Evolved into GHDC" | Clearly labelled as historical |
| thebharattalent.com teaser | Private build | "More to come" | No information. It's the first card in the Projects section [V] |

- **Demo versus production:** the status labels distinguish POCs, retired work and live work clearly. That's a strength. [V]
- **Brand signals:** there are no images anywhere on the site (no headshot, no diagrams or screenshots), and no LinkedIn link. All pages share one `social-preview.png`. [V]
- **Timeline:** "Enterprise IT Support 2003–2024" puts 21 years into one stage. [V] That may undersell how Glen's roles progressed. [H]

## 5. Enquiry journey and mobile

- **Single channel:** every CTA is `mailto:glen@thedsouza.com` with a pre-filled subject ("Technology enquiry") and body template (`data/contact.ts`). [V]
- **Mitigations:** the address is shown as visible text, and the site promises a reply within 48 hours. [V]
- **Hypothesis:** visitors who use webmail or have no mail app set up may not complete a `mailto:` click. There's no form, booking link or phone number. [H, untested]
- **Mobile first screen (375×812):** the hero's primary email button starts at 790px, so it sits essentially below the first screen. No CTA is visible on first load except the menu. [V]
- **Page length:** the homepage is 21,475px tall, about 26.4 phone screens. That's a measurement only; it doesn't prove the page is too long. [V]
- **Layout:** no horizontal scrolling on mobile, and no layout shift (CLS 0) was recorded on a warm load. [V]
- **Small tap targets:** inline "See it in practice" links are about 18px tall. Inline links are exempt from WCAG 2.2's 24px target rule, but these behave like a list of links. [V for size; H for impact]
- **Known issues:**
  - A direct load of `/#about` fades About in late. Fixed by WEB-GS-016, which isn't deployed. [R]
  - The mobile menu doesn't close on Escape. [R]

## 6. Accessibility, SEO, security and performance

**Accessibility** [V]
- One H1 per page, no skipped heading levels on the homepage, a skip link, `main`/`nav`/`footer` landmarks, and no unnamed links or buttons.
- Colour contrast, recomputed correctly (an earlier `lab()` parsing error was discarded):
  - body text 7.66:1;
  - lighter text 13.56:1;
  - accent eyebrow text 9.25:1;
  - email button 9.25:1.

  All are above WCAG AA's 4.5:1.
- There was no automated accessibility audit or screen-reader test. [U]

**SEO** [V]
- Every page has a title, canonical URL, Open Graph and Twitter tags, `lang="en"`, and JSON-LD (Person and WebSite; project pages add CreativeWork and BreadcrumbList).
- `robots.txt` allows everything and points to the sitemap. `sitemap.xml` lists all 6 URLs, without `lastmod`.
- The homepage meta description is **213 characters**, longer than search results usually show (about 155–160). Project pages are 94–154 characters.

**Security headers** [V] (`next.config.ts`):
- a content security policy (it allows `'unsafe-inline'` for scripts and styles);
- HSTS `max-age=63072000`, without `includeSubDomains`;
- `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, and both cross-origin policies (COOP, CORP).

**Privacy and analytics**
- On the homepage load, no analytics script was found, no cookies were set, and every request went to `www.thedsouza.com`. [V]
- This covers browser-side requests only. Server-side or Vercel-side analytics settings weren't inspected. [U]

**Performance**
- On a warm-cache load: time to first byte 23ms, largest paint 180ms, CLS 0. [V, but not representative]
- Transfer sizes read **0** because files came from cache, so **page weight is unverified**.
- The live PageSpeed scores weren't re-measured. **Performance is unverified** beyond the warm-cache sample. [U]

## 7. Architecture and maintainability

| Finding | Source | Label |
|---|---|---|
| Next.js 16.4.0, React 19.2.4, TypeScript 5, Tailwind 4, lucide-react. **Framer Motion isn't used**: it's absent from `package.json` and the lockfile; animation is a small CSS/IntersectionObserver `FadeIn` | `package.json`, `components/FadeIn.tsx` | V |
| No tests, no CI configuration, no `vercel.json`. Deployment relies on Vercel's GitHub integration (preview checks seen on PR #10) | repo tree | V / R |
| Unused files: components `Building`, `FeatureCard`, `Learning` and `Story` (never imported), and five starter SVGs in `public/` (never referenced) | `git grep` | V |
| `README.md` is the unchanged create-next-app boilerplate | `README.md` | V |
| A production build needs Google Fonts at build time (`next/font/google`), so it can't build offline or fully in-house | `app/layout.tsx:2`; R (WEB-GS-016 validation) | V / R |
| Content lives in TSX components with some shared data (`data/contact.ts`, `data/career.ts`), which keeps editing simple and suits AI-assisted work | repo | V |
| Portability: plain Next.js with no Vercel-specific code was found, so it could likely move to self-hosting. Untested | repo | H |

## 8. Strengths to preserve

1. Honest, carefully scoped claims (Epping scope note, POC and retired labels, dated scores).
2. A consistent enquiry path from one source (`data/contact.ts`), a 48-hour reply promise, and "scope and cost agreed first".
3. Clear, plain-language services with an obvious entry offer (Health Check).
4. A solid technical baseline: security headers, structured data, skip link, contrast, reduced-motion support, no trackers.
5. Simple, readable code that suits AI-assisted maintenance.

## 9. Prioritised improvement hypotheses

Each is a hypothesis to test, not a finding of failure.

### Conversion and positioning (objective A: client generation)
| # | Hypothesis | Evidence that would justify the change |
|---|---|---|
| A1 | Naming the target client (for example small organisations and clubs with M365, email and web problems) would raise the share of qualified enquiries | Glen's confirmed client profile; enquiry-quality tracking (§11) |
| A2 | Showing a CTA on the first mobile screen would raise enquiry starts | The 790px measurement (V), plus click counts once measured |
| A3 | Offering a second enquiry route, such as copy-email or a self-hosted form, would reduce lost enquiries | Evidence that `mailto:` loses visitors (e.g. visitor feedback), weighed against the in-house rule (no third-party form service) |
| A4 | A shorter or reordered homepage (Proof/Delivery are dense) would help scanning | Scroll-depth data; that would need an in-house measurement decision first |

### Portfolio credibility (objective B: technical portfolio)
| # | Hypothesis | Evidence that would justify the change |
|---|---|---|
| B1 | Bringing the GHDC page in line with current reality would prevent stale claims | Glen confirms the current phase and stack (the uncommitted GHDC edit may already do this) |
| B2 | Adding dates, a measurable outcome or a quote to Epping would strengthen the only client proof | The club's permission and any real metrics |
| B3 | Re-measuring and re-dating the PageSpeed scores, or dropping the numbers, would keep proof current | A fresh measurement (needs an approved tool) |
| B4 | Explaining or moving the empty thebharattalent teaser would stop the first project card looking empty | Glen's decision on disclosure |

### Personal brand (objective C)
| # | Hypothesis | Evidence that would justify the change |
|---|---|---|
| C1 | A headshot and a LinkedIn link would increase trust | Glen's preference; a test with peers |
| C2 | Splitting 2003–2024 into the real role progression would show seniority more clearly | Accurate career dates from Glen |

### Technical hygiene
| # | Item | Justification |
|---|---|---|
| T1 | Release the built fixes: WEB-GS-013 (navigation on project pages), 014 (GitHub link) and 016 (hash load) | Already verified. **Blocked on Glen's GitHub/Vercel decision** |
| T2 | Give the 404 page navigation or a link home | Verified dead end |
| T3 | Shorten the homepage meta description, add `lastmod` to the sitemap, and consider per-page social images | Verified metadata facts |
| T4 | Remove the 4 unused components and 5 starter SVGs; replace the README | Verified unused |
| T5 | Add a minimal check suite (lint, type check and build in CI, plus a smoke test of the 6 routes) and self-host fonts | No tests or CI exist; build depends on Google Fonts |

### Experimental research (AI builder)
Don't rebuild or migrate just because an AI builder exists. The current site is sound and cheap to change.

An AI-builder prototype is only worth testing if:
1. there's a specific hypothesis (for example a redesigned mobile hero, A2);
2. there's a way to measure the result;
3. no private material goes to an unapproved service.

Until enquiry measurement exists, a prototype can't show measurable value.

## 10. Evidence gaps, assumptions and confidence

| Gap | Effect | Confidence in related findings |
|---|---|---|
| No enquiry, traffic or conversion data | No conversion claims are possible | All of §9 A/C are **low–medium** confidence hypotheses |
| Performance not freshly measured | Page weight and real-world speed unknown | Performance: **unverified** |
| No automated accessibility or screen-reader audit | Only the spot checks above | Accessibility: **medium** |
| GHDC's current real state | May be stale | **Medium** that it's stale |
| PR #10 and GitHub state last seen 2026-10-16 | May have changed | **Medium** |
| Server/Vercel-side analytics settings not inspected | "No analytics" covers the browser only | **High** for browser-side |
| Target client profile not documented | A1 can't be specified | — |

## 11. Suggested success measures (for later evaluation)

- **Enquiries per month,** counted from emails whose subject is "Technology enquiry", the pre-filled tag. This needs no tracking software.
- **Qualified enquiry rate:** the share that matches the target client profile.
- **Enquiry → first conversation → paid engagement** conversion, tracked manually.
- **Median time to first reply,** against the 48-hour promise.
- **Optional, only after an in-house decision:** self-hosted, privacy-respecting page analytics on GVI (case-study views, CTA clicks).
- **Quality gates:** fresh PageSpeed scores, an automated accessibility scan, and the CI build/smoke checks passing.

## 12. Recommended next micro-sprint

**WEB-CRO-MS-02: audience and measurement baseline (decision document, no code).**
- **Objective:** confirm the target client profile and the primary offer, and choose an in-house way to count enquiries. Changes from §9 can then be judged against a baseline.
- **Done when:**
  1. Glen has approved a one-paragraph client profile and the primary offer;
  2. an enquiry-counting method is chosen, with no third party in the path;
  3. a baseline of 4 weeks or more of enquiry counts has started;
  4. the §9 hypotheses are ranked against that baseline, with T1's release decision (GitHub/Vercel) recorded.

## 13. Preservation and change control

- **Created:** this file only, `docs/WEB-CRO-MS-01-CURRENT-STATE-AUDIT.md`. It's untracked and not committed.
- **Untouched:** all application code; the uncommitted GHDC edit (fingerprint unchanged); branches; PR #10; the WEB-GS-016 worktree.
- **No other system changed:** no deployments, hosting, DNS or Forgejo/GitHub changes. Only public pages were fetched.
- **Note:** this file now sits untracked beside the GHDC edit on the GHDC branch. Whoever commits the GHDC edit should leave it out, unless Glen wants it committed.
