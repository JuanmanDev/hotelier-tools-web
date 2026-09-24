<template>
  <PlatformWindow path="/cron">
    <ul class="divide-y divide-gray-100 dark:divide-gray-800">
      <li v-for="(job, i) in jobs" :key="job.key" class="ht-rise flex items-center gap-3 py-3" :style="{ '--d': `${0.15 + i * 0.2}s` }">
        <span class="w-8 h-8 rounded-lg grid place-items-center shrink-0" :style="{ background: 'color-mix(in srgb, var(--accent) 14%, transparent)', color: 'var(--accent)' }">
          <UIcon :name="job.icon" class="w-4 h-4" />
        </span>
        <span class="flex-1 min-w-0">
          <span class="block text-sm font-medium text-gray-900 dark:text-white truncate">{{ $t(`platform.scenes.automations.jobs.${job.key}`) }}</span>
          <span class="block text-xs text-gray-500 dark:text-gray-400">{{ $t(`platform.scenes.automations.schedule.${job.schedule}`) }}</span>
        </span>
        <span v-if="!job.paused" class="ht-pop flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400" :style="{ '--d': `${0.8 + i * 0.25}s` }">
          <UIcon name="i-heroicons-check-circle" class="w-4 h-4" />{{ $t('platform.scenes.automations.ok') }}
        </span>
      </li>
    </ul>

    <div class="ht-rise mt-3 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10 p-3" style="--d: 2.1s">
      <UIcon name="i-heroicons-pause-circle" class="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
      <span class="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">{{ $t('platform.scenes.automations.paused') }}</span>
    </div>
  </PlatformWindow>
</template>

<script setup lang="ts">
import PlatformWindow from '../PlatformWindow.vue'

const jobs = [
  { key: 'checks', schedule: 'hourly', icon: 'i-heroicons-shield-check' },
  { key: 'invoices', schedule: 'every15', icon: 'i-heroicons-document-text' },
  { key: 'competitors', schedule: 'daily', icon: 'i-heroicons-chart-bar' },
  { key: 'report', schedule: 'monthly', icon: 'i-heroicons-map' }
]
</script>
