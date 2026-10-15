# SEO Audit — hotelier.tools

**Date:** 2026-10-15 · **Scope:** https://hotelier.tools/ (563 sitemap URLs, 9 locales) · **Business type:** SaaS (B2B tooling for Little Hotelier / SiteMinder hotels) + publisher (guides blog)

## SEO Health Score: 70 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 72 | 15.8 |
| Content Quality | 23% | 62 | 14.3 |
| On-Page SEO | 20% | 64 | 12.8 |
| Schema / Structured Data | 10% | 68 | 6.8 |
| Performance (CWV) | 10% | 87 | 8.7 |
| AI Search Readiness | 10% | 70 | 7.0 |
| Images | 5% | 84 | 4.2 |
| **Total** | | | **69.6 → 70** |

Notes on scoring: Performance uses the mobile lab score (86–88) instead of the blended ~91, because mobile LCP fails and Google indexes mobile-first. AI Search Readiness blends GEO (66) and agent-readiness (80). Backlinks are not scored: Common Crawl is the only source and has no data for this domain.

### Data limitations
- No Google API credentials, so there is no CrUX field data, GSC indexation or GA4 traffic. CWV are lab-only (local Lighthouse 13.5; PSI was rate-limited). INP was not measured; TBT 3–116 ms suggests it passes.
- No Moz, Bing or DataForSEO keys. Backlink data comes from Common Crawl only, and the domain isn't in the Q1-2026 graph.
- Crawl was sampled: about 65 URLs for technical checks and 46 for sitemap validation, out of 563.
- SERP checks used a generic search tool (US index), with no volumes and no PAA or AI Overview visibility.
- The schema agent read the local `dist/` build. Key schema claims were spot-checked against the live site.

---

## Executive summary

The site's **guides are its strongest asset**. They are answer-first, dated, well sourced, have tables and FAQs, and are translated to a native standard in 9 languages. Rendering, canonicals, 404 handling, HTML hreflang on blog and bot pages, crawler access and CLS are all solid.

The score is held back by four **systemic root causes**. Each one shows up in several categories:

1. **Metadata template gap.** Every page that doesn't call `useSEO().setSEO()` falls back to the Spanish default `app.head` in `nuxt.config.ts`. That covers `/tools/ui/*`, `/tools/ui`, `/chrome-extensions`, `/documentation`, `/marketing/*` and the 404 page, about 170 URLs across locales. These pages get a Spanish title and description on English URLs, identical metadata, and **no hreflang**. Confirmed live: `/tools/ui/compact-calendar-ui` → `<title>Hotelier Tools - Panel para hoteles con Little Hotelier: facturas, precios y huéspedes | Hotelier Tools</title>`, 0 hreflang tags.
2. **Trust and entity gap.**
   - `/about`, `/privacy`, `/terms`, `/favicon.ico` and `/logo.png` all return 404 (confirmed).
   - Authors are an Organization only, and the contact address is an outlook.com alias.
   - The contact form asks users to accept a privacy policy that doesn't exist, while the product stores Little Hotelier credentials.
   - The homepage stats render as **"0% Error reduction"** in server HTML (confirmed), because they only count up client-side.
3. **Authority and distribution gap.**
   - No measurable backlinks and almost no third-party brand mentions.
   - No Chrome Web Store listing, although "little hotelier chrome extension" SERPs are dominated by Web Store listings and none of them belongs to a Little Hotelier tool.
   - The homepage never says "Chrome" and its H1 doesn't say "Little Hotelier".
4. **i18n consistency drift.**
   - `og:locale` is malformed (`en`, `en_gb`).
   - `inLanguage` maps every locale except `es` to `en-US`.
   - The site-level schema description is in Spanish on English pages.
   - Sitemap hreflang mixes region and bare codes and omits en-GB on about 35 URLs per locale.
   - Some hard-coded Spanish copy remains (`/chrome-extensions` H1, `/tools/ui/instructions`).

**No Critical (indexing-blocking) issues were found.** All sampled URLs return 200, are self-canonical and are indexable.

### Top 5 issues
1. **High:** about 170 URLs inherit the Spanish fallback title and description and have no hreflang (`pages/tools/ui/[slug].vue`, `pages/tools/ui/index.vue`, `pages/chrome-extensions.vue`, `pages/documentation.vue`, `pages/marketing/*`).
2. **High:** no About, Privacy or Terms pages and no named author. This is an E-E-A-T weakness and a legal/trust gap for a product that handles guest data and PMS credentials.
3. **High:** homepage stats show "0%" and "0h" to crawlers and no-JS clients (`components/StatsSection.vue:40`), and the claims have no source.
4. **High:** `/favicon.ico` and `/logo.png` return 404 but are referenced in the head and in the Organization logo schema. Google can't show a favicon or brand logo.
5. **High (opportunity):** the open "little hotelier chrome extension" SERP slot is unclaimed. There is no Web Store listing and the homepage doesn't mention Chrome.

### Top 5 quick wins (≤ 1 h each)
1. Add `favicon.ico` and `logo.png` to `public/`, or repoint the references.
2. Server-render the final stat values in `StatsSection.vue`, or remove the unsourced claims.
3. Fix title defects: "Contact  our team" (double space), duplicated "| Hotelier Tools" on `/faq`, `/marketing` and `/contact`.
4. Translate the `seo.site.description` key for `en` and other locales, and fix `og:locale` and `inLanguage` to use the locale `iso` code.
5. Remove the duplicate `/sitemap.xml` declaration from robots and `sitemap.sources`.

---

## Technical SEO — 72

**Works:** pages are prerendered, so full HTML is served without JS. There is a single H1 per page, real 404s with no soft 404s, and self-canonical URLs without a trailing slash. HTML hreflang on blog and bot pages is reciprocal across 9 locales with x-default and correctly excludes the untranslated id/th posts. HTTP→HTTPS works, legacy bot URLs 308 to their new homes and keep the locale, and `/_nuxt` assets are immutable for one year. TTFB is about 24 ms.

| Sev | Finding | Fix |
|---|---|---|
| High | Spanish fallback metadata and no hreflang on about 170 URLs (see root cause 1) | Call `setSEO()` and `useLocaleHead()` in every page. Make the `nuxt.config.ts` `app.head` fallback English and neutral, or remove it |
| High | `/favicon.ico` and `/logo.png` return 404 | Add the files, or update `nuxt.config.ts` (`app.head.link`, `schemaOrg.identity`) and `composables/useSEO.ts` |
| Medium | Only HSTS is sent. No CSP, X-Content-Type-Options, frame-ancestors, Referrer-Policy or Permissions-Policy | Add a `headers` block in `vercel.json` |
| Medium | `og:locale` is malformed (`en`, `en_gb`) | Build it from the locale `iso` (`en_US`, `en_GB`, `es_ES`) in `useSEO.ts` |
| Medium | Sitemap hreflang is inconsistent: mixes `en-US` and `en`, and en-GB is missing on about 35 URLs per locale | Configure a single code scheme in the `@nuxtjs/sitemap` i18n options, matching the HTML |
| Medium | No IndexNow | Add a key file to `public/` and ping `api.indexnow.org` on deploy |
| Medium | 38 of 63 URLs per sitemap have no `lastmod`. All guides share 2026-10-03 | Use git commit dates or content `updatedAt` |
| Low | `/sitemap.xml` returns a 307 and the sitemap is declared twice (robots plus `sitemap.sources`, which self-references) | Declare only `/sitemap_index.xml` |
| Low | `http://www` → `https://www` 308, then a 307 to the apex | Make www→apex permanent in Vercel domain settings |
| Low | Robots meta is inconsistent (`index,follow` vs `max-image-preview:large…`) | Standardise on the latter |
| Info | `/pricing` returns 404. Pricing lives only in `PricingSection` | Add `pages/pricing.vue` if you want "little hotelier tools pricing" queries |

## Content Quality — 62 · On-Page SEO — 64

**Works:**
- 25 guides per locale, 1,100–2,100 words each.
- Answer-first structure, "as of October 2026" dating, and 12–23 external sources per post.
- Flesch 51–74 and no AI-cliché phrasing.
- ES and DE translations read as native, use formal "Sie", and keep heading parity.
- An affiliation disclaimer is present on the guides.

E-E-A-T sub-scores (skill weights): Experience 55 · Expertise 65 · Authoritativeness 35 · Trustworthiness 40.

| Sev | Finding | Fix |
|---|---|---|
| High | No About, Privacy or Terms pages. Author is Organization-only. The contact address is an outlook.com alias. The form references a non-existent privacy policy | Publish About (founder, hotel background, independence from SiteMinder), Privacy and Terms (credential storage and encryption, GDPR). Add a named author and bio on the guides. Use a domain email |
| High | Homepage stats render "0%", "0h", "0/7" server-side, and the claims are unsourced | Render the final values server-side and animate client-only. Source them or remove them |
| High | `/tools/ui/*` script pages are thin (55–102 words) and share a template | Expand to 300+ words (problem, before/after, steps, FAQ) and link each to its guide. Otherwise consolidate into `/tools/ui` and noindex the stubs |
| Medium | Spanish copy on English URLs: `/chrome-extensions` H1 (plus the "TaperMonkey" typo) and `/tools/ui/instructions` | Move the copy to i18n keys |
| Medium | 225 guide URLs all dated 2026-10-03, with dateModified equal to datePublished and no visible "Updated" line | Show real update dates and a named reviewer |
| Medium | Stale or generic copy: the "Our Tools" grid ("revolutionize…", "Talk to Sales", Beta pricing bot) and `/marketing` ("Maximize Your Hotel's Revenue Potential") | Rebuild the grid from feature data. Rewrite `/marketing` or noindex it |
| Medium | `/faq` has only 142 words in the HTML because answers are client-rendered. H1 and H2 duplicate | Server-render the answers |
| Medium | Bot feature pages are about 8% unique (60 of 734 words on `/tools/bot/dashboard`), and its hero is duplicated on `/` | Add 200–400 unique words per feature: how it works, limits, setup |
| Medium | 2 of 3 testimonials are anonymous | Use named people and properties, with permission, or a short case study |
| Low | Title defects: double space and duplicated brand on `/contact`, `/faq` and `/marketing`. Guide titles run 66–74 characters | Fix `seo.pages.*` in the locale JSON. Lead with the keyword |
| Low | `/contact` promises "Immediate response" but shows 17:00–21:00 hours. ES typos on `/es/tools/ui/compact-calendar-ui` ("nombbre", "titulo") | Copy edits |
| Info | en-US guides use "help centre" 42 times | Fine if it's the proper name of Little Hotelier's Help Centre. Otherwise "help center" |

### Content architecture (cluster analysis)
- There are seven de facto clusters. Guest messaging is the weakest.
- **Orphan:** `little-hotelier-alternatives` has 0 in-body inbound links. Five posts have ≤2 inbound links.
- **Internal cannibalization:**
  - `/chrome-extensions`, `/tools/ui` and `/blog/little-hotelier-chrome-extensions` compete for the same query (high risk).
  - Three posts target "little hotelier mcp" (medium).
- SERP overlap between pairs is ≤2 of 10 URLs, so no merges are needed. Fix keyword ownership instead.
- `/tools/bot/api-mcp` drops `what-is-mcp-server-hotels` because the guide list is capped at 6 and all guides share the same date. `/tools/bot/automations` lists no guides.
- **Gap topics:** VERI*FACTU (Spain 2027), Little Hotelier pricing 2026, LH vs Cloudbeds, LH reports, LH automations, booking engine setup, Airbnb sync and overbooking, group bookings, New Platform vs Classic, Xero/QuickBooks export.

Full map and link matrix: `findings/cluster.md`.

## Schema / Structured Data — 68

**Works:**
- A site-wide nuxt-schema-org `@graph` (WebSite, WebPage, Organization).
- Per-locale WebSite with `translationOfWork`.
- BlogPosting and localized BreadcrumbList on posts, ContactPage, and a Blog node.
- No deprecated types.

| Sev | Finding | Fix |
|---|---|---|
| High | Duplicate Organization nodes: `#identity` without a logo, and `#organization` with a bare-string logo that 404s | Keep only `schemaOrg.identity`, with an ImageObject logo, `sameAs` (GitHub, X, LinkedIn) and `contactPoint` |
| High | Page blocks (BlogPosting, BreadcrumbList, SoftwareApplication) sit outside the graph: no `@id`, inline publisher copies | Use `useSchemaOrg([defineArticle(), defineBreadcrumb()])` in `pages/blog/[slug].vue:259-289` and `pages/tools/bot/[slug].vue:171-183` |
| Medium | Spanish site description on en-US. `inLanguage` maps all non-`es` locales to `en-US` | Translate the description and use the i18n `iso` code |
| Medium | SoftwareApplication is thin: EUR vs USD mismatch, no image or provider, and `price "0"` ignores the €50/mo pricing announced from 2027-01-10. No SoftwareApplication on `/` or `/tools/ui/*` | Ready-made JSON-LD is in `findings/schema.md` |
| Medium | BlogPosting has no Person author and no multi-ratio image. `primaryImageOfPage` is the logo | Add a Person author and use the OG image |
| Low | Dead SearchAction branch (`/search?q=` doesn't exist). Breadcrumbs exist only on posts | Delete it. Add BreadcrumbList to tools pages |
| Info | FAQPage is present on posts and `/faq`. Google retired FAQ rich results on 2026-05-07, so there is no SERP effect. `/faq` has no `mainEntity`, so the block is incomplete | Populate it or type the page as WebPage. No removal is needed |

## Performance — 87 (mobile lab) / 99 (desktop)

| Page | Mobile LCP | FCP | TBT | CLS |
|---|---|---|---|---|
| / | 3.25 s | 2.54 s | 113 ms | 0 |
| /blog/little-hotelier-api | 3.48 s | 2.54 s | 116 ms | 0 |
| /tools/bot/dashboard | 3.23 s | 2.52 s | 115 ms | 0 |
| /es/ | 3.39 s | 2.53 s | 80 ms | 0 |

Desktop LCP is 0.71–0.76 s. **Mobile LCP fails the 2.5 s threshold** (simulated slow 4G with 4× CPU throttling, so it is pessimistic). The LCP element is the hero `<p>` text, and TTFB is about 24 ms, so render-blocking CSS and hydration cost are the cause.

| Sev | Finding | Fix |
|---|---|---|
| Medium | Mobile LCP is 3.2–3.5 s | See the next two rows |
| Medium | Render-blocking `entry.css` (~31 KB) plus 3 component CSS files | Use Nuxt `inlineStyles` and purge unused Tailwind and Nuxt UI CSS |
| Medium | 250–315 KB of JS across 26 scripts. Bootup 400–660 ms | Lazy-hydrate showcase and process animations (`hydrate-on-visible`) |
| Low | 79–114 requests per page. Runtime icon fetch from `api.iconify.design` | Use Vite `manualChunks` and Nuxt Icon `clientBundle` |
| Low | `@nuxtjs/google-fonts` is configured but unused. 9 Inter and 5 Space Grotesk weights are declared | Remove the module and trim the weights |

## Images — 84

**Works:** no missing alt text (29 on `/blog`, 7 on the API post), WebP throughout, lazy-loading, and width and height set (CLS 0).

| Sev | Finding | Fix |
|---|---|---|
| Low | Images are served with `Cache-Control: max-age=0, must-revalidate` | `vercel.json`: `/images/(.*)` → `max-age=31536000, immutable` |
| Low | Leftover PNGs, e.g. `full-width-reservation-table/to.png` at 95 KB | Convert to WebP or AVIF |
| Low | Blog cards render at 286×178 from 56–65 KB sources | Add `srcset` or thumbnails |
| Low | All locales' sitemap image tags point at `/images/blog/demo/en/*` | Localize the screenshots, or accept it |

## Visual / Mobile

**Works:**
- A clear H1 and both CTAs above the fold on desktop and mobile.
- No interstitials.
- 16 px body text.
- `/es/` has layout parity.

| Sev | Finding | Fix |
|---|---|---|
| Medium | Horizontal overflow at 390 px on `/blog/little-hotelier-api` (scrollWidth 401), from `.floating-icon` and code spans | Use `overflow-x: clip` on the hero and `overflow-x: auto` on code |
| Medium | Tap targets under 44 px: 62 of 88 on home, 66 of 123 on the API post | Set `min-height: 44px` on footer and inline links and chips |
| Low | 23–32 text nodes under 12 px. Theme and language toggles are about 32 px | Use a 12 px minimum and 44 px toggles |

## AI Search Readiness — 70 (GEO 66 · Agentic 80)

**Works:**
- All AI crawlers are allowed and receive identical SSR HTML.
- `llms.txt` is good (25 guides, disclaimer).
- The guides are model citation sources.
- Agent-UX heuristic scores 91–97, and the accessibility tree is clean: 16 landmarks and real buttons.

| Sev | Finding | Fix |
|---|---|---|
| High | Authority and brand signals score 25/100. No third-party mentions found on Bing, Wikipedia, YouTube or GitHub (0 stars) | List in MCP registries (official, Smithery, Glama), Capterra, GetApp, AlternativeTo and HotelTechReport. Make 2–3 YouTube demos |
| High | Entity ambiguity: there is no About page, and spellings vary ("Hotelier Tools", "Hotelier-Tools", "hotelierTools") | Add an About page, standardise on "Hotelier Tools" and merge the Organization schema |
| Medium | `/tools/bot/api-mcp` opens with only 36 words of "what it does", with no MCP URL, auth or rate limits | Add a two-sentence definition and a facts block |
| Medium | `/contact` has 3 unnamed interactive nodes, and one unnamed node appears in the shared layout | Add `aria-label`s |
| Low | `llms.txt` feature links are bare slugs. There is no `llms-full.txt`. The OpenAPI spec and MCP endpoint aren't linked | Enrich `llms.txt` |
| Opportunity | No `/.well-known/api-catalog` (RFC 9727) for the real API and MCP. No Content-Signal. No WebMCP | Optional: publish `api-catalog`. The other two are drafts |

## Search Experience (SXO)

| Query | SERP type | Our page | Verdict |
|---|---|---|---|
| little hotelier chrome extension | Chrome Web Store listings, none for a Little Hotelier tool | `/` doesn't mention Chrome. The blog uses a Tampermonkey install | **Mismatch: open slot** |
| little hotelier tools | Capterra and GetApp comparison pages | `/` H1 lacks "Little Hotelier" | Mismatch |
| little hotelier alternatives | Directories with ratings | Comparison post | Aligned, but lacks ratings and ItemList |
| little hotelier api | Docs and report cards | Answer plus curl examples | Aligned |
| booking.com commission | Long-form blogs | 1,766-word guide | Aligned. Add a calculator and the 2025 Swiss ruling |
| ses hospedajes little hotelier | No competing content | 2,110-word guide | Aligned |

Persona scores:

| Persona | Score |
|---|---|
| Front-desk staff | 54 |
| Small owner | 67 |
| Switcher | 67 |
| Spanish compliance | 77 |
| MCP developer | 79 |

Trust is the weakest dimension for every persona.

## Backlinks — Insufficient data
The domain is absent from the Common Crawl Q1-2026 web graph, so treat it as a near-zero baseline. The opportunities below are recommendations, not observed facts:
- GitHub repo website field and topics.
- Chrome Web Store listing.
- SiteMinder community.
- Product Hunt, AlternativeTo and SaaSHub.
- Hospitality communities.
- Pitching the 9-language guides.
- MCP directories.

For real data, add a free Moz key and Bing Webmaster Tools.

---

## Synthesis: how the findings connect
- **Root cause 1 (metadata template)** drives Technical (hreflang, duplicate titles), On-Page (Spanish titles), Content (Spanish copy) and Cluster (ui pages can't rank) findings. It is **one code change** in about 5 page files plus the `nuxt.config.ts` fallback, and it unblocks the `/tools/ui/*` content expansion. Expanding thin pages that still carry a Spanish title wastes effort.
- **Root cause 2 (trust and entity)** drives the low E-E-A-T, GEO authority, SXO trust and schema Organization findings. The About page, named author and merged Organization schema must exist before off-site listings, so directories and MCP registries have a canonical entity to point at.
- **Root cause 3 (distribution)** depends on 2. Of the distribution work, the Chrome Web Store listing has the biggest payoff: it fills an open SERP slot, earns a high-trust backlink and removes the front-desk persona's Tampermonkey friction.
- **Mobile LCP** is independent and can run in parallel.

See `ACTION-PLAN.md` for sequencing, falsifiability checks and leading indicators.
Per-category evidence: `findings/*.md`. Screenshots: `screenshots/`.
