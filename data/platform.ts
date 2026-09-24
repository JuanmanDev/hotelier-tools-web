// Feature slides for the Hotelier Tools dashboard (dashboard.hotelier.tools).
// Status mirrors the badges shown inside the app. Texts live in i18n under `platform.slides.<id>`.

export type FeatureStatus = 'stable' | 'beta' | 'alpha' | 'soon'

export interface PlatformSlide {
  id: 'overview' | 'invoicing' | 'checks' | 'pricing' | 'inbox' | 'ai' | 'reports' | 'waitlist' | 'automations' | 'developer'
  /** URL of the landing page: /tools/bot/<slug> */
  slug: string
  /** Page of the feature inside the app, used for deep links into the dashboard and the demo */
  appPath: string
  icon: string
  status: FeatureStatus
  /** Tailwind colour family used for the slide accent */
  accent: string
  items: { id: string, status: FeatureStatus }[]
}

export const DASHBOARD_URL = 'https://dashboard.hotelier.tools/'
// Public demo with invented data; the sign-in details are shown on its login page
export const DEMO_URL = 'https://demo.hotelier.tools/'

export const platformSlides: PlatformSlide[] = [
  {
    id: 'overview',
    appPath: '/',
    slug: 'dashboard',
    icon: 'i-heroicons-squares-2x2',
    status: 'beta',
    accent: 'blue',
    items: [
      { id: 'glance', status: 'beta' },
      { id: 'search', status: 'beta' },
      { id: 'property', status: 'beta' },
      { id: 'secure', status: 'beta' }
    ]
  },
  {
    id: 'invoicing',
    appPath: '/invoices',
    slug: 'invoicing',
    icon: 'i-heroicons-document-text',
    status: 'stable',
    accent: 'emerald',
    items: [
      { id: 'download', status: 'stable' },
      { id: 'on_leave', status: 'beta' },
      { id: 'preflight', status: 'stable' },
      { id: 'errors', status: 'stable' },
      { id: 'language', status: 'stable' }
    ]
  },
  {
    id: 'checks',
    appPath: '/automated-checks',
    slug: 'automated-checks',
    icon: 'i-heroicons-shield-check',
    status: 'beta',
    accent: 'amber',
    items: [
      { id: 'lifecycle', status: 'beta' },
      { id: 'issues', status: 'beta' },
      { id: 'watchlist', status: 'beta' },
      { id: 'emails', status: 'beta' }
    ]
  },
  {
    id: 'pricing',
    appPath: '/price-recommendations',
    slug: 'dynamic-pricing',
    icon: 'i-heroicons-chart-bar-square',
    status: 'alpha',
    accent: 'indigo',
    items: [
      { id: 'competitors', status: 'beta' },
      { id: 'recommendations', status: 'alpha' },
      { id: 'rules', status: 'alpha' },
      { id: 'events', status: 'alpha' },
      { id: 'autopilot', status: 'alpha' },
      { id: 'stop_sell', status: 'alpha' }
    ]
  },
  {
    id: 'inbox',
    appPath: '/messaging',
    slug: 'guest-inbox',
    icon: 'i-heroicons-inbox-stack',
    status: 'alpha',
    accent: 'sky',
    items: [
      { id: 'unified', status: 'alpha' },
      { id: 'auto_drafts', status: 'alpha' },
      { id: 'booking_qa', status: 'alpha' },
      { id: 'reply_modes', status: 'alpha' },
      { id: 'knowledge', status: 'alpha' },
      { id: 'training', status: 'alpha' },
      { id: 'safety', status: 'alpha' }
    ]
  },
  {
    id: 'ai',
    appPath: '/chat',
    slug: 'ai-assistant',
    icon: 'i-heroicons-sparkles',
    status: 'beta',
    accent: 'violet',
    items: [
      { id: 'chat', status: 'beta' },
      { id: 'approvals', status: 'beta' },
      { id: 'staff', status: 'alpha' },
      { id: 'teams', status: 'soon' }
    ]
  },
  {
    id: 'reports',
    appPath: '/reports/guest-origins',
    slug: 'ine-reports',
    icon: 'i-heroicons-map',
    status: 'stable',
    accent: 'rose',
    items: [
      { id: 'origins', status: 'stable' },
      { id: 'submit', status: 'stable' },
      { id: 'saved', status: 'stable' }
    ]
  },
  {
    id: 'waitlist',
    appPath: '/availability-watch',
    slug: 'waitlist',
    icon: 'i-heroicons-bell-alert',
    status: 'beta',
    accent: 'teal',
    items: [
      { id: 'watch', status: 'beta' },
      { id: 'notify', status: 'beta' },
      { id: 'form', status: 'beta' }
    ]
  },
  {
    id: 'automations',
    appPath: '/cron',
    slug: 'automations',
    icon: 'i-heroicons-clock',
    status: 'beta',
    accent: 'orange',
    items: [
      { id: 'schedules', status: 'beta' },
      { id: 'history', status: 'beta' },
      { id: 'breaker', status: 'beta' },
      { id: 'one_click', status: 'beta' }
    ]
  },
  {
    id: 'developer',
    appPath: '/developer/rest-api',
    slug: 'api-mcp',
    icon: 'i-heroicons-code-bracket',
    status: 'beta',
    accent: 'slate',
    items: [
      { id: 'rest', status: 'beta' },
      { id: 'mcp', status: 'beta' },
      { id: 'cards', status: 'alpha' }
    ]
  }
]

export const statusBadgeColor: Record<FeatureStatus, 'success' | 'warning' | 'info' | 'neutral'> = {
  stable: 'success',
  beta: 'warning',
  alpha: 'info',
  soon: 'neutral'
}

// The app returns to the requested page after sign-in, so these links survive the demo login
export const demoUrl = (feature: PlatformSlide) => new URL(feature.appPath, DEMO_URL).href
export const dashboardUrl = (feature: PlatformSlide) => new URL(feature.appPath, DASHBOARD_URL).href

// Old bot pages (/tools/bot/<old>) that now live on a feature page; answered with a 301
export const LEGACY_BOT_SLUGS: Record<string, string> = {
  checkout: 'automated-checks',
  payments: 'automated-checks',
  guests: 'automated-checks',
  unconfirmed: 'automated-checks',
  prices: 'dynamic-pricing',
  invoices: 'invoicing'
}

export const featureBySlug = (slug: string) => platformSlides.find(s => s.slug === slug)

// Light and dark tones for each accent family
export const ACCENTS: Record<string, [string, string]> = {
  blue: ['#2563eb', '#60a5fa'],
  emerald: ['#059669', '#34d399'],
  amber: ['#d97706', '#fbbf24'],
  indigo: ['#4f46e5', '#818cf8'],
  sky: ['#0284c7', '#38bdf8'],
  violet: ['#7c3aed', '#a78bfa'],
  rose: ['#e11d48', '#fb7185'],
  teal: ['#0d9488', '#2dd4bf'],
  orange: ['#ea580c', '#fb923c'],
  slate: ['#475569', '#94a3b8']
}

export const accentVars = (accent: string) => {
  const [light, dark] = ACCENTS[accent] ?? ACCENTS.blue!
  return { '--accent-light': light, '--accent-dark': dark }
}

export const statusText: Record<FeatureStatus, string> = {
  stable: 'text-emerald-700 dark:text-emerald-400',
  beta: 'text-amber-700 dark:text-amber-400',
  alpha: 'text-sky-700 dark:text-sky-400',
  soon: 'text-gray-500'
}
