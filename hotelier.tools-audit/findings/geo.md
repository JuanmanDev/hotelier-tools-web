# GEO / AI Search Readiness — hotelier.tools

Audit date: 2026-10-15. Method: live fetch (render_page.py, mode never; all pages SSR, `is_spa=false`), AI user-agent tests, source review (C:\code\hotelier-tools-web), off-site probes (Bing, GitHub API, Wikipedia API, YouTube, Reddit).

## AI Search Readiness sub-score: 66 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 78 | 19.5 |
| Structural readability | 20% | 82 | 16.4 |
| Multi-modal content | 15% | 50 | 7.5 |
| Authority and brand signals | 20% | 25 | 5.0 |
| Technical accessibility | 20% | 88 | 17.6 |
| **Total** | | | **66** |

Platform estimates: Google AIO 62, ChatGPT Search 58, Perplexity 68, Bing Copilot 55. These are judgement calls, not measured values. Bing indexation could not be checked: the scraped `site:` results were unrelated. Verify in Bing Webmaster Tools.

## AI crawler access

robots.txt has no bot-specific groups. `User-agent: *` / `Allow: /` covers every crawler (only /admin and /api are disallowed). Live test on /blog/little-hotelier-api: every user agent got HTTP 200 with the same 125,313-byte body, so there is no WAF or UA blocking.

| Bot | Governs | Status |
|---|---|---|
| OAI-SearchBot | ChatGPT Search citation | Allowed |
| Claude-SearchBot | Claude search citation | Allowed |
| PerplexityBot | Perplexity search | Allowed |
| Googlebot / Bingbot | Google AIO / Copilot inclusion | Allowed |
| GPTBot | OpenAI training only | Allowed |
| ClaudeBot | Anthropic training only | Allowed |
| Google-Extended | Gemini training/grounding (not AIO) | Allowed |
| Applebot-Extended | Apple Intelligence training only | Allowed |
| CCBot, cohere-ai | Training | Allowed |

Allowing training bots fits a small brand that wants LLMs to learn the entity. No change needed.

## llms.txt: present and well formed (8,979 bytes)

It has an H1, a blockquote summary that says "Not affiliated with SiteMinder", 25 guides with descriptions, features and free tools. Gaps:
- The Features links use bare slugs ("api-mcp", "ine-reports") and have no descriptions.
- There is no `/llms-full.txt` (404).
- There is no link to the OpenAPI spec or the MCP endpoint URL.
- There is no RSL 1.0 license (`/license.xml` returns 404). This is optional.

## Findings

### HIGH 1. Homepage stats are served as "0%" to every crawler
Evidence: the SSR HTML reads "0% Error reduction 0h Daily time saved 0% Conversion increase 0/7 Continuous monitoring". In `components/StatsSection.vue:44-47` the real values are 95/3/15/24, but they only appear after `onMounted` and an IntersectionObserver fire. The claims also have no source.
Fix: render the target values in SSR and animate on the client only. Better still, replace them with stats you can attribute (for example "N properties, X invoices generated, measured <date>"), or remove the section.

### HIGH 2. Weak entity and authorship signals
Evidence:
- The author of every BlogPosting is the Organization "Hotelier Tools". There is no Person.
- /about, /privacy, /terms and /pricing all return 404.
- The Organization `sameAs` lists only twitter.com/hoteliertools.
- The schema has two Organization nodes (`#identity` and `#organization`).
- The contact address is an outlook.com alias.
- One of the two testimonials is attributed to "Hotel Management Team, Spain".

Fix:
- Add an /about page naming the operator (Juan Manuel Bécares, Spain), the independence from SiteMinder, and contact details.
- Add a Person author with `sameAs` (GitHub JuanmanDev, LinkedIn) to the posts.
- Merge the two Organization nodes into one and add `founder`, `description`, `email` and `sameAs` (GitHub, X, Ko-fi).
- Publish privacy and terms pages. This matters for a SaaS that handles guest data.

### HIGH 3. Almost no off-site brand footprint
Evidence:
- Bing searches for "hotelier tools" + "little hotelier" and for "hotelier.tools" returned no third-party mentions.
- Wikipedia search returned 0 hits, and there is no Little Hotelier article.
- Both GitHub repos have 0 stars.
- The YouTube search returned no brand videos.
- Reddit could not be checked (the API refused the request).

Fix:
- Publish short YouTube demos of the MCP and Claude/ChatGPT setup. YouTube mentions have the strongest correlation with AI citations.
- Answer Little Hotelier threads on Reddit (r/hotels, r/hospitality, r/airbnb_hosts) and in the SiteMinder community.
- List the MCP server in MCP registries (official registry, Smithery, mcp.so, Glama).
- Add a Capterra/AlternativeTo listing.

### MEDIUM 4. Brand name and language inconsistency
Evidence:
- The WebSite schema `description` is Spanish on the EN page ("Herramientas para optimizar la gestión...", nuxt.config.ts:179).
- Variants in source: "Hotelier Tools" (2,621), "hotelier.tools" (413), "Hotelier-Tools" (26), "hotelierTools" (5).
- The legacy homepage sections use old "Bot" naming and weak English ("Auto Check all data", "Using the data directly makes it very fast to get").

Fix: localize the schema description, use "Hotelier Tools" as the brand with hotelier.tools as the domain only, and rewrite or remove the legacy homepage blocks.

### MEDIUM 5. /tools/bot/api-mcp feature page is thin and not answer-first
Evidence:
- The page has 756 words, and most of them are cards linking to guides.
- "What it does" has only 36 words.
- There is no FAQ, and no endpoint, MCP URL, rate-limit or auth facts.
- There is no `dateModified`.

Fix: open with a 2-3 sentence definition ("Hotelier Tools provides a REST API and MCP server for Little Hotelier..."), then add the MCP endpoint, supported clients, the 100 req/min limit, OpenAPI link, scopes, a FAQ and a visible date.

### LOW 6. Other issues
- `dateModified` always equals `datePublished`.
- There is no video anywhere.
- The GitHub repo homepage points to hotelier-tools-web.vercel.app. That host is indexable, but it canonicalizes to hotelier.tools.

## Strengths
- Blog posts are excellent citation sources:
  - Answer-first intros ("Not one you can use for your own bookings. As of October 2026...").
  - Question H2s and dated claims ("checked on 3 October 2026").
  - 12-23 external citations per post.
  - Comparison tables, FAQ blocks with FAQPage schema, and 1,500-2,000 words.
- Full SSR, so AI crawlers get complete HTML.

## Top 5 changes (impact / effort)
1. SSR the stats values or replace them with sourced figures. High impact, 30 min.
2. Add an /about page, a Person author, and consolidated Organization schema with `sameAs`. High impact, 3 h.
3. Seed off-site mentions: MCP registries, 2-3 YouTube demos, Reddit/community answers. High impact, ongoing (about 1 day to start).
4. Rewrite /tools/bot/api-mcp answer-first with concrete facts and a FAQ. Medium impact, 2 h.
5. Fix the Spanish schema description and brand variants, add descriptions to the llms.txt Features list, and add llms-full.txt. Medium impact, 1 h.

## audit-data.json (AI Search Readiness)
```json
{"category":"AI Search Readiness","score":66,"dimensions":{"citability":78,"structural":82,"multimodal":50,"authority":25,"technical":88},
"findings":[
{"id":"geo-stats-zero","severity":"high","title":"Homepage stats SSR as 0%","evidence":"components/StatsSection.vue:44-47 animated onMounted","fix":"Render values server-side or replace with sourced stats"},
{"id":"geo-entity","severity":"high","title":"No person author, no /about, minimal sameAs, duplicate Organization nodes","fix":"About page, Person author, merged Organization with sameAs"},
{"id":"geo-offsite","severity":"high","title":"No third-party brand mentions found","fix":"YouTube demos, MCP registries, Reddit/community, review sites"},
{"id":"geo-brand-lang","severity":"medium","title":"Spanish WebSite description on EN pages; brand name variants","evidence":"nuxt.config.ts:179","fix":"Localize, standardize 'Hotelier Tools'"},
{"id":"geo-api-mcp-thin","severity":"medium","title":"/tools/bot/api-mcp not answer-first, no FAQ/facts","fix":"Definition lead, endpoint facts, FAQ, date"},
{"id":"geo-llms","severity":"low","title":"llms.txt Features lack descriptions; no llms-full.txt","fix":"Add descriptions and llms-full.txt"},
{"id":"geo-dates","severity":"low","title":"dateModified equals datePublished; no video","fix":"Track real modified dates; add video"}],
"crawlers":{"all":"allowed","ua_blocking":"none"},"llms_txt":"present"}
```
