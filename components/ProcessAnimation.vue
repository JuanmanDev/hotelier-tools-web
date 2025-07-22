<template>
  <div class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          ¿Cómo funciona Hotelier Tools?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Mira cómo nuestras herramientas mejoran tu gestión hotelera paso a paso
        </p>
      </div>

      <!-- Animation Container -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Progress Bar -->
        <div class="mb-8">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Progreso</span>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ Math.round((currentStep / (steps.length - 1)) * 100) }}%</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              class="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
              :style="{ width: `${(currentStep / (steps.length - 1)) * 100}%` }"
            ></div>
          </div>
        </div>

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
                'ring-2 ring-blue-500 shadow-blue-200 dark:shadow-blue-900': index === currentStep,
                'transform scale-105': index === currentStep,
                'shadow-hotel': index < currentStep
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

              <!-- Status Badge -->
              <div class="mt-4 flex justify-center">
                <UBadge 
                  :color="getBadgeColor(step.status)"
                  variant="soft"
                  size="sm"
                >
                  {{ getStatusText(step.status) }}
                </UBadge>
              </div>
            </div>

            <!-- Connection Line -->
            <div 
              v-if="index < steps.length - 1"
              class="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2 z-10"
              :class="{ 'bg-blue-500': index < currentStep }"
            >
              <div 
                v-if="index < currentStep"
                class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1"
              >
                <UIcon name="i-heroicons-chevron-right" class="w-4 h-4 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        <!-- Animation Controls -->
        <div class="flex justify-center space-x-4">
          <UButton
            color="gray"
            variant="outline"
            @click="resetAnimation"
            :disabled="isAnimating"
          >
            <UIcon name="i-heroicons-arrow-path" class="w-4 h-4 mr-2" />
            Reiniciar
          </UButton>
          
          <UButton
            :color="isAnimating ? 'red' : 'primary'"
            @click="toggleAnimation"
          >
            <UIcon 
              :name="isAnimating ? 'i-heroicons-pause' : 'i-heroicons-play'" 
              class="w-4 h-4 mr-2" 
            />
            {{ isAnimating ? 'Pausar' : 'Reproducir' }}
          </UButton>
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

const currentStep = ref(0)
const isAnimating = ref(false)
let animationInterval: NodeJS.Timeout | null = null

const steps: AnimationStep[] = [
  {
    id: 'detection',
    title: 'Reserva Detectada',
    description: 'Se detecta una reserva no confirmada por el banco',
    icon: 'i-heroicons-exclamation-triangle',
    status: 'pending',
    duration: 2000
  },
  {
    id: 'notification',
    title: 'Email Enviado',
    description: 'Se envía automáticamente un email de notificación',
    icon: 'i-heroicons-envelope',
    status: 'pending',
    duration: 2000
  },
  {
    id: 'resolution',
    title: 'Problema Resuelto',
    description: 'Recepción contacta al cliente y confirma la reserva',
    icon: 'i-heroicons-check-circle',
    status: 'pending',
    duration: 2000
  }
]

const benefits = [
  {
    title: 'Aumento de Conversión',
    description: 'Evita la pérdida de reservas por problemas de pago',
    icon: 'i-heroicons-trending-up'
  },
  {
    title: 'Automatización Total',
    description: 'Proceso completamente automatizado sin intervención manual',
    icon: 'i-heroicons-cog-6-tooth'
  },
  {
    title: 'Respuesta Rápida',
    description: 'Notificación inmediata para resolver problemas a tiempo',
    icon: 'i-heroicons-bolt'
  }
]

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
    case 'completed': return 'Completado'
    case 'in-progress': return 'En progreso'
    case 'error': return 'Error'
    default: return 'Pendiente'
  }
}

function nextStep() {
  if (currentStep.value < steps.length - 1) {
    // Update current step status
    steps[currentStep.value].status = 'completed'
    currentStep.value++
    if (currentStep.value < steps.length) {
      steps[currentStep.value].status = 'in-progress'
    }
  } else {
    // Animation completed
    steps[currentStep.value].status = 'completed'
    stopAnimation()
  }
}

function startAnimation() {
  if (!isAnimating.value) {
    isAnimating.value = true
    // Set first step as in-progress
    if (currentStep.value === 0) {
      steps[0].status = 'in-progress'
    }
    
    animationInterval = setInterval(() => {
      nextStep()
    }, 2500)
  }
}

function stopAnimation() {
  isAnimating.value = false
  if (animationInterval) {
    clearInterval(animationInterval)
    animationInterval = null
  }
}

function resetAnimation() {
  stopAnimation()
  currentStep.value = 0
  steps.forEach(step => {
    step.status = 'pending'
  })
}

function toggleAnimation() {
  if (isAnimating.value) {
    stopAnimation()
  } else {
    startAnimation()
  }
}

// Auto-start animation when component mounts
onMounted(() => {
  setTimeout(() => {
    startAnimation()
  }, 1000)
})

// Cleanup on unmount
onUnmounted(() => {
  stopAnimation()
})
</script>
