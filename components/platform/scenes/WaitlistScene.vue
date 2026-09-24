<template>
  <PlatformWindow path="/availability-watch">
    <div class="rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 p-4">
      <div class="flex items-center justify-between gap-3 mb-4">
        <span>
          <span class="block text-sm font-medium text-gray-900 dark:text-white">Ana Ribeiro</span>
          <span class="block text-xs text-gray-500 dark:text-gray-400">{{ $t('platform.scenes.waitlist.watching', { n: nights.length }) }}</span>
        </span>
        <UIcon name="i-heroicons-eye" class="w-5 h-5" :style="{ color: 'var(--accent)' }" />
      </div>

      <div class="grid grid-cols-4 gap-2">
        <div v-for="(night, i) in nights" :key="i" class="relative h-20 rounded-lg overflow-hidden text-center">
          <!-- Full at first, then each night frees up in turn -->
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300">
            <span class="text-[11px] capitalize">{{ night }}</span>
            <span class="text-xs font-semibold">{{ $t('platform.scenes.waitlist.full') }}</span>
          </div>
          <div class="ht-fade absolute inset-0 flex flex-col items-center justify-center text-white" :style="{ background: 'var(--accent)', '--d': `${0.8 + i * 0.45}s` }">
            <span class="text-[11px] capitalize opacity-90">{{ night }}</span>
            <span class="text-xs font-semibold">{{ $t('platform.scenes.waitlist.free') }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="ht-rise mt-4 flex items-start gap-3 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 p-3 shadow-lg" style="--d: 2.8s">
      <span class="w-8 h-8 rounded-full grid place-items-center bg-green-600 text-white text-xs font-bold shrink-0">W</span>
      <span class="text-xs leading-relaxed">{{ $t('platform.scenes.waitlist.toast') }}</span>
    </div>
  </PlatformWindow>
</template>

<script setup lang="ts">
import PlatformWindow from '../PlatformWindow.vue'

const { locale } = useI18n()

const nights = computed(() => {
  const fmt = new Intl.DateTimeFormat(locale.value, { weekday: 'short', day: 'numeric', timeZone: 'UTC' })
  return [0, 1, 2, 3].map(i => fmt.format(new Date(Date.UTC(2026, 9, 12 + i))))
})
</script>
