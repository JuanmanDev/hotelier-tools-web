<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ t('contact.hero.title') }}
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {{ t('contact.hero.span') }}
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ t('contact.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Contact Form -->
          <div class="order-2 lg:order-1">
            <ContactForm />
          </div>

          <!-- Contact Information -->
          <div class="space-y-8 order-1 lg:order-2">
            <!-- Direct Contact -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {{ t('contact.info.title') }}
              </h3>

              <div class="space-y-6">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">{{ t('contact.info.email') }}</p>
                    <a href="mailto:JuanmaDeveloper+hotelierTools@outlook.com" class="text-blue-600 hover:text-blue-800 transition-colors">
                      JuanmaDeveloper+hotelierTools@outlook.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <UIcon name="i-heroicons-clock" class="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">{{ t('contact.info.schedule') }}</p>
                    <p class="text-gray-600 dark:text-gray-300">{{ t('contact.info.schedule_text') }}</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">{{ t('contact.info.response') }}</p>
                    <p class="text-gray-600 dark:text-gray-300">{{ t('contact.info.response_text') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Support Options -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {{ t('contact.support.title') }}
              </h3>

              <div class="space-y-4">
                <div 
                  v-for="option in supportOptions"
                  :key="option.titleKey"
                  class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-300 dark:hover:border-blue-600 transition-colors cursor-pointer group"
                >
                  <div class="flex items-start">
                    <UIcon :name="option.icon" class="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div class="flex-1">
                      <h4 class="font-medium text-gray-900 dark:text-white mb-1">{{ t(option.titleKey) }}</h4>
                      <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">{{ t(option.descriptionKey) }}</p>
                      <p class="text-blue-600 text-sm font-medium">{{ t(option.responseKey) }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ Link -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {{ t('contact.faq_link.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                {{ t('contact.faq_link.description') }}
              </p>
              <UButton
                color="blue"
                variant="outline"
                to="/faq"
                size="lg"
                class="w-full sm:w-auto"
              >
                <UIcon name="i-heroicons-question-mark-circle" class="w-4 h-4 mr-2" />
                {{ t('contact.faq_link.view_faq') }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Internationalization
const { t } = useI18n()

// SEO
useHead({
  title: t('contact.hero.title') + ' ' + t('contact.hero.span') + ' - Hotelier Tools',
  meta: [
    {
      name: 'description',
      content: t('contact.hero.subtitle')
    }
  ]
})

// Support options
const supportOptions = [
  {
    titleKey: 'contact.support.email.title',
    descriptionKey: 'contact.support.email.description', 
    icon: 'i-heroicons-envelope',
    responseKey: 'contact.support.email.response'
  },
  {
    titleKey: 'contact.support.urgent.title',
    descriptionKey: 'contact.support.urgent.description',
    icon: 'i-heroicons-exclamation-triangle',
    responseKey: 'contact.support.urgent.response'
  },
  {
    titleKey: 'contact.support.consulting.title',
    descriptionKey: 'contact.support.consulting.description',
    icon: 'i-heroicons-academic-cap',
    responseKey: 'contact.support.consulting.response'
  }
]
</script>