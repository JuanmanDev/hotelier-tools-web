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
            <UCard class="sticky top-24">
              <template #header>
                <h3 class="font-bold text-gray-900 dark:text-white">Contenido</h3>
              </template>
              
              <nav class="space-y-1">
                <UButton
                  v-for="section in sections"
                  :key="section.id"
                  :to="`#${section.id}`"
                  variant="ghost"
                  color="gray"
                  size="sm"
                  class="w-full justify-start"
                  :class="{
                    'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400': activeSection === section.id
                  }"
                  @click="scrollToSection(section.id)"
                >
                  <UIcon :name="section.icon" class="w-4 h-4 mr-2" />
                  {{ section.title }}
                </UButton>
              </nav>
            </UCard>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-3">
            <div class="space-y-8">
              <!-- Getting Started Section -->
              <UCard id="getting-started" class="scroll-mt-24">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-rocket-launch" class="w-6 h-6 mr-3 text-primary-600" />
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                      Comenzando con Hotelier Tools
                    </h2>
                  </div>
                </template>
                
                <div class="prose dark:prose-invert max-w-none">
                  <UAlert
                    icon="i-heroicons-information-circle"
                    color="blue"
                    variant="soft"
                    title="¡Bienvenido!"
                    description="Bienvenido a la documentación completa de Hotelier Tools. Aquí encontrarás toda la información necesaria para comenzar."
                    class="mb-6"
                  />

                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Hotelier Tools es un conjunto de herramientas diseñadas específicamente para optimizar 
                    la gestión de hoteles que utilizan Little Hotelier de Siteminder.
                  </p>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    ¿Qué incluye Hotelier Tools?
                  </h3>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <UCard>
                      <template #header>
                        <div class="flex items-center">
                          <UIcon name="i-heroicons-puzzle-piece" class="w-5 h-5 mr-2 text-blue-600" />
                          <h4 class="font-semibold text-gray-900 dark:text-white">
                            Scripts de mejora web
                          </h4>
                        </div>
                      </template>
                      <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Mejora de la interfaz de usuario</li>
                        <li>• Calculadora de comisiones</li>
                        <li>• Visualización optimizada de datos</li>
                        <li>• Funcionalidades adicionales</li>
                      </ul>
                    </UCard>
                    
                    <UCard>
                      <template #header>
                        <div class="flex items-center">
                          <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5 mr-2 text-green-600" />
                          <h4 class="font-semibold text-gray-900 dark:text-white">
                            Automatizaciones
                          </h4>
                        </div>
                      </template>
                      <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Check-out automático</li>
                        <li>• Validación de pagos</li>
                        <li>• Gestión de facturas</li>
                        <li>• Monitoreo de reservas</li>
                      </ul>
                    </UCard>
                  </div>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Requisitos del sistema
                  </h3>
                  
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                    <li>• <strong>Para scripts de mejora:</strong> Navegador compatible con Tampermonkey (Chrome, Edge, Firefox, Safari y similares)</li>
                    <li>• <strong>Para automatizaciones:</strong> Cuenta activa de Little Hotelier con acceso a reservas de FrontDesk y Direct Booking</li>
                    <li>• <strong>Acceso de usuario:</strong> Correo electrónico y contraseña</li>
                  </ul>

                  <UAlert
                    icon="i-heroicons-device-phone-mobile"
                    color="amber"
                    variant="soft"
                    title="Compatibilidad con dispositivos móviles"
                    class="mb-6"
                  >
                    <template #description>
                      <div class="space-y-2">
                        <p>Los scripts de mejora no funcionan en navegadores móviles estándar como Chrome para Android o Safari para iOS.</p>
                        <p><strong>Alternativa para Android:</strong> Kiwi Browser es compatible con Tampermonkey, aunque su configuración es más compleja.</p>
                      </div>
                    </template>
                  </UAlert>

                  <UAlert
                    icon="i-heroicons-light-bulb"
                    color="blue"
                    variant="soft"
                    title="¿Primera vez usando nuestras herramientas?"
                    description="Te recomendamos comenzar con los scripts de mejora web, ya que son más fáciles de instalar y proporcionan beneficios inmediatos."
                  />
                </div>
              </UCard>

              <!-- Browser Extensions Section -->
              <UCard id="chrome-extensions" class="scroll-mt-24">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-puzzle-piece" class="w-6 h-6 mr-3 text-blue-600" />
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                      Scripts de mejora web
                    </h2>
                  </div>
                </template>

                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Los scripts de mejora web optimizan directamente la interfaz de Little Hotelier en tu navegador, 
                    proporcionando una experiencia de usuario mejorada y funcionalidades adicionales.
                  </p>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Compatibilidad de navegadores
                  </h3>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <UCard>
                      <template #header>
                        <div class="flex items-center">
                          <UIcon name="i-heroicons-computer-desktop" class="w-5 h-5 mr-2 text-green-600" />
                          <h4 class="font-semibold text-green-700 dark:text-green-400">Navegadores de escritorio</h4>
                        </div>
                      </template>
                      <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Chrome (recomendado)</li>
                        <li>• Microsoft Edge</li>
                        <li>• Mozilla Firefox</li>
                        <li>• Safari</li>
                        <li>• Opera</li>
                      </ul>
                    </UCard>

                    <UCard>
                      <template #header>
                        <div class="flex items-center">
                          <UIcon name="i-heroicons-device-phone-mobile" class="w-5 h-5 mr-2 text-amber-600" />
                          <h4 class="font-semibold text-amber-700 dark:text-amber-400">Navegadores móviles</h4>
                        </div>
                      </template>
                      <div class="space-y-2 text-sm">
                        <p class="text-red-600 dark:text-red-400">❌ Chrome/Safari móvil estándar</p>
                        <p class="text-green-600 dark:text-green-400">✅ Kiwi Browser (Android)</p>
                        <p class="text-gray-500 text-xs">*Configuración más compleja</p>
                      </div>
                    </UCard>
                  </div>

                  <UAlert
                    icon="i-heroicons-information-circle"
                    color="blue"
                    variant="soft"
                    title="Requisito: Tampermonkey"
                    description="Todos los scripts requieren la extensión Tampermonkey instalada en tu navegador para funcionar correctamente."
                    class="mb-6"
                  />

                  <div class="flex flex-col sm:flex-row gap-3">
                    <UButton to="/tools/ui" icon="i-heroicons-arrow-right" size="lg">
                      Ver todos los scripts disponibles
                    </UButton>

                    <UButton to="/tools/ui/instructions" variant="outline" icon="i-heroicons-document-text" size="lg">
                      Guía de instalación completa
                    </UButton>
                  </div>

                </div>
              </UCard>

              <!-- Automations Section -->
              <UCard id="automations" class="scroll-mt-24">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-cog-6-tooth" class="w-6 h-6 mr-3 text-green-600" />
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                      Automatizaciones
                    </h2>
                  </div>
                </template>

                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Las automatizaciones realizan tareas repetitivas en tu hotel de forma automática, 
                    ahorrando tiempo y reduciendo errores humanos.
                  </p>

                  <UAlert
                    icon="i-heroicons-exclamation-triangle"
                    color="orange"
                    variant="soft"
                    title="Importante: Credenciales de acceso"
                    description="Para las automatizaciones necesitamos credenciales de acceso limitado a tu cuenta de Little Hotelier. Estas credenciales solo tendrán los permisos mínimos necesarios para realizar las tareas automatizadas."
                    class="mb-6"
                  />

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Credenciales de acceso
                  </h3>

                  <p class="text-gray-600 dark:text-gray-300 mb-6">
                    Para utilizar las automatizaciones, necesitamos que nos proporciones las credenciales de acceso a tu cuenta de Little Hotelier. 
                    Estas credenciales deben tener permisos limitados para garantizar la seguridad de tu información.
                  </p>

                  <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Crea un usuario desde el panel de administración de Little Hotelier con los siguientes permisos:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <UCard>
                      <template #header>
                        <h4 class="font-semibold">Direct Booking</h4>
                      </template>
                      <ul class="space-y-1 text-sm">
                        <li>• <strong>Acceso:</strong> Sí</li>
                        <li>• <strong>Tipo de Usuario:</strong> General</li>
                      </ul>
                    </UCard>

                    <UCard>
                      <template #header>
                        <h4 class="font-semibold">FrontDesk</h4>
                      </template>
                      <ul class="space-y-1 text-sm">
                        <li>• <strong>Acceso:</strong> Sí</li>
                        <li>• <strong>Tipo de Usuario:</strong> General</li>
                        <li>• <strong>Permisos:</strong> Reservations</li>
                      </ul>
                    </UCard>
                  </div>

                  <div class="mb-6">
                    <img src="/images/config/permissions.png" alt="Permisos de usuario en Little Hotelier" class="w-full rounded-lg shadow-md" />
                  </div>

                  <p class="text-gray-600 dark:text-gray-300 mb-6">
                    Una vez creado el usuario, asegúrate de que funciona accediendo a Little Hotelier con el usuario y contraseña recién creados.
                  </p>

                  <UAlert
                    icon="i-heroicons-light-bulb"
                    color="green"
                    variant="soft"
                    title="Truco para el correo electrónico"
                    
                    class="mb-6"
                  >
                    <template #description>
                      Si no quieres crear un correo electrónico nuevo puedes usar una dirección existente y agregar un sufijo con + .
                      Si tu correo electronico es: juanma@hotelier-tools.com
                      Puedes utilizarlo como: juanma+bot-1@hotelier-tools.com
                    </template>
                  </UAlert>

                  <p class="text-gray-600 dark:text-gray-300 mb-6">
                    Una vez que tengas el usuario creado, por favor contacta con nosotros a través del formulario de contacto para que podamos configurar las automatizaciones indicandolos el usuario y contraseña creados, indicandonos en qué automatizaciones estás interesado.
                  </p>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Automatizaciones disponibles
                  </h3>

                  <UButton to="/tools/bot" color="green" variant="solid" icon="i-heroicons-arrow-right">
                    Ver todas las automatizaciones disponibles
                  </UButton>
                </div>
              </UCard>

              <!-- API Reference Section -->
              <UCard id="api-reference" class="scroll-mt-24">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-code-bracket" class="w-6 h-6 mr-3 text-purple-600" />
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                      Referencia API
                    </h2>
                  </div>
                </template>

                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Actualmente usamos las APIs disponibles en la web de Little Hotelier.
                  </p>

                  <UAlert
                    icon="i-heroicons-exclamation-triangle"
                    color="orange"
                    variant="soft"
                    title="Estado actual de la API"
                    description="Esto puede provocar alguna inconsistencia que intentaremos arreglar lo antes posible."
                    class="mb-6"
                  />

                  <p class="text-gray-600 dark:text-gray-300 mb-6">
                    En el futuro intentaremos conectar con la API de SiteMinder directamente para tener más robustez y estabilidad.
                  </p>

                  <UAlert
                    icon="i-heroicons-hand-raised"
                    color="blue"
                    variant="soft"
                    title="¿Quieres colaborar?"
                    description="Si te interesa colaborar con nosotros en este aspecto, por favor contacta a través de nuestro formulario de contacto e intentaremos darte acceso al código."
                  />
                </div>
              </UCard>

              <!-- FAQ Section -->
              <UCard id="faq" class="scroll-mt-24">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 mr-3 text-amber-600" />
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                      Preguntas Frecuentes
                    </h2>
                  </div>
                </template>

                <UAccordion :items="faqItems" multiple>
                  <template #default="{ item, index, open }">
                    <UButton
                      color="gray"
                      variant="ghost"
                      class="border-b border-gray-200 dark:border-gray-700 w-full justify-between"
                      :ui="{ rounded: 'rounded-none', padding: { sm: 'p-4' } }"
                    >
                      <div class="flex items-center">
                        <UBadge :label="(index + 1).toString()" color="blue" variant="solid" class="mr-3" size="xs" />
                        <span class="text-left">{{ item.label }}</span>
                      </div>

                      <UIcon
                        name="i-heroicons-chevron-down"
                        class="w-5 h-5 transform transition-transform duration-200"
                        :class="[open && 'rotate-180']"
                      />
                    </UButton>
                  </template>

                  <template #item="{ item }">
                    <div class="p-4 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50">
                      {{ item.content }}
                    </div>
                  </template>
                </UAccordion>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO metadata
definePageMeta({
  title: 'Documentación - Hotelier Tools'
})

// Reactive state - using a simple reactive approach
let activeSection = ref('getting-started')

const sections = [
  { 
    id: 'getting-started', 
    title: 'Comenzando',
    icon: 'i-heroicons-rocket-launch'
  },
  { 
    id: 'chrome-extensions', 
    title: 'Scripts de mejora web',
    icon: 'i-heroicons-puzzle-piece'
  },
  { 
    id: 'automations', 
    title: 'Automatizaciones',
    icon: 'i-heroicons-cog-6-tooth'
  },
  { 
    id: 'api-reference', 
    title: 'API Reference',
    icon: 'i-heroicons-code-bracket'
  },
  { 
    id: 'faq', 
    title: 'FAQ',
    icon: 'i-heroicons-question-mark-circle'
  }
]


const faqItems = [
  {
    label: '¿Cómo actualizo los scripts de mejora web?',
    content: 'Dentro del panel de administración de Tampermonkey te aparecerá una notificación para actualizar los scripts, aunque siempre puedes copiar y pegar la última versión del repositorio.'
  },
  {
    label: '¿Funcionan los scripts en dispositivos móviles?',
    content: 'Los scripts no funcionan en navegadores móviles estándar como Chrome para Android o Safari para iOS. Sin embargo, en Android puedes usar Kiwi Browser que sí es compatible con Tampermonkey, aunque la configuración es más compleja.'
  },
  {
    label: '¿Qué permisos necesitan las automatizaciones?',
    content: 'Las automatizaciones solo requieren permisos de lectura y escritura limitados en tu cuenta de Little Hotelier. Nunca solicitamos permisos administrativos completos.'
  },
  {
    label: '¿Puedo desactivar una automatización temporalmente?',
    content: 'Sí, puedes pausar cualquier automatización contactando con nuestro soporte. Estamos trabajando en un panel de control donde puedes gestionar todas tus automatizaciones. En cualquier caso, puedes desactivar el usuario proporcionado y las automatizaciones dejarán de funcionar.'
  },
  {
    label: '¿Las herramientas afectan el rendimiento de Little Hotelier?',
    content: 'No, nuestras herramientas están optimizadas para no afectar el rendimiento. Los scripts solo modifican la interfaz visual y las automatizaciones funcionan en segundo plano.'
  }
]

function scrollToSection(sectionId) {
  activeSection = sectionId
  if (process.client) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>
