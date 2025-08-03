export default defineSitemapEventHandler(async () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl
  
  // Define the pages and their locales
  const pages = [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/about', priority: 0.8, changefreq: 'monthly' },
    { loc: '/services', priority: 0.9, changefreq: 'monthly' },
    { loc: '/contact', priority: 0.7, changefreq: 'monthly' }
  ]
  
  const locales = ['en', 'es', 'fr']
  const urls = []
  
  // Generate URLs for each page and locale
  for (const page of pages) {
    for (const locale of locales) {
      const url = locale === 'en' 
        ? `${baseUrl}${page.loc}`
        : `${baseUrl}/${locale}${page.loc}`
      
      urls.push({
        loc: url,
        lastmod: new Date().toISOString(),
        priority: page.priority,
        changefreq: page.changefreq,
        // Add alternate language links
        alternates: locales.map(altLocale => ({
          hreflang: altLocale,
          href: altLocale === 'en' 
            ? `${baseUrl}${page.loc}`
            : `${baseUrl}/${altLocale}${page.loc}`
        }))
      })
    }
  }
  
  return urls
})