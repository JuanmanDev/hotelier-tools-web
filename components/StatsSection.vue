<template>
  <section data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;StatsSection&quot;,&quot;path&quot;:&quot;components/StatsSection.vue&quot;}" ref="statsSection" class="relative bg-gradient-to-r from-blue-600 to-indigo-600 py-16 lg:py-24 overflow-hidden">
    <!-- Animated Gear Background -->
    <div class="absolute inset-0 opacity-10">
      <GearIcon />
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          {{ t('home.stats.title') }}
        </h2>
        <p class="text-xl text-blue-100">
          {{ t('home.stats.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div 
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="text-center"
        >
          <div class="text-4xl lg:text-5xl font-bold text-white mb-2">
            {{ animatedValues[index] }}{{ stat.suffix }}
          </div>
          <div class="text-blue-100">
            {{ t(stat.label) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { platformSlides } from '~/data/platform'

const { t, locales } = useI18n()

const statsSection = ref<HTMLElement>()
const hasAnimated = ref(false)

// Every figure is counted from what this site publishes, so none of them can drift from the truth:
// - scripts and guides: the markdown files in content/scripts/en and content/blog/en
// - languages: the locales registered in nuxt.config.ts
// - dashboard features: the entries of platformSlides in data/platform.ts
const { data: counts } = await useAsyncData('home-stats-counts', async () => {
  const [scripts, guides] = await Promise.all([
    queryCollection('content').where('path', 'LIKE', '/scripts/en/%').count(),
    queryCollection('content').where('path', 'LIKE', '/blog/en/%').count()
  ])
  return { scripts, guides }
})

const stats = computed(() => [
  { value: counts.value?.scripts ?? 0, suffix: '', label: 'home.stats.scripts' },
  { value: counts.value?.guides ?? 0, suffix: '', label: 'home.stats.guides' },
  { value: locales.value.length, suffix: '', label: 'home.stats.languages' },
  { value: platformSlides.length, suffix: '', label: 'home.stats.features' }
].filter(stat => stat.value > 0))

// The server-rendered HTML carries the real figures, so search engines and visitors without
// JavaScript never see zeros; the count-up only replays in the browser
const animatedValues = ref<number[]>(stats.value.map(stat => stat.value))

const animateNumber = (targetValue: number, index: number, duration: number = 2000) => {
  const startTime = Date.now()
  const startValue = 0
  
  const animate = () => {
    const currentTime = Date.now()
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Ease out animation
    const easeOutProgress = 1 - Math.pow(1 - progress, 3)
    const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutProgress)
    
    animatedValues.value[index] = currentValue
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      animatedValues.value[index] = targetValue
    }
  }
  
  requestAnimationFrame(animate)
}

const startAnimation = () => {
  if (hasAnimated.value) return
  
  hasAnimated.value = true
  stats.value.forEach((stat, index) => {
    // Add a small delay between each number animation
    setTimeout(() => {
      animateNumber(stat.value, index)
    }, index * 200)
  })
}

onMounted(() => {
  if (!statsSection.value) return

  // Already on screen when the page loads: keep the final figures instead of resetting them
  if (statsSection.value.getBoundingClientRect().top < window.innerHeight) return
  animatedValues.value = stats.value.map(() => 0)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )
  
  observer.observe(statsSection.value)
})
</script>
