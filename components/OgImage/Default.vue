<template>
  <div class="flex flex-col w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid grid-cols-8 gap-4 w-full h-full">
        <div v-for="i in 64" :key="i" class="bg-white rounded"></div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 flex flex-col justify-center items-start p-16 h-full">
      <!-- Logo/Icon -->
      <div class="mb-8">
        <div class="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
          <svg class="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
          </svg>
        </div>
      </div>
      
      <!-- Title -->
      <h1 class="text-6xl font-bold leading-tight mb-6">
        {{ title || 'Hotelier Tools' }}
      </h1>
      
      <!-- Description -->
      <p class="text-2xl text-blue-100 max-w-4xl leading-relaxed mb-8">
        {{ description || 'Optimize your hotel management with Little Hotelier' }}
      </p>
      
      <!-- URL -->
      <div class="text-lg text-blue-200">
        hotelier-tools.vercel.app
      </div>
    </div>
    
    <!-- Right decoration -->
    <div class="absolute right-0 top-0 w-1/3 h-full opacity-20">
      <div class="w-full h-full bg-gradient-to-l from-white to-transparent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define props for the OG image
defineProps<{
  title?: string
  description?: string
}>()
</script>