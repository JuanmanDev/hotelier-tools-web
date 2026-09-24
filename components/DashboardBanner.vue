<template>
  <section
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
    data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;DashboardBanner&quot;,&quot;path&quot;:&quot;components/DashboardBanner.vue&quot;}"
  >
    <div class="relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl">
      <UIcon name="i-heroicons-squares-2x2" class="absolute -right-6 -bottom-8 w-48 h-48 text-white/10" aria-hidden="true" />
      <div class="relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
        <div class="flex-1 max-w-2xl">
          <p class="font-display text-2xl lg:text-3xl font-semibold tracking-tight mb-2">{{ t('platform.banner.title') }}</p>
          <p class="text-blue-100">{{ t('platform.banner.text') }}</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <UButton
            data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;DashboardBanner&quot;,&quot;target&quot;:&quot;dashboard&quot;}"
            :to="DASHBOARD_URL"
            target="_blank"
            size="lg"
            color="neutral"
            variant="solid"
            class="bg-white text-blue-700 hover:bg-blue-50"
            trailing-icon="i-heroicons-arrow-top-right-on-square"
          >
            {{ t('platform.open_dashboard') }}
          </UButton>
          <UButton
            data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;DashboardBanner&quot;,&quot;target&quot;:&quot;demo&quot;}"
            :to="DEMO_URL"
            target="_blank"
            size="lg"
            color="neutral"
            variant="outline"
            class="text-white ring-white/60 hover:bg-white/10"
            icon="i-heroicons-play-circle"
          >
            {{ t('platform.try_demo') }}
          </UButton>
          <UButton
            data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;DashboardBanner&quot;,&quot;target&quot;:&quot;features&quot;}"
            :to="localePath('/') + '#platform'"
            size="lg"
            color="neutral"
            variant="ghost"
            class="text-white hover:bg-white/10"
          >
            {{ t('platform.banner.features') }}
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DASHBOARD_URL, DEMO_URL } from '~/data/platform'

const { t } = useI18n()
const localePath = useLocalePath()
</script>
