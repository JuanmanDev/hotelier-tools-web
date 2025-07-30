<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section with Animation -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <i18n-t keypath="bot.hero.title" tag="span">
              <template #span>
                <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {{ $t('bot.hero.span') }}
                </span>
              </template>
            </i18n-t>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('bot.hero.subtitle') }}
          </p>
        </div>

        <!-- Bot Animation Container -->
        <BotAnimation />
      </div>
    </section>

    <!-- Detailed Features Section -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {{ $t('bot.details.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ $t('bot.details.subtitle') }}
          </p>
        </div>

        <div class="space-y-8">
          <div
            v-for="feature in features"
            :key="feature.key"
            class="relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <!-- Large background icon -->
            <div class="absolute bottom-4 right-4 opacity-10 dark:opacity-5">
              <UIcon :name="feature.icon" class="w-52 h-52 text-blue-600" />
            </div>
            
            <div class="relative z-10 grid md:grid-cols-2 lg:grid-cols-6 gap-8 items-center">
              <div class="lg:col-span-3">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                    <UIcon :name="feature.icon" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ $t(`bot.tasks.${feature.key}.title`) }}
                  </h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  {{ $t(`bot.tasks.${feature.key}.description`) }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  {{ $t(`bot.details.${feature.key}.longDescription`) }}
                </p>
              </div>
              
              <div class="lg:col-span-2">
                <ul class="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                  <li
                    v-for="featureIndex in 3"
                    :key="featureIndex"
                    class="flex items-center gap-3"
                  >
                    <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{{ $t(`bot.details.${feature.key}.feature${featureIndex}`) }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="flex justify-end col-span-1 md:col-span-2 lg:col-span-1">
                <UButton
                  :to="`/tools/bot/${feature.key}`"
                  color="blue"
                  variant="solid"
                  size="lg"
                  :label="$t('bot.details.learnMore')"
                  trailing-icon="i-heroicons-arrow-right"
                  class="w-full md:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: computed(() => `${$t('bot.tasks.checkout.title')} - Hotelier Tools`),
  meta: [
    {
      name: 'description',
      content: computed(() => $t('bot.hero.subtitle'))
    }
  ]
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
</script>



<style scoped>
@reference "tailwindcss";

.task-block {
  @apply bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer w-52 text-center;
  transition: transform 0.4s ease, filter 0.4s ease, opacity 0.4s ease, box-shadow 0.4s ease;
  filter: blur(0px);
  opacity: 1;
  transform: scale(1.05);
}

.task-block.task-blur {
  filter: blur(2px);
  opacity: 0.7;
  transform: scale(0.95);
}

.task-block:hover {
  filter: blur(0px) !important;
  opacity: 1 !important;
  transform: scale(1.08) !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
}

.task-header {
  @apply flex items-center gap-3 mb-4 text-left;
}

.task-icon {
  @apply flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg flex-shrink-0;
}

.task-title {
  @apply font-semibold text-gray-900 dark:text-white text-base flex-1;
}

.task-description {
  @apply text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-center;
}

.base-trace {
  filter: drop-shadow(0 0 2px #60A5FA);
  transition: opacity 0.5s ease;
}

.data-flow {
  filter: drop-shadow(0 0 6px #3B82F6);
  animation: data-flow-animation 25s linear infinite;
}

/* .flow-0 { animation-delay: 0s; }
.flow-1 { animation-delay: 0.5s; }
.flow-2 { animation-delay: 1s; }
.flow-3 { animation-delay: 1.5s; }
.flow-4 { animation-delay: 2s; }
.flow-5 { animation-delay: 2.5s; } */

@keyframes data-flow-animation {
  0% {
    stroke-dashoffset: -1000;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1; 
  }
  100% {
    stroke-dashoffset: 1000;
    opacity: 0;
  }
}
</style>