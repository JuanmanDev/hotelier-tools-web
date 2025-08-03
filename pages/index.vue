<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      <div class="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[size:20px_20px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      <HeroSection >
        <slot name="hero-content">
          <div class="text-center backdrop-blur-sm">
            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animation-title">
                <span class="animate-fade-in-up  delay-100 animation-fill-backwards">
                  {{ t('home.hero.title').replaceAll(" ", "&nbsp;") }}
                </span> <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up  delay-200 animation-fill-backwards">
                  {{ t('home.hero.span').replaceAll(" ", "&nbsp;") }}
                </span> <span class="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent animate-fade-in-up  delay-300 animation-fill-backwards">
                  {{ t('home.hero.span2').replaceAll(" ", "&nbsp;") }}
                </span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-up delay-500 animation-fill-backwards">
                {{ t('home.hero.subtitle') }}
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-400 animation-fill-backwards">
                <UButton
                color="primary"
                size="xl"
                :to="localePath('/tools')"
                class="w-full sm:w-auto"
                >
                <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5 mr-2" />
                {{ t('home.hero.cta_tools') }}
                </UButton>
                
                <UButton
                color="gray"
                variant="outline"
                size="xl"
                :to="localePath('/documentation')"
                class="w-full sm:w-auto"
                >
                <UIcon name="i-heroicons-document-text" class="w-5 h-5 mr-2" />
                {{ t('home.hero.cta_docs') }}
                </UButton>
            </div>

            <!-- Trust Indicators -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up delay-500 animation-fill-backwards">
                <div class="flex items-center">
                <UIcon name="i-heroicons-shield-check" class="w-5 h-5 mr-2 text-green-500" />
                {{ t('home.hero.trust.secure') }}
                </div>
                <div class="flex items-center">
                <UIcon name="i-heroicons-clock" class="w-5 h-5 mr-2 text-blue-500" />
                {{ t('home.hero.trust.support') }}
                </div>
                <div class="flex items-center">
                <UIcon name="i-heroicons-star" class="w-5 h-5 mr-2 text-yellow-500" />
                {{ t('home.hero.trust.easy') }}
                </div>
            </div>
          </div>
        </slot>
      </HeroSection>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('home.features.automation.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ t('home.features.automation.description') }}
        </p>
      </div>
      
      <BotAnimation
        class="animate-bot-scale-reveal"
      />
      <NuxtLink :to="localePath('/tools/bot')" class="flex items-center justify-center mt-8">
        <UButton>
          <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 mr-2 mx-auto" />
          {{ t('home.hero.bot_button') }}
        </UButton>
      </NuxtLink>
      
    </section>

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Process Animation Section -->
    <ProcessAnimation />

    <!-- Features Overview -->
    <section class="bg-gray-50 dark:bg-gray-800 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ t('home.features.title') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            {{ t('home.features.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features"
            :key="feature.title"
            class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            :class="`animate-fade-in-up delay-${(index + 1) * 100}`"
          >
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <UIcon :name="feature.icon" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <UBadge v-if="feature.showFreeBadge" size="sm">
                {{ t('common.free') }}
              </UBadge>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {{ t(feature.title) }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ t(feature.description) }}
            </p>
            <ul class="space-y-2 mb-6">
              <li 
                v-for="benefit in feature.benefits"
                :key="benefit"
                class="flex items-center text-sm text-gray-600 dark:text-gray-300"
              >
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {{ t(benefit) }}
              </li>
            </ul>
            <UButton
              v-if="feature.buttonText && feature.buttonLink"
              :to="localePath(feature.buttonLink)"
              color="primary"
              variant="outline"
              size="sm"
              class="w-full text-center flex items-center justify-center"
            >
              {{ t(feature.buttonText) }}
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Showcase -->
    <ToolsShowcase />

    <!-- Stats Section -->
    <StatsSection />

    <!-- CTA Section -->
    <section class="bg-white dark:bg-gray-900 py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {{ t('home.cta.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {{ t('home.cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            color="primary"
            size="xl"
            :to="localePath('/tools')"
          >
            <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5 mr-2" />
            {{ t('home.cta.start_now') }}
          </UButton>
          <UButton
            color="gray"
            variant="outline"
            size="xl"
            :to="localePath('/contact')"
          >
            <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="w-5 h-5 mr-2" />
            {{ t('home.cta.talk_sales') }}
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BotAnimation from '../components/BotAnimation.vue'

const { t } = useI18n()
const localePath = useLocalePath()
const { setSEO, setStructuredData, setBreadcrumbs } = useSEO()

// Set SEO metadata for home page
setSEO('home')

// Set structured data for the home page
onMounted(() => {
  setStructuredData('Article', {
    title: t('seo.pages.home.title'),
    description: t('seo.pages.home.description'),
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: new Date().toISOString()
  })
  
  // Set breadcrumbs for home page
  setBreadcrumbs([
    { name: t('nav.home'), url: '/' }
  ])
})

const features = [
  {
    title: 'home.features.chrome.title',
    description: 'home.features.chrome.description',
    icon: 'i-heroicons-puzzle-piece',
    showFreeBadge: true,
    buttonText: 'home.features.chrome.view_extensions',
    buttonLink: '/tools/ui',
    benefits: [
      'home.features.chrome.benefits.0',
      'home.features.chrome.benefits.1',
      'home.features.chrome.benefits.2',
      'home.features.chrome.benefits.3'
    ]
  },
  {
    title: 'home.features.automation.title',
    description: 'home.features.automation.description',
    icon: 'i-heroicons-cog-6-tooth',
    buttonText: 'home.features.automation.see_more',
    buttonLink: '/tools/bot',
    benefits: [
      'home.features.automation.benefits.0',
      'home.features.automation.benefits.1',
      'home.features.automation.benefits.2',
      'home.features.automation.benefits.3'
    ]
  },
  {
    title: 'home.features.notifications.title',
    description: 'home.features.notifications.description',
    icon: 'i-heroicons-bell',
    buttonText: 'home.features.notifications.check_available',
    buttonLink: '/tools/bot',
    benefits: [
      'home.features.notifications.benefits.0',
      'home.features.notifications.benefits.1',
      'home.features.notifications.benefits.2',
      'home.features.notifications.benefits.3'
    ]
  }
]
</script>

<style>
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

.animation-title-1,
.animation-title-2,
.animation-title-3 {
  animation: fadeInUp 1s ease-in-out;
  animation-fill-mode: backwards;
}

</style>