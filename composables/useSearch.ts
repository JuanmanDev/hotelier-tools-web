export interface SearchResult {
  title: string
  description?: string
  url: string
  type: 'page' | 'bot' | 'tool'
  language: string
  excerpt?: string
  content?: string
}

export const useSearch = () => {
  // Use Nuxt's state management for singleton behavior
  const isSearchOpen = useState('search.isOpen', () => false)
  const searchQuery = useState('search.query', () => '')
  const searchResults = useState<SearchResult[]>('search.results', () => [])
  const isLoading = useState('search.loading', () => false)
  const allContent = useState<Record<string, Record<string, SearchResult>>>('search.content', () => ({}))

  const { locale } = useI18n()

  // Preload all content on first use
  const preloadContent = async () => {
    const currentLocale = locale.value
    
    // Check if we already have content for this specific locale
    if (allContent.value[currentLocale] && Object.keys(allContent.value[currentLocale]).length > 0) {
      console.log(`Search: Content already preloaded for locale: ${currentLocale}`)
      return
    }
    
    try {
      isLoading.value = true
      
      // Get current locale and log for debugging
      console.log('Search: Using locale:', currentLocale)
      
      // Get search data from our API endpoint
      const searchData = await $fetch('/api/generate-search-data', {
        query: { locale: currentLocale }
      })

      // Store content for this specific locale
      if (!allContent.value[currentLocale]) {
        allContent.value[currentLocale] = {}
      }
      allContent.value[currentLocale] = searchData
      
      // If there's already a search query, perform search with the loaded data
      if (searchQuery.value.trim()) {
        performSearch(searchQuery.value)
      }
      
    } catch (error) {
      console.error('Error preloading content:', error)
      // If content fails to load, just use static pages for this locale
      if (!allContent.value[currentLocale]) {
        allContent.value[currentLocale] = {}
      }
      allContent.value[currentLocale] = getStaticPagesAsRecord(currentLocale)
      
      // If there's already a search query, perform search with fallback data
      if (searchQuery.value.trim()) {
        performSearch(searchQuery.value)
      }
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

    const currentLocale = locale.value
    
    // If content is not loaded yet for this locale, trigger loading
    if (!allContent.value[currentLocale] || Object.keys(allContent.value[currentLocale]).length === 0) {
      preloadContent()
      return
    }

    const lowercaseQuery = query.toLowerCase()
    const contentArray = Object.values(allContent.value[currentLocale]) as SearchResult[]
    
    searchResults.value = contentArray.filter((item: SearchResult) => {
      // First filter by locale to ensure we only show content for current language
      const matchesLocale = item.language === currentLocale
      
      // Then filter by search query
      const matchesQuery = (
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.description?.toLowerCase().includes(lowercaseQuery) ||
        item.excerpt?.toLowerCase().includes(lowercaseQuery) ||
        item.content?.toLowerCase().includes(lowercaseQuery)
      )
      
      return matchesLocale && matchesQuery
    }).slice(0, 10) // Limit to 10 results
    
    console.log('Search: Filtered results count:', searchResults.value.length)
  }

  // Watch for search query changes
  watch(() => searchQuery.value, (newQuery) => {
    performSearch(newQuery)
  })

  // Watch for locale changes and clear current results to force reload
  watch(locale, (newLocale) => {
    console.log('Search: Locale changed to:', newLocale)
    // Clear search results when locale changes
    searchResults.value = []
    // If there's a current search query, re-perform search with new locale
    if (searchQuery.value.trim()) {
      performSearch(searchQuery.value)
    }
  })

  // Utility functions for fallback static pages
  const getStaticPagesAsRecord = (locale: string = 'en'): Record<string, SearchResult> => {
    const pages = [
      {
        title: 'Home',
        description: 'Join the hotels that are already improving their management with our tools',
        url: '/',
        type: 'page' as const,
        language: locale
      },
      {
        title: 'Tools',
        description: 'Available tools to optimize your hotel management',
        url: '/tools',
        type: 'page' as const,
        language: locale
      },
      {
        title: 'Documentation',
        description: 'Complete documentation about all tools',
        url: '/documentation',
        type: 'page' as const,
        language: locale
      },
      {
        title: 'Contact',
        description: 'Get in touch with our support team',
        url: '/contact',
        type: 'page' as const,
        language: locale
      }
    ]
    
    const record: Record<string, SearchResult> = {}
    pages.forEach(page => {
      record[page.url] = page
    })
    return record
  }

  // Control functions
  const openSearch = () => {
    console.log('Search: Opening search modal')
    isSearchOpen.value = true
    console.log('Search: Preloading content', isSearchOpen.value)
    preloadContent()
  }

  const closeSearch = () => {
    isSearchOpen.value = false
    searchQuery.value = ''
    searchResults.value = []
  }

  const navigateToResult = (result: SearchResult) => {
    navigateTo(result.url)
    closeSearch()
  }

  return {
    // State
    isSearchOpen,
    searchQuery,
    searchResults,
    isLoading,
    
    // Actions
    openSearch,
    closeSearch,
    navigateToResult,
    preloadContent
  }
}