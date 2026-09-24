<template>
  <PlatformWindow path="/">
    <!-- Search everything -->
    <div class="ht-rise flex items-center gap-2 rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 px-3 py-2.5 mb-4" style="--d: 0.1s">
      <UIcon name="i-heroicons-magnifying-glass" class="w-4 h-4 text-gray-400 shrink-0" />
      <span class="typed text-sm text-gray-900 dark:text-white overflow-hidden whitespace-nowrap" :style="{ '--chars': query.length }">{{ query }}</span>
      <span class="caret w-px h-4 bg-gray-900 dark:bg-white" aria-hidden="true" />
      <span class="ml-auto text-[11px] text-gray-400 ring-1 ring-gray-200 dark:ring-gray-700 rounded px-1.5">Ctrl K</span>
    </div>
    <div class="ht-pop rounded-lg px-3 py-2 mb-5 flex items-center gap-2 text-sm" :style="{ '--d': '1.4s', background: 'color-mix(in srgb, var(--accent) 10%, transparent)' }">
      <UIcon name="i-heroicons-bell-alert" class="w-4 h-4 shrink-0" :style="{ color: 'var(--accent)' }" />
      <span class="text-gray-900 dark:text-white">{{ $t('platform.scenes.overview.result') }}</span>
      <UIcon name="i-heroicons-arrow-turn-down-left" class="w-4 h-4 ml-auto text-gray-400" />
    </div>

    <!-- Connections and features at a glance -->
    <div class="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
      <div v-for="(tile, i) in tiles" :key="tile.key" class="ht-rise rounded-xl bg-gray-50 dark:bg-gray-800/60 p-3" :style="{ '--d': `${1.8 + i * 0.12}s` }">
        <span class="flex items-center gap-1.5 text-[11px] text-emerald-700 dark:text-emerald-400 mb-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />{{ $t(`platform.scenes.overview.${tile.state}`) }}
        </span>
        <span class="block text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">{{ tile.label ?? $t(`platform.scenes.overview.${tile.key}`) }}</span>
      </div>
    </div>

    <p class="ht-fade text-xs text-gray-500 dark:text-gray-400 mb-2" style="--d: 2.3s">{{ $t('platform.scenes.overview.arrivals') }}</p>
    <ul class="space-y-1.5">
      <li v-for="(g, i) in arrivals" :key="g.name" class="ht-rise flex items-center gap-3 text-sm" :style="{ '--d': `${2.4 + i * 0.12}s` }">
        <span class="w-7 h-7 rounded-full grid place-items-center text-[11px] font-semibold text-white shrink-0" :style="{ background: 'var(--accent)' }">{{ g.name.charAt(0) }}</span>
        <span class="flex-1 min-w-0 truncate text-gray-900 dark:text-white">{{ g.name }}</span>
        <span class="text-xs text-gray-500 dark:text-gray-400">{{ g.room }}</span>
      </li>
    </ul>
  </PlatformWindow>
</template>

<script setup lang="ts">
import PlatformWindow from '../PlatformWindow.vue'

const { t } = useI18n()
const query = computed(() => t('platform.scenes.overview.query'))

const tiles = [
  { key: 'lh', label: 'Little Hotelier', state: 'connected' },
  { key: 'booking', label: 'Booking.com', state: 'connected' },
  { key: 'tasks', state: 'running' }
]

const arrivals = [
  { name: 'Laura Martín', room: '3' },
  { name: 'Thomas Weber', room: '5' },
  { name: 'Akira Sato', room: '1' }
]
</script>

<style scoped>
/* The query is typed out, then the caret keeps blinking */
.typed {
  animation: typing 0.9s steps(var(--chars), end) 0.3s both;
}
.caret {
  animation: blink 1s step-end infinite;
}
@keyframes typing {
  from { max-width: 0; }
  to { max-width: calc(var(--chars) * 1ch); }
}
@keyframes blink {
  50% { opacity: 0; }
}
</style>
