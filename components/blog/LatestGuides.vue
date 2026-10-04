<template>
  <section v-if="guides.length" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
    <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300 mb-2">{{ t('blog.eyebrow') }}</p>
        <h2 class="font-display text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ t('blog.title') }}</h2>
      </div>
      <UButton :to="localePath('/blog')" color="neutral" variant="outline" trailing-icon="i-heroicons-arrow-right">{{ t('blog.all') }}</UButton>
    </div>
    <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <li v-for="p in guides" :key="p.path"><BlogCard :post="p" /></li>
    </ul>
  </section>
</template>

<script setup lang="ts">
// The guides marked as featured, so the home page links straight into the blog
import BlogCard from '~/components/blog/BlogCard.vue'

const { t } = useI18n()
const localePath = useLocalePath()
const { data } = await useBlogPosts()

const guides = computed(() => {
  const all = data.value ?? []
  const featured = all.filter(p => p.meta.featured)
  return [...featured, ...all.filter(p => !p.meta.featured)].slice(0, 4)
})
</script>
