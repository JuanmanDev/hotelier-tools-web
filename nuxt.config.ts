// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxtjs/google-fonts', '@nuxtjs/i18n', '@nuxt/content', 'vue3-carousel-nuxt'],

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
        code: 'es',
        name: 'Español',
        iso: 'es-ES',
        file: 'es.json'
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json'
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
      apiBase: '/api'
    }
  }
})