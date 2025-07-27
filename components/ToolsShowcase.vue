<template>
  <div class="bg-white dark:bg-gray-900 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('tools.showcase.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ t('tools.showcase.subtitle') }}
        </p>
      </div>

      <!-- Tool Categories -->
      <div class="mb-8">
        <div class="flex justify-center">
          <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="selectedCategory = category.id"
              class="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
              :class="{
                'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm': selectedCategory === category.id,
                'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white': selectedCategory !== category.id
              }"
            >
              {{ category.name }}
            </button>
          </div> 
        </div>
      </div>

      <!-- Tools Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="tool in filteredTools"
          :key="tool.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
        >
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
              <!-- <h4 class="text-sm font-medium text-gray-900 dark:text-white">
                {{ t('tools.showcase.card.features') }}
              </h4> -->
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
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center">
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

<script setup lang="ts">
import type { Tool } from '~/types'
import { useI18n } from 'vue-i18n'
import { navigateTo } from 'nuxt/app'

const { t, tm } = useI18n()
const selectedCategory = ref('all')
const localePath = useLocalePath()

const categories = computed(() => [
  { id: 'all', name: t('tools.showcase.categories.all') },
  { id: 'chrome-extension', name: t('tools.showcase.categories.chrome_extension') },
  { id: 'automation', name: t('tools.showcase.categories.automation') }
])

const tools: Tool[] = [
  {
    id: 'chrome-ui-enhancer',
    name: t('tools.showcase.tools.ui_enhancer.name'),
    description: t('tools.showcase.tools.ui_enhancer.description'),
    category: 'chrome-extension',
    // features: t('tools.showcase.tools.ui_enhancer.features', (list: string[]) => list) as any,
    features: tm('tools.showcase.tools.ui_enhancer.features') || [],
    icon: 'i-heroicons-computer-desktop',
    status: 'available'
  },
  {
    id: 'booking-commission-calculator',
    name: t('tools.showcase.tools.commission_calculator.name'),
    description: t('tools.showcase.tools.commission_calculator.description'),
    category: 'chrome-extension',
    // features: t('tools.showcase.tools.commission_calculator.features', (list: string[]) => list) as any,
    features: tm('tools.showcase.tools.commission_calculator.features') || [],
    icon: 'i-heroicons-calculator',
    status: 'available'
  },
  {
    id: 'auto-checkout',
    name: t('tools.showcase.tools.auto_checkout.name'),
    description: t('tools.showcase.tools.auto_checkout.description'),
    category: 'automation',
    // features: t('tools.showcase.tools.auto_checkout.features', (list: string[]) => list) as any,
    features: tm('tools.showcase.tools.commission_calculator.features') || [],
    icon: 'i-heroicons-calendar-days',
    status: 'beta'
  },
  {
    id: 'payment-validator',
    name: t('tools.showcase.tools.payment_validator.name'),
    description: t('tools.showcase.tools.payment_validator.description'),
    category: 'automation',
    // features: t('tools.showcase.tools.payment_validator.features', (list: string[]) => list) as any,
    features: tm('tools.showcase.tools.commission_calculator.features') || [],
    icon: 'i-heroicons-credit-card',
    status: 'beta'
  },
  {
    id: 'reservation-monitor',
    name: t('tools.showcase.tools.reservation_monitor.name'),
    description: t('tools.showcase.tools.reservation_monitor.description'),
    category: 'automation',
    // features: t('tools.showcase.tools.reservation_monitor.features', (list: string[]) => list) as any,
    features: tm('tools.showcase.tools.commission_calculator.features') || [],
    icon: 'i-heroicons-shield-check',
    status: 'available'
  },
  {
    id: 'invoice-manager',
    name: t('tools.showcase.tools.invoice_manager.name'),
    description: t('tools.showcase.tools.invoice_manager.description'),
    category: 'automation',
    // features: t('tools.showcase.tools.invoice_manager.features', (list: string[]) => list) as any,
    features: tm('tools.showcase.tools.commission_calculator.features') || [],
    icon: 'i-heroicons-document-text',
    status: 'coming-soon'
  }
]

const filteredTools = computed(() => {
  if (selectedCategory.value === 'all') {
    return tools
  }
  return tools.filter(tool => tool.category === selectedCategory.value)
})

function getStatusColor(status: string) {
  switch (status) {
    case 'available': return 'green'
    case 'beta': return 'orange'
    case 'coming-soon': return 'gray'
    default: return 'gray'
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'available': return t('tools.showcase.status.available')
    case 'beta': return t('tools.showcase.status.beta')
    case 'coming-soon': return t('tools.showcase.status.coming_soon')
    default: return t('tools.showcase.status.unknown')
  }
}

function openTool(tool: Tool) {
  switch (tool.id) {
    case 'chrome-ui-enhancer':
      navigateTo(localePath('/tools/ui/'));
      break;
    // case 'booking-commission-calculator':
    //   navigateTo('/tools/commission-calculator');
    //   break;
    // case 'auto-checkout':
    //   navigateTo('/tools/auto-checkout');
    //   break;
    // case 'payment-validator':
    //   navigateTo('/tools/payment-validator');
    //   break;
    // case 'reservation-monitor':
    //   navigateTo('/tools/reservation-monitor');
    //   break;
    // case 'invoice-manager':
    //   navigateTo('/tools/invoice-manager');
    //   break;
    default:
      console.warn('Unknown tool:', tool);
  }
  // TODO: Implement tool opening logic
  console.log('Opening tool:', tool.name)
  // This would redirect to the tool's specific page or download link
}

function requestBetaAccess(tool: Tool) {
  // go to contact page
  navigateTo(localePath('/contact'));
}

function openDocumentation(tool: Tool) {
  // TODO: Implement documentation opening
  console.log('Opening documentation for:', tool.name)
  // This would open the documentation page
}
</script>
