<template>
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
</template>

<script setup>
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
</script>
