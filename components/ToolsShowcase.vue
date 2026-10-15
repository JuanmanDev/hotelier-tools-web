<template>
  <section data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;ToolsShowcase&quot;,&quot;path&quot;:&quot;components/ToolsShowcase.vue&quot;}" class="bg-white dark:bg-gray-900 py-16 lg:py-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('tools.showcase.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ t('tools.showcase.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Dashboard: the feature names come from the same list as the dashboard tour -->
        <div class="flex flex-col bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
              <UIcon name="i-heroicons-squares-2x2" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ t('tools.showcase.dashboard.name') }}
            </h3>
          </div>
          <p class="text-gray-600 dark:text-gray-300 mb-5">
            {{ t('tools.showcase.dashboard.description') }}
          </p>
          <ul class="flex flex-wrap gap-2 mb-8">
            <li v-for="slide in platformSlides" :key="slide.id">
              <NuxtLink
                :to="localePath(`/tools/bot/${slide.slug}`)"
                class="inline-flex items-center gap-1.5 rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <UIcon :name="slide.icon" class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                {{ t(`platform.slides.${slide.id}.short`) }}
              </NuxtLink>
            </li>
          </ul>
          <div class="mt-auto flex flex-wrap gap-3">
            <UButton
              data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;ToolsShowcase&quot;,&quot;target&quot;:&quot;features&quot;}"
              color="primary"
              :to="localePath('/tools/bot')"
              trailing-icon="i-heroicons-arrow-right"
            >
              {{ t('platform.banner.features') }}
            </UButton>
            <UButton
              data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;ToolsShowcase&quot;,&quot;target&quot;:&quot;demo&quot;}"
              color="neutral"
              variant="outline"
              :to="DEMO_URL"
              target="_blank"
              icon="i-heroicons-play-circle"
            >
              {{ t('platform.try_demo') }}
            </UButton>
          </div>
        </div>

        <!-- Free browser scripts -->
        <div class="flex flex-col bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                <UIcon name="i-simple-icons-googlechrome" class="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ t('tools.showcase.scripts.name') }}
              </h3>
            </div>
            <UBadge size="sm">{{ t('common.free') }}</UBadge>
          </div>
          <p class="text-gray-600 dark:text-gray-300 mb-5">
            {{ t('tools.showcase.scripts.description') }}
          </p>
          <ul class="space-y-2 mb-8">
            <li
              v-for="n in 4"
              :key="n"
              class="flex items-center text-sm text-gray-600 dark:text-gray-300"
            >
              <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {{ t(`tools.showcase.scripts.benefits.${n - 1}`) }}
            </li>
          </ul>
          <div class="mt-auto flex flex-wrap gap-3">
            <UButton
              data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;ToolsShowcase&quot;,&quot;target&quot;:&quot;scripts&quot;}"
              color="primary"
              :to="localePath('/tools/ui')"
              trailing-icon="i-heroicons-arrow-right"
            >
              {{ t('tools.showcase.scripts.cta') }}
            </UButton>
            <UButton
              data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;ToolsShowcase&quot;,&quot;target&quot;:&quot;install_guide&quot;}"
              color="neutral"
              variant="outline"
              :to="localePath('/blog/little-hotelier-chrome-extensions')"
            >
              {{ t('tools.showcase.scripts.install_guide') }}
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { platformSlides, DEMO_URL } from '~/data/platform'

const { t } = useI18n()
const localePath = useLocalePath()
</script>
