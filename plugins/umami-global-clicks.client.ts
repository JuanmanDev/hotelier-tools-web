// One click listener for the whole site. It names each click by what it leads to (the dashboard,
// the demo, another site, a guide…) so Umami's event list reads as intent rather than as DOM noise,
// and it tags links into the dashboard and the demo with utm_* so the dashboard's own signup
// attribution (facturador web/app/utils/signupAttribution.ts) knows which page sent the visitor.

const APP_HOSTS: Record<string, 'dashboard' | 'demo'> = {
  'dashboard.hotelier.tools': 'dashboard',
  'demo.hotelier.tools': 'demo'
}

export default defineNuxtPlugin(() => {
  document.addEventListener('click', (event) => {
    const el = (event.target as HTMLElement | null)?.closest?.('a, button, [role="button"], summary') as HTMLElement | null
    if (!el) return

    const ctx = pageContext(window.location.pathname)
    const text = (el.textContent?.trim().replace(/\s+/g, ' ').slice(0, 60) || el.getAttribute('aria-label') || '').trim()
    const data: Record<string, string | number | boolean> = { page: ctx.medium, slug: ctx.campaign, locale: ctx.locale }
    if (text) data.text = text
    let name = `click_${el.tagName.toLowerCase()}`

    const anchor = el.tagName === 'A' ? el as HTMLAnchorElement : null
    if (anchor?.href) {
      let url: URL | undefined
      try { url = new URL(anchor.href, window.location.href) } catch { /* not a URL */ }
      if (url) {
        const app = APP_HOSTS[url.hostname]
        if (app) {
          // Campaign tags for the dashboard's signup attribution; a link that already carries them keeps its own
          if (!url.searchParams.has('utm_source')) {
            url.searchParams.set('utm_source', 'hotelier.tools')
            url.searchParams.set('utm_medium', ctx.medium)
            url.searchParams.set('utm_campaign', ctx.campaign)
            const content = el.closest('[data-umami-section]')?.getAttribute('data-umami-section')
            if (content) url.searchParams.set('utm_content', content)
            anchor.href = url.href
          }
          name = `click_${app}`
          data.target = url.pathname
        } else if (url.protocol === 'mailto:') {
          name = 'click_email'
        } else if (url.hostname && url.hostname !== window.location.hostname) {
          name = 'outbound_click'
          data.domain = url.hostname.replace(/^www\./, '')
          data.href = url.href.slice(0, 200)
        } else {
          data.href = url.pathname
          name = /^\/([a-z-]{2,5}\/)?blog\/./.test(url.pathname) ? 'click_guide_link' : 'click_internal'
        }
      }
    }

    // Components name their own clicks: data-umami-click='{"name":"click_blog_demo","target":"/invoices"}'
    const own = el.getAttribute('data-umami-click')
    if (own) {
      try {
        const parsed = JSON.parse(own) as Record<string, string | number | boolean>
        // A link into the dashboard or the demo keeps its classified name; the component's name goes along as `cta`
        if (parsed.name && (name === 'click_dashboard' || name === 'click_demo')) data.cta = String(parsed.name)
        else if (parsed.name) name = String(parsed.name)
        for (const [k, v] of Object.entries(parsed)) if (k !== 'name') data[k] = v
      } catch {
        data.target = own
      }
    }

    // Unnamed clicks with nothing to tell them apart are not worth an event
    if (!own && !text && !anchor) return
    trackEvent(name, data)
  }, { capture: true })
})
