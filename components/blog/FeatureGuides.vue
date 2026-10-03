<template>
  <section v-if="guides.length" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
    <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
      <h2 class="font-display text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {{ t('blog.guides_for', { name }) }}
      </h2>
      <UButton :to="localePath('/blog')" color="neutral" variant="ghost" trailing-icon="i-heroicons-arrow-right">{{ t('blog.all') }}</UButton>
    </div>
    <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <li v-for="p in guides" :key="p.path"><BlogCard :post="p" /></li>
    </ul>
  </section>
</template>

<script setup lang="ts">
// Articles about one dashboard feature, shown on its landing page
import BlogCard from '~/components/blog/BlogCard.vue'

const props = defineProps<{ feature: string, name: string }>()

const { t } = useI18n()
const localePath = useLocalePath()
const { data } = await useBlogPosts()

const guides = computed(() => (data.value ?? []).filter(p => p.meta.feature === props.feature).slice(0, 6))
</script>
