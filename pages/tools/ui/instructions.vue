<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Instrucciones de
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Instalación
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Guía paso a paso para instalar y configurar los scripts de mejora web para Little Hotelier
          </p>
        </div>
      </div>
    </section>

    <!-- Instructions Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-8">
          <!-- Overview -->
          <UCard>
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-information-circle" class="w-6 h-6 mr-3 text-blue-600" />
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                  ¿Qué necesitas?
                </h2>
              </div>
            </template>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-start space-x-3">
                <UIcon name="i-heroicons-computer-desktop" class="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Navegador compatible</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Chrome, Edge, Firefox, Safari u Opera</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <UIcon name="i-heroicons-clock" class="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Tiempo estimado</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">5-10 minutos por script</p>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Steps -->
          <div class="space-y-6">
            <!-- Step 1 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="1" color="blue" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    Instalar Tampermonkey
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  Tampermonkey es la extensión que permite ejecutar scripts personalizados en tu navegador.
                  <br />
                  Selecciona la versión normal, no la beta o legacy.
                </p>

                
                <p class="text-gray-600 dark:text-gray-300">
                  Ve a la web de tamperMonkey y selecciona la versión para tu navegador, debería hacerlo automáticamente.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-3">
                  <UButton 
                    to="https://www.tampermonkey.net/" 
                    external 
                    icon="i-heroicons-arrow-top-right-on-square"
                    size="lg"
                  >
                    Descargar Tampermonkey
                  </UButton>
                  
                  <UAlert
                    icon="i-heroicons-information-circle"
                    
                    variant="subtle"
                    description="Se abrirá en una nueva pestaña. Sigue las instrucciones de instalación de tu navegador."
                    class="flex-1"
                  />
                </div>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tampermonkeyPage.png" 
                    alt="Página de descarga de Tampermonkey" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>

                <p class="text-gray-600 dark:text-gray-300">
                  Depnde de tu navegador tendrás que hacer click en Aañadir a Chrome, Añadir a Firefox, etc.
                </p>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkeyChromeWebStore.png" 
                    alt="Página de descarga de Tampermonkey" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkeyEdgeStore.png" 
                    alt="Página de descarga de Tampermonkey" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>

                <p class="text-gray-600 dark:text-gray-300">
                  Confirma la instalación y espera a que se añada la extensión a tu navegador.
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/chromeAskInstallExtension.png" 
                    alt="Página de descarga de Tampermonkey" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
              </div>
            </UCard>

            <!-- Step 2 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="2" color="blue" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    Seleccionar script de mejora
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  Ve a nuestra página de scripts y selecciona el que quieras instalar.
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/scripts.png" 
                    alt="Lista de scripts disponibles" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
                
                <UButton to="/tools/ui" icon="i-heroicons-arrow-right" size="lg">
                  Ver scripts disponibles
                </UButton>
              </div>
            </UCard>

            <!-- Step 3 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="3" color="blue" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    Copiar código del script
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  Una vez seleccionado el script, haz clic en "Ver script" y copia todo el código.
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/githubCode.png" 
                    alt="Página del script con código visible" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
                
                <UAlert
                  icon="i-heroicons-document-duplicate"
                  
                  variant="subtle"
                  title="Tip importante"
                  description="Asegúrate de copiar todo el código, desde la primera línea hasta la última. Es recomendable usar el botón de Copy Raw file."
                />
              </div>
            </UCard>

            <!-- Step 4 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="4" color="blue" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    Crear nuevo script en Tampermonkey
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  Abre Tampermonkey desde el icono de tu navegador y crea un nuevo script.
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkeyMenu.png" 
                    alt="Panel de Tampermonkey con opción de crear script" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <h4 class="font-semibold text-gray-900 dark:text-white">Opción 1: Desde el icono</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      Haz clic en el icono de Tampermonkey → "Create a mew script"
                    </p>
                  </div>
                
                  <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <img
                      src="/images/ui/tamperMonkey.png" 
                      alt="Panel de Tampermonkey con opción de crear script" 
                      class="w-full rounded-lg shadow-md mb-4" 
                    />
                  </div>
                    
                  <div class="space-y-2">
                    <h4 class="font-semibold text-gray-900 dark:text-white">Opción 2: Desde el tablero</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      Ve al tablero de Tampermonkey → Pestaña "Scripts" → "+"
                    </p>
                  </div>
                </div>

                <p class="text-gray-600 dark:text-gray-300">
                  Esto abrirá un editor donde podrás pegar el código del script.
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkey.png" 
                    alt="Editor de Tampermonkey con código pegado" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>

              </div>
            </UCard>

            <!-- Step 5 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="5" color="blue" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    Pegar y guardar el script
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  Reemplaza el código de plantilla con el script copiado y guarda.
                  <br />
                  Puedes usar Ctrl+A para seleccionar todo, Ctrl+V para pegar y Ctrl+S para guardar.
                </p>
                
                <UAlert
                  icon="i-heroicons-document-duplicate"
                  variant="subtle"
                  title="Puedes hacerlo fácilmente con comandos de teclado"
                >
                  <template #description>
                    Puedes usar Ctrl+A para seleccionar todo, Ctrl+V para pegar y Ctrl+S para guardar.
                  </template>
                </UAlert>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <UCard>
                    <div class="text-center">
                      <UIcon name="i-heroicons-document-duplicate" class="w-8 h-8 mx-auto text-blue-600 mb-2" />
                      <h5 class="font-semibold text-sm">1. Seleccionar todo</h5>
                      <p class="text-xs text-gray-600 dark:text-gray-300">Ctrl+A para seleccionar</p>
                    </div>
                  </UCard>
                  
                  <UCard>
                    <div class="text-center">
                      <UIcon name="i-heroicons-clipboard" class="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <h5 class="font-semibold text-sm">2. Pegar código</h5>
                      <p class="text-xs text-gray-600 dark:text-gray-300">Ctrl+V para pegar</p>
                    </div>
                  </UCard>
                  
                  <UCard>
                    <div class="text-center">
                      <UIcon name="i-heroicons-check" class="w-8 h-8 mx-auto text-purple-600 mb-2" />
                      <h5 class="font-semibold text-sm">3. Guardar</h5>
                      <p class="text-xs text-gray-600 dark:text-gray-300">Ctrl+S o botón guardar</p>
                    </div>
                  </UCard>
                </div>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkeyCodePasted.png" 
                    alt="Editor de Tampermonkey con código pegado" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>

                <p class="text-gray-600 dark:text-gray-300">
                  Asegúrate de que el script esté guardado en Tampermonkey.
                </p>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkeySave.png" 
                    alt="Editor de Tampermonkey con código pegado" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
                
              </div>
            </UCard>

            <!-- Step 6 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="6" color="green" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    ¡Listo! Recarga Little Hotelier
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  Recarga la página de Little Hotelier y disfruta de las mejoras.
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/scripts/add-button-check-front-desk/to.png"
                    alt="Little Hotelier con mejoras aplicadas"
                    class="w-full rounded-lg shadow-md mb-4"
                  />
                </div>
                
                <UAlert
                  icon="i-heroicons-check-circle"
                  
                  variant="subtle"
                  title="¡Felicidades!"
                  description="El script debería estar funcionando. Si no ves cambios, verifica que el script esté habilitado en Tampermonkey."
                />
              </div>
            </UCard>
          </div>

          <!-- Help Section -->
          <UCard>
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 mr-3 text-amber-600" />
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  ¿Necesitas ayuda?
                </h3>
              </div>
            </template>
            
            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-300">
                Si tienes alguna pregunta o encuentras problemas durante la instalación, no dudes en contactarnos.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-3">
                <UButton to="/contact" icon="i-heroicons-envelope" size="lg">
                  Contactar soporte
                </UButton>
                
                <UButton to="/faq" variant="outline" icon="i-heroicons-question-mark-circle" size="lg">
                  Ver preguntas frecuentes
                </UButton>
              </div>
                
              <UButton to="https://github.com/JuanmanDev/TampermonkeyLittleHotelier" variant="outline" icon="i-heroicons-code-bracket-square" size="lg">
                Ver repositorio de codigo de los scripts en github para notificar errores
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO metadata
definePageMeta({
  title: 'Instrucciones de Instalación - Hotelier Tools'
})

useSeoMeta({
  title: 'Instrucciones de Instalación - Scripts de Mejora Web',
  description: 'Guía paso a paso para instalar y configurar los scripts de mejora web de Hotelier Tools para Little Hotelier. Instrucciones detalladas con imágenes.'
})
</script>