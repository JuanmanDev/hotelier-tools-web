// Blog guides about Little Hotelier and the Hotelier Tools dashboard.
// Articles live in content/blog/<locale>/<slug>.md and share the same slug in every language,
// so a translation is found by swapping the locale. Texts for categories live in i18n under `blog.categories.<id>`.

export interface BlogCategory {
  id: 'ai' | 'api' | 'invoicing' | 'operations' | 'pricing' | 'guests' | 'compliance' | 'tips'
  icon: string
  /** Accent family from data/platform.ts ACCENTS */
  accent: string
}

export const blogCategories: BlogCategory[] = [
  { id: 'ai', icon: 'i-heroicons-sparkles', accent: 'violet' },
  { id: 'api', icon: 'i-heroicons-code-bracket', accent: 'slate' },
  { id: 'invoicing', icon: 'i-heroicons-document-text', accent: 'emerald' },
  { id: 'operations', icon: 'i-heroicons-shield-check', accent: 'amber' },
  { id: 'pricing', icon: 'i-heroicons-chart-bar-square', accent: 'indigo' },
  { id: 'guests', icon: 'i-heroicons-inbox-stack', accent: 'sky' },
  { id: 'compliance', icon: 'i-heroicons-map', accent: 'rose' },
  { id: 'tips', icon: 'i-heroicons-light-bulb', accent: 'teal' }
]

export const categoryById = (id?: string) => blogCategories.find(c => c.id === id) ?? blogCategories[blogCategories.length - 1]!

/** Frontmatter of a blog article; Nuxt Content keeps unknown keys under `meta` */
export interface BlogMeta {
  /** Shorter title for the browser tab and search results when the headline is long */
  seoTitle?: string
  date: string
  updated?: string
  category: BlogCategory['id']
  tags?: string[]
  keywords?: string[]
  /** Slug of the related dashboard feature (data/platform.ts), used for the call to action */
  feature?: string
  /** Page of the demo that shows what the article explains */
  demoPath?: string
  cover?: string
  coverAlt?: string
  /** Shown first on the blog index */
  featured?: boolean
  faq?: { q: string, a: string }[]
}

export interface BlogListItem {
  path: string
  title: string
  description: string
  meta: BlogMeta
}

/** Guides not written in every language yet; links to them in those languages open the English version */
export const BLOG_MISSING_LOCALES: Record<string, string[]> = {}

/** Person who writes and reviews the guides (see /about) */
export const AUTHOR_NAME = 'Juan Manuel Béc.'

/** Hub guide of each topic cluster; listed before the other guides of a feature */
export const BLOG_HUB_SLUGS = [
  'what-is-mcp-server-hotels',
  'little-hotelier-integrations',
  'download-all-little-hotelier-invoices',
  'hotel-front-desk-checklist-automation',
  'dynamic-pricing-little-hotelier',
  'whatsapp-little-hotelier',
  'guest-registration-rules-by-country',
  'little-hotelier-tips'
]

/** Guides that explain a feature but name another one in `feature:` (frontmatter takes a single slug).
 *  Keyed by feature slug (data/platform.ts); shown after the feature's own guides. */
export const FEATURE_RELATED_GUIDES: Record<string, string[]> = {
  automations: ['hotel-front-desk-checklist-automation', 'send-invoice-to-guest-at-checkout', 'hotel-waitlist-sold-out-dates']
}

/** Slug of an article from its content path: /blog/<locale>/<slug> */
export const blogSlug = (path: string) => path.split('/').pop() ?? ''

/** Minutes to read a minimark body. Thai is written without spaces, so it is measured in characters. */
export const readingMinutes = (body: unknown, locale: string) => {
  const parts: string[] = []
  const walk = (node: unknown) => {
    if (typeof node === 'string') parts.push(node)
    else if (Array.isArray(node)) node.slice(2).forEach(walk)
  }
  const value = (body as { value?: unknown[] } | undefined)?.value
  if (Array.isArray(value)) value.forEach(walk)
  const text = parts.join(' ')
  const minutes = locale === 'th' ? text.length / 900 : text.split(/\s+/).filter(Boolean).length / 220
  return Math.max(1, Math.round(minutes))
}
