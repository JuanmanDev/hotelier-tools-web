<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1>{{ $t('home.welcome') }}</h1>
        <p>{{ $t('home.subtitle') }}</p>
        <NuxtLink to="/services" class="btn">{{ $t('home.cta') }}</NuxtLink>
      </div>
    </div>
    
    <div class="container">
      <section>
        <h2>Professional Hospitality Solutions</h2>
        <p>Our comprehensive suite of tools helps hotels, restaurants, and hospitality businesses streamline operations, enhance guest experiences, and maximize revenue.</p>
      </section>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

// Comprehensive SEO configuration for the home page
useSeoMeta({
  title: () => t('seo.homeTitle'),
  description: () => t('seo.homeDescription'),
  ogTitle: () => t('seo.homeTitle'),
  ogDescription: () => t('seo.homeDescription'),
  ogImage: '/images/og-home.jpg',
  ogType: 'website',
  ogSiteName: () => t('seo.siteName'),
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.homeTitle'),
  twitterDescription: () => t('seo.homeDescription'),
  twitterImage: '/images/twitter-home.jpg',
  keywords: 'hotel management, hospitality tools, restaurant software, booking system, guest management'
})

// Additional head configuration with hreflang
useHead({
  link: [
    {
      rel: 'alternate',
      hreflang: 'en',
      href: `${useRuntimeConfig().public.siteUrl}/`
    },
    {
      rel: 'alternate',
      hreflang: 'es',
      href: `${useRuntimeConfig().public.siteUrl}/es/`
    },
    {
      rel: 'alternate',
      hreflang: 'fr',
      href: `${useRuntimeConfig().public.siteUrl}/fr/`
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${useRuntimeConfig().public.siteUrl}/`
    }
  ]
})
</script>