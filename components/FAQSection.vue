<template>
  <UCard id="faq" class="scroll-mt-24">
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 mr-3 text-amber-600" />
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
            {{ $t('documentation.faq.title') }}
          </h2>
        </div>
      </div>
      
      <!-- Search input -->
      <div class="mt-4">
        <UInput
          v-model="searchQuery"
          :placeholder="$t('documentation.faq.search_placeholder')"
          icon="i-heroicons-magnifying-glass"
          size="lg"
          class="w-full"
        />
      </div>
    </template>

    <!-- No results message -->
    <div
      v-if="filteredFaqItems.length === 0 && searchQuery"
      class="text-center py-8"
    >
      <UIcon name="i-heroicons-exclamation-triangle" class="w-12 h-12 mx-auto text-gray-400 mb-4" />
      <p class="text-gray-500 dark:text-gray-400">{{ $t('documentation.faq.no_results') }}</p>
    </div>

    <UAccordion 
      v-else-if="filteredFaqItems.length > 0"
      :items="filteredFaqItems" 
      type="multiple"
      v-model="opennedItems"
    >
      <template #default="{ item, index, open }">
        <UButton
          color="gray"
          variant="ghost"
          class="border-b border-gray-200 dark:border-gray-700 w-full justify-between"
          :ui="{ rounded: 'rounded-none', padding: { sm: 'p-4' } }"
          :id="'faq-item-' + item.id"
        >
          <div class="flex items-center">
            <UBadge :label="(index + 1).toString()" color="blue" variant="solid" class="mr-3" size="md" />
            <span class="text-left">{{ item.label }}</span>
          </div>
        </UButton>
      </template>

      <template #body="{ item }">
        <div class="p-4 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50">
          <p class="mb-4">{{ item.content }}</p>

          <div v-if="item.links && item.links.length > 0" class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <NuxtLink
              v-for="link in item.links"
              :to="localePath(rt(link.url))"
              :key="link.url"
              class="inline-flex items-center px-3 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-3 h-3 mr-1" />
              {{ rt(link.text) }}
            </NuxtLink>
          </div>
        </div>
      </template>
    </UAccordion>
  </UCard>
</template>

<script setup lang="js">
const { t, tm, rt } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

// Search functionality
const searchQuery = ref('')
const opennedItems = ref([])

// Computed property to get FAQ items from i18n
const faqItems = computed(() => {
  const items = tm('documentation.faq.items')
  if (!items || typeof items !== 'object') return []
  
  return Object.entries(items).map(([key, item]) => ({
    id: key,
    label: rt(item.label),
    content: rt(item.content),
    links: item.links || []
  }))
})


// Filtered FAQ items based on search
const filteredFaqItems = computed(() => {
    
  if (!searchQuery.value) return faqItems.value
  
  const query = searchQuery.value.toLowerCase()
  return faqItems.value.filter(item => 
    item.label.toLowerCase().includes(query) || 
    item.content.toLowerCase().includes(query) ||
    item.id.toLowerCase().includes(query)
  )
})

// Default open items based on URL hash or search results
// const defaultOpenItems = computed(() => {
//   // If there's a search query, open all matching items
//   if (searchQuery.value) {
//     return filteredFaqItems.value.map((_, index) => index)
//   }
  
//   // If there's a hash in the URL, try to open that specific item
//   if (route.hash) {
//     const hashId = route.hash.replace('#', '')
//     const itemIndex = filteredFaqItems.value.findIndex(item => item.id === hashId)
//     return itemIndex >= 0 ? [itemIndex] : []
//   }
  
//   return []
// })

</script>
