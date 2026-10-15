/**
 * SEO composable for managing multilingual SEO metadata
 * Integrates with nuxt-seo and nuxt-i18n modules
 */
export const useSEO = () => {
  const { t, locale, locales } = useI18n()
  const localePath = useLocalePath()
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()

  /**
   * Get the base URL dynamically from environment variables
   */
  const getBaseUrl = () => {
    // Use runtime config for client-side compatibility
    return runtimeConfig.public.baseUrl || 'https://hotelier.tools'
  }

  /**
   * Language tag of a configured locale (nuxt.config.ts i18n `language`), e.g. 'en-US', 'en-GB', 'es'.
   * Used for hreflang, inLanguage and og:locale so the page head, the sitemap and the structured
   * data all name each language the same way.
   */
  const languageOf = (code: string = locale.value) => {
    const found = (locales.value as Array<string | { code: string, language?: string }>)
      .find(l => typeof l !== 'string' && l.code === code)
    return (typeof found === 'object' && found.language) || code
  }

  // Open Graph wants language_TERRITORY; locales without a region get their usual one
  const OG_TERRITORY: Record<string, string> = { es: 'ES', fr: 'FR', de: 'DE', id: 'ID', it: 'IT', pt: 'PT', th: 'TH' }
  const ogLocaleOf = (code: string = locale.value) => {
    const [lang, region] = languageOf(code).split('-')
    return `${lang}_${region ?? OG_TERRITORY[lang] ?? lang.toUpperCase()}`
  }

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
    /** Languages this page exists in; defaults to every configured language */
    alternates: string[]
    ogType: 'website' | 'article'
    /** Extra details for the generated share card */
    og: { eyebrow?: string, status?: string, statusKind?: 'stable' | 'beta' | 'alpha' | 'soon', accent?: string }
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

    // Every language version is its own page: the canonical points at the URL being served,
    // and the alternates tie the translations together
    const baseUrl = getBaseUrl()
    let barePath = route.path
    if (locale.value !== 'en' && (barePath === `/${locale.value}` || barePath.startsWith(`/${locale.value}/`))) {
      barePath = barePath.slice(locale.value.length + 1) || '/'
    }
    const localizedUrl = (code: string) => code === 'en'
      ? `${baseUrl}${barePath}`
      : `${baseUrl}/${code}${barePath === '/' ? '' : barePath}`

    const canonical = customData?.canonical || localizedUrl(locale.value)

    const localeCodes = customData?.alternates
      ?? (locales.value as Array<string | { code: string }>).map(l => typeof l === 'string' ? l : l.code)
    const alternateLinks = [
      ...localeCodes.map(code => ({ rel: 'alternate', hreflang: languageOf(code), href: localizedUrl(code) })),
      ...(localeCodes.includes('en') ? [{ rel: 'alternate', hreflang: 'x-default', href: localizedUrl('en') }] : [])
    ]

    // Apply SEO configuration
    useSeoMeta({
      title: pageTitle,
      description: pageDescription,
      keywords: keywords,
      
      // Open Graph
      ogTitle: ogTitle,
      ogDescription: ogDescription,
      ogType: customData?.ogType ?? 'website',
      ogUrl: canonical,
      ogSiteName: siteName,
      ogLocale: ogLocaleOf(),
      ...(customData?.ogImage ? { ogImage: customData.ogImage } : {}),
      
      // Twitter
      twitterCard: 'summary_large_image',
      twitterTitle: ogTitle,
      twitterDescription: ogDescription,
      ...(customData?.ogImage ? { twitterImage: customData.ogImage } : {}),
      
      // Robots
      robots: customData?.noindex ? 'noindex,nofollow' : 'index,follow',
      
      // Additional meta
      author: 'Hotelier Tools',
      copyright: `© ${new Date().getFullYear()} Hotelier Tools`,
      language: languageOf()
    })

    // Share card generated for this page at build time (components/OgImage/Feature.vue)
    if (!customData?.ogImage) {
      defineOgImageComponent('Feature', {
        title: ogTitle,
        description: ogDescription,
        eyebrow: customData?.og?.eyebrow ?? '',
        status: customData?.og?.status ?? '',
        statusKind: customData?.og?.statusKind ?? '',
        accent: customData?.og?.accent ?? '#60a5fa',
        footer: t('pricing.title', { date: new Intl.DateTimeFormat(locale.value, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC', calendar: 'gregory' }).format(new Date(Date.UTC(2027, 0, 10))) }),
        site: baseUrl.replace(/^https?:\/\//, '')
      })
    }

    // Set canonical and alternate links
    useHead({
      link: [
        { rel: 'canonical', href: canonical },
        ...alternateLinks
      ],
      htmlAttrs: {
        lang: languageOf()
      }
    })
  }

  /**
   * Structured data for the current page. Built with nuxt-schema-org so it renders on the server,
   * joins the site's @graph and points at the site identity (nuxt.config.ts schemaOrg.identity).
   */
  const setStructuredData = (type: 'Article' | 'Product', data?: any) => {
    if (type === 'Article') {
      useSchemaOrg([defineArticle({
        headline: data?.title,
        description: data?.description,
        ...(data?.datePublished ? { datePublished: data.datePublished } : {}),
        ...(data?.dateModified ? { dateModified: data.dateModified } : {}),
        inLanguage: languageOf()
      })])
      return
    }
    useSchemaOrg([defineSoftwareApp({
      name: data?.name || t('seo.site.name'),
      description: data?.description || t('seo.site.description'),
      applicationCategory: data?.applicationCategory ?? 'BusinessApplication',
      operatingSystem: data?.operatingSystem ?? 'Web',
      ...(data?.url ? { url: data.url } : {}),
      ...(data?.featureList ? { featureList: data.featureList } : {}),
      inLanguage: languageOf(),
      offers: data?.offers ?? { price: 0, priceCurrency: 'EUR' }
    })])
  }

  /**
   * Breadcrumb structured data; urls are unprefixed app paths and get the current language
   */
  const setBreadcrumbs = (items: Array<{ name: string, url: string }>) => {
    useSchemaOrg([defineBreadcrumb({
      itemListElement: items.map(item => ({ name: item.name, item: `${getBaseUrl()}${localePath(item.url)}` }))
    })])
  }

  /**
   * Question and answer pairs; nuxt-schema-org turns the page into an FAQPage that lists them
   */
  const setFAQStructuredData = (faqs: Array<{ question: string, answer: string }>) => {
    useSchemaOrg(faqs.map(faq => defineQuestion({ name: faq.question, acceptedAnswer: faq.answer })))
  }

  return {
    languageOf,
    setSEO,
    setStructuredData,
    setBreadcrumbs,
    setFAQStructuredData
  }
}