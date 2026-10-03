import type { BlogListItem } from '~/data/blog'

/** Every article in the reader's language, newest first */
export const useBlogPosts = () => {
  const { locale } = useI18n()

  return useAsyncData(
    () => `blog-list-${locale.value}`,
    async () => {
      const rows = await queryCollection('content')
        .where('path', 'LIKE', `/blog/${locale.value}/%`)
        .select('path', 'title', 'description', 'meta')
        .all()
      // Only what cards, filters and related links need: this list is embedded in every guide page
      return (rows as unknown as BlogListItem[])
        .filter(r => r.meta?.date)
        .map(({ path, title, description, meta: m }) => ({
          path,
          title,
          description,
          meta: { date: m.date, updated: m.updated, category: m.category, tags: m.tags, keywords: m.keywords, feature: m.feature, cover: m.cover, coverAlt: m.coverAlt, featured: m.featured }
        }))
        .sort((a, b) => String(b.meta.date).localeCompare(String(a.meta.date)) || a.title.localeCompare(b.title))
    },
    { watch: [locale] }
  )
}
