<template>
  <div
    class="process-step-card"
    :class="{ 
      'card-visible': isVisible,
      'card-warning': isWarning
    }"
  >
    <div class="step-icon-wrapper" :class="step.iconBg">
      <transition name="fade" mode="out-in">
        <Icon :name="step.icon" class="h-8 w-8" :class="step.iconColor" />
      </transition>
    </div>
    <div class="step-content">
      <p class="text-sm md:text-lg font-medium text-slate-800 dark:text-slate-200">{{ step.text }}</p>
      <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">{{ step.subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProcessStep {
  id: number;
  text: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

// Props definition
defineProps<{
  step: ProcessStep;
  isVisible: boolean;
  isWarning: boolean;
}>();
</script>

<style scoped>
@keyframes pulse-warning {
  0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
  100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
}

.process-step-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem; /* 16px */
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 0.75rem; /* 12px */
  padding: 1rem; /* 16px */
  width: 100%;
  border: 2px solid transparent;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  
  /* Transition properties */
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px) scale(0.95);
  filter: blur(5px);
  transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), 
              transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1),
              filter 0.8s cubic-bezier(0.25, 0.8, 0.25, 1),
              visibility 0.8s;
}

.process-step-card {
  backdrop-filter: blur(10px);
}

.dark .process-step-card {
  background-color: rgba(15, 23, 42, 0.4); /* slate-900 with opacity */
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.process-step-card.card-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.process-step-card.card-warning {
  border-color: rgb(220, 38, 38); /* red-600 */
  animation: pulse-warning 2s infinite;
}

.step-icon-wrapper {
  flex-shrink: 0;
  padding: 0.75rem; /* 12px */
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .process-step-card {
    flex-direction: column;
    align-items: center;
  }
  .step-content {
    text-align: center;
  }
}

/* Fade transition for icon swap */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
