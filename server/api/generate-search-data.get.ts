import { SUPPORTED_LOCALES, generateSearchDataForLocale } from '../../utils/search-data-generator.js'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const locale = query.locale as string || 'en'
  
  console.log(`🔍 Generating search data for locale: ${locale}`)
  
  if (!SUPPORTED_LOCALES.includes(locale)) {
    throw createError({
      statusCode: 400,
      statusMessage: `Unsupported locale: ${locale}. Supported locales: ${SUPPORTED_LOCALES.join(', ')}`
    })
  }
  
  try {
    const searchData = await generateSearchDataForLocale(locale)
    console.log(`✅ Generated ${Object.keys(searchData).length} search items for ${locale}`)
    return searchData
  } catch (error) {
    console.error(`Error generating search data for ${locale}:`, error)
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to generate search data for locale: ${locale}`
    })
  }
})