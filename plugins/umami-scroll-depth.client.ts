// How far down each page people read: one event per threshold per page view, with the page kind,
// slug and language so guides can be compared with each other in Umami
export default defineNuxtPlugin(() => {
  const THRESHOLDS = [25, 50, 75, 90]
  let tracked = new Set<number>()
  let ticking = false

  const measure = () => {
    ticking = false
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    if (docHeight <= 200) return
    const scrolled = (window.scrollY / docHeight) * 100
    for (const threshold of THRESHOLDS) {
      if (scrolled >= threshold && !tracked.has(threshold)) {
        tracked.add(threshold)
        const ctx = pageContext(window.location.pathname)
        trackEvent('scroll_depth', { depth: threshold, page: ctx.medium, slug: ctx.campaign, locale: ctx.locale })
      }
    }
  }

  document.addEventListener('scroll', () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(measure)
  }, { passive: true })

  useRouter().afterEach((to, from) => {
    if (to.path !== from.path) tracked = new Set()
  })
})
