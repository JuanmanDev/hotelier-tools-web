<template>
  <div class="hero-container relative w-full min-h-[90vh] overflow-hidden bg-slate-900">
    <!-- Animated Gradient Background -->
    <div class="animated-gradient absolute inset-0"></div>

    <!-- Floating Icons -->
    <div class="absolute inset-0">
      <Icon
        v-for="icon in icons"
        :key="icon.id"
        :name="icon.name"
        class="floating-icon absolute text-slate-800 dark:text-white/30"
        :class="icon.blur"
        :style="icon.style"
      />
    </div>

    <!-- Content Wrapper for Process Steps and Slot -->
    <div class="relative z-10 flex flex-col items-center w-full min-h-[90vh] p-4 justify-evenly">
      <div class="order-2 md:order-1">
        <!-- Process Steps -->
        <!-- <ProcessStepsManager /> -->
         <ErrorDetectionShowcase />
      </div>
      <div class="order-1 md:order-2">
        <!-- Slot for additional content -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProcessStepsManager from '~/components/ProcessStepsManager.vue';
import ErrorDetectionShowcase from './animation/ErrorDetectionShowcase/index.vue';

// --- Types ---
interface FloatingIcon {
  id: number;
  name: string;
  style: Record<string, string>;
  blur: string;
}

// --- State ---
const icons = ref<FloatingIcon[]>([]);

// --- Hotel-themed icon names from available libraries ---
const hotelIcons = [
  'heroicons:building-office-2',
  'heroicons:home',
  'heroicons:key',
  'heroicons:credit-card',
  'heroicons:calendar',
  'heroicons:map-pin',
  'heroicons:user-group',
  'heroicons:globe-alt',
  'heroicons:banknotes',
  'heroicons:sparkles',
  'heroicons:sun',
  'heroicons:moon',
  'simple-icons:airbnb',
  'simple-icons:booking-com',
  'simple-icons:tripadvisor'
];

// --- Logic ---
const setupIcons = () => {
  const numIcons = 20;
  const newIcons: FloatingIcon[] = [];
  for (let i = 0; i < numIcons; i++) {
    // Establish relationship: more blur = slower animation
    const blurLevel = Math.random();
    // Slower duration for blurrier icons (20-40s), faster for clear ones (10-25s)
    const duration = blurLevel > 0.7 
      ? Math.random() * 20 + 20  // Blurry icons: 20-40s
      : Math.random() * 15 + 10; // Clear icons: 10-25s
      
    const delay = Math.random() * 10; // 0-10s
    const size = Math.random() * 48 + 32; // 32-80px
    const startX = Math.random() * 80 + 10; // 10-90% (keep margins from edges)
    const startY = Math.random() * 80 + 10; // 10-90% (keep margins from edges)
    const direction = Math.random() > 0.5 ? 1 : -1;
    
    // Apply blur based on speed - blurrier for slower icons
    let blurClass = '';
    if (blurLevel > 0.8) blurClass = 'blur-md';
    else if (blurLevel > 0.5) blurClass = 'blur-sm';
    
    newIcons.push({
      id: i,
      name: hotelIcons[i % hotelIcons.length],
      blur: blurClass,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${startX}%`,
        top: `${startY}%`,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
        '--direction': direction.toString(),
        transform: 'translate(0, 0) rotate(0deg)',
        opacity: '0'
      } as Record<string, string>,
    });
  }
  icons.value = newIcons;
};

// --- Lifecycle Hooks ---
onMounted(() => {
  setupIcons();
});
</script>

<style>
@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translate(calc(var(--direction) * 3vw), -3vh) rotate(5deg);
  }
  30% { /* Fast initial movement */
    transform: translate(calc(var(--direction) * 8vw), -8vh) rotate(10deg);
  }
  60% { /* Slower movement once in view */
    transform: translate(calc(var(--direction) * 12vw), -14vh) rotate(20deg);
  }
  90% {
    opacity: 1;
    transform: translate(calc(var(--direction) * 14vw), -18vh) rotate(25deg);
  }
  100% {
    transform: translate(calc(var(--direction) * 15vw), -20vh) rotate(30deg);
    opacity: 0;
  }
}

@keyframes pulse-warning {
  0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
  100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
}
</style>

<style scoped>
.animated-gradient {
  background: linear-gradient(
    -45deg,
    #e0f2fe, /* sky-100 */
    #d8e9ff, /* blue-200 */
    #f0f9ff, /* sky-50 */
    #a0cbff  /* blue-300 */
  );
  background-size: 400% 400%;
  animation: gradient-animation 15s ease infinite;
}

.dark .animated-gradient {
  background: linear-gradient(
    -45deg,
    #0c4a6e, /* sky-900 */
    #1e293b, /* slate-800 */
    #030712, /* gray-950 */
    #172554  /* blue-950 */
  );
  background-size: 400% 400%;
  animation: gradient-animation 20s ease infinite;
}

@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.floating-icon {
  will-change: transform, opacity;
  animation-timing-function: ease-in-out !important;
  animation-iteration-count: infinite !important;
  transition: filter 0.5s;
  pointer-events: none; /* Make sure icons don't interfere with user interaction */
}
</style>
