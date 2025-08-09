// Simple search composable that works with Nuxt auto-imports
export interface SearchResult {
  title: string
  description?: string
  url: string
  type: 'page' | 'bot' | 'tool'
  language: string
  excerpt?: string
  content?: string
}

const searchState = reactive({
  isOpen: false,
  query: '',
  results: [] as SearchResult[],
  loading: false,
  content: {} as Record<string, Record<string, SearchResult>> // Cache by locale
})

export const useSearch = () => {
  const { locale } = useI18n()
  
  // Load content from API
  const loadContent = async () => {
    const currentLocale = locale.value
    
    // Check if we already have content for this specific locale
    if (searchState.content[currentLocale] && Object.keys(searchState.content[currentLocale]).length > 0) {
      console.log(`Search: Content already loaded for locale: ${currentLocale}`)
      return
    }
    
    try {
      searchState.loading = true
      console.log('Search: Loading content for locale:', currentLocale)
      
      const data = await $fetch('/api/generate-search-data', {
        query: { locale: currentLocale }
      })
      
      // Store content for this specific locale
      if (!searchState.content[currentLocale]) {
        searchState.content[currentLocale] = {}
      }
      searchState.content[currentLocale] = data || {}
      
    } catch (error) {
      console.error('Failed to load search content:', error)
      // Fallback to static pages for this locale
      if (!searchState.content[currentLocale]) {
        searchState.content[currentLocale] = {}
      }
      searchState.content[currentLocale] = {
        '/': {
          title: 'Home',
          description: 'Hotel management tools and automation',
          url: '/',
          type: 'page',
          language: currentLocale
        },
        '/tools': {
          title: 'Tools',
          description: 'Available tools to optimize your hotel management',
          url: '/tools',
          type: 'page',
          language: currentLocale
        },
        '/documentation': {
          title: 'Documentation',
          description: 'Complete documentation about all tools',
          url: '/documentation',
          type: 'page', 
          language: currentLocale
        },
        '/contact': {
          title: 'Contact',
          description: 'Get in touch with our support team',
          url: '/contact',
          type: 'page',
          language: currentLocale
        }
      }
    } finally {
      searchState.loading = false
    }
  }

  // Search function
  const search = (query: string) => {
    if (!query.trim()) {
      searchState.results = []
      return
    }

    const currentLocale = locale.value
    
    // Check if content is loaded for current locale
    if (!searchState.content[currentLocale] || Object.keys(searchState.content[currentLocale]).length === 0) {
      loadContent()
      return
    }

    const lowercaseQuery = query.toLowerCase()
    const contentArray = Object.values(searchState.content[currentLocale]) as SearchResult[]
    
    console.log('Search: Filtering results for locale:', currentLocale)
    console.log('Search: Total content items:', contentArray.length)
    
    searchState.results = contentArray.filter((item: SearchResult) => {
      // Filter by locale and search query
      const matchesLocale = item.language === currentLocale
      const matchesQuery = (
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.description?.toLowerCase().includes(lowercaseQuery) ||
        item.excerpt?.toLowerCase().includes(lowercaseQuery) ||
        item.content?.toLowerCase().includes(lowercaseQuery)
      )
      
      return matchesLocale && matchesQuery
    }).slice(0, 10)
    
    console.log('Search: Filtered results count:', searchState.results.length)
  }

  // Watch query changes
  watch(() => searchState.query, search)
  
  // Watch for locale changes and clear current results to force reload
  watch(locale, (newLocale) => {
    console.log('Search: Locale changed to:', newLocale)
    // Clear search results when locale changes
    searchState.results = []
    // If there's a current search query, re-perform search with new locale
    if (searchState.query.trim()) {
      search(searchState.query)
    }
  })

  // Open search
  const openSearch = () => {
    searchState.isOpen = true
    loadContent()
  }

  // Close search
  const closeSearch = () => {
    searchState.isOpen = false
    searchState.query = ''
    searchState.results = []
  }

  // Navigate to result
  const navigateToResult = (result: SearchResult) => {
    navigateTo(result.url)
    closeSearch()
  }

  return {
    // Reactive state
    isSearchOpen: toRef(searchState, 'isOpen'),
    searchQuery: toRef(searchState, 'query'),
    searchResults: toRef(searchState, 'results'),
    isLoading: toRef(searchState, 'loading'),
    
    // Actions
    openSearch,
    closeSearch,
    navigateToResult,
    preloadContent: loadContent
  }
}
