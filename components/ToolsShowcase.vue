<template>
  <div class="bg-white dark:bg-gray-900 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Nuestras Herramientas
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Descubre las herramientas que van a revolucionar la gestión de tu hotel
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
              <h4 class="text-sm font-medium text-gray-900 dark:text-white">
                Características principales:
              </h4>
              <ul class="space-y-1">
                <li 
                  v-for="feature in tool.features.slice(0, 3)"
                  :key="feature"
                  class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {{ feature }}
                </li>
                <li 
                  v-if="tool.features.length > 3"
                  class="text-sm text-gray-500 dark:text-gray-400"
                >
                  +{{ tool.features.length - 3 }} características más
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
                Usar Ahora
              </UButton>
              
              <UButton
                v-else-if="tool.status === 'beta'"
                color="orange"
                class="flex-1"
                @click="requestBetaAccess(tool)"
              >
                <UIcon name="i-heroicons-flask" class="w-4 h-4 mr-2" />
                Beta
              </UButton>
              
              <UButton
                v-else
                color="gray"
                variant="outline"
                class="flex-1"
                disabled
              >
                <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-2" />
                Próximamente
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
            ¿Necesitas una herramienta personalizada?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Contacta con nosotros para desarrollar soluciones específicas para tu hotel
          </p>
          <UButton
            color="primary"
            size="lg"
            to="/contact"
          >
            <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="w-5 h-5 mr-2" />
            Contactar
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tool } from '~/types'

const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'chrome-extension', name: 'Extensiones Chrome' },
  { id: 'automation', name: 'Automatizaciones' }
]

const tools: Tool[] = [
  {
    id: 'chrome-ui-enhancer',
    name: 'UI Enhancer',
    description: 'Mejora la interfaz de Little Hotelier con tablas a ancho completo y mejor visualización.',
    category: 'chrome-extension',
    features: [
      'Tablas a ancho completo',
      'Eliminación del scroll horizontal',
      'Precios visibles en calendario',
      'Interfaz más limpia y funcional'
    ],
    icon: 'i-heroicons-computer-desktop',
    status: 'available'
  },
  {
    id: 'booking-commission-calculator',
    name: 'Calculadora de Comisiones',
    description: 'Calcula automáticamente las comisiones de Booking.com en cada reserva.',
    category: 'chrome-extension',
    features: [
      'Cálculo automático de comisiones',
      'Información en tiempo real',
      'Análisis de rentabilidad',
      'Historial de comisiones'
    ],
    icon: 'i-heroicons-calculator',
    status: 'available'
  },
  {
    id: 'auto-checkout',
    name: 'Check-out Automático',
    description: 'Marca automáticamente las reservas como check-out al finalizar la fecha.',
    category: 'automation',
    features: [
      'Check-out automático',
      'Programación de tareas',
      'Notificaciones de estado',
      'Logs de actividad'
    ],
    icon: 'i-heroicons-calendar-days',
    status: 'beta'
  },
  {
    id: 'payment-validator',
    name: 'Validador de Pagos',
    description: 'Revisa que todas las reservas estén completamente pagadas.',
    category: 'automation',
    features: [
      'Verificación automática de pagos',
      'Alertas de pagos pendientes',
      'Reportes de estado financiero',
      'Integración con contabilidad'
    ],
    icon: 'i-heroicons-credit-card',
    status: 'beta'
  },
  {
    id: 'reservation-monitor',
    name: 'Monitor de Reservas',
    description: 'Monitorea reservas web incompletas y notifica problemas de pago.',
    category: 'automation',
    features: [
      'Detección de reservas incompletas',
      'Notificaciones por email',
      'Dashboard de seguimiento',
      'Recuperación de reservas perdidas'
    ],
    icon: 'i-heroicons-shield-check',
    status: 'available'
  },
  {
    id: 'invoice-manager',
    name: 'Gestor de Facturas',
    description: 'Gestiona facturas automáticamente y verifica campos obligatorios.',
    category: 'automation',
    features: [
      'Descarga masiva de facturas',
      'Validación de campos obligatorios',
      'Resúmenes automáticos',
      'Notificaciones de campos faltantes'
    ],
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
    case 'available': return 'Disponible'
    case 'beta': return 'Beta'
    case 'coming-soon': return 'Próximamente'
    default: return 'Desconocido'
  }
}

function openTool(tool: Tool) {
  // TODO: Implement tool opening logic
  console.log('Opening tool:', tool.name)
  // This would redirect to the tool's specific page or download link
}

function requestBetaAccess(tool: Tool) {
  // TODO: Implement beta access request
  console.log('Requesting beta access for:', tool.name)
  // This would open a modal or redirect to a form
}

function openDocumentation(tool: Tool) {
  // TODO: Implement documentation opening
  console.log('Opening documentation for:', tool.name)
  // This would open the documentation page
}
</script>
