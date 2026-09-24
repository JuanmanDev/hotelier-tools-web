<template>
  <section
    id="pricing"
    class="py-16 lg:py-24 bg-white dark:bg-gray-900"
    data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;PricingSection&quot;,&quot;path&quot;:&quot;components/PricingSection.vue&quot;}"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mb-12">
        <h2 class="font-display text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          {{ t('pricing.title', { date: billingDate }) }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          {{ t('pricing.subtitle') }}
        </p>
      </div>

      <!-- Two periods in order, joined by the day billing starts -->
      <ol class="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 items-stretch">
        <li class="relative rounded-3xl p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 ring-1 ring-blue-100 dark:ring-blue-900/60">
          <p class="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">{{ t('pricing.now.period', { date: lastFreeDate }) }}</p>
          <p class="flex items-baseline gap-2 mb-4">
            <span class="font-display text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">0 €</span>
          </p>
          <p class="text-gray-700 dark:text-gray-200 mb-5">{{ t('pricing.now.description') }}</p>
          <ul class="space-y-2.5 mb-6">
            <li v-for="i in 3" :key="i" class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
              <UIcon name="i-heroicons-check" class="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              {{ t(`pricing.now.points.${i - 1}`) }}
            </li>
          </ul>
          <p v-if="daysLeft !== null && daysLeft > 0" class="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-gray-900/60 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 ring-1 ring-blue-100 dark:ring-blue-900">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            {{ t('pricing.now.days_left', { n: daysLeft }, daysLeft) }}
          </p>
        </li>

        <li class="flex md:flex-col items-center justify-center gap-3 md:px-6">
          <span class="h-px md:h-auto md:w-px flex-1 bg-gray-200 dark:bg-gray-700" />
          <span class="flex md:flex-col items-center gap-2 text-center">
            <span class="w-3 h-3 rounded-full ring-4 ring-blue-100 dark:ring-blue-900 bg-blue-600 dark:bg-blue-400" />
            <span>
              <span class="block font-display text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">{{ billingDate }}</span>
              <span class="block text-xs text-gray-500 dark:text-gray-400">{{ t('pricing.billing_starts') }}</span>
            </span>
          </span>
          <span class="h-px md:h-auto md:w-px flex-1 bg-gray-200 dark:bg-gray-700" />
        </li>

        <li class="relative rounded-3xl p-6 lg:p-8 ring-1 ring-gray-200 dark:ring-gray-700">
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{{ t('pricing.later.period') }}</p>
          <p class="flex items-baseline gap-2 mb-4">
            <span class="font-display text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">50 €</span>
            <span class="text-gray-500 dark:text-gray-400">{{ t('pricing.per_month') }}</span>
          </p>
          <p class="text-gray-700 dark:text-gray-200 mb-5">{{ t('pricing.later.description') }}</p>
          <ul class="space-y-2.5">
            <li v-for="i in 3" :key="i" class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
              <UIcon name="i-heroicons-check" class="w-5 h-5 text-gray-500 dark:text-gray-400 shrink-0" />
              {{ t(`pricing.later.points.${i - 1}`) }}
            </li>
          </ul>
        </li>
      </ol>

      <div class="mt-10 flex flex-wrap items-center gap-4">
        <UButton
          data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;PricingSection&quot;,&quot;target&quot;:&quot;https://dashboard.hotelier.tools/&quot;}"
          :to="DASHBOARD_URL"
          target="_blank"
          size="xl"
          color="primary"
          trailing-icon="i-heroicons-arrow-top-right-on-square"
        >
          {{ t('pricing.cta') }}
        </UButton>
        <UButton
          data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;PricingSection&quot;,&quot;target&quot;:&quot;demo&quot;}"
          :to="DEMO_URL"
          target="_blank"
          size="xl"
          color="neutral"
          variant="outline"
          icon="i-heroicons-play-circle"
        >
          {{ t('platform.try_demo') }}
        </UButton>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('pricing.note') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DASHBOARD_URL, DEMO_URL } from '~/data/platform'

const { t, locale } = useI18n()

// Billing starts on 10 January 2027 (Madrid time)
const BILLING_START = Date.UTC(2027, 0, 9, 23, 0, 0)

const formatDate = (y: number, m: number, d: number) =>
  new Intl.DateTimeFormat(locale.value, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC', calendar: 'gregory' }).format(new Date(Date.UTC(y, m, d)))

const billingDate = computed(() => formatDate(2027, 0, 10))
const lastFreeDate = computed(() => formatDate(2027, 0, 9))

// Computed on the client only, so the prerendered page never shows a stale count
const daysLeft = ref<number | null>(null)
onMounted(() => {
  daysLeft.value = Math.ceil((BILLING_START - Date.now()) / 86_400_000)
})
</script>
