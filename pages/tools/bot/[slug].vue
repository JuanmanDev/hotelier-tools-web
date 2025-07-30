<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center">
              <UIcon :name="feature?.icon" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {{ $t(`bot.tasks.${slug}.title`) }}
            </h1>
          </div>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t(`bot.tasks.${slug}.description`) }}
          </p>
        </div>
      </div>
    </section>

    <!-- Feature Details Section -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {{ $t('bot.details.overview') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8">
            {{ $t(`bot.details.${slug}.longDescription`) }}
          </p>

          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {{ $t('bot.details.keyFeatures') }}
          </h3>
          <ul class="space-y-4">
            <li
              v-for="featureIndex in 3"
              :key="featureIndex"
              class="flex items-start gap-4"
            >
              <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span class="text-gray-900 dark:text-white font-medium">
                  {{ $t(`bot.details.${slug}.feature${featureIndex}`) }}
                </span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Back Button -->
        <div class="mt-8 text-center">
          <UButton
            to="/tools/bot"
            color="gray"
            variant="outline"
            size="lg"
            icon="i-heroicons-arrow-left"
            :label="$t('common.backToOverview')"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Features data
const features = [
  {
    key: 'checkout',
    icon: 'i-heroicons-arrow-right-start-on-rectangle'
  },
  {
    key: 'payments',
    icon: 'i-heroicons-credit-card'
  },
  {
    key: 'guests',
    icon: 'i-heroicons-user-group'
  },
  {
    key: 'unconfirmed',
    icon: 'i-heroicons-exclamation-triangle'
  },
  {
    key: 'prices',
    icon: 'i-heroicons-calculator'
  },
  {
    key: 'invoices',
    icon: 'i-heroicons-document-text'
  }
]

const feature = features.find(f => f.key === slug)

// Redirect to 404 if feature not found
if (!feature) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Feature not found'
  })
}

// SEO
useHead({
  title: computed(() => `${$t(`bot.tasks.${slug}.title`)} - Hotelier Tools`),
  meta: [
    {
      name: 'description',
      content: computed(() => $t(`bot.tasks.${slug}.description`))
    }
  ]
})
</script>
