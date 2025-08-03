# Hotelier Tools - SEO & i18n Integration

This project demonstrates a complete implementation of `nuxt-seo` with `nuxt-i18n` for optimal multilingual SEO performance.

## Features Implemented

### 🔍 SEO Features
- **Complete nuxt-seo module integration** with all available features enabled
- **Structured Data (JSON-LD)** for Organization, Services, BreadcrumbList, LocalBusiness
- **Open Graph tags** with proper multilingual support
- **Twitter Cards** configuration
- **Canonical URLs** with hreflang attributes for multilingual sites
- **Robots.txt** with proper multilingual paths
- **Sitemap generation** with multilingual URLs and alternates
- **Meta tags optimization** with fallback configurations

### 🌍 Internationalization (i18n)
- **Three languages supported**: English (default), Spanish, French
- **SEO-friendly URL strategy**: `prefix_except_default`
- **Localized SEO metadata** for all pages
- **Hreflang attributes** for proper language targeting
- **Language switching** with preserved SEO structure

### 📄 Page-Level SEO Examples

#### Home Page (`pages/index.vue`)
```vue
<script setup>
// Comprehensive SEO configuration
useSeoMeta({
  title: () => t('seo.homeTitle'),
  description: () => t('seo.homeDescription'),
  ogTitle: () => t('seo.homeTitle'),
  ogDescription: () => t('seo.homeDescription'),
  ogImage: '/images/og-home.jpg',
  ogType: 'website',
  keywords: 'hotel management, hospitality tools, restaurant software'
})

// WebSite structured data with search action
useStructuredData('WebSite', {
  name: () => t('seo.siteName'),
  url: useRuntimeConfig().public.siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${useRuntimeConfig().public.siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
})
</script>
```

#### Services Page (`pages/services.vue`)
```vue
<script setup>
// Multiple services structured data
useStructuredData('Service', [
  {
    '@type': 'Service',
    name: 'Hotel Management System',
    description: 'Comprehensive property management solution',
    provider: { '@type': 'Organization', name: () => t('seo.siteName') },
    serviceType: 'Hotel Management Software',
    areaServed: 'Worldwide'
  }
  // ... more services
])
</script>
```

#### Contact Page (`pages/contact.vue`)
```vue
<script setup>
// Local business structured data
useStructuredData('LocalBusiness', {
  name: () => t('seo.siteName'),
  telephone: '+1-555-123-4567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Hospitality Lane',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ]
})
</script>
```

## Configuration Files

### Nuxt Config (`nuxt.config.ts`)
```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxtjs/seo'],
  
  // i18n with SEO-friendly URLs
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // Complete SEO configuration
  seo: {
    enabled: true,
    structuredData: { enabled: true },
    openGraph: { enabled: true, siteName: 'Hotelier Tools' },
    twitterCard: { enabled: true, card: 'summary_large_image' },
    canonical: { enabled: true },
    robots: { enabled: true },
    sitemap: { enabled: true, sources: ['/api/sitemap'] }
  }
})
```

### Multilingual Robots.txt
```
User-agent: *
Allow: /
Allow: /en/
Allow: /es/
Allow: /fr/

Disallow: /admin/
Disallow: /api/

Sitemap: https://hotelier-tools.com/sitemap.xml
```

### Dynamic Sitemap (`server/api/sitemap.ts`)
```typescript
export default defineSitemapEventHandler(async () => {
  const pages = ['/', '/about', '/services', '/contact']
  const locales = ['en', 'es', 'fr']
  const urls = []
  
  for (const page of pages) {
    for (const locale of locales) {
      urls.push({
        loc: locale === 'en' ? `${baseUrl}${page}` : `${baseUrl}/${locale}${page}`,
        alternates: locales.map(altLocale => ({
          hreflang: altLocale,
          href: altLocale === 'en' ? `${baseUrl}${page}` : `${baseUrl}/${altLocale}${page}`
        }))
      })
    }
  }
  
  return urls
})
```

## Best Practices Implemented

### 🎯 Multilingual SEO
1. **Hreflang attributes** on every page pointing to all language versions
2. **Localized meta descriptions** and titles
3. **Language-specific structured data**
4. **Proper canonical URLs** for each language
5. **x-default hreflang** pointing to the default language

### 📊 Structured Data
1. **Organization** schema for the company
2. **WebSite** schema with search functionality
3. **Service** schemas for each offering
4. **LocalBusiness** for contact information
5. **BreadcrumbList** for navigation hierarchy

### 🔗 Technical SEO
1. **Responsive meta viewport** tag
2. **Language-aware HTML lang attribute**
3. **Proper Open Graph images** (placeholders provided)
4. **Twitter Card optimization**
5. **Robots.txt** with multilingual paths
6. **XML sitemap** with hreflang annotations

## Environment Setup

Create a `.env` file with:
```
NUXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## SEO Testing

The implementation includes:
- Sitemap available at `/sitemap.xml`
- Robots.txt available at `/robots.txt`
- Open Graph debugger support
- Twitter Card validator support
- Rich snippets for search engines
- Multilingual search engine optimization

All pages are configured with proper SEO metadata, structured data, and multilingual support following current best practices for hospitality industry websites.