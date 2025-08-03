<template>
  <section ref="statsSection" class="relative bg-gradient-to-r from-blue-600 to-indigo-600 py-16 lg:py-24 overflow-hidden">
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

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
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
const { t } = useI18n()

const statsSection = ref<HTMLElement>()
const animatedValues = ref<number[]>([0, 0, 0, 0])
const hasAnimated = ref(false)

const stats = [
  { value: 95, suffix: '%', label: 'home.stats.error_reduction' },
  { value: 3, suffix: 'h', label: 'home.stats.time_saved' },
  { value: 15, suffix: '%', label: 'home.stats.conversion_increase' },
  { value: 24, suffix: '/7', label: 'home.stats.monitoring' }
]

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
  stats.forEach((stat, index) => {
    // Add a small delay between each number animation
    setTimeout(() => {
      animateNumber(stat.value, index)
    }, index * 200)
  })
}

onMounted(() => {
  if (!statsSection.value) return
  
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
