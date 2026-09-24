<template>
  <section
    id="platform"
    class="relative"
    :class="hero ? 'pt-10 pb-14 lg:pt-16 lg:pb-20' : 'py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950'"
    data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;PlatformShowcase&quot;,&quot;path&quot;:&quot;components/platform/PlatformShowcase.vue&quot;}"
  >
    <div ref="root" class="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 lg:mb-10">
        <div class="max-w-2xl ht-glass rounded-3xl p-5 sm:p-6 -mx-1 sm:mx-0">
          <component
            :is="hero ? 'h1' : 'h2'"
            class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            {{ t('platform.title') }}
          </component>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            {{ t('platform.subtitle') }}
          </p>
        </div>
        <div class="flex flex-wrap gap-3 self-start md:self-auto">
          <UButton
            data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;PlatformShowcase&quot;,&quot;target&quot;:&quot;dashboard&quot;}"
            :to="DASHBOARD_URL"
            target="_blank"
            size="xl"
            color="primary"
            trailing-icon="i-heroicons-arrow-top-right-on-square"
          >
            {{ t('platform.open_dashboard') }}
          </UButton>
          <UButton
            data-umami-click="{&quot;name&quot;:&quot;click_ubutton&quot;,&quot;file&quot;:&quot;PlatformShowcase&quot;,&quot;target&quot;:&quot;demo&quot;}"
            :to="DEMO_URL"
            target="_blank"
            size="xl"
            color="neutral"
            variant="outline"
            class="bg-white/70 dark:bg-gray-900/60 backdrop-blur"
            icon="i-heroicons-play-circle"
          >
            {{ t('platform.try_demo') }}
          </UButton>
        </div>
      </div>

      <div class="flex flex-col">
        <!-- Stage. Its height follows the content with a transition instead of jumping. -->
        <div
          class="ht-accent stage-outer"
          :style="[accentStyle, stageHeight ? { height: `${stageHeight}px` } : {}]"
          @mouseenter="hovering = true"
          @mouseleave="hovering = false"
          @focusin="focused = true"
          @focusout="focused = false"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <div ref="stage" class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div
              :id="`platform-panel-${slide.id}`"
              class="lg:col-span-5 xl:col-span-6 ht-glass rounded-3xl p-5 sm:p-6 xl:p-8"
              role="tabpanel"
              :aria-labelledby="`platform-tab-${slide.id}`"
              aria-live="polite"
            >
              <div class="relative">
              <Transition name="copy">
                <div :key="slide.id" class="w-full">
                  <div class="flex items-center gap-3 mb-5">
                    <span class="w-11 h-11 rounded-xl grid place-items-center text-white shadow-sm" :style="{ background: 'var(--accent)' }">
                      <UIcon :name="slide.icon" class="w-6 h-6" />
                    </span>
                    <UBadge :color="statusBadgeColor[slide.status]" variant="subtle" size="md">
                      {{ t(`platform.status.${slide.status}`) }}
                    </UBadge>
                  </div>

                  <h3 class="font-display text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
                    {{ t(`platform.slides.${slide.id}.title`) }}
                  </h3>
                  <p class="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-prose">
                    {{ t(`platform.slides.${slide.id}.description`) }}
                  </p>

                  <ul class="grid gap-3" :class="slide.items.length > 4 ? '2xl:grid-cols-2 2xl:gap-x-6' : ''">
                    <li v-for="item in slide.items" :key="item.id" class="flex items-start gap-3">
                      <UIcon
                        :name="item.status === 'soon' ? 'i-heroicons-clock' : 'i-heroicons-check'"
                        class="w-5 h-5 mt-0.5 shrink-0"
                        :style="{ color: item.status === 'soon' ? undefined : 'var(--accent)' }"
                        :class="item.status === 'soon' ? 'text-gray-400' : ''"
                      />
                      <span class="flex-1 text-sm text-gray-700 dark:text-gray-200">
                        <span class="font-medium text-gray-900 dark:text-white">{{ t(`platform.slides.${slide.id}.items.${item.id}.name`) }}</span>
                        <UBadge
                          v-if="item.status !== slide.status"
                          :color="statusBadgeColor[item.status]"
                          variant="subtle"
                          size="xs"
                          class="ml-1.5 align-middle"
                        >
                          {{ t(`platform.status.${item.status}`) }}
                        </UBadge>
                        <span class="block text-gray-600 dark:text-gray-400">{{ t(`platform.slides.${slide.id}.items.${item.id}.text`) }}</span>
                      </span>
                    </li>
                  </ul>

                  <a
                    :href="demoUrl(slide)"
                    target="_blank"
                    rel="noopener"
                    class="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary-500 rounded"
                    :style="{ color: 'var(--accent)' }"
                    :data-umami-click="`{&quot;name&quot;:&quot;click_platform_demo&quot;,&quot;file&quot;:&quot;PlatformShowcase&quot;,&quot;target&quot;:&quot;${slide.id}&quot;}`"
                  >
                    <UIcon name="i-heroicons-play-circle" class="w-5 h-5" />
                    {{ t('platform.slide_demo') }}
                  </a>
                  <NuxtLink
                    :to="localePath(`/tools/bot/${slide.slug}`)"
                    class="mt-6 ml-5 inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary-500 rounded"
                    :data-umami-click="`{&quot;name&quot;:&quot;click_platform_learn&quot;,&quot;file&quot;:&quot;PlatformShowcase&quot;,&quot;target&quot;:&quot;${slide.slug}&quot;}`"
                  >
                    {{ t('platform.learn_more') }}
                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                  </NuxtLink>
                </div>
              </Transition>
              </div>
            </div>

            <div class="lg:col-span-7 xl:col-span-6 relative min-h-[27rem]">
              <!-- Soft colour field behind the window, tinted per feature -->
              <div
                class="absolute -inset-6 lg:-inset-10 rounded-[2.5rem]"
                :style="{ background: 'radial-gradient(60% 60% at 70% 30%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)' }"
                aria-hidden="true"
              />
              <Transition name="scene">
                <component :is="scenes[slide.id]" :key="slide.id" class="relative w-full" />
              </Transition>
            </div>
          </div>
        </div>

        <!-- Tab rail: endless, the current feature always in the middle. Above the stage on small screens. -->
        <div class="order-first lg:order-none mb-8 lg:mb-0 lg:mt-12 flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            class="shrink-0 w-10 h-10 grid place-items-center rounded-full ring-1 ring-gray-200 dark:ring-gray-700 bg-white/70 dark:bg-gray-900/60 backdrop-blur text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-primary-500"
            :aria-label="t('common.previous')"
            @click="go(active - 1)"
          >
            <UIcon name="i-heroicons-chevron-left" class="w-5 h-5" />
          </button>

          <div class="relative flex-1 min-w-0 overflow-hidden rail-mask">
            <TransitionGroup
              tag="div"
              :name="railMotion"
              class="relative block whitespace-nowrap py-2"
              role="tablist"
              :aria-label="t('platform.title')"
              @keydown="onKeydown"
            >
              <div
                v-for="entry in railEntries"
                :key="entry.slide.id"
                class="inline-block align-top whitespace-normal px-1 transition-[width] duration-500"
                :style="{ width: `${entryWidth(entry.offset)}%` }"
              >
                <button
                  :id="`platform-tab-${entry.slide.id}`"
                  type="button"
                  role="tab"
                  :title="t(`platform.slides.${entry.slide.id}.short`)"
                  :aria-selected="entry.offset === 0"
                  :aria-controls="`platform-panel-${entry.slide.id}`"
                  :tabindex="entry.offset === 0 ? 0 : -1"
                  class="ht-accent relative w-full h-[4.75rem] text-left rounded-xl pt-3 pb-4 ring-1 ring-inset transition-[background-color,box-shadow,opacity] duration-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary-500"
                  :class="[compact && entry.offset !== 0 ? 'px-1' : 'px-3.5', entry.offset === 0
                    ? 'bg-white dark:bg-gray-800 shadow-md ring-gray-200 dark:ring-gray-700'
                    : 'bg-white/40 dark:bg-gray-900/40 ring-transparent hover:bg-white/80 dark:hover:bg-gray-800/70']"
                  :style="[accentVars(entry.slide.accent), { opacity: entry.offset === 0 ? 1 : Math.max(0.55, 1 - Math.abs(entry.offset) * 0.14) }]"
                  :data-umami-click="`{&quot;name&quot;:&quot;click_platform_tab&quot;,&quot;file&quot;:&quot;PlatformShowcase&quot;,&quot;target&quot;:&quot;${entry.slide.id}&quot;}`"
                  @click="go(entry.index)"
                >
                  <span v-if="compact && entry.offset !== 0" class="flex h-full items-center justify-center">
                    <UIcon :name="entry.slide.icon" class="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </span>
                  <template v-else>
                  <span class="flex items-center gap-2 min-w-0">
                    <UIcon
                      :name="entry.slide.icon"
                      class="w-5 h-5 shrink-0"
                      :style="{ color: entry.offset === 0 ? 'var(--accent)' : undefined }"
                      :class="entry.offset === 0 ? '' : 'text-gray-500 dark:text-gray-400'"
                    />
                    <span
                      class="min-w-0 truncate text-sm font-semibold"
                      :class="entry.offset === 0 ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'"
                    >
                      {{ t(`platform.slides.${entry.slide.id}.short`) }}
                    </span>
                  </span>
                  <span class="mt-1 block truncate text-xs" :class="statusText[entry.slide.status]">{{ t(`platform.status.${entry.slide.status}`) }}</span>
                  </template>
                  <span class="absolute left-3.5 right-3.5 bottom-2 h-0.5 rounded-full overflow-hidden" :class="entry.offset === 0 ? 'bg-gray-200 dark:bg-gray-700' : ''">
                    <span
                      v-if="entry.offset === 0"
                      :key="`${entry.slide.id}-${cycle}`"
                      class="ht-progress block h-full origin-left"
                      :style="{ background: 'var(--accent)', animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }"
                      @animationend="go(active + 1)"
                    />
                  </span>
                </button>
              </div>
            </TransitionGroup>
          </div>

          <button
            type="button"
            class="shrink-0 w-10 h-10 grid place-items-center rounded-full ring-1 ring-gray-200 dark:ring-gray-700 bg-white/70 dark:bg-gray-900/60 backdrop-blur text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-primary-500"
            :aria-label="t('common.next')"
            @click="go(active + 1)"
          >
            <UIcon name="i-heroicons-chevron-right" class="w-5 h-5" />
          </button>
          <button
            type="button"
            class="shrink-0 w-10 h-10 grid place-items-center rounded-full ring-1 ring-gray-200 dark:ring-gray-700 bg-white/70 dark:bg-gray-900/60 backdrop-blur text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-primary-500"
            :aria-label="userPaused ? t('platform.play') : t('platform.pause')"
            :title="userPaused ? t('platform.play') : t('platform.pause')"
            :aria-pressed="userPaused"
            data-umami-click="{&quot;name&quot;:&quot;click_platform_pause&quot;,&quot;file&quot;:&quot;PlatformShowcase&quot;}"
            @click="userPaused = !userPaused"
          >
            <UIcon :name="userPaused ? 'i-heroicons-play' : 'i-heroicons-pause'" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- What the badges mean -->
      <dl class="mt-8 ht-glass rounded-2xl p-4 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-xs text-gray-700 dark:text-gray-300">
        <div v-for="st in legend" :key="st" class="flex items-start gap-2">
          <dt>
            <UBadge :color="statusBadgeColor[st]" variant="subtle" size="xs">{{ t(`platform.status.${st}`) }}</UBadge>
          </dt>
          <dd>{{ t(`platform.status_help.${st}`) }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
import { platformSlides, statusBadgeColor, statusText, accentVars, demoUrl, DASHBOARD_URL, DEMO_URL, type FeatureStatus } from '~/data/platform'
import { scenes } from './scenes'

withDefaults(defineProps<{ hero?: boolean }>(), { hero: false })

const { t } = useI18n()
const localePath = useLocalePath()

const SLIDE_MS = 9000

const legend: FeatureStatus[] = ['stable', 'beta', 'alpha', 'soon']

const count = platformSlides.length
const mod = (i: number) => ((i % count) + count) % count

const active = ref(0)
const cycle = ref(0)
const slide = computed(() => platformSlides[active.value]!)
const accentStyle = computed(() => accentVars(slide.value.accent))

// How many tabs sit on each side of the current one; the rail wraps around endlessly
const railRadius = ref(1)
const railEntries = computed(() => {
  const r = Math.min(railRadius.value, Math.floor((count - 1) / 2))
  return Array.from({ length: r * 2 + 1 }, (_, k) => {
    const offset = k - r
    const index = mod(active.value + offset)
    return { offset, index, slide: platformSlides[index]! }
  })
})

// On phones the current tab takes most of the rail and its neighbours show only their icon
const compact = computed(() => railRadius.value === 1)
const entryWidth = (offset: number) => compact.value ? (offset === 0 ? 60 : 20) : 100 / railEntries.value.length

// Slide the rail left when moving forward and right when moving back
const direction = ref<1 | -1>(1)
const reducedMotion = ref(false)
const railMotion = computed(() => reducedMotion.value ? 'rail-none' : (direction.value === 1 ? 'rail-next' : 'rail-prev'))

const hovering = ref(false)
const focused = ref(false)
const visible = ref(false)
// Stopped by the pause button until the visitor resumes it
const userPaused = ref(false)
const paused = computed(() => userPaused.value || hovering.value || focused.value || !visible.value)

function go (index: number) {
  const next = mod(index)
  if (next === active.value) return
  // Take the short way round the loop to decide the direction
  const forward = mod(next - active.value)
  direction.value = forward <= count / 2 ? 1 : -1
  active.value = next
  cycle.value++
}

function onKeydown (e: KeyboardEvent) {
  const keys: Record<string, number> = { ArrowRight: active.value + 1, ArrowLeft: active.value - 1, Home: 0, End: count - 1 }
  if (!(e.key in keys)) return
  e.preventDefault()
  go(keys[e.key]!)
  nextTick(() => document.getElementById(`platform-tab-${slide.value.id}`)?.focus())
}

let touchX = 0
const onTouchStart = (e: TouchEvent) => { touchX = e.touches[0]?.clientX ?? 0 }
const onTouchEnd = (e: TouchEvent) => {
  const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX
  if (Math.abs(dx) > 50) go(active.value + (dx < 0 ? 1 : -1))
}

// Stage height, measured so it can transition between slides
const root = ref<HTMLElement | null>(null)
const stage = ref<HTMLElement | null>(null)
const stageHeight = ref<number | null>(null)

let observer: IntersectionObserver | null = null
let resizer: ResizeObserver | null = null
const media: { query: MediaQueryList, fn: () => void }[] = []

function watchMedia (q: string, fn: (matches: boolean) => void) {
  const query = window.matchMedia(q)
  const handler = () => fn(query.matches)
  handler()
  query.addEventListener('change', handler)
  media.push({ query, fn: handler })
}

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => { visible.value = !!entry?.isIntersecting }, { threshold: 0.3 })
  if (root.value) observer.observe(root.value)

  if (stage.value) {
    resizer = new ResizeObserver(() => { stageHeight.value = stage.value?.offsetHeight ?? null })
    resizer.observe(stage.value)
  }

  const setRadius = () => {
    railRadius.value = window.matchMedia('(min-width: 1024px)').matches ? 3 : window.matchMedia('(min-width: 640px)').matches ? 2 : 1
  }
  watchMedia('(min-width: 640px)', setRadius)
  watchMedia('(min-width: 1024px)', setRadius)
  watchMedia('(prefers-reduced-motion: reduce)', (m) => { reducedMotion.value = m })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  resizer?.disconnect()
  media.forEach(({ query, fn }) => query.removeEventListener('change', fn))
})
</script>

<style scoped>
.stage-outer {
  transition: height 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.ht-progress {
  animation-name: ht-progress;
  animation-timing-function: linear;
  animation-fill-mode: both;
}

/* Outgoing content is lifted out of the flow so the height follows the incoming slide */
.copy-leave-active,
.scene-leave-active {
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
}
.copy-enter-active,
.copy-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.copy-enter-active {
  transition-delay: 0.1s;
}
.copy-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.copy-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.scene-enter-active,
.scene-leave-active {
  transition: opacity 0.4s ease, transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.scene-enter-from {
  opacity: 0;
  transform: translateX(28px) scale(0.98);
}
.scene-leave-to {
  opacity: 0;
  transform: translateX(-28px) scale(0.98);
}

/* Endless rail: tabs glide over, the one leaving fades at the edge */
.rail-mask {
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}
.rail-next-move,
.rail-prev-move {
  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.rail-next-enter-active,
.rail-prev-enter-active,
.rail-next-leave-active,
.rail-prev-leave-active {
  transition: opacity 0.4s ease, transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.rail-next-leave-active,
.rail-prev-leave-active {
  position: absolute;
}
.rail-next-enter-from { opacity: 0; transform: translateX(100%); }
.rail-next-leave-to { opacity: 0; transform: translateX(-100%); }
.rail-prev-enter-from { opacity: 0; transform: translateX(-100%); }
.rail-prev-leave-to { opacity: 0; transform: translateX(100%); }

@media (prefers-reduced-motion: reduce) {
  .stage-outer,
  .copy-enter-active,
  .copy-leave-active,
  .scene-enter-active,
  .scene-leave-active {
    transition: none;
  }
}
</style>
