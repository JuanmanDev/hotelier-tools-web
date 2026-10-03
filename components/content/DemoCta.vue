<template>
  <div class="ht-demo-cta not-prose my-8 rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">
    <p class="font-display text-xl font-semibold tracking-tight mb-1">{{ title || t('blog.cta.title') }}</p>
    <p class="text-blue-100 mb-4 text-[0.95rem]">{{ text || t('blog.cta.text') }}</p>
    <div class="flex flex-wrap gap-3">
      <UButton
        :to="demoHref"
        target="_blank"
        color="neutral"
        variant="solid"
        class="bg-white text-blue-700 hover:bg-blue-50"
        icon="i-heroicons-play-circle"
        :data-umami-click="`{&quot;name&quot;:&quot;click_blog_demo&quot;,&quot;file&quot;:&quot;DemoCta&quot;,&quot;target&quot;:&quot;${path ?? '/'}&quot;}`"
      >
        {{ t('blog.cta.demo') }}
      </UButton>
      <UButton
        :to="dashboardHref"
        target="_blank"
        color="neutral"
        variant="outline"
        class="bg-transparent text-white ring-white/60 hover:bg-white/10"
        trailing-icon="i-heroicons-arrow-top-right-on-square"
        :data-umami-click="`{&quot;name&quot;:&quot;click_blog_dashboard&quot;,&quot;file&quot;:&quot;DemoCta&quot;,&quot;target&quot;:&quot;${path ?? '/'}&quot;}`"
      >
        {{ t('platform.open_dashboard') }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// Invitation to open the same page in the public demo: ::demo-cta{path="/invoices"}
import { DEMO_URL, DASHBOARD_URL } from '~/data/platform'

const props = defineProps<{ path?: string, title?: string, text?: string }>()

const { t } = useI18n()
const demoHref = computed(() => new URL(props.path ?? '/', DEMO_URL).href)
const dashboardHref = computed(() => new URL(props.path ?? '/', DASHBOARD_URL).href)
</script>
