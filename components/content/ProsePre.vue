<template>
  <div class="ht-code group relative my-6">
    <div v-if="filename || language" class="flex items-center justify-between gap-3 px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
      <span class="truncate">{{ filename || language }}</span>
    </div>
    <button
      type="button"
      class="absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium bg-white/90 dark:bg-gray-800/90 ring-1 ring-gray-200 dark:ring-gray-700 text-gray-700 dark:text-gray-200 opacity-80 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
      :aria-label="t('blog.copy_code')"
      @click="copy"
    >
      <UIcon :name="copied ? 'i-heroicons-check' : 'i-heroicons-clipboard-document'" class="w-4 h-4" />
      <span>{{ copied ? t('blog.copied') : t('blog.copy') }}</span>
    </button>
    <pre :class="$props.class"><slot /></pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  code: { type: String, default: '' },
  language: { type: String, default: null },
  filename: { type: String, default: null },
  highlights: { type: Array, default: () => [] },
  meta: { type: String, default: null },
  class: { type: String, default: null }
})

const { t } = useI18n()
const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => { copied.value = false }, 1600)
  } catch {
    // Clipboard blocked by the browser: the reader can still select the text
  }
}
</script>

<style>
pre code .line { display: block; }
</style>
