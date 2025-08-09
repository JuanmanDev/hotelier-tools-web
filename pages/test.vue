<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Search Test Page</h1>
    
    <!-- Test Search Modal Button -->
    <div class="mb-8">
      <UButton @click="testModalOpen = true" size="lg" icon="i-heroicons-magnifying-glass">
        Test Search Modal
      </UButton>
    </div>

    <!-- Manual Test Search -->
    <UCard class="mb-8">
      <template #header>
        <h2 class="text-xl font-semibold">Manual Search Test</h2>
      </template>
      <div class="space-y-4">
        <UInput 
          v-model="testQuery" 
          placeholder="Type to search..."
          @input="performTestSearch"
        />
        <div v-if="testResults.length > 0" class="space-y-2">
          <h3 class="font-medium">Results ({{ testResults.length }}):</h3>
          <div 
            v-for="(result, index) in testResults" 
            :key="index"
            class="p-3 border rounded cursor-pointer hover:bg-gray-50"
            @click="navigateToTestResult(result)"
          >
            <h4 class="font-medium">{{ result.title }}</h4>
            <p class="text-sm text-gray-600">{{ result.description }}</p>
            <p class="text-xs text-gray-400">{{ result.url }} ({{ result.type }})</p>
          </div>
        </div>
        <div v-else-if="testQuery" class="text-gray-500">
          No results found for "{{ testQuery }}"
        </div>
      </div>
    </UCard>

    <!-- API Test -->
    <UCard class="mb-8">
      <template #header>
        <h2 class="text-xl font-semibold">API Test</h2>
      </template>
      <div class="space-y-4">
        <UButton @click="testAPI" variant="outline">Test API</UButton>
        <div v-if="apiResponse">
          <h3 class="font-medium mb-2">API Response:</h3>
          <pre class="text-sm bg-gray-100 p-4 rounded overflow-auto max-h-64">{{ JSON.stringify(apiResponse, null, 2) }}</pre>
        </div>
      </div>
    </UCard>

    <!-- Test Modal -->
    <UModal v-model="testModalOpen">
        
    <UButton label="Open" color="neutral" variant="subtle" />
        <template #content>
        <div class="p-6">
            <h2 class="text-xl font-bold mb-4">Test Search Modal</h2>
            <UInput
            ref="testSearchInput"
            v-model="modalQuery"
            placeholder="Search here..."
            size="lg"
            class="mb-4"
            @input="searchInModal"
            />
            
            <div v-if="modalResults.length > 0" class="space-y-2">
            <div 
                v-for="(result, index) in modalResults" 
                :key="index"
                class="p-3 border rounded cursor-pointer hover:bg-gray-50"
                @click="selectModalResult(result)"
            >
                <h4 class="font-medium">{{ result.title }}</h4>
                <p class="text-sm text-gray-600">{{ result.description }}</p>
            </div>
            </div>
            
            <div v-else-if="modalQuery" class="text-gray-500 text-center py-4">
            No results found
            </div>
            
            <div v-else class="text-gray-400 text-center py-4">
            Start typing to search...
            </div>
        </div>
        </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
// Test data
const testData = [
  {
    title: 'Home Page',
    description: 'Main landing page with hotel management tools',
    url: '/',
    type: 'page'
  },
  {
    title: 'Tools Overview',
    description: 'Available tools to optimize your hotel management',
    url: '/tools',
    type: 'page'
  },
  {
    title: 'Chrome UI Enhancer',
    description: 'Enhance Little Hotelier interface with better UI components',
    url: '/tools/ui',
    type: 'tool'
  },
  {
    title: 'Auto Checkout Bot',
    description: 'Automated checkout process for hotel reservations',
    url: '/tools/bot/checkout',
    type: 'bot'
  },
  {
    title: 'Payment Validator',
    description: 'Validate and process hotel payments automatically',
    url: '/tools/bot/payments',
    type: 'bot'
  },
  {
    title: 'Documentation',
    description: 'Complete documentation about all tools and features',
    url: '/documentation',
    type: 'page'
  },
  {
    title: 'Contact Support',
    description: 'Get in touch with our support team',
    url: '/contact',
    type: 'page'
  }
]

// Reactive state
const testQuery = ref('')
const testResults = ref([])
const apiResponse = ref(null)
const testModalOpen = ref(false)
const modalQuery = ref('')
const modalResults = ref([])
const testSearchInput = ref(null)

// Search function
const performTestSearch = () => {
  if (!testQuery.value.trim()) {
    testResults.value = []
    return
  }

  const query = testQuery.value.toLowerCase()
  testResults.value = testData.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  )
}

// Modal search function
const searchInModal = () => {
  if (!modalQuery.value.trim()) {
    modalResults.value = []
    return
  }

  const query = modalQuery.value.toLowerCase()
  modalResults.value = testData.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  )
}

// Navigate to result
const navigateToTestResult = (result) => {
  console.log('Navigating to:', result.url)
  navigateTo(result.url)
}

// Select modal result
const selectModalResult = (result) => {
  console.log('Selected:', result.title)
  testModalOpen.value = false
  navigateTo(result.url)
}

// Test API
const testAPI = async () => {
  try {
    console.log('Testing API...')
    const response = await $fetch('/api/generate-search-data', {
      query: { locale: 'en' }
    })
    apiResponse.value = response
    console.log('API Response:', response)
  } catch (error) {
    console.error('API Error:', error)
    apiResponse.value = { error: error.message || 'Unknown error' }
  }
}

// Focus input when modal opens
watch(testModalOpen, (isOpen) => {
  if (isOpen) {
    nextTick(() => {
      // Try to focus the native input inside UInput
      const el = (testSearchInput.value?.input as HTMLInputElement)
        || (testSearchInput.value?.$el?.querySelector?.('input') as HTMLInputElement)
      el?.focus()
    })
  }
})

// Page meta
definePageMeta({
  title: 'Search Test',
  description: 'Test page for search functionality'
})
</script>
