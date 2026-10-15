# Agent readiness: hotelier.tools (checked 2026-10-15)

Lighthouse Agentic Browsing: unavailable (PSI HTTP 429 quota, mobile and desktop). Needs a Google API key; rerun later.
Agent-UX heuristic (separate from Lighthouse): / 97, /tools/bot/dashboard 97, /tools/bot/api-mcp 97, /contact 91 (all complete).
Agent-readiness sub-score: 80/100 (editorial, from the checks below).

## Access policy
- Training: no named groups, no Content-Signal; falls to `*` Allow (open).
- Search: open (`*` Allow /, Disallow /admin, /api and locale variants); sitemaps declared.
- User-triggered: not blocked. Claude-User honours robots; ChatGPT-User may not; Perplexity-User and Google-Agent generally ignore.

## Findings
- P1 (medium) /contact: 3 interactive nodes without accessible name; 5 inputs rely on no aria attributes (labels exist). Fix: aria-label or visible text on icon buttons, aria-describedby/required/autocomplete on inputs.
- P2 (low) 1 unnamed interactive node on /, dashboard page and api-mcp page (likely shared header/footer icon control). Fix once in layout.
- P2 (low) No Content-Signal and no named AI groups. Optional: add `Content-Signal: search=yes, ai-input=yes, ai-train=no` (Cloudflare CC0 policy; IETF draft expired 2026-04-04; Google does not act on it). State deliberately given the product wants assistants to find it.
- P2 (opportunity) No /.well-known/ai-catalog.json, api-catalog (RFC 9727), mcp or mcp/server-card.json (all 404 with HTML). Product exposes a REST API and MCP server, so an api-catalog linkset pointing to the MCP URL and docs is a genuine fit. ai-catalog and MCP Server Card (SEP-2127, unmerged as of 2026-09-12) are drafts.
- P3 (opportunity) No Markdown delivery (Accept: text/markdown ignored, no Vary, /index.md 404, no rel=alternate). No consumer agent confirmed to request it (2026-09-23). Low value; llms.txt already covers it.
- P3 (opportunity) WebMCP: 0 registerTool calls, 0 forms. Draft W3C CG spec; Chrome origin trial M149-M156; WebKit opposes. Candidate tools: contact form, demo launch. Not a defect.
- P3 llms.txt: 200, text/plain, 8,977 bytes, passes Lighthouse rules; llms-full.txt 404 (optional). Google Search ignores llms.txt.

## Passes
Server-rendered (1,484 words without JS), robots.txt 200, real 404s (no soft-404), 16 landmarks, 30 real buttons, 57 anchors, zero div-onclick widgets, 1,657-node a11y tree.

## Standards notes (vendor-matrix checked 2026-09-23)
WebMCP, Content-Signal, ai-catalog.json, MCP Server Card, Web Bot Auth are drafts/proposals. Lighthouse current 13.5.0.
