<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const { setStructuredData } = useSEO()

// Global head configuration with proper language handling
useHead({
  htmlAttrs: {
    lang: computed(() => locale.value === 'es' ? 'es' : 'en')
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})

// Set organization structured data globally
onMounted(() => {
  setStructuredData('Organization')
  setStructuredData('WebSite')
})
</script>
