# Content Architecture / Topic Clusters: hotelier.tools (en-US)

Audit date: 2026-10-15. Seed: "little hotelier". Scope: 25 en-US guides (`content/blog/en/*.md`), 10 `/tools/bot/*` feature pages, 17 `/tools/ui/*` pages plus `/tools/ui` and `/chrome-extensions`. This is analysis only. No articles were produced.

## Method and data limits

- I counted contextual (in-body) links by parsing every markdown link in `content/blog/en/*.md`, deduplicated per source post.
- I counted template links separately, from reading the components:
  - Sidebar CTA to `/tools/bot/{feature}` when the post sets `feature:` frontmatter.
  - "Related" widget (`pages/blog/[slug].vue`): top 3 posts scored by category, feature and tags.
  - `FeatureGuides` on `/tools/bot/*`: posts with `meta.feature === slug`, `.slice(0, 6)`.
  - `LatestGuides` on the home page: 4 posts, featured ones first.
- I checked live HTML with curl for `<title>`, description, canonical and `/blog/` hrefs.
- SERP overlap came from the WebSearch tool, which returns about 9-10 URLs per query. That is close to, but not the same as, Google's top 10. I had no search-volume source, so volume is `null` throughout.
- Most "little hotelier + X" SERPs are thin, long-tail, and dominated by directories (Capterra, GetApp, CostBench) and littlehotelier.com.

## 1. Critical issues found during the audit (they affect cluster ownership)

| # | Issue | Evidence | Impact |
|---|---|---|---|
| C1 | `/tools/ui` and all 16 script pages serve the home page's **Spanish** `<title>` and meta description on `lang="en-US"` URLs | curl: `/tools/ui`, `/tools/ui/prices-display`, `/tools/ui/show-booking-commissions` all return `<title>Hotelier Tools - Panel para hoteles con Little Hotelier: facturas, precios y huéspedes</title>`. `/tools/ui/show-chekin` and `/tools/ui/tables-full-width` return the same title. `/tools/ui/instructions` has its own title but it is also Spanish ("Instrucciones de Instalación - Scripts de Mejora Web"). `pages/tools/ui/index.vue` and `[slug].vue` have no `setSEO`/`useSeoMeta` call | 17 duplicate titles plus 1 more Spanish title, all on English URLs. None of the 17 feature pages can rank for its own long-tail ("little hotelier calendar prices", "booking.com commission little hotelier", etc.) |
| C2 | `/chrome-extensions` has a hardcoded **Spanish H1** ("Extensiones de Chrome para Little Hotelier") and H2 ("Guía de Instalación Detallada") on the English page, and it duplicates the `/tools/ui` catalog | `pages/chrome-extensions.vue:8`, `:155`. Live WebFetch | Three URLs compete for "little hotelier chrome extension(s)" (see cannibalization R2) |
| C3 | `/tools/bot/api-mcp` silently drops `what-is-mcp-server-hotels` | 7 posts have `feature: api-mcp`. `useBlogPosts` sorts by date and then title (every post is dated 2026-10-03), and `FeatureGuides` keeps 6. "What is an MCP server..." sorts last alphabetically. Confirmed live: 6 `/blog/` links, and what-is-mcp is missing | The informational hub of the AI cluster gets no link from its own feature page |
| C4 | `/tools/bot/automations` shows **0 guides**, and `/tools/bot/dashboard` gets only `little-hotelier-tips` | No post sets `feature: automations`. Live curl on `/tools/bot/automations` returns 0 `/blog/` hrefs | Feature pages without supporting content |
| C5 | There are no crawlable category/hub URLs. The `/blog` category filter is client-side (`pages/blog/index.vue:109`) | `pages/blog/` contains only `index.vue` and `[slug].vue` | Clusters have no hub URL. Topical authority depends entirely on in-body links |

## 2. Current hub/spoke map (as it exists today)

There is no declared pillar. The de facto hubs, judged by outbound breadth, are `little-hotelier-integrations` (10 blog plus 9 tool links), `little-hotelier-tips` (7 plus 9) and `little-hotelier-chrome-extensions` (3 plus 19 tool links).

```
(no site pillar) ── /blog index (flat list, client-side filter)
│
├─ AI & MCP ............ what-is-mcp-server-hotels (6 in) ⇄ connect-claude (6 in, featured) ⇄ connect-chatgpt (4) ⇄ mcp-claude-code-cursor-vscode (4)
│                        └ ai-assistant-hotel-front-desk (3)              → /tools/bot/api-mcp, /tools/bot/ai-assistant
├─ Data & integrations . little-hotelier-integrations (3 in, 10 out) ⇄ little-hotelier-api (7 in, featured) ⇄ export-...-excel (7 in)
│                                                                       → /tools/bot/api-mcp
├─ Invoicing ........... download-all-...-invoices (4 in, featured) ⇄ send-invoice-to-guest-at-checkout (6 in)   → /tools/bot/invoicing
├─ Front desk / checks . hotel-front-desk-checklist-automation (5 in) ⇄ booking-com-invalid-card-no-show (4) ⇄ hotel-do-not-rent-list (2)
│                                                                       → /tools/bot/automated-checks
├─ Pricing & OTA ....... dynamic-pricing-little-hotelier (4 in) ⇄ little-hotelier-cta-ctd-stop-sell (3) ⇄ booking-com-commission (4)
│                        └ hotel-waitlist-sold-out-dates (2)             → /tools/bot/dynamic-pricing, /tools/bot/waitlist
├─ Guest messaging ..... whatsapp-little-hotelier (4 in, 1 out) ⇄ booking-com-guest-messages (2 in, 2 out)   → /tools/bot/guest-inbox
├─ Compliance .......... guest-registration-rules-by-country (4 in) ⇄ ses-hospedajes-little-hotelier (3) ⇄ ine-hotel-occupancy-survey (2)
│                                                                       → /tools/bot/automated-checks, /tools/bot/ine-reports
└─ Product / meta ...... little-hotelier-tips (3 in) → chrome-extensions (4 in) → 17 x /tools/ui/*
                         little-hotelier-alternatives (0 in) ← ORPHAN (body links)
```

The compliance and front-desk clusters are fully meshed: every member links to every other member. AI & MCP is nearly complete. Guest messaging is the weakest, with only two posts and four contextual links in total between them.

### Contextual inbound / outbound per guide (unique source posts)

| Guide | In (body) | Out blog | Out tools | `feature:` (sidebar CTA) |
|---|---|---|---|---|
| little-hotelier-api | 7 | 6 | 1 | api-mcp |
| export-little-hotelier-reservations-excel | 7 | **2** | 1 | api-mcp |
| what-is-mcp-server-hotels | 6 | 5 | 1 | api-mcp (dropped from feature page, C3) |
| connect-claude-to-little-hotelier | 6 | 6 | 1 | api-mcp |
| send-invoice-to-guest-at-checkout | 6 | **2** | 3 | invoicing |
| hotel-front-desk-checklist-automation | 5 | 4 | 4 | automated-checks |
| booking-com-commission | 4 | 3 | 3 | **none** |
| booking-com-invalid-card-no-show | 4 | 3 | 2 | automated-checks |
| connect-chatgpt-to-little-hotelier | 4 | 6 | 1 | api-mcp |
| download-all-little-hotelier-invoices | 4 | 3 | 2 | invoicing |
| dynamic-pricing-little-hotelier | 4 | 3 | 1 | dynamic-pricing |
| guest-registration-rules-by-country | 4 | 3 | 4 | **none** |
| little-hotelier-chrome-extensions | 4 | 3 | 19 | **none** |
| little-hotelier-mcp-claude-code-cursor-vscode | 4 | 5 | 1 | api-mcp |
| whatsapp-little-hotelier | 4 | **1** | 1 | guest-inbox |
| ai-assistant-hotel-front-desk | 3 | 4 | 2 | ai-assistant |
| little-hotelier-cta-ctd-stop-sell | 3 | **2** | 1 | dynamic-pricing |
| little-hotelier-integrations | 3 | 10 | 9 | api-mcp |
| little-hotelier-tips | 3 | 7 | 9 | dashboard |
| ses-hospedajes-little-hotelier | 3 | 3 | 3 | **none** |
| booking-com-guest-messages | **2** | **2** | 1 | guest-inbox |
| hotel-do-not-rent-list | **2** | **2** | 1 | automated-checks |
| hotel-waitlist-sold-out-dates | **2** | 4 | 1 | waitlist |
| ine-hotel-occupancy-survey | **2** | **2** | 3 | ine-reports |
| little-hotelier-alternatives | **0** | 5 | 1 | **none** |

## 3. Orphaned and weakly linked pages

**Orphan**
- `/blog/little-hotelier-alternatives`: no in-body links. It is reachable only from the `/blog` index and the "Related" widget, which shows it on `little-hotelier-tips`. This is the site's main commercial-investigation page for the seed, and it has no `feature:` CTA either.

**Weak (fewer than 3 contextual inbound links)**
- `ine-hotel-occupancy-survey`, `hotel-waitlist-sold-out-dates`, `hotel-do-not-rent-list` and `booking-com-guest-messages` have 2 each.

**Weak outbound (dead ends)**
- `whatsapp-little-hotelier` has 1 blog link.
- `booking-com-guest-messages`, `export-...-excel`, `send-invoice-...`, `cta-ctd-stop-sell`, `do-not-rent-list` and `ine-...` have 2 blog links each.

**Feature pages**
- `/tools/bot/dashboard`: 0 in-body links from any guide. It gets only the sidebar CTA from `little-hotelier-tips`.
- `/tools/bot/automations`, `/ai-assistant`, `/waitlist` and `/ine-reports`: 1 in-body link each.
- `/tools/ui/tables-full-width`, `compact-ui-reservation-details`, `change-inventory-name` and `add-button-check-front-desk`: 1 inbound each, all from the chrome-extensions post.
- `/tools/ui/*` (17 pages) and `/chrome-extensions` link to **no** guide. Every `/tools/ui` page is a one-way dead end into the blog.

**Posts with no `feature:` frontmatter (no sidebar CTA)**
- `booking-com-commission`, `guest-registration-rules-by-country`, `ses-hospedajes-little-hotelier`, `little-hotelier-alternatives`, `little-hotelier-chrome-extensions`.

## 4. SERP overlap matrix (WebSearch, top ~10)

| Keyword A | Keyword B | Shared URLs | Tier | Reading |
|---|---|---|---|---|
| little hotelier mcp | connect claude to little hotelier | 0 | separate | Different SERPs: news vs Claude-connector directories |
| little hotelier mcp | what is mcp server for hotels | 1 (traveldailynews ?p=433636) | separate | |
| little hotelier mcp | little hotelier api | 0 | separate | |
| connect claude to little hotelier | what is mcp server for hotels | 0 | separate | |
| little hotelier api | little hotelier integrations | 2 (supergood.ai/docs/little-hotelier-api, itqlick /integrations) | interlink | Separate posts are justified. They already link both ways |
| little hotelier chrome extension | little hotelier tips | 0 | separate | |
| little hotelier chrome extension | little hotelier api | 1 (intelbee) | separate | Brand-profile noise |
| little hotelier alternatives | little hotelier pricing | 0 | separate | Directories vs CostBench/Roommaster. Pricing needs its own page |
| little hotelier verifactu | little hotelier api | 2 (landbase, wikipedia/Siteminder) | interlink (noise) | Brand pages, not topical |
| little hotelier invoice | (either invoicing post) | n/a | intent mismatch | SERP is about paying your own LH subscription invoice and VERI*FACTU. Neither post matches |

Conclusion: Google treats every pair above as a distinct intent, so no merges are needed. The cannibalization risks below are on-site: duplicated target keywords and overlapping sections, not overlapping SERPs.

## 5. Cannibalization risks

**R1. MCP / API quartet (Medium)**
- Pages: `connect-claude`, `mcp-claude-code-cursor-vscode`, `what-is-mcp-server-hotels`, `little-hotelier-api`, plus `/tools/bot/api-mcp`.
- Problems:
  - "little hotelier mcp" is a frontmatter keyword in 3 posts.
  - what-is-mcp has an H2 "Does Little Hotelier have an MCP server?".
  - mcp-claude-code has an H2 "MCP or the REST API: which should you use?", which overlaps the API post.
  - The API post's keywords include "little hotelier integration", which belongs to the integrations post.
- Ownership:
  - `/tools/bot/api-mcp` owns "little hotelier mcp server" and "little hotelier api" (commercial/product).
  - `connect-claude` owns "little hotelier mcp" and "connect claude to little hotelier" (setup).
  - `what-is-mcp` owns "what is an mcp server" and "mcp server for hotels" and the "which PMS have MCP" comparison.
  - `mcp-claude-code` owns the dev-tool queries (claude code / cursor / vscode mcp.json).
  - `little-hotelier-api` owns "does little hotelier have an api", "api key" and "siteminder api".
- Actions:
  - Remove "little hotelier mcp" from the what-is-mcp and mcp-claude-code keywords.
  - Remove "little hotelier integration" from the little-hotelier-api keywords.
  - Cut the what-is-mcp section "Does Little Hotelier have an MCP server?" to 2-3 sentences plus a link to connect-claude.
  - Cut the mcp-claude-code section "MCP or the REST API" to a summary plus a link to little-hotelier-api.

**R2. Chrome extensions triad (High)**
- Pages: `/chrome-extensions`, `/tools/ui`, `/blog/little-hotelier-chrome-extensions`, plus 17 `/tools/ui/*` pages.
- `/chrome-extensions` and `/tools/ui` are both script catalogs. One has a Spanish H1 (C2) and the other a Spanish title (C1).
- The blog post is currently the only page with correct English metadata. Its keywords also claim three long-tails that belong to individual `/tools/ui` pages:
  - "little hotelier calendar prices" belongs to `prices-display`.
  - "little hotelier full width" belongs to `tables-full-width` / `full-width-reservation-table`.
  - "little hotelier booking.com commission" belongs to `show-booking-commissions` (and `booking-com-commission`).
- Actions:
  1. Consolidate the catalogs. 301 `/chrome-extensions` to `/tools/ui`, or the reverse, and keep one.
  2. Add a per-page `setSEO` to `/tools/ui/index.vue` and `[slug].vue`, with titles such as "Prices Display: show rates in the Little Hotelier calendar (free script)".
  3. The blog post keeps the head term "little hotelier chrome extension(s)" plus "tampermonkey / userscripts safe / how to install" (informational).
  4. `/tools/ui` owns "little hotelier tampermonkey scripts" (catalog).
  5. Each `/tools/ui/*` page owns its feature long-tail. Drop those long-tails from the blog post's keywords.

**R3. "little hotelier invoice" (Low-Medium)**
- The keyword sits in both `download-all-...-invoices` and `send-invoice-...`.
- Ownership: download-all owns "export invoices / invoice report / quarterly". send-invoice owns "send invoice to guest / booking.com guest invoice".
- Action: drop the bare "little hotelier invoice" from send-invoice. The live SERP is about SaaS billing and VERI*FACTU (see gap G1).

**R4. Booking.com commission (Low)**
- Pages: `booking-com-commission`, `little-hotelier-chrome-extensions`, `/tools/ui/show-booking-commissions`.
- Action: assign the keyword to the guide and remove it from the chrome-extensions frontmatter.

**R5. tips vs chrome-extensions (Low)**
- The "Free userscript tweaks" section in tips duplicates the extensions post. SERP overlap is 0.
- Action: keep that section to 3-4 bullets plus a link.

**R6. "little hotelier pricing" (Low today, Medium once a pricing page exists)**
- The keyword is listed on `little-hotelier-alternatives`, but its SERP is a different intent (CostBench, Roommaster).
- Action: move it to a dedicated pricing page (G2) and remove it from alternatives.

**R7. Front desk (Low)**
- `hotel-front-desk-checklist-automation` and `ai-assistant-hotel-front-desk` share "front desk" but serve different intents (checklist vs AI tool).
- Action: keep them separate and add a cross-link.

## 6. Recommended architecture

There is one site pillar and 7 topical clusters. This deviates from the 2-5 cluster template because it is a site-level map of 25 existing posts. Each cluster stays at 2-4 spokes.

- **Site pillar:** upgrade `little-hotelier-tips` (2,077 words, owns "little hotelier guide / tutorial / how to use / manual") to a 2,500-4,000-word pillar. Add a "Guides by topic" section that links to every cluster hub, `alternatives`, `chrome-extensions` and `/tools/bot/dashboard`. Alternatively, ship crawlable `/blog/category/{id}` hub pages (C5). Ideally do both.

| Cluster | Hub | Spokes | Commercial target |
|---|---|---|---|
| AI & MCP | what-is-mcp-server-hotels | connect-claude, connect-chatgpt, mcp-claude-code-cursor-vscode, ai-assistant-hotel-front-desk | /tools/bot/api-mcp, /ai-assistant |
| Data & integrations | little-hotelier-integrations | little-hotelier-api, export-...-excel, (gap) xero/quickbooks export | /tools/bot/api-mcp |
| Invoicing | download-all-...-invoices | send-invoice-...-checkout, (gap) verifactu | /tools/bot/invoicing |
| Front desk & risk | hotel-front-desk-checklist-automation | invalid-card-no-show, do-not-rent-list, (gap) automations guide | /tools/bot/automated-checks, /automations |
| Pricing & OTA | dynamic-pricing-little-hotelier | cta-ctd-stop-sell, booking-com-commission, hotel-waitlist-sold-out-dates | /tools/bot/dynamic-pricing, /waitlist |
| Guest messaging | whatsapp-little-hotelier (hub until G-msg exists) | booking-com-guest-messages, (cross) ai-assistant | /tools/bot/guest-inbox |
| Compliance | guest-registration-rules-by-country | ses-hospedajes, ine-hotel-occupancy-survey, (gap) verifactu | /tools/bot/automated-checks, /ine-reports |
| Product (pillar spokes) | little-hotelier-tips (pillar) | alternatives, chrome-extensions, (gap) pricing, (gap) vs-cloudbeds | /tools/bot/dashboard, /tools/ui |

## 7. Gap keywords/topics (priority order)

| # | Topic / primary keyword | Intent | Cluster | Why |
|---|---|---|---|---|
| G1 | **Little Hotelier VERI*FACTU** ("verifactu hoteles", "little hotelier verifactu") | Info | Invoicing ↔ Compliance (bridge) | Spain deadlines: 1 Jan 2027 for companies, 1 Jul 2027 for sole traders. The SERP holds only a littlehotelier.com/es post and a SiteMinder legal page. It fits the Spanish audience and the invoicing feature |
| G2 | **Little Hotelier pricing 2026** (plans, Basics/Pro/Revenue Optimiser, hidden costs) | Commercial | Product | The SERP belongs to CostBench/Roommaster with conflicting numbers. It frees `alternatives` from R6 |
| G3 | **Little Hotelier vs Cloudbeds** (then vs Lodgify / Beds24) | Commercial | Product (spoke of alternatives) | CostBench ranks with a pricing-only page. The site already has alternatives content to deepen |
| G4 | **Little Hotelier reports** (occupancy, ADR, RevPAR, how to run them) | Info | Data | A RoomPriceGenie help article ranks for it. This gives `/tools/bot/dashboard` its first real guide (C4) |
| G5 | **Little Hotelier automations** (payment reminders, scheduled exports, pre-arrival tasks) | Info/Commercial | Front desk | `/tools/bot/automations` has 0 guides (C4) |
| G6 | **Little Hotelier booking engine setup / booking button on WordPress or Wix** | Info | Pricing & OTA | Direct bookings link naturally to commission and waitlist. The SERP is vendor-only marketing |
| G7 | **Little Hotelier Airbnb / channel sync and overbooking fixes** | Info (troubleshooting) | Pricing & OTA | LH ranks only in IT/ES/DE. There is no English troubleshooting content |
| G8 | **Little Hotelier group bookings (multiple rooms)** | Info | Front desk | Reviewers cite it as a complaint, and there is no how-to |
| G9 | **Little Hotelier new Platform vs Classic experience** | Info | Product | The help centre splits customers who signed up from May 2025 from earlier ones. No third-party explainer exists, so a first post would face no competition |
| G10 | **Little Hotelier Xero / QuickBooks export** | Info | Data ↔ Invoicing | This is only a section of the integrations post today. A deep spoke would serve accountant intent |

## 8. Internal link matrix recommendations

### P0: template/code fixes (site-wide effect)
1. Add `setSEO` to `/tools/ui/index.vue` and `/tools/ui/[slug].vue` (C1). Fix the Spanish H1/H2 on `/chrome-extensions` and consolidate it with `/tools/ui` (C2).
2. `FeatureGuides`: raise the limit to 8, or sort `featured` and hub posts first, so `what-is-mcp-server-hotels` appears on `/tools/bot/api-mcp` (C3).
3. Add a `guides: [slug, ...]` frontmatter field to `content/scripts/en/*.md` and render a FeatureGuides-style block on `/tools/ui/[slug]`:
   - prices-display → dynamic-pricing, chrome-extensions
   - show-booking-commissions → booking-com-commission
   - extra-invoice-print-button, bank-transfer-email-button → send-invoice, download-all-invoices
   - update-payment-link-button → invalid-card-no-show
   - show-chekin, easy-save-province-country → guest-registration, ses-hospedajes, ine-survey
   - full-width-reservation-table, update-number-adults, add-button-check-front-desk, auto-refresh-inactivity → front-desk-checklist
   - every page → chrome-extensions (install guide)
4. Add `feature:` frontmatter:
   - booking-com-commission → dynamic-pricing
   - guest-registration-rules-by-country → automated-checks
   - ses-hospedajes → automated-checks
   - little-hotelier-alternatives → dashboard
   - chrome-extensions: add a UI-script CTA variant pointing to `/tools/ui`
5. Add a link from `/chrome-extensions` (or the surviving catalog) to `/blog/little-hotelier-chrome-extensions`.

### P1: mandatory in-body links (pillar ⇄ hubs, orphan rescue)

| From | To | Anchor (suggested) |
|---|---|---|
| little-hotelier-tips (pillar) | what-is-mcp-server-hotels | what an MCP server is |
| little-hotelier-tips | dynamic-pricing-little-hotelier | dynamic pricing on Little Hotelier |
| little-hotelier-tips | download-all-little-hotelier-invoices | download all your invoices at once |
| little-hotelier-tips | guest-registration-rules-by-country | guest registration rules by country |
| little-hotelier-tips | whatsapp-little-hotelier | use WhatsApp with Little Hotelier |
| little-hotelier-tips | little-hotelier-alternatives | Little Hotelier alternatives |
| little-hotelier-tips | /tools/bot/dashboard | Hotelier Tools dashboard |
| each hub (integrations, what-is-mcp, download-all-invoices, checklist, dynamic-pricing, whatsapp, guest-registration) | little-hotelier-tips | Little Hotelier guide / tips |
| little-hotelier-integrations | little-hotelier-alternatives | if an integration you need is missing |
| little-hotelier-api | little-hotelier-alternatives | PMS with an open API |
| little-hotelier-chrome-extensions | little-hotelier-alternatives | compare other PMS |

### P2: recommended in-body links (within clusters, weak-page support)

| From | To | Reason |
|---|---|---|
| export-...-excel | little-hotelier-integrations | spoke → hub (missing) |
| export-...-excel | download-all-little-hotelier-invoices | sibling (accountant export) |
| export-...-excel | ine-hotel-occupancy-survey | guest nationality data feeds INE (ine has 2 inbound) |
| download-all-little-hotelier-invoices | little-hotelier-integrations | Xero/QuickBooks |
| whatsapp-little-hotelier | ai-assistant-hotel-front-desk | AI-drafted replies (whatsapp has 1 outbound) |
| whatsapp-little-hotelier | hotel-waitlist-sold-out-dates | offer freed rooms via WhatsApp (makes the existing one-way link reciprocal) |
| whatsapp-little-hotelier | booking-com-invalid-card-no-show | contacting the guest about a card |
| booking-com-guest-messages | ai-assistant-hotel-front-desk | auto-reply drafting |
| ai-assistant-hotel-front-desk | booking-com-guest-messages | reciprocal |
| ai-assistant-hotel-front-desk | hotel-front-desk-checklist-automation | R7 cross-link |
| hotel-front-desk-checklist-automation | ai-assistant-hotel-front-desk | R7 cross-link |
| hotel-front-desk-checklist-automation | hotel-waitlist-sold-out-dates | cancellations → waitlist (waitlist has 2 inbound) |
| little-hotelier-cta-ctd-stop-sell | booking-com-commission | sibling |
| little-hotelier-cta-ctd-stop-sell | hotel-waitlist-sold-out-dates | stop sell vs waitlist |
| booking-com-commission | little-hotelier-cta-ctd-stop-sell | sibling |
| booking-com-guest-messages | hotel-do-not-rent-list | flagging problem guests (dnr has 2 inbound) |
| dynamic-pricing-little-hotelier | /tools/ui/prices-display | see prices in the calendar |
| little-hotelier-tips | /tools/bot/dashboard and /tools/bot/automations | feature pages with near-zero links |
| little-hotelier-mcp-claude-code-cursor-vscode | ai-assistant-hotel-front-desk | sibling in the AI cluster |

### P3: optional cross-cluster links
- ses-hospedajes ⇄ (G1) verifactu
- send-invoice ⇄ (G1) verifactu
- alternatives ⇄ (G2) pricing ⇄ (G3) vs-cloudbeds
- little-hotelier-api ⇄ (G10) xero export
- dynamic-pricing ⇄ (G6) booking engine

## 9. Pre-delivery checklist (current state → after recommendations)

- Unique primary keyword per post: **fails today** (R1 "little hotelier mcp" x3, R3 "little hotelier invoice" x2). Passes after the P1 keyword edits.
- Every spoke has ≥3 contextual inbound links: **fails** for 5 posts (alternatives 0; ine, waitlist, do-not-rent, guest-messages 2 each). Passes after P1/P2.
- Spoke → pillar / pillar → spoke: **fails**, since no pillar is declared. Passes after the tips pillar upgrade.
- Orphans: 1 blog post (alternatives) and 17 `/tools/ui` pages with no outbound to guides.
- Word counts: all 25 posts fall between 1,743 and 2,558 words. That is above the 1,200-1,800 spoke spec but fine for this content. The pillar candidate (2,077) needs to reach 2,500 or more.
- SERP support: no pair reaches the 4-6 "same cluster" threshold. Clusters are topical/feature-based, which is expected given these thin long-tail SERPs. No merges are recommended.

## 10. Structured findings (audit-data.json, category "Content Architecture")

```json
{
  "category": "Content Architecture",
  "seed_keyword": "little hotelier",
  "created_at": "2026-10-15",
  "findings": [
    {"id": "CA-01", "severity": "critical", "title": "/tools/ui and its 16 script pages serve the Spanish home-page title and description on en-US; /tools/ui/instructions title is also Spanish", "evidence": "curl <title>Hotelier Tools - Panel para hoteles con Little Hotelier...; no setSEO in pages/tools/ui/index.vue or [slug].vue", "fix": "Add per-page setSEO with an English, feature-specific title and description"},
    {"id": "CA-02", "severity": "high", "title": "/chrome-extensions has a hardcoded Spanish H1/H2 and duplicates the /tools/ui catalog (3-way cannibalization of 'little hotelier chrome extension')", "evidence": "pages/chrome-extensions.vue:8,155", "fix": "Consolidate into one catalog (301), translate via i18n, blog post owns the informational head term"},
    {"id": "CA-03", "severity": "medium", "title": "FeatureGuides slice(0,6) drops what-is-mcp-server-hotels from /tools/bot/api-mcp", "evidence": "7 posts have feature api-mcp; same-date sort falls back to title", "fix": "Raise the limit or prioritize featured/hub posts"},
    {"id": "CA-04", "severity": "medium", "title": "/tools/bot/automations has 0 guides; /tools/bot/dashboard has 0 in-body links", "fix": "Write G5 and G4; link from the tips pillar"},
    {"id": "CA-05", "severity": "high", "title": "little-hotelier-alternatives is orphaned (0 in-body inbound)", "fix": "Link from tips, integrations, api and chrome-extensions"},
    {"id": "CA-06", "severity": "medium", "title": "Keyword 'little hotelier mcp' targeted by 3 posts; MCP/API sections overlap", "pages": ["connect-claude-to-little-hotelier", "little-hotelier-mcp-claude-code-cursor-vscode", "what-is-mcp-server-hotels", "little-hotelier-api"], "fix": "Assign owners per section 5 R1; trim the overlapping H2s"},
    {"id": "CA-07", "severity": "low", "title": "'little hotelier invoice' targeted by 2 posts; live SERP intent is SaaS billing and VERI*FACTU", "fix": "Split keywords; add a VERI*FACTU guide"},
    {"id": "CA-08", "severity": "medium", "title": "No pillar and no crawlable category hubs; blog filter is client-side", "fix": "Upgrade little-hotelier-tips to a pillar and/or add /blog/category/{id} pages"},
    {"id": "CA-09", "severity": "medium", "title": "/tools/ui/* and /chrome-extensions link to no guides (one-way)", "fix": "Add guides frontmatter and render a related-guides block"},
    {"id": "CA-10", "severity": "low", "title": "5 posts have no feature frontmatter, so no sidebar CTA", "pages": ["booking-com-commission", "guest-registration-rules-by-country", "ses-hospedajes-little-hotelier", "little-hotelier-alternatives", "little-hotelier-chrome-extensions"]},
    {"id": "CA-11", "severity": "low", "title": "Weak inbound (2): ine-hotel-occupancy-survey, hotel-waitlist-sold-out-dates, hotel-do-not-rent-list, booking-com-guest-messages; weak outbound: whatsapp-little-hotelier (1)"}
  ],
  "serp_matrix": {
    "pairs": [
      {"a": "little hotelier mcp", "b": "connect claude to little hotelier", "shared": 0},
      {"a": "little hotelier mcp", "b": "what is mcp server for hotels", "shared": 1},
      {"a": "little hotelier mcp", "b": "little hotelier api", "shared": 0},
      {"a": "connect claude to little hotelier", "b": "what is mcp server for hotels", "shared": 0},
      {"a": "little hotelier api", "b": "little hotelier integrations", "shared": 2},
      {"a": "little hotelier chrome extension", "b": "little hotelier tips", "shared": 0},
      {"a": "little hotelier chrome extension", "b": "little hotelier api", "shared": 1},
      {"a": "little hotelier alternatives", "b": "little hotelier pricing", "shared": 0}
    ],
    "note": "WebSearch top ~10, not Google; volumes unavailable"
  },
  "gap_keywords": ["little hotelier verifactu", "little hotelier pricing", "little hotelier vs cloudbeds", "little hotelier reports", "little hotelier automations", "little hotelier booking engine setup", "little hotelier airbnb sync overbooking", "little hotelier group bookings", "little hotelier platform vs classic", "little hotelier xero export"],
  "scorecard": {"posts": 25, "orphans": 1, "posts_below_3_inbound": 5, "duplicate_primary_keywords": 2, "feature_pages_without_guides": 1, "ui_pages_with_wrong_lang_title": 18, "ui_pages_with_duplicate_title": 17}
}
```
