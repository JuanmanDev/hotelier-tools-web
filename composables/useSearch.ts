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
  const { locale } = useI18n()
  const { t } = useI18n()
  
  // Reactive state
  const isSearchOpen = ref(false)
  const searchQuery = ref('')
  const searchResults = ref<SearchResult[]>([])
  const isLoading = ref(false)
  const allContent = ref<Record<string, SearchResult>>({})

  // Preload all content on first use
  const preloadContent = async () => {
    if (Object.keys(allContent.value).length > 0) return
    
    try {
      isLoading.value = true
      
      // Get search data from our API endpoint
      const searchData = await $fetch('/api/generate-search-data', {
        query: { locale: locale.value }
      })

      allContent.value = searchData
      
      // If there's already a search query, perform search with the loaded data
      if (searchQuery.value.trim()) {
        performSearch(searchQuery.value)
      }
      
    } catch (error) {
      console.error('Error preloading content:', error)
      // If content fails to load, just use static pages
      allContent.value = getStaticPagesAsRecord(t)
      
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

    // If content is not loaded yet, trigger loading
    if (Object.keys(allContent.value).length === 0) {
      preloadContent()
      return
    }

    const lowercaseQuery = query.toLowerCase()
    const contentArray = Object.values(allContent.value)
    
    searchResults.value = contentArray.filter(item => {
      return (
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.description?.toLowerCase().includes(lowercaseQuery) ||
        item.excerpt?.toLowerCase().includes(lowercaseQuery) ||
        item.content?.toLowerCase().includes(lowercaseQuery)
      )
    }).slice(0, 10) // Limit to 10 results
  }

  // Watch for search query changes
  watch(searchQuery, (newQuery) => {
    performSearch(newQuery)
  })

  // Watch for locale changes to reload content
  watch(locale, () => {
    allContent.value = {}
    preloadContent()
  })

  // Utility functions for fallback static pages
  const getStaticPagesAsRecord = (tFunction: any): Record<string, SearchResult> => {
    const pages = [
      {
        title: tFunction('nav.home'),
        description: tFunction('home.hero.subtitle'),
        url: '/',
        type: 'page' as const,
        language: locale.value
      },
      {
        title: tFunction('nav.tools'),
        description: 'Available tools to optimize your hotel management',
        url: '/tools',
        type: 'page' as const,
        language: locale.value
      },
      {
        title: tFunction('nav.documentation'),
        description: 'Complete documentation about all tools',
        url: '/documentation',
        type: 'page' as const,
        language: locale.value
      },
      {
        title: tFunction('nav.contact'),
        description: 'Get in touch with our support team',
        url: '/contact',
        type: 'page' as const,
        language: locale.value
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