<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center">
              <UIcon :name="feature?.icon" class="w-8 h-8 text-blue-600 dark:text-blue-400" 
                :style="'view-transition-name: bot-features-icon-'+ slug"
              />
            </div>
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
              :style="'view-transition-name: bot-features-h1-'+ slug"
            >
              {{ $t(`bot.tasks.${slug}.title`) }}
            </h1>
          </div>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            :style="'view-transition-name: bot-features-description-'+ slug"
          >
            {{ $t(`bot.tasks.${slug}.description`) }}
          </p>
        </div>
      </div>
    </section>

    <!-- Feature Details Section -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            :style="'view-transition-name: bot-features-overview-'+ slug"
          >
            {{ $t('bot.details.overview') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8"
            :style="'view-transition-name: bot-features-long-description-'+ slug"
          >
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
                <span class="text-gray-900 dark:text-white font-medium"
                  :style="'view-transition-name: bot-features-list-'+ slug + '-' + featureIndex"
                >
                  {{ $t(`bot.details.${slug}.feature${featureIndex}`) }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">      
        <!-- Content Section -->
        <section class="mt-12 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <UIcon name="i-heroicons-document-text" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
              {{ $t('bot.details.documentation') }}
            </h3>
            <div class="prose prose-lg prose-blue dark:prose-invert max-w-none
                        prose-headings:text-gray-900 dark:prose-headings:text-gray-100
                        prose-h1:text-2xl prose-h1:font-bold prose-h1:mb-6 prose-h1:pb-3 prose-h1:border-b prose-h1:border-gray-200 dark:prose-h1:border-gray-700
                        prose-h2:text-xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-blue-600 dark:prose-h2:text-blue-400
                        prose-h3:text-lg prose-h3:font-medium prose-h3:mb-3 prose-h3:mt-6
                        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                        prose-ul:mb-4 prose-li:mb-2 prose-li:text-gray-700 dark:prose-li:text-gray-300
                        prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-strong:font-semibold
                        prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                        prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
                        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                        prose-table:w-full prose-table:border-collapse prose-table:mb-6
                        prose-th:bg-gray-50 dark:prose-th:bg-gray-800 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-gray-200 dark:prose-th:border-gray-700
                        prose-td:p-3 prose-td:border prose-td:border-gray-200 dark:prose-td:border-gray-700 prose-td:text-gray-700 dark:prose-td:text-gray-300
                        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                        [&_table]:overflow-hidden [&_table]:rounded-lg [&_table]:shadow-sm
                        [&_tr:nth-child(even)]:bg-gray-50 dark:[&_tr:nth-child(even)]:bg-gray-800/50
                        list-disc"
              :style="'view-transition-name: ui-features-content-'+ route.params.slug"
            >
              <ContentRenderer :value="doc" />
            </div>
          </div>
        </section>

        <!-- Back Button -->
        <div class="mt-8 text-center">
          <UButton
            :to="localePath('/tools/bot')"
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
const localePath = useLocalePath()
const { locale } = useI18n()

const { data: doc, refresh } = await useAsyncData(
  () => `ui-script-${route.params.slug}-${locale.value}`,
  () => {
    const contentPath = `/bot/${locale.value}/${route.params.slug}`
    return queryCollection('content').path(contentPath).first()
  }
)

// Watch for locale changes and reload data
watch(locale, async () => {
  await refresh()
})

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

<style>
@import "tailwindcss";

@reference "../../../assets/css/main.css";



main :deep(h1) {
  @apply text-green-600;
}

.prose p {
  @apply my-2;
}
.prose ul {
  @apply list-disc mb-6;
}
.prose ul li {
  @apply list-item ml-6;
}

.prose table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    max-width: 100%;
    & thead, tbody {
      width: 100%;
    }
}

.prose table th, .prose table td {
  @apply p-3 border border-gray-200 dark:border-gray-700;
}
</style>