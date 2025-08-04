// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxtjs/google-fonts', '@nuxtjs/i18n', '@nuxt/content', 'vue3-carousel-nuxt', '@nuxtjs/seo'],

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
      title: 'Hotelier Tools - Optimiza tu gestión hotelera con Little Hotelier',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Herramientas para optimizar la gestión de hoteles que utilizan Little Hotelier de Siteminder. Extensiones Chrome y automatizaciones para mejorar tu operativa hotelera.' 
        },
        { name: 'keywords', content: 'hotel, gestión hotelera, Little Hotelier, Siteminder, automatización, reservas, facturas' },
        { property: 'og:title', content: 'Hotelier Tools - Optimiza tu gestión hotelera' },
        { property: 'og:description', content: 'Herramientas para optimizar la gestión de hoteles que utilizan Little Hotelier de Siteminder.' },
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
    url: process.env.NUXT_ENV_VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.NUXT_ENV_VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000',
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
      url: process.env.NUXT_ENV_VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.NUXT_ENV_VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000',
      logo: (process.env.NUXT_ENV_VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.NUXT_ENV_VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000') + '/logo.png'
    }
  },

  // Open Graph Configuration  
  ogImage: {
    enabled: true,
    componentDirs: ['components/OgImage'],
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
    preset: 'vercel'
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: '',
    
    // Public keys (exposed to client-side)
    public: {
      apiBase: '/api',
      baseUrl: process.env.NUXT_ENV_VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.NUXT_ENV_VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'
    }
  },
  
  experimental: {
    viewTransition: true
  }
})
