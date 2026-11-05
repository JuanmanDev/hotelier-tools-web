// Engaged time per page: only while the tab is visible, sent once when the visitor leaves the page
// (another route, tab hidden, or the tab closing). Also tells Umami a little about the session.
export default defineNuxtPlugin((nuxtApp) => {
  let currentPath = ''
  let visibleSince = 0
  let engagedMs = 0

  const flush = () => {
    if (!currentPath) return
    if (visibleSince) engagedMs += Date.now() - visibleSince
    visibleSince = document.visibilityState === 'visible' ? Date.now() : 0
    const seconds = Math.round(engagedMs / 1000)
    engagedMs = 0
    // Under two seconds is a bounce through a redirect, not reading
    if (seconds < 2) return
    const ctx = pageContext(currentPath)
    trackEvent('time_spent', { seconds, page: ctx.medium, slug: ctx.campaign, locale: ctx.locale, bucket: seconds < 15 ? '<15s' : seconds < 60 ? '15-60s' : seconds < 180 ? '1-3m' : '3m+' })
  }

  nuxtApp.hook('page:finish', () => {
    if (currentPath === window.location.pathname) return
    currentPath = window.location.pathname
    engagedMs = 0
    visibleSince = document.visibilityState === 'visible' ? Date.now() : 0
  })

  useRouter().beforeEach((to, from) => {
    if (from.path !== to.path) flush()
  })

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flush()
    else visibleSince = Date.now()
  })
  // pagehide also fires on mobile Safari and with the back/forward cache, where beforeunload doesn't
  window.addEventListener('pagehide', flush)

  // Session details shown in Umami's session view: the site language the visitor reads,
  // light or dark scheme and a coarse device class (no identifiers)
  nuxtApp.hook('app:mounted', () => {
    try {
      if (typeof umIdentify !== 'function') return
      const ctx = pageContext(window.location.pathname)
      umIdentify({
        site_locale: ctx.locale,
        landing_page: ctx.medium,
        color_scheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
        device: window.innerWidth < 640 ? 'phone' : window.innerWidth < 1024 ? 'tablet' : 'desktop'
      }).catch(() => {})
    } catch { /* analytics not loaded */ }
  })
})
