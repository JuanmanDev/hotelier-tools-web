<template>
  <!-- Share card rendered by nuxt-og-image (satori), 1200×630 -->
  <div
    class="w-full h-full flex flex-col justify-between text-white"
    style="padding: 60px 72px; font-family: 'Inter', 'Noto Sans Thai'; background-image: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #312e81 100%);"
  >
    <!-- Brand and status -->
    <div class="w-full flex flex-row items-center justify-between">
      <div class="flex flex-row items-center">
        <div class="flex items-center justify-center rounded-2xl text-3xl font-bold" :style="{ width: '56px', height: '56px', backgroundColor: accent, color: '#0f172a' }">H</div>
        <div class="flex text-3xl font-bold" style="margin-left: 18px;">Hotelier Tools</div>
      </div>
      <div v-if="status" class="flex rounded-full text-2xl font-bold" :style="{ padding: '8px 22px', backgroundColor: statusColors[0], color: statusColors[1] }">
        {{ status }}
      </div>
    </div>

    <!-- Message -->
    <div class="w-full flex flex-col">
      <div v-if="eyebrow" class="flex text-3xl font-bold" :style="{ color: accent, marginBottom: '16px' }">{{ eyebrow }}</div>
      <div class="flex font-bold" :style="{ fontSize: `${titleSize}px`, lineHeight: 1.08, letterSpacing: '-1px', maxWidth: '1040px' }">{{ title }}</div>
      <div v-if="description" class="flex" style="margin-top: 22px; font-size: 28px; line-height: 1.35; color: #cbd5e1; max-width: 1000px;">{{ clipped }}</div>
    </div>

    <!-- Site and offer -->
    <div class="w-full flex flex-row items-center justify-between" style="font-size: 24px; color: #94a3b8;">
      <div class="flex">{{ site }}</div>
      <div v-if="footer" class="flex rounded-2xl" :style="{ padding: '10px 22px', backgroundColor: 'rgba(255,255,255,0.08)', color: '#e2e8f0', border: `2px solid ${accent}` }">{{ footer }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  description?: string
  eyebrow?: string
  status?: string
  statusKind?: 'stable' | 'beta' | 'alpha' | 'soon' | ''
  accent?: string
  footer?: string
  site?: string
}>(), {
  title: 'Hotelier Tools',
  description: '',
  eyebrow: '',
  status: '',
  statusKind: '',
  accent: '#60a5fa',
  footer: '',
  site: 'hotelier.tools'
})

// Long titles shrink so they stay within three lines
const titleSize = computed(() => (props.title.length > 70 ? 52 : props.title.length > 45 ? 60 : 68))
const clipped = computed(() => (props.description.length > 150 ? `${props.description.slice(0, 147).trimEnd()}…` : props.description))

const STATUS: Record<string, [string, string]> = {
  stable: ['#bbf7d0', '#14532d'],
  beta: ['#fde68a', '#78350f'],
  alpha: ['#bae6fd', '#0c4a6e'],
  soon: ['#e2e8f0', '#1e293b']
}
const statusColors = computed(() => STATUS[props.statusKind] ?? STATUS.soon!)
</script>
