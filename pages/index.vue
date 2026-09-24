<template>
  <div data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;index&quot;,&quot;path&quot;:&quot;pages/index.vue&quot;}">
    <!-- Hero: dashboard feature tour -->
    <HeroSection>
      <PlatformShowcase hero />
    </HeroSection>

    <!-- What lands in the inbox -->
    <EmailExamples />

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
      <NuxtLink data-umami-click="{&quot;name&quot;:&quot;click_nuxtlink&quot;,&quot;file&quot;:&quot;index&quot;,&quot;target&quot;:&quot;localePath('/tools/bot')&quot;}" :to="localePath('/tools/bot')" class="flex items-center justify-center mt-8">
        <UButton data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;index&quot;,&quot;target&quot;:&quot;unknown&quot;}">
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
            <UButton data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;index&quot;,&quot;target&quot;:&quot;localePath(feature.buttonLink)&quot;}"
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

    <!-- Pricing -->
    <PricingSection />

    <!-- Ask for what is missing -->
    <FeatureRequest />

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
          <UButton data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;index&quot;,&quot;target&quot;:&quot;dashboard&quot;}"
            color="primary"
            size="xl"
            :to="DASHBOARD_URL"
            target="_blank"
            trailing-icon="i-heroicons-arrow-top-right-on-square"
          >
            {{ t('platform.open_dashboard') }}
          </UButton>
          <UButton data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;index&quot;,&quot;target&quot;:&quot;demo&quot;}"
            color="neutral"
            variant="outline"
            size="xl"
            :to="DEMO_URL"
            target="_blank"
            icon="i-heroicons-play-circle"
          >
            {{ t('platform.try_demo') }}
          </UButton>
          <UButton data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;index&quot;,&quot;target&quot;:&quot;localePath('/contact')&quot;}"
            color="neutral"
            variant="ghost"
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
import PlatformShowcase from '../components/platform/PlatformShowcase.vue'
import PricingSection from '../components/PricingSection.vue'
import HeroSection from '../components/HeroSection.vue'
import FeatureRequest from '../components/FeatureRequest.vue'
import EmailExamples from '../components/platform/EmailExamples.vue'
import { DASHBOARD_URL, DEMO_URL } from '~/data/platform'

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