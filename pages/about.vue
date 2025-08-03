<template>
  <div class="container">
    <article>
      <h1>{{ $t('about.title') }}</h1>
      <p>{{ $t('about.description') }}</p>
      
      <section>
        <h2>Our Mission</h2>
        <p>To revolutionize the hospitality industry through innovative technology solutions that enhance operational efficiency and guest satisfaction.</p>
      </section>
      
      <section>
        <h2>Our Team</h2>
        <p>We are a dedicated team of hospitality professionals and technology experts committed to delivering exceptional solutions for the industry.</p>
      </section>
    </article>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()

// SEO configuration for the about page
useSeoMeta({
  title: () => t('seo.aboutTitle'),
  description: () => t('seo.aboutDescription'),
  ogTitle: () => t('seo.aboutTitle'),
  ogDescription: () => t('seo.aboutDescription'),
  ogImage: '/images/og-about.jpg',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.aboutTitle'),
  twitterDescription: () => t('seo.aboutDescription'),
  keywords: 'about hotelier tools, hospitality company, hotel software team, restaurant technology experts'
})

// Multilingual alternate links
useHead({
  link: [
    {
      rel: 'alternate',
      hreflang: 'en',
      href: `${useRuntimeConfig().public.siteUrl}/about`
    },
    {
      rel: 'alternate',
      hreflang: 'es',
      href: `${useRuntimeConfig().public.siteUrl}/es/about`
    },
    {
      rel: 'alternate',
      hreflang: 'fr',
      href: `${useRuntimeConfig().public.siteUrl}/fr/about`
    }
  ]
})
</script>