# Technical SEO findings - hotelier.tools (audited 2026-10-15)
Score: 72/100. ~70 URL fetches across all 9 locales + sitemap, robots, headers, redirects.

## What works
- Static HTML (SSR/prerender) with full content; H1 x1 on every sampled page; 200/404 status codes correct (soft-404 free); 404 returns real 404.
- Self-referencing canonicals, no trailing-slash duplicates (/blog/ and /es/ serve 200 with canonical to slashless URL).
- HTML hreflang on localized pages: 9 locales + x-default (en), reciprocal, restricted to existing translations (ine-hotel-occupancy-survey / ses-hospedajes omit id/th correctly).
- Sitemap index (9 child sitemaps, 563 URLs) with xhtml:link alternates; lastmod present; /_nuxt assets immutable 1y cache; HSTS present; http->https 308; legacy bot slugs 308 to feature pages (vercel.json) preserving locale.
- Rich JSON-LD (BlogPosting, FAQPage, BreadcrumbList, SoftwareApplication, Blog); /llms.txt present; images lazy with width/height/alt.

## Findings
### High
1. Pages with wrong-language, generic metadata and no hreflang: /tools/ui, /tools/ui/*, /contact, /documentation (+ all locale variants). Evidence: /tools/ui/compact-calendar-ui title is the Spanish app.head fallback "Hotelier Tools - Panel para hoteles con Little Hotelier..." on en/es/pt alike, 221-char Spanish description, og:image /og-image.png, 0 hreflang link tags. ~17 UI pages x 9 locales = ~150 sitemap URLs share one title/description (duplicate-metadata risk). Fix: call useSEO().setSEO(...) in pages/tools/ui/[slug].vue, pages/tools/ui/index.vue, pages/tools/ui/instructions.vue, pages/contact.vue, pages/documentation.vue with per-page translated title/description; make the nuxt.config.ts app.head fallbacks English-neutral or remove them.
2. /favicon.ico and /logo.png return 404. <link rel="icon" href="/favicon.ico"> is emitted (nuxt.config.ts app.head.link) and Organization JSON-LD logo = https://hotelier.tools/logo.png (nuxt.config.ts schemaOrg.identity, composables/useSEO.ts) -> invalid logo for rich results/knowledge panel. Fix: add public/logo.png (>=112px square) and public/favicon.ico, or point to existing assets (favicon.svg / a real PNG).

### Medium
3. Security headers: only Strict-Transport-Security: max-age=63072000 (no includeSubDomains/preload). Missing CSP, X-Content-Type-Options, X-Frame-Options/frame-ancestors, Referrer-Policy, Permissions-Policy. Fix: add a "headers" block in vercel.json for source "/(.*)".
4. No IndexNow: no key file in public/, no submit hook. Fix: add public/<key>.txt and ping api.indexnow.org on deploy (benefits Bing/Copilot/Yandex/Naver).
5. Pricing: no standalone /pricing page (404); pricing is only the PricingSection component inside / and feature pages. Not a bug, but no indexable pricing URL. If intended, create pages/pricing.vue + route + sitemap; else ignore.
6. og:locale is malformed: homepage og:locale="en" (and "en_gb" lowercase for UK). composables/useSEO.ts uses locale.value.replace('-', '_'). Fix: use the iso code (en_US, en_GB, es_ES, th_TH) from locales[].iso.
7. Sitemap hreflang is duplicated/inconsistent with HTML: each <url> lists both region codes (en-US, es-ES, pt-PT...) and bare codes (en, es...) pointing to the same URLs, while page HTML uses only bare codes (en, en-gb, es). Not conflicting but noisy; pt-PT iso also assumes Portugal while content may target Brazil. Fix: configure @nuxtjs/sitemap i18n to emit one set (match the HTML), or set HTML hreflang from iso codes; confirm pt variant.
8. Sitemap lastmod stale: index lastmod 2026-10-04 while pages deployed 2026-10-15; page lastmod 2026-10-03. Also /sitemap.xml is a 307 (temporary) to /sitemap_index.xml and robots.txt lists both. Fix: drop '/sitemap.xml' from robots.sitemap and sitemap.sources in nuxt.config.ts (the sources entry is also self-referential), keep only /sitemap_index.xml; use real content dates (frontmatter updatedAt) for lastmod.

### Low
9. Title quality: duplicated brand suffix "Marketing Tools - ... | Hotelier Tools | Hotelier Tools" (/marketing), "Frequently Asked Questions - Hotelier Tools | Hotelier Tools" (/faq, /contact, /de/faq); double spaces "Contact  our team", "Contatta  il nostro team". Fix in locale JSON seo.pages.* titles (remove "- Hotelier Tools" because template adds suffix).
10. Inconsistent robots meta: setSEO pages emit "index,follow"; other pages emit "index, follow, max-image-preview:large..." (better). Standardize on the latter (and nuxt-robots).
11. Redirect chain: http://www.hotelier.tools/es -> 308 https://www.hotelier.tools/es -> 307 https://hotelier.tools/es (2 hops; www->apex is 307, should be 308/301). Fix in Vercel domain settings (set permanent).
12. <meta name=keywords> and meta author/copyright/language emitted (ignored by Google; harmless). Page robots cached max-age=0 must-revalidate on HTML (fine).
13. Organization JSON-LD sameAs only Twitter; contactPoint availableLanguage lists English/Spanish only. Add GitHub/LinkedIn/Chrome Web Store profiles; sitemap images include favicon.svg.

### Info
- 307/308 note: vercel.json redirects are 308 (permanent) - OK. nuxt.config legacyBotRedirects duplicate these (prerender) - redundant but harmless.
- Core Web Vitals (source-level only): HTML 220-240 KB homepage, Google Fonts via module (display: swap), 9 Inter weights + 5 Space Grotesk weights requested - trim weights to cut LCP. Hero images lazy-loaded below fold; verify LCP image is not lazy. Run CrUX/PSI for field data (not measured here).
- Mobile: viewport meta present (width=device-width, initial-scale=1); no mobile-specific issues found from source.
- robots.txt: valid, no AI-crawler rules (decide GPTBot/ClaudeBot/PerplexityBot policy explicitly); /llms.txt not referenced (fine).
- Not tested exhaustively: all 563 URLs were not individually fetched; ~65 sampled.
