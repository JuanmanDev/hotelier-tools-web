<template>
  <NuxtLink :to="to" :target="external ? '_blank' : props.target" :rel="external ? 'noopener' : undefined">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
// Links inside articles: site pages follow the reader's language, other sites open in a new tab
import { BLOG_MISSING_LOCALES } from '~/data/blog'

const props = defineProps({
  href: { type: String, default: '' },
  target: { type: String, default: undefined, required: false }
})

const { locale } = useI18n()
const localePath = useLocalePath()

const external = computed(() => /^https?:\/\//.test(props.href))
const to = computed(() => {
  const href = props.href
  if (!href.startsWith('/') || href.startsWith('//') || /^\/(images|data|_nuxt)\//.test(href)) return href
  // A guide not written in this language opens in English
  const slug = href.match(/^\/blog\/([^/#?]+)/)?.[1]
  if (slug && BLOG_MISSING_LOCALES[slug]?.includes(locale.value)) return localePath(href, 'en')
  return localePath(href)
})
</script>
