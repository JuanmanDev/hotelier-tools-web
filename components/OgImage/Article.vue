<template>
  <!-- Share card of a guide, rendered by nuxt-og-image (satori), 1200×630 -->
  <div
    class="w-full h-full flex flex-row text-white"
    style="font-family: 'Inter', 'Noto Sans Thai'; background-image: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #312e81 100%);"
  >
    <!-- Text column -->
    <div class="flex flex-col justify-between h-full" :style="{ padding: '56px 0 52px 64px', width: cover ? '640px' : '1100px' }">
      <div class="flex flex-row items-center">
        <div class="flex items-center justify-center rounded-2xl text-3xl font-bold" :style="{ width: '52px', height: '52px', backgroundColor: accent, color: '#0f172a' }">H</div>
        <div class="flex text-3xl font-bold" style="margin-left: 16px;">Hotelier Tools</div>
        <div class="flex rounded-full font-bold" :style="{ marginLeft: '18px', padding: '6px 16px', fontSize: '20px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#e2e8f0' }">{{ kind }}</div>
      </div>

      <div class="flex flex-col">
        <div v-if="eyebrow" class="flex text-2xl font-bold" :style="{ color: accent, marginBottom: '14px' }">{{ eyebrow }}</div>
        <div class="flex font-bold" :style="{ fontSize: `${titleSize}px`, lineHeight: 1.1, letterSpacing: '-1px' }">{{ title }}</div>
      </div>

      <!-- Author, then reading time and date: two short lines never wrap, whatever the language -->
      <div class="flex flex-col" style="font-size: 22px; color: #cbd5e1;">
        <div v-if="author" class="flex" style="color: #e2e8f0; white-space: nowrap;">{{ author }}</div>
        <div class="flex flex-row items-center" style="margin-top: 6px; white-space: nowrap;">
          <div v-if="minutes" class="flex">{{ minutes }}</div>
          <div v-if="minutes && date" class="flex" style="margin: 0 12px; color: #64748b;">·</div>
          <div v-if="date" class="flex">{{ date }}</div>
        </div>
      </div>
    </div>

    <!-- Screenshot of the demo, framed like a browser window -->
    <div v-if="cover" class="flex flex-col" style="position: absolute; left: 700px; top: 70px; width: 760px; border-radius: 18px; overflow: hidden; background-color: #ffffff; box-shadow: 0 30px 60px rgba(0,0,0,0.45); border: 2px solid rgba(255,255,255,0.25);">
      <div class="flex flex-row items-center" style="height: 34px; padding: 0 14px; background-color: #e2e8f0;">
        <div class="flex" style="width: 12px; height: 12px; border-radius: 6px; background-color: #fb7185;" />
        <div class="flex" style="width: 12px; height: 12px; border-radius: 6px; background-color: #fbbf24; margin-left: 7px;" />
        <div class="flex" style="width: 12px; height: 12px; border-radius: 6px; background-color: #34d399; margin-left: 7px;" />
        <div class="flex" style="margin-left: 16px; font-size: 15px; color: #475569;">{{ coverLabel }}</div>
      </div>
      <img :src="cover" width="760" height="475" style="width: 760px; height: 475px; object-fit: cover; object-position: left top;">
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  description?: string
  eyebrow?: string
  accent?: string
  /** "Guide", translated */
  kind?: string
  author?: string
  /** "8 min read", translated */
  minutes?: string
  date?: string
  /** Absolute URL of a PNG/JPEG screenshot */
  cover?: string
  coverLabel?: string
  site?: string
}>(), {
  title: 'Hotelier Tools',
  description: '',
  eyebrow: '',
  accent: '#60a5fa',
  kind: 'Guide',
  author: '',
  minutes: '',
  date: '',
  cover: '',
  coverLabel: 'demo.hotelier.tools',
  site: 'hotelier.tools'
})

// Long titles shrink so they stay within four lines of the text column
const titleSize = computed(() => {
  const n = props.title.length
  if (!props.cover) return n > 70 ? 54 : n > 45 ? 62 : 70
  return n > 80 ? 40 : n > 60 ? 44 : n > 40 ? 50 : 56
})
</script>
