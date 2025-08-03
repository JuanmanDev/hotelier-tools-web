// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/seo'
  ],

  // i18n Configuration
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es.json'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr.json'
      }
    ],
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // SEO Configuration with all features enabled
  seo: {
    // Enable all SEO features
    enabled: true,
    
    // Fallback configuration
    fallbackTitle: 'Hotelier Tools',
    fallbackDescription: 'Professional tools for the hospitality industry',
    
    // Enable structured data
    structuredData: {
      enabled: true
    },
    
    // Enable Open Graph
    openGraph: {
      enabled: true,
      siteName: 'Hotelier Tools',
      type: 'website',
      locale: 'en_US'
    },
    
    // Enable Twitter Cards
    twitterCard: {
      enabled: true,
      card: 'summary_large_image',
      creator: '@hoteliertools'
    },

    // Enable canonical URLs
    canonical: {
      enabled: true
    },

    // Enable robots.txt
    robots: {
      enabled: true,
      allow: ['/', '/en/*', '/es/*', '/fr/*'],
      disallow: ['/admin', '/api'],
      sitemap: '/sitemap.xml'
    },

    // Enable sitemap generation
    sitemap: {
      enabled: true,
      sources: ['/api/sitemap'],
      exclude: ['/admin/**', '/api/**']
    },

    // JSON-LD structured data defaults
    jsonLd: {
      enabled: true
    },

    // Meta tag configuration
    meta: {
      enabled: true,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  // Site configuration for better SEO
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://hotelier-tools.com',
    name: 'Hotelier Tools',
    description: 'Professional tools for the hospitality industry',
    defaultLocale: 'en',
    identity: {
      type: 'Organization'
    },
    twitter: '@hoteliertools'
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hotelier-tools.com'
    }
  }
})
