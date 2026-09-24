<template>
  <PlatformWindow path="/price-recommendations">
    <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-xs text-gray-600 dark:text-gray-300">
      <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm bg-gray-300 dark:bg-gray-600" />{{ $t('platform.scenes.pricing.current') }}</span>
      <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm" :style="{ background: 'var(--accent)' }" />{{ $t('platform.scenes.pricing.recommended') }}</span>
      <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full border-2 border-gray-900 dark:border-white" />{{ $t('platform.scenes.pricing.competitors') }}</span>
    </div>

    <div class="relative grid grid-cols-7 gap-2 sm:gap-3 items-end h-52">
      <div v-for="(n, i) in nights" :key="i" class="relative h-full flex items-end justify-center gap-1">
        <div class="w-1/3 rounded-t bg-gray-300 dark:bg-gray-600 ht-grow-y" :style="{ height: `${n.current}%`, '--d': `${0.1 + i * 0.05}s` }" />
        <div class="w-1/3 rounded-t ht-grow-y" :style="{ height: `${n.rec}%`, background: 'var(--accent)', '--d': `${0.6 + i * 0.08}s` }" />
        <span
          class="ht-pop absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 border-gray-900 dark:border-white bg-white dark:bg-gray-900"
          :style="{ bottom: `calc(${n.comp}% - 5px)`, '--d': `${1.2 + i * 0.06}s` }"
        />
      </div>
    </div>
    <div class="grid grid-cols-7 gap-2 sm:gap-3 mt-2">
      <span v-for="(label, i) in dayLabels" :key="i" class="text-center text-[11px] text-gray-500 dark:text-gray-400 capitalize">{{ label }}</span>
    </div>

    <div class="ht-rise mt-4 flex flex-wrap items-center gap-3 rounded-xl p-3 bg-gray-50 dark:bg-gray-800/60" style="--d: 1.8s">
      <span class="font-display text-2xl font-semibold tabular-nums" :style="{ color: 'var(--accent)' }">+18 €</span>
      <span class="flex-1 min-w-[10rem] text-xs text-gray-600 dark:text-gray-300">
        <span class="block font-medium text-gray-900 dark:text-white">{{ $t('platform.scenes.pricing.event') }}</span>
        {{ $t('platform.scenes.pricing.reason') }}
      </span>
      <span class="rounded-lg px-3 py-1.5 text-xs font-medium text-white" :style="{ background: 'var(--accent)' }">
        {{ $t('platform.scenes.pricing.apply', { n: 5 }) }}
      </span>
    </div>
  </PlatformWindow>
</template>

<script setup lang="ts">
import PlatformWindow from '../PlatformWindow.vue'

const { locale } = useI18n()

// Heights as a share of the chart; Friday and Saturday carry a local event
const nights = [
  { current: 48, rec: 50, comp: 52 },
  { current: 48, rec: 46, comp: 47 },
  { current: 50, rec: 55, comp: 58 },
  { current: 55, rec: 64, comp: 66 },
  { current: 62, rec: 84, comp: 80 },
  { current: 66, rec: 92, comp: 88 },
  { current: 52, rec: 58, comp: 60 }
]

// Monday 12 October 2026 onwards, in the visitor's language
const dayLabels = computed(() => {
  const fmt = new Intl.DateTimeFormat(locale.value, { weekday: 'short', timeZone: 'UTC' })
  return nights.map((_, i) => fmt.format(new Date(Date.UTC(2026, 9, 12 + i))))
})
</script>
