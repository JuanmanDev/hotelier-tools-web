<template>
  <div>
    <header>
      <nav class="container">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <ul>
            <li><NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink></li>
            <li><NuxtLink to="/about">{{ $t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink to="/services">{{ $t('nav.services') }}</NuxtLink></li>
            <li><NuxtLink to="/contact">{{ $t('nav.contact') }}</NuxtLink></li>
          </ul>
          <div class="language-switcher">
            <NuxtLink to="/">English</NuxtLink>
            <NuxtLink to="/es">Español</NuxtLink>
            <NuxtLink to="/fr">Français</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2024 {{ $t('seo.siteName') }}. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// SEO metadata for the layout
useHead({
  meta: [
    {
      name: 'author',
      content: 'Hotelier Tools Team'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>