<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Extensiones de Chrome para
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Little Hotelier
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mejora tu experiencia con Little Hotelier instalando nuestras extensiones que optimizan la interfaz y añaden funcionalidades útiles.
          </p>
        </div>
      </div>
    </section>

    <!-- Tampermonkey Scripts Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Scripts Tampermonkey
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Utiliza Tampermonkey para gestionar scripts automáticos que mejoran y personalizan la interfaz de Little Hotelier
          </p>
        </div>

        <div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-10">
          <div class="p-6 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <UIcon name="i-simple-icons-tampermonkey" class="w-8 h-8 text-blue-600 mr-3" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">¿Qué es Tampermonkey?</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              Tampermonkey es una extensión de navegador que permite ejecutar scripts personalizados en páginas web. 
              Con nuestros scripts para Little Hotelier, puedes añadir funcionalidades, mejorar la interfaz y optimizar tu flujo de trabajo.
            </p>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Cómo instalar Tampermonkey</h3>
            <ol class="list-decimal pl-6 mb-6 space-y-3 text-gray-600 dark:text-gray-300">
              <li>Instala la extensión <a href="https://www.tampermonkey.net/" target="_blank" class="text-blue-600 hover:underline">Tampermonkey</a> desde la Chrome Web Store</li>
              <li>Haz clic en el icono de Tampermonkey en tu navegador</li>
              <li>Selecciona "Añadir nuevo script" o haz clic en cualquiera de nuestros enlaces de instalación directa</li>
              <li>Guarda el script y estará listo para funcionar automáticamente en Little Hotelier</li>
            </ol>
          </div>
          
          <div class="m-4">

            <UButton color="primary" 
              to="https://www.tampermonkey.net/"
              >
              <UIcon name="i-heroicons-information-circle" class="w-4 h-4 mr-2" />
              TaperMonkey
            </UButton>
            
            <UButton color="primary" 
              to="https://www.tampermonkey.net/"
              class="ml-4"
              >
              <UIcon name="i-heroicons-information-circle" class="w-4 h-4 mr-2" />
              Chrome web Store
            </UButton>
          </div>
        </div>

      </div>
    </section>

    <section class="py-16 bg-gray-50 dark:bg-gray-900" >
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Scripts Disponibles</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10">
          <!-- Scripts para Vista Calendario -->
          <div v-for="script in calendarScripts" :key="script.id" class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div class="p-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <UIcon :name="script.icon" class="w-8 h-8 text-blue-600 mr-3" />
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ script.name }}</h3>
              </div>
              
              <p class="text-gray-600 dark:text-gray-300 mb-6">{{ script.description }}</p>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Front Desk
                </span>
                <UButton color="primary" :to="script.infoUrl">
                  <UIcon name="i-heroicons-information-circle" class="w-4 h-4 mr-2" />
                  Más Información
                </UButton>
              </div>
            </div>
          </div>
          
          <!-- Scripts para Página de Reservas -->
          <div v-for="script in reservationsScripts" :key="script.id" class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div class="p-1 bg-gradient-to-r from-green-500 to-teal-600"></div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <UIcon :name="script.icon" class="w-8 h-8 text-green-600 mr-3" />
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ script.name }}</h3>
              </div>
              
              <p class="text-gray-600 dark:text-gray-300 mb-6">{{ script.description }}</p>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium px-2.5 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  Reservas
                </span>
                <UButton color="primary" :to="script.infoUrl">
                  <UIcon name="i-heroicons-information-circle" class="w-4 h-4 mr-2" />
                  Más Información
                </UButton>
              </div>
            </div>
          </div>
          
          <!-- Scripts para Detalles de Reserva -->
          <div v-for="script in reservationDetailsScripts" :key="script.id" class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div class="p-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <UIcon :name="script.icon" class="w-8 h-8 text-purple-600 mr-3" />
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ script.name }}</h3>
              </div>
              
              <p class="text-gray-600 dark:text-gray-300 mb-6">{{ script.description }}</p>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium px-2.5 py-0.5 rounded bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                  Detalles
                </span>
                <UButton color="primary" :to="script.infoUrl">
                  <UIcon name="i-heroicons-information-circle" class="w-4 h-4 mr-2" />
                  Más Información
                </UButton>
              </div>
            </div>
          </div>
        </div>
    </section>

    <!-- Installation Guide -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Guía de Instalación Detallada
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Sigue estos pasos para instalar correctamente las extensiones
          </p>
        </div>

        <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="p-6 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Ve a Chrome Web Store e instala Tampermonkey</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Instala la extensión Tampermonkey desde la Chrome Web Store para poder utilizar nuestros scripts personalizados.
            </p>
            <div class="mt-4">
              <UButton color="primary" to="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo" target="_blank">
                <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-2" />
                Ir a Chrome Web Store
              </UButton>
            </div>
            <img src="https://images.pexels.com/photos/32489805/pexels-photo-32489805.jpeg?cs=srgb&dl=pexels-leefinvrede-32489805.jpg&fm=jpg&w=640&h=960&_gl=1*77twhb*_ga*MjAwMDY4MDc4Ni4xNzUzNDcxMDI4*_ga_8JE65Q40S6*czE3NTM0NzEwMjgkbzEkZzEkdDE3NTM0NzEwMzIkajU2JGwwJGgw" alt="Chrome Web Store" class="rounded-lg shadow-sm w-full mt-4">
          </div>

          <div class="p-6 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">2</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Pulsa sobre la extensión y selecciona "Create a new script..."</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Haz clic en el icono de Tampermonkey en tu navegador y selecciona la opción "Create a new script..." del menú desplegable.
            </p>
            <img src="https://images.pexels.com/photos/32489805/pexels-photo-32489805.jpeg?cs=srgb&dl=pexels-leefinvrede-32489805.jpg&fm=jpg&w=640&h=960&_gl=1*77twhb*_ga*MjAwMDY4MDc4Ni4xNzUzNDcxMDI4*_ga_8JE65Q40S6*czE3NTM0NzEwMjgkbzEkZzEkdDE3NTM0NzEwMzIkajU2JGwwJGgw" alt="Crear nuevo script" class="rounded-lg shadow-sm w-full">
          </div>

          <div class="p-6 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">3</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Copia el contenido de un script en ese nuevo archivo</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Selecciona el script que deseas utilizar y copia su contenido en el editor de Tampermonkey.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div v-for="script in [...calendarScripts, ...reservationsScripts, ...reservationDetailsScripts]" :key="script.id" class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <div class="flex items-center">
                  <UIcon :name="script.icon" class="w-5 h-5 text-blue-600 mr-2" />
                  <span class="text-gray-800 dark:text-gray-200 font-medium">{{ script.name }}</span>
                </div>
                <div class="mt-2">
                  <UButton size="xs" color="primary" variant="soft" :to="script.infoUrl">
                    Ver script
                  </UButton>
                </div>
              </div>
            </div>
            
            <img src="https://images.pexels.com/photos/32489805/pexels-photo-32489805.jpeg?cs=srgb&dl=pexels-leefinvrede-32489805.jpg&fm=jpg&w=640&h=960&_gl=1*77twhb*_ga*MjAwMDY4MDc4Ni4xNzUzNDcxMDI4*_ga_8JE65Q40S6*czE3NTM0NzEwMjgkbzEkZzEkdDE3NTM0NzEwMzIkajU2JGwwJGgw" alt="Copiar script" class="rounded-lg shadow-sm w-full">
          </div>

          <div class="p-6 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">4</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Guarda el archivo</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Haz clic en el botón "File" y luego en "Save" (o presiona Ctrl+S) para guardar el script en Tampermonkey.
            </p>
            <img src="https://images.pexels.com/photos/32489805/pexels-photo-32489805.jpeg?cs=srgb&dl=pexels-leefinvrede-32489805.jpg&fm=jpg&w=640&h=960&_gl=1*77twhb*_ga*MjAwMDY4MDc4Ni4xNzUzNDcxMDI4*_ga_8JE65Q40S6*czE3NTM0NzEwMjgkbzEkZzEkdDE3NTM0NzEwMzIkajU2JGwwJGgw" alt="Guardar archivo" class="rounded-lg shadow-sm w-full">
          </div>

          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">5</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Actualiza la página de Little Hotelier para ver los cambios</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Vuelve a Little Hotelier y actualiza la página (presiona F5) para que los cambios del script se apliquen correctamente.
            </p>
            <img src="https://images.pexels.com/photos/32489805/pexels-photo-32489805.jpeg?cs=srgb&dl=pexels-leefinvrede-32489805.jpg&fm=jpg&w=640&h=960&_gl=1*77twhb*_ga*MjAwMDY4MDc4Ni4xNzUzNDcxMDI4*_ga_8JE65Q40S6*czE3NTM0NzEwMjgkbzEkZzEkdDE3NTM0NzEwMzIkajU2JGwwJGgw" alt="Actualizar página" class="rounded-lg shadow-sm w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Video Tutorial Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tutorial en Video
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Aprende visualmente con nuestro tutorial paso a paso
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              class="w-full h-full" 
              src="https://www.youtube-nocookie.com/embed/VIDEO_ID" 
              title="Tutorial de instalación de extensiones" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Help and Support -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Necesitas Ayuda?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Estamos aquí para asistirte en la instalación
          </p>
        </div>

        <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Si tienes problemas para instalar o configurar nuestras extensiones, puedes contactarnos de las siguientes formas:
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <UIcon name="i-heroicons-chat-bubble-left-right" class="w-12 h-12 text-blue-600 mb-3" />
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Chat en Vivo</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">Respuesta inmediata en horario laboral</p>
                <UButton color="primary" variant="soft" size="sm">
                  Iniciar Chat
                </UButton>
              </div>
              
              <div class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <UIcon name="i-heroicons-envelope" class="w-12 h-12 text-blue-600 mb-3" />
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">Respuesta en menos de 24 horas</p>
                <UButton color="primary" variant="soft" size="sm" to="mailto:soporte@hoteliertools.com">
                  Enviar Email
                </UButton>
              </div>
              
              <div class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <UIcon name="i-heroicons-document-text" class="w-12 h-12 text-blue-600 mb-3" />
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Documentación</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">Guías detalladas y FAQs</p>
                <UButton color="primary" variant="soft" size="sm" to="/docs">
                  Ver Documentación
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

// SEO
useHead({
  title: 'Extensiones Chrome - Hotelier Tools',
  meta: [
    {
      name: 'description',
      content: 'Instala y configura extensiones de Chrome y scripts Tampermonkey para mejorar tu experiencia con Little Hotelier. Guía paso a paso y soporte técnico.'
    }
  ]
})

// Tampermonkey scripts data
const calendarScripts = [
  {
    id: 'show-prices',
    name: 'Mostrar Precios',
    description: 'Visualiza los precios directamente en la vista de calendario sin necesidad de hacer clic en cada habitación.',
    icon: 'i-heroicons-currency-dollar',
    infoUrl: '/docs/scripts/show-prices'
  },
  {
    id: 'auto-refresh',
    name: 'Actualización Automática',
    description: 'Evita la caducidad del token actualizando automáticamente la página cuando no haya interacción durante varios minutos.',
    icon: 'i-heroicons-arrow-path',
    infoUrl: '/docs/scripts/auto-refresh'
  },
  {
    id: 'inventory-to-prices',
    name: 'Cambiar "Inventario" por "Precios"',
    description: 'Modifica el nombre del menú para que sea más intuitivo y refleje mejor su contenido.',
    icon: 'i-heroicons-tag',
    infoUrl: '/docs/scripts/inventory-to-prices'
  },
  {
    id: 'compact-table',
    name: 'Diseño Compacto de Tabla',
    description: 'Optimiza el diseño de la tabla de fechas y habitaciones para ver más información en pantallas pequeñas.',
    icon: 'i-heroicons-table-cells',
    infoUrl: '/docs/scripts/compact-table'
  }
]

const reservationsScripts = [
  {
    id: 'full-width-tables',
    name: 'Tablas de Ancho Completo',
    description: 'Aprovecha todo el espacio disponible en pantalla mostrando las tablas a ancho completo en la página de Reservas.',
    icon: 'i-heroicons-arrows-pointing-out',
    infoUrl: '/docs/scripts/full-width-tables'
  }
]

const reservationDetailsScripts = [
  {
    id: 'print-invoice',
    name: 'Botón de Factura',
    description: 'Añade un botón de acceso rápido para imprimir facturas desde la página de detalles de reserva.',
    icon: 'i-heroicons-printer',
    infoUrl: '/docs/scripts/print-invoice'
  },
  {
    id: 'larger-email-buttons',
    name: 'Botones de Email Grandes',
    description: 'Aumenta el tamaño de los botones del menú de correo electrónico para facilitar su uso.',
    icon: 'i-heroicons-envelope',
    infoUrl: '/docs/scripts/larger-email-buttons'
  },
  {
    id: 'booking-commission',
    name: 'Info de Comisiones Booking',
    description: 'Muestra detalles adicionales sobre posibles comisiones de Booking en las reservas.',
    icon: 'i-heroicons-banknotes',
    infoUrl: '/docs/scripts/booking-commission'
  }
]
</script>