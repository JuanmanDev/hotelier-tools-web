import { defineNuxtModule, createResolver, useLogger } from '@nuxt/kit'
import { writeFile, mkdir, readdir, readFile, stat } from 'fs/promises'
import { join, relative, parse } from 'path'
import { existsSync } from 'fs'

// Module options interface
export interface ModuleOptions {
  enabled: boolean
  outputDir: string
}

// Extend NuxtConfig types
declare module '@nuxt/schema' {
  interface NuxtConfig {
    searchDataGenerator?: Partial<ModuleOptions>
    i18n?: any
  }
  interface NuxtOptions {
    searchDataGenerator?: ModuleOptions
    i18n?: any
  }
}

interface SearchItem {
  title: string
  description: string
  url: string
  type: 'page' | 'bot' | 'tool' | 'faq' | 'marketing'
  language: string
  excerpt: string
  content: string
}

interface PageMeta {
  path: string
  name: string
  isDynamic: boolean
  translationKey?: string
}

// Script mapping for tool-script association
const SCRIPT_MAPPING: Record<string, string[]> = {
  'chrome-ui-enhancer': [
    'tables-full-width',
    'compact-calendar-ui',
    'compact-ui-reservation-details',
    'prices-display',
    'improve-style-touch-screens',
    'auto-refresh-inactivity',
    'extra-invoice-print-button',
    'update-number-adults',
    'update-payment-link-button',
    'bank-transfer-email-button',
    'add-button-check-front-desk',
    'change-inventory-name',
    'show-booking-commissions',
    'show-chekin'
  ],
  'booking-commission-calculator': ['show-booking-commissions'],
  'tables-full-width': ['tables-full-width'],
  'compact-calendar-ui': ['compact-calendar-ui'],
  'prices-display': ['prices-display'],
  'touch-screen-optimization': ['improve-style-touch-screens'],
  'auto-refresh-inactivity': ['auto-refresh-inactivity'],
  'extra-invoice-print-button': ['extra-invoice-print-button'],
  'update-number-adults': ['update-number-adults'],
  'update-payment-link-button': ['update-payment-link-button'],
  'bank-transfer-email-button': ['bank-transfer-email-button'],
  'add-button-check-front-desk': ['add-button-check-front-desk'],
  'change-inventory-name': ['change-inventory-name'],
  'compact-ui-reservation-details': ['compact-ui-reservation-details']
}

// Tools data
const TOOLS_DATA = [
  {
    id: 'ui-scripts-collection',
    category: 'chrome-extension',
    icon: 'i-heroicons-computer-desktop',
    status: 'available',
    linkTo: '/tools/ui'
  },
  {
    id: 'bot-automations-collection',
    category: 'automation',
    icon: 'i-heroicons-cpu-chip',
    status: 'available',
    linkTo: '/tools/bot'
  },
  {
    id: 'booking-commission-calculator',
    category: 'chrome-extension',
    icon: 'i-heroicons-calculator',
    status: 'available',
    linkTo: '/tools/ui/show-booking-commissions'
  },
  {
    id: 'tables-full-width',
    category: 'chrome-extension',
    icon: 'i-heroicons-table-cells',
    status: 'available',
    linkTo: '/tools/ui/tables-full-width'
  },
  {
    id: 'compact-calendar-ui',
    category: 'chrome-extension',
    icon: 'i-heroicons-calendar-days',
    status: 'available',
    linkTo: '/tools/ui/compact-calendar-ui'
  },
  {
    id: 'prices-display',
    category: 'chrome-extension',
    icon: 'i-heroicons-currency-dollar',
    status: 'available',
    linkTo: '/tools/ui/prices-display'
  },
  {
    id: 'touch-screen-optimization',
    category: 'chrome-extension',
    icon: 'i-heroicons-device-tablet',
    status: 'available',
    linkTo: '/tools/ui/improve-style-touch-screens'
  }
]

export default defineNuxtModule({
  meta: {
    name: 'search-data-generator',
    configKey: 'searchDataGenerator'
  },
  defaults: {
    enabled: true,
    outputDir: 'public/data/search'
  },
  async setup(options, nuxt) {
    const logger = useLogger('search-data-generator')
    const resolver = createResolver(import.meta.url)

    if (!options.enabled) {
      logger.info('Search data generator is disabled')
      return
    }

    // Get locales from i18n config
    const getLocales = (): string[] => {
      const i18nConfig = nuxt.options.i18n as any
      if (i18nConfig?.locales) {
        return i18nConfig.locales.map((l: any) => typeof l === 'string' ? l : l.code)
      }
      return ['en', 'en-gb', 'es', 'fr', 'de', 'id', 'it', 'pt', 'th']
    }

    // Get default locale from i18n config
    const getDefaultLocale = (): string => {
      const i18nConfig = nuxt.options.i18n as any
      return i18nConfig?.defaultLocale || 'en'
    }

    // Recursively scan pages directory
    async function scanPagesDirectory(dir: string, basePath: string = ''): Promise<PageMeta[]> {
      const pages: PageMeta[] = []
      
      if (!existsSync(dir)) {
        return pages
      }

      const entries = await readdir(dir, { withFileTypes: true })
      
      for (const entry of entries) {
        const fullPath = join(dir, entry.name)
        
        if (entry.isDirectory()) {
          // Recurse into subdirectories
          const subPages = await scanPagesDirectory(fullPath, `${basePath}/${entry.name}`)
          pages.push(...subPages)
        } else if (entry.name.endsWith('.vue')) {
          const parsed = parse(entry.name)
          const name = parsed.name
          
          // Skip dynamic routes for now (they need special handling)
          const isDynamic = name.startsWith('[') && name.endsWith(']')
          
          // Build the route path
          let routePath = basePath
          if (name !== 'index') {
            routePath = `${basePath}/${name}`
          }
          
          // Normalize path
          routePath = routePath || '/'
          
          // Generate translation key based on path
          const translationKey = generateTranslationKey(routePath)
          
          pages.push({
            path: routePath,
            name,
            isDynamic,
            translationKey
          })
        }
      }
      
      return pages
    }

    // Generate translation key from route path
    function generateTranslationKey(path: string): string {
      if (path === '/') return 'home'
      // Remove leading slash and convert to dot notation
      return path
        .replace(/^\//, '')
        .replace(/\//g, '.')
        .replace(/-/g, '_')
    }

    // Get nested translation from object
    function getNestedTranslation(obj: any, key: string): string | undefined {
      return key.split('.').reduce((current, k) => current?.[k], obj)
    }

    // Extract title from slug
    function extractTitle(slug: string): string {
      return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    // Load translations for a locale
    async function loadTranslations(locale: string): Promise<Record<string, any>> {
      const localesDir = join(nuxt.options.rootDir, 'i18n', 'locales')
      
      try {
        const content = await readFile(join(localesDir, `${locale}.json`), 'utf-8')
        return JSON.parse(content)
      } catch {
        // Fallback to en
        try {
          const content = await readFile(join(localesDir, 'en.json'), 'utf-8')
          return JSON.parse(content)
        } catch {
          return {}
        }
      }
    }

    // Get content from markdown file
    async function getMarkdownContent(filePath: string): Promise<{ title?: string; description?: string; content?: string } | null> {
      try {
        if (!existsSync(filePath)) return null
        
        const content = await readFile(filePath, 'utf-8')
        const normalized = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
        
        // Parse frontmatter
        const frontmatterMatch = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
        
        if (frontmatterMatch) {
          const frontmatterStr = frontmatterMatch[1]
          const markdownContent = frontmatterMatch[2].trim()
          
          const frontmatter: Record<string, string> = {}
          frontmatterStr.split('\n').forEach(line => {
            const colonIndex = line.indexOf(':')
            if (colonIndex !== -1) {
              const key = line.substring(0, colonIndex).trim()
              const value = line.substring(colonIndex + 1).trim().replace(/^"(.*)"$/, '$1')
              if (key && value) {
                frontmatter[key] = value
              }
            }
          })
          
          // Extract description from content
          const lines = markdownContent.split('\n').filter(line => line.trim())
          const descriptionLines: string[] = []
          
          for (const line of lines) {
            const cleanLine = line.trim()
            if (cleanLine && 
                !cleanLine.startsWith('#') && 
                !cleanLine.startsWith('|') && 
                !cleanLine.startsWith('*') && 
                !cleanLine.startsWith('-') &&
                !cleanLine.startsWith('<') &&
                !cleanLine.match(/^---+$/)) {
              descriptionLines.push(cleanLine)
              if (descriptionLines.length >= 2) break
            }
          }
          
          return {
            title: frontmatter.title,
            description: descriptionLines.join(' ').substring(0, 300) || frontmatter.description,
            content: markdownContent.substring(0, 1000)
          }
        }
        
        // No frontmatter, just content
        const lines = normalized.split('\n').filter(line => line.trim())
        const descriptionLines: string[] = []
        
        for (const line of lines) {
          const cleanLine = line.trim()
          if (cleanLine && !cleanLine.startsWith('#')) {
            descriptionLines.push(cleanLine)
            if (descriptionLines.length >= 2) break
          }
        }
        
        return {
          description: descriptionLines.join(' ').substring(0, 300),
          content: normalized.substring(0, 1000)
        }
      } catch {
        return null
      }
    }

    // Generate static pages search data
    async function getStaticPages(pages: PageMeta[], locale: string, translations: Record<string, any>): Promise<SearchItem[]> {
      const results: SearchItem[] = []
      const defaultLocale = getDefaultLocale()
      
      // Page metadata mapping
      const pageMetadata: Record<string, { titleKey: string; descriptionKey: string; fallbackTitle: string; fallbackDescription: string }> = {
        'home': {
          titleKey: 'nav.home',
          descriptionKey: 'home.hero.subtitle',
          fallbackTitle: 'Home',
          fallbackDescription: 'Hotel management tools and automation solutions'
        },
        'tools': {
          titleKey: 'nav.tools',
          descriptionKey: 'tools.hero.subtitle',
          fallbackTitle: 'Tools',
          fallbackDescription: 'Comprehensive collection of hotel management tools'
        },
        'tools.ui': {
          titleKey: 'tools.ui.title',
          descriptionKey: 'tools.ui.subtitle',
          fallbackTitle: 'UI Scripts',
          fallbackDescription: 'Browser scripts to enhance Little Hotelier interface'
        },
        'tools.bot': {
          titleKey: 'tools.bot.title',
          descriptionKey: 'tools.bot.subtitle',
          fallbackTitle: 'Bot Automations',
          fallbackDescription: 'Automated tasks for hotel management'
        },
        'documentation': {
          titleKey: 'nav.documentation',
          descriptionKey: 'documentation.hero.subtitle',
          fallbackTitle: 'Documentation',
          fallbackDescription: 'Complete guides and documentation for all tools'
        },
        'contact': {
          titleKey: 'nav.contact',
          descriptionKey: 'contact.hero.subtitle',
          fallbackTitle: 'Contact',
          fallbackDescription: 'Get in touch with our support team'
        },
        'faq': {
          titleKey: 'nav.faq',
          descriptionKey: 'faq.hero.subtitle',
          fallbackTitle: 'FAQ',
          fallbackDescription: 'Frequently asked questions and answers'
        },
        'chrome_extensions': {
          titleKey: 'nav.chrome_extensions',
          descriptionKey: 'chrome_extensions.hero.subtitle',
          fallbackTitle: 'Chrome Extensions',
          fallbackDescription: 'Browser extensions for enhanced hotel management'
        },
        'marketing': {
          titleKey: 'marketing.hero.title',
          descriptionKey: 'marketing.hero.subtitle',
          fallbackTitle: 'Marketing Tools',
          fallbackDescription: 'Marketing solutions for hotels'
        },
        'marketing.detect_incomplete_reservation': {
          titleKey: 'marketing.detect_incomplete_reservation.header.title',
          descriptionKey: 'marketing.detect_incomplete_reservation.header.subtitle',
          fallbackTitle: 'Detect Incomplete Reservations',
          fallbackDescription: 'Detect and recover incomplete reservation attempts'
        }
      }
      
      for (const page of pages) {
        // Skip dynamic routes
        if (page.isDynamic) continue
        
        const translationKey = page.translationKey || 'home'
        const meta = pageMetadata[translationKey] || {
          titleKey: `${translationKey}.title`,
          descriptionKey: `${translationKey}.description`,
          fallbackTitle: extractTitle(page.path.split('/').pop() || 'Page'),
          fallbackDescription: `Page for ${translationKey}`
        }
        
        const title = getNestedTranslation(translations, meta.titleKey) || meta.fallbackTitle
        const description = getNestedTranslation(translations, meta.descriptionKey) || meta.fallbackDescription
        
        // Build URL with locale prefix
        let url = page.path
        if (locale !== defaultLocale) {
          url = `/${locale}${page.path}`
        }
        
        results.push({
          title,
          description,
          url,
          type: page.path.includes('marketing') ? 'marketing' : 'page',
          language: locale,
          excerpt: description.substring(0, 150),
          content: description
        })
      }
      
      return results
    }

    // Get bot content from markdown files
    async function getBotContent(locale: string): Promise<SearchItem[]> {
      const results: SearchItem[] = []
      const botDir = join(nuxt.options.rootDir, 'content', 'bot', locale)
      const defaultLocale = getDefaultLocale()
      
      if (!existsSync(botDir)) {
        logger.debug(`Bot directory doesn't exist for ${locale}: ${botDir}`)
        return results
      }
      
      try {
        const files = await readdir(botDir)
        
        for (const file of files) {
          if (!file.endsWith('.md')) continue
          
          const filePath = join(botDir, file)
          const mdContent = await getMarkdownContent(filePath)
          
          const slug = file.replace('.md', '')
          const title = mdContent?.title || extractTitle(slug)
          const description = mdContent?.description || `Bot automation for ${title.toLowerCase()}`
          
          let url = `/tools/bot/${slug}`
          if (locale !== defaultLocale) {
            url = `/${locale}${url}`
          }
          
          results.push({
            title,
            description,
            url,
            type: 'bot',
            language: locale,
            excerpt: description.substring(0, 150),
            content: mdContent?.content || description
          })
        }
      } catch (error) {
        logger.error(`Error loading bot content for ${locale}:`, error)
      }
      
      return results
    }

    // Get script content for tools
    async function getScriptContent(toolId: string, locale: string): Promise<{ title?: string; description?: string; content?: string; excerpt?: string } | null> {
      const scripts = SCRIPT_MAPPING[toolId] || []
      
      if (scripts.length === 0) return null
      
      const scriptSlug = scripts[0]
      const scriptPath = join(nuxt.options.rootDir, 'content', 'scripts', locale, `${scriptSlug}.md`)
      
      const mdContent = await getMarkdownContent(scriptPath)
      if (!mdContent) return null
      
      return {
        title: mdContent.title || extractTitle(scriptSlug),
        description: mdContent.description,
        content: mdContent.content,
        excerpt: mdContent.description?.substring(0, 150)
      }
    }

    // Get tool content
    async function getToolContent(locale: string, translations: Record<string, any>): Promise<SearchItem[]> {
      const results: SearchItem[] = []
      const defaultLocale = getDefaultLocale()
      
      for (const tool of TOOLS_DATA) {
        const toolKey = tool.id.replace(/-/g, '_')
        const toolTranslations = translations.tools?.showcase?.tools?.[toolKey] || translations.tools?.[toolKey] || {}
        
        const scriptContent = await getScriptContent(tool.id, locale)
        
        let description = toolTranslations.description || toolTranslations.subtitle || `${tool.category} tool for hotel management`
        let content = ''
        let excerpt = toolTranslations.description?.substring(0, 150) || ''
        
        if (scriptContent) {
          description = scriptContent.description || description
          content = scriptContent.content || ''
          excerpt = scriptContent.excerpt || excerpt
        }
        
        let url = tool.linkTo
        if (locale !== defaultLocale) {
          url = `/${locale}${url}`
        }
        
        results.push({
          title: toolTranslations.title || scriptContent?.title || tool.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description,
          url,
          type: 'tool',
          language: locale,
          excerpt,
          content
        })
      }
      
      return results
    }

    // Get all UI scripts from content/scripts directory (for dynamic [slug] routes)
    async function getUIScriptsContent(locale: string): Promise<SearchItem[]> {
      const results: SearchItem[] = []
      const scriptsDir = join(nuxt.options.rootDir, 'content', 'scripts', locale)
      const defaultLocale = getDefaultLocale()
      
      if (!existsSync(scriptsDir)) {
        logger.debug(`Scripts directory doesn't exist for ${locale}: ${scriptsDir}`)
        return results
      }
      
      try {
        const files = await readdir(scriptsDir)
        
        for (const file of files) {
          if (!file.endsWith('.md')) continue
          
          const filePath = join(scriptsDir, file)
          const mdContent = await getMarkdownContent(filePath)
          
          const slug = file.replace('.md', '')
          const title = mdContent?.title || extractTitle(slug)
          const description = mdContent?.description || `UI script: ${title}`
          
          let url = `/tools/ui/${slug}`
          if (locale !== defaultLocale) {
            url = `/${locale}${url}`
          }
          
          results.push({
            title,
            description,
            url,
            type: 'tool',
            language: locale,
            excerpt: description.substring(0, 150),
            content: mdContent?.content || description
          })
        }
      } catch (error) {
        logger.error(`Error loading UI scripts content for ${locale}:`, error)
      }
      
      return results
    }

    // Get FAQ content
    async function getFAQContent(locale: string, translations: Record<string, any>): Promise<SearchItem[]> {
      const results: SearchItem[] = []
      const defaultLocale = getDefaultLocale()
      
      const faqItems = translations.documentation?.faq?.items || {}
      
      Object.keys(faqItems).forEach((key) => {
        const item = faqItems[key]
        if (item && item.label && item.content) {
          let url = `/faq#faq-item-${key}`
          if (locale !== defaultLocale) {
            url = `/${locale}${url}`
          }
          
          results.push({
            title: item.label,
            description: item.content,
            url,
            type: 'faq',
            language: locale,
            excerpt: item.content.substring(0, 150),
            content: `${item.label}\n\n${item.content}`
          })
        }
      })
      
      return results
    }

    // Generate search data for a single locale
    async function generateSearchDataForLocale(locale: string, pages: PageMeta[]): Promise<Record<string, SearchItem>> {
      logger.info(`Generating search data for locale: ${locale}`)
      
      const searchData: Record<string, SearchItem> = {}
      const translations = await loadTranslations(locale)
      
      try {
        // Get all content types
        const [staticPages, botContent, toolContent, uiScriptsContent, faqItems] = await Promise.all([
          getStaticPages(pages, locale, translations),
          getBotContent(locale),
          getToolContent(locale, translations),
          getUIScriptsContent(locale),
          getFAQContent(locale, translations)
        ])
        
        // Combine all content (uiScriptsContent may override toolContent for same URLs, which is fine)
        const allItems = [...staticPages, ...botContent, ...toolContent, ...uiScriptsContent, ...faqItems]
        
        allItems.forEach(item => {
          searchData[item.url] = item
        })
        
        return searchData
      } catch (error) {
        logger.error(`Error generating search data for ${locale}:`, error)
        return {}
      }
    }

    // Main generation function
    async function generateSearchData() {
      logger.start('Generating static search data for all locales...')
      
      const outputDir = join(nuxt.options.rootDir, options.outputDir)
      const pagesDir = join(nuxt.options.rootDir, 'pages')
      
      // Ensure output directory exists
      if (!existsSync(outputDir)) {
        await mkdir(outputDir, { recursive: true })
      }
      
      // Scan pages directory
      const pages = await scanPagesDirectory(pagesDir)
      logger.info(`Found ${pages.length} pages in the pages directory`)
      
      const locales = getLocales()
      const allData: Record<string, Record<string, SearchItem>> = {}
      
      // Generate search data for each locale
      for (const locale of locales) {
        const searchData = await generateSearchDataForLocale(locale, pages)
        allData[locale] = searchData
        
        // Write individual locale file
        const localeFile = join(outputDir, `${locale}.json`)
        await writeFile(localeFile, JSON.stringify(searchData, null, 2), 'utf-8')
        
        logger.success(`Generated ${Object.keys(searchData).length} search items for ${locale}`)
      }
      
      // Write combined file
      const combinedFile = join(outputDir, 'all.json')
      await writeFile(combinedFile, JSON.stringify(allData, null, 2), 'utf-8')
      
      logger.success(`Successfully generated search data for ${locales.length} locales!`)
      logger.info(`Files saved to: ${outputDir}`)
    }

    // Register hooks
    nuxt.hook('build:before', async () => {
      await generateSearchData()
    })

    // Generate in dev mode if data doesn't exist
    nuxt.hook('ready', async () => {
      if (nuxt.options.dev) {
        const searchDataPath = join(nuxt.options.rootDir, options.outputDir, 'en.json')
        
        if (!existsSync(searchDataPath)) {
          logger.info('Generating search data for development...')
          await generateSearchData()
        }
      }
    })

    // Expose a nitro route for regeneration during development
    if (nuxt.options.dev) {
      nuxt.hook('nitro:config', (config) => {
        config.handlers = config.handlers || []
        // The existing API route can still be used if needed
      })
    }
  }
})
