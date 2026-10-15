# Action Plan — hotelier.tools (2026-10-15)

Health Score 70/100. There are no Critical items: nothing blocks indexing. Each item lists what it **depends on**, a check that tells you if it **failed**, and an **indicator** to watch.

## Status — 2026-10-15 (fixes deployed)

| Item | Status | Notes |
|---|---|---|
| 1.1 Per-page SEO + hreflang | Done | Every page sets its own title/description/alternates; Spanish `app.head` fallback removed; Thai raw-key titles fixed; English fallback for any untranslated string (`i18n/i18n.config.ts`) |
| 1.2 Favicon / logo 404 | Done | `public/favicon.ico`, `public/logo.png` |
| 1.3 Homepage stats | Done | Server-rendered, and now counted facts (scripts, guides, languages, features) instead of unsourced percentages |
| 1.4 Organization + i18n metadata | Done | Single identity (`sameAs` GitHub; Twitter removed), `inLanguage`/`og:locale`/hreflang from one language tag per locale (`en-US`, `en-GB`, `es`, `fr`…) |
| 1.5 Title defects | Done | Brand no longer duplicated; contact "Immediate response" now "fast response during support hours" |
| 1.6 Sitemap hygiene | Done | Declared once, 301 for `/sitemap.xml`, consistent hreflang; `lastmod` only where a real date exists (guides) |
| 2.1 Trust pages + named author | Done | `/about`, `/privacy`, `/terms` in 9 languages; guides credit Juan Manuel Béc. (Person schema). Legal text needs owner review (NIF/address for LSSI, analytics consent, liability terms) |
| 2.2 Mobile LCP | Partly | Below-the-fold homepage sections hydrate on visible, icons bundled locally, unused Google Fonts module removed. Not re-measured yet |
| 2.3 `/tools/ui` pages | Done | 16 scripts rewritten from their source (300-450 words) in 9 languages; `/chrome-extensions` merged into `/tools/ui` (301); install guide translated |
| 2.4 Feature pages + homepage | Done | 250-400 unique words per feature in 9 languages; H1 names Little Hotelier; tools grid rebuilt; FAQ answers server-rendered |
| 2.5 Mobile UX + security headers | Done | Overflow, 44px targets, aria-labels; `nosniff`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, CSP `frame-ancestors`; images cached 7 days |
| 2.6 Internal linking | Done | Every guide has 3+ inbound links in every language; alternatives no longer orphaned |
| 3.1 Chrome Web Store listing | Open | Owner action |
| 3.2-3.3 Listings and off-site mentions | Open | Owner action |
| 3.4 Gap content (new guides) | Open | Not started |
| 3.5 Schema completion | Done | All structured data server-rendered in one graph: BlogPosting + Person author, BreadcrumbList, SoftwareApplication (free offer until 2027-01-10), FAQ questions |
| 3.6 Agent/AI extras | Done | Richer `llms.txt`, `/.well-known/api-catalog`, IndexNow key + GitHub Action, answer-first API/MCP page |
| Extra | Done | Fake 4.8★/150 rating removed; 392 junk prerendered pages (`/de/de/…`) no longer generated; 33 PNG screenshots served as WebP (-42%); missing guides translated to id/th; all locale keys complete |

## Phase 1 — High-priority code fixes (Week 1)

### 1.1 Per-page SEO for template-less pages [High · ~3 h]
- **What:**
  - Call `useSEO().setSEO({title, description})` and `useLocaleHead()` in:
    - `pages/tools/ui/[slug].vue` (from `doc.title` and `doc.description`)
    - `pages/tools/ui/index.vue`
    - `pages/tools/ui/instructions.vue`
    - `pages/chrome-extensions.vue`
    - `pages/documentation.vue`
    - `pages/marketing/*`
    - `pages/contact.vue`
  - Replace the Spanish `app.head` title and description fallback in `nuxt.config.ts:151-161` with neutral English, or remove it.
- **Why:** about 170 URLs share one Spanish title and description and have no hreflang.
- **Unblocks:** 2.3 (expanding the ui pages) and 3.4 (Chrome keyword ownership).
- **Failed if:** `curl -s https://hotelier.tools/tools/ui/compact-calendar-ui | grep -c hreflang` returns 0, or the title still contains "Panel para hoteles".
- **Indicator:** GSC → Pages → "Duplicate, Google chose different canonical" and impressions for `/tools/ui/*`.

### 1.2 Fix favicon and logo 404s [High · 15 min]
- **What:** add `public/favicon.ico` and `public/logo.png`, or repoint `nuxt.config.ts` (`app.head.link`, `schemaOrg.identity.logo`) and `composables/useSEO.ts` at existing assets.
- **Failed if:** either URL still returns 404, or Rich Results Test shows no logo.
- **Indicator:** the favicon appears in mobile SERP snippets within about 2–4 weeks.

### 1.3 Server-render the homepage stats [High · 30 min]
- **What:** in `components/StatsSection.vue:40`, initialise with the real values rather than `ref([0,0,0,0])`, and animate only on the client. Add a source line, or drop claims you can't back up (for example "95% error reduction").
- **Failed if:** `curl -s https://hotelier.tools/ | grep "0%"` still matches the stats block.

### 1.4 Merge the Organization entity and i18n metadata [High · 1.5 h]
- **What:**
  - Keep only `schemaOrg.identity`, with an ImageObject logo, `sameAs` (GitHub, X, LinkedIn) and `contactPoint`.
  - Delete `setStructuredData('Organization')` and the dead SearchAction branch.
  - Translate `seo.site.description` for every locale.
  - Derive `inLanguage` and `og:locale` from the i18n locale `iso` code.
- **Depends on:** 1.2, because the logo has to exist first.
- **Failed if:** validator.schema.org shows two Organization nodes, or `og:locale` is anything other than `xx_YY`.

### 1.5 Title defects and quick copy fixes [Low · 30 min]
- **What:**
  - Fix the "Contact  our team" double space and the duplicated "| Hotelier Tools" on `/faq`, `/marketing` and `/contact`.
  - Fix the ES typos and "TaperMonkey".
  - Change the "Immediate response" claim.

### 1.6 Sitemap hygiene [Low–Medium · 1 h]
- **What:**
  - Declare only `/sitemap_index.xml`, and remove the self-referencing `sitemap.sources`.
  - Use a single hreflang code scheme in the sitemap, including en-GB.
  - Set `lastmod` from git or content dates.
- **Failed if:** any child sitemap still contains both `hreflang="en"` and `hreflang="en-US"` for one URL.
- **Indicator:** GSC Sitemaps → discovered vs indexed ratio.

## Phase 2 — High-impact improvements (Weeks 2–3)

### 2.1 Trust pages and a named author [High · ~3–4 h]
- **What:**
  - **`/about`:** who runs the site, hotel and ops background, independence from SiteMinder, GitHub link.
  - **`/privacy` and `/terms`:** how Little Hotelier credentials are stored and encrypted, GDPR, retention.
  - **Guides:** a named Person author and bio, plus a visible "Updated" date.
  - **Contact:** move from the outlook.com alias to a domain email.
- **Why:** it is the weakest E-E-A-T pillar, and the contact form currently links to a privacy policy that doesn't exist. That is a legal exposure as well as a ranking factor.
- **Unblocks:** 3.1–3.3, because external listings need a canonical entity.
- **Failed if:** `/about` or `/privacy` returns 404, or BlogPosting `author.@type` is still Organization only.

### 2.2 Mobile LCP under 2.5 s [Medium · ~4 h]
- **What:**
  - Enable Nuxt `features.inlineStyles` and purge unused CSS.
  - Lazy-hydrate below-the-fold showcase and process components (`hydrate-on-visible` / `LazyX`).
  - Bundle the icons (Nuxt Icon `clientBundle`).
  - Remove the unused `@nuxtjs/google-fonts` and trim font weights.
- **Independent:** can run in parallel with everything else.
- **Failed if:** Lighthouse mobile LCP on `/` stays above 2.5 s, median of 3 runs.
- **Indicator:** once traffic qualifies, CrUX p75 LCP (via `/seo google` after adding an API key).

### 2.3 Expand or consolidate the `/tools/ui/*` pages [High · ~1 day]
- **What:**
  - **Merge the catalogs:** fold `/chrome-extensions` into `/tools/ui` and 301 the old URL.
  - **Expand each script page** to 300+ words: problem, before/after, steps, compatibility, a link to the related guide. If a script isn't worth that, noindex it.
  - **Move Spanish copy:** `/tools/ui/instructions` text goes to i18n.
- **Depends on:** 1.1.
- **Failed if:** the GSC "Crawled – currently not indexed" count for `/tools/ui/*` doesn't fall within 6 weeks.

### 2.4 Feature-page uniqueness and the homepage refresh [Medium · ~1 day]
- **What:**
  - Add 200–400 unique words per `/tools/bot/*` page, and remove the dashboard hero that is duplicated on `/`.
  - Rebuild the "Our Tools" grid from the current feature data, and drop "revolutionize", "Talk to Sales" and the Beta pricing bot.
  - Put "Little Hotelier" in the homepage H1, and add an "Add to Chrome / Install scripts" section.
  - Server-render the `/faq` answers.
- **Indicator:** GSC impressions for "little hotelier tools" and "little hotelier dashboard".

### 2.5 Mobile UX and security headers [Medium · 2 h]
- **What:**
  - Fix the 390 px overflow on `/blog/little-hotelier-api`.
  - Set a 44 px minimum on tap targets, and add `aria-label` to unnamed buttons (contact form and layout).
  - In `vercel.json`, add security headers (CSP, nosniff, frame-ancestors, Referrer-Policy, Permissions-Policy) and `/images/*` immutable caching.
- **Failed if:** securityheaders.com grade is below A, or there is a horizontal scroll at 390 px.

### 2.6 Internal linking fixes [Medium · 2–3 h]
- **What:**
  - Link `little-hotelier-alternatives` from 4 posts.
  - Add `feature:` frontmatter to the 5 posts that lack it.
  - Show more guides on feature pages, or order them by hub first, so `what-is-mcp-server-hotels` appears on `/tools/bot/api-mcp`.
  - Give `/tools/bot/automations` guides.
  - Assign one owner post per keyword (MCP and invoices).
- Exact anchor list: `findings/cluster.md`.

## Phase 3 — Content and authority (Month 2)

### 3.1 Chrome Web Store listing [High opportunity]
- **What:** package the scripts as a "Hotelier Tools for Little Hotelier" extension.
- **Why:** it fills an open SERP slot, earns a high-trust backlink and removes the Tampermonkey friction (front-desk persona score 54).
- **Depends on:** 2.1, because the store requires a privacy policy.
- **Indicator:** Web Store installs, and the GSC query "little hotelier chrome extension".

### 3.2 Directory and registry listings
- **What:**
  - **Software directories:** Capterra, GetApp, AlternativeTo, HotelTechReport, SaaSHub, Product Hunt.
  - **MCP registries:** the official MCP registry, Smithery, Glama.
  - **GitHub:** set the repo website field and topics.
- **Depends on:** 2.1.
- **Indicator:** referring domains (add a Moz key or Bing WMT), and branded search impressions.

### 3.3 Off-site mentions
- **What:**
  - 2–3 YouTube demos (Claude and ChatGPT setup, invoices).
  - Answer Little Hotelier questions on Reddit and in the SiteMinder community.
  - Pitch the 9-language guides to B&B associations and blogs.

### 3.4 Gap content
- **What:** VERI*FACTU for Little Hotelier (time-sensitive, Spain 2027), Little Hotelier pricing 2026, LH vs Cloudbeds, LH reports (gives the dashboard page a supporting guide), LH automations.
- **Existing posts:**
  - **Commission post:** add a net-revenue calculator and the 2025 Swiss ruling.
  - **Alternatives post:** add a ratings column.

### 3.5 Schema completion
- **What:**
  - Move page blocks into the `@graph` with `@id` (`useSchemaOrg`).
  - Add SoftwareApplication to `/` and `/tools/ui/*`, with an Offer that reflects the €50/mo price from 2027-01-10.
  - Add BreadcrumbList on tools pages and a Person author.
- JSON-LD: `findings/schema.md`.

### 3.6 Agent and AI extras (optional)
- **What:**
  - Enrich `llms.txt`: feature descriptions, and the OpenAPI and MCP links.
  - Rewrite the `/tools/bot/api-mcp` intro to answer first, with endpoint, auth and limits.
  - Publish `/.well-known/api-catalog` (RFC 9727).
  - IndexNow key and deploy ping.

## Phase 4 — Monitoring (ongoing)
- **Measurement:** connect Google APIs (`/seo google setup`) for CrUX, GSC and GA4. Register Bing Webmaster Tools and add a free Moz key.
- **Drift baseline:** `/seo drift baseline https://hotelier.tools/` after Phase 1 ships, then `/seo drift compare` after each deploy.
- **Quarterly:** re-run `/seo audit`, check the Common Crawl graph for the domain, and review titles at 66–74 characters against CTR in GSC.
