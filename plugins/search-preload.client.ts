// plugins/search-preload.client.ts
export default defineNuxtPlugin(async () => {
  // This plugin runs on the client side to preload search data
  // It works with the static JSON files generated at build time
  
  const { $i18n } = useNuxtApp()
  
  // Preload search data for current locale
  if (process.client) {
    const currentLocale = $i18n.locale.value || 'en'
    
    try {
      console.log(`🔍 Preloading search data for locale: ${currentLocale}`)
      
      // Fetch the static JSON file
      const response = await fetch(`/data/search/${currentLocale}.json`)
      if (response.ok) {
        const searchData = await response.json()
        
        // Store in global state for the search composable to use
        const allContent = useState<Record<string, Record<string, any>>>('search.content', () => ({}))
        if (!allContent.value[currentLocale]) {
          allContent.value[currentLocale] = {}
        }
        allContent.value[currentLocale] = searchData
        
        console.log(`✅ Search data preloaded for ${currentLocale}: ${Object.keys(searchData).length} items`)
      } else {
        console.warn(`❌ Failed to load search data for ${currentLocale}`)
      }
    } catch (error) {
      console.error('Error preloading search data:', error)
    }
  }
})
