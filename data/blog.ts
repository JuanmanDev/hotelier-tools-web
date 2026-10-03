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

/** Guides that only matter in some markets and are not written in every language (Spain-only topics) */
export const BLOG_MISSING_LOCALES: Record<string, string[]> = {
  'ine-hotel-occupancy-survey': ['id', 'th'],
  'ses-hospedajes-little-hotelier': ['id', 'th']
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
