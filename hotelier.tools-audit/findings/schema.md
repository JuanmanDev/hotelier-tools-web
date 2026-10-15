# Schema.org audit: hotelier.tools (source: dist build + homepage-render.json)

Score: 68/100

## Detected
- Site-wide @graph (nuxt-schema-org): WebSite, WebPage, Organization (#identity), ImageObject (#logo), Organization (#organization). All pages.
- Blog posts: separate JSON-LD block (BlogPosting + BreadcrumbList + FAQPage) from pages/blog/[slug].vue:259-289.
- /blog: standalone Blog block with blogPost[].
- /tools/bot/dashboard: standalone SoftwareApplication (pages/tools/bot/[slug].vue:171-183).
- /faq: WebPage typed ["WebPage","FAQPage"] with no mainEntity.
- /contact: ["WebPage","ContactPage"].
- /tools, /tools/ui/compact-calendar-ui: only the site-wide graph.

## Findings
1. HIGH - Duplicate Organization nodes. #identity (nuxt.config.ts schemaOrg.identity) has no logo; #organization (from composables/useSEO.ts setStructuredData) has logo as a bare string. WebPage.about/publisher point only at #identity. Fix: remove the setStructuredData('Organization') call and put logo, description, sameAs, contactPoint into schemaOrg.identity.
2. HIGH - Blog/dashboard blocks are not linked to the graph. BlogPosting, BreadcrumbList, Blog and SoftwareApplication have no @id; author/publisher are inline Organization copies with no logo; mainEntityOfPage is a bare URL. Breadcrumb is not tied to the WebPage. Fix: use useSchemaOrg([defineArticle(...), defineBreadcrumb(...)]) or add @id and reference {"@id":".../#identity"}.
3. HIGH - Missing Organization logo and `image` on site-wide nodes. Add logo as ImageObject (see JSON-LD below). Also confirm /logo.png is at least 112x112 and square-ish.
4. MEDIUM - inLanguage and description are wrong on the WebSite node. EN root WebSite.description is Spanish ("Herramientas para optimizar la gestión..."): the seo.site.description key is not translated in en. Check i18n files. Also inLanguage values are mixed: WebSite "en-US"/"es-ES", BlogPosting "en"/"es", ImageObject "en". Standardize on BCP 47 from i18n locale iso codes (en-US, en-GB, es-ES, ...). useSEO.ts maps only es to es-ES and all else to en-US, which is wrong for de/fr/it/pt/id/th/en-GB.
5. MEDIUM - @id graph issues. Root WebSite lists workTranslation to #website of /en-gb, /es etc. but those IDs are not on the same page (fine) and en-gb URL has no trailing-slash consistency (".../en-gb#website" vs ".../es#website"; ok). The root WebSite has url with trailing slash, Organization url without. Normalize. Localized pages use primaryImageOfPage -> shared #logo, which is a logo not a page image; remove or use the OG image.
6. MEDIUM - Dashboard SoftwareApplication: name "Hotelier Tools: Overview" and url points at dashboard.hotelier.tools; priceCurrency EUR while useSEO.ts uses USD (site is en-US). No image/screenshot, no publisher/provider, no aggregateRating (correct, do not fabricate). applicationCategory/operatingSystem/offers are valid. Note Google needs an aggregateRating or review for the rich result, so this is informational only. Fix: add @id, provider, screenshot, inLanguage. Same pattern missing on /tools/ui/* (Chrome extensions) pages: see JSON-LD below.
7. MEDIUM - BlogPosting recommended props: author is Organization, no author Person (E-E-A-T), no image array of multiple ratios, no wordCount. datePublished/dateModified use date-only (valid) but identical; add timezone-offset datetime if modification happens. Headline in BlogPosting differs from WebPage.name (acceptable, headline is under 110 chars? the API headline is about 80, fine).
8. LOW - WebSite SearchAction: useSEO.ts setStructuredData('WebSite') defines a /search?q= target; no /search page exists. Verify not emitted (not seen in build). Delete that branch; Google dropped sitelinks search box in 2024.
9. LOW - Breadcrumbs only on blog posts. /tools/..., /tools/bot/dashboard, /tools/ui/compact-calendar-ui, /blog have none. See JSON-LD.
10. LOW - Blog index "Blog" node is outside the graph and contains full nested BlogPosting copies. Fine but add @id and use CollectionPage on WebPage.
11. INFO - FAQPage exists on blog posts (en/es) and /faq. Google retired FAQ rich results on 2026-05-07; there is no SERP benefit, any AI visibility benefit is unconfirmed. No action required. Note /faq is typed FAQPage but has no mainEntity, which is an incomplete block: either populate (pages/faq.vue via setFAQStructuredData) or type it plain WebPage/CollectionPage.
12. INFO - Encoding: raw build output showed mojibake for non-ASCII in my terminal read only (likely my console decoding); verify with a UTF-8 fetch.

## What works
@context is https://schema.org everywhere; absolute URLs; ISO 8601 dates; valid JSON on all pages; per-locale WebSite @id and translationOfWork link; BreadcrumbList is correct (positions, absolute item URLs, localized names, /es root); no deprecated types (no HowTo); blog language-specific URLs and alternates match canonical.

## Ready-to-use JSON-LD

### Organization (put in nuxt.config.ts schemaOrg.identity, drop the duplicate)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hotelier.tools/#identity",
  "name": "Hotelier Tools",
  "url": "https://hotelier.tools/",
  "logo": {"@type": "ImageObject", "@id": "https://hotelier.tools/#logo", "url": "https://hotelier.tools/logo.png", "width": 512, "height": 512},
  "sameAs": ["https://twitter.com/hoteliertools"],
  "contactPoint": {"@type": "ContactPoint", "contactType": "customer support", "url": "https://hotelier.tools/contact", "availableLanguage": ["en","es","de","fr","it","pt","id","th"]}
}
```
(Verify logo dimensions and add other real profiles, e.g. GitHub or Chrome Web Store listing, to sameAs.)

### SoftwareApplication for /tools/ui/compact-calendar-ui (adapt name/description per slug)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://hotelier.tools/tools/ui/compact-calendar-ui#software",
  "name": "Compact Calendar UI for Little Hotelier",
  "description": "Chrome extension that makes the Little Hotelier calendar compact.",
  "url": "https://hotelier.tools/tools/ui/compact-calendar-ui",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Chrome",
  "inLanguage": "en-US",
  "provider": {"@id": "https://hotelier.tools/#identity"},
  "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"}
}
```

### BreadcrumbList for /tools/bot/dashboard
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://hotelier.tools/tools/bot/dashboard#breadcrumb",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://hotelier.tools/"},
    {"@type": "ListItem", "position": 2, "name": "Tools", "item": "https://hotelier.tools/tools"},
    {"@type": "ListItem", "position": 3, "name": "Dashboard", "item": "https://hotelier.tools/tools/bot/dashboard"}
  ]
}
```

### Linked BlogPosting (replace inline author/publisher)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://hotelier.tools/blog/little-hotelier-api#article",
  "mainEntityOfPage": {"@id": "https://hotelier.tools/blog/little-hotelier-api#webpage"},
  "isPartOf": {"@id": "https://hotelier.tools/blog#webpage"},
  "inLanguage": "en-US",
  "author": {"@id": "https://hotelier.tools/#identity"},
  "publisher": {"@id": "https://hotelier.tools/#identity"}
}
```
