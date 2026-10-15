<template>
  <div data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;index&quot;,&quot;path&quot;:&quot;pages/index.vue&quot;}">
    <!-- Hero: dashboard feature tour -->
    <HeroSection>
      <PlatformShowcase hero />
    </HeroSection>

    <!-- What lands in the inbox -->
    <LazyPlatformEmailExamples hydrate-on-visible />

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('home.features.automation.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ t('home.features.automation.description') }}
        </p>
      </div>
      
      <LazyBotAnimation hydrate-on-visible
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
    <LazyTestimonialsSection hydrate-on-visible />

    <!-- Process Animation Section -->
    <LazyProcessAnimation hydrate-on-visible />

    <!-- Tools Showcase -->
    <LazyToolsShowcase hydrate-on-visible />

    <!-- Stats Section -->
    <LazyStatsSection hydrate-on-visible />

    <!-- Guides -->
    <LazyBlogLatestGuides hydrate-on-visible />

    <!-- Pricing -->
    <LazyPricingSection hydrate-on-visible />

    <!-- Ask for what is missing -->
    <LazyFeatureRequest hydrate-on-visible />

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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PlatformShowcase from '../components/platform/PlatformShowcase.vue'
import HeroSection from '../components/HeroSection.vue'
import { DASHBOARD_URL, DEMO_URL, platformSlides } from '~/data/platform'

const { t } = useI18n()
const localePath = useLocalePath()
const { setSEO, setStructuredData } = useSEO()

// Set SEO metadata for home page
setSEO('home')

// The home page describes the dashboard itself; free for every hotel until billing starts
setStructuredData('Product', {
  name: 'Hotelier Tools',
  description: t('seo.pages.home.description'),
  url: DASHBOARD_URL,
  featureList: platformSlides.map(f => t(`platform.slides.${f.id}.short`)),
  offers: { price: 0, priceCurrency: 'EUR', priceValidUntil: '2027-01-10' }
})
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