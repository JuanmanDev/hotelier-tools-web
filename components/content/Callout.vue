<template>
  <aside class="ht-callout not-prose my-6 flex gap-3 rounded-xl p-4 ring-1" :class="tone.box" :role="type === 'warning' ? 'note' : undefined">
    <UIcon :name="tone.icon" class="w-5 h-5 shrink-0 mt-0.5" :class="tone.iconClass" />
    <div class="min-w-0 text-[0.95rem] leading-relaxed text-gray-800 dark:text-gray-200 [&_p]:my-1 [&_a]:underline [&_a]:underline-offset-2 [&_code]:text-[0.85em] [&_code]:px-1 [&_code]:rounded [&_code]:bg-black/5 dark:[&_code]:bg-white/10">
      <p v-if="title" class="font-semibold text-gray-900 dark:text-white">{{ title }}</p>
      <slot />
    </div>
  </aside>
</template>

<script setup lang="ts">
// Highlighted note inside an article: ::callout{type="tip" title="..."}
const props = withDefaults(defineProps<{
  type?: 'tip' | 'info' | 'warning' | 'note'
  title?: string
}>(), { type: 'info' })

const tones = {
  tip: { icon: 'i-heroicons-light-bulb', iconClass: 'text-emerald-600 dark:text-emerald-400', box: 'bg-emerald-50 ring-emerald-200 dark:bg-emerald-950/40 dark:ring-emerald-900' },
  info: { icon: 'i-heroicons-information-circle', iconClass: 'text-sky-600 dark:text-sky-400', box: 'bg-sky-50 ring-sky-200 dark:bg-sky-950/40 dark:ring-sky-900' },
  warning: { icon: 'i-heroicons-exclamation-triangle', iconClass: 'text-amber-600 dark:text-amber-400', box: 'bg-amber-50 ring-amber-200 dark:bg-amber-950/40 dark:ring-amber-900' },
  note: { icon: 'i-heroicons-pencil-square', iconClass: 'text-gray-500 dark:text-gray-400', box: 'bg-gray-50 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800' }
}

const tone = computed(() => tones[props.type] ?? tones.info)
</script>
