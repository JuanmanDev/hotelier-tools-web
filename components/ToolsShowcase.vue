<template>
  <div class="bg-white dark:bg-gray-900 py-16 lg:py-24">
    <div class="max-w-[100vw] overflow-hidden">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('tools.showcase.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ t('tools.showcase.subtitle') }}
        </p>
      </div>

      <!-- Tools Carousel -->
      <UCarousel
        ref="carouselRef"
        v-slot="{ item: tool }"
        :items="tools"
        :ui="{ 
          item: 'basis-100 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/4 3xl:basis-1/5 4xl:basis-1/6 5xl:basis-1/7 6xl:basis-1/8',
          container: 'gap-0'
        }"
        loop
        arrows
        infinite
        class="w-full relative max-w-[170rem] mx-auto"
        @mouseenter="pauseAutoScroll"
        @mouseleave="resumeAutoScroll"
        :prev="{className:'font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm gap-1.5 ring ring-inset ring-accented text-default bg-default hover:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted p-1.5 transform z-10 absolute rounded-full left-2 top-1/2 '}"
        :next="{className:'font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm gap-1.5 ring ring-inset ring-accented text-default bg-default hover:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted p-1.5 transform z-10 absolute rounded-full right-2 top-1/2 '}"
      >
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 h-full w-2lg">
          <!-- Tool Header -->
          <div class="p-6 pb-4">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <UIcon :name="tool.icon" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {{ tool.name }}
                  </h3>
                  <UBadge 
                    :color="getStatusColor(tool.status)"
                    variant="soft"
                    size="sm"
                  >
                    {{ getStatusText(tool.status) }}
                  </UBadge>
                </div>
              </div>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {{ tool.description }}
            </p>

            <!-- Features List -->
            <div class="space-y-2">
              <ul class="space-y-1">
                <li 
                  v-for="feature in tool.features.slice(0, 3)"
                  :key="feature"
                  class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {{ typeof feature === 'string' 
                    ? feature 
                    : feature?.body?.static || (feature?.body || feature || '') }}
                </li>
                <li 
                  v-if="tool.features.length > 3"
                  class="text-sm text-gray-500 dark:text-gray-400"
                >
                  {{ t('tools.showcase.card.more_features', { count: tool.features.length - 3 }) }}
                </li>
              </ul>
              
            </div>
          </div>

          <!-- Tool Actions -->
          <div class="px-6 pb-6">
            <div class="flex space-x-3">
              <UButton
                v-if="tool.status === 'available'"
                color="primary"
                class="flex-1"
                @click="openTool(tool)"
              >
                <UIcon name="i-heroicons-rocket-launch" class="w-4 h-4 mr-2" />
                {{ t('tools.showcase.card.actions.use_now') }}
              </UButton>
              
              <UButton
                v-else-if="tool.status === 'beta'"
                color="orange"
                class="flex-1"
                @click="requestBetaAccess(tool)"
              >
                <UIcon name="i-heroicons-flask" class="w-4 h-4 mr-2" />
                {{ t('tools.showcase.card.actions.beta') }}
              </UButton>
              
              <UButton
                v-else
                color="gray"
                variant="outline"
                class="flex-1"
                disabled
              >
                <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-2" />
                {{ t('tools.showcase.card.actions.coming_soon') }}
              </UButton>

              <UButton
                v-if="tool.documentation"
                color="gray"
                variant="ghost"
                size="sm"
                @click="openDocumentation(tool)"
              >
                <UIcon name="i-heroicons-document-text" class="w-4 h-4" />
              </UButton>
            </div>
          </div>
        </div>
      </UCarousel>

      <!-- Call to Action -->
      <div class="mt-16 text-center mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ t('tools.showcase.cta.title') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            {{ t('tools.showcase.cta.description') }}
          </p>
          <UButton
            color="primary"
            size="lg"
            :to="localePath('/contact')"
          >
            <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="w-5 h-5 mr-2" />
            {{ t('tools.showcase.cta.button') }}
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { toolsData } from '~/data/tools'

const { t, tm } = useI18n()
const localePath = useLocalePath()

const activeIndex = ref(0)
const carouselRef = ref()
let autoScrollInterval = null
let isHovered = ref(false)

// Auto-scroll configuration
const AUTO_SCROLL_DELAY = 7000 // 7 seconds

// Build tools array using i18n and static data
const tools = toolsData.map(toolData => {
  const translationKey = `tools.showcase.tools.${toolData.id.replace(/-/g, '_')}`
  
  return {
    id: toolData.id,
    name: t(`${translationKey}.name`),
    description: t(`${translationKey}.description`),
    category: toolData.category,
    features: tm(`${translationKey}.features`) || [],
    icon: toolData.icon,
    status: toolData.status,
    linkTo: toolData.linkTo
  }
})

// Auto-scroll functions
function startAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
  
  autoScrollInterval = setInterval(() => {
    if (!isHovered.value && carouselRef.value?.emblaApi) {
      carouselRef.value.emblaApi.scrollNext()
    }
  }, AUTO_SCROLL_DELAY)
}

function stopAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
    autoScrollInterval = null
  }
}

function pauseAutoScroll() {
  isHovered.value = true
}

function resumeAutoScroll() {
  isHovered.value = false
}

// Lifecycle hooks
onMounted(() => {
  nextTick(() => {
    if (carouselRef.value?.emblaApi) {
      // Listen for scroll events to reset the auto-scroll timer
      carouselRef.value.emblaApi.on('select', () => {
        // Reset the auto-scroll interval when scroll changes
        if (!isHovered.value) {
          startAutoScroll()
        }
      })
      
      // Start auto-scroll initially
      startAutoScroll()
    }
  })
})

onUnmounted(() => {
  stopAutoScroll()
})

function getStatusColor(status) {
  switch (status) {
    case 'available': return 'green'
    case 'beta': return 'orange'
    case 'coming-soon': return 'gray'
    default: return 'gray'
  }
}

function getStatusText(status) {
  switch (status) {
    case 'available': return t('tools.showcase.status.available')
    case 'beta': return t('tools.showcase.status.beta')
    case 'coming-soon': return t('tools.showcase.status.coming_soon')
    default: return t('tools.showcase.status.unknown')
  }
}

function openTool(tool) {
  // Use linkTo path if available, otherwise use legacy switch
  if (tool.linkTo) {
    navigateTo(localePath(tool.linkTo));
    return;
  }
  
  // Legacy handling for tools without linkTo
  switch (tool.id) {
    case 'chrome-ui-enhancer':
      navigateTo(localePath('/tools/ui/'));
      break;
    case 'ui-scripts-collection':
      navigateTo(localePath('/tools/ui/'));
      break;
    case 'bot-automations-collection':
      navigateTo(localePath('/tools/bot/'));
      break;
    default:
      console.warn('Unknown tool:', tool);
  }
  console.log('Opening tool:', tool.name)
}

function requestBetaAccess(tool) {
  // go to contact page
  navigateTo(localePath('/contact'));
}

function openDocumentation(tool) {
  // TODO: Implement documentation opening
  console.log('Opening documentation for:', tool.name)
  // This would open the documentation page
}
</script>
