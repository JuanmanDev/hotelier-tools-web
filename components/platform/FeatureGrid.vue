<template>
  <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    <li v-for="f in list" :key="f.slug">
      <NuxtLink
        :to="localePath(`/tools/bot/${f.slug}`)"
        class="ht-accent group flex h-full flex-col rounded-2xl p-6 bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-gray-300 dark:hover:ring-gray-600 hover:shadow-lg transition-shadow focus-visible:outline-2 focus-visible:outline-primary-500"
        :style="accentVars(f.accent)"
        :data-umami-click="`{&quot;name&quot;:&quot;click_feature_card&quot;,&quot;file&quot;:&quot;FeatureGrid&quot;,&quot;target&quot;:&quot;${f.slug}&quot;}`"
      >
        <span class="flex items-center justify-between gap-3 mb-4">
          <span class="w-11 h-11 rounded-xl grid place-items-center text-white" :style="{ background: 'var(--accent)' }">
            <UIcon :name="f.icon" class="w-6 h-6" />
          </span>
          <UBadge :color="statusBadgeColor[f.status]" variant="subtle" size="sm">{{ t(`platform.status.${f.status}`) }}</UBadge>
        </span>
        <span class="text-sm font-medium mb-1" :style="{ color: 'var(--accent)' }">{{ t(`platform.slides.${f.id}.short`) }}</span>
        <span class="font-display text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{{ t(`platform.slides.${f.id}.title`) }}</span>
        <span class="text-sm text-gray-600 dark:text-gray-300 flex-1">{{ t(`platform.slides.${f.id}.description`) }}</span>
        <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white group-hover:underline underline-offset-4">
          {{ t('platform.learn_more') }}
          <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { platformSlides, statusBadgeColor, accentVars } from '~/data/platform'

const props = defineProps<{ exclude?: string }>()

const { t } = useI18n()
const localePath = useLocalePath()

const list = computed(() => platformSlides.filter(f => f.slug !== props.exclude))
</script>
