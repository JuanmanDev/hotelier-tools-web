#!/usr/bin/env npx tsx

/**
 * Standalone script to generate static search data for all locales
 * This script can be run manually or during the build process
 * 
 * Note: The main search data generation is now handled by the Nuxt module
 * (modules/search-data-generator.ts) which runs automatically during build.
 * This script is kept for backward compatibility and manual regeneration.
 */

import { writeFile, mkdir, readdir, readFile } from 'fs/promises'
import { join, parse } from 'path'
import { existsSync } from 'fs'

// Configuration
const ROOT_DIR = process.cwd()
const OUTPUT_DIR = join(ROOT_DIR, 'public', 'data', 'search')
const PAGES_DIR = join(ROOT_DIR, 'pages')
const LOCALES_DIR = join(ROOT_DIR, 'i18n', 'locales')
const CONTENT_DIR = join(ROOT_DIR, 'content')

// Types
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
  { id: 'ui-scripts-collection', category: 'chrome-extension', linkTo: '/tools/ui' },
  { id: 'bot-automations-collection', category: 'automation', linkTo: '/tools/bot' },
  { id: 'booking-commission-calculator', category: 'chrome-extension', linkTo: '/tools/ui/show-booking-commissions' },
  { id: 'tables-full-width', category: 'chrome-extension', linkTo: '/tools/ui/tables-full-width' },
  { id: 'compact-calendar-ui', category: 'chrome-extension', linkTo: '/tools/ui/compact-calendar-ui' },
  { id: 'prices-display', category: 'chrome-extension', linkTo: '/tools/ui/prices-display' },
  { id: 'touch-screen-optimization', category: 'chrome-extension', linkTo: '/tools/ui/improve-style-touch-screens' }
]

// Page metadata mapping
const PAGE_METADATA: Record<string, { titleKey: string; descriptionKey: string; fallbackTitle: string; fallbackDescription: string }> = {
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

// Utility functions
function getNestedTranslation(obj: any, key: string): string | undefined {
  return key.split('.').reduce((current, k) => current?.[k], obj)
}

function extractTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function generateTranslationKey(path: string): string {
  if (path === '/') return 'home'
  return path.replace(/^\//, '').replace(/\//g, '.').replace(/-/g, '_')
}

// Discover locales from i18n/locales directory
async function discoverLocales(): Promise<string[]> {
  try {
    const files = await readdir(LOCALES_DIR)
    return files
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''))
  } catch {
    return ['en', 'en-gb', 'es', 'fr', 'de', 'id', 'it', 'pt', 'th']
  }
}

// Scan pages directory recursively
async function scanPagesDirectory(dir: string, basePath: string = ''): Promise<PageMeta[]> {
  const pages: PageMeta[] = []
  
  if (!existsSync(dir)) return pages

  const entries = await readdir(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    
    if (entry.isDirectory()) {
      const subPages = await scanPagesDirectory(fullPath, `${basePath}/${entry.name}`)
      pages.push(...subPages)
    } else if (entry.name.endsWith('.vue')) {
      const parsed = parse(entry.name)
      const name = parsed.name
      const isDynamic = name.startsWith('[') && name.endsWith(']')
      
      let routePath = basePath
      if (name !== 'index') {
        routePath = `${basePath}/${name}`
      }
      
      routePath = routePath || '/'
      const translationKey = generateTranslationKey(routePath)
      
      pages.push({ path: routePath, name, isDynamic, translationKey })
    }
  }
  
  return pages
}

// Load translations for a locale
async function loadTranslations(locale: string): Promise<Record<string, any>> {
  try {
    const content = await readFile(join(LOCALES_DIR, `${locale}.json`), 'utf-8')
    return JSON.parse(content)
  } catch {
    try {
      const content = await readFile(join(LOCALES_DIR, 'en.json'), 'utf-8')
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
          if (key && value) frontmatter[key] = value
        }
      })
      
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
async function getStaticPages(pages: PageMeta[], locale: string, translations: Record<string, any>, defaultLocale: string): Promise<SearchItem[]> {
  const results: SearchItem[] = []
  
  for (const page of pages) {
    if (page.isDynamic) continue
    
    const translationKey = page.translationKey || 'home'
    const meta = PAGE_METADATA[translationKey] || {
      titleKey: `${translationKey}.title`,
      descriptionKey: `${translationKey}.description`,
      fallbackTitle: extractTitle(page.path.split('/').pop() || 'Page'),
      fallbackDescription: `Page for ${translationKey}`
    }
    
    const title = getNestedTranslation(translations, meta.titleKey) || meta.fallbackTitle
    const description = getNestedTranslation(translations, meta.descriptionKey) || meta.fallbackDescription
    
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
async function getBotContent(locale: string, defaultLocale: string): Promise<SearchItem[]> {
  const results: SearchItem[] = []
  const botDir = join(CONTENT_DIR, 'bot', locale)
  
  if (!existsSync(botDir)) {
    console.log(`  ⚠️  Bot directory doesn't exist for ${locale}`)
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
    console.error(`  ❌ Error loading bot content for ${locale}:`, error)
  }
  
  return results
}

// Get script content for tools
async function getScriptContent(toolId: string, locale: string): Promise<{ title?: string; description?: string; content?: string; excerpt?: string } | null> {
  const scripts = SCRIPT_MAPPING[toolId] || []
  
  if (scripts.length === 0) return null
  
  const scriptSlug = scripts[0]
  const scriptPath = join(CONTENT_DIR, 'scripts', locale, `${scriptSlug}.md`)
  
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
async function getToolContent(locale: string, translations: Record<string, any>, defaultLocale: string): Promise<SearchItem[]> {
  const results: SearchItem[] = []
  
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
async function getUIScriptsContent(locale: string, defaultLocale: string): Promise<SearchItem[]> {
  const results: SearchItem[] = []
  const scriptsDir = join(CONTENT_DIR, 'scripts', locale)
  
  if (!existsSync(scriptsDir)) {
    console.log(`  ⚠️  Scripts directory doesn't exist for ${locale}`)
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
    console.error(`  ❌ Error loading UI scripts content for ${locale}:`, error)
  }
  
  return results
}

// Get FAQ content
async function getFAQContent(locale: string, translations: Record<string, any>, defaultLocale: string): Promise<SearchItem[]> {
  const results: SearchItem[] = []
  
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
async function generateSearchDataForLocale(locale: string, pages: PageMeta[], defaultLocale: string): Promise<Record<string, SearchItem>> {
  const searchData: Record<string, SearchItem> = {}
  const translations = await loadTranslations(locale)
  
  try {
    const [staticPages, botContent, toolContent, uiScriptsContent, faqItems] = await Promise.all([
      getStaticPages(pages, locale, translations, defaultLocale),
      getBotContent(locale, defaultLocale),
      getToolContent(locale, translations, defaultLocale),
      getUIScriptsContent(locale, defaultLocale),
      getFAQContent(locale, translations, defaultLocale)
    ])
    
    // Combine all content (uiScriptsContent may override toolContent for same URLs, which is fine)
    const allItems = [...staticPages, ...botContent, ...toolContent, ...uiScriptsContent, ...faqItems]
    
    allItems.forEach(item => {
      searchData[item.url] = item
    })
    
    return searchData
  } catch (error) {
    console.error(`  ❌ Error generating search data for ${locale}:`, error)
    return {}
  }
}

// Main function
async function main() {
  console.log('🔍 Generating static search data for all locales...\n')
  
  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true })
  }
  
  // Discover locales automatically
  const locales = await discoverLocales()
  const defaultLocale = 'en'
  
  console.log(`📋 Found ${locales.length} locales: ${locales.join(', ')}\n`)
  
  // Scan pages directory
  const pages = await scanPagesDirectory(PAGES_DIR)
  console.log(`📄 Found ${pages.length} pages in the pages directory\n`)
  
  const allData: Record<string, Record<string, SearchItem>> = {}
  
  // Generate search data for each locale
  for (const locale of locales) {
    console.log(`📝 Processing locale: ${locale}`)
    const searchData = await generateSearchDataForLocale(locale, pages, defaultLocale)
    allData[locale] = searchData
    
    // Write individual locale file
    const localeFile = join(OUTPUT_DIR, `${locale}.json`)
    await writeFile(localeFile, JSON.stringify(searchData, null, 2), 'utf-8')
    
    console.log(`   ✅ Generated ${Object.keys(searchData).length} search items\n`)
  }
  
  // Write combined file
  const combinedFile = join(OUTPUT_DIR, 'all.json')
  await writeFile(combinedFile, JSON.stringify(allData, null, 2), 'utf-8')
  
  console.log(`🎉 Successfully generated search data for ${locales.length} locales!`)
  console.log(`📁 Files saved to: ${OUTPUT_DIR}`)
}

// Run the script
main().catch(console.error)
