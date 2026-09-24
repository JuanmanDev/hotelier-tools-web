<template>
  <PlatformWindow path="/chat">
    <div class="flex flex-col gap-3">
      <div class="ht-rise self-end max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 text-sm text-white" :style="{ background: 'var(--accent)', '--d': '0.2s' }">
        {{ $t('platform.scenes.ai.prompt') }}
      </div>

      <ul class="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
        <li v-for="(step, i) in ['step1', 'step2', 'step3']" :key="step" class="ht-rise flex items-center gap-2" :style="{ '--d': `${0.8 + i * 0.35}s` }">
          <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-emerald-500 shrink-0" />
          {{ $t(`platform.scenes.ai.${step}`) }}
        </li>
      </ul>

      <div class="ht-pop rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-900" style="--d: 2s">
        <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">{{ $t('platform.scenes.ai.card_title') }}</p>
        <p class="font-display text-base font-semibold text-gray-900 dark:text-white">
          <span class="line-through decoration-2 text-gray-400">{{ from }}</span>
          <UIcon name="i-heroicons-arrow-long-right" class="w-4 h-4 mx-1 align-middle" />
          {{ to }}
        </p>
        <p class="text-xs text-gray-600 dark:text-gray-300 mt-1">{{ $t('platform.scenes.ai.card_body') }}</p>
        <div class="flex gap-2 mt-3">
          <span class="rounded-lg px-3 py-1.5 text-xs font-medium text-white bg-emerald-600">{{ $t('platform.scenes.ai.approve') }}</span>
          <span class="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 ring-1 ring-gray-200 dark:ring-gray-700">{{ $t('platform.scenes.ai.reject') }}</span>
        </div>
      </div>
    </div>

    <div class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
      {{ $t('platform.scenes.ai.voice') }}
      <span class="ht-ring w-9 h-9 rounded-full grid place-items-center text-white" :style="{ background: 'var(--accent)', '--d': '0.4s' }">
        <UIcon name="i-heroicons-microphone" class="w-4 h-4" />
      </span>
    </div>
  </PlatformWindow>
</template>

<script setup lang="ts">
import PlatformWindow from '../PlatformWindow.vue'

const { locale } = useI18n()

const range = (a: number, b: number) => {
  const fmt = new Intl.DateTimeFormat(locale.value, { day: 'numeric', month: 'short', timeZone: 'UTC' })
  return fmt.formatRange(new Date(Date.UTC(2026, 9, a)), new Date(Date.UTC(2026, 9, b)))
}
const from = computed(() => range(12, 14))
const to = computed(() => range(14, 16))
</script>
