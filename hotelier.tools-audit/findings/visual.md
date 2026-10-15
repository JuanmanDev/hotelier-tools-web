# Visual / mobile findings (2026-10-15)
Screenshots: hotelier.tools-audit/screenshots/{home,blog,api,dash,es}-{desktop,mobile}-{fold,full}.png

Images score: 84/100

## Visual / mobile
- MEDIUM: /blog/little-hotelier-api overflows horizontally on 390px (scrollWidth 401). Offenders: .floating-icon spans (right edge 395-412) and code spans (.sZZnC, right 393-415). Fix: overflow-x:clip on the hero wrapper, overflow-x:auto/wrap on code blocks.
- MEDIUM: Tap targets. 62/88 interactive elements on mobile home, 66/123 on the API post, and 31/58 on the dashboard page are under 44px in width or height. Many are footer/inline links and the carousel items. Fix: min-height 44px with padding on nav, footer and chip links.
- LOW: Mobile nav is a hamburger ("Open menu"), plus theme and language toggles. Works. Toggle buttons are small, about 32px.
- LOW: 32 text nodes under 12px on home and 23-26 on the dashboard page (badges, captions, tab labels). Fix: 12px minimum, 14px preferred.
- PASS: One H1 per page with a clear value prop. Home: "Everything your front desk needs, in one dashboard". Primary CTAs ("Open the dashboard", "Try the demo") are above the fold on desktop and mobile. Body text is 16px.
- PASS: CLS is 0.001 on desktop and 0 on mobile. No interstitials, cookie banners or dialogs. Viewport meta is present. All five pages return 200. /es/ matches the English layout.
- INFO: On the mobile home fold the feature carousel (prev/next/pause) sits directly under the CTAs and pushes the content down. It is fine, but the pause control is small.

## Images
- LOW: Blog and demo images are served with Cache-Control: public, max-age=0, must-revalidate. Every repeat view revalidates. Fix: immutable, max-age=31536000 on hashed or static /images/*.
- LOW: favicon.svg is rendered inline at 16px with alt="" and no width/height. This is decorative, so the empty alt is fine. Add dimensions.
- LOW: /tools/bot/dashboard and /blog still serve some PNGs (about 95KB, for example images/scripts/full-width-reservation-table/to.png). Convert them to WebP/AVIF.
- PASS: Alt text is descriptive on all 29 blog-index images, the 7 API post images and the home images. None are missing. Images are WebP at about 55-65KB each. Below-fold images use loading=lazy, and only 1-2 images load eagerly. Width/height attributes are set, so no CLS.
- NOTE: naturalWidth read 0 for lazy images that had not loaded yet, so intrinsic-vs-rendered oversizing was not measured. Rendered cards are 286x178; WebP files at 55-65KB are probably larger than needed for cards, so add srcset or smaller thumbnails.
