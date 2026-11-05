// Analytics helpers shared by the Umami plugins and pages

const LOCALES = new Set(['en-gb', 'es', 'fr', 'de', 'id', 'it', 'pt', 'th'])

/** What kind of page the visitor is on and which one: /es/blog/x → { medium: 'blog', campaign: 'x', locale: 'es' } */
export const pageContext = (pathname: string) => {
  const parts = pathname.split('/').filter(Boolean)
  const locale = parts[0] && LOCALES.has(parts[0]) ? parts.shift()! : 'en'
  const medium = parts[0] === 'tools' && parts[1] ? `tools-${parts[1]}` : parts[0] ?? 'home'
  const campaign = parts.length > (medium.startsWith('tools-') ? 2 : 1) ? parts[parts.length - 1]! : medium
  return { locale, medium, campaign }
}

/** Sends a Umami event; analytics never breaks the page (blocked script, private window, SSR) */
export const trackEvent = (name: string, data: Record<string, string | number | boolean> = {}) => {
  if (import.meta.server) return
  try {
    if (typeof umTrackEvent === 'function') umTrackEvent(name, data).catch(() => {})
  } catch { /* not loaded */ }
}
