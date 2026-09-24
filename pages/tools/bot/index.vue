<template>
  <div data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;features-index&quot;,&quot;path&quot;:&quot;pages/tools/bot/index.vue&quot;}">
    <HeroSection>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div class="max-w-3xl ht-glass rounded-3xl p-6 sm:p-8">
          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            {{ t('features.title') }}
          </h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
            {{ t('features.subtitle') }}
          </p>
          <div class="flex flex-wrap gap-3">
            <UButton
              data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;features-index&quot;,&quot;target&quot;:&quot;dashboard&quot;}"
              :to="DASHBOARD_URL"
              target="_blank"
              size="xl"
              color="primary"
              trailing-icon="i-heroicons-arrow-top-right-on-square"
            >
              {{ t('platform.open_dashboard') }}
            </UButton>
            <UButton
              data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;features-index&quot;,&quot;target&quot;:&quot;demo&quot;}"
              :to="DEMO_URL"
              target="_blank"
              size="xl"
              color="neutral"
              variant="outline"
              icon="i-heroicons-play-circle"
            >
              {{ t('platform.try_demo') }}
            </UButton>
          </div>
        </div>
      </section>
    </HeroSection>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <FeatureGrid />
    </section>

    <PricingSection />
    <FeatureRequest />
  </div>
</template>

<script setup lang="ts">
import { platformSlides, DASHBOARD_URL, DEMO_URL } from '~/data/platform'
import HeroSection from '~/components/HeroSection.vue'
import PricingSection from '~/components/PricingSection.vue'
import FeatureRequest from '~/components/FeatureRequest.vue'
import FeatureGrid from '~/components/platform/FeatureGrid.vue'

const { t } = useI18n()
const { setSEO, setBreadcrumbs } = useSEO()

setSEO('features')

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Hotelier Tools',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: DASHBOARD_URL,
      description: t('features.subtitle'),
      featureList: platformSlides.map(f => t(`platform.slides.${f.id}.short`)),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
    })
  }]
})

onMounted(() => {
  setBreadcrumbs([
    { name: t('nav.home'), url: '/' },
    { name: t('nav.features'), url: '/tools/bot' }
  ])
})
</script>
