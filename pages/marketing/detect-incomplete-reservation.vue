<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-slate-800 py-12 px-4 transition-colors duration-500">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16" v-auto-animate>
        <UBadge color="primary" variant="subtle" size="lg" class="mb-6 animate-bounce">
          {{ $t('marketing.detect_incomplete_reservation.header.badge') }}
        </UBadge>
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
          {{ $t('marketing.detect_incomplete_reservation.header.title') }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          {{ $t('marketing.detect_incomplete_reservation.header.subtitle') }}
        </p>
      </div>

      <!-- Problem Flow -->
      <div class="mb-20">
        <UCard class="mb-12 animate-fade-in-up animation-delay-300">
          <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
            {{ $t('marketing.detect_incomplete_reservation.problem_flow.title') }}
          </h2>
        </UCard>
        
        <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-0 mb-8 items-center" v-auto-animate>
          <!-- Step 1 -->
          <UCard class="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slide-in-left" :ui="{ shadow: 'shadow-md' }">
            <div class="text-center p-2">
              <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <UIcon name="i-heroicons-user" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold text-center mb-2 text-gray-900 dark:text-white">{{ $t('marketing.detect_incomplete_reservation.problem_flow.steps.interested_client.title') }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm text-center">{{ $t('marketing.detect_incomplete_reservation.problem_flow.steps.interested_client.description') }}</p>
            </div>
          </UCard>

          <!-- Arrow 1 -->
          <div class="hidden md:flex justify-center animate-fade-in animation-delay-500">
            <UIcon name="i-heroicons-chevron-right" class="w-8 h-8 text-gray-400 dark:text-gray-600 animate-pulse" />
          </div>

          <!-- Step 2 -->
          <UCard class="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slide-in-left animation-delay-100" :ui="{ shadow: 'shadow-md' }">
            <div class="text-center p-2">
              <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <UIcon name="i-heroicons-document-text" class="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 class="text-lg font-semibold text-center mb-2 text-gray-900 dark:text-white">{{ $t('marketing.detect_incomplete_reservation.problem_flow.steps.complete_form.title') }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm text-center">{{ $t('marketing.detect_incomplete_reservation.problem_flow.steps.complete_form.description') }}</p>
            </div>
          </UCard>

          <!-- Arrow 2 -->
          <div class="hidden md:flex justify-center animate-fade-in animation-delay-600">
            <UIcon name="i-heroicons-chevron-right" class="w-8 h-8 text-gray-400 dark:text-gray-600 animate-pulse animation-delay-200" />
          </div>

          <!-- Step 3 -->
          <UCard class="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slide-in-left animation-delay-200" :ui="{ shadow: 'shadow-md' }">
            <div class="text-center p-2">
              <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <UIcon name="i-heroicons-credit-card" class="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 class="text-lg font-semibold text-center mb-2 text-gray-900 dark:text-white">{{ $t('marketing.detect_incomplete_reservation.problem_flow.steps.enter_card.title') }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm text-center">{{ $t('marketing.detect_incomplete_reservation.problem_flow.steps.enter_card.description') }}</p>
            </div>
          </UCard>

          <!-- Arrow 3 -->
          <div class="hidden md:flex justify-center animate-fade-in animation-delay-700">
            <UIcon name="i-heroicons-chevron-right" class="w-8 h-8 text-red-400 dark:text-red-600 animate-pulse animation-delay-400" />
          </div>

          <!-- Step 4 -->
          <UCard class="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slide-in-left animation-delay-300" 
                 :ui="{ shadow: 'shadow-md', ring: 'ring-2 ring-red-200 dark:ring-red-800' }">
            <div class="text-center p-2">
              <div class="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 animate-pulse">
                <UIcon name="i-heroicons-exclamation-triangle" class="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <UBadge color="red" variant="solid" size="sm" class="mb-2">{{ $t('marketing.detect_incomplete_reservation.problem_flow.steps.problem.badge') }}</UBadge>
              <h3 class="text-lg font-semibold text-center mb-2 text-red-600 dark:text-red-400">{{ $t('marketing.detect_incomplete_reservation.problem_flow.steps.problem.title') }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm text-center">{{ $t('marketing.detect_incomplete_reservation.problem_flow.steps.problem.description') }}</p>
            </div>
          </UCard>
        </div>
      </div>

      <!-- The Disconnect -->
      <UCard class="mb-20 animate-slide-in-up animation-delay-600" :ui="{ shadow: 'shadow-xl' }">
        <template #header>
          <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
            {{ $t('marketing.detect_incomplete_reservation.disconnect.title') }}
          </h2>
        </template>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12" v-auto-animate>
          <!-- Client Side -->
          <div class="text-center group">
            <div class="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110">
              <UIcon name="i-heroicons-face-smile" class="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">{{ $t('marketing.detect_incomplete_reservation.disconnect.client_side.title') }}</h3>
            <UCard class="bg-green-50 dark:bg-green-950 transition-colors duration-300">
              <p class="text-gray-700 dark:text-gray-300 mb-4 font-medium">"{{ $t('marketing.detect_incomplete_reservation.disconnect.client_side.quote') }}"</p>
              <div class="space-y-2">
                <UBadge color="green" variant="soft" size="md" class="mr-2 text-sm">
                  <UIcon name="i-heroicons-check" class="w-3 h-3 mr-1" />
                  {{ $t('marketing.detect_incomplete_reservation.disconnect.client_side.points.money_withheld') }}
                </UBadge>
                <br>
                <UBadge color="green" variant="soft" size="md" class="mr-2 text-sm">
                  <UIcon name="i-heroicons-check" class="w-3 h-3 mr-1" />
                  {{ $t('marketing.detect_incomplete_reservation.disconnect.client_side.points.completed_process') }}
                </UBadge>
                <br>
                <UBadge color="green" variant="soft" size="md" class="text-sm">
                  <UIcon name="i-heroicons-check" class="w-3 h-3 mr-1" />
                  {{ $t('marketing.detect_incomplete_reservation.disconnect.client_side.points.hotel_has_reservation') }}
                </UBadge>
              </div>
            </UCard>
          </div>

          <!-- Hotel Side -->
          <div class="text-center group">
            <div class="w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 animate-pulse">
              <UIcon name="i-heroicons-building-office-2" class="w-12 h-12 text-red-600 dark:text-red-400" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">{{ $t('marketing.detect_incomplete_reservation.disconnect.hotel_side.title') }}</h3>
            <UCard class="bg-red-50 dark:bg-red-950 transition-colors duration-300">
              <p class="text-gray-700 dark:text-gray-300 mb-4 font-medium">"{{ $t('marketing.detect_incomplete_reservation.disconnect.hotel_side.quote') }}"</p>
              <div class="space-y-2">
                <UBadge color="red" variant="soft" size="md" class="mr-2 text-sm">
                  <UIcon name="i-heroicons-x-mark" class="w-3 h-3 mr-1" />
                  {{ $t('marketing.detect_incomplete_reservation.disconnect.hotel_side.points.no_payment_confirmation') }}
                </UBadge>
                <br>
                <UBadge color="red" variant="soft" size="md" class="mr-2 text-sm">
                  <UIcon name="i-heroicons-x-mark" class="w-3 h-3 mr-1" />
                  {{ $t('marketing.detect_incomplete_reservation.disconnect.hotel_side.points.room_available') }}
                </UBadge>
                <br>
                <UBadge color="red" variant="soft" size="md" class="text-sm">
                  <UIcon name="i-heroicons-x-mark" class="w-3 h-3 mr-1" />
                  {{ $t('marketing.detect_incomplete_reservation.disconnect.hotel_side.points.no_system_record') }}
                </UBadge>
              </div>
            </UCard>
          </div>
        </div>
      </UCard>

      <!-- Solution -->
      <UCard class="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white animate-slide-in-up animation-delay-800" 
             :ui="{ shadow: 'shadow-xl', background: '', ring: '', divide: '' }">
        <template #header>
          <h2 class="text-3xl font-semibold text-center text-white mb-4">
            {{ $t('marketing.detect_incomplete_reservation.solution.title') }}
          </h2>
        </template>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" v-auto-animate>
          <!-- Feature 1 -->
          <div class="text-center group">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-opacity-30 group-hover:scale-110">
              <UIcon name="i-heroicons-magnifying-glass" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ $t('marketing.detect_incomplete_reservation.solution.features.monitoring.title') }}</h3>
            <p class="text-blue-100 dark:text-blue-200">{{ $t('marketing.detect_incomplete_reservation.solution.features.monitoring.description') }}</p>
          </div>

          <!-- Feature 2 -->
          <div class="text-center group">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-opacity-30 group-hover:scale-110 animate-bounce animation-delay-300">
              <UIcon name="i-heroicons-bell-alert" class="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ $t('marketing.detect_incomplete_reservation.solution.features.notifications.title') }}</h3>
            <p class="text-blue-100 dark:text-blue-200">{{ $t('marketing.detect_incomplete_reservation.solution.features.notifications.description') }}</p>
          </div>

          <!-- Feature 3 -->
          <div class="text-center group">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-opacity-30 group-hover:scale-110">
              <UIcon name="i-heroicons-chat-bubble-left-right" class="w-8 h-8 text-green-500 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ $t('marketing.detect_incomplete_reservation.solution.features.resolution.title') }}</h3>
            <p class="text-blue-100 dark:text-blue-200">{{ $t('marketing.detect_incomplete_reservation.solution.features.resolution.description') }}</p>
          </div>
        </div>

        <div class="text-center">
          <UButton 
            size="xl" 
            color="neutral"
            variant="solid"
            class="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
            :to="localePath('/tools/bot/unconfirmed')"
          >
            <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5 mr-2" />
            {{ $t('marketing.detect_incomplete_reservation.solution.button') }}
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
// Vue 3 Composition API setup
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

// I18n composable
const localePath = useLocalePath()

// Dark mode composable
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Auto-animate directive
const vAutoAnimate = autoAnimatePlugin
</script>

<style scoped>
/* Custom animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-slide-in-left {
  animation: slide-in-left 0.6s ease-out forwards;
}

.animate-slide-in-up {
  animation: slide-in-up 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

/* Animation delays */
.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

/* Initially hide animated elements */
.animate-fade-in-up,
.animate-slide-in-left,
.animate-slide-in-up,
.animate-fade-in {
  opacity: 0;
}
</style>
