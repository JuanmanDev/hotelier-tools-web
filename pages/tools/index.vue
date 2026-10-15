<template>
  <div data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;index&quot;,&quot;path&quot;:&quot;pages/tools/index.vue&quot;}" class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <i18n-t keypath="tools.hero.title" tag="span">
              <template #span>
                <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {{ $t('tools.hero.span') }}
                </span>
              </template>
            </i18n-t>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('tools.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Tools Showcase -->
    <ToolsShowcase />


    <!-- The dashboard, one click away -->
    <DashboardBanner />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { setSEO, setBreadcrumbs } = useSEO()

// Set SEO metadata for tools page
setSEO('tools')

setBreadcrumbs([
  { name: t('nav.home'), url: '/' },
  { name: t('nav.tools'), url: '/tools' }
])

</script>