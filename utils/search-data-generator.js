// utils/search-data-generator.js - Shared logic for search data generation

import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

// Supported locales
export const SUPPORTED_LOCALES = ['en', 'en-gb', 'es', 'fr', 'de', 'id', 'it', 'pt', 'th']

// Tools data
export function getToolsData() {
  return [
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
}

// Script mapping for tool-script association
export const SCRIPT_MAPPING = {
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
  'booking-commission-calculator': [
    'show-booking-commissions'
  ],
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

export async function generateSearchDataForLocale(locale) {
  console.log(`Generating search data for locale: ${locale}`)
  
  try {
    const searchData = {}
    
    // Add static pages
    const staticPages = await getStaticPages(locale)
    
    // Add bot content from markdown files
    const botContent = await getBotContent(locale)
    
    // Add tool data
    const toolContent = await getToolContent(locale)

    // Add FAQ items
    const faqItems = await getFAQContent(locale)

    // Add locale prefix for non-default locales
    if (locale !== 'en') {
      staticPages.forEach(page => {
        page.url = `/${locale}${page.url}`
      })
      
      botContent.forEach(page => {
        page.url = `/${locale}${page.url}`
      })
      
      toolContent.forEach(page => {
        page.url = `/${locale}${page.url}`
      })
      
      faqItems.forEach(item => {
        item.url = `/${locale}${item.url}`
      })
    }

    staticPages.forEach(page => {
      searchData[page.url] = page
    })
    
    botContent.forEach(item => {
      searchData[item.url] = item
    })
    
    toolContent.forEach(item => {
      searchData[item.url] = item
    })

    faqItems.forEach(item => {
      searchData[item.url] = item
    })

    return searchData
  } catch (error) {
    console.error(`Error generating search data for ${locale}:`, error)
    return {}
  }
}

export async function getStaticPages(locale) {
  let translations = {}
  try {
    const localeFile = await readFile(
      join(process.cwd(), 'i18n', 'locales', `${locale}.json`),
      'utf-8'
    )
    translations = JSON.parse(localeFile)
  } catch {
    // Fallback to en
    try {
      const localeFile = await readFile(
        join(process.cwd(), 'i18n', 'locales', 'en.json'),
        'utf-8'
      )
      translations = JSON.parse(localeFile)
    } catch {
      translations = {}
    }
  }

  const pages = [
    {
      key: 'home',
      url: '/',
      titleKey: 'nav.home',
      descriptionKey: 'home.hero.subtitle',
      fallbackTitle: 'Home',
      fallbackDescription: 'Hotel management tools and automation solutions'
    },
    {
      key: 'tools',
      url: '/tools',
      titleKey: 'nav.tools',
      descriptionKey: 'tools.hero.subtitle',
      fallbackTitle: 'Tools',
      fallbackDescription: 'Comprehensive collection of hotel management tools'
    },
    {
      key: 'documentation',
      url: '/documentation',
      titleKey: 'nav.documentation',
      descriptionKey: 'documentation.hero.subtitle',
      fallbackTitle: 'Documentation',
      fallbackDescription: 'Complete guides and documentation for all tools'
    },
    {
      key: 'contact',
      url: '/contact',
      titleKey: 'nav.contact',
      descriptionKey: 'contact.hero.subtitle',
      fallbackTitle: 'Contact',
      fallbackDescription: 'Get in touch with our support team'
    },
    {
      key: 'faq',
      url: '/faq',
      titleKey: 'nav.faq',
      descriptionKey: 'faq.hero.subtitle',
      fallbackTitle: 'FAQ',
      fallbackDescription: 'Frequently asked questions and answers'
    }
  ]

  const results = []

  for (const page of pages) {
    const title = getNestedTranslation(translations, page.titleKey) || page.fallbackTitle
    let description = getNestedTranslation(translations, page.descriptionKey) || page.fallbackDescription
    
    const pageContent = await getPageContent(page.key, locale)
    if (pageContent) {
      description = pageContent.description || description
    }

    results.push({
      title,
      description,
      url: page.url,
      type: 'page',
      language: locale,
      excerpt: description.substring(0, 150),
      content: pageContent?.content || description
    })
  }

  return results
}

export function getNestedTranslation(obj, key) {
  return key.split('.').reduce((current, k) => current?.[k], obj)
}

export async function getPageContent(pageKey, locale) {
  try {
    const contentPath = join(process.cwd(), 'content', 'pages', locale, `${pageKey}.md`)
    const content = await readFile(contentPath, 'utf-8')
    
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    
    if (frontmatterMatch) {
      const markdownContent = frontmatterMatch[2].trim()
      const lines = markdownContent.split('\n').filter(line => line.trim())
      const description = lines.slice(0, 3).join(' ').substring(0, 300)
      
      return {
        description,
        content: markdownContent.substring(0, 500)
      }
    }
    
    return null
  } catch (error) {
    return null
  }
}

export async function getBotContent(locale) {
  const results = []
  
  try {
    const botDir = join(process.cwd(), 'content', 'bot', locale)
    
    if (!existsSync(botDir)) {
      console.log(`Bot directory doesn't exist for ${locale}: ${botDir}`)
      return results
    }
    
    const files = await readdir(botDir)
    
    for (const file of files) {
      if (!file.endsWith('.md')) continue
      
      const filePath = join(botDir, file)
      const content = await readFile(filePath, 'utf-8')
      
      let textContent = content.trim()
      if (textContent.startsWith('---\n')) {
        textContent = textContent.substring(4).trim()
      }
      
      const slug = file.replace('.md', '')
      
      const normalizedContent = textContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
      const lines = normalizedContent.split('\n').filter(line => line.trim())
      const title = extractTitle(slug)
      
      let descriptionLines = []
      
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
      
      let description = descriptionLines.join(' ')
      if (description.length > 300) {
        description = description.substring(0, 300) + '...'
      }
      
      const excerpt = descriptionLines[0]?.substring(0, 150) || ''
      
      results.push({
        title,
        description: description || `Bot automation for ${title.toLowerCase()}`,
        url: `/tools/bot/${slug}`,
        type: 'bot',
        language: locale,
        excerpt,
        content: normalizedContent.substring(0, 800)
      })
    }
  } catch (error) {
    console.error(`Error loading bot content for ${locale}:`, error)
  }
  
  return results
}

export async function getToolContent(locale) {
  const results = []
  
  let translations = {}
  try {
    const localeFile = await readFile(
      join(process.cwd(), 'i18n', 'locales', `${locale}.json`),
      'utf-8'
    )
    translations = JSON.parse(localeFile)
  } catch {
    translations = {}
  }
  
  const toolsData = getToolsData()
  
  for (const tool of toolsData) {
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
    
    results.push({
      title: toolTranslations.title || scriptContent?.title || tool.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description,
      url: tool.linkTo,
      type: 'tool',
      language: locale,
      excerpt,
      content
    })
  }
  
  return results
}

export function extractTitle(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export async function getScriptContent(toolId, locale) {
  try {
    const scripts = SCRIPT_MAPPING[toolId] || []
    
    if (scripts.length === 0) {
      return null
    }
    
    const scriptSlug = scripts[0]
    const scriptDir = join(process.cwd(), 'content', 'scripts', locale)
    const scriptPath = join(scriptDir, `${scriptSlug}.md`)
    
    if (!existsSync(scriptPath)) {
      return null
    }
    
    let content = await readFile(scriptPath, 'utf-8')
    
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
    
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    
    if (!frontmatterMatch) {
      return null
    }
    
    const frontmatterStr = frontmatterMatch[1]
    let markdownContent = frontmatterMatch[2].trim()
    
    const frontmatter = {}
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
    
    const lines = markdownContent.split('\n').filter(line => line.trim())
    let descriptionLines = []
    
    for (const line of lines) {
      const cleanLine = line.trim()
      if (cleanLine && !cleanLine.startsWith('#') && !cleanLine.startsWith('**Features:**') && !cleanLine.startsWith('-')) {
        descriptionLines.push(cleanLine)
        if (descriptionLines.length >= 2) break
      }
    }
    
    const description = descriptionLines.join(' ').substring(0, 300)
    const excerpt = descriptionLines[0]?.substring(0, 150) || ''
    
    return {
      title: frontmatter.title || extractTitle(scriptSlug),
      description: description || frontmatter.description || `${frontmatter.category || 'Tool'} for hotel management`,
      content: markdownContent.substring(0, 1000),
      excerpt
    }
  } catch (error) {
    console.error(`Error loading script content for ${toolId}:`, error.message)
    return null
  }
}

export async function getFAQContent(locale) {
  const results = []
  
  let translations = {}
  try {
    const localeFile = await readFile(
      join(process.cwd(), 'i18n', 'locales', `${locale}.json`),
      'utf-8'
    )
    translations = JSON.parse(localeFile)
  } catch {
    // Fallback to en
    try {
      const localeFile = await readFile(
        join(process.cwd(), 'i18n', 'locales', 'en.json'),
        'utf-8'
      )
      translations = JSON.parse(localeFile)
    } catch {
      translations = {}
    }
  }
  
  const faqItems = translations.documentation?.faq?.items || {}
  
  // Convert FAQ items to search entries
  Object.keys(faqItems).forEach((key, index) => {
    const item = faqItems[key]
    if (item && item.label && item.content) {
      results.push({
        title: item.label,
        description: item.content,
        url: `/faq#faq-item-${key}`, // Use the actual key instead of index
        type: 'faq',
        language: locale,
        excerpt: item.content.substring(0, 150),
        content: `${item.label}\n\n${item.content}`
      })
    }
  })
  
  return results
}
