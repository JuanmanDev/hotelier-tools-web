<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
      Envíanos un mensaje
    </h2>

    <form @submit.prevent="onSubmit" class="space-y-8">
      <!-- Name -->
      <UFormGroup label="Nombre completo" name="name" required class="space-y-3">
        <UInput
          v-model="contactForm.name"
          placeholder="Tu nombre completo"
          icon="i-heroicons-user"
          size="lg"
          class="w-full mb-4"
        />
      </UFormGroup>

      <!-- Email -->
      <UFormGroup label="Email" name="email" required class="space-y-3">
        <UInput
          v-model="contactForm.email"
          type="email"
          placeholder="tu.email@hotel.com"
          icon="i-heroicons-envelope"
          size="lg"
          class="w-full mb-4"
        />
      </UFormGroup>

      <!-- Phone -->
      <UFormGroup label="Teléfono" name="phone" class="space-y-3">
        <UInput
          v-model="contactForm.phone"
          type="tel"
          placeholder="+34 600 000 000"
          icon="i-heroicons-phone"
          size="lg"
          class="w-full mb-4"
        />
      </UFormGroup>

      <!-- Hotel Name -->
      <UFormGroup label="Nombre del hotel" name="hotelName" class="space-y-3">
        <UInput
          v-model="contactForm.hotelName"
          placeholder="Hotel Paradise"
          icon="i-heroicons-building-office-2"
          size="lg"
          class="w-full mb-4"
        />
      </UFormGroup>

      <!-- Subject -->
      <UFormGroup label="Asunto" name="subject" required class="space-y-3">
        <USelect
          v-model="contactForm.subject"
          :items="subjectOptions"
          placeholder="Selecciona un asunto"
          size="lg"
          class="w-full mb-4"
        />
      </UFormGroup>

      <!-- Message -->
      <UFormGroup label="Mensaje" name="message" required class="space-y-3">
        <UTextarea
          v-model="contactForm.message"
          placeholder="Cuéntanos cómo podemos ayudarte..."
          :rows="6"
          size="lg"
          class="w-full resize-none mb-4"
        />
      </UFormGroup>

      <!-- Privacy Policy -->
      <UFormGroup name="acceptPrivacy" class="pt-4">
        <div class="flex items-start space-x-3 mb-4">
          <UCheckbox
            v-model="contactForm.acceptPrivacy"
            name="acceptPrivacy"
            class="mt-1"
          />
          <label class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Acepto la política de privacidad y el tratamiento de mis datos
          </label>
        </div>
      </UFormGroup>

      <!-- Submit Button -->
      <div class="pt-6">
        <UButton
          @click="onSubmit"
          color="primary"
          size="lg"
          :disabled="!contactForm.acceptPrivacy"
          class="w-full justify-center bg-green-600 hover:bg-green-700 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5 mr-2" />
          Enviar Mensaje
        </UButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// Form state
const contactForm = reactive({
  name: '',
  email: '',
  phone: '',
  hotelName: '',
  subject: '',
  message: '',
  acceptPrivacy: false
})

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

// Form submission
function onSubmit() {
  // Get the selected subject label
  const selectedSubject = subjectOptions.find(option => option.value === contactForm.subject)
  const subjectLabel = selectedSubject ? selectedSubject.label : contactForm.subject
  
  // Create email body with all form information
  const emailBody = `
Nombre: ${contactForm.name}
Email: ${contactForm.email}
${contactForm.phone ? `Teléfono: ${contactForm.phone}` : ''}
${contactForm.hotelName ? `Hotel: ${contactForm.hotelName}` : ''}
Asunto: ${subjectLabel}

Mensaje:
${contactForm.message}
  `.trim()
  
  // Create mailto URL
  const mailtoUrl = `mailto:JuanmaDeveloper+hotelierTools@outlook.com?subject=${encodeURIComponent(`Hotelier Tools - ${subjectLabel}`)}&body=${encodeURIComponent(emailBody)}`
  
  // Open email client
  window.location.href = mailtoUrl
}
</script>
