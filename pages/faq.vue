<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Preguntas
            <span class="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre Hotelier Tools, 
            desde instalación hasta uso avanzado de nuestras herramientas.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection />
        
        <!-- Contact Section -->
        <div class="mt-12 text-center">
          <UCard>
            <div class="p-8">
              <UIcon name="i-heroicons-chat-bubble-left-right" class="w-12 h-12 mx-auto text-amber-600 mb-4" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿No encuentras la respuesta que buscas?
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Nuestro equipo está aquí para ayudarte. Contacta con nosotros y te responderemos lo antes posible.
              </p>
              <UButton to="/contact" color="amber" size="lg" icon="i-heroicons-envelope">
                Contactar con soporte
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
  title: 'Preguntas Frecuentes - Hotelier Tools',
  description: 'Encuentra respuestas a las preguntas más comunes sobre Hotelier Tools, instalación y uso de nuestras herramientas de gestión hotelera.'
})
</script>