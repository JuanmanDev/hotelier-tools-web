// Any text not yet translated in a language shows the English version instead of its raw key
// (e.g. "marketing.features.direct_bookings.title"), for visitors and search engines alike
export default defineI18nConfig(() => ({
  fallbackLocale: 'en'
}))
