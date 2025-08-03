<template>
  <div class="container">
    <article>
      <h1>{{ $t('nav.contact') }}</h1>
      <p>Get in touch with our team to learn more about our hospitality solutions.</p>
      
      <section>
        <h2>Contact Information</h2>
        <div>
          <h3>Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        
        <div>
          <h3>Email</h3>
          <p>info@hotelier-tools.com</p>
        </div>
        
        <div>
          <h3>Address</h3>
          <p>123 Hospitality Lane<br>
          Business District<br>
          New York, NY 10001</p>
        </div>
      </section>
      
      <section>
        <h2>Business Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br>
        Saturday: 10:00 AM - 4:00 PM EST<br>
        Sunday: Closed</p>
      </section>
    </article>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()

// SEO configuration for the contact page
useSeoMeta({
  title: 'Contact Us - Hotelier Tools',
  description: 'Get in touch with Hotelier Tools for professional hospitality software solutions. Phone, email, and address information available.',
  ogTitle: 'Contact Hotelier Tools',
  ogDescription: 'Contact our team for hospitality software solutions and support.',
  ogImage: '/images/og-contact.jpg',
  ogType: 'article',
  twitterCard: 'summary',
  twitterTitle: 'Contact Hotelier Tools',
  twitterDescription: 'Get in touch with our hospitality software experts.',
  keywords: 'contact hotelier tools, hospitality software support, hotel management contact, restaurant software help'
})

// Multilingual alternate links
useHead({
  link: [
    {
      rel: 'alternate',
      hreflang: 'en',
      href: `${useRuntimeConfig().public.siteUrl}/contact`
    },
    {
      rel: 'alternate',
      hreflang: 'es',
      href: `${useRuntimeConfig().public.siteUrl}/es/contact`
    },
    {
      rel: 'alternate',
      hreflang: 'fr',
      href: `${useRuntimeConfig().public.siteUrl}/fr/contact`
    }
  ]
})
</script>