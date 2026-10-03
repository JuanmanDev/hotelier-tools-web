<template>
  <div class="ht-prompt not-prose my-6 rounded-2xl ring-1 ring-violet-200 dark:ring-violet-900 bg-violet-50/70 dark:bg-violet-950/30 p-4">
    <div class="flex items-center justify-between gap-3 mb-2">
      <span class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300">
        <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="w-4 h-4" />
        {{ label || t('blog.prompt_label') }}
      </span>
      <button
        type="button"
        class="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/50"
        @click="copy"
      >
        <UIcon :name="copied ? 'i-heroicons-check' : 'i-heroicons-clipboard-document'" class="w-4 h-4" />
        {{ copied ? t('blog.copied') : t('blog.copy') }}
      </button>
    </div>
    <div ref="body" class="text-gray-900 dark:text-gray-100 leading-relaxed [&_p]:my-0">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Example request to type into an AI assistant: ::prompt{label="Claude"}
defineProps<{ label?: string }>()

const { t } = useI18n()
const body = ref<HTMLElement>()
const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(body.value?.innerText.trim() ?? '')
    copied.value = true
    setTimeout(() => { copied.value = false }, 1600)
  } catch {
    // Clipboard blocked by the browser: the reader can still select the text
  }
}
</script>
