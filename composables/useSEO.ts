/**
 * SEO composable for managing multilingual SEO metadata
 * Integrates with nuxt-seo and nuxt-i18n modules
 */
export const useSEO = () => {
  const { t, locale } = useI18n()
  const route = useRoute()

  /**
   * Set page SEO metadata with i18n support
   */
  const setSEO = (pageKey: string, customData?: Partial<{
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    ogImage: string
    keywords: string
    canonical: string
    noindex: boolean
    nofollow: boolean
  }>) => {
    const siteName = t('seo.site.name')
    const siteDescription = t('seo.site.description')
    const defaultKeywords = t('seo.site.keywords')
    
    // Get page-specific translations
    const pageTitle = customData?.title || t(`seo.pages.${pageKey}.title`)
    const pageDescription = customData?.description || t(`seo.pages.${pageKey}.description`)
    const ogTitle = customData?.ogTitle || t(`seo.pages.${pageKey}.ogTitle`)
    const ogDescription = customData?.ogDescription || t(`seo.pages.${pageKey}.ogDescription`)
    const keywords = customData?.keywords || defaultKeywords

    // Generate canonical URL with proper locale handling
    const baseUrl = 'https://hotelier-tools.vercel.app'
    let canonicalPath = route.path
    
    // Remove locale prefix for canonical URL generation
    if (locale.value !== 'en' && canonicalPath.startsWith(`/${locale.value}`)) {
      canonicalPath = canonicalPath.replace(`/${locale.value}`, '') || '/'
    }
    
    const canonical = customData?.canonical || `${baseUrl}${canonicalPath}`

    // Set up alternate language links
    const alternateLinks = [
      { 
        rel: 'alternate', 
        hreflang: 'en', 
        href: `${baseUrl}${canonicalPath}` 
      },
      { 
        rel: 'alternate', 
        hreflang: 'es', 
        href: `${baseUrl}/es${canonicalPath}` 
      },
      { 
        rel: 'alternate', 
        hreflang: 'x-default', 
        href: `${baseUrl}${canonicalPath}` 
      }
    ]

    // Apply SEO configuration
    useSeoMeta({
      title: pageTitle,
      description: pageDescription,
      keywords: keywords,
      
      // Open Graph
      ogTitle: ogTitle,
      ogDescription: ogDescription,
      ogType: 'website',
      ogUrl: canonical,
      ogSiteName: siteName,
      ogLocale: locale.value === 'es' ? 'es_ES' : 'en_US',
      ogImage: customData?.ogImage || `${baseUrl}/og-image-${locale.value}.png`,
      
      // Twitter
      twitterCard: 'summary_large_image',
      twitterTitle: ogTitle,
      twitterDescription: ogDescription,
      twitterImage: customData?.ogImage || `${baseUrl}/og-image-${locale.value}.png`,
      twitterSite: '@hoteliertools',
      
      // Robots
      robots: customData?.noindex ? 'noindex,nofollow' : 'index,follow',
      
      // Additional meta
      author: 'Hotelier Tools',
      copyright: `© ${new Date().getFullYear()} Hotelier Tools`,
      language: locale.value === 'es' ? 'es-ES' : 'en-US'
    })

    // Set canonical and alternate links
    useHead({
      link: [
        { rel: 'canonical', href: canonical },
        ...alternateLinks
      ],
      htmlAttrs: {
        lang: locale.value === 'es' ? 'es' : 'en'
      }
    })
  }

  /**
   * Generate structured data for the current page
   */
  const setStructuredData = (type: 'Organization' | 'WebSite' | 'Article' | 'Product', data?: any) => {
    const baseUrl = 'https://hotelier-tools.vercel.app'
    
    let structuredData: any = {
      '@context': 'https://schema.org'
    }

    switch (type) {
      case 'Organization':
        structuredData = {
          ...structuredData,
          '@type': 'Organization',
          name: t('seo.site.name'),
          description: t('seo.site.description'),
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          sameAs: [
            'https://twitter.com/hoteliertools'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            availableLanguage: ['English', 'Spanish']
          }
        }
        break
        
      case 'WebSite':
        structuredData = {
          ...structuredData,
          '@type': 'WebSite',
          name: t('seo.site.name'),
          description: t('seo.site.description'),
          url: baseUrl,
          inLanguage: locale.value === 'es' ? 'es-ES' : 'en-US',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }
        break
        
      case 'Article':
        structuredData = {
          ...structuredData,
          '@type': 'Article',
          headline: data?.title || t(`seo.pages.${route.name}.title`),
          description: data?.description || t(`seo.pages.${route.name}.description`),
          author: {
            '@type': 'Organization',
            name: 'Hotelier Tools'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Hotelier Tools',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.png`
            }
          },
          datePublished: data?.datePublished || new Date().toISOString(),
          dateModified: data?.dateModified || new Date().toISOString(),
          inLanguage: locale.value === 'es' ? 'es-ES' : 'en-US'
        }
        break
        
      case 'Product':
        structuredData = {
          ...structuredData,
          '@type': 'SoftwareApplication',
          name: data?.name || t('seo.site.name'),
          description: data?.description || t('seo.site.description'),
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          aggregateRating: data?.rating && {
            '@type': 'AggregateRating',
            ratingValue: data.rating.value,
            reviewCount: data.rating.count
          }
        }
        break
    }

    // Apply structured data using useSchemaOrg from @nuxtjs/seo
    useSchemaOrg([structuredData])
  }

  /**
   * Generate breadcrumb structured data
   */
  const setBreadcrumbs = (items: Array<{ name: string, url: string }>) => {
    const baseUrl = 'https://hotelier-tools.vercel.app'
    
    const breadcrumbItems = items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`
    }))

    useSchemaOrg([{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems
    }])
  }

  /**
   * Set FAQ structured data
   */
  const setFAQStructuredData = (faqs: Array<{ question: string, answer: string }>) => {
    const faqData = faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))

    useSchemaOrg([{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData
    }])
  }

  return {
    setSEO,
    setStructuredData,
    setBreadcrumbs,
    setFAQStructuredData
  }
}