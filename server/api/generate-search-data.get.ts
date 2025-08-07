import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import { toolsData } from '~/data/tools'

export interface SearchItem {
  title: string
  description?: string
  url: string
  type: 'page' | 'bot' | 'tool'
  language: string
  excerpt?: string
  content?: string
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const locale = query.locale as string || 'en'
  
  try {
    const searchData: Record<string, SearchItem> = {}
    
    // Add static pages
    const staticPages = await getStaticPages(locale)
    staticPages.forEach(page => {
      searchData[page.url] = page
    })
    
    // Add bot content from markdown files
    const botContent = await getBotContent(locale)
    botContent.forEach(item => {
      searchData[item.url] = item
    })
    
    // Add tool data
    const toolContent = await getToolContent(locale)
    toolContent.forEach(item => {
      searchData[item.url] = item
    })
    
    return searchData
  } catch (error) {
    console.error('Error generating search data:', error)
    return {}
  }
})

async function getStaticPages(locale: string): Promise<SearchItem[]> {
  // Load locale file
  let translations: any = {}
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

  return [
    {
      title: translations.nav?.home || 'Home',
      description: translations.home?.hero?.subtitle || 'Join the hotels that are already improving their management with our tools',
      url: '/',
      type: 'page',
      language: locale
    },
    {
      title: translations.nav?.tools || 'Tools',
      description: translations.tools?.hero?.subtitle || 'Available tools to optimize your hotel management',
      url: '/tools',
      type: 'page',
      language: locale
    },
    {
      title: translations.nav?.documentation || 'Documentation',
      description: translations.documentation?.hero?.subtitle || 'Complete documentation about all tools',
      url: '/documentation',
      type: 'page',
      language: locale
    },
    {
      title: translations.nav?.contact || 'Contact',
      description: translations.contact?.hero?.subtitle || 'Get in touch with our support team',
      url: '/contact',
      type: 'page',
      language: locale
    }
  ]
}

async function getBotContent(locale: string): Promise<SearchItem[]> {
  const results: SearchItem[] = []
  
  try {
    const botDir = join(process.cwd(), 'content', 'bot', locale)
    const files = await readdir(botDir)
    
    for (const file of files) {
      if (!file.endsWith('.md')) continue
      
      const filePath = join(botDir, file)
      const content = await readFile(filePath, 'utf-8')
      
      // Remove frontmatter and extract text content
      const textContent = content.replace(/^---[\s\S]*?---/, '').trim()
      const slug = file.replace('.md', '')
      
      // Extract first few lines as description
      const lines = textContent.split('\n').filter(line => line.trim())
      const title = extractTitle(slug)
      const description = lines.slice(0, 3).join(' ').substring(0, 200) + '...'
      const excerpt = lines[0]?.substring(0, 150) || ''
      
      results.push({
        title,
        description,
        url: `/tools/bot/${slug}`,
        type: 'bot',
        language: locale,
        excerpt,
        content: textContent.substring(0, 500)
      })
    }
  } catch (error) {
    console.error(`Error loading bot content for ${locale}:`, error)
  }
  
  return results
}

async function getToolContent(locale: string): Promise<SearchItem[]> {
  const results: SearchItem[] = []
  
  // Load locale file for tool translations
  let translations: any = {}
  try {
    const localeFile = await readFile(
      join(process.cwd(), 'i18n', 'locales', `${locale}.json`),
      'utf-8'
    )
    translations = JSON.parse(localeFile)
  } catch {
    translations = {}
  }
  
  // Add tools from the tools data
  toolsData.forEach(tool => {
    const toolKey = tool.id.replace(/-/g, '_')
    const toolTranslations = translations.tools?.[toolKey] || {}
    
    results.push({
      title: toolTranslations.title || tool.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: toolTranslations.description || toolTranslations.subtitle || `${tool.category} tool for hotel management`,
      url: tool.linkTo,
      type: 'tool',
      language: locale,
      excerpt: toolTranslations.description?.substring(0, 150) || ''
    })
  })
  
  return results
}

function extractTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}