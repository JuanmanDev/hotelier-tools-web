<template>
  <NuxtLink
    :to="localePath(`/blog/${slug}`)"
    class="ht-accent group flex h-full flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-gray-300 dark:hover:ring-gray-600 hover:shadow-lg transition-shadow focus-visible:outline-2 focus-visible:outline-primary-500"
    :style="accentVars(category.accent)"
    :data-umami-click="`{&quot;name&quot;:&quot;click_blog_card&quot;,&quot;file&quot;:&quot;BlogCard&quot;,&quot;target&quot;:&quot;${slug}&quot;}`"
  >
    <div v-if="post.meta.cover" class="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800">
      <img
        :src="post.meta.cover"
        :alt="post.meta.coverAlt || post.title"
        width="1440"
        height="900"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
        class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
      >
    </div>
    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <span class="inline-flex items-center gap-1.5 text-sm font-medium mb-2" :style="{ color: 'var(--accent)' }">
        <UIcon :name="category.icon" class="w-4 h-4" />
        {{ t(`blog.categories.${category.id}.name`) }}
      </span>
      <component :is="headingTag" class="font-display text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2 group-hover:underline underline-offset-4 decoration-2">
        {{ post.title }}
      </component>
      <p class="text-sm text-gray-600 dark:text-gray-300 flex-1 line-clamp-3">{{ post.description }}</p>
      <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white">
        {{ t('blog.read') }}
        <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { categoryById, blogSlug, type BlogListItem } from '~/data/blog'
import { accentVars } from '~/data/platform'

const props = withDefaults(defineProps<{ post: BlogListItem, eager?: boolean, headingTag?: string }>(), { headingTag: 'h3' })

const { t } = useI18n()
const localePath = useLocalePath()

const slug = computed(() => blogSlug(props.post.path))
const category = computed(() => categoryById(props.post.meta.category))
</script>
