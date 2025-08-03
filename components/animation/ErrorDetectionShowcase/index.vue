<template>
  <div class="max-w-6xl mx-auto p-6 animate-height transition-all "
    :class="[
      (finnishedAnimation && !showAllCards) ? 'hideCardBodyNotHovering' : '',
    ]"
  >
  
    <div
        class="animate-height overflow-hidden flex justify-end gap-2"
        :class="[
          (animationStarted && animationSpeed === 100 && !animationCard7Content1) || (finnishedAnimation && !showAllCards) ? 'max-h-32 mb-4' : 'max-h-0 mb-0'
        ]"
        >
      <UButton 
        v-if="animationStarted && animationSpeed === 100 && !animationCard7Content1"
        @click="animationSpeed = 10"
        variant="outline"
        size="xs"
        class="transition-opacity duration-500 ease-in-out"
        :class="animationStarted ? 'opacity-100' : 'opacity-0'"
      >
        {{ t('marketing.error_detection_showcase.controls.speed_up') }}
      </UButton>
      <UButton 
        v-if="finnishedAnimation && !showAllCards"
        @click="showAllCards = true"
        variant="solid"
        size="xs"
        color="primary"
        class="transition-opacity duration-500 ease-in-out"
        :class="finnishedAnimation ? 'opacity-100' : 'opacity-0'"
      >
        {{ t('marketing.error_detection_showcase.controls.show_all_cards') }}
      </UButton>
    </div>

    <!-- Grid for cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all  mb-6">
      
      <!-- Card 1 -->
      <div 
        class="relative transition-all  transform w-full animate-height "
        :class="[
          animationCard1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          showCard1 ? 'max-h-96' : 'max-h-0'
        ]"
      >
        <UCard class=" backdrop-blur-md border border-white/30 card-container transition-all bg-white/25 dark:bg-black/25 h-full">
          <div class="relative content-container">
            <div 
              class="transition-all  animate-height "
              :class="[
                animationCard1Text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                showCard1Text ? 'max-h-96' : 'max-h-0'
              ]"
            >
              <div class="flex items-center">
                <div 
                  class="mr-3 transition-all  transform"
                  :class="animationCard1Icon ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
                >
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center transition-all ">
                    <UIcon name="i-heroicons-user" class="text-2xl text-blue-900 dark:text-white transition-all " />
                  </div>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-all ">{{ t('marketing.error_detection_showcase.cards.customer.title') }}</h3>
              </div>
              <div class="card-body space-y-2">
                <p 
                  class="text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                  :class="[
                    animationCard1Content1 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                  ]"
                >
                  {{ t('marketing.error_detection_showcase.cards.customer.step1') }}
                </p>
                <p 
                  class="text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                  :class="[
                    animationCard1Content2 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                  ]"
                >
                  {{ t('marketing.error_detection_showcase.cards.customer.step2') }}
                </p>
                <p 
                  class="text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                  :class="[
                    animationCard1Content3 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                  ]"
                >
                  {{ t('marketing.error_detection_showcase.cards.customer.step3') }}
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Card 2 -->
      <!-- Card 2 -->
      <div 
        class="relative transition-all  transform w-full animate-height "
        :class="[
          animationCard2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          showCard2 ? 'max-h-96' : 'max-h-0'
        ]"
      >
        <UCard class=" backdrop-blur-md bg-white/25 dark:bg-black/25 border border-white/30 card-container transition-all  h-full">
          <div class="relative content-container">
            <div 
              class="transition-all  animate-height "
              :class="[
                animationCard2Text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                showCard2Text ? 'max-h-96' : 'max-h-0'
              ]"
            >
              <div class="flex items-center">
                <div 
                  class="mr-3 transition-all  transform"
                  :class="animationCard2Icon ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
                >
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center transition-all ">
                    <UIcon name="i-heroicons-credit-card" class="text-2xl text-blue-900 dark:text-white transition-all " />
                  </div>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-all ">{{ t('marketing.error_detection_showcase.cards.payment.title') }}</h3>
              </div>
              <div class="space-y-2 card-body">
                <p 
                  class="text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                  :class="[
                    animationCard2Content1 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                  ]"
                >
                  {{ t('marketing.error_detection_showcase.cards.payment.step1') }}
                </p>
                <p 
                  class="text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                  :class="[
                    animationCard2Content2 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                  ]"
                >
                  {{ t('marketing.error_detection_showcase.cards.payment.step2') }}
                </p>
                <p 
                  class="text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                  :class="[
                    animationCard2Content3 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                  ]"
                >
                  {{ t('marketing.error_detection_showcase.cards.payment.step3') }}{{ pointsWaiting }}
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Card 3 -->
      <div 
        class="relative transition-all  transform w-full animate-height "
        :class="[
          animationCard3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          showCard3 ? 'max-h-[500px]' : 'max-h-0'
        ]"
      >
        <UCard 
          class=" backdrop-blur-md bg-white/25 dark:bg-black/25 border border-white/30 card-container transition-all  h-full"
          :class="errorPulse ? 'ring-4  animate-pulse animate-border-pulse border-red' : ''"
        >
          <div class="relative content-container">
            <div 
              class="transition-all  animate-height "
              :class="[
                animationCard3Text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                showCard3Text ? 'max-h-96' : 'max-h-0'
              ]"
            >
              <div class="flex items-center">
                <div 
                  class="mr-3 transition-all  transform"
                  :class="animationCard3Icon ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
                >
                  <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center transition-all "
                    v-if="errorPulse"
                  >
                    <UIcon name="i-heroicons-exclamation-triangle" class="text-2xl text-red-900 dark:text-white transition-all " />
                  </div>
                  <div class="w-12 h-12 bg-green-700 dark:bg-green-600 rounded-lg flex items-center justify-center transition-all "
                    v-else
                  >
                    <UIcon name="i-heroicons-building-office-2" class="text-2xl text-white transition-all " />
                  </div>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-all ">{{ t('marketing.error_detection_showcase.cards.hostel.title') }}</h3>
              </div>
              <div class="card-body space-y-3 transition-all ">
                <p 
                  class="text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                  :class="[
                    animationCard3Content1 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                  ]"
                >
                  {{ t('marketing.error_detection_showcase.cards.hostel.step1') }}
                </p>
                <div 
                  class="transition-all  transform  animate-height"
                  :class="[
                    showCard3Update ? 'opacity-100' : 'opacity-0',
                    showCard3Update ? 'translate-y-0' : 'translate-y-[-8px]',
                    showCard3Update ? 'max-h-24' : 'max-h-0'
                  ]"
                >
                  <p 
                    class="text-sm font-medium text-red-600 dark:text-red-300 transition-all  animate-height"
                    :class="[
                      animationCard3Content2 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                    ]"
                  >
                    {{ t('marketing.error_detection_showcase.cards.hostel.error_message') }}
                  </p>
                </div>
                <p 
                  class="text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                  :class="[
                    animationCard3Content3 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                  ]"
                >
                  {{ t('marketing.error_detection_showcase.cards.hostel.success_message') }}
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <UCard 
        class=" backdrop-blur-md bg-white/25 dark:bg-black/25 border border-white/30 card-container transition-all  transform w-full animate-height row-span-1 md:row-span-2 order-last md:order-none"
        :class="[
          animationCard6 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          showCard6 ? 'max-h-[500px]' : 'max-h-0'
        ]"
      >
        <div class="relative content-container">
          <div 
            class="transition-all  animate-height "
            :class="[
              animationCard6Text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              showCard6Text ? 'max-h-96' : 'max-h-0'
            ]"
          >
            <div class="flex items-center">
              <div 
                class="mr-3 transition-all  transform"
                :class="animationCard6Icon ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
              >
                <div class="w-12 h-12 bg-green-700 dark:bg-green-600 rounded-lg flex items-center justify-center transition-all ">
                  <UIcon name="i-heroicons-check-circle" class="text-2xl text-white transition-all " />
                </div>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-all ">{{ t('marketing.error_detection_showcase.cards.resolution.title') }}</h3>
            </div>
            <div class="card-body space-y-3 transition-all ">
              <p 
                class="text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                :class="[
                  animationCard6Content1 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                ]"
              >
                {{ t('marketing.error_detection_showcase.cards.resolution.step1') }}
              </p>
              <div 
                class="transition-all  transform  animate-height"
                :class="[
                  showCard6Update ? 'opacity-100' : 'opacity-0',
                  showCard6Update ? 'translate-y-0' : 'translate-y-[-8px]',
                  showCard6Update ? 'max-h-24' : 'max-h-0'
                ]"
                :style="{ 
                  paddingTop: showCard6Update ? '8px' : '0'
                }"
              >
                <p 
                  class="text-sm font-medium text-emerald-600 dark:text-emerald-400 transition-all  animate-height"
                  :class="[
                    animationCard6Content2 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                  ]"
                >
                  {{ t('marketing.error_detection_showcase.cards.resolution.success_message') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UCard>
      <!-- Bot Card -->
      <!-- Bot Card -->
      <div 
        class="relative transition-all  transform w-full animate-height "
        :class="[
          animationBotCard ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          showBotCard ? 'max-h-[600px]' : 'max-h-0'
        ]"
      >
        <UCard class=" backdrop-blur-md bg-white/25 dark:bg-black/25 border border-white/30 card-container transition-all  h-full">
          <div class="relative content-container">
            <div 
              class="transition-all  animate-height "
              :class="[
                animationBotText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                showBotText ? 'max-h-96' : 'max-h-0'
              ]"
            >
              <div class="flex items-center">
                <div 
                  class="mr-3 transition-all  transform"
                  :class="animationBotIcon ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
                >
                  <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center transition-all ">
                    <UIcon name="i-heroicons-cpu-chip" class="text-2xl text-purple-900 dark:text-white transition-all " />
                  </div>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-all ">{{ t('marketing.error_detection_showcase.cards.bot.title') }}</h3>
              </div>
              <div class="card-body transition-all ">
                
                <div 
                  class="flex justify-center transition-all  overflow-hidden m-0"
                  :class="showBotButton ? 'max-h-20 py-4' : 'max-h-0 py-0'"
                >

                  <button 
                    @click="handleBotButtonClick"
                    class="relative px-6 py-3 bg-purple-100 dark:bg-purple-900 text-black dark:text-white font-medium rounded-lg transition-all   animate-border-pulse border-blue"
                  >
                    <span class="relative z-10">{{ t('marketing.error_detection_showcase.cards.bot.button') }}</span>
                    <div class="absolute inset-0  rounded-lg overflow-visible"></div>
                  </button>
                </div>
                <div
                  class="overflow-hidden transition-all  m-0 animate-height"
                  :class="showProgress ? 'max-h-20 pb-4' : 'max-h-0 pb-0'"
                >
                  <p class="mb-2 text-gray-700 dark:text-gray-300">{{ t('marketing.error_detection_showcase.cards.bot.progress_text') }}</p>
                  <UProgress v-model="progressValue" 
                    
                  />
                </div>

                <div 
                  class="transition-all  transform  animate-height"
                  :class="[
                    showBotUpdate ? 'opacity-100' : 'opacity-0',
                    (showBotUpdate) ? 'max-h-32' : 'max-h-0'
                  ]"
                >
                  <p class="text-sm font-medium text-purple-600 dark:text-purple-200 transition-all ">
                    {{ t('marketing.error_detection_showcase.cards.bot.completed') }}
                  </p>
                  <p class="text-sm font-medium text-purple-600 dark:text-purple-200 transition-all ">
                    {{ t('marketing.error_detection_showcase.cards.bot.detected') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </div>


      <!-- Card 5 -->
      <div 
        class="relative transition-all  transform w-full animate-height "
        :class="[
          animationCard5 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          showCard5 ? 'max-h-96' : 'max-h-0'
        ]"
      >
        <UCard class=" backdrop-blur-md bg-white/25 dark:bg-black/25 border border-white/30 card-container transition-all  h-full">
          <div class="relative content-container">
            <div 
              class="transition-all  animate-height "
              :class="[
                animationCard5Text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                showCard5Text ? 'max-h-96' : 'max-h-0'
              ]"
            >
              <div class="flex items-center">
                <div 
                  class="mr-3 transition-all  transform"
                  :class="animationCard5Icon ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
                >
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center transition-all ">
                    <UIcon name="i-heroicons-user-group" class="text-2xl text-blue-900 dark:text-white transition-all " />
                  </div>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-all ">{{ t('marketing.error_detection_showcase.cards.staff_review.title') }}</h3>
              </div>
              <p 
                class="card-body text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                :class="[
                  animationCard5Content1 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                ]"
              >
                {{ t('marketing.error_detection_showcase.cards.staff_review.description') }}
              </p>
            </div>
          </div>
        </UCard>
      </div>
   
      <!-- Card 4 -->
      <div 
        class="relative transition-all  transform w-full animate-height "
        :class="[
          animationCard4 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          showCard4 ? 'max-h-96' : 'max-h-0'
        ]"
      >
        <UCard class=" backdrop-blur-md bg-white/25 dark:bg-black/25 border border-white/30 card-container transition-all  h-full">
          <div class="relative content-container">
            <div 
              class="transition-all  animate-height "
              :class="[
                animationCard4Text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                showCard4Text ? 'max-h-96' : 'max-h-0'
              ]"
            >
              <div class="flex items-center">
                <div 
                  class="mr-3 transition-all  transform"
                  :class="animationCard4Icon ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
                >
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center transition-all ">
                    <UIcon name="i-heroicons-envelope" class="text-2xl text-blue-900 dark:text-white transition-all " />
                  </div>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-all ">{{ t('marketing.error_detection_showcase.cards.automated_alert.title') }}</h3>
              </div>
              <p 
                class="card-body text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                :class="[
                  animationCard4Content1 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                ]"
              >
                {{ t('marketing.error_detection_showcase.cards.automated_alert.description') }}
              </p>
            </div>
          </div>
        </UCard>
      </div>
      
      <!-- Card 7 -->
      <div 
        class="relative transition-all  transform w-full animate-height "
        :class="[
          animationCard7 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          showCard7 ? 'max-h-96' : 'max-h-0'
        ]"
      >
        <UCard class=" backdrop-blur-md bg-white/25 dark:bg-black/25 border border-white/30 card-container transition-all  h-full">
          <div class="relative content-container">
            <div 
              class="transition-all  animate-height "
              :class="[
                animationCard7Text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                showCard7Text ? 'max-h-96' : 'max-h-0'
              ]"
            >
              <div class="flex items-center">
                <div 
                  class="mr-3 transition-all  transform"
                  :class="animationCard7Icon ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
                >
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center transition-all ">
                    <UIcon name="i-heroicons-chat-bubble-oval-left-ellipsis" class="text-2xl text-blue-900 dark:text-white transition-all " />
                  </div>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-all ">{{ t('marketing.error_detection_showcase.cards.contact_customer.title') }}</h3>
              </div>
              <p 
                class="card-body text-sm text-gray-600 dark:text-gray-300 transition-all  animate-height"
                :class="[
                  animationCard7Content1 ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-2 max-h-0'
                ]"
              >
                {{ t('marketing.error_detection_showcase.cards.contact_customer.description') }}
              </p>
            </div>
          </div>
        </UCard>
      </div>

    </div>


  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const animationSpeed = ref(100)

// Card visibility states
const showCard1 = ref(true)
const showCard2 = ref(false)
const showCard3 = ref(false)
const showCard4 = ref(false)
const showCard5 = ref(false)
const showCard6 = ref(false)
const showCard7 = ref(false)
const showBotCard = ref(false)

// Card animation states
const animationCard1 = ref(false)
const animationCard2 = ref(false)
const animationCard3 = ref(false)
const animationCard4 = ref(false)
const animationCard5 = ref(false)
const animationCard6 = ref(false)
const animationCard7 = ref(false)
const animationBotCard = ref(false)

// Icon states
const showCard1Icon = ref(false)
const showCard2Icon = ref(false)
const showCard3Icon = ref(false)
const showCard4Icon = ref(false)
const showCard5Icon = ref(false)
const showCard6Icon = ref(false)
const showCard7Icon = ref(false)
const showBotIcon = ref(false)

// Icon animation states
const animationCard1Icon = ref(false)
const animationCard2Icon = ref(false)
const animationCard3Icon = ref(false)
const animationCard4Icon = ref(false)
const animationCard5Icon = ref(false)
const animationCard6Icon = ref(false)
const animationCard7Icon = ref(false)
const animationBotIcon = ref(false)

// Text states
const showCard1Text = ref(false)
const showCard2Text = ref(false)
const showCard3Text = ref(false)
const showCard4Text = ref(false)
const showCard5Text = ref(false)
const showCard6Text = ref(false)
const showCard7Text = ref(false)
const showBotText = ref(false)

// Text animation states
const animationCard1Text = ref(false)
const animationCard2Text = ref(false)
const animationCard3Text = ref(false)
const animationCard4Text = ref(false)
const animationCard5Text = ref(false)
const animationCard6Text = ref(false)
const animationCard7Text = ref(false)
const animationBotText = ref(false)

// Content block animation states
const animationCard1Content1 = ref(false)
const animationCard1Content2 = ref(false)
const animationCard1Content3 = ref(false)
const animationCard2Content1 = ref(false)
const animationCard2Content2 = ref(false)
const animationCard2Content3 = ref(false)
const animationCard3Content1 = ref(false)
const animationCard3Content2 = ref(false)
const animationCard3Content3 = ref(false)
const animationCard4Content1 = ref(false)
const animationCard5Content1 = ref(false)
const animationCard6Content1 = ref(false)
const animationCard6Content2 = ref(false)
const animationCard7Content1 = ref(false)

// Special effects
const errorPulse = ref(false)
const showProgress = ref(false)
const progressValue = ref(0)

// Update text for cards
const card3UpdateText = ref('')
const showCard3Update = ref(false)
const card6UpdateText = ref('')
const showCard6Update = ref(false)

// Bot card states
const botButtonClicked = ref(false)
const showBotButton = ref(false)
const showBotUpdate = ref(false)
const animationPaused = ref(false)

const pointsWaiting = ref('');

const finnishedAnimation = ref(false)
const showAllCards = ref(false)
const animationStarted = ref(false)

// Bot button click handler
const handleBotButtonClick = async () => {
  showBotButton.value = false
  botButtonClicked.value = true
  await new Promise(resolve => setTimeout(resolve, 5 * animationSpeed.value))

  showProgress.value = true

  const intervalId = setInterval(() => {
    if (progressValue.value < 100) {
      progressValue.value += 10
    } else {
      clearInterval(intervalId);
    }
  }, 200)

  await new Promise(resolve => setTimeout(resolve, 25 * animationSpeed.value))
  showProgress.value = false
  
  // Resume animation after bot interaction
  await new Promise(resolve => setTimeout(resolve, 5 * animationSpeed.value))
  showBotUpdate.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationPaused.value = false
  await new Promise(resolve => setTimeout(resolve, 10 * animationSpeed.value))

  continueAnimation()
}

// Continue animation after bot interaction
const continueAnimation = async () => {
  // Card 4
  showCard4.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard4.value = true
  await new Promise(resolve => setTimeout(resolve, 4 * animationSpeed.value))
  showCard4Text.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard4Text.value = true
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  // showCard4Icon.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard4Icon.value = true
  
  // Content animation for Card 4
  await new Promise(resolve => setTimeout(resolve, 13 * animationSpeed.value))
  animationCard4Content1.value = true
  
  await new Promise(resolve => setTimeout(resolve, 18 * animationSpeed.value))

  // Card 5
  showCard5.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard5.value = true
  await new Promise(resolve => setTimeout(resolve, 4 * animationSpeed.value))
  showCard5Text.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard5Text.value = true
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  showCard5Icon.value = true
  // await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard5Icon.value = true
  
  // Content animation for Card 5
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  animationCard5Content1.value = true
  
  await new Promise(resolve => setTimeout(resolve, 23 * animationSpeed.value))

  // Card 7 - Contact with customer
  showCard7.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard7.value = true
  await new Promise(resolve => setTimeout(resolve, 4 * animationSpeed.value))
  showCard7Text.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard7Text.value = true
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  showCard7Icon.value = true
  // await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard7Icon.value = true
  
  // Content animation for Card 7
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  animationCard7Content1.value = true
  
  await new Promise(resolve => setTimeout(resolve, 25 * animationSpeed.value))

  // Card 6 - Resolution Complete (Full Width)
  showCard6.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard6.value = true
  await new Promise(resolve => setTimeout(resolve, 4 * animationSpeed.value))
  showCard6Text.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard6Text.value = true
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  showCard6Icon.value = true
  // await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard6Icon.value = true
  
  // Content animation for Card 6
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  animationCard6Content1.value = true
  
  // Show success update
  await new Promise(resolve => setTimeout(resolve, 40 * animationSpeed.value))
  errorPulse.value = false // Stop error pulse
  showCard6Update.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard6Content2.value = true

  await new Promise(resolve => setTimeout(resolve, 25 * animationSpeed.value))
  showCard3Update.value = false 
  animationCard3Content1.value = false
  animationCard3Content2.value = false
  animationCard3Content3.value = true 

  finnishedAnimation.value = true

}

// Animation sequence
const startAnimation = async () => {
  // Mark animation as started
  animationStarted.value = true
  
  // First show all card containers and titles
  
  // Card 1 - Customer (title only)
  showCard1.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard1.value = true
  showCard1Text.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard1Text.value = true
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  showCard1Icon.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard1Icon.value = true
  
  await new Promise(resolve => setTimeout(resolve, 5 * animationSpeed.value))

  // Card 2 - Payment (title only)
  showCard2.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard2.value = true
  await new Promise(resolve => setTimeout(resolve, 4 * animationSpeed.value))
  showCard2Text.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard2Text.value = true
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  showCard2Icon.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard2Icon.value = true
  
  await new Promise(resolve => setTimeout(resolve, 5 * animationSpeed.value))

  // Card 3 - Hostel (title only)
  showCard3.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard3.value = true
  await new Promise(resolve => setTimeout(resolve, 4 * animationSpeed.value))
  showCard3Text.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard3Text.value = true
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  showCard3Icon.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard3Icon.value = true
  
  await new Promise(resolve => setTimeout(resolve, 17 * animationSpeed.value))

  // Now animate the body content of each card
  
  // Card 1 content
  animationCard1Content1.value = true
  await new Promise(resolve => setTimeout(resolve, 10 * animationSpeed.value))
  animationCard1Content2.value = true
  
  await new Promise(resolve => setTimeout(resolve, 17 * animationSpeed.value))

  // Card 2 content
  animationCard2Content1.value = true
  await new Promise(resolve => setTimeout(resolve, 7 * animationSpeed.value))
  animationCard2Content2.value = true
  await new Promise(resolve => setTimeout(resolve, 7 * animationSpeed.value))
  animationCard1Content3.value = true
  await new Promise(resolve => setTimeout(resolve, 7 * animationSpeed.value))
  animationCard2Content3.value = true
  await new Promise(resolve => setTimeout(resolve, 7 * animationSpeed.value))

  const intervalPointsId = setInterval(() => {
    if (pointsWaiting.value.length < 3) {
      pointsWaiting.value += '.'
    } else {
      clearInterval(intervalPointsId);
    }
  }, 500)
  
  await new Promise(resolve => setTimeout(resolve, 30 * animationSpeed.value))

  // Card 3 content
  animationCard3Content1.value = true
  
  // Error pulse effect
  await new Promise(resolve => setTimeout(resolve, 6 * animationSpeed.value))
  errorPulse.value = true
  
  // Show error update
  await new Promise(resolve => setTimeout(resolve, 8 * animationSpeed.value))
  showCard3Update.value = true
  await new Promise(resolve => setTimeout(resolve, 2 * animationSpeed.value))
  animationCard3Content2.value = true

  await new Promise(resolve => setTimeout(resolve, 25 * animationSpeed.value))

  // Bot Card
  showBotCard.value = true
  await new Promise(resolve => setTimeout(resolve, 3 * animationSpeed.value))
  animationBotCard.value = true
  await new Promise(resolve => setTimeout(resolve, 1 * animationSpeed.value))
  showBotText.value = true
  await new Promise(resolve => setTimeout(resolve, 1 * animationSpeed.value))
  animationBotText.value = true
  await new Promise(resolve => setTimeout(resolve, 1 * animationSpeed.value))
  showBotIcon.value = true
  await new Promise(resolve => setTimeout(resolve, 4 * animationSpeed.value))
  animationBotIcon.value = true

  await new Promise(resolve => setTimeout(resolve, 5 * animationSpeed.value))
  showBotButton.value = true
  
  // Pause animation and wait for button click
  animationPaused.value = true
  
  // Animation will continue only after bot button is clicked
}

onMounted(() => {
  
  setTimeout(startAnimation, 100)
})
</script>

<style scoped>
.card-container {
  transition: all 0.6s ease-in-out;
  will-change: transform, height;
}

.content-container {
  transition: all 0.6s ease-in-out;
  will-change: height, min-height;
}

/* Smooth height animations for content appearing */
.animate-height {
  transition: all 0.6s ease-in-out;
  will-change: height, max-height, min-height;
}

/* Dynamic height adjustments */
.content-container:has(.space-y-3 > div) {
  transition: min-height 0.6s ease-in-out;
}

/* Hover effects */
.card-container:hover {
  transform: translateY(-2px);
}

/* Smooth transitions for all interactive elements */
.card-container * {
  transition: all 0.6s ease-in-out;
}

/* Specific height transition for elements that expand */
.space-y-3 {
  transition: all 0.6s ease-in-out;
}

/* Ensure smooth opacity and transform changes */
.transition-all {
  transition: all 0.6s ease-in-out !important;
}

/* Button border animation */
.animate-border-pulse {
  position: relative;
  overflow: hidden;
}

.animate-border-pulse {
  &.border-blue {
    --outline-animationed-color: 0, 0, 255;
  }
  &.border-red {
    --outline-animationed-color: 255, 0, 0;
    animation-duration: 1s;
  }
  
  outline: 3px solid rgba(var(--outline-animationed-color), 0.7);
  border-radius: 0.5rem;
  animation: pulse-border 2s infinite;
}

@keyframes pulse-border {
  0% {
    outline-color: rgba(var(--outline-animationed-color), 1);
    outline-offset: 0px;
  }
  50% {
  }
  100% {
    outline-color: rgba(var(--outline-animationed-color), 0);
    outline-offset: 12px;
  }
}

.card-body {
  margin-top: 1rem;
  
}


.hideCardBodyNotHovering {
  .card-body {
    margin-top: 0rem;
    transition: all 0.4s ease-in-out;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
  }
  .card-container:hover .card-body {
    margin-top: 1rem;
    max-height: 96rem; /* Adjust as needed */
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .grid-template-animation-error {
    grid-template-columns: 1fr 1fr 1fr
    1fr 1fr 1fr
    1fr 1fr 1fr;
  }
  .custom-box {
    background-color: red;
  }
}

</style>

