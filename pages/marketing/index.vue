<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ t('marketing.hero.title') }}
            <span class="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {{ t('marketing.hero.span') }}
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            {{ t('marketing.hero.subtitle') }}
          </p>
          
          <!-- Call to Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <UButton
              :to="localePath('/tools')"
              color="primary"
              size="xl"
              icon="i-heroicons-rocket-launch"
            >
              {{ t('marketing.hero.cta_start') }}
            </UButton>
            <UButton
              :to="localePath('/contact')"
              color="white"
              size="xl"
              icon="i-heroicons-chat-bubble-left-right"
            >
              {{ t('marketing.hero.cta_contact') }}
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {{ t('marketing.features.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ t('marketing.features.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in marketingFeatures" :key="feature.title" class="text-center">
            <div class="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl mx-auto mb-6">
              <UIcon :name="feature.icon" class="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ t(feature.title) }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ t(feature.description) }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { setSEO, setStructuredData, setBreadcrumbs } = useSEO()

// Custom SEO configuration for marketing page
setSEO('marketing', {
  title: 'Hotel Marketing Tools - Boost Your Direct Bookings | Hotelier Tools',
  description: 'Discover marketing strategies and tools to increase direct bookings for your hotel. Reduce OTA commissions and improve profitability with our specialized solutions.',
  ogTitle: 'Hotel Marketing Tools - Boost Direct Bookings',
  ogDescription: 'Reduce OTA commissions and increase direct bookings with our specialized hotel marketing tools and strategies.',
  keywords: 'hotel marketing, direct bookings, OTA commission reduction, hotel revenue optimization, booking engine optimization'
})

// Set structured data for this marketing page
onMounted(() => {
  setStructuredData('Article', {
    title: 'Hotel Marketing Tools - Boost Your Direct Bookings',
    description: 'Comprehensive guide and tools for increasing direct bookings and reducing dependency on OTAs',
    datePublished: '2024-01-15T00:00:00Z',
    dateModified: new Date().toISOString()
  })
  
  setBreadcrumbs([
    { name: t('nav.home'), url: '/' },
    { name: 'Marketing', url: '/marketing' }
  ])
})

const marketingFeatures = [
  {
    title: 'marketing.features.direct_bookings.title',
    description: 'marketing.features.direct_bookings.description',
    icon: 'i-heroicons-cursor-arrow-rays'
  },
  {
    title: 'marketing.features.ota_reduction.title',
    description: 'marketing.features.ota_reduction.description',
    icon: 'i-heroicons-chart-bar'
  },
  {
    title: 'marketing.features.revenue_optimization.title',
    description: 'marketing.features.revenue_optimization.description',
    icon: 'i-heroicons-banknotes'
  },
  {
    title: 'marketing.features.customer_loyalty.title',
    description: 'marketing.features.customer_loyalty.description',
    icon: 'i-heroicons-heart'
  },
  {
    title: 'marketing.features.analytics.title',
    description: 'marketing.features.analytics.description',
    icon: 'i-heroicons-chart-pie'
  },
  {
    title: 'marketing.features.automation.title',
    description: 'marketing.features.automation.description',
    icon: 'i-heroicons-cog-6-tooth'
  }
]
</script>