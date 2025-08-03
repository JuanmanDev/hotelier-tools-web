<template>
  <div class="container">
    <article>
      <h1>{{ $t('services.title') }}</h1>
      <p>{{ $t('services.description') }}</p>
      
      <section>
        <h2>Hotel Management System</h2>
        <p>Comprehensive property management solution with reservation management, guest services, and operational tools.</p>
        <ul>
          <li>Room inventory management</li>
          <li>Guest check-in/check-out</li>
          <li>Billing and invoicing</li>
          <li>Reporting and analytics</li>
        </ul>
      </section>
      
      <section>
        <h2>Restaurant POS System</h2>
        <p>Complete point-of-sale solution designed specifically for restaurants and food service establishments.</p>
        <ul>
          <li>Order management</li>
          <li>Kitchen display systems</li>
          <li>Inventory tracking</li>
          <li>Staff management</li>
        </ul>
      </section>
      
      <section>
        <h2>Guest Experience Platform</h2>
        <p>Enhance guest satisfaction with our comprehensive guest experience management tools.</p>
        <ul>
          <li>Guest communication</li>
          <li>Concierge services</li>
          <li>Feedback management</li>
          <li>Loyalty programs</li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()

// SEO configuration for the services page
useSeoMeta({
  title: () => t('seo.servicesTitle'),
  description: () => t('seo.servicesDescription'),
  ogTitle: () => t('seo.servicesTitle'),
  ogDescription: () => t('seo.servicesDescription'),
  ogImage: '/images/og-services.jpg',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.servicesTitle'),
  twitterDescription: () => t('seo.servicesDescription'),
  keywords: 'hotel management system, restaurant POS, guest experience platform, hospitality software services'
})

// Multilingual alternate links
useHead({
  link: [
    {
      rel: 'alternate',
      hreflang: 'en',
      href: `${useRuntimeConfig().public.siteUrl}/services`
    },
    {
      rel: 'alternate',
      hreflang: 'es',
      href: `${useRuntimeConfig().public.siteUrl}/es/services`
    },
    {
      rel: 'alternate',
      hreflang: 'fr',
      href: `${useRuntimeConfig().public.siteUrl}/fr/services`
    }
  ]
})
</script>