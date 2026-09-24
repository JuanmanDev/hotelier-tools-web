<template>
  <PlatformWindow path="/automated-checks">
    <!-- The five moments of a stay, in order -->
    <div class="relative pt-2 pb-8">
      <div class="absolute left-[10%] right-[10%] top-[1.35rem] h-0.5 bg-gray-200 dark:bg-gray-700" />
      <div class="ht-grow-x absolute left-[10%] right-[10%] top-[1.35rem] h-0.5" :style="{ background: 'var(--accent)', '--d': '0.2s' }" />
      <ol class="relative grid grid-cols-5">
        <li v-for="(step, i) in steps" :key="step" class="flex flex-col items-center text-center gap-2">
          <span
            class="ht-pop ht-ring w-7 h-7 rounded-full grid place-items-center text-[11px] font-semibold text-white"
            :style="{ background: 'var(--accent)', '--d': `${0.2 + i * 0.16}s` }"
          >{{ i + 1 }}</span>
          <span class="text-[11px] leading-tight text-gray-600 dark:text-gray-300 px-1">{{ $t(`platform.scenes.checks.steps.${step}`) }}</span>
        </li>
      </ol>
    </div>

    <ul class="space-y-2">
      <li
        v-for="(issue, i) in issues"
        :key="issue.key"
        class="ht-rise flex items-center gap-3 rounded-lg px-3 py-2.5 border"
        :class="issue.severe ? 'border-red-200 bg-red-50 dark:border-red-500/30 dark:bg-red-500/10' : 'border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-800/60'"
        :style="{ '--d': `${1.1 + i * 0.22}s` }"
      >
        <UIcon :name="issue.icon" class="w-5 h-5 shrink-0" :class="issue.severe ? 'text-red-600 dark:text-red-400' : 'text-amber-600 dark:text-amber-400'" />
        <span class="flex-1 min-w-0 text-sm text-gray-900 dark:text-white truncate">{{ $t(`platform.scenes.checks.issues.${issue.key}`) }}</span>
        <span class="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{{ issue.who }}</span>
      </li>
    </ul>

    <p class="ht-fade mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400" style="--d: 2.2s">
      <UIcon name="i-heroicons-envelope-open" class="w-4 h-4" />
      {{ $t('platform.scenes.checks.report') }}
    </p>
  </PlatformWindow>
</template>

<script setup lang="ts">
import PlatformWindow from '../PlatformWindow.vue'

const steps = ['booked', 'before', 'arrival', 'stay', 'checkout']

const issues = [
  { key: 'watchlist', who: 'M. Keller', icon: 'i-heroicons-no-symbol', severe: true },
  { key: 'id', who: 'Thomas Weber', icon: 'i-heroicons-identification' },
  { key: 'balance', who: 'Laura Martín', icon: 'i-heroicons-banknotes' },
  { key: 'room', who: 'Akira Sato', icon: 'i-heroicons-key' }
]
</script>
