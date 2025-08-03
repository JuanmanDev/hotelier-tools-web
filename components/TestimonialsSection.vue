<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-blue-900 dark:to-indigo-900 py-16 lg:py-24">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[size:20px_20px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
    
    <!-- Background Decorative Elements -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-blob"></div>
    <div class="absolute top-0 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('home.testimonials.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ t('home.testimonials.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(review, index) in testimonials"
          :key="index"
          class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50"
          :class="`animate-fade-in-up delay-${(index + 1) * 100}`"
        >
          <!-- Star Rating -->
          <div class="flex items-center mb-4">
            <div class="flex">
              <UIcon 
                v-for="star in review.rating"
                :key="star"
                name="i-heroicons-star-solid"
                class="w-5 h-5 text-yellow-400"
              />
            </div>
          </div>

          <!-- Quote -->
          <blockquote class="text-gray-700 dark:text-gray-300 mb-6 italic text-lg leading-relaxed">
            "{{ t(`home.testimonials.reviews.${index}.quote`) }}"
          </blockquote>

          <!-- Author Info -->
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-semibold text-gray-900 dark:text-white">
                  {{ t(`home.testimonials.reviews.${index}.author`) }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ t(`home.testimonials.reviews.${index}.location`) }}
                </p>
                <a 
                  v-if="review.website"
                  :href="`https://${review.website}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {{ review.website }}
                </a>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-quote-left" class="w-8 h-8 text-blue-200 dark:text-blue-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const testimonials = [
  {
    rating: 5,
    website: 'hostalsolzamora.com'
  },
  {
    rating: 5
  },
  {
    rating: 5
  }
]
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
