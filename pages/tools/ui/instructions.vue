<template>
  <div data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;instructions&quot;,&quot;path&quot;:&quot;pages/tools/ui/instructions.vue&quot;}" class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ $t('instructions.hero.title') }}
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {{ $t('instructions.hero.title_span') }}
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('instructions.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Instructions Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-8">
          <!-- Overview -->
          <UCard>
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-information-circle" class="w-6 h-6 mr-3 text-blue-600" />
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ $t('instructions.overview.title') }}
                </h2>
              </div>
            </template>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-start space-x-3">
                <UIcon name="i-heroicons-computer-desktop" class="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">{{ $t('instructions.overview.browser_title') }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">{{ $t('instructions.overview.browser_text') }}</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <UIcon name="i-heroicons-clock" class="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">{{ $t('instructions.overview.time_title') }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">{{ $t('instructions.overview.time_text') }}</p>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Steps -->
          <div class="space-y-6">
            <!-- Step 1 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="1" color="blue" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    {{ $t('instructions.step1.title') }}
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step1.intro_1') }}
                  <br />
                  {{ $t('instructions.step1.intro_2') }}
                </p>

                
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step1.go_to_site') }}
                </p>
                
                <div class="flex flex-col sm:flex-row gap-3">
                  <UButton data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;instructions&quot;,&quot;target&quot;:&quot;https://www.tampermonkey.net/&quot;}" 
                    to="https://www.tampermonkey.net/" 
                    external 
                    icon="i-heroicons-arrow-top-right-on-square"
                    size="lg"
                  >
                    {{ $t('instructions.step1.download_button') }}
                  </UButton>
                  
                  <UAlert
                    icon="i-heroicons-information-circle"
                    
                    variant="subtle"
                    :description="$t('instructions.step1.new_tab_note')"
                    class="flex-1"
                  />
                </div>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tampermonkeyPage.webp" 
                    :alt="$t('instructions.step1.alt_site')" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>

                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step1.browser_store') }}
                </p>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkeyChromeWebStore.webp" 
                    :alt="$t('instructions.step1.alt_chrome_store')" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkeyEdgeStore.webp" 
                    :alt="$t('instructions.step1.alt_edge_store')" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>

                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step1.confirm') }}
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/chromeAskInstallExtension.webp" 
                    :alt="$t('instructions.step1.alt_confirm')" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
              </div>
            </UCard>

            <!-- Step 2 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="2" color="blue" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    {{ $t('instructions.step2.title') }}
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step2.text') }}
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/scripts.webp" 
                    :alt="$t('instructions.step2.alt')" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
                
                <UButton data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;instructions&quot;,&quot;target&quot;:&quot;localePath('/tools/ui')&quot;}" :to="localePath('/tools/ui')" icon="i-heroicons-arrow-right" size="lg">
                  {{ $t('instructions.step2.button') }}
                </UButton>
              </div>
            </UCard>

            <!-- Step 3 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="3" color="blue" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    {{ $t('instructions.step3.title') }}
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step3.text') }}
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/githubCode.png" 
                    :alt="$t('instructions.step3.alt')" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
                
                <UAlert
                  icon="i-heroicons-document-duplicate"
                  
                  variant="subtle"
                  :title="$t('instructions.step3.tip_title')"
                  :description="$t('instructions.step3.tip_text')"
                />
              </div>
            </UCard>

            <!-- Step 4 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="4" color="blue" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    {{ $t('instructions.step4.title') }}
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step4.text') }}
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkeyMenu.webp" 
                    :alt="$t('instructions.step4.alt_menu')" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t('instructions.step4.option1_title') }}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      {{ $t('instructions.step4.option1_text') }}
                    </p>
                  </div>
                
                  <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <img
                      src="/images/ui/tamperMonkey.webp" 
                      :alt="$t('instructions.step4.alt_editor')" 
                      class="w-full rounded-lg shadow-md mb-4" 
                    />
                  </div>
                    
                  <div class="space-y-2">
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t('instructions.step4.option2_title') }}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      {{ $t('instructions.step4.option2_text') }}
                    </p>
                  </div>
                </div>

                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step4.editor_text') }}
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkey.webp" 
                    :alt="$t('instructions.step4.alt_editor')" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>

              </div>
            </UCard>

            <!-- Step 5 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="5" color="blue" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    {{ $t('instructions.step5.title') }}
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step5.text_1') }}
                  <br />
                  {{ $t('instructions.step5.text_2') }}
                </p>
                
                <UAlert
                  icon="i-heroicons-document-duplicate"
                  variant="subtle"
                  :title="$t('instructions.step5.alert_title')"
                >
                  <template #description>
                    {{ $t('instructions.step5.alert_text') }}
                  </template>
                </UAlert>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <UCard>
                    <div class="text-center">
                      <UIcon name="i-heroicons-document-duplicate" class="w-8 h-8 mx-auto text-blue-600 mb-2" />
                      <h5 class="font-semibold text-sm">{{ $t('instructions.step5.select_title') }}</h5>
                      <p class="text-xs text-gray-600 dark:text-gray-300">{{ $t('instructions.step5.select_text') }}</p>
                    </div>
                  </UCard>
                  
                  <UCard>
                    <div class="text-center">
                      <UIcon name="i-heroicons-clipboard" class="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <h5 class="font-semibold text-sm">{{ $t('instructions.step5.paste_title') }}</h5>
                      <p class="text-xs text-gray-600 dark:text-gray-300">{{ $t('instructions.step5.paste_text') }}</p>
                    </div>
                  </UCard>
                  
                  <UCard>
                    <div class="text-center">
                      <UIcon name="i-heroicons-check" class="w-8 h-8 mx-auto text-purple-600 mb-2" />
                      <h5 class="font-semibold text-sm">{{ $t('instructions.step5.save_title') }}</h5>
                      <p class="text-xs text-gray-600 dark:text-gray-300">{{ $t('instructions.step5.save_text') }}</p>
                    </div>
                  </UCard>
                </div>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkeyCodePasted.webp" 
                    :alt="$t('instructions.step5.alt_pasted')" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>

                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step5.saved_text') }}
                </p>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/ui/tamperMonkeySave.webp" 
                    :alt="$t('instructions.step5.alt_saved')" 
                    class="w-full rounded-lg shadow-md mb-4" 
                  />
                </div>
                
              </div>
            </UCard>

            <!-- Step 6 -->
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UBadge label="6" color="green" variant="solid" class="mr-3" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    {{ $t('instructions.step6.title') }}
                  </h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('instructions.step6.text') }}
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src="/images/scripts/add-button-check-front-desk/to.webp"
                    :alt="$t('instructions.step6.alt')"
                    class="w-full rounded-lg shadow-md mb-4"
                  />
                </div>
                
                <UAlert
                  icon="i-heroicons-check-circle"
                  
                  variant="subtle"
                  :title="$t('instructions.step6.success_title')"
                  :description="$t('instructions.step6.success_text')"
                />
              </div>
            </UCard>
          </div>

          <!-- Help Section -->
          <UCard>
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 mr-3 text-amber-600" />
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ $t('instructions.help.title') }}
                </h3>
              </div>
            </template>
            
            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-300">
                {{ $t('instructions.help.text') }}
              </p>
              
              <div class="flex flex-col sm:flex-row gap-3">
                <UButton data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;instructions&quot;,&quot;target&quot;:&quot;localePath('/contact')&quot;}" :to="localePath('/contact')" icon="i-heroicons-envelope" size="lg">
                  {{ $t('instructions.help.contact') }}
                </UButton>
                
                <UButton data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;instructions&quot;,&quot;target&quot;:&quot;localePath('/faq')&quot;}" :to="localePath('/faq')" variant="outline" icon="i-heroicons-question-mark-circle" size="lg">
                  {{ $t('instructions.help.faq') }}
                </UButton>
              </div>

              <UButton data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;instructions&quot;,&quot;target&quot;:&quot;https://github.com/JuanmanDev/TampermonkeyLittleHotelier&quot;}" to="https://github.com/JuanmanDev/TampermonkeyLittleHotelier" variant="outline" icon="i-heroicons-code-bracket-square" size="lg">
                {{ $t('instructions.help.repo') }}
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath()

const { setSEO } = useSEO()
setSEO('uiInstructions')
</script>