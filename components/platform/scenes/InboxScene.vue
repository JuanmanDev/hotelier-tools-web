<template>
  <PlatformWindow path="/messaging">
    <div class="grid sm:grid-cols-[11rem_1fr] gap-4 h-full">
      <ul class="hidden sm:block space-y-1.5">
        <li
          v-for="(c, i) in conversations"
          :key="c.name"
          class="ht-rise flex items-center gap-2 rounded-lg px-2 py-2"
          :class="i === 0 ? 'bg-gray-100 dark:bg-gray-800' : ''"
          :style="{ '--d': `${0.1 + i * 0.12}s` }"
        >
          <span class="w-6 h-6 rounded-full grid place-items-center text-[10px] font-bold text-white shrink-0" :style="{ background: c.color }">{{ c.badge }}</span>
          <span class="min-w-0 flex-1">
            <span class="block text-xs font-medium text-gray-900 dark:text-white truncate">{{ c.name }}</span>
            <span class="block text-[11px] text-gray-500 dark:text-gray-400 truncate">{{ c.channel }}</span>
          </span>
          <span v-if="c.unread" class="w-2 h-2 rounded-full" :style="{ background: 'var(--accent)' }" />
        </li>
      </ul>

      <div class="flex flex-col gap-3">
        <div class="ht-rise self-start max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white" style="--d: 0.5s">
          {{ $t('platform.scenes.inbox.guest') }}
          <span class="block mt-1 text-[11px] text-gray-500 dark:text-gray-400">WhatsApp, Laura Martín</span>
        </div>

        <div class="relative self-end max-w-[88%]">
          <div class="typing absolute right-0 -top-1 flex gap-1 px-3 py-2" aria-hidden="true">
            <span v-for="d in 3" :key="d" class="w-1.5 h-1.5 rounded-full bg-gray-400 dots" :style="{ animationDelay: `${d * 0.15}s` }" />
          </div>
          <div
            class="ht-rise rounded-2xl rounded-br-sm px-3 py-2 text-sm text-gray-900 dark:text-white border-2 border-dashed"
            :style="{ '--d': '2s', borderColor: 'var(--accent)', background: 'color-mix(in srgb, var(--accent) 8%, transparent)' }"
          >
            <span class="flex items-center gap-1 text-[11px] font-medium mb-1" :style="{ color: 'var(--accent)' }">
              <UIcon name="i-heroicons-sparkles" class="w-3.5 h-3.5" />{{ $t('platform.scenes.inbox.draft_label') }}
            </span>
            {{ $t('platform.scenes.inbox.draft') }}
            <span class="block mt-1 text-[11px] text-gray-500 dark:text-gray-400">{{ $t('platform.scenes.inbox.source') }}</span>
          </div>
        </div>

        <div class="ht-rise flex justify-end gap-2" style="--d: 2.5s">
          <span class="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 ring-1 ring-gray-200 dark:ring-gray-700">{{ $t('platform.scenes.inbox.edit') }}</span>
          <span class="rounded-lg px-3 py-1.5 text-xs font-medium text-white" :style="{ background: 'var(--accent)' }">{{ $t('platform.scenes.inbox.send') }}</span>
        </div>

        <p class="ht-fade mt-auto flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400" style="--d: 3s">
          <UIcon name="i-heroicons-document-duplicate" class="w-4 h-4" :style="{ color: 'var(--accent)' }" />
          {{ $t('platform.scenes.inbox.more', { n: 2 }) }}
        </p>
      </div>
    </div>
  </PlatformWindow>
</template>

<script setup lang="ts">
import PlatformWindow from '../PlatformWindow.vue'

const conversations = [
  { name: 'Laura Martín', channel: 'WhatsApp', badge: 'W', color: '#16a34a', unread: true },
  { name: 'Thomas Weber', channel: 'Booking.com', badge: 'B', color: '#1d4ed8', unread: true },
  { name: 'Akira Sato', channel: 'Gmail', badge: '@', color: '#dc2626' },
  { name: 'Marie Dubois', channel: 'Outlook', badge: 'O', color: '#0369a1' }
]
</script>

<style scoped>
.dots {
  animation: ht-dots 1s ease-in-out infinite;
}
/* Shown only while the reply is being written, hidden in its resting state */
.typing {
  opacity: 0;
  animation: typing 1.1s ease 0.9s both;
}
@keyframes typing {
  0% { opacity: 0; }
  15%, 85% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
