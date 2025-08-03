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


  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { setSEO, setStructuredData, setBreadcrumbs } = useSEO()

// Set SEO metadata for tools page
setSEO('tools')

// Set structured data and breadcrumbs
onMounted(() => {
  setStructuredData('Product', {
    name: t('seo.site.name'),
    description: t('seo.pages.tools.description')
  })
  
  setBreadcrumbs([
    { name: t('nav.home'), url: '/' },
    { name: t('nav.tools'), url: '/tools' }
  ])
})

const faqItems = computed(() => t('tools.faq.items'))
</script>