<template>
  <div class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('home.process_animation.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ t('home.process_animation.subtitle') }}
        </p>
      </div>

      <!-- Animation Container -->
      <div class="relative max-w-4xl mx-auto">

        <!-- Animation Steps -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div 
            v-for="(step, index) in steps" 
            :key="step.id"
            class="relative"
            :class="{ 'opacity-50': index > currentStep }"
          >
            <!-- Step Card -->
            <div 
              class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-500"
              :class="{
                // 'ring-2 ring-blue-500 shadow-blue-200 dark:shadow-blue-900': index === currentStep,
                // 'transform scale-105': index === currentStep,
                // 'shadow-hotel': index < currentStep
              }"
            >
              <!-- Step Icon -->
              <div class="flex items-center justify-center mb-4">
                <div 
                  class="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500"
                  :class="{
                    'bg-red-100 dark:bg-red-900': step.status === 'error',
                    'bg-yellow-100 dark:bg-yellow-900': step.status === 'pending',
                    'bg-blue-100 dark:bg-blue-900 animate-pulse-subtle': step.status === 'in-progress',
                    'bg-green-100 dark:bg-green-900': step.status === 'completed'
                  }"
                >
                  <UIcon 
                    :name="step.icon" 
                    class="w-8 h-8"
                    :class="{
                      'text-red-600 dark:text-red-400': step.status === 'error',
                      'text-yellow-600 dark:text-yellow-400': step.status === 'pending',
                      'text-blue-600 dark:text-blue-400': step.status === 'in-progress',
                      'text-green-600 dark:text-green-400': step.status === 'completed'
                    }"
                  />
                </div>
              </div>

              <!-- Step Content -->
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-center text-sm">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Benefits Section -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="benefit in benefits"
            :key="benefit.title"
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <UIcon :name="benefit.icon" class="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ benefit.title }}</h4>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AnimationStep } from '~/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
let animationInterval: NodeJS.Timeout | null = null

const steps = computed<AnimationStep[]>(() => [
  {
    id: 'detection',
    title: t('home.process_animation.steps.detection.title'),
    description: t('home.process_animation.steps.detection.description'),
    icon: 'i-heroicons-magnifying-glass',
    status: 'pending',
    duration: 2000
  },
  {
    id: 'notification',
    title: t('home.process_animation.steps.notification.title'),
    description: t('home.process_animation.steps.notification.description'),
    icon: 'i-heroicons-envelope',
    status: 'pending',
    duration: 2000
  },
  {
    id: 'resolution',
    title: t('home.process_animation.steps.resolution.title'),
    description: t('home.process_animation.steps.resolution.description'),
    icon: 'i-heroicons-arrows-pointing-in',
    status: 'pending',
    duration: 2000
  }
])

const benefits = computed(() => [
  {
    title: t('home.process_animation.benefits.conversion.title'),
    description: t('home.process_animation.benefits.conversion.description'),
    icon: 'i-heroicons-arrow-trending-up'
  },
  {
    title: t('home.process_animation.benefits.automation.title'),
    description: t('home.process_animation.benefits.automation.description'),
    icon: 'i-heroicons-cog-6-tooth'
  },
  {
    title: t('home.process_animation.benefits.response.title'),
    description: t('home.process_animation.benefits.response.description'),
    icon: 'i-heroicons-bolt'
  }
])

function getBadgeColor(status: string) {
  switch (status) {
    case 'completed': return 'green'
    case 'in-progress': return 'blue'
    case 'error': return 'red'
    default: return 'gray'
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'completed': return t('home.process_animation.status.completed')
    case 'in-progress': return t('home.process_animation.status.in_progress')
    case 'error': return t('home.process_animation.status.error')
    default: return t('home.process_animation.status.pending')
  }
}

</script>
