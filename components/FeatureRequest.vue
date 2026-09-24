<template>
  <section
    id="feature-request"
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16"
    data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;FeatureRequest&quot;,&quot;path&quot;:&quot;components/FeatureRequest.vue&quot;}"
  >
    <div class="grid lg:grid-cols-[1fr_auto] items-center gap-8 rounded-3xl p-6 sm:p-10 ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900">
      <div class="flex items-start gap-5 max-w-2xl">
        <span class="hidden sm:grid w-14 h-14 shrink-0 place-items-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
          <UIcon name="i-heroicons-light-bulb" class="w-7 h-7" />
        </span>
        <div>
          <h2 class="font-display text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            {{ t('features.request.title') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            {{ t('features.request.text') }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap gap-3">
        <UButton
          data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;FeatureRequest&quot;,&quot;target&quot;:&quot;contact&quot;}"
          :to="localePath({ path: '/contact', query: { subject: 'feature' } })"
          size="xl"
          color="primary"
          icon="i-heroicons-chat-bubble-left-ellipsis"
        >
          {{ t('features.request.cta') }}
        </UButton>
        <UButton
          data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;FeatureRequest&quot;,&quot;target&quot;:&quot;email&quot;}"
          :to="mailto"
          size="xl"
          color="neutral"
          variant="outline"
          icon="i-heroicons-envelope"
        >
          {{ t('features.request.email') }}
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const mailto = computed(() => `mailto:JuanmaDeveloper+hotelierTools@outlook.com?subject=${encodeURIComponent(`Hotelier Tools - ${t('contact.form.subjects.feature')}`)}`)
</script>
