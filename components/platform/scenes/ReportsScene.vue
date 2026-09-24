<template>
  <PlatformWindow path="/reports/guest-origins">
    <p class="font-display text-lg font-semibold text-gray-900 dark:text-white mb-4">{{ $t('platform.scenes.reports.title') }}</p>

    <ul class="space-y-2.5">
      <li v-for="(row, i) in rows" :key="row.code" class="grid grid-cols-[7.5rem_1fr_2.5rem] items-center gap-3 text-xs">
        <span class="text-gray-700 dark:text-gray-200 truncate">{{ row.label }}</span>
        <span class="h-3 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <span class="ht-grow-x block h-full rounded-full" :style="{ width: `${row.share * 2.2}%`, background: 'var(--accent)', opacity: 1 - i * 0.13, '--d': `${0.2 + i * 0.12}s` }" />
        </span>
        <span class="text-right tabular-nums text-gray-500 dark:text-gray-400">{{ row.share }}%</span>
      </li>
    </ul>

    <div class="grid grid-cols-2 gap-3 mt-5">
      <div v-for="(stat, i) in stats" :key="stat.key" class="ht-rise rounded-xl bg-gray-50 dark:bg-gray-800/60 p-3" :style="{ '--d': `${1 + i * 0.15}s` }">
        <span class="block font-display text-2xl font-semibold tabular-nums text-gray-900 dark:text-white">{{ stat.value }}</span>
        <span class="block text-[11px] text-gray-500 dark:text-gray-400">{{ $t(`platform.scenes.reports.${stat.key}`) }}</span>
      </div>
    </div>

    <div class="ht-pop absolute top-14 right-4 sm:right-6 rotate-[-6deg] rounded-lg border-2 px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90" :style="{ borderColor: 'var(--accent)', color: 'var(--accent)', '--d': '1.7s' }">
      <UIcon name="i-heroicons-check-badge" class="w-4 h-4" />
      {{ $t('platform.scenes.reports.sent') }}
    </div>
  </PlatformWindow>
</template>

<script setup lang="ts">
import PlatformWindow from '../PlatformWindow.vue'

const { locale } = useI18n()

// Spanish regions keep their own names; countries are named in the visitor's language
const rows = computed(() => {
  let countries: Intl.DisplayNames | null = null
  try {
    countries = new Intl.DisplayNames([locale.value], { type: 'region' })
  } catch {}
  const country = (code: string, fallback: string) => countries?.of(code) ?? fallback
  return [
    { code: 'MD', label: 'Madrid', share: 34 },
    { code: 'CT', label: 'Catalunya', share: 21 },
    { code: 'AN', label: 'Andalucía', share: 15 },
    { code: 'FR', label: country('FR', 'France'), share: 12 },
    { code: 'DE', label: country('DE', 'Germany'), share: 10 },
    { code: 'GB', label: country('GB', 'United Kingdom'), share: 8 }
  ]
})

const stats = [
  { key: 'stays', value: '1.284' },
  { key: 'rooms', value: '412' }
]
</script>
