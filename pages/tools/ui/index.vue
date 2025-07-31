<template>
  <div class="max-w-7xl mx-auto py-12 px-4">
    <section class="text-center mb-12">
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {{ $t('tools.ui.title') }}
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {{ $t('tools.ui.subtitle') }}
      </p>
    </section>
    <div class="gap-8">
      <NuxtLink
        v-for="script in scripts"
        :key="script.url"
        :to="script.url"
        class="mb-4 block bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-6 border border-gray-100 dark:border-gray-700"
      >
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img
            v-if="script.meta.images?.after"
            :src="script.meta.images.after"
            alt="after"
            class="max-h-44 w-full sm:w-1/2 rounded object-cover border border-gray-200 dark:border-gray-700 flex-shrink-0"
            :style="'view-transition-name: ui-features-after-'+ script.path.split('/').pop()"
          />
          <div class="w-full sm:w-1/2 min-w-0">
            <h2 class="text-xl sm:text-lg font-bold text-gray-900 dark:text-white mb-2" 
              :style="'view-transition-name: ui-features-title-'+ script.path.split('/').pop()"
            >{{ script.title }}</h2>
            <div class="text-gray-600 dark:text-gray-300 text-sm line-clamp-3" 
              :style="'view-transition-name: ui-features-content-'+ script.path.split('/').pop()"
            >
              <ContentRenderer :value="script" :excerpt="true" />
            </div>
            <UButton color="primary" class="mt-2 w-full md:mt-10">
              {{ $t('tools.ui.view_details') }}
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
            </UButton>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

// get current url
let currentUrl = useRoute().fullPath;
if (!currentUrl.endsWith('/')) {
  currentUrl +=  '/';
}

const { data: scripts } = await useAsyncData(async () => {
  const d = await queryCollection('content').where("path", "LIKE", "/scripts/" + locale.value +"/%").all()
  return d.map(e => ({
    ...e,
    url: currentUrl + e.path.split("/").pop(),
  }))
})
</script>
