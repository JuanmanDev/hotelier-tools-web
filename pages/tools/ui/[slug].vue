<template>
  <div class="mx-auto py-12 px-4">
    <!-- Before/After Images Section -->
    <section v-if="doc.meta.images?.before || doc.meta.images?.after" class="max-w-7xl mx-auto mb-8 w-full">
      <div class="flex items-center justify-center gap-0 w-full">
        <div v-if="doc.meta.images?.before" class="flex-1 text-center">
          <img :src="doc.meta.images.before" alt="before" class="object-cover w-full h-96 rounded shadow-lg border border-gray-200 dark:border-gray-700" />
          <div class="text-sm text-gray-500 mt-2 font-medium">{{ $t('tools.ui.before') }}</div>
        </div>
        <div v-if="doc.meta.images?.before && doc.meta.images?.after" class="flex-shrink-0">
          <UIcon name="i-heroicons-chevron-right" class="w-16 h-16 text-gray-400" />
        </div>
        <div v-if="doc.meta.images?.after" class="flex-1 text-center">
          <img :src="doc.meta.images.after" alt="after" class="object-cover w-full h-96 rounded shadow-lg border border-gray-200 dark:border-gray-700" 
            :style="'view-transition-name: ui-features-after-'+ route.params.slug"
          />
          <div class="text-sm text-gray-500 mt-2 font-medium">{{ $t('tools.ui.after') }}</div>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mb-8 mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4" 
        :style="'view-transition-name: ui-features-title-'+ route.params.slug"
      >{{ doc?.title }}</h1>
      <div class="flex gap-3 mb-6 sm:flex-row flex-col">
        <UButton
          color="primary"
          :to="doc.meta.github"
          target="_blank"
        >
          <UIcon name="i-simple-icons-github" class="w-5 h-5 mr-2" />
          {{ $t('tools.ui.view_code') }}
        </UButton>
        <UButton
          color="secondary"
          :to="doc.instructions || localePath('/tools/ui/instructions')"
        >
          <UIcon name="i-heroicons-document-text" class="w-5 h-5 mr-2" />
          {{ $t('tools.ui.install_instructions') }}
        </UButton>
      </div>
    </section>

    <section class="max-w-5xl mb-8 mx-auto prose dark:prose-invert" 
      :style="'view-transition-name: ui-features-content-'+ route.params.slug"
    >
      <ContentRenderer :value="doc" />
    </section>

    <section v-if="doc.meta.images?.gallery?.length" class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 max-w-5xl mx-auto">
        {{ $t('tools.ui.gallery') }}
      </h2>
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(img, i) in doc.meta.images.gallery" :key="i">
          <div class="carousel__item p-2">
            <img
              :src="img"
              class="w-full rounded shadow border border-gray-200 dark:border-gray-700"
              :alt="doc.title + ' screenshot ' + (i+1)"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </section>

    <UButton color="gray" :to="localePath('/tools/ui')" class="mt-4">
      <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
      {{ $t('tools.ui.back_to_list') }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()
const newLocal = `/scripts/${locale.value}/${route.params.slug}`
const { data: doc } = await useAsyncData(() => queryCollection('content').path(newLocal).first())

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Script not found' + ' - ' + newLocal })
}

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
  breakpoints: {
    1: {
      itemsToShow: 1.1,
    },
    768: {
      itemsToShow: 1.1,
    },
    1024: {
      itemsToShow: 1.2,
    },
    300: {
      itemsToShow: 1.4,
    }
  }
}
</script>

<style>
.carousel__item {
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
