<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
      {{ t('contact.form.title') }}
    </h2>

    <form @submit.prevent="onSubmit" class="space-y-8">
      <!-- Name -->
      <UFormGroup :label="t('contact.form.name')" name="name" required class="space-y-3">
        <UInput
          v-model="contactForm.name"
          :placeholder="t('contact.form.placeholders.name')"
          icon="i-heroicons-user"
          size="lg"
          class="w-full mb-4"
        />
      </UFormGroup>

      <!-- Email -->
      <UFormGroup :label="t('contact.form.email')" name="email" required class="space-y-3">
        <UInput
          v-model="contactForm.email"
          type="email"
          :placeholder="t('contact.form.placeholders.email')"
          icon="i-heroicons-envelope"
          size="lg"
          class="w-full mb-4"
        />
      </UFormGroup>

      <!-- Phone -->
      <UFormGroup :label="t('contact.form.phone')" name="phone" class="space-y-3">
        <UInput
          v-model="contactForm.phone"
          type="tel"
          :placeholder="t('contact.form.placeholders.phone')"
          icon="i-heroicons-phone"
          size="lg"
          class="w-full mb-4"
        />
      </UFormGroup>

      <!-- Hotel Name -->
      <UFormGroup :label="t('contact.form.hotel_name')" name="hotelName" class="space-y-3">
        <UInput
          v-model="contactForm.hotelName"
          :placeholder="t('contact.form.placeholders.hotel')"
          icon="i-heroicons-building-office-2"
          size="lg"
          class="w-full mb-4"
        />
      </UFormGroup>

      <!-- Subject -->
      <UFormGroup :label="t('contact.form.subject')" name="subject" required class="space-y-3">
        <USelect
          v-model="contactForm.subject"
          :items="subjectOptions"
          :placeholder="t('contact.form.placeholders.subject')"
          size="lg"
          class="w-full mb-4"
        />
      </UFormGroup>

      <!-- Message -->
      <UFormGroup :label="t('contact.form.message')" name="message" required class="space-y-3">
        <UTextarea
          v-model="contactForm.message"
          :placeholder="t('contact.form.placeholders.message')"
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
            {{ t('contact.form.privacy') }}
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
          {{ t('contact.form.send') }}
        </UButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// Internationalization
const { t } = useI18n()

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
  { value: 'general', label: t('contact.form.subjects.general') },
  { value: 'technical', label: t('contact.form.subjects.technical') },
  { value: 'custom', label: t('contact.form.subjects.custom') },
  { value: 'automation', label: t('contact.form.subjects.automation') },
  { value: 'extension', label: t('contact.form.subjects.extension') },
  { value: 'billing', label: t('contact.form.subjects.billing') },
  { value: 'partnership', label: t('contact.form.subjects.partnership') }
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
