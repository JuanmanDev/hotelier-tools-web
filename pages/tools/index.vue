<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <i18n-t keypath="tools.hero.title" tag="span">
              <template #span>
                <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {{ $t('tools.hero.span') }}
                </span>
              </template>
            </i18n-t>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            {{ $t('tools.hero.subtitle') }}
          </p>

          <!-- Hero Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <!-- Chrome Extensions Card -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div class="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl mx-auto mb-6">
                <UIcon name="i-simple-icons-googlechrome" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {{ $t('home.hero.cards.extensions.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                {{ $t('home.hero.cards.extensions.description') }}
              </p>
              <UButton :to="localePath('/tools/ui')" color="primary" class="w-full">
                {{ $t('home.hero.cards.extensions.button') }}
              </UButton>
            </div>

            <!-- Automations Card -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div class="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-xl mx-auto mb-6">
                <UIcon name="i-heroicons-cog-6-tooth" class="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {{ $t('home.hero.cards.automations.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                {{ $t('home.hero.cards.automations.description') }}
              </p>
              <UButton :to="localePath('/tools/bot')" color="primary" class="w-full">
                {{ $t('home.hero.cards.automations.button') }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Showcase -->
    <ToolsShowcase />

    <!-- How to Install Section -->
    <section class="bg-white dark:bg-gray-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('tools.install.title') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            {{ $t('tools.install.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Chrome Extensions -->
          <div class="space-y-6">
            <div class="flex items-center mb-6">
              <UIcon name="i-simple-icons-googlechrome" class="w-8 h-8 text-blue-600 mr-3" />
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ $t('tools.categories.chrome_extensions') }}
              </h3>
            </div>

            <div class="space-y-4">
              <div 
                v-for="(step, index) in $t('tools.install.chrome_steps')"
                :key="index"
                class="flex items-start"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">{{ index + 1 }}</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ step.title }}</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">{{ step.description }}</p>
                </div>
              </div>
            </div>

            <UButton color="primary" :to="localePath('/chrome-extensions')" class="w-full">
              <UIcon name="i-heroicons-arrow-down-tray" class="w-4 h-4 mr-2" />
              {{ $t('tools.actions.download_extensions') }}
            </UButton>
          </div>

          <!-- Automations -->
          <div class="space-y-6">
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-cog-6-tooth" class="w-8 h-8 text-indigo-600 mr-3" />
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ $t('tools.categories.automations') }}
              </h3>
            </div>

            <div class="space-y-4">
              <div 
                v-for="(step, index) in $t('tools.install.automation_steps')"
                :key="index"
                class="flex items-start"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span class="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">{{ index + 1 }}</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ step.title }}</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">{{ step.description }}</p>
                </div>
              </div>
            </div>

            <UButton color="indigo" :to="localePath('/contact')" class="w-full">
              <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="w-4 h-4 mr-2" />
              {{ $t('tools.actions.request_setup') }}
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-50 dark:bg-gray-900 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('tools.faq.title') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            {{ $t('tools.faq.subtitle') }}
          </p>
        </div>

        <UAccordion :items="faqItems" multiple>
          <template #default="{ item, index, open }">
            <UButton
              color="gray"
              variant="ghost"
              class="border-b border-gray-200 dark:border-gray-700"
              :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
            >
              <template #leading>
                <div class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <span class="text-blue-600 dark:text-blue-400 text-sm font-semibold">{{ index + 1 }}</span>
                </div>
              </template>

              <span class="truncate">{{ item.label }}</span>

              <template #trailing>
                <UIcon
                  name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                  :class="[open && 'rotate-90']"
                />
              </template>
            </UButton>
          </template>

          <template #item="{ item }">
            <div class="p-4 text-gray-600 dark:text-gray-300">
              {{ item.content }}
            </div>
          </template>
        </UAccordion>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// SEO
useHead({
  title: 'Herramientas - Hotelier Tools',
  meta: [
    {
      name: 'description',
      content: 'Descubre todas las herramientas disponibles para optimizar tu gestión hotelera con Little Hotelier. Extensiones Chrome y automatizaciones especializadas.'
    }
  ]
})

const faqItems = computed(() => t('tools.faq.items'))
</script>