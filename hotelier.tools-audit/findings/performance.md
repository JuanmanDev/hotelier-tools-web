# Performance findings - hotelier.tools (2026-10-15)

Method: Lighthouse 13.5.0 local CLI (PSI API rate-limited, no CrUX). Lab only, simulated throttling on mobile (Moto G Power, slow 4G, 4x CPU). One run per page/form factor.

Overall performance score: 91/100 (mean of mobile 86-88, desktop 99-100)

| Page | Dev | Score | LCP | FCP | TBT (INP proxy) | CLS | TTFB | JS KB | CSS KB | Img KB | Font KB | Reqs |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| / | M | 88 | 3.25s | 2.54s | 113ms | 0.000 | 24ms | 252 | 34 | 0 | 22 | 89 |
| / | D | 99 | 0.75s | 0.58s | 7ms | 0.001 | 23ms | 292 | 34 | 0 | 22 | 114 |
| /blog/little-hotelier-api | M | 86 | 3.48s | 2.54s | 116ms | 0.000 | 24ms | 281 | 34 | 56 | 22 | 96 |
| /blog/little-hotelier-api | D | 99 | 0.76s | 0.53s | 3ms | 0.001 | 29ms | 315 | 34 | 56 | 22 | 111 |
| /tools/bot/dashboard | M | 88 | 3.23s | 2.52s | 115ms | 0.000 | 24ms | 257 | 34 | 96 | 22 | 79 |
| /tools/bot/dashboard | D | 100 | 0.71s | 0.57s | 12ms | 0.001 | 23ms | 292 | 34 | 96 | 22 | 93 |
| /es/ | M | 88 | 3.39s | 2.53s | 80ms | 0.000 | 23ms | 251 | 34 | 0 | 22 | 89 |
| /es/ | D | 99 | 0.74s | 0.57s | 4ms | 0.001 | 23ms | 292 | 34 | 0 | 22 | 114 |

INP: not measurable in lab; TBT 3-116ms suggests INP likely good (<200ms), but needs field/Interaction test confirmation. FID not used.
CWV lab status (mobile): LCP needs improvement (2.5-4.0s) on all 4 pages; CLS pass; INP proxy pass. Desktop all pass.

## Findings

1. MEDIUM - Mobile LCP 3.2-3.5s, driven by FCP 2.5s (not by server). TTFB ~24ms (Vercel static prerender, excellent). LCP element on / is hero paragraph text (p.text-lg in HeroSection), so it is not an image problem; render delay ~530ms after TTFB in the breakdown. FCP is gated by render-blocking CSS plus JS. Fix: reduce blocking CSS and hydration cost before first paint (see 2, 3, 4).
2. MEDIUM - Render-blocking CSS: entry.DZeWHMBE.css (~31KB gz) plus 3 small per-component CSS files (HeroSection, default layout, EmailExamples), ~158-317ms estimated savings on mobile. Fix: enable Nuxt `features.inlineStyles` (default for SSR; verify for static preset) or `experimental.inlineSSRStyles`; purge unused Tailwind/Nuxt UI CSS.
3. MEDIUM - JS: 250-315KB transferred over 26 scripts, largest chunk 123KB (DVerSTi9.js). ~26-35KB unused JS flagged on most pages. Mobile bootup 400-660ms, main-thread work 1.4-2.4s (4x CPU throttle). Fix: lazy-hydrate below-the-fold animated components (platform showcase scenes, process animations) using `<LazyXxx hydrate-on-visible />` / `hydrate-on-idle`; dynamic import heavy animation code.
4. LOW - 79-114 requests per page (many small chunks). Mild on HTTP/2 but adds to waterfall. Fix: tune Vite manualChunks to merge tiny chunks; modulepreload only critical ones.
5. LOW - Third party: only api.iconify.design (2 runtime requests on /, ~3KB: heroicons + simple-icons). Runtime icon fetch adds a late request and can cause icons to pop in. Fix: bundle icons locally via `icon.serverBundle` / `@iconify-json/*` collections with `icon.clientBundle.scan: true`, which removes the third-party origin.
6. LOW - Fonts: single self-hosted woff2 (Space_Grotesk 300 latin, 22KB) via @nuxt/fonts; font-display insight passes. Note @nuxtjs/google-fonts is also listed in modules (config line 41; only used for ogImage fonts at line 227). Confirm it does not inject Google Fonts links into pages (none observed in requests). Fix: remove duplicate font module if unused.
7. PASS - CLS 0.000-0.001 everywhere. TTFB 23-29ms. Images small (0-96KB); homepage has no image weight (animations are CSS/DOM-based).
8. INFO - Desktop 99-100, LCP ~0.75s. Blog page desktop JS 315KB is the heaviest.

## Caveats
Single lab run per config; PSI API rate-limited; no CrUX. Mobile scores use simulated throttling and are pessimistic relative to real devices. Recommend running INP interaction tests (menu, language switcher, showcase tabs) in DevTools or adding web-vitals RUM.
