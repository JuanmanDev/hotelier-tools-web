<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Navigation Header -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <NuxtLink :to="localePath('/')" class="flex items-center space-x-2">
            <UIcon name="i-heroicons-building-office-2" class="h-8 w-8 text-primary-500" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">Hotelier Tools</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              :to="localePath('/')"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              {{ $t('nav.home') }}
            </NuxtLink>
            <NuxtLink 
              :to="localePath('/tools')"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              {{ $t('nav.tools') }}
            </NuxtLink>
            <NuxtLink 
              :to="localePath('/documentation')"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              {{ $t('nav.documentation') }}
            </NuxtLink>
            <NuxtLink 
              :to="localePath('/contact')"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              {{ $t('nav.contact') }}
            </NuxtLink>
          </div>
          <!-- Theme Toggle, Language Selector, Search & Mobile Menu -->
          <div class="flex items-center space-x-4">
            <!-- Search Button -->
            <UButton
              icon="i-heroicons-magnifying-glass"
              size="sm"
              color="gray"
              variant="ghost"
              :aria-label="$t('nav.search')"
              class="hidden sm:flex"
              @click="openSearch"
            >
              <span class="sr-only sm:not-sr-only ml-2">{{ $t('nav.search') }}</span>
              <UKbd v-if="showShortcutHint" class="hidden lg:inline-flex ml-2">{{ shortcutLabel }}</UKbd>
            </UButton>
            
            <!-- Language Selector -->
            <UDropdownMenu
              @change="changeLocale"
              :items="localeOptions"
            >
              <UButton
                color="gray"
                variant="ghost"
                size="sm"
              >
                <UIcon name="i-heroicons-globe-alt" class="h-4 w-4" />
                <UIcon name="i-heroicons-chevron-down-20-solid" class="ml-1" />
              </UButton>
            </UDropdownMenu>
            <ClientOnly>
              <UButton
                :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
                size="sm"
                color="gray"
                variant="ghost"
                aria-label="Toggle theme"
                @click="toggleColorMode"
              />
            </ClientOnly>
            
            <!-- Mobile menu button -->
            <UButton
              icon="i-heroicons-bars-3"
              size="sm"
              color="gray"
              variant="ghost"
              class="md:hidden"
              aria-label="Open menu"
              @click="isMenuOpen = !isMenuOpen"
            />
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-show="isMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
          <div class="space-y-2">
            <!-- Mobile Search Button -->
            <button 
              @click="openSearch"
              class="flex w-full items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              <UIcon name="i-heroicons-magnifying-glass" class="h-5 w-5 mr-3" />
              {{ $t('nav.search') }}
            </button>
            
            <NuxtLink 
              :to="localePath('/')"
              class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              @click="isMenuOpen = false"
            >
              {{ $t('nav.home') }}
            </NuxtLink>
            <NuxtLink 
              :to="localePath('/tools')"
              class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              @click="isMenuOpen = false"
            >
              {{ $t('nav.tools') }}
            </NuxtLink>
            <NuxtLink 
              :to="localePath('/documentation')"
              class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              @click="isMenuOpen = false"
            >
              {{ $t('nav.documentation') }}
            </NuxtLink>
            <NuxtLink 
              :to="localePath('/contact')"
              class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              @click="isMenuOpen = false"
            >
              {{ $t('nav.contact') }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <UIcon name="i-heroicons-building-office-2" class="h-6 w-6 text-primary-500" />
              <span class="text-lg font-bold text-gray-900 dark:text-white">Hotelier Tools</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ $t('footer.description') }}
            </p>
            <div class="flex space-x-4">
              <UButton
                icon="i-simple-icons-github"
                size="sm"
                color="gray"
                variant="ghost"
                to="https://github.com/JuanmanDev/hotelier-tools-web"
                target="_blank"
                aria-label="GitHub"
              />
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {{ $t('footer.links') }}
            </h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink :to="localePath('/tools')" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {{ $t('nav.tools') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/documentation')" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {{ $t('nav.documentation') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/contact')" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {{ $t('nav.contact') }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {{ $t('footer.support') }}
            </h3>
            <ul class="space-y-2">
              <li>
                <a href="mailto:JuanmaDeveloper+hotelierTools@outlook.com" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {{ $t('footer.email') }}
                </a>
              </li>
              <li>
                <NuxtLink :to="localePath('/faq')" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {{ $t('footer.faq') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p class="text-center text-gray-500 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }} Hotelier Tools. {{ $t('footer.rights') }}
          </p>
        </div>
      </div>
    </footer>

    <!-- Search Modal -->
    <SearchModal />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const isMenuOpen = ref(false)

// Search functionality
const { isSearchOpen, openSearch } = useSearch()
const { initializeShortcuts, cleanupShortcuts } = useKeyboardShortcuts()

// Initialize keyboard shortcuts
onMounted(() => {
  initializeShortcuts()
})

onUnmounted(() => {
  cleanupShortcuts()
})

// Internationalization
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const currentLocale = computed({
  get: () => locale.value,
  set: (value) => {
    navigateTo(switchLocalePath(value))
  }
})

const flagIcons: Record<string, string> = {
  es: 'i-twemoji-flag-spain',
  en: 'i-twemoji-flag-united-states',
  'en-gb': 'i-twemoji-flag-united-kingdom',
  fr: 'i-twemoji-flag-france',
  de: 'i-twemoji-flag-germany',
  it: 'i-twemoji-flag-italy',
  pt: 'i-twemoji-flag-brazil',
  th: 'i-twemoji-flag-thailand',
  id: 'i-twemoji-flag-indonesia',
}

const localeOptions = computed(() => 
  locales.value.map((l: any) => ({
    label: l.name,
    value: l.code,
    icon: flagIcons[l.code] || 'i-twemoji-globe-showing-europe-africa',
    onSelect: () => changeLocale(l.code)
  }))
)

const currentLocaleName = computed(() => {
  const current = locales.value.find((l: any) => l.code === locale.value)
  return current?.name || 'Español'
})

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

function changeLocale(newLocale: string) {
  navigateTo(switchLocalePath(newLocale))
}

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  isMenuOpen.value = false
})

// Close mobile menu when search opens
watch(() => isSearchOpen, () => {
  isMenuOpen.value = false
})

const showShortcutHint = ref(true)
const shortcutLabel = ref('')

onMounted(() => {
  const isTouchOnly = 'ontouchstart' in window && !window.matchMedia('(pointer:fine)').matches
  showShortcutHint.value = !isTouchOnly
  const isMac = navigator.platform.toLowerCase().includes('mac')
  shortcutLabel.value = isMac ? '⌘K' : 'Ctrl+K'
  if (showShortcutHint.value) {
    console.log(`[Layout] Shortcut to open search: ${shortcutLabel.value}`)
  } else {
    console.log('[Layout] No physical keyboard detected, shortcut hidden')
  }
})
</script>
