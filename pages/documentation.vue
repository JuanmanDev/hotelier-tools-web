<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Documentación de
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Hotelier Tools
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Guías completas, tutoriales y referencias técnicas para aprovechar al máximo 
            nuestras herramientas de gestión hotelera.
          </p>
        </div>
      </div>
    </section>

    <!-- Documentation Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Sidebar Navigation -->
          <div class="lg:col-span-1">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h3 class="font-bold text-gray-900 dark:text-white mb-4">Contenido</h3>
              <nav class="space-y-2">
                <button
                  v-for="section in sections"
                  :key="section.id"
                  @click="activeSection = section.id"
                  class="w-full text-left px-3 py-2 rounded-md text-sm transition-colors"
                  :class="{
                    'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300': activeSection === section.id,
                    'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white': activeSection !== section.id
                  }"
                >
                  {{ section.title }}
                </button>
              </nav>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-3">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <!-- Getting Started -->
              <div v-if="activeSection === 'getting-started'" class="space-y-6">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Comenzando con Hotelier Tools
                </h2>
                
                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Hotelier Tools es un conjunto de herramientas diseñadas específicamente para optimizar 
                    la gestión de hoteles que utilizan Little Hotelier de Siteminder.
                  </p>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    ¿Qué incluye Hotelier Tools?
                  </h3>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                        Extensiones Chrome
                      </h4>
                      <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Mejora de la interfaz de usuario</li>
                        <li>• Calculadora de comisiones</li>
                        <li>• Visualización optimizada de datos</li>
                      </ul>
                    </div>
                    
                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                        Automatizaciones
                      </h4>
                      <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Check-out automático</li>
                        <li>• Validación de pagos</li>
                        <li>• Gestión de facturas</li>
                        <li>• Monitoreo de reservas</li>
                      </ul>
                    </div>
                  </div>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Requisitos del sistema
                  </h3>
                  
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                    <li>• <strong>Para extensiones:</strong> Google Chrome 90 o superior</li>
                    <li>• <strong>Para automatizaciones:</strong> Cuenta activa de Little Hotelier</li>
                    <li>• <strong>Acceso de usuario:</strong> Credenciales con permisos limitados</li>
                    <li>• <strong>Internet:</strong> Conexión estable requerida</li>
                  </ul>

                  <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div class="flex">
                      <UIcon name="i-heroicons-information-circle" class="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                      <div>
                        <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                          ¿Primera vez usando nuestras herramientas?
                        </h4>
                        <p class="text-blue-700 dark:text-blue-300 text-sm">
                          Te recomendamos comenzar con las extensiones Chrome, ya que son más fáciles de instalar 
                          y proporcionan beneficios inmediatos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Chrome Extensions -->
              <div v-if="activeSection === 'chrome-extensions'" class="space-y-6">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Extensiones Chrome
                </h2>

                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Las extensiones Chrome mejoran directamente la interfaz de Little Hotelier en tu navegador, 
                    proporcionando una experiencia de usuario optimizada.
                  </p>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Instalación paso a paso
                  </h3>

                  <div class="space-y-4 mb-8">
                    <div v-for="(step, index) in chromeInstallSteps" :key="index" class="flex items-start">
                      <div class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">{{ index + 1 }}</span>
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ step.title }}</h4>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">{{ step.description }}</p>
                        <div v-if="step.code" class="bg-gray-100 dark:bg-gray-700 rounded p-2 text-sm font-mono">
                          {{ step.code }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Extensiones disponibles
                  </h3>

                  <div class="space-y-6">
                    <div v-for="extension in chromeExtensions" :key="extension.name" class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                      <div class="flex items-start justify-between mb-4">
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ extension.name }}</h4>
                          <p class="text-gray-600 dark:text-gray-300">{{ extension.description }}</p>
                        </div>
                        <UBadge :color="extension.status === 'available' ? 'green' : 'orange'" variant="soft">
                          {{ extension.status === 'available' ? 'Disponible' : 'Beta' }}
                        </UBadge>
                      </div>
                      
                      <h5 class="font-medium text-gray-900 dark:text-white mb-2">Características:</h5>
                      <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <li v-for="feature in extension.features" :key="feature">• {{ feature }}</li>
                      </ul>

                      <UButton size="sm" color="primary" :disabled="extension.status !== 'available'">
                        {{ extension.status === 'available' ? 'Descargar' : 'Solicitar Beta' }}
                      </UButton>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Automations -->
              <div v-if="activeSection === 'automations'" class="space-y-6">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Automatizaciones
                </h2>

                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Las automatizaciones realizan tareas repetitivas en tu hotel de forma automática, 
                    ahorrando tiempo y reduciendo errores humanos.
                  </p>

                  <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                    <div class="flex">
                      <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-yellow-500 mt-0.5 mr-3" />
                      <div>
                        <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                          Importante: Credenciales de acceso
                        </h4>
                        <p class="text-yellow-700 dark:text-yellow-300 text-sm">
                          Para las automatizaciones necesitamos credenciales de acceso limitado a tu cuenta de Little Hotelier. 
                          Estas credenciales solo tendrán los permisos mínimos necesarios para realizar las tareas automatizadas.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Automatizaciones disponibles
                  </h3>

                  <div class="space-y-6">
                    <div v-for="automation in automations" :key="automation.name" class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                      <div class="flex items-start justify-between mb-4">
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ automation.name }}</h4>
                          <p class="text-gray-600 dark:text-gray-300">{{ automation.description }}</p>
                        </div>
                        <UBadge :color="getAutomationStatusColor(automation.status)" variant="soft">
                          {{ getAutomationStatusText(automation.status) }}
                        </UBadge>
                      </div>
                      
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h5 class="font-medium text-gray-900 dark:text-white mb-2">Características:</h5>
                          <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            <li v-for="feature in automation.features" :key="feature">• {{ feature }}</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-gray-900 dark:text-white mb-2">Beneficios:</h5>
                          <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            <li v-for="benefit in automation.benefits" :key="benefit">• {{ benefit }}</li>
                          </ul>
                        </div>
                      </div>

                      <UButton size="sm" color="primary" to="/contact">
                        Solicitar Configuración
                      </UButton>
                    </div>
                  </div>
                </div>
              </div>

              <!-- API Reference -->
              <div v-if="activeSection === 'api'" class="space-y-6">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Referencia API
                </h2>

                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Documentación técnica para desarrolladores que quieran integrar o extender nuestras herramientas.
                  </p>

                  <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-6">
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-2">🚧 En desarrollo</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">
                      La API está actualmente en desarrollo. Contacta con nosotros si necesitas acceso anticipado.
                    </p>
                  </div>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Endpoints previstos
                  </h3>

                  <div class="space-y-4">
                    <div v-for="endpoint in apiEndpoints" :key="endpoint.path" class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div class="flex items-center mb-2">
                        <UBadge :color="getMethodColor(endpoint.method)" variant="solid" size="sm" class="mr-3">
                          {{ endpoint.method }}
                        </UBadge>
                        <code class="text-sm font-mono text-gray-900 dark:text-white">{{ endpoint.path }}</code>
                      </div>
                      <p class="text-gray-600 dark:text-gray-300 text-sm">{{ endpoint.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- FAQ -->
              <div v-if="activeSection === 'faq'" class="space-y-6">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Preguntas Frecuentes
                </h2>

                <UAccordion :items="faqItems" multiple>
                  <template #default="{ item, index, open }">
                    <UButton
                      color="gray"
                      variant="ghost"
                      class="border-b border-gray-200 dark:border-gray-700"
                      :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
                    >
                      <template #leading>
                        <div class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                          <span class="text-blue-600 dark:text-blue-400 text-sm font-semibold">{{ index + 1 }}</span>
                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                          name="i-heroicons-chevron-right-20-solid"
                          class="w-5 h-5 ms-auto transform transition-transform duration-200"
                          :class="[open && 'rotate-90']"
                        />
                      </template>
                    </UButton>
                  </template>

                  <template #item="{ item }">
                    <div class="p-4 text-gray-600 dark:text-gray-300">
                      {{ item.content }}
                    </div>
                  </template>
                </UAccordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Documentación - Hotelier Tools',
  meta: [
    {
      name: 'description',
      content: 'Documentación completa de Hotelier Tools. Guías de instalación, configuración y uso de extensiones Chrome y automatizaciones para Little Hotelier.'
    }
  ]
})

const activeSection = ref('getting-started')

const sections = [
  { id: 'getting-started', title: 'Comenzando' },
  { id: 'chrome-extensions', title: 'Extensiones Chrome' },
  { id: 'automations', title: 'Automatizaciones' },
  { id: 'api', title: 'API Reference' },
  { id: 'faq', title: 'FAQ' }
]

const chromeInstallSteps = [
  {
    title: 'Descarga la extensión',
    description: 'Descarga el archivo .crx desde nuestra página de herramientas',
    code: null
  },
  {
    title: 'Abre las extensiones de Chrome',
    description: 'Navega a la página de extensiones en tu navegador',
    code: 'chrome://extensions/'
  },
  {
    title: 'Activa el modo desarrollador',
    description: 'Habilita el interruptor "Modo de desarrollador" en la esquina superior derecha'
  },
  {
    title: 'Instala la extensión',
    description: 'Arrastra el archivo .crx al navegador o usa "Cargar extensión sin empaquetar"'
  },
  {
    title: 'Configura y activa',
    description: 'Sigue las instrucciones específicas de cada extensión para completar la configuración'
  }
]

const chromeExtensions = [
  {
    name: 'UI Enhancer',
    description: 'Mejora la interfaz de Little Hotelier con tablas optimizadas y mejor visualización',
    features: [
      'Tablas a ancho completo',
      'Eliminación del scroll horizontal',
      'Precios visibles en calendario',
      'Interfaz más limpia'
    ],
    status: 'available'
  },
  {
    name: 'Calculadora de Comisiones',
    description: 'Calcula automáticamente las comisiones de Booking.com en tiempo real',
    features: [
      'Cálculo automático de comisiones',
      'Información en tiempo real',
      'Análisis de rentabilidad',
      'Historial de comisiones'
    ],
    status: 'available'
  }
]

const automations = [
  {
    name: 'Check-out Automático',
    description: 'Marca automáticamente las reservas como check-out al finalizar la fecha',
    features: [
      'Programación automática',
      'Verificación de fechas',
      'Logs de actividad',
      'Notificaciones de estado'
    ],
    benefits: [
      'Ahorra tiempo manual',
      'Reduce errores',
      'Actualización en tiempo real',
      'Historial completo'
    ],
    status: 'beta'
  },
  {
    name: 'Monitor de Reservas',
    description: 'Detecta reservas incompletas y envía notificaciones automáticas',
    features: [
      'Detección automática',
      'Envío de emails',
      'Dashboard de seguimiento',
      'Reportes detallados'
    ],
    benefits: [
      'Recupera reservas perdidas',
      'Mejora la conversión',
      'Respuesta rápida',
      'Seguimiento completo'
    ],
    status: 'available'
  }
]

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/reservations',
    description: 'Obtiene la lista de reservas del hotel'
  },
  {
    method: 'POST',
    path: '/api/checkout',
    description: 'Realiza el check-out automático de una reserva'
  },
  {
    method: 'GET',
    path: '/api/invoices',
    description: 'Obtiene las facturas del hotel'
  },
  {
    method: 'POST',
    path: '/api/notifications',
    description: 'Envía notificaciones personalizadas'
  }
]

const faqItems = [
  {
    label: '¿Cómo actualizo las extensiones Chrome?',
    content: 'Las extensiones se actualizan automáticamente cuando publiquemos nuevas versiones. También puedes forzar una actualización desde chrome://extensions/ haciendo clic en "Actualizar extensiones".'
  },
  {
    label: '¿Qué permisos necesitan las automatizaciones?',
    content: 'Las automatizaciones solo requieren permisos de lectura y escritura limitados en tu cuenta de Little Hotelier. Nunca solicitamos permisos administrativos completos.'
  },
  {
    label: '¿Puedo desactivar una automatización temporalmente?',
    content: 'Sí, puedes pausar cualquier automatización contactando con nuestro soporte. También ofrecemos un panel de control donde puedes gestionar todas tus automatizaciones.'
  },
  {
    label: '¿Las herramientas afectan el rendimiento de Little Hotelier?',
    content: 'No, nuestras herramientas están optimizadas para no afectar el rendimiento. Las extensiones solo modifican la interfaz visual y las automatizaciones funcionan en segundo plano.'
  }
]

function getAutomationStatusColor(status: string) {
  switch (status) {
    case 'available': return 'green'
    case 'beta': return 'orange'
    case 'coming-soon': return 'gray'
    default: return 'gray'
  }
}

function getAutomationStatusText(status: string) {
  switch (status) {
    case 'available': return 'Disponible'
    case 'beta': return 'Beta'
    case 'coming-soon': return 'Próximamente'
    default: return 'Desconocido'
  }
}

function getMethodColor(method: string) {
  switch (method) {
    case 'GET': return 'green'
    case 'POST': return 'blue'
    case 'PUT': return 'orange'
    case 'DELETE': return 'red'
    default: return 'gray'
  }
}
</script>
