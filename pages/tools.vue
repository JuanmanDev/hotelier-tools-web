<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Herramientas para
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Little Hotelier
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre nuestra colección completa de herramientas diseñadas específicamente 
            para optimizar tu gestión hotelera con Little Hotelier de Siteminder.
          </p>
        </div>
      </div>
    </section>

    <!-- Tools Showcase -->
    <ToolsShowcase />

    <!-- How to Install Section -->
    <section class="bg-white dark:bg-gray-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cómo instalar las herramientas
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Sigue estos sencillos pasos para comenzar a usar nuestras herramientas
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Chrome Extensions -->
          <div class="space-y-6">
            <div class="flex items-center mb-6">
              <UIcon name="i-simple-icons-googlechrome" class="w-8 h-8 text-blue-600 mr-3" />
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                Extensiones Chrome
              </h3>
            </div>

            <div class="space-y-4">
              <div 
                v-for="(step, index) in chromeSteps"
                :key="index"
                class="flex items-start"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">{{ index + 1 }}</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ step.title }}</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">{{ step.description }}</p>
                </div>
              </div>
            </div>

            <UButton color="primary" to="/chrome-extensions" class="w-full">
              <UIcon name="i-heroicons-arrow-down-tray" class="w-4 h-4 mr-2" />
              Descargar Extensiones
            </UButton>
          </div>

          <!-- Automations -->
          <div class="space-y-6">
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-cog-6-tooth" class="w-8 h-8 text-indigo-600 mr-3" />
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                Automatizaciones
              </h3>
            </div>

            <div class="space-y-4">
              <div 
                v-for="(step, index) in automationSteps"
                :key="index"
                class="flex items-start"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span class="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">{{ index + 1 }}</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ step.title }}</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">{{ step.description }}</p>
                </div>
              </div>
            </div>

            <UButton color="indigo" to="/contact" class="w-full">
              <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="w-4 h-4 mr-2" />
              Solicitar Configuración
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-50 dark:bg-gray-900 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Resolvemos las dudas más comunes sobre nuestras herramientas
          </p>
        </div>

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
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Herramientas - Hotelier Tools',
  meta: [
    {
      name: 'description',
      content: 'Descubre todas las herramientas disponibles para optimizar tu gestión hotelera con Little Hotelier. Extensiones Chrome y automatizaciones especializadas.'
    }
  ]
})

const chromeSteps = [
  {
    title: 'Descarga la extensión',
    description: 'Descarga el archivo .crx de la extensión desde nuestra página'
  },
  {
    title: 'Abre Chrome Extensions',
    description: 'Ve a chrome://extensions/ en tu navegador Chrome'
  },
  {
    title: 'Activa el modo desarrollador',
    description: 'Habilita el "Modo de desarrollador" en la esquina superior derecha'
  },
  {
    title: 'Instala la extensión',
    description: 'Arrastra el archivo .crx al navegador o usa "Cargar extensión sin empaquetar"'
  },
  {
    title: 'Configura la extensión',
    description: 'Sigue las instrucciones de configuración específicas de cada extensión'
  }
]

const automationSteps = [
  {
    title: 'Contacta con nosotros',
    description: 'Envíanos un mensaje para solicitar la configuración de automatizaciones'
  },
  {
    title: 'Proporciona credenciales',
    description: 'Comparte las credenciales de acceso limitado a tu cuenta de Little Hotelier'
  },
  {
    title: 'Configuramos el sistema',
    description: 'Nuestro equipo configurará las automatizaciones según tus necesidades'
  },
  {
    title: 'Pruebas y validación',
    description: 'Realizamos pruebas para asegurar que todo funciona correctamente'
  },
  {
    title: 'Monitoreo continuo',
    description: 'Las automatizaciones funcionan 24/7 con monitoreo y soporte continuo'
  }
]

const faqItems = [
  {
    label: '¿Son seguras las herramientas?',
    content: 'Sí, todas nuestras herramientas están diseñadas con los más altos estándares de seguridad. Las extensiones solo modifican la interfaz visual y las automatizaciones utilizan credenciales de acceso limitado.'
  },
  {
    label: '¿Necesito conocimientos técnicos para usar las herramientas?',
    content: 'No, nuestras herramientas están diseñadas para ser fáciles de usar. Las extensiones se instalan con unos pocos clics y las automatizaciones las configuramos nosotros por ti.'
  },
  {
    label: '¿Qué sucede si Little Hotelier actualiza su plataforma?',
    content: 'Monitoreamos constantemente los cambios en Little Hotelier y actualizamos nuestras herramientas para mantener la compatibilidad. Las actualizaciones son automáticas.'
  },
  {
    label: '¿Puedo solicitar herramientas personalizadas?',
    content: 'Por supuesto. Ofrecemos desarrollo de herramientas personalizadas según las necesidades específicas de tu hotel. Contacta con nosotros para más información.'
  },
  {
    label: '¿Hay soporte técnico disponible?',
    content: 'Sí, ofrecemos soporte técnico 24/7 para todas nuestras herramientas. Puedes contactarnos por email, chat o teléfono.'
  },
  {
    label: '¿Las herramientas afectan el rendimiento de Little Hotelier?',
    content: 'No, nuestras herramientas están optimizadas para no afectar el rendimiento de la plataforma. Las extensiones solo modifican la presentación visual y las automatizaciones funcionan de forma independiente.'
  }
]
</script>
