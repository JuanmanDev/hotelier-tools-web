<template>
  <PlatformWindow path="/developer/rest-api">
    <pre class="rounded-xl bg-gray-950 text-gray-200 text-[11px] sm:text-xs leading-relaxed p-4 overflow-hidden font-mono"><code><span
      v-for="(line, i) in lines"
      :key="i"
      class="ht-fade block whitespace-pre"
      :style="{ '--d': `${0.1 + i * 0.12}s` }"
    ><span v-for="(part, j) in line" :key="j" :class="part.c">{{ part.t }}</span></span></code></pre>

    <div class="ht-rise mt-4" style="--d: 1.6s">
      <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">{{ $t('platform.scenes.developer.clients') }}</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(client, i) in clients"
          :key="client"
          class="ht-pop rounded-full px-3 py-1 text-xs font-medium ring-1 ring-gray-200 dark:ring-gray-700 text-gray-800 dark:text-gray-100"
          :style="{ '--d': `${1.8 + i * 0.12}s` }"
        >{{ client }}</span>
        <span class="ht-pop rounded-full px-3 py-1 text-xs font-medium text-white" :style="{ background: 'var(--accent)', '--d': '2.4s' }">
          {{ $t('platform.scenes.developer.tools', { n: 115 }) }}
        </span>
      </div>
    </div>
  </PlatformWindow>
</template>

<script setup lang="ts">
import PlatformWindow from '../PlatformWindow.vue'

const k = 'text-sky-300'
const s = 'text-emerald-300'
const m = 'text-gray-500'

const lines = [
  [{ t: 'GET ', c: 'text-fuchsia-300' }, { t: '/api/v1/reservations?arrival=2026-10-14' }],
  [{ t: 'Authorization: ', c: m }, { t: 'Bearer htk_••••••••', c: m }],
  [{ t: '' }],
  [{ t: '{' }],
  [{ t: '  "id"', c: k }, { t: ': ' }, { t: '"LH-48213"', c: s }, { t: ',' }],
  [{ t: '  "guest"', c: k }, { t: ': ' }, { t: '"Laura Martín"', c: s }, { t: ',' }],
  [{ t: '  "room"', c: k }, { t: ': ' }, { t: '"Doble 3"', c: s }, { t: ',' }],
  [{ t: '  "balance"', c: k }, { t: ': ' }, { t: '0', c: 'text-amber-300' }],
  [{ t: '}' }]
]

const clients = ['Claude', 'Cursor', 'VS Code']
</script>
