<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// The page language (html lang, hreflang) comes from @nuxtjs/i18n and useSEO();
// Organization and WebSite structured data come from nuxt-schema-org (nuxt.config.ts)
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})
</script>
