export interface SearchResult {
  title: string
  description?: string
  url: string
  type: 'page' | 'bot' | 'tool'
  language: string
  excerpt?: string
}

export const useSearch = () => {
  const { locale } = useI18n()
  
  // Reactive state
  const isSearchOpen = ref(false)
  const searchQuery = ref('')
  const searchResults = ref<SearchResult[]>([])
  const isLoading = ref(false)
  const allContent = ref<SearchResult[]>([])

  // Preload all content on first use
  const preloadContent = async () => {
    if (allContent.value.length > 0) return
    
    try {
      isLoading.value = true
      
      // Get all content for current language
      const { data: content } = await $fetch('/api/_content/query', {
        method: 'GET',
        query: {
          _params: JSON.stringify({
            where: [
              { _path: { $contains: `/${locale.value}` } },
              { _draft: { $ne: true } }
            ]
          })
        }
      }).catch(() => ({ data: [] }))

      // Transform content to search results
      if (Array.isArray(content)) {
        allContent.value = content.map(item => ({
          title: item.title || extractTitleFromPath(item._path!),
          description: item.description || extractDescriptionFromContent(item.body),
          url: generateUrlFromPath(item._path!),
          type: determineContentType(item._path!),
          language: locale.value,
          excerpt: extractExcerpt(item.body)
        }))
      }

      // Also add static pages
      const staticPages = getStaticPages()
      allContent.value.push(...staticPages)
      
    } catch (error) {
      console.error('Error preloading content:', error)
      // If content fails to load, just use static pages
      allContent.value = getStaticPages()
    } finally {
      isLoading.value = false
    }
  }

  // Search through preloaded content
  const performSearch = (query: string) => {
    if (!query.trim()) {
      searchResults.value = []
      return
    }

    const lowercaseQuery = query.toLowerCase()
    
    searchResults.value = allContent.value.filter(item => {
      return (
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.description?.toLowerCase().includes(lowercaseQuery) ||
        item.excerpt?.toLowerCase().includes(lowercaseQuery)
      )
    }).slice(0, 10) // Limit to 10 results
  }

  // Watch for search query changes
  watch(searchQuery, (newQuery) => {
    performSearch(newQuery)
  })

  // Watch for locale changes to reload content
  watch(locale, () => {
    allContent.value = []
    preloadContent()
  })

  // Utility functions
  const extractTitleFromPath = (path: string): string => {
    const segments = path.split('/')
    const filename = segments[segments.length - 1]
    return filename.replace('.md', '').replace('-', ' ').replace('_', ' ')
      .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  const extractDescriptionFromContent = (body: any): string => {
    if (!body) return ''
    
    // Try to find first paragraph or text content
    const findTextContent = (node: any): string => {
      if (typeof node === 'string') return node
      if (Array.isArray(node)) {
        return node.map(findTextContent).join(' ')
      }
      if (node?.children) {
        return findTextContent(node.children)
      }
      return ''
    }
    
    const text = findTextContent(body)
    return text.slice(0, 200) + (text.length > 200 ? '...' : '')
  }

  const extractExcerpt = (body: any): string => {
    return extractDescriptionFromContent(body).slice(0, 150)
  }

  const determineContentType = (path: string): 'page' | 'bot' | 'tool' => {
    if (path.includes('/bot/')) return 'bot'
    if (path.includes('/tools/')) return 'tool'
    return 'page'
  }

  const generateUrlFromPath = (path: string): string => {
    // Remove language prefix and convert to route
    const segments = path.split('/').filter(Boolean)
    if (segments[0] === locale.value) {
      segments.shift()
    }
    
    if (segments[0] === 'bot') {
      return `/tools/bot/${segments[segments.length - 1].replace('.md', '')}`
    }
    
    return `/${segments.join('/')}`
  }

  const getStaticPages = (): SearchResult[] => {
    const { t } = useI18n()
    
    return [
      {
        title: t('nav.home'),
        description: t('home.hero.subtitle'),
        url: '/',
        type: 'page',
        language: locale.value
      },
      {
        title: t('nav.tools'),
        description: 'Herramientas disponibles para optimizar tu gestión hotelera',
        url: '/tools',
        type: 'page',
        language: locale.value
      },
      {
        title: t('nav.documentation'),
        description: 'Documentación completa sobre todas las herramientas',
        url: '/documentation',
        type: 'page',
        language: locale.value
      },
      {
        title: t('nav.contact'),
        description: 'Ponte en contacto con nuestro equipo de soporte',
        url: '/contact',
        type: 'page',
        language: locale.value
      }
    ]
  }

  // Control functions
  const openSearch = () => {
    isSearchOpen.value = true
    preloadContent()
  }

  const closeSearch = () => {
    isSearchOpen.value = false
    searchQuery.value = ''
    searchResults.value = []
  }

  const navigateToResult = (result: SearchResult) => {
    const localePath = useLocalePath()
    navigateTo(localePath(result.url))
    closeSearch()
  }

  return {
    // State
    isSearchOpen: readonly(isSearchOpen),
    searchQuery,
    searchResults: readonly(searchResults),
    isLoading: readonly(isLoading),
    
    // Actions
    openSearch,
    closeSearch,
    navigateToResult,
    preloadContent
  }
}