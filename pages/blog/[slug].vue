<template>
  <div
    v-if="doc"
    class="ht-accent ht-blog-page"
    :style="accentVars(category.accent)"
    data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;blog-slug&quot;,&quot;path&quot;:&quot;pages/blog/[slug].vue&quot;}"
  >
    <HeroSection>
      <header class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <nav :aria-label="t('features.breadcrumb')" class="mb-6 text-sm">
          <ol class="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300">
            <li><NuxtLink :to="localePath('/')" class="hover:underline underline-offset-4">{{ t('nav.home') }}</NuxtLink></li>
            <li aria-hidden="true"><UIcon name="i-heroicons-chevron-right" class="w-4 h-4 align-middle" /></li>
            <li><NuxtLink :to="localePath('/blog')" class="hover:underline underline-offset-4">{{ t('nav.blog') }}</NuxtLink></li>
            <li aria-hidden="true"><UIcon name="i-heroicons-chevron-right" class="w-4 h-4 align-middle" /></li>
            <li class="font-medium text-gray-900 dark:text-white">{{ t(`blog.categories.${category.id}.name`) }}</li>
          </ol>
        </nav>

        <div class="max-w-4xl ht-glass rounded-3xl p-6 sm:p-8">
          <span class="inline-flex items-center gap-2 text-sm font-semibold mb-4" :style="{ color: 'var(--accent)' }">
            <span class="w-8 h-8 rounded-lg grid place-items-center text-white" :style="{ background: 'var(--accent)' }">
              <UIcon :name="category.icon" class="w-5 h-5" />
            </span>
            {{ t(`blog.categories.${category.id}.name`) }}
          </span>
          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 text-balance">
            {{ doc.title }}
          </h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">{{ doc.description }}</p>
          <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
            <span class="inline-flex items-center gap-1.5">
              <UIcon name="i-heroicons-calendar" class="w-4 h-4" />
              <time :datetime="meta.updated ?? meta.date">{{ meta.updated && meta.updated !== meta.date ? t('blog.updated', { date: formatDate(meta.updated) }) : formatDate(meta.date) }}</time>
            </span>
            <span class="inline-flex items-center gap-1.5">
              <UIcon name="i-heroicons-clock" class="w-4 h-4" />
              {{ t('blog.reading_time', { n: minutes }) }}
            </span>
            <span class="inline-flex items-center gap-1.5">
              <UIcon name="i-heroicons-user-circle" class="w-4 h-4" />
              <NuxtLink :to="localePath('/about')" rel="author" class="hover:underline">{{ AUTHOR_NAME }}</NuxtLink>
            </span>
          </div>
        </div>
      </header>
    </HeroSection>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div class="grid lg:grid-cols-[minmax(0,1fr)_17rem] gap-10 xl:gap-16">
        <article class="min-w-0">
          <figure v-if="meta.cover" class="mb-10 overflow-hidden rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl bg-white dark:bg-gray-900">
            <img
              :src="meta.cover"
              :alt="meta.coverAlt || doc.title"
              width="1440"
              height="900"
              fetchpriority="high"
              class="block w-full h-auto"
            >
          </figure>

          <!-- Table of contents for small screens -->
          <details v-if="toc.length" class="lg:hidden mb-8 rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 p-4">
            <summary class="cursor-pointer font-semibold text-gray-900 dark:text-white">{{ t('blog.toc') }}</summary>
            <ol class="mt-3 space-y-2 text-sm">
              <li v-for="l in toc" :key="l.id">
                <a :href="`#${l.id}`" class="text-gray-700 dark:text-gray-300 hover:underline underline-offset-4">{{ l.text }}</a>
              </li>
            </ol>
          </details>

          <div class="ht-article max-w-3xl">
            <ContentRenderer :value="doc" />
          </div>

          <!-- Questions answered in the article -->
          <section v-if="meta.faq?.length" class="max-w-3xl mt-14" aria-labelledby="faq-title">
            <h2 id="faq-title" class="font-display text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">{{ t('blog.faq_title') }}</h2>
            <div class="divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900">
              <details v-for="(f, i) in meta.faq" :key="i" class="group p-5" :open="i === 0">
                <summary class="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-gray-900 dark:text-white">
                  <h3 class="text-base sm:text-lg">{{ f.q }}</h3>
                  <UIcon name="i-heroicons-chevron-down" class="w-5 h-5 shrink-0 mt-1 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">{{ f.a }}</p>
              </details>
            </div>
          </section>

          <!-- Share -->
          <div class="max-w-3xl mt-12 flex flex-wrap items-center gap-3 border-t border-gray-200 dark:border-gray-800 pt-6">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 mr-1">{{ t('blog.share') }}</span>
            <UButton :to="`https://wa.me/?text=${encodeURIComponent(doc.title + ' ' + pageUrl)}`" target="_blank" size="sm" color="neutral" variant="soft" icon="i-simple-icons-whatsapp" aria-label="WhatsApp" />
            <UButton :to="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`" target="_blank" size="sm" color="neutral" variant="soft" icon="i-simple-icons-linkedin" aria-label="LinkedIn" />
            <UButton :to="`https://x.com/intent/post?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(doc.title)}`" target="_blank" size="sm" color="neutral" variant="soft" icon="i-simple-icons-x" aria-label="X" />
            <UButton size="sm" color="neutral" variant="soft" :icon="linkCopied ? 'i-heroicons-check' : 'i-heroicons-link'" @click="copyLink">
              {{ linkCopied ? t('blog.copied') : t('blog.copy_link') }}
            </UButton>
          </div>

          <!-- Other languages -->
          <div v-if="otherLocales.length" class="max-w-3xl mt-6 text-sm text-gray-600 dark:text-gray-400">
            <span class="mr-2">{{ t('blog.other_languages') }}</span>
            <template v-for="(l, i) in otherLocales" :key="l.code">
              <NuxtLink :to="switchLocalePath(l.code)" :hreflang="languageOf(l.code)" class="underline underline-offset-4 hover:text-gray-900 dark:hover:text-white">{{ l.name }}</NuxtLink><span v-if="i < otherLocales.length - 1">, </span>
            </template>
          </div>
        </article>

        <!-- Sidebar -->
        <aside class="hidden lg:block">
          <div class="sticky top-24 space-y-6">
            <nav v-if="toc.length" :aria-label="t('blog.toc')" class="rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 p-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">{{ t('blog.toc') }}</p>
              <ol class="space-y-2 text-sm">
                <li v-for="l in toc" :key="l.id">
                  <a
                    :href="`#${l.id}`"
                    class="block leading-snug hover:text-gray-900 dark:hover:text-white"
                    :class="activeId === l.id ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'"
                  >{{ l.text }}</a>
                </li>
              </ol>
            </nav>

            <div v-if="feature" class="rounded-2xl p-5 text-white shadow-lg" :style="{ background: 'linear-gradient(135deg, var(--accent), #1e3a8a)' }">
              <UIcon :name="feature.icon" class="w-7 h-7 mb-3" />
              <p class="font-display text-lg font-semibold leading-snug mb-2">{{ t(`platform.slides.${feature.id}.title`) }}</p>
              <p class="text-sm text-white/85 mb-4">{{ t('blog.sidebar_text') }}</p>
              <div class="flex flex-col gap-2">
                <UButton :to="demoHref" target="_blank" color="neutral" variant="solid" class="justify-center bg-white text-gray-900 hover:bg-gray-100" icon="i-heroicons-play-circle"
                  :data-umami-click="`{&quot;name&quot;:&quot;click_blog_demo&quot;,&quot;file&quot;:&quot;blog-slug-sidebar&quot;,&quot;target&quot;:&quot;${slug}&quot;}`"
                >
                  {{ t('blog.cta.demo') }}
                </UButton>
                <UButton :to="localePath(`/tools/bot/${feature.slug}`)" color="neutral" variant="outline" class="justify-center bg-transparent text-white ring-white/60 hover:bg-white/10">
                  {{ t('platform.learn_more') }}
                </UButton>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Keep reading -->
    <section v-if="related.length" class="bg-gray-50 dark:bg-gray-950 py-14 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-display text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-8">{{ t('blog.related') }}</h2>
        <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <li v-for="p in related" :key="p.path"><BlogCard :post="p" /></li>
        </ul>
        <div class="mt-10">
          <UButton :to="localePath('/blog')" color="neutral" variant="outline" icon="i-heroicons-arrow-left">{{ t('blog.back') }}</UButton>
        </div>
      </div>
    </section>

    <DashboardBanner />
  </div>
</template>

<script setup lang="ts">
import { categoryById, readingMinutes, blogSlug, BLOG_MISSING_LOCALES, AUTHOR_NAME, type BlogMeta } from '~/data/blog'
import { featureBySlug, accentVars, ACCENTS, DEMO_URL } from '~/data/platform'
import HeroSection from '~/components/HeroSection.vue'
import BlogCard from '~/components/blog/BlogCard.vue'
import DashboardBanner from '~/components/DashboardBanner.vue'

const route = useRoute()
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { setSEO, setBreadcrumbs, setFAQStructuredData, languageOf } = useSEO()
const runtimeConfig = useRuntimeConfig()

const slug = String(route.params.slug)

const { data: doc } = await useAsyncData(
  () => `blog-${slug}-${locale.value}`,
  () => queryCollection('content').path(`/blog/${locale.value}/${slug}`).first(),
  { watch: [locale] }
)

// A guide not written in this language (Spain-only topics) opens in English
if (!doc.value && locale.value !== 'en' && BLOG_MISSING_LOCALES[slug]?.includes(locale.value)) {
  await navigateTo(localePath(`/blog/${slug}`, 'en'), { redirectCode: 302, replace: true })
}
if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

// Languages this article is written in
const { data: translations } = await useAsyncData(
  `blog-langs-${slug}`,
  async () => {
    const rows = await queryCollection('content').where('path', 'LIKE', `/blog/%/${slug}`).select('path').all()
    return rows.map(r => r.path.split('/')).filter(p => p.length === 4 && p[3] === slug).map(p => p[2]!)
  }
)

const { data: allPosts } = await useBlogPosts()

const meta = computed(() => (doc.value?.meta ?? {}) as unknown as BlogMeta)
const category = computed(() => categoryById(meta.value.category))
const feature = computed(() => meta.value.feature ? featureBySlug(meta.value.feature) : undefined)
const minutes = computed(() => readingMinutes(doc.value?.body, locale.value))
const demoHref = computed(() => new URL(meta.value.demoPath ?? feature.value?.appPath ?? '/', DEMO_URL).href)

const toc = computed(() => ((doc.value?.body as any)?.toc?.links ?? []) as { id: string, text: string }[])

const related = computed(() => {
  const others = (allPosts.value ?? []).filter(p => blogSlug(p.path) !== slug)
  const score = (p: typeof others[number]) =>
    (p.meta.category === meta.value.category ? 2 : 0)
    + (meta.value.feature && p.meta.feature === meta.value.feature ? 3 : 0)
    + (p.meta.tags ?? []).filter(tag => meta.value.tags?.includes(tag)).length
  return others
    .map(p => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)
    .map(x => x.p)
})

const localeList = computed(() => (locales.value as Array<{ code: string, name?: string }>))
const otherLocales = computed(() => localeList.value.filter(l => l.code !== locale.value && translations.value?.includes(l.code)))

const dateFormatter = computed(() => new Intl.DateTimeFormat(locale.value, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC', calendar: 'gregory' }))
const formatDate = (d?: string) => d ? dateFormatter.value.format(new Date(`${String(d).slice(0, 10)}T00:00:00Z`)) : ''

const baseUrl = runtimeConfig.public.baseUrl || 'https://hotelier.tools'
const pageUrl = computed(() => `${baseUrl}${localePath(`/blog/${slug}`)}`)

setSEO('blog', {
  title: meta.value.seoTitle ?? doc.value.title,
  description: doc.value.description,
  ogTitle: doc.value.title,
  ogDescription: doc.value.description,
  keywords: meta.value.keywords?.join(', '),
  alternates: translations.value ?? [locale.value],
  ogType: 'article',
  og: {
    eyebrow: t(`blog.categories.${category.value.id}.name`),
    accent: ACCENTS[category.value.accent]?.[1]
  }
})

useSeoMeta({
  articlePublishedTime: meta.value.date,
  articleModifiedTime: meta.value.updated ?? meta.value.date,
  articleSection: t(`blog.categories.${category.value.id}.name`),
  articleTag: meta.value.tags
})

const isoDate = (d?: string) => d ? String(d).slice(0, 10) : undefined
useSchemaOrg([defineArticle({
  '@type': 'BlogPosting',
  headline: doc.value.title,
  description: doc.value.description,
  inLanguage: languageOf(),
  datePublished: isoDate(meta.value.date),
  dateModified: isoDate(meta.value.updated ?? meta.value.date),
  ...(meta.value.cover ? { image: `${baseUrl}${meta.value.cover}` } : {}),
  keywords: meta.value.keywords,
  articleSection: t(`blog.categories.${category.value.id}.name`),
  author: { '@type': 'Person', name: AUTHOR_NAME, url: `${baseUrl}${localePath('/about')}` }
})])
setBreadcrumbs([
  { name: t('nav.home'), url: '/' },
  { name: t('nav.blog'), url: '/blog' },
  { name: doc.value.title, url: `/blog/${slug}` }
])
if (meta.value.faq?.length) {
  setFAQStructuredData(meta.value.faq.map(f => ({ question: f.q, answer: f.a })))
}

// Highlight the section being read in the table of contents
const activeId = ref('')
let observer: IntersectionObserver | undefined
onMounted(() => {
  const headings = toc.value.map(l => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
  if (!headings.length) return
  observer = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
    if (visible[0]) activeId.value = visible[0].target.id
  }, { rootMargin: '-80px 0px -65% 0px' })
  headings.forEach(h => observer!.observe(h))
})
onBeforeUnmount(() => observer?.disconnect())

const linkCopied = ref(false)
async function copyLink() {
  try {
    await navigator.clipboard.writeText(pageUrl.value)
    linkCopied.value = true
    setTimeout(() => { linkCopied.value = false }, 1600)
  } catch {
    // Clipboard blocked by the browser
  }
}
</script>
