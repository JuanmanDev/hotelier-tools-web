<template>
  <div v-if="doc" data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;about&quot;,&quot;path&quot;:&quot;pages/about.vue&quot;}">
    <HeroSection>
      <header class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <nav :aria-label="t('features.breadcrumb')" class="mb-6 text-sm">
          <ol class="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300">
            <li><NuxtLink :to="localePath('/')" class="hover:underline underline-offset-4">{{ t('nav.home') }}</NuxtLink></li>
            <li aria-hidden="true"><UIcon name="i-heroicons-chevron-right" class="w-4 h-4 align-middle" /></li>
            <li class="font-medium text-gray-900 dark:text-white">{{ doc.title }}</li>
          </ol>
        </nav>
        <div class="max-w-4xl ht-glass rounded-3xl p-6 sm:p-8">
          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 text-balance">
            {{ doc.title }}
          </h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">{{ doc.description }}</p>
          <p v-if="updated" class="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300">
            <UIcon name="i-heroicons-calendar" class="w-4 h-4" />
            <time :datetime="updated">{{ t('legal.updated', { date: formatDate(updated) }) }}</time>
          </p>
        </div>
      </header>
    </HeroSection>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <article class="ht-article max-w-3xl">
        <ContentRenderer :value="doc" />
      </article>
      <nav :aria-label="t('legal.related')" class="max-w-3xl mt-12 flex flex-wrap gap-3 border-t border-gray-200 dark:border-gray-800 pt-6">
        <UButton v-for="p in otherPages" :key="p" :to="localePath(`/${p}`)" color="neutral" variant="outline">{{ t(`legal.nav.${p}`) }}</UButton>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const PAGE = 'about'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const { setSEO } = useSEO()

// content/legal/<locale>/about.md, falling back to English until a translation exists
const { data: doc } = await useAsyncData(
  () => `legal-${PAGE}-${locale.value}`,
  async () => await queryCollection('content').path(`/legal/${locale.value}/${PAGE}`).first()
    ?? await queryCollection('content').path(`/legal/en/${PAGE}`).first(),
  { watch: [locale] }
)
if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const updated = computed(() => {
  const d = (doc.value?.meta as { updated?: string } | undefined)?.updated
  return d ? String(d).slice(0, 10) : ''
})
const formatDate = (d: string) => new Intl.DateTimeFormat(locale.value, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC', calendar: 'gregory' })
  .format(new Date(`${d}T00:00:00Z`))

const otherPages = ['about', 'privacy', 'terms'].filter(p => p !== PAGE)

setSEO(PAGE, {
  title: doc.value.title,
  description: doc.value.description,
  ogTitle: doc.value.title,
  ogDescription: doc.value.description
})

// The person behind the site, on a page typed as AboutPage
const baseUrl = useRuntimeConfig().public.baseUrl || 'https://hotelier.tools'
useSchemaOrg([
  defineWebPage({ '@type': 'AboutPage' }),
  definePerson({
    name: 'Juan Manuel Béc.',
    url: `${baseUrl}/about`,
    sameAs: ['https://github.com/JuanmanDev']
  })
])
</script>
