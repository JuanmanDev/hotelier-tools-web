<template>
  <UModal v-model:open="internalIsOpen" :transition="false">
    <template #content>
      <div class="p-0" @keydown.esc="closeSearch">
        <!-- Search Header -->
        <div class="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
          <UIcon name="i-heroicons-magnifying-glass" class="h-5 w-5 text-gray-400" />
          <UInput
            ref="searchInput"
            v-model="searchQuery"
            :placeholder="$t('search.placeholder')"
            variant="none"
            size="lg"
            class="flex-1"
            :ui="{ base: 'focus:ring-0 focus:outline-none border-0' }"
            @keydown.down.prevent="highlightNext"
            @keydown.up.prevent="highlightPrevious"
            @keydown.enter.prevent="selectHighlighted"
          />
          <UKbd v-if="showShortcutHint" class="hidden lg:inline-flex ml-2">
            {{ shortcutLabel }}
          </UKbd>
        </div>

        <!-- Search Results -->
        <div class="max-h-96 overflow-y-auto">
          <!-- Loading State -->
          <div v-if="isLoading" class="p-4 text-center">
            <UIcon name="i-heroicons-arrow-path" class="h-6 w-6 animate-spin text-gray-400 mx-auto" />
            <p class="text-sm text-gray-500 mt-2">{{ $t('search.loading') }}</p>
          </div>

          <!-- No Results -->
          <div v-else-if="searchQuery && searchResults.length === 0" class="p-8 text-center">
            <UIcon name="i-heroicons-magnifying-glass" class="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p class="text-gray-500">{{ $t('search.noResults') }}</p>
            <p class="text-sm text-gray-400 mt-1">{{ $t('search.tryDifferent') }}</p>
          </div>

          <!-- Search Results List -->
          <div v-else-if="searchResults.length > 0" ref="resultsContainer">
            <div
              v-for="(result, index) in searchResults"
              :key="`${result.url}-${result.language}`"
              @click="navigateToResult(result)"
              @mouseenter="highlightedIndex = index"
              :class="[
                'p-4 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0 transition-colors',
                highlightedIndex === index
                  ? 'bg-primary-50 dark:bg-primary-900/20'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              ]"
            >
              <div class="flex items-start gap-3">
                <!-- Type Icon -->
                <div class="flex-shrink-0 mt-1">
                  <UIcon
                    :name="getTypeIcon(result.type)"
                    :class="[
                      'h-5 w-5',
                      getTypeColor(result.type)
                    ]"
                  />
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <h3 class="font-medium text-gray-900 dark:text-white truncate">
                    {{ result.title }}
                  </h3>
                  <p v-if="result.description" class="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                    {{ result.description }}
                  </p>
                  <div class="flex items-center gap-2 mt-2">
                    <UBadge
                      :color="getTypeBadgeColor(result.type)"
                      variant="soft"
                      size="xs"
                    >
                      {{ $t(`search.types.${result.type}`) }}
                    </UBadge>
                    <span class="text-xs text-gray-400">{{ result.url }}</span>
                  </div>
                </div>

                <!-- Enter Arrow -->
                <div v-if="highlightedIndex === index" class="flex-shrink-0">
                  <UIcon name="i-heroicons-arrow-right" class="h-4 w-4 text-primary-500" />
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State (no search query) -->
          <div v-else class="p-8 text-center">
            <UIcon name="i-heroicons-command-line" class="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p class="text-gray-500 mb-2">{{ $t('search.welcome') }}</p>
            <p class="text-sm text-gray-400">{{ $t('search.hint') }}</p>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="searchResults.length > 0" class="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div class="flex items-center justify-between text-xs text-gray-500">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-1">
                <UKbd size="xs">↑↓</UKbd>
                <span>{{ $t('search.navigate') }}</span>
              </div>
              <div class="flex items-center gap-1">
                <UKbd size="xs">↵</UKbd>
                <span>{{ $t('search.select') }}</span>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <UKbd size="xs">esc</UKbd>
              <span>{{ $t('search.close') }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const {
  isSearchOpen,
  searchQuery,
  searchResults,
  isLoading,
  closeSearch,
  navigateToResult
} = useSearch()

const shortcutLabel = ref('')

// Internal reactive model for UModal
const internalIsOpen = computed({
  get: () => isSearchOpen.value,
  set: (value) => {
    if (!value) {
      closeSearch()
    }
  }
})

// Search input reference
const searchInput = ref<HTMLInputElement>()
const resultsContainer = ref<HTMLElement>()

// Highlighted result for keyboard navigation
const highlightedIndex = ref(-1)

// Reset highlighted index when search results change
watch(searchResults, () => {
  highlightedIndex.value = -1
})

// Keyboard navigation
const highlightNext = () => {
  if (searchResults.value.length === 0) return
  highlightedIndex.value = Math.min(highlightedIndex.value + 1, searchResults.value.length - 1)
  scrollToHighlighted()
}

const highlightPrevious = () => {
  if (searchResults.value.length === 0) return
  highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
  scrollToHighlighted()
}

const selectHighlighted = () => {
  if (highlightedIndex.value >= 0 && searchResults.value[highlightedIndex.value]) {
    navigateToResult(searchResults.value[highlightedIndex.value])
  }
}

const scrollToHighlighted = () => {
  nextTick(() => {
    const container = resultsContainer.value
    if (!container) return
    
    const highlightedElement = container.children[highlightedIndex.value] as HTMLElement
    if (!highlightedElement) return
    
    highlightedElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  })
}

// Detect keyboard type and log shortcut
const showShortcutHint = ref(true)

onMounted(() => {
  // Detect if device has a physical keyboard
  const isTouchOnly = 'ontouchstart' in window && !window.matchMedia('(pointer:fine)').matches
  showShortcutHint.value = !isTouchOnly
  if (showShortcutHint.value) {
    const isMac = navigator.platform.toLowerCase().includes('mac')
    shortcutLabel.value = isMac ? '⌘K' : 'Ctrl+K'
  }
  
  // Attach global keyboard shortcut to open search
  const handleShortcut = (e: KeyboardEvent) => {
    const isMac = navigator.platform.toLowerCase().includes('mac')
    if (
      ((isMac && e.metaKey && e.key.toLowerCase() === 'k') ||
      (!isMac && e.ctrlKey && e.key.toLowerCase() === 'k')) &&
      !isSearchOpen.value
    ) {
      e.preventDefault()
      isSearchOpen.value = true
    }
  }
  window.addEventListener('keydown', handleShortcut)
  // Clean up
  onUnmounted(() => {
    window.removeEventListener('keydown', handleShortcut)
  })
})

// Utility functions for styling
const getTypeIcon = (type: string): string => {
  const icons = {
    page: 'i-heroicons-document-text',
    bot: 'i-heroicons-cpu-chip',
    tool: 'i-heroicons-wrench-screwdriver'
  }
  return icons[type as keyof typeof icons] || 'i-heroicons-document-text'
}

const getTypeColor = (type: string): string => {
  const colors = {
    page: 'text-blue-500',
    bot: 'text-purple-500',
    tool: 'text-green-500'
  }
  return colors[type as keyof typeof colors] || 'text-gray-500'
}

const getTypeBadgeColor = (type: string): string => {
  const colors = {
    page: 'blue',
    bot: 'purple',
    tool: 'green'
  }
  return colors[type as keyof typeof colors] || 'gray'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>