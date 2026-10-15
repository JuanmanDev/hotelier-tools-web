// https://nuxt.com/docs/api/configuration/nuxt-config
import { readdirSync, existsSync } from 'node:fs'
import { platformSlides, LEGACY_BOT_SLUGS } from './data/platform'

// Public origin used in canonical links and share images. Vercel sets the production host;
// any other build (preview, local generate) still points shares at the real site.
const PRODUCTION_HOST = process.env.NUXT_ENV_VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL
const SITE_URL = PRODUCTION_HOST
  ? `https://${PRODUCTION_HOST}`
  : process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://hotelier.tools'

const LOCALE_CODES = ['en', 'en-gb', 'es', 'fr', 'de', 'id', 'it', 'pt', 'th']
// Every feature landing page in every language, so none depends on the crawler finding it
const featureRoutes = LOCALE_CODES.flatMap(code => {
  const prefix = code === 'en' ? '' : `/${code}`
  return [`${prefix}/tools/bot`, ...platformSlides.map(f => `${prefix}/tools/bot/${f.slug}`)]
})

// Every blog article that exists in each language (content/blog/<locale>/<slug>.md)
const blogRoutes = LOCALE_CODES.flatMap((code) => {
  const dir = `./content/blog/${code}`
  if (!existsSync(dir)) return []
  const prefix = code === 'en' ? '' : `/${code}`
  return [`${prefix}/blog`, ...readdirSync(dir).filter(f => f.endsWith('.md')).map(f => `${prefix}/blog/${f.slice(0, -3)}`)]
})

// Old bot pages answer with a 301 to the feature page that replaced them
const legacyBotRedirects = Object.fromEntries(LOCALE_CODES.flatMap((code) => {
  const prefix = code === 'en' ? '' : `/${code}`
  return Object.entries(LEGACY_BOT_SLUGS).map(([from, to]) => [
    `${prefix}/tools/bot/${from}`,
    { redirect: { to: `${prefix}/tools/bot/${to}`, statusCode: 301 } }
  ])
}))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxt/content',
    'vue3-carousel-nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/mdc',
    'nuxt-umami',
    // Local module for search data generation
    '~/modules/search-data-generator'
  ],

  // Nuxt Content configuration
  content: {
    // Content directory
    contentHead: false,
    documentDriven: false,
    build: {
      markdown: {
        toc: { depth: 2, searchDepth: 2 },
        highlight: {
          theme: { default: 'github-light', dark: 'github-dark' },
          langs: ['json', 'jsonc', 'bash', 'shell', 'powershell', 'ts', 'js', 'python', 'http', 'yaml', 'toml', 'md']
        }
      }
    }
  },

  // Internationalization configuration
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English (US)',
        language: 'en-US',
        file: 'en.json'
      },
      {
        code: 'en-gb',
        name: 'English (UK)',
        language: 'en-GB',
        file: 'en-gb.json'
      },
      {
        code: 'es',
        name: 'Español',
        language: 'es',
        file: 'es.json'
      },
      {
        code: 'fr',
        name: 'Français',
        language: 'fr',
        file: 'fr.json'
      },
      {
        code: 'de',
        name: 'Deutsch',
        language: 'de',
        file: 'de.json'
      },
      {
        code: 'id',
        name: 'Bahasa Indonesia',
        language: 'id',
        file: 'id.json'
      },
      {
        code: 'it',
        name: 'Italiano',
        language: 'it',
        file: 'it.json'
      },
      {
        code: 'pt',
        name: 'Português',
        language: 'pt',
        file: 'pt.json'
      },
      {
        code: 'th',
        name: 'ไทย',
        language: 'th',
        file: 'th.json'
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: './locales/',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // Icons used by the site ship inside the client bundle instead of being fetched from the Iconify API
  icon: {
    clientBundle: { scan: true, sizeLimitKb: 256 }
  },

  // Nuxt UI configuration
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons']
  },

  // Color mode configuration
  colorMode: {
    preference: 'system'
  },

  // Meta configuration. Titles and descriptions are set per page and per language
  // (composables/useSEO.ts), so no page falls back to one shared, single-language text.
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  // SEO Configuration
  seo: {
    redirectToCanonicalSiteUrl: true
  },

  // Site Configuration
  site: {
    url: SITE_URL,
    name: 'Hotelier Tools',
    description: 'Dashboard and free browser tools for hotels on Little Hotelier: invoices, automated checks, dynamic pricing, guest inbox, AI assistant and INE reports.',
    defaultLocale: 'en',
    identity: {
      type: 'Organization'
    },
    trailingSlash: false
  },

  // Robots Configuration
  robots: {
    allow: ['/'],
    disallow: ['/admin', '/api']
  },

  // Sitemap Configuration
  sitemap: {
    autoLastmod: true,
    defaultSitemapsChunkSize: 100
  },

  // Link Checker Configuration
  linkChecker: {
    enabled: false,
    excludeLinks: [
      'https://fonts.googleapis.com/**'
    ]
  },

  // Schema.org Configuration
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Hotelier Tools',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      sameAs: ['https://github.com/JuanmanDev/hotelier-tools-web']
    }
  },

  // Open Graph Configuration  
  ogImage: {
    enabled: true,
    componentDirs: ['OgImage'],
    // Thai titles need their own glyphs
    fonts: ['Inter:400', 'Inter:700', 'Noto+Sans+Thai:400', 'Noto+Sans+Thai:700'],
    defaults: {
      width: 1200,
      height: 630,
      extension: 'png'
    }
  },

  // CSS configuration
  css: ['~/assets/css/main.css'],

  // TypeScript configuration
  typescript: {
    strict: true
  },

  // Build configuration for Vercel
  nitro: {
    prerender: {
      failOnError: false,
      // The crawler follows language links out of redirect pages and invents paths like
      // /de/de/tools/bot/checkout or /de/sitemap.xml; none of them is a real page
      ignore: [
        /^\/(en-gb|es|fr|de|id|it|pt|th)\/(en-gb|es|fr|de|id|it|pt|th)(\/|$)/,
        /^\/(en-gb|es|fr|de|id|it|pt|th)\/sitemap(_index)?\.xml$/
      ],
      routes: [...featureRoutes, ...blogRoutes, '/llms.txt', '/.well-known/api-catalog']
    }
  },

  // Search data generator configuration
  searchDataGenerator: {
    enabled: true,
    outputDir: 'public/data/search'
  },

  // Umami configuration
  umami: {
    id: 'e366eb58-491e-4829-8eb7-98765c84cdb4',
    host: 'https://umami.hotelier.tools/',
    autoTrack: true,
    useDirective: false,
    logErrors: process.env.NODE_ENV === 'development'
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: '',

    // Public keys (exposed to client-side)
    public: {
      apiBase: '/api',
      baseUrl: SITE_URL
    }
  },

  // Route rules for Vercel optimization
  routeRules: {
    // Prerender static pages
    '/': { prerender: true },
    '/contact': { prerender: true },
    '/documentation': { prerender: true },
    '/faq': { prerender: true },
    '/about': { prerender: true },
    '/privacy': { prerender: true },
    '/terms': { prerender: true },
    '/marketing/**': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true },

    // Tools section - index is static, subpages are prerendered at build time
    '/tools': { prerender: true },
    '/tools/**': { prerender: true },
    ...legacyBotRedirects
  },

  experimental: {
    viewTransition: true
  }
})
