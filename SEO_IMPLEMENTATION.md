# SEO Implementation with nuxt-seo and i18n

This document explains how SEO has been implemented in the Hotelier Tools project using `@nuxtjs/seo` integrated with `@nuxtjs/i18n` for multilingual support.

## Features Implemented

### 1. Core SEO Configuration

- **Site configuration** with proper URL, name, description, and identity
- **Robots.txt** generation with proper directives
- **Sitemap** generation with multilingual support
- **Canonical URLs** with proper locale handling
- **Open Graph** metadata for social media sharing
- **Twitter Cards** for enhanced social media appearance
- **Schema.org** structured data (Organization, Website, Article, Product, FAQ)
- **Meta tags** optimization for search engines

### 2. Multilingual SEO Support

- **Alternate language links** (hreflang) for proper language targeting
- **Localized meta tags** with translated content
- **Canonical URL handling** that works with i18n prefix strategies
- **Locale-specific Open Graph images**
- **Language-specific structured data**

### 3. useSEO Composable

The `useSEO` composable provides a unified interface for managing SEO across pages:

```typescript
const { setSEO, setStructuredData, setBreadcrumbs, setFAQStructuredData } = useSEO()
```

#### Methods:

- `setSEO(pageKey, customData?)` - Sets page SEO metadata with i18n support
- `setStructuredData(type, data?)` - Generates structured data (Organization, WebSite, Article, Product)
- `setBreadcrumbs(items)` - Creates breadcrumb structured data
- `setFAQStructuredData(faqs)` - Sets FAQ structured data

## Usage Examples

### Basic Page SEO

```vue
<script setup lang="ts">
const { setSEO, setStructuredData, setBreadcrumbs } = useSEO()

// Basic SEO using translations
setSEO('home')

// With custom data
setSEO('marketing', {
  title: 'Custom Title - Hotelier Tools',
  description: 'Custom description for this page',
  keywords: 'custom, keywords, hotel'
})

onMounted(() => {
  setStructuredData('Article', {
    title: 'Page Title',
    description: 'Page Description',
    datePublished: '2024-01-01T00:00:00Z'
  })
  
  setBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' }
  ])
})
</script>
```

### Translation Structure

SEO translations are organized in locale files under the `seo` key:

```json
{
  "seo": {
    "site": {
      "name": "Hotelier Tools",
      "description": "Site description",
      "keywords": "keywords, for, site"
    },
    "pages": {
      "home": {
        "title": "Page Title",
        "description": "Page Description",
        "ogTitle": "OG Title",
        "ogDescription": "OG Description"
      }
    }
  }
}
```

### FAQ Structured Data

```vue
<script setup>
onMounted(() => {
  const faqItems = [
    {
      question: "How do I install the tools?",
      answer: "You can install our tools by following the installation guide..."
    }
  ]
  
  setFAQStructuredData(faqItems)
})
</script>
```

## Configuration Files

### nuxt.config.ts

The main SEO configuration includes:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/seo', '@nuxtjs/i18n'],
  
  site: {
    url: 'https://hotelier-tools.vercel.app',
    name: 'Hotelier Tools',
    description: 'Site description',
    defaultLocale: 'en'
  },
  
  robots: {
    allow: ['/'],
    disallow: ['/admin', '/api']
  },
  
  sitemap: {
    autoLastmod: true
  },
  
  ogImage: {
    enabled: true,
    componentDirs: ['components/OgImage']
  }
})
```

## SEO Best Practices Implemented

### 1. Multilingual SEO
- Proper hreflang tags for language targeting
- Canonical URLs that work with locale prefixes
- Language-specific meta content
- Locale-aware structured data

### 2. Technical SEO
- Proper HTML lang attributes
- Meta viewport for mobile optimization
- Charset declaration
- Robots meta tags
- Canonical link tags

### 3. Content SEO
- Title tag optimization
- Meta descriptions
- Keywords meta tags
- Open Graph optimization
- Twitter Cards

### 4. Structured Data
- Organization markup
- Website markup
- Article markup for content pages
- Product markup for tools
- FAQ markup where applicable
- Breadcrumb navigation

## Generated Files

The SEO setup automatically generates:

- `/sitemap.xml` - Main sitemap
- `/sitemap_index.xml` - Sitemap index
- `/robots.txt` - Robots directives
- Dynamic Open Graph images at `/__og-image__/`

## Performance Considerations

- Lazy loading of structured data on client side
- Minimal impact on build time
- Optimized Open Graph image generation
- Efficient sitemap generation

## Testing SEO

You can test the SEO implementation by:

1. Checking the generated HTML for proper meta tags
2. Validating structured data with Google's Rich Results Test
3. Testing Open Graph with Facebook's Sharing Debugger
4. Verifying hreflang tags in search console
5. Checking sitemap accessibility

## Maintenance

To maintain SEO:

1. Update translations in locale files when adding new pages
2. Add new page keys to the `seo.pages` translations
3. Update structured data when content changes
4. Monitor search console for crawl errors
5. Keep sitemap updated with new routes