# SXO Findings: hotelier.tools

Audit date: 2026-10-15. Method: SERP backwards analysis (WebSearch, US index), with each page rendered by `render_page.py` (`--mode auto`, plus `--mode always` for `/`). Every page returned 200 and is SSR (raw HTML == rendered HTML, `is_spa=false`).

**SXO Gap Score is separate from the SEO Health Score.**

---

## 1. Lead finding: page-type mismatches

| Query | SERP dominant type (evidence) | Target page / type | Severity |
|---|---|---|---|
| little hotelier chrome extension | **Product/store listing**: about 5/9 results are Chrome Web Store or extension directories (chromewebstore.google.com, chrome.google.com x3, extscope, chromeboard). None of them is a Little Hotelier extension, so this is an unclaimed SERP | `/` (Landing). The rendered homepage has **0 mentions of "Chrome"** and 0 links to Tampermonkey or GitHub. The secondary URL `/blog/little-hotelier-chrome-extensions` is a Blog Post (1,433 words, Tampermonkey install guide) | **CRITICAL** (home) / **HIGH** (blog) |
| little hotelier tools | **Comparison**: 9/9 results are Capterra/GetApp "Little Hotelier vs Host Tools / Superhost Tools" pages. The query collides with competitor brand "Host Tools" | `/` (Landing). The H1 "Everything your front desk needs, in one dashboard" does not mention Little Hotelier. A brand query for "hotelier.tools" returned **no hotelier.tools URL** | **HIGH** |
| little hotelier dashboard (inferred for `/tools/bot/dashboard`) | **Blog/How-to help docs**: RoomPriceGenie knowledge base (x5), HotelTechReport, Capterra | `/tools/bot/dashboard` (Landing/feature). Title "Overview for Little Hotelier", H1 "Your property at a glance", about 114 words of unique main copy. Its hero block is **duplicated word for word on `/`**: same H3, same description, same 4 feature cards | **MEDIUM** |
| little hotelier alternatives | **Comparison**: 10/10 results are Capterra/GetApp alternatives directories with star ratings and review counts (Guesty Lite 4.7/547, Hostaway 4.8/1,524) | `/blog/little-hotelier-alternatives` is a Comparison blog with a table, 6 vendors, FAQ and an "as of 3 Oct 2026" check | **ALIGNED** (gap: no ratings or review counts, no ItemList) |
| little hotelier api | **Hybrid/Docs**: supergood.ai unofficial API docs plus "API report card: F", HotelTechReport review ("can't set up API connections"), itqlick, GetApp | `/blog/little-hotelier-api` is a Hybrid with a direct answer up front, an official-options table, curl examples and 3 tables | **ALIGNED** (supergood.ai is the direct competitor) |
| booking.com commission | **Blog Post**: 9/9 are vendor blogs (Guesty x3, SiteMinder x2, Wise, TravelNest, MotoPress, Host Tools), mostly framed for "hosts" and vacation rentals. The long-tail SERP adds the Swiss Price Supervisor ruling (Skift, May 2025) | `/blog/booking-com-commission` is a Blog Post (1,766 words, worked example, cites Partner Help) | **ALIGNED** (gaps: no Swiss ruling, no inline calculator) |
| ses hospedajes little hotelier | **No result connects the two topics**. Results are generic Little Hotelier listings, plus Chekin and civitfun for the regulation | `/es/blog/ses-hospedajes-little-hotelier` is a Blog Post (2,110 words). It answers directly up front, cites RD 933/2021 and the BOE, and includes a legal disclaimer | **ALIGNED**, uncontested opportunity |

## 2. Sitewide SXO defects

1. **HIGH: the stats block shows "0%" to crawlers and AI fetchers.** `/` serves "0% Error reduction, 0h Daily time saved, 0% Conversion increase, 0/7" in raw HTML. A Playwright render shows the same thing, because the counter only animates after an IntersectionObserver fires. Source: `components/StatsSection.vue:40` (`ref([0,0,0,0])`). Fix: server-render the real values and animate client-side only. Also back up the 95% claim or remove it.
2. **HIGH: no person author.** Every BlogPosting uses `author: Organization "Hotelier Tools"`, and no page has a bio. Run `/seo content` (E-E-A-T).
3. **MEDIUM: the homepage has no SoftwareApplication/Offer schema.** Feature pages declare `Offer price "0"` with no mention of the €50/month price from 10 Jan 2027. Run `/seo schema`.
4. **MEDIUM: weak testimonials.** 2 of the 3 testimonials are anonymous ("Hotel Management Team", "Hotel Reception Staff"). There are no ratings and no directory listings.
5. **MEDIUM: the "not affiliated with SiteMinder" disclaimer is missing on `/`.** It appears on the blog pages (1-3 hits each) but not on the homepage.

## 3. User stories

1. **Front-desk staff (Decision).** I want to click "Add to Chrome" and get a faster Little Hotelier, but I'm blocked by **technical confusion**: Tampermonkey plus the "Allow User Scripts" toggle. *(Signal: the chrome-extension SERP is all Web Store listings.)*
2. **Owner thinking of switching (Consideration).** I want a rated shortlist, but I'm blocked by **comparison fatigue** and a lack of ratings. *(Signal: 10/10 directories showing star counts.)*
3. **Developer or MCP user (Consideration to Decision).** I want working endpoints today, but I'm blocked by a **trust gap**: is an unofficial API allowed? *(Signal: supergood "F, no customer-facing API" and the HotelTechReport complaint.)*
4. **Owner watching revenue (Awareness).** I want my real net per booking, but I'm blocked by **price sensitivity** and conflicting rate claims. *(Signal: 10-25% and "15% average" across vendor blogs, plus the Swiss ruling.)*
5. **Spanish owner (Awareness to Decision).** I want to know whether Little Hotelier sends SES.Hospedajes reports automatically, but I'm blocked by an **information gap**. *(Signal: no SERP result answers this.)*

## 4. Persona scores (out of 100: Relevance / Clarity / Trust / Action, 25 each)

| Persona | Page | R | C | T | A | Total | Rating |
|---|---|---|---|---|---|---|---|
| Front-desk staff | `/` + chrome blog | 17 | 12 | 13 | 12 | **54** | Needs Work |
| Small hotel owner | `/` | 20 | 17 | 11 | 19 | **67** | Good |
| Owner switching PMS | alternatives | 20 | 19 | 13 | 15 | **67** | Good |
| Spanish compliance owner | ses | 22 | 20 | 19 | 16 | **77** | Good |
| Developer using MCP | api + /tools/bot/api-mcp | 23 | 21 | 15 | 20 | **79** | Good |

**Weakest is front-desk staff.** Fix: publish a Chrome Web Store extension called "Hotelier Tools for Little Hotelier" that bundles the scripts. Add a homepage section titled "Chrome extension for Little Hotelier" with an "Add to Chrome" CTA linking to the store, and a secondary link to `/blog/little-hotelier-chrome-extensions`.
**Systemic weakness: Trust** (lowest dimension across personas). The causes are the anonymous testimonials, the organization-only author, the 0% stats, and the missing disclaimer on `/`.

## 5. SXO Gap Scores (Type 15 / Depth 15 / UX 15 / Schema 15 / Media 15 / Authority 15 / Freshness 10)

| Page | Type | Depth | UX | Schema | Media | Auth | Fresh | Total |
|---|---|---|---|---|---|---|---|---|
| `/` | 7 | 10 | 11 | 6 | 11 | 5 | 8 | **58** |
| /tools/bot/dashboard | 6 | 4 | 11 | 11 | 9 | 3 | 8 | **52** |
| /blog/little-hotelier-alternatives | 12 | 13 | 12 | 10 | 9 | 7 | 10 | **73** |
| /blog/little-hotelier-api | 14 | 14 | 13 | 12 | 11 | 8 | 10 | **82** |
| /blog/booking-com-commission | 14 | 13 | 12 | 11 | 10 | 7 | 10 | **77** |
| /es/blog/ses-hospedajes-little-hotelier | 14 | 14 | 12 | 11 | 10 | 9 | 10 | **80** |

## 6. Priority fixes

1. Claim the empty chrome-extension SERP: a Web Store listing plus a homepage section. **CRITICAL**
2. Server-render the real stats values in StatsSection.vue. **HIGH**
3. Get onto the directory-owned SERPs: list Hotelier Tools on Capterra, GetApp and HotelTechReport as a Little Hotelier add-on. Put "Little Hotelier" in the H1 on `/`. **HIGH**
4. Rewrite `/tools/bot/dashboard`: retitle it "Little Hotelier dashboard: arrivals, checks and search in one screen" and add at least 400 words of unique copy (how it differs from the Little Hotelier front desk), plus a FAQ. Remove the duplicate block on `/` or cut it to a teaser. **MEDIUM**
5. Booking.com commission: add an inline net-revenue calculator (Tool hybrid), a Swiss-ruling paragraph, and a "hosts / vacation rentals" subsection. **MEDIUM**
6. Alternatives: add a rating/reviews column with sources and ItemList schema, and cover Guesty and Hostaway as the directories do. **MEDIUM**
7. Person authors with bios on all guides. **HIGH** (`/seo content`)

## 7. Limitations

- The WebSearch tool does not expose PAA, ads, AI Overviews, featured snippets or exact rank positions. Intent is inferred from result titles, domains and snippets only.
- Results are US-indexed. The Spanish query was not checked against a localized google.es SERP.
- No search volume or GSC data was available, so persona weights are estimated.
- `/tools/bot/dashboard` had no stated keyword, so "little hotelier dashboard" is inferred.
- The brand query returned no hotelier.tools URL. Indexation needs confirming in GSC (out of SXO scope).

## 8. Structured findings (audit-data.json, category "Search Experience")

```json
[
 {"id":"sxo-1","severity":"critical","page":"/","query":"little hotelier chrome extension","finding":"SERP is Chrome Web Store listings; homepage has 0 'Chrome' mentions; no store listing exists","fix":"Publish Web Store extension + homepage 'Add to Chrome' section"},
 {"id":"sxo-2","severity":"high","page":"/","finding":"Stats SSR render as 0%/0h (StatsSection.vue:40)","fix":"Server-render real values; animate client-side"},
 {"id":"sxo-3","severity":"high","page":"/","query":"little hotelier tools","finding":"SERP 9/9 Capterra/GetApp comparison pages; brand query returns no hotelier.tools URL","fix":"List on Capterra/GetApp/HotelTechReport; add 'Little Hotelier' to H1"},
 {"id":"sxo-4","severity":"high","page":"/blog/*","finding":"BlogPosting author is Organization; no person bios","fix":"Person author + bio page"},
 {"id":"sxo-5","severity":"medium","page":"/tools/bot/dashboard","finding":"~114 words unique copy; hero duplicated on /; SERP for 'little hotelier dashboard' is help docs","fix":"Retitle, expand to 400+ words, FAQ, de-duplicate"},
 {"id":"sxo-6","severity":"medium","page":"/","finding":"No SoftwareApplication/Offer schema on homepage; Offer price 0 omits 50 EUR from 2027","fix":"Add schema with priceSpecification"},
 {"id":"sxo-7","severity":"medium","page":"/blog/booking-com-commission","finding":"Aligned; lacks calculator and Swiss ruling","fix":"Inline net calculator, Swiss ruling section"},
 {"id":"sxo-8","severity":"medium","page":"/blog/little-hotelier-alternatives","finding":"Aligned; directories win with ratings","fix":"Ratings column + ItemList schema"},
 {"id":"sxo-9","severity":"low","page":"/es/blog/ses-hospedajes-little-hotelier","finding":"Aligned, uncontested SERP","fix":"Maintain; verify google.es SERP"}
]
```

Sources: [Chrome Web Store](https://chromewebstore.google.com/detail/jdedooomfkfpaphmachcibnagigciagp?hl=en-GB), [extscope](https://extscope.org/extension/jdedooomfkfpaphmachcibnagigciagp), [Capterra alternatives](https://www.capterra.ae/alternatives/144307/little-hotelier), [GetApp LH vs Host Tools](https://www.getapp.co.nz/compare/105201/2058126/little-hotelier/vs/host-tools), [supergood docs](https://supergood.ai/docs/little-hotelier-api), [supergood report card](https://supergood.ai/api-report-card/little-hotelier), [HotelTechReport](https://hoteltechreport.com/reviews/gn7m17ozkm93), [Guesty](https://www.guesty.com/blog/how-much-does-booking-com-charge-hosts), [SiteMinder](https://www.siteminder.com/r/booking-com-fees/), [Skift Swiss ruling](https://skift.com/2025/05/21/booking-holdings-hotel-commissions-too-high-swiss-watchdog-orders-25-cut/), [RoomPriceGenie](https://help.roompricegenie.com/knowledge/how-to-generate-reports-in-little-hotelier), [civitfun](https://www.civitfun.com/blog/wp-json/wp/v2/posts/10), [Chekin](https://chekin.com/?p=53569)
