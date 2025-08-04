<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ $t('documentation.hero.title') }}
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {{ $t('documentation.hero.span') }}
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('documentation.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Documentation Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Sidebar Navigation -->
          <div class="lg:col-span-1">
            <UCard class="sticky top-24">
              <template #header>
                <h3 class="font-bold text-gray-900 dark:text-white">{{ $t('documentation.nav.content') }}</h3>
              </template>
              
              <nav class="space-y-1">
                <UButton
                  v-for="section in sections"
                  :key="section.id"
                  :to="`#${section.id}`"
                  variant="ghost"
                  color="gray"
                  size="sm"
                  class="w-full justify-start"
                  :class="{
                    'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400': activeSection === section.id
                  }"
                  @click="scrollToSection(section.id)"
                >
                  <UIcon :name="section.icon" class="w-4 h-4 mr-2" />
                  {{ $t(section.titleKey) }}
                </UButton>
              </nav>
            </UCard>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-3">
            <div class="space-y-8">
              <!-- Getting Started Section -->
              <UCard id="getting-started" class="scroll-mt-24">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-rocket-launch" class="w-6 h-6 mr-3 text-primary-600" />
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                      {{ $t('documentation.getting_started.title') }}
                    </h2>
                  </div>
                </template>
                
                <div class="prose dark:prose-invert max-w-none">
                  <UAlert
                    icon="i-heroicons-information-circle"
                    color="blue"
                    variant="soft"
                    :title="$t('documentation.getting_started.welcome.title')"
                    :description="$t('documentation.getting_started.welcome.description')"
                    class="mb-6"
                  />

                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {{ $t('documentation.getting_started.intro') }}
                  </p>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {{ $t('documentation.getting_started.what_includes.title') }}
                  </h3>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <UCard>
                      <template #header>
                        <div class="flex items-center">
                          <UIcon name="i-heroicons-puzzle-piece" class="w-5 h-5 mr-2 text-blue-600" />
                          <h4 class="font-semibold text-gray-900 dark:text-white">
                            {{ $t('documentation.getting_started.what_includes.web_scripts.title') }}
                          </h4>
                        </div>
                      </template>
                      <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li v-for="feature in webScriptFeatures" :key="feature">
                          • {{ rt(feature) }}
                        </li>
                      </ul>
                    </UCard>
                    
                    <UCard>
                      <template #header>
                        <div class="flex items-center">
                          <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5 mr-2 text-green-600" />
                          <h4 class="font-semibold text-gray-900 dark:text-white">
                            {{ $t('documentation.getting_started.what_includes.automations.title') }}
                          </h4>
                        </div>
                      </template>
                      <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li v-for="feature in automationFeatures" :key="feature">
                          • {{ rt(feature) }}
                        </li>
                      </ul>
                    </UCard>
                  </div>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {{ $t('documentation.getting_started.system_requirements.title') }}
                  </h3>
                  
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                    <li>• <strong>{{ $t('documentation.getting_started.system_requirements.scripts') }}</strong></li>
                    <li>• <strong>{{ $t('documentation.getting_started.system_requirements.automations') }}</strong></li>
                    <li>• <strong>{{ $t('documentation.getting_started.system_requirements.user_access') }}</strong></li>
                  </ul>

                  <UAlert
                    icon="i-heroicons-device-phone-mobile"
                    color="amber"
                    variant="soft"
                    :title="$t('documentation.getting_started.mobile_compatibility.title')"
                    class="mb-6"
                  >
                    <template #description>
                      <div class="space-y-2">
                        <p>{{ $t('documentation.getting_started.mobile_compatibility.description') }}</p>
                        <p><strong>{{ $t('documentation.getting_started.mobile_compatibility.android_alternative') }}</strong></p>
                      </div>
                    </template>
                  </UAlert>

                  <UAlert
                    icon="i-heroicons-light-bulb"
                    color="blue"
                    variant="soft"
                    :title="$t('documentation.getting_started.first_time.title')"
                    :description="$t('documentation.getting_started.first_time.description')"
                  />
                </div>
              </UCard>

              <!-- Browser Extensions Section -->
              <UCard id="chrome-extensions" class="scroll-mt-24">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-puzzle-piece" class="w-6 h-6 mr-3 text-blue-600" />
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                      {{ $t('documentation.web_scripts.title') }}
                    </h2>
                  </div>
                </template>

                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {{ $t('documentation.web_scripts.intro') }}
                  </p>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {{ $t('documentation.web_scripts.browser_compatibility.title') }}
                  </h3>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <UCard>
                      <template #header>
                        <div class="flex items-center">
                          <UIcon name="i-heroicons-computer-desktop" class="w-5 h-5 mr-2 text-green-600" />
                          <h4 class="font-semibold text-green-700 dark:text-green-400">{{ $t('documentation.web_scripts.browser_compatibility.desktop.title') }}</h4>
                        </div>
                      </template>
                      <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li v-for="browser in desktopBrowsers" :key="browser">
                          • {{ rt(browser) }}
                        </li>
                      </ul>
                    </UCard>

                    <UCard>
                      <template #header>
                        <div class="flex items-center">
                          <UIcon name="i-heroicons-device-phone-mobile" class="w-5 h-5 mr-2 text-amber-600" />
                          <h4 class="font-semibold text-amber-700 dark:text-amber-400">{{ $t('documentation.web_scripts.browser_compatibility.mobile.title') }}</h4>
                        </div>
                      </template>
                      <div class="space-y-2 text-sm">
                        <p class="text-red-600 dark:text-red-400">❌ {{ $t('documentation.web_scripts.browser_compatibility.mobile.standard') }}</p>
                        <p class="text-green-600 dark:text-green-400">✅ {{ $t('documentation.web_scripts.browser_compatibility.mobile.kiwi') }}</p>
                        <p class="text-gray-500 text-xs">{{ $t('documentation.web_scripts.browser_compatibility.mobile.complex_config') }}</p>
                      </div>
                    </UCard>
                  </div>

                  <UAlert
                    icon="i-heroicons-information-circle"
                    color="blue"
                    variant="soft"
                    :title="$t('documentation.web_scripts.tampermonkey_requirement.title')"
                    :description="$t('documentation.web_scripts.tampermonkey_requirement.description')"
                    class="mb-6"
                  />

                  <div class="flex flex-col sm:flex-row gap-3">
                    <UButton :to="localePath('/tools/ui')" icon="i-heroicons-arrow-right" size="lg">
                      {{ $t('documentation.web_scripts.view_all_scripts') }}
                    </UButton>

                    <UButton :to="localePath('/tools/ui/instructions')" variant="outline" icon="i-heroicons-document-text" size="lg">
                      {{ $t('documentation.web_scripts.installation_guide') }}
                    </UButton>
                  </div>

                </div>
              </UCard>

              <!-- Automations Section -->
              <UCard id="automations" class="scroll-mt-24">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-cog-6-tooth" class="w-6 h-6 mr-3 text-green-600" />
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                      {{ $t('documentation.automations.title') }}
                    </h2>
                  </div>
                </template>

                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {{ $t('documentation.automations.intro') }}
                  </p>

                  <UAlert
                    icon="i-heroicons-exclamation-triangle"
                    color="orange"
                    variant="soft"
                    :title="$t('documentation.automations.credentials_warning.title')"
                    :description="$t('documentation.automations.credentials_warning.description')"
                    class="mb-6"
                  />

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {{ $t('documentation.automations.access_credentials.title') }}
                  </h3>

                  <p class="text-gray-600 dark:text-gray-300 mb-6">
                    {{ $t('documentation.automations.access_credentials.intro') }}
                  </p>

                  <p class="text-gray-600 dark:text-gray-300 mb-4">
                    {{ $t('documentation.automations.access_credentials.create_user') }}
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <UCard>
                      <template #header>
                        <h4 class="font-semibold">{{ $t('documentation.automations.access_credentials.direct_booking.title') }}</h4>
                      </template>
                      <ul class="space-y-1 text-sm">
                        <li>• <strong>{{ $t('documentation.automations.access_credentials.direct_booking.access') }}</strong></li>
                        <li>• <strong>{{ $t('documentation.automations.access_credentials.direct_booking.user_type') }}</strong></li>
                      </ul>
                    </UCard>

                    <UCard>
                      <template #header>
                        <h4 class="font-semibold">{{ $t('documentation.automations.access_credentials.frontdesk.title') }}</h4>
                      </template>
                      <ul class="space-y-1 text-sm">
                        <li>• <strong>{{ $t('documentation.automations.access_credentials.frontdesk.access') }}</strong></li>
                        <li>• <strong>{{ $t('documentation.automations.access_credentials.frontdesk.user_type') }}</strong></li>
                        <li>• <strong>{{ $t('documentation.automations.access_credentials.frontdesk.permissions') }}</strong></li>
                      </ul>
                    </UCard>
                  </div>

                  <div class="mb-6">
                    <img src="/images/config/permissions.png" alt="Permisos de usuario en Little Hotelier" class="w-full rounded-lg shadow-md" />
                  </div>

                  <p class="text-gray-600 dark:text-gray-300 mb-6">
                    {{ $t('documentation.automations.access_credentials.verify_user') }}
                  </p>

                  <UAlert
                    icon="i-heroicons-light-bulb"
                    color="green"
                    variant="soft"
                    :title="$t('documentation.automations.access_credentials.email_trick.title')"
                    class="mb-6"
                  >
                    <template #description>
                      {{ $t('documentation.automations.access_credentials.email_trick.description') }}
                    </template>
                  </UAlert>

                  <p class="text-gray-600 dark:text-gray-300 mb-6">
                    {{ $t('documentation.automations.access_credentials.contact_us') }}
                  </p>

                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {{ $t('documentation.automations.available_automations.title') }}
                  </h3>

                  <UButton :to="localePath('/tools/bot')" color="green" variant="solid" icon="i-heroicons-arrow-right">
                    {{ $t('documentation.automations.available_automations.view_all') }}
                  </UButton>
                </div>
              </UCard>

              <!-- API Reference Section -->
              <UCard id="api-reference" class="scroll-mt-24">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-code-bracket" class="w-6 h-6 mr-3 text-purple-600" />
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                      {{ $t('documentation.api_reference.title') }}
                    </h2>
                  </div>
                </template>

                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {{ $t('documentation.api_reference.intro') }}
                  </p>

                  <UAlert
                    icon="i-heroicons-exclamation-triangle"
                    color="orange"
                    variant="soft"
                    :title="$t('documentation.api_reference.current_state.title')"
                    :description="$t('documentation.api_reference.current_state.description')"
                    class="mb-6"
                  />

                  <p class="text-gray-600 dark:text-gray-300 mb-6">
                    {{ $t('documentation.api_reference.future') }}
                  </p>

                  <UAlert
                    icon="i-heroicons-hand-raised"
                    color="blue"
                    variant="soft"
                    :title="$t('documentation.api_reference.collaborate.title')"
                    :description="$t('documentation.api_reference.collaborate.description')"
                  />
                </div>
              </UCard>

              <!-- FAQ Section -->
              <FAQSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// I18n
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

// SEO metadata
definePageMeta({
  title: 'Documentation - Hotelier Tools'
})

// Head management
useHead({
  title: computed(() => `${t('documentation.hero.title')} ${t('documentation.hero.span')}`)
})

// Reactive state - using a simple reactive approach
let activeSection = ref('getting-started')

// Computed arrays for translations
const webScriptFeatures = computed(() => tm('documentation.getting_started.what_includes.web_scripts.features'))
const automationFeatures = computed(() => tm('documentation.getting_started.what_includes.automations.features'))
const desktopBrowsers = computed(() => tm('documentation.web_scripts.browser_compatibility.desktop.browsers'))

const sections = [
  { 
    id: 'getting-started', 
    titleKey: 'documentation.nav.getting_started',
    icon: 'i-heroicons-rocket-launch'
  },
  { 
    id: 'chrome-extensions', 
    titleKey: 'documentation.nav.chrome_extensions',
    icon: 'i-heroicons-puzzle-piece'
  },
  { 
    id: 'automations', 
    titleKey: 'documentation.nav.automations',
    icon: 'i-heroicons-cog-6-tooth'
  },
  { 
    id: 'api-reference', 
    titleKey: 'documentation.nav.api',
    icon: 'i-heroicons-code-bracket'
  },
  { 
    id: 'faq', 
    titleKey: 'documentation.nav.faq',
    icon: 'i-heroicons-question-mark-circle'
  }
]

function scrollToSection(sectionId) {
  activeSection = sectionId
  if (process.client) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>
