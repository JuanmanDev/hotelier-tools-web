<template>
  <div class="ht-scene relative h-full min-h-[27rem] rounded-2xl bg-white dark:bg-gray-900 ring-1 ring-gray-900/10 dark:ring-white/10 shadow-[0_30px_60px_-30px_rgba(30,41,90,0.45)] overflow-hidden flex flex-col">
    <div class="flex items-center gap-3 px-4 h-10 border-b border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-950/60">
      <img src="/favicon.svg" alt="" class="w-4 h-4 opacity-80" aria-hidden="true">
      <div class="flex-1 min-w-0 text-xs text-gray-500 dark:text-gray-400 truncate">
        <span class="text-gray-400 dark:text-gray-500">dashboard.hotelier.tools</span><span class="text-gray-700 dark:text-gray-200">{{ path }}</span>
      </div>
    </div>
    <div class="relative flex-1 p-4 sm:p-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ path: string }>()
</script>
