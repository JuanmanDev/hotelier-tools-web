<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contacta con
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              nuestro equipo
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestras herramientas? ¿Necesitas una solución personalizada? 
            Estamos aquí para ayudarte a optimizar la gestión de tu hotel.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envíanos un mensaje
            </h2>

            <UForm :schema="contactSchema" :state="contactForm" @submit="onSubmit" class="space-y-6">
              <!-- Name -->
              <UFormGroup label="Nombre completo" name="name" required>
                <UInput
                  v-model="contactForm.name"
                  placeholder="Tu nombre completo"
                  icon="i-heroicons-user"
                />
              </UFormGroup>

              <!-- Email -->
              <UFormGroup label="Email" name="email" required>
                <UInput
                  v-model="contactForm.email"
                  type="email"
                  placeholder="tu.email@hotel.com"
                  icon="i-heroicons-envelope"
                />
              </UFormGroup>

              <!-- Hotel Name -->
              <UFormGroup label="Nombre del hotel" name="hotelName">
                <UInput
                  v-model="contactForm.hotelName"
                  placeholder="Hotel Paradise"
                  icon="i-heroicons-building-office-2"
                />
              </UFormGroup>

              <!-- Subject -->
              <UFormGroup label="Asunto" name="subject" required>
                <USelect
                  v-model="contactForm.subject"
                  :options="subjectOptions"
                  placeholder="Selecciona un asunto"
                />
              </UFormGroup>

              <!-- Message -->
              <UFormGroup label="Mensaje" name="message" required>
                <UTextarea
                  v-model="contactForm.message"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  :rows="6"
                />
              </UFormGroup>

              <!-- Privacy Policy -->
              <UFormGroup name="acceptPrivacy">
                <UCheckbox
                  v-model="contactForm.acceptPrivacy"
                  name="acceptPrivacy"
                  label="Acepto la política de privacidad y el tratamiento de mis datos"
                />
              </UFormGroup>

              <!-- Submit Button -->
              <UButton
                type="submit"
                color="primary"
                size="lg"
                :loading="isSubmitting"
                :disabled="!contactForm.acceptPrivacy"
                class="w-full"
              >
                <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5 mr-2" />
                Enviar Mensaje
              </UButton>
            </UForm>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Direct Contact -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Información de contacto
              </h3>

              <div class="space-y-4">
                <div class="flex items-center">
                  <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:support@hoteliertools.com" class="text-blue-600 hover:text-blue-800">
                      support@hoteliertools.com
                    </a>
                  </div>
                </div>

                <div class="flex items-center">
                  <UIcon name="i-heroicons-clock" class="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">Horario de atención</p>
                    <p class="text-gray-600 dark:text-gray-300">24/7 - Soporte disponible siempre</p>
                  </div>
                </div>

                <div class="flex items-center">
                  <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">Respuesta promedio</p>
                    <p class="text-gray-600 dark:text-gray-300">Menos de 2 horas</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Support Options -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Opciones de soporte
              </h3>

              <div class="space-y-4">
                <div 
                  v-for="option in supportOptions"
                  :key="option.title"
                  class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-300 dark:hover:border-blue-600 transition-colors cursor-pointer"
                >
                  <div class="flex items-start">
                    <UIcon :name="option.icon" class="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 class="font-medium text-gray-900 dark:text-white mb-1">{{ option.title }}</h4>
                      <p class="text-gray-600 dark:text-gray-300 text-sm">{{ option.description }}</p>
                      <p class="text-blue-600 text-sm mt-1">{{ option.responseTime }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ Link -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                ¿Tienes una pregunta rápida?
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Revisa nuestras preguntas frecuentes, tal vez ya tenemos la respuesta que buscas.
              </p>
              <UButton
                color="blue"
                variant="outline"
                to="/faq"
              >
                <UIcon name="i-heroicons-question-mark-circle" class="w-4 h-4 mr-2" />
                Ver FAQ
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod'

// SEO
useHead({
  title: 'Contacto - Hotelier Tools',
  meta: [
    {
      name: 'description',
      content: 'Contacta con nuestro equipo de soporte para resolver dudas, solicitar herramientas personalizadas o obtener ayuda con la configuración.'
    }
  ]
})

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  hotelName: z.string().optional(),
  subject: z.string().min(1, 'Selecciona un asunto'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  acceptPrivacy: z.boolean().refine(val => val === true, 'Debes aceptar la política de privacidad')
})

// Form state
const contactForm = reactive({
  name: '',
  email: '',
  hotelName: '',
  subject: '',
  message: '',
  acceptPrivacy: false
})

const isSubmitting = ref(false)

// Subject options
const subjectOptions = [
  { value: 'general', label: 'Consulta general' },
  { value: 'technical', label: 'Soporte técnico' },
  { value: 'custom', label: 'Herramienta personalizada' },
  { value: 'automation', label: 'Configuración de automatizaciones' },
  { value: 'extension', label: 'Ayuda con extensiones Chrome' },
  { value: 'billing', label: 'Facturación y precios' },
  { value: 'partnership', label: 'Colaboración/Partnership' }
]

// Support options
const supportOptions = [
  {
    title: 'Soporte por Email',
    description: 'Perfecto para consultas detalladas y problemas complejos',
    icon: 'i-heroicons-envelope',
    responseTime: 'Respuesta en menos de 2 horas'
  },
  {
    title: 'Soporte Urgente',
    description: 'Para problemas críticos que afectan tu operación hotelera',
    icon: 'i-heroicons-exclamation-triangle',
    responseTime: 'Respuesta inmediata'
  },
  {
    title: 'Consultoría Técnica',
    description: 'Asesoramiento personalizado para optimizar tu flujo de trabajo',
    icon: 'i-heroicons-academic-cap',
    responseTime: 'Sesión programada en 24h'
  }
]

// Form submission
async function onSubmit() {
  isSubmitting.value = true
  
  try {
    // TODO: Implement actual form submission to API
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    
    // Show success notification
    const toast = useToast()
    toast.add({
      title: 'Mensaje enviado',
      description: 'Hemos recibido tu mensaje. Te responderemos pronto.',
      icon: 'i-heroicons-check-circle',
      color: 'green'
    })
    
    // Reset form
    Object.assign(contactForm, {
      name: '',
      email: '',
      hotelName: '',
      subject: '',
      message: '',
      acceptPrivacy: false
    })
    
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: 'Error al enviar',
      description: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.',
      icon: 'i-heroicons-x-circle',
      color: 'red'
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>
