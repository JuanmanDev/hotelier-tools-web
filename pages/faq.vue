<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ $t('faq.hero.title') }}
            <span class="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {{ $t('faq.hero.span') }}
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('faq.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection />
        
        <!-- Contact Section -->
        <div class="mt-12 text-center">
          <UCard>
            <div class="p-8">
              <UIcon name="i-heroicons-chat-bubble-left-right" class="w-12 h-12 mx-auto text-amber-600 mb-4" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ $t('faq.contact_section.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                {{ $t('faq.contact_section.subtitle') }}
              </p>
              <UButton to="/contact" color="amber" size="lg" icon="i-heroicons-envelope">
                {{ $t('faq.contact_section.button') }}
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()
const { setSEO, setStructuredData, setBreadcrumbs, setFAQStructuredData } = useSEO()

// Set SEO metadata for FAQ page
setSEO('faq')

// Set structured data and breadcrumbs
onMounted(() => {
  // Set FAQ structured data - you would need to define the FAQ items
  const faqItems = [
    {
      question: t('faq.items.0.question'),
      answer: t('faq.items.0.answer')
    },
    {
      question: t('faq.items.1.question'),
      answer: t('faq.items.1.answer')
    }
    // Add more FAQ items as needed
  ]
  
  setFAQStructuredData(faqItems)
  
  setBreadcrumbs([
    { name: t('nav.home'), url: '/' },
    { name: 'FAQ', url: '/faq' }
  ])
})
</script>