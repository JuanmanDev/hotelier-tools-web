# Content Quality / E-E-A-T: hotelier.tools

Audit date: 2026-10-15. Sample: /, /es, /tools, /tools/bot (all 10 feature pages), /tools/ui, /tools/ui/{compact-calendar-ui, show-booking-commissions, instructions}, /es/tools/ui/compact-calendar-ui, /faq, /contact, /documentation, /chrome-extensions, /marketing, /marketing/detect-incomplete-reservation, /blog, 5 EN posts (little-hotelier-api, little-hotelier-alternatives, booking-com-commission, connect-claude-to-little-hotelier, ses-hospedajes-little-hotelier), ES + DE versions of little-hotelier-api and booking-com-commission, /about and /privacy (both 404). Source: content/blog, content/scripts, nuxt.config.ts.

## Scores
- Content Quality: **62/100**
- On-Page SEO: **64/100**
- E-E-A-T, using this skill's internal weights (Google publishes no weights): Experience 55, Expertise 65, Authoritativeness 35, Trustworthiness 40, so **48/100** weighted
- AI citation readiness: **76/100** (blog), about 30 (tool/UI pages)

## What works
- Blog: 25 EN guides, 1,100-2,100 words of body each. They open with the answer, carry "as of October 2026" qualifiers, and link to primary sources (partner.booking.com, helpcentre.littlehotelier.com). Each has a comparison table, an FAQ and BlogPosting + FAQPage + BreadcrumbList schema.
- Readability: Flesch Reading Ease 51-74 (median about 64), grade level 6-10. No AI clichés ("delve", "seamless", "leverage", and similar) in the EN blog, and only 9 em dashes across 25 posts.
- Translations read as native. ES and DE keep the same H2 structure as EN, with localized titles and descriptions (for example "Cuánto cobra Booking de comisión"). DE uses formal "Sie", and "du" appears only inside example AI prompts. Word counts match EN.
- Independence disclosure appears in the posts ("not affiliated with or endorsed by SiteMinder"). There is also a public GitHub repo.
- Blog and /tools/bot/* have unique titles and descriptions. The metadata_template check found site_risk=low, templated_ratio=0.0 across 49 pages and no shared CTA phrases.

## Findings

### High
1. **Spanish default title/description on English (and all-locale) pages.** /tools/ui, every /tools/ui/<slug> (16), /documentation and /marketing/detect-incomplete-reservation, plus the 404 page, all serve "Hotelier Tools - Panel para hoteles con Little Hotelier..." (103 chars) and the same 221-char Spanish description. That is 5 exact duplicates in the sample and about 20 site-wide. These pages also have no hreflang. Source: nuxt.config.ts:151-161 fallback, and pages/tools/ui/[slug].vue has no useSeoMeta. **Fix:** add a per-page useSeoMeta from doc.title/doc.description through i18n, make the nuxt.config fallback English and neutral, and add hreflang through useLocaleHead.
2. **No About/people layer and no legal pages.** /about and /privacy return 404. Bylines and schema author are Organization "Hotelier Tools" only. The contact email is a personal outlook.com alias, and the site names no legal entity or address. Yet the product stores Little Hotelier credentials, and the contact form asks visitors to "accept the privacy policy", which does not exist. **Fix:** publish /about (founder, real hotel background, GitHub), /privacy and /terms covering data handling and AES-256-GCM, plus a Person author with bio and sameAs on posts. Use a domain email.
3. **Homepage stats render as zero.** The SSR HTML says "0% Error reduction 0h Daily time saved 0% Conversion increase 0/7". Crawlers and LLMs read those zeros. **Fix:** render the final values server-side and animate only on the client, or remove the stats unless they are backed by data.
4. **Thin script pages.** content/scripts/en/*.md has 55-102 words each (compact-calendar-ui: 72 words, show-booking-commissions: 58). They also share the same template text ("What does it do? / Features / Gallery"). **Fix:** expand each to at least 300 words (problem, before/after, steps, compatibility, FAQ) and link each one to its matching guide, or consolidate them into /tools/ui with noindex on the stubs.

### Medium
5. **Wrong-language content on EN URLs.** /chrome-extensions has a Spanish H1 and body (hardcoded at pages/chrome-extensions.vue:8, plus the typo "TaperMonkey"). /tools/ui/instructions is entirely Spanish. **Fix:** move the text to i18n keys.
6. **Bulk-publish signature.** All 25 posts are dated 2026-10-03 in all 9 locales (225 URLs), dateModified equals datePublished, and there is no visible "Updated" line. Combined with an org-only author, this pattern looks like scaled content. **Fix:** show a real dateModified on each review and add a named reviewer.
7. **Outdated, generic legacy copy.** The homepage and /tools repeat the "Our Tools" grid ("Discover the tools that will revolutionize your hotel management", "Pricing Assistant Bot: Beta, Competitor analysis", "Talk to Sales", "Ready to optimize your hotel?"). This contradicts the /tools/bot feature pages. /marketing contains "Maximize Your Hotel's Revenue Potential". **Fix:** remove the grid or rebuild it from the feature data, and noindex or rewrite /marketing.
8. **FAQ page.** Only 142 words in HTML because the accordion answers are not server-rendered. The H1 and H2 are both "Frequently Asked Questions". It is typed FAQPage with no mainEntity, so the schema is invalid. **Fix:** server-render the answers and emit Question/Answer.
9. **Weak testimonials.** 2 of 3 are anonymous ("Hotel Management Team, Spain"). **Fix:** use named people and properties with permission, or a short case study with numbers.
10. **Boilerplate on feature pages.** On /tools/bot/dashboard, about 60 of 734 words are unique. The rest (email mock, pricing block, "More from the dashboard") repeats on all 10 pages. **Fix:** add 200-400 unique words per feature (how it works, limits, setup, FAQ).

### Low
11. Titles: "Contact  our team - Hotelier Tools | Hotelier Tools" (double space, brand twice), "...Hotelier Tools | Hotelier Tools" on /marketing and /faq, and generic "Checks for Little Hotelier". Blog titles run 66-74 characters with the suffix. **Fix:** drop the duplicate suffix and lead with the keyword.
12. The WebSite schema description is Spanish while inLanguage is en-US (nuxt.config.ts:179). Organization sameAs lists only Twitter.
13. The contact page promises "Immediate response" but states support hours of 17:00-21:00 Mon-Sat. Align the claim with the hours.
14. ES script pages have typos: "nombbre", "titulo", "no son necesario".

### Info
- en-US posts use "help centre" 42 times in 15 files, plus "Summarise" once. That is fine if it means the proper noun Help Centre; capitalize it, or use "help center" when it is generic.
- id and th lack ine-hotel-occupancy-survey and ses-hospedajes. hreflang correctly lists 8 locales for those posts.
