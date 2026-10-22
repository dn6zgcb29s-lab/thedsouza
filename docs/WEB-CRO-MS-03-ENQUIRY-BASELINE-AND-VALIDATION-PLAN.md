# WEB-CRO-MS-03 — Enquiry Baseline and Commercial Validation Plan

- **Date:** 2026-10-17 (revised the same day to the minimal 6-field schema and a log location outside the website repository).
- **Type:** Operating plan only. No website code, no log created, no data recorded, no analytics, no outreach. This file is the only change.
- **Baseline:** committed production code at `b1bae40`. The enquiry subject is `"Technology enquiry"` (`data/contact.ts:7`).
- **Builds on:** `docs/WEB-CRO-MS-01-CURRENT-STATE-AUDIT.md`, `docs/WEB-CRO-MS-02-COMMERCIAL-POSITIONING-AND-MEASUREMENT.md`, and the 2026-09-29 decisions in `docs/MS-019-HOMEPAGE-POSITIONING.md` §0.

---

## 1. Executive summary

Glen keeps a six-column enquiry log, private and in-house, outside this website repository. It costs nothing, needs no software and doesn't touch the website.

- Each genuine enquiry, from any channel, gets one row: date, source (only if known), revenue pathway, qualification, outcome, and a brief note if needed.
- After 4 weeks the log shows, for the first time, whether the website produces consulting enquiries, and whether contract-engineering conversations are happening.
- **The CEO approved the baseline in principle; creating the log needs separate approval.** I recommend a private repository on Glen's Forgejo server (§3.1). It isn't created yet.

## 2. CEO decisions

**Current (2026-10-17):**

| # | Decision |
|---|---|
| C1 | Pursue contract-engineering income **while developing** technology consulting |
| C2 | Enquiry baseline approved **in principle**: in-house, zero cost. **Creating the log needs separate approval** |
| C3 | Headshot and LinkedIn: **research suitability only** |
| C4 | Measurement stays in-house; **no external analytics service** |
| C5 | **Do not approach Epping Tennis Club** yet |

**Retained from 2026-09-29** (`docs/MS-019-HOMEPAGE-POSITIONING.md` §0):

| # | Decision |
|---|---|
| D3 | Broad audience; no narrowing without approval |
| D4 | Email-only enquiries |
| D5 | No published pricing |
| D7 | GHDC "Phase 0" wording kept, pending a factual check |
| D10 | thebharattalent.com stays secondary |

MS-02's audience-narrowing proposal is therefore **not adopted**. The log tracks both pathways without changing public positioning.

## 3. Proposed baseline start procedure

### 3.1 Log location: outside the website repository (decision needed)

The brief asks for a **local, private** location. "Local" can mean on the MBA itself or on Glen's own network, and the two trade off:

| Option | Private | In-house | Backed up | Survives an MBA reset | Recommendation |
|---|---|---|---|---|---|
| **A. A CSV file in a new private Forgejo repository** (e.g. `glen/td-enquiry-log`) on GVI, edited in Forgejo's web editor | Yes | Yes (Glen's own server, on his own network) | **Yes**: Forgejo's container is in the nightly backup | **Yes** | **Recommended** |
| B. A local spreadsheet on the MBA, outside iCloud (e.g. under `~/Developer/`) | Yes | Yes | **No** | **No** | Not recommended: it's "local" in the strictest sense, but it breaks "nothing lives only on the MBA" and has no backup |
| C. Anywhere under `~/Documents/` | Yes | **No**: the folder is iCloud-synced | iCloud only | — | **Rejected** (in-house rule) |
| D. Inside this website repository | — | — | — | — | **Excluded** by the brief; it would also sit next to public website code |

**The local trade-off:** option A is local to Glen's network rather than to the MBA. It's still in-house and private, it's backed up, and it survives an MBA reset. The costs:
- it needs GVI and Forgejo to be up, and the MBA on the home network (Forgejo is LAN-only);
- creating it is a small change on GVI.

Option B avoids both, at the cost of having no backup.

**Ask:** approve option A, or choose B or another place. Nothing is created until then.

### 3.2 Start steps (only after the location is approved)
1. Create the log with the header row from §4 and no data rows.
2. Record the **baseline start date** (the approval date) in a one-line README next to the log. Don't backdate.
3. **Optional test** (Glen does this himself): click the email button on the live site, send the email to himself, and log it with `category = test`. Test rows are excluded from all counts.
4. Add a row **within 2 working days** of any genuine enquiry, whatever channel it came through.
5. Every Friday, spend 5 minutes updating the `outcome` of open rows.

## 4. Minimal enquiry-log fields

One row per enquiry. **Don't record names, email addresses, phone numbers, message text, credentials or client system details.**

| # | Field | Allowed values |
|---|---|---|
| 1 | `received` | `YYYY-MM-DD` |
| 2 | `source` | `website-stated` · `site-subject-unconfirmed` · `linkedin` · `recruiter` · `referral` · `other` · `unknown` (see §5.2) |
| 3 | `category` | `contract-engineering` · `consulting` · `other` · `unknown` · `test` |
| 4 | `qualified` | `qualified` · `unqualified` · `pending` |
| 5 | `outcome` | `open` · `follow-up` · `won` · `lost` · `no-response` |
| 6 | `notes` | Optional, ≤ 15 words, follow-up only. For `won`, the Xero quote or invoice number may go here. **No dollar amounts:** revenue stays in Xero |

The original email stays in the mailbox. To find it, Glen searches by date and subject; nothing that identifies the enquirer is copied into the log.

## 5. Measurement definitions and limitations

### 5.1 What counts as an enquiry
A genuine request from a prospective client or hirer to discuss paid work. **Not counted:** email-button clicks (they can't be observed, and a click isn't an enquiry), spam, vendor pitches, job-board alerts and tests.

### 5.2 Source rules
**The subject line identifies the site's pre-filled email; it doesn't prove where the enquirer found Glen.** Anyone can type it, and a visitor can delete it.

| Situation | `source` |
|---|---|
| The subject is "Technology enquiry" **and** the enquirer says they found the website | `website-stated` |
| A different subject, but the enquirer says they found the website | `website-stated` |
| The subject is "Technology enquiry", with no statement of where they came from | `site-subject-unconfirmed` |
| A LinkedIn message, a recruiter, or a referral | `linkedin` / `recruiter` / `referral` |
| Anything else that's known | `other` |
| Can't tell | `unknown` |

When replying, Glen may ask "How did you hear about me?" as a normal part of the conversation. That isn't outreach.

### 5.3 Qualification
`qualified` means Glen can deliver it, the enquirer can plausibly pay or hire, and the scope is realistic. `pending` means not yet known. It's Glen's judgement.

### 5.4 Measures (counted at review, never estimated)
| Measure | Rule |
|---|---|
| M-a. Emails received with the "Technology enquiry" subject | rows with `website-stated` or `site-subject-unconfirmed` whose email used that subject (check in the mailbox at review) |
| M-b. Website enquiries, stated | `source = website-stated` |
| M-c. Website enquiries, possible but unconfirmed | `source = site-subject-unconfirmed`; **reported separately and never counted as website-proven** |
| M-d. Unknown source | `source = unknown` |
| M-e. Qualified opportunities | `qualified = qualified` |
| M-f. Contract-engineering opportunities | `category = contract-engineering` (total and qualified) |
| M-g. Consulting opportunities | `category = consulting` (total and qualified) |
| M-h. Work won | `outcome = won`, by category (amounts looked up in Xero only when needed) |
| M-i. Follow-ups open | `outcome` is `open` or `follow-up` |

### 5.5 Limitations
- There are **no starting values**. Before the baseline, counts are unknown, not zero.
- Volume may be low, so results are directional, not statistically meaningful.
- The subject line hints at the source; it doesn't prove it.
- Mail-app drafts that are never sent are invisible.
- Without a website code change (out of scope), the log can't show which page or button prompted an enquiry.
- With six fields, reply times (the 48-hour promise, D6) aren't logged. Glen can check them in the mailbox at review if needed.

## 6. Commercial measures, by pathway (observation only; no outreach)

### 6.1 Contract engineering
- **Where enquiries are expected:** mostly off the website (`linkedin`, `recruiter`, `referral`). [assumption]
- **Measures:** M-f total and qualified, then M-h won, broken down by `source`.
- **Real conversations** means rows reaching `qualified`. Unsolicited recruiter spam isn't logged.
- **The website's role here:** credibility when someone checks Glen out. It isn't measured directly.

### 6.2 Technology consulting
- **Where enquiries are expected:** the website email route, referrals, and occasionally the network.
- **Measures:** M-g total and qualified, M-b versus M-c (proven versus possible website origin), then M-h won.
- **Services actually requested:** the `notes` field may carry a brief service label (e.g. "M365 email migration"). At review, compare those labels against the five services shown on the site.

### 6.3 Progression to paid work
Track `qualified` → `won` per category. With low volume, review individual cases rather than ratios.

All of this only observes Glen's normal activity. Public positioning stays broad (D3), and nobody is contacted.

## 7. Privacy and data minimisation

- The log holds only dates and categories, plus at most 15 words of notes. There's no personal data, message content, credentials, client system details or financial amounts.
- The mailbox remains the source record.
- Keep the log private, in-house and outside this repository (§3.1). Never use iCloud, SaaS spreadsheets or the public website repo.
- **Retention:** keep rows through the baseline and its reviews. Clear `notes` once an opportunity closes, except a Xero reference for won work.
- Nothing about website visitors is collected.

## 8. Future experiments (recorded, not authorised)

| Item | Status | Prerequisite before any implementation |
|---|---|---|
| Headshot and LinkedIn link | Research only (C3) | Glen's preference; a suitable existing photo; LinkedIn's role under the in-house rule |
| Mobile CTA on the first screen | Hypothesis (MS-01: CTA at 790px of 812) | Baseline running; a separate approved code sprint |
| Case-study evidence (Epping) | Deferred (C5) | Glen lifts C5 |
| Positioning refinement | Not adopted; D3 stands | Baseline evidence |
| Per-button subject tags (MS-02 M2) | Hypothesis; needs code | A separately approved code sprint |
| Self-hosted analytics | Not planned (C4) | Volume that justifies the operating effort |
| AI-builder prototype or rebuild | **Not justified** | A material, measured problem plus evaluation criteria (MS-02 §7) |

## 9. Open questions and assumptions

1. **Log location:** is option A approved, or B, or another place?
2. Who logs enquiries arriving by LinkedIn and recruiters? (Assumed: Glen.)
3. Where is the glen@thedsouza.com mailbox hosted? Not inspected; it holds the source records.
4. **Assumption:** contract-engineering enquiries arrive mainly off-site.
5. **Assumption:** volume will be low, so reviews focus on individual cases.

## 10. Proposed review checkpoint

- **Week 2 after the start date:** a process check only. Is every genuine enquiry logged, and do the six fields work?
- **Week 4:** the first baseline review. Report M-a to M-i as counted, choose the next evaluation window from actual volume, and decide whether any §8 item is worth proposing.

## 11. Git and change control

- **This file:** `docs/WEB-CRO-MS-03-ENQUIRY-BASELINE-AND-VALIDATION-PLAN.md`, untracked. Its earlier draft from the same day was revised in place with Glen's approval; nothing else was touched.
- **Untouched:** website code, the uncommitted GHDC edit, `docs/WEB-CRO-MS-01-…`, `docs/WEB-CRO-MS-02-…`, and branches.
- **Not created:** no enquiry log, no Forgejo repository, no data recorded.
- **No other changes:** no analytics, outreach, production, hosting, external-service, billing or infrastructure changes.
- These CRO documents are separate from the GHDC change and must not be committed with it.
