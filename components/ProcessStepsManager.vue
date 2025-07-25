<template>
  <div class="relative z-10 flex flex-col items-center justify-center h-full min-h-[30vh] p-4 ">
    <TransitionGroup name="card-list" tag="div" >
      <div class="process-steps-container" :key="activeScenario">
        <ProcessStepCard
          v-for="step in currentScenarioSteps"
          :key="step.id"
          :step="step"
          :is-visible="activeSteps.includes(step.id)"
          :is-warning="showWarning === step.id"
        />
      </div>
    </TransitionGroup>
    
    <!-- Navigation Buttons -->
    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <UButton
        v-for="scenario in scenarios" 
        :key="scenario.id"
        :color="activeScenario === scenario.id ? 'primary' : 'neutral'"
        :variant="activeScenario === scenario.id ? 'solid' : 'outline'"
        @click="activateScenario(scenario.id)"
      >
        {{ scenario.name }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// --- Types ---
interface Scenario {
  id: number;
  name: string;
  steps: number[];
  warningStep?: number;
}

// --- State ---
const activeSteps = ref<number[]>([]);
const showWarning = ref<number | null>(null);
const activeScenario = ref<number>(1);

// --- Scenarios for navigation ---
const scenarios = computed<Scenario[]>(() => [
  {
    id: 1, 
    name: t('home.process_showcase.scenarios.payment_issue'),
    steps: [4, 5, 6],
    warningStep: 5
  },
  {
    id: 2,
    name: t('home.process_showcase.scenarios.missing_data'),
    steps: [1, 2, 3],
    warningStep: 2
  },
  // {
  //   id: 3,
  //   name: t('home.process_showcase.scenarios.all_complete'),
  //   steps: [1, 2, 3]
  // }
]);

// --- Process Steps ---
const processSteps = computed(() => [
  // Missing Data Check Steps
  {
    id: 1,
    text: t('home.process_showcase.steps.1.title'),
    subtitle: t('home.process_showcase.steps.1.subtitle'),
    icon: 'heroicons:clock',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
  },
  {
    id: 2,
    text: t('home.process_showcase.steps.2.title'),
    subtitle: t('home.process_showcase.steps.2.subtitle'),
    icon: 'heroicons:document-magnifying-glass',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-100 dark:bg-amber-900/50',
  },
  {
    id: 3,
    text: t('home.process_showcase.steps.3.title'),
    subtitle: t('home.process_showcase.steps.3.subtitle'),
    icon: 'heroicons:envelope',
    iconColor: 'text-green-500',
    iconBg: 'bg-green-100 dark:bg-green-900/50',
  },
  
  // Payment Issue Steps
  {
    id: 4,
    text: t('home.process_showcase.steps.4.title'),
    subtitle: t('home.process_showcase.steps.4.subtitle'),
    icon: 'heroicons:banknotes',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
  },
  {
    id: 5,
    text: t('home.process_showcase.steps.5.title'),
    subtitle: t('home.process_showcase.steps.5.subtitle'),
    icon: 'heroicons:exclamation-triangle',
    iconColor: 'text-red-500',
    iconBg: 'bg-red-100 dark:bg-red-900/50',
  },
  {
    id: 6,
    text: t('home.process_showcase.steps.6.title'),
    subtitle: t('home.process_showcase.steps.6.subtitle'),
    icon: 'heroicons:credit-card',
    iconColor: 'text-green-500',
    iconBg: 'bg-green-100 dark:bg-green-900/50',
  },
]);

// --- Logic ---
// Computed property to get all steps for the current scenario
const currentScenarioSteps = computed(() => {
  const scenario = scenarios.value.find(s => s.id === activeScenario.value);
  if (!scenario) return [];
  return processSteps.value.filter(step => scenario.steps.includes(step.id));
});

// Function to activate a scenario
const activateScenario = (scenarioId: number) => {
  // Reset states
  activeScenario.value = scenarioId;
  activeSteps.value = [];
  showWarning.value = null;
  
  const scenario = scenarios.value.find(s => s.id === scenarioId);
  if (!scenario) return;
  
  // Show steps with delay and warning if needed
  let delay = 0;
  scenario.steps.forEach((stepId) => {
    // If this is a warning step, show warning first
    if (scenario.warningStep === stepId) {
      setTimeout(() => {
        showWarning.value = stepId;
      }, delay);
      delay += 1500; // Warning display time
    }
    
    // Show the step
    setTimeout(() => {
      activeSteps.value.push(stepId);
      if (showWarning.value === stepId) {
        showWarning.value = null;
      }
    }, delay);
    delay += 1000; // Time until next card appears
  });
};

// --- Lifecycle Hooks ---
onMounted(() => {
  // Initialize with the first scenario
  activateScenario(1);
});
</script>

<style scoped>
.process-steps-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  transition: height 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

@media (min-width: 768px) {
  .process-steps-container {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  /* Apply consistent sizing to process cards */
  :deep(.process-step-card) {
    flex: 1 1 0;
    min-height: 150px;
    max-width: 350px;
    transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  :deep(.process-step-card:not(.card-visible)) {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(5px);
    pointer-events: none;
  }
}

/* Transition for the list of cards */
.card-list-enter-active,
.card-list-leave-active {
  transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card-list-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  filter: blur(5px);
}
.card-list-leave-to {
  opacity: 0 !important;
  transform: translateY(-20px) scale(0.95);
  filter: blur(5px);
}
.card-list-leave-active {
  position: absolute;
}
</style>