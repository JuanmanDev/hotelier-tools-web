// https://nuxt.com/docs/api/configuration/nuxt-config
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
    '@nuxtjs/google-fonts',
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
    documentDriven: false
  },

  // Internationalization configuration
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English (US)',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'en-gb',
        name: 'English (UK)',
        iso: 'en-GB',
        file: 'en-gb.json'
      },
      {
        code: 'es',
        name: 'Español',
        iso: 'es-ES',
        file: 'es.json'
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr.json'
      },
      {
        code: 'de',
        name: 'Deutsch',
        iso: 'de-DE',
        file: 'de.json'
      },
      {
        code: 'id',
        name: 'Bahasa Indonesia',
        iso: 'id-ID',
        file: 'id.json'
      },
      {
        code: 'it',
        name: 'Italiano',
        iso: 'it-IT',
        file: 'it.json'
      },
      {
        code: 'pt',
        name: 'Português',
        iso: 'pt-PT',
        file: 'pt.json'
      },
      {
        code: 'th',
        name: 'ไทย',
        iso: 'th-TH',
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

  // Nuxt UI configuration
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons']
  },

  // Color mode configuration
  colorMode: {
    preference: 'system'
  },

  // Meta configuration
  app: {
    head: {
      title: 'Hotelier Tools - Panel para hoteles con Little Hotelier: facturas, precios y huéspedes',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Panel para hoteles con Little Hotelier: facturas trimestrales, comprobaciones automáticas, precios dinámicos, bandeja de WhatsApp, email y Booking.com, asistente IA e informes del INE. Gratis hasta el 10 de enero de 2027.'
        },
        { name: 'keywords', content: 'hotel, gestión hotelera, Little Hotelier, Siteminder, automatización, reservas, facturas, precios dinámicos, channel manager, WhatsApp huéspedes, encuesta INE, asistente IA hotel' },
        { property: 'og:title', content: 'Hotelier Tools - Todo lo que necesita tu recepción, en un solo panel' },
        { property: 'og:description', content: 'Facturas, comprobaciones, precios, mensajes de huéspedes e informes del INE para Little Hotelier, en un solo panel.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    description: 'Herramientas para optimizar la gestión de hoteles que utilizan Little Hotelier de Siteminder',
    defaultLocale: 'en',
    identity: {
      type: 'Organization'
    },
    twitter: '@hoteliertools',
    trailingSlash: false
  },

  // Robots Configuration
  robots: {
    allow: ['/'],
    disallow: ['/admin', '/api'],
    sitemap: ['/sitemap.xml']
  },

  // Sitemap Configuration
  sitemap: {
    autoLastmod: true,
    defaultSitemapsChunkSize: 100,
    sources: [
      '/sitemap.xml'
    ]
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
      logo: `${SITE_URL}/logo.png`
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

  // Google Fonts configuration
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
      'Space Grotesk': [300, 400, 500, 600, 700]
    },
    display: 'swap'
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
      routes: featureRoutes
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
    '/chrome-extensions': { prerender: true },
    '/marketing/**': { prerender: true },

    // Tools section - index is static, subpages are prerendered at build time
    '/tools': { prerender: true },
    '/tools/**': { prerender: true },
    ...legacyBotRedirects
  },

  experimental: {
    viewTransition: true
  }
})
