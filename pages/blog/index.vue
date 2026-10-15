<template>
  <div data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;blog-index&quot;,&quot;path&quot;:&quot;pages/blog/index.vue&quot;}">
    <HeroSection>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div class="max-w-3xl ht-glass rounded-3xl p-6 sm:p-8">
          <p class="text-sm font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300 mb-3">{{ t('blog.eyebrow') }}</p>
          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            {{ t('blog.title') }}
          </h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {{ t('blog.subtitle') }}
          </p>
          <UInput
            v-model="query"
            icon="i-heroicons-magnifying-glass"
            size="xl"
            class="w-full"
            :placeholder="t('blog.search_placeholder')"
            :aria-label="t('blog.search_placeholder')"
          />
        </div>
      </section>
    </HeroSection>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <!-- Categories -->
      <div class="flex flex-wrap gap-2 mb-10" role="group" :aria-label="t('blog.categories_label')">
        <UButton
          :color="!active ? 'primary' : 'neutral'"
          :variant="!active ? 'solid' : 'soft'"
          size="sm"
          @click="active = ''"
        >
          {{ t('blog.all') }} <span class="opacity-70">({{ posts.length }})</span>
        </UButton>
        <UButton
          v-for="c in usedCategories"
          :key="c.id"
          :color="active === c.id ? 'primary' : 'neutral'"
          :variant="active === c.id ? 'solid' : 'soft'"
          size="sm"
          :icon="c.icon"
          :aria-pressed="active === c.id"
          @click="active = active === c.id ? '' : c.id"
        >
          {{ t(`blog.categories.${c.id}.name`) }} <span class="opacity-70">({{ countBy[c.id] }})</span>
        </UButton>
      </div>

      <!-- Featured guides -->
      <div v-if="!filtering && featured.length" class="mb-14">
        <h2 class="font-display text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">{{ t('blog.featured') }}</h2>
        <ul class="grid md:grid-cols-2 gap-6">
          <li v-for="(p, i) in featured" :key="p.path">
            <BlogCard :post="p" :eager="i < 2" />
          </li>
        </ul>
      </div>

      <h2 class="font-display text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
        {{ active ? t(`blog.categories.${active}.name`) : t('blog.latest') }}
      </h2>
      <p v-if="active" class="text-gray-600 dark:text-gray-300 -mt-3 mb-6 max-w-3xl">{{ t(`blog.categories.${active}.description`) }}</p>

      <ul v-if="visible.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li v-for="p in visible" :key="p.path">
          <BlogCard :post="p" />
        </li>
      </ul>
      <p v-else class="text-gray-600 dark:text-gray-300">{{ t('blog.no_results') }}</p>
    </section>

    <DashboardBanner />
    <FeatureRequest />
  </div>
</template>

<script setup lang="ts">
import { blogCategories, blogSlug } from '~/data/blog'
import HeroSection from '~/components/HeroSection.vue'
import BlogCard from '~/components/blog/BlogCard.vue'
import DashboardBanner from '~/components/DashboardBanner.vue'
import FeatureRequest from '~/components/FeatureRequest.vue'

const { t, locale } = useI18n()
const { setSEO, languageOf } = useSEO()
const runtimeConfig = useRuntimeConfig()
const localePath = useLocalePath()

const { data } = await useBlogPosts()
const posts = computed(() => data.value ?? [])

const query = ref('')
const active = ref('')
const filtering = computed(() => !!query.value.trim() || !!active.value)

const countBy = computed(() => posts.value.reduce<Record<string, number>>((acc, p) => {
  acc[p.meta.category] = (acc[p.meta.category] ?? 0) + 1
  return acc
}, {}))
const usedCategories = computed(() => blogCategories.filter(c => countBy.value[c.id]))

const featured = computed(() => posts.value.filter(p => p.meta.featured).slice(0, 4))

const normalize = (s: string) => s.toLocaleLowerCase(locale.value).normalize('NFD').replace(/\p{Diacritic}/gu, '')
const visible = computed(() => {
  const words = normalize(query.value).split(/\s+/).filter(Boolean)
  return posts.value.filter((p) => {
    if (active.value && p.meta.category !== active.value) return false
    if (!words.length) return true
    const haystack = normalize([p.title, p.description, ...(p.meta.tags ?? []), ...(p.meta.keywords ?? [])].join(' '))
    return words.every(w => haystack.includes(w))
  })
})

setSEO('blog', { og: { eyebrow: t('nav.blog') } })

// The list of guides, so search engines see every article from the index
const baseUrl = runtimeConfig.public.baseUrl || 'https://hotelier.tools'
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: t('blog.title'),
      description: t('blog.subtitle'),
      url: `${baseUrl}${localePath('/blog')}`,
      inLanguage: languageOf(),
      publisher: { '@type': 'Organization', name: 'Hotelier Tools', url: baseUrl },
      blogPost: posts.value.map(p => ({
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.description,
        url: `${baseUrl}${localePath(`/blog/${blogSlug(p.path)}`)}`,
        datePublished: p.meta.date,
        dateModified: p.meta.updated ?? p.meta.date,
        ...(p.meta.cover ? { image: `${baseUrl}${p.meta.cover}` } : {})
      }))
    })
  }]
})
</script>
