<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section with Animation -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <i18n-t keypath="bot.hero.title" tag="span">
              <template #span>
                <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {{ $t('bot.hero.span') }}
                </span>
              </template>
            </i18n-t>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('bot.hero.subtitle') }}
          </p>
        </div>

        <!-- Bot Animation Container -->
        <div class="relative w-full mx-auto max-w-6xl min-h-[600px]" ref="containerRef">
          <!-- Background Bot Icon -->
          <div class="absolute inset-0 flex items-center justify-center z-0">
            <UIcon name="i-heroicons-cpu-chip" class="w-80 h-80 text-blue-200/20 dark:text-blue-400/10" />
          </div>

          <!-- Data Beam Traces -->
          <div class="absolute inset-0 pointer-events-none z-10">
            <svg class="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="beamGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#60A5FA;stop-opacity:0.3" />
                  <stop offset="100%" style="stop-color:#60A5FA;stop-opacity:0.3" />
                </linearGradient>
                <linearGradient id="flowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:white;stop-opacity:0" />
                  <stop offset="30%" style="stop-color:white;stop-opacity:0.8" />
                  <stop offset="70%" style="stop-color:#1D4ED8;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#60A5FA;stop-opacity:0" />
                </linearGradient>
              </defs>
              
              <!-- Fixed traces for each active task -->
              <g v-for="(trace, index) in fixedTraces" :key="index">
                <!-- Base trace line -->
                <polyline
                  :points="trace.path"
                  stroke="url(#beamGradient)"
                  stroke-width="7"
                  fill="none"
                  :style="{ opacity: blurStates[index] ? 0.1 : 0.4 }"
                  class="base-trace"
                />
                
                <!-- Animated data flow -->
                <polyline
                  v-if="!blurStates[index]"
                  :points="trace.path"
                  stroke="url(#flowGradient)"
                  stroke-width="6"
                  fill="none"
                  stroke-dasharray="20 80"
                  :class="`data-flow flow-${index}`"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </div>

          <!-- Grid Layout -->
          <div class="relative z-20 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6 h-full">
            <!-- Row 1: No-usar, bloque1, bloque1, bloque2, bloque2, No-usar -->
            <div class="hidden lg:block"></div>
            <div class="col-span-2 flex justify-center">
              <div class="task-block" :class="{ 'task-blur': blurStates[0] }" >
                <div class="task-header">
                  <div class="task-icon">
                    <UIcon name="i-heroicons-arrow-right-start-on-rectangle" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 class="task-title">
                    {{ $t('bot.tasks.checkout.title') }}
                  </h3>
                </div>
                <p class="task-description">
                  {{ $t('bot.tasks.checkout.description') }}
                </p>
              </div>
            </div>
            <div class="col-span-2 flex justify-center">
              <div class="task-block" :class="{ 'task-blur': blurStates[1] }" >
                <div class="task-header">
                  <div class="task-icon">
                    <UIcon name="i-heroicons-credit-card" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 class="task-title">
                    {{ $t('bot.tasks.payments.title') }}
                  </h3>
                </div>
                <p class="task-description">
                  {{ $t('bot.tasks.payments.description') }}
                </p>
              </div>
            </div>
            <div class="hidden lg:block"></div>

            <!-- Row 2: bloque3, bloque3, No-usar, No-usar, bloque4, bloque4 -->
            <div class="col-span-2 flex justify-center">
              <div class="task-block" :class="{ 'task-blur': blurStates[2] }" >
                <div class="task-header">
                  <div class="task-icon">
                    <UIcon name="i-heroicons-user-group" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 class="task-title">
                    {{ $t('bot.tasks.guests.title') }}
                  </h3>
                </div>
                <p class="task-description">
                  {{ $t('bot.tasks.guests.description') }}
                </p>
              </div>
            </div>
            <div class="hidden lg:block"></div>
            <div class="hidden lg:block"></div>
            <div class="col-span-2 flex justify-center">
              <div class="task-block" :class="{ 'task-blur': blurStates[3] }" >
                <div class="task-header">
                  <div class="task-icon">
                    <UIcon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 class="task-title">
                    {{ $t('bot.tasks.unconfirmed.title') }}
                  </h3>
                </div>
                <p class="task-description">
                  {{ $t('bot.tasks.unconfirmed.description') }}
                </p>
              </div>
            </div>

            <!-- Row 3: No-usar, bloque5, bloque5, bloque6, bloque6, No-usar -->
            <div class="hidden lg:block"></div>
            <div class="col-span-2 flex justify-center">
              <div class="task-block" :class="{ 'task-blur': blurStates[4] }" >
                <div class="task-header">
                  <div class="task-icon">
                    <UIcon name="i-heroicons-calculator" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 class="task-title">
                    {{ $t('bot.tasks.prices.title') }}
                  </h3>
                </div>
                <p class="task-description">
                  {{ $t('bot.tasks.prices.description') }}
                </p>
              </div>
            </div>
            <div class="col-span-2 flex justify-center">
              <div class="task-block" :class="{ 'task-blur': blurStates[5] }" >
                <div class="task-header">
                  <div class="task-icon">
                    <UIcon name="i-heroicons-document-text" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 class="task-title">
                    {{ $t('bot.tasks.invoices.title') }}
                  </h3>
                </div>
                <p class="task-description">
                  {{ $t('bot.tasks.invoices.description') }}
                </p>
              </div>
            </div>
            <div class="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const hoveredTask = ref<number | null>(null)
const blurStates = ref<boolean[]>([true, true, true, true, true, true])
const containerRef = ref<HTMLElement>()

const fixedTraces = ref<Array<{ path: string }>>([])

// SEO
useHead({
  title: computed(() => `${$t('bot.tasks.checkout.title')} - Hotelier Tools`),
  meta: [
    {
      name: 'description',
      content: computed(() => $t('bot.hero.subtitle'))
    }
  ]
})

// Random blur state toggle
const toggleRandomBlur = () => {
  const activeCount = blurStates.value.filter(state => !state).length
  
  // Ensure at least 2 elements are always active (not blurred)
  if (activeCount <= 2) {
    // Find a blurred element to activate
    const blurredIndices = blurStates.value.map((state, index) => state ? index : -1).filter(index => index !== -1)
    if (blurredIndices.length > 0) {
      const randomIndex = blurredIndices[Math.floor(Math.random() * blurredIndices.length)]
      blurStates.value[randomIndex] = false
    }
  } else {
    // Randomly toggle any element
    const randomIndex = Math.floor(Math.random() * blurStates.value.length)
    blurStates.value[randomIndex] = !blurStates.value[randomIndex]
    
    // Check if we still have at least 2 active after toggle
    const newActiveCount = blurStates.value.filter(state => !state).length
    if (newActiveCount < 2) {
      blurStates.value[randomIndex] = false // Revert the change
    }
  }
}

// Generate fixed traces
const generateFixedTraces = () => {
  if (!containerRef.value) return
  
  const containerRect = containerRef.value.getBoundingClientRect()
  const centerX = containerRect.width / 2
  const centerY = containerRect.height / 2
  const quarterW = containerRect.width / 6
  
  const taskPositions = [
    { x: centerX - 120, y: centerY - 220 }, // task 1
    { x: centerX + 120, y: centerY - 220 }, // task 2
    { x: quarterW, y: centerY },  // task 3
    { x: 5 * quarterW, y: centerY },  // task 4
    { x: centerX - 120, y: centerY + 150 }, // task 5
    { x: centerX + 120, y: centerY + 150 }  // task 6
  ]
  
  fixedTraces.value = taskPositions.map((pos, index) => {
    // Alternate between horizontal and vertical paths for variety
    if (index !== 2 && index != 3) {

      let movement = index % 2 === 0 ? -15 : 15
      // Horizontal path
      const path = `${pos.x} ${pos.y} ${centerX + movement} ${pos.y} ${centerX + movement} ${centerY} ${centerX} ${centerY}`
      return { path }
    } else {
      // Vertical path
      const path = `${pos.x + 15} ${pos.y + 15} ${pos.x} ${pos.y} ${centerX} ${centerY}`
      return { path }
    }
  })
}

onMounted(() => {
  generateFixedTraces()
  
  // First laod animation
  const map = [0, 1, 3, 5, 4, 2]
  for (let i = 0; i < blurStates.value.length; i++) {
    setTimeout(() => {
      blurStates.value[map[i]] = false // Ensure at least 2 tasks are active initially
    }, i * 120) // Stagger the activation
    setTimeout(() => {
      blurStates.value[map[i]] = Math.random() < 0.4 // Ensure at least 2 tasks are active initially
    }, i * 120 + 700) // Stagger the activation
  }

  // Random toggle interval
  const toggleInterval = setInterval(toggleRandomBlur, 2500)
  
  // Handle window resize
  if (process.client) {
    window.addEventListener('resize', generateFixedTraces)
  }
  
  onUnmounted(() => {
    clearInterval(toggleInterval)
    if (process.client) {
      window.removeEventListener('resize', generateFixedTraces)
    }
  })
})
</script>

<style scoped>
@reference "tailwindcss";

.task-block {
  @apply bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer w-52 text-center;
  transition: transform 0.4s ease, filter 0.4s ease, opacity 0.4s ease, box-shadow 0.4s ease;
  filter: blur(0px);
  opacity: 1;
  transform: scale(1.05);
}

.task-block.task-blur {
  filter: blur(2px);
  opacity: 0.7;
  transform: scale(0.95);
}

.task-block:hover {
  filter: blur(0px) !important;
  opacity: 1 !important;
  transform: scale(1.08) !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
}

.task-header {
  @apply flex items-center gap-3 mb-4 text-left;
}

.task-icon {
  @apply flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg flex-shrink-0;
}

.task-title {
  @apply font-semibold text-gray-900 dark:text-white text-base flex-1;
}

.task-description {
  @apply text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-center;
}

.base-trace {
  filter: drop-shadow(0 0 2px #60A5FA);
  transition: opacity 0.5s ease;
}

.data-flow {
  filter: drop-shadow(0 0 6px #3B82F6);
  animation: data-flow-animation 25s linear infinite;
}

/* .flow-0 { animation-delay: 0s; }
.flow-1 { animation-delay: 0.5s; }
.flow-2 { animation-delay: 1s; }
.flow-3 { animation-delay: 1.5s; }
.flow-4 { animation-delay: 2s; }
.flow-5 { animation-delay: 2.5s; } */

@keyframes data-flow-animation {
  0% {
    stroke-dashoffset: -1000;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1; 
  }
  100% {
    stroke-dashoffset: 1000;
    opacity: 0;
  }
}
</style>
