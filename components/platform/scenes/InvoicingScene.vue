<template>
  <PlatformWindow path="/invoices">
    <div class="flex items-baseline justify-between mb-4">
      <p class="font-display text-lg font-semibold text-gray-900 dark:text-white">{{ $t('platform.scenes.invoicing.period') }}</p>
      <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('platform.scenes.invoicing.count', { n: 186 }) }}</p>
    </div>

    <ul class="space-y-2">
      <li
        v-for="(row, i) in rows"
        :key="row.name"
        class="ht-rise flex items-center gap-3 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-800/60"
        :style="{ '--d': `${0.15 + i * 0.18}s` }"
      >
        <span class="w-8 h-8 rounded-md grid place-items-center text-xs font-semibold text-white" :style="{ background: row.warn ? '#d97706' : 'var(--accent)' }">
          {{ row.name.charAt(0) }}
        </span>
        <span class="flex-1 min-w-0">
          <span class="block text-sm font-medium text-gray-900 dark:text-white truncate">{{ row.name }}</span>
          <span class="block text-xs text-gray-500 dark:text-gray-400">{{ $t('platform.scenes.invoicing.nights', { n: row.nights }, row.nights) }}</span>
        </span>
        <span class="text-sm tabular-nums text-gray-700 dark:text-gray-200">{{ row.amount }}</span>
        <span
          class="ht-pop text-xs font-medium rounded-full px-2 py-0.5"
          :class="row.warn ? 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300'"
          :style="{ '--d': `${0.6 + i * 0.18}s` }"
        >
          {{ row.warn ? $t('platform.scenes.invoicing.missing_tax_id') : $t('platform.scenes.invoicing.invoiced') }}
        </span>
      </li>
    </ul>

    <div class="grid grid-cols-2 gap-3 mt-5">
      <div
        v-for="(file, i) in files"
        :key="file.name"
        class="ht-pop flex items-center gap-3 rounded-xl border border-dashed p-3"
        :style="{ '--d': `${1.5 + i * 0.2}s`, borderColor: 'color-mix(in srgb, var(--accent) 50%, transparent)' }"
      >
        <UIcon :name="file.icon" class="w-7 h-7 shrink-0" :style="{ color: 'var(--accent)' }" />
        <span class="min-w-0">
          <span class="block text-xs font-medium text-gray-900 dark:text-white truncate">{{ file.name }}</span>
          <span class="block text-[11px] text-gray-500 dark:text-gray-400">{{ file.size }}</span>
        </span>
      </div>
    </div>

    <div class="ht-rise mt-3 sm:mt-0 sm:absolute sm:right-6 sm:bottom-6 flex items-center gap-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-3 py-2 text-xs shadow-lg" style="--d: 2.4s">
      <UIcon name="i-heroicons-envelope" class="w-4 h-4 shrink-0" />
      {{ $t('platform.scenes.invoicing.toast') }}
    </div>
  </PlatformWindow>
</template>

<script setup lang="ts">
import PlatformWindow from '../PlatformWindow.vue'

const rows = [
  { name: 'Laura Martín', nights: 3, amount: '264,00 €' },
  { name: 'Thomas Weber', nights: 2, amount: '178,00 €' },
  { name: 'Viajes Duero S.L.', nights: 5, amount: '640,00 €', warn: true },
  { name: 'Akira Sato', nights: 1, amount: '92,00 €' }
]

const files = [
  { name: 'invoices-2026-Q3.zip', size: '186 PDF', icon: 'i-heroicons-archive-box-arrow-down' },
  { name: 'summary-2026-Q3.csv', size: 'CSV', icon: 'i-heroicons-table-cells' }
]
</script>
