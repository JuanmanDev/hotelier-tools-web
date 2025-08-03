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
                <UButton
                color="primary"
                variant="soft"
                size="sm"
                :to="localePath('/contact')"
                >
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
                <UButton color="primary" variant="soft" size="sm" :to="localePath('/documentation')">
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
const { t } = useI18n()
const { setSEO, setStructuredData, setBreadcrumbs } = useSEO()

// Set SEO metadata for chrome extensions page
setSEO('chromeExtensions')

// Set structured data and breadcrumbs
onMounted(() => {
  setStructuredData('Product', {
    name: 'Chrome Extensions for Little Hotelier',
    description: t('seo.pages.chromeExtensions.description'),
    rating: {
      value: 4.8,
      count: 150
    }
  })
  
  setBreadcrumbs([
    { name: t('nav.home'), url: '/' },
    { name: t('nav.tools'), url: '/tools' },
    { name: 'Chrome Extensions', url: '/chrome-extensions' }
  ])
})

// Tampermonkey scripts data
const calendarScripts = [
  {
    id: 'prices-display',
    name: 'Mostrar Precios',
    description: 'Muestra los precios de las habitaciones directamente en la vista de calendario obteniendo los datos de precios desde la página de inventario.',
    icon: 'i-heroicons-currency-dollar',
    infoUrl: localePath('/scripts/es/prices-display')
  },
  {
    id: 'auto-refresh-inactivity',
    name: 'Actualización Automática por Inactividad',
    description: 'Actualiza automáticamente la página después de un período específico de inactividad del usuario para evitar problemas de sesión expirada.',
    icon: 'i-heroicons-arrow-path',
    infoUrl: localePath('/scripts/es/auto-refresh-inactividad')
  }
]

const reservationsScripts = [
  {
    id: 'full-width-reservation-table',
    name: 'Tabla de Reservas a Todo Ancho',
    description: 'Amplía la tabla de reservas en Little Hotelier para que ocupe todo el ancho de la pantalla, permitiendo ver más información sin necesidad de hacer scroll horizontal.',
    icon: 'i-heroicons-arrows-pointing-out',
    infoUrl: localePath('/scripts/es/full-width-reservation-table')
  },
  {
    id: 'tables-full-width',
    name: 'Tablas a Todo Ancho (Direct Booking)',
    description: 'Hace que todas las tablas en Direct Booking sean más anchas para mostrar más información.',
    icon: 'i-heroicons-table-cells',
    infoUrl: localePath('/scripts/es/tables-full-width')
  },
  {
    id: 'change-inventory-name',
    name: 'Cambiar Nombre de Inventario',
    description: 'Cambia el nombre del menú "Inventario" para incluir información de precios, haciéndolo más intuitivo y descriptivo.',
    icon: 'i-heroicons-tag',
    infoUrl: localePath('/scripts/es/change-inventory-name')
  },
  {
    id: 'add-button-check-front-desk',
    name: 'Agregar Botón de Verificación en Front Desk',
    description: 'Agrega un botón para verificar los detalles de la reserva en Front Desk y revisar reembolsos.',
    icon: 'i-heroicons-check-circle',
    infoUrl: localePath('/scripts/es/add-button-check-front-desk')
  }
]

const reservationDetailsScripts = [
  {
    id: 'update-number-adults',
    name: 'Actualizar Número de Adultos',
    description: 'Establece automáticamente el número de adultos a 2 por defecto en los formularios de reserva para prevenir errores cuando el valor es 0.',
    icon: 'i-heroicons-user-group',
    infoUrl: localePath('/scripts/es/update-number-adults')
  },
  {
    id: 'update-payment-link-button',
    name: 'Mejorar Botón de Enlace de Pago',
    description: 'Mejora el botón de enlace de pago con un texto más claro y agrega automáticamente el número de teléfono desde el campo de entrada.',
    icon: 'i-heroicons-credit-card',
    infoUrl: localePath('/scripts/es/update-payment-link-button')
  },
  {
    id: 'extra-invoice-print-button',
    name: 'Botón Extra de Imprimir Factura',
    description: 'Agrega un botón adicional para imprimir la factura directamente sin necesidad de abrir menús.',
    icon: 'i-heroicons-printer',
    infoUrl: localePath('/scripts/es/extra-invoice-print-button')
  },
  {
    id: 'bank-transfer-email-button',
    name: 'Botón de Email de Transferencia Bancaria',
    description: 'Agrega un botón para enviar los detalles de transferencia bancaria por email con contenido pre-rellenado.',
    icon: 'i-heroicons-envelope',
    infoUrl: localePath('/scripts/es/bank-transfer-email-button')
  },
  {
    id: 'show-booking-commissions',
    name: 'Mostrar Comisiones de Booking.com',
    description: 'Muestra una estimación del desglose de comisiones para las reservas de Booking.com.',
    icon: 'i-heroicons-banknotes',
    infoUrl: localePath('/scripts/es/show-booking-commissions')
  },
  {
    id: 'improve-style-touch-screens',
    name: 'Mejorar Estilo para Pantallas Táctiles',
    description: 'Mejora los elementos de la interfaz para pantallas táctiles, haciendo los botones más accesibles y los menús más grandes.',
    icon: 'i-heroicons-device-tablet',
    infoUrl: localePath('/scripts/es/improve-style-touch-screens')
  },
  {
    id: 'compact-ui-reservation-details',
    name: 'UI Compacta para Detalles de Reserva',
    description: 'Compacta la interfaz de usuario para los detalles de reserva y hace la sección de comentarios más alta.',
    icon: 'i-heroicons-squares-2x2',
    infoUrl: localePath('/scripts/es/compact-ui-reservation-details')
  }
]
</script>