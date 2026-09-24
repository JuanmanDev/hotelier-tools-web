<template>
  <div
    v-if="feature"
    class="ht-accent"
    :style="accentVars(feature.accent)"
    data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;features-slug&quot;,&quot;path&quot;:&quot;pages/tools/bot/[slug].vue&quot;}"
  >
    <HeroSection>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24">
        <nav :aria-label="t('features.breadcrumb')" class="mb-6 text-sm">
          <ol class="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <li>
              <NuxtLink :to="localePath('/tools/bot')" class="hover:underline underline-offset-4">{{ t('nav.features') }}</NuxtLink>
            </li>
            <li aria-hidden="true"><UIcon name="i-heroicons-chevron-right" class="w-4 h-4 align-middle" /></li>
            <li class="font-medium text-gray-900 dark:text-white" aria-current="page">{{ name }}</li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div class="lg:col-span-5 ht-glass rounded-3xl p-6 sm:p-8">
            <div class="flex items-center gap-3 mb-5">
              <span class="w-12 h-12 rounded-xl grid place-items-center text-white shadow-sm" :style="{ background: 'var(--accent)' }">
                <UIcon :name="feature.icon" class="w-7 h-7" />
              </span>
              <UBadge :color="statusBadgeColor[feature.status]" variant="subtle" size="md">
                {{ t(`platform.status.${feature.status}`) }}
              </UBadge>
            </div>
            <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              {{ t(`platform.slides.${feature.id}.title`) }}
            </h1>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {{ t(`platform.slides.${feature.id}.description`) }}
            </p>
            <div class="flex flex-wrap gap-3">
              <UButton
                :data-umami-click="`{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;features-slug&quot;,&quot;target&quot;:&quot;dashboard-${feature.slug}&quot;}`"
                :to="dashboardUrl(feature)"
                target="_blank"
                size="xl"
                color="primary"
                trailing-icon="i-heroicons-arrow-top-right-on-square"
              >
                {{ t('platform.open_dashboard') }}
              </UButton>
              <UButton
                :data-umami-click="`{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;features-slug&quot;,&quot;target&quot;:&quot;demo-${feature.slug}&quot;}`"
                :to="demoUrl(feature)"
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

          <div class="lg:col-span-7 relative">
            <div
              class="absolute -inset-6 lg:-inset-10 rounded-[2.5rem]"
              :style="{ background: 'radial-gradient(60% 60% at 70% 30%, color-mix(in srgb, var(--accent) 24%, transparent), transparent 70%)' }"
              aria-hidden="true"
            />
            <component :is="scenes[feature.id]" class="relative w-full" />
          </div>
        </div>
      </section>
    </HeroSection>

    <!-- What the feature does, in detail -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <h2 class="font-display text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-10">
        {{ t('features.what_you_get') }}
      </h2>
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <li
          v-for="item in feature.items"
          :key="item.id"
          class="rounded-2xl p-6 ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900"
        >
          <div class="flex items-center justify-between gap-3 mb-3">
            <UIcon
              :name="item.status === 'soon' ? 'i-heroicons-clock' : 'i-heroicons-check-circle'"
              class="w-6 h-6"
              :style="{ color: item.status === 'soon' ? undefined : 'var(--accent)' }"
              :class="item.status === 'soon' ? 'text-gray-400' : ''"
            />
            <UBadge :color="statusBadgeColor[item.status]" variant="subtle" size="sm">
              {{ t(`platform.status.${item.status}`) }}
            </UBadge>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {{ t(`platform.slides.${feature.id}.items.${item.id}.name`) }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ t(`platform.slides.${feature.id}.items.${item.id}.text`) }}
          </p>
        </li>
      </ul>
    </section>

    <EmailExamples :feature="feature.id" />

    <PricingSection />

    <!-- The rest of the dashboard -->
    <section class="bg-gray-50 dark:bg-gray-950 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-display text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-10">
          {{ t('features.other') }}
        </h2>
        <FeatureGrid :exclude="feature.slug" />
      </div>
    </section>

    <FeatureRequest />
  </div>
</template>

<script setup lang="ts">
import { featureBySlug, LEGACY_BOT_SLUGS, ACCENTS, statusBadgeColor, accentVars, demoUrl, dashboardUrl, DASHBOARD_URL } from '~/data/platform'
import { scenes } from '~/components/platform/scenes'
import HeroSection from '~/components/HeroSection.vue'
import PricingSection from '~/components/PricingSection.vue'
import FeatureRequest from '~/components/FeatureRequest.vue'
import FeatureGrid from '~/components/platform/FeatureGrid.vue'
import EmailExamples from '~/components/platform/EmailExamples.vue'

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()
const { setSEO, setBreadcrumbs } = useSEO()

// Old bot pages moved to their feature page
const legacy = LEGACY_BOT_SLUGS[String(route.params.slug)]
if (legacy) {
  await navigateTo(localePath(`/tools/bot/${legacy}`), { redirectCode: 301, replace: true })
}

const feature = computed(() => featureBySlug(String(route.params.slug)))
if (!feature.value && !legacy) {
  throw createError({ statusCode: 404, statusMessage: 'Feature not found', fatal: true })
}

const name = computed(() => feature.value ? t(`platform.slides.${feature.value.id}.short`) : '')
const title = computed(() => t('features.seo_feature_title', { name: name.value }))
const description = computed(() => feature.value ? t(`platform.slides.${feature.value.id}.description`) : '')

// Nothing to describe when the page is only a redirect
if (feature.value) {
  setSEO('features', {
    title: title.value,
    description: description.value,
    ogTitle: t(`platform.slides.${feature.value!.id}.title`),
    ogDescription: description.value,
    og: {
      eyebrow: name.value,
      status: t(`platform.status.${feature.value!.status}`),
      statusKind: feature.value!.status,
      accent: ACCENTS[feature.value!.accent]?.[1]
    }
  })

  // Describes the feature as part of the Hotelier Tools web application
  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: `Hotelier Tools: ${name.value}`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: DASHBOARD_URL,
        description: description.value,
        featureList: feature.value!.items.map(i => t(`platform.slides.${feature.value!.id}.items.${i.id}.name`)),
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
      })
    }]
  })

  onMounted(() => {
    setBreadcrumbs([
      { name: t('nav.home'), url: '/' },
      { name: t('nav.features'), url: '/tools/bot' },
      { name: name.value, url: `/tools/bot/${feature.value!.slug}` }
    ])
  })
}
</script>
