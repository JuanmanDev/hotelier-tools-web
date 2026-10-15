# Sitemap audit - hotelier.tools (2026-10-15)

Scope: /sitemap.xml, /sitemap_index.xml, 9 child sitemaps (563 URLs total), robots.txt, nuxt.config.ts, vercel.json, pages/, content/blog/.

## Pass
- Index and children are valid XML, 63/61 URLs each, ~110 KB (far under limits). No priority/changefreq.
- Sample of 46 URLs across all 9 locales (1 req/sec): all 200, no redirects, self-canonical, no noindex.
- Every internal link crawled from /, /tools/bot, /documentation, /blog is in the sitemap. All 12 bot + 17 ui feature pages and /marketing/detect-incomplete-reservation are listed. Pricing is a section component (components/PricingSection.vue), not a page, so nothing is missing. /documentation has no subpages. No orphan routes found in pages/.

## Findings

1. MEDIUM - id/th have 61 URLs: intentional, missing translations. content/blog/id and content/blog/th lack ine-hotel-occupancy-survey.md and ses-hospedajes-little-hotelier.md (the other 7 locales have 25 articles). Sitemap correctly omits them and the hreflang clusters for these 2 articles exclude id/th. Fix: translate if the topics (Spanish INE/SES regulation) are relevant to ID/TH audiences; otherwise no action.

2. MEDIUM - lastmod missing on 38 of 63 URLs per sitemap (only the 25 blog articles have it, all identical 2026-10-03). Home, listing, tools, feature, contact, faq pages have none. autoLastmod only applies to content-sourced routes. Fix: add lastmod via sitemap `urls`/source (git commit date or content `updatedAt`), and avoid one identical date for all articles. Child-sitemap lastmod in the index is the build time (2026-10-04T19:17:21Z) for all 9, not content-based.

3. MEDIUM - hreflang in sitemap is inconsistent and differs from page HTML.
   - 5 URLs (home etc.) carry 18 alternates: duplicate language-only AND language-region codes (en + en-US, es + es-ES ...).
   - 21 URLs use region codes (en-US, en-GB, es-ES ...); 35 URLs use bare codes (en, de, es ...) and en-GB is absent from these (blog/tool pages), though the HTML head lists en-gb. Example: /blog/little-hotelier-api sitemap lacks en-GB; page head has it.
   - Page HTML uses lowercase `en-gb` (valid, case-insensitive) while sitemap uses `en-GB`.
   Fix: standardize on one scheme (set i18n `language` codes, or `iso` consistently) so sitemap and head match, include en-GB everywhere, one entry per language. Verify the sitemap module's i18n integration (`sitemap.i18n` / `autoI18n`).

4. LOW - duplicate sitemap declarations. robots.txt lists both /sitemap.xml and /sitemap_index.xml; /sitemap.xml 307-redirects to /sitemap_index.xml. nuxt.config.ts sets robots `sitemap: ['/sitemap.xml']` and sitemap `sources: ['/sitemap.xml']` (the latter is a URL-source fetching the sitemap itself; unnecessary and potentially recursive). Fix: declare only https://hotelier.tools/sitemap_index.xml, remove `sources: ['/sitemap.xml']`, and drop the robots sitemap entry for /sitemap.xml (the module adds the index itself).

5. LOW - /sitemap.xml returns 307 (temporary), not 301. Header: `Location: /sitemap_index.xml`. Google follows it but 301/308 is preferred, or serve the index directly at /sitemap.xml. If kept, add a vercel.json redirect with `"permanent": true`, or remove the declaration (see 4).

6. INFO - xhtml/image namespaces in use; images use /images/blog/demo/en/*.webp for every locale (not localized screenshots); harmless. Sitemap includes xml-stylesheet pointing to /__sitemap__/style.xsl (fine).

7. INFO - location page gates: not applicable (no location pages).

## Not tested
Full 563-URL status crawl (46-URL sample only). Content duplication among locales.
