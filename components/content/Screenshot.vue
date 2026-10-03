<template>
  <figure class="ht-shot not-prose my-8" :class="mobile ? 'max-w-xs mx-auto' : ''">
    <a :href="src" target="_blank" rel="noopener" class="block overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 shadow-lg bg-white dark:bg-gray-900" :class="mobile ? 'rounded-[2rem] p-2 bg-gray-900 dark:bg-gray-800' : 'rounded-xl'">
      <div v-if="!mobile" class="flex items-center gap-1.5 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" aria-hidden="true">
        <span class="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span class="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span class="ml-3 flex-1 truncate rounded-md bg-white dark:bg-gray-900 px-2 py-0.5 text-[11px] text-gray-500 dark:text-gray-400">{{ urlLabel }}</span>
      </div>
      <img
        :src="src"
        :alt="alt"
        :width="width ?? (mobile ? 780 : 1440)"
        :height="height ?? (mobile ? 1688 : 900)"
        loading="lazy"
        decoding="async"
        class="block w-full h-auto"
        :class="mobile ? 'rounded-[1.6rem]' : ''"
      >
    </a>
    <figcaption v-if="caption || $slots.default" class="mt-3 text-sm text-center text-gray-600 dark:text-gray-400">
      <slot>{{ caption }}</slot>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
// Framed screenshot of the demo for articles: ::screenshot{src="/images/blog/demo/en/x.webp" alt="..." caption="..." path="/invoices"}
const props = defineProps<{
  src: string
  alt: string
  caption?: string
  /** Dashboard page shown in the fake address bar */
  path?: string
  mobile?: boolean
  width?: number | string
  height?: number | string
}>()

const urlLabel = computed(() => `demo.hotelier.tools${props.path ?? ''}`)
</script>
