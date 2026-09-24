<template>
  <section
    v-if="list.length"
    id="emails"
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
    data-umami-view="{&quot;name&quot;:&quot;view_component&quot;,&quot;file&quot;:&quot;EmailExamples&quot;,&quot;path&quot;:&quot;components/platform/EmailExamples.vue&quot;}"
  >
    <div class="max-w-2xl mb-10">
      <h2 class="font-display text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
        {{ t('emails.title') }}
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300">{{ t('emails.subtitle') }}</p>
    </div>

    <div class="grid rounded-3xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 shadow-[0_30px_60px_-40px_rgba(30,41,90,0.5)]" :class="list.length > 1 ? 'lg:grid-cols-[20rem_1fr]' : ''">
      <!-- Message list -->
      <div
        v-if="list.length > 1"
        class="flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-950/40"
        role="tablist"
        :aria-label="t('emails.title')"
      >
        <button
          v-for="(mail, i) in list"
          :id="`email-tab-${mail.id}`"
          :key="mail.id"
          type="button"
          role="tab"
          :aria-selected="i === active"
          :aria-controls="`email-panel-${mail.id}`"
          class="shrink-0 w-64 lg:w-full text-left px-4 py-4 border-r lg:border-r-0 lg:border-b border-gray-100 dark:border-gray-800 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary-500"
          :class="i === active ? 'bg-white dark:bg-gray-900' : 'hover:bg-white/70 dark:hover:bg-gray-900/60'"
          :data-umami-click="`{&quot;name&quot;:&quot;click_email_example&quot;,&quot;file&quot;:&quot;EmailExamples&quot;,&quot;target&quot;:&quot;${mail.id}&quot;}`"
          @click="active = i"
        >
          <span class="flex items-center justify-between gap-2 mb-1">
            <span class="flex items-center gap-2 min-w-0">
              <span v-if="i === active" class="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
              <span class="text-sm font-semibold text-gray-900 dark:text-white truncate">{{ mail.kind === 'guest' ? t('emails.hotel_sender') : 'Hotelier Tools' }}</span>
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400 shrink-0">{{ mail.time }}</span>
          </span>
          <span class="block text-sm text-gray-800 dark:text-gray-200 line-clamp-2">{{ mail.subject[lang] }}</span>
          <span class="mt-1 inline-block text-[11px] rounded-full px-2 py-0.5" :class="mail.kind === 'guest' ? 'bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'">
            {{ mail.kind === 'guest' ? t('emails.to_guest') : t('emails.to_hotel') }}
          </span>
        </button>
      </div>

      <!-- Open message -->
      <div
        :id="`email-panel-${mail.id}`"
        role="tabpanel"
        :aria-labelledby="`email-tab-${mail.id}`"
        class="min-w-0 p-4 sm:p-6 lg:p-8"
      >
        <Transition name="mail" mode="out-in">
          <article :key="mail.id">
            <header class="mb-5 pb-4 border-b border-gray-100 dark:border-gray-800">
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 break-words">{{ mail.subject[lang] }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <span class="font-medium text-gray-700 dark:text-gray-200">{{ mail.kind === 'guest' ? t('emails.hotel_sender') : 'Hotelier Tools' }}</span>
                <span aria-hidden="true"> → </span>{{ mail.kind === 'guest' ? t('emails.guest_name') : t('emails.reception') }}
              </p>
            </header>

            <!-- Guest messages are plain text, written as the hotel -->
            <div v-if="mail.kind === 'guest'" class="max-w-2xl rounded-2xl bg-gray-50 dark:bg-gray-800/60 p-5 sm:p-6 text-sm leading-relaxed text-gray-800 dark:text-gray-100">
              <p v-for="(line, j) in mail.lines?.[lang]" :key="j" :class="line ? '' : 'h-3'">{{ line }}</p>
            </div>

            <!-- Branded report, laid out like the real template -->
            <div v-else class="max-w-3xl rounded-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700">
              <div class="px-6 py-5 text-center text-white" style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #312e81 100%)">
                <p class="text-xs tracking-wide opacity-70 mb-1">Hotelier Tools</p>
                <p class="font-display text-lg sm:text-xl font-semibold">{{ mail.title?.[lang] }}</p>
              </div>
              <div class="bg-white dark:bg-gray-900 px-4 sm:px-6 py-6 text-sm text-gray-800 dark:text-gray-100 space-y-5">
                <template v-for="(block, j) in mail.blocks" :key="j">
                  <p v-if="block.type === 'p'">{{ block.text[lang] }} <strong v-if="block.strong">{{ block.strong }}</strong></p>
                  <p v-else-if="block.type === 'muted'" class="-mt-3 text-xs text-gray-500 dark:text-gray-400">{{ block.text[lang] }}</p>

                  <div v-else-if="block.type === 'stats'" class="grid grid-cols-3 gap-2 sm:gap-3">
                    <div v-for="card in block.cards" :key="card.value + card.label.en" class="rounded-xl border p-3 text-center" :class="statClass[card.tone ?? 'neutral']">
                      <span class="block text-2xl sm:text-3xl font-extrabold leading-tight" :class="statNum[card.tone ?? 'neutral']">{{ card.value }}</span>
                      <span class="block text-[11px] sm:text-xs text-gray-600 dark:text-gray-300">{{ card.label[lang] }}</span>
                    </div>
                  </div>

                  <div v-else-if="block.type === 'table'" class="overflow-x-auto -mx-1 px-1">
                    <table class="w-full text-left text-xs sm:text-sm border-collapse min-w-[34rem]">
                      <thead>
                        <tr class="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                          <th v-for="col in block.columns" :key="col.en" class="py-2 pr-3 font-medium">{{ col[lang] }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(row, r) in block.rows" :key="r" class="border-b border-gray-100 dark:border-gray-800 align-top" :class="row.level ? rowTint[row.level] : ''">
                          <td v-if="row.level" class="py-2.5 pr-3 whitespace-nowrap">
                            <span class="inline-block rounded-md px-1.5 py-0.5 text-[10px] font-bold" :class="badge[row.level]">{{ row.level === 'warning' ? 'WARN' : row.level.toUpperCase() }}</span>
                          </td>
                          <td v-for="(cell, c) in row.cells" :key="c" class="py-2.5 pr-3" :class="c === 0 && !row.level ? 'whitespace-nowrap' : ''">
                            <span :class="c === 0 ? 'font-semibold' : ''">{{ typeof cell === 'string' ? cell : cell[lang] }}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div v-else-if="block.type === 'buttons'" class="flex flex-wrap gap-2">
                    <span
                      v-for="btn in block.items"
                      :key="btn.label.en"
                      class="rounded-lg px-4 py-2.5 text-sm font-semibold border"
                      :class="btn.primary ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200'"
                    >{{ btn.label[lang] }}</span>
                  </div>

                  <pre v-else-if="block.type === 'pre'" class="rounded-lg bg-gray-100 dark:bg-gray-800 p-3 text-xs whitespace-pre-wrap font-mono">{{ block.text }}</pre>

                  <div v-else-if="block.type === 'cta'" class="pt-3 text-center">
                    <span class="inline-block rounded-xl px-7 py-3 text-sm font-bold text-white" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%)">{{ block.label[lang] }}</span>
                  </div>
                </template>
              </div>
              <p class="bg-gray-50 dark:bg-gray-950 px-6 py-3 text-center text-[11px] text-gray-400">Sent by Hotelier Tools</p>
            </div>

            <p class="mt-4 text-xs text-gray-500 dark:text-gray-400">{{ t('emails.note') }}</p>
          </article>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { emailsForFeature, type EmailLang } from '~/data/emailExamples'
import type { PlatformSlide } from '~/data/platform'

const props = defineProps<{ feature?: PlatformSlide['id'] }>()

const { t, locale } = useI18n()

// The app writes its emails in Spanish or English
const lang = computed<EmailLang>(() => (locale.value.startsWith('es') ? 'es' : 'en'))

const list = computed(() => emailsForFeature(props.feature))
const active = ref(0)
watch(list, () => { active.value = 0 })
const mail = computed(() => list.value[Math.min(active.value, list.value.length - 1)]!)

const statClass = {
  neutral: 'bg-slate-50 border-slate-300 dark:bg-slate-800 dark:border-slate-600',
  success: 'bg-green-50 border-green-300 dark:bg-green-950 dark:border-green-800',
  danger: 'bg-red-50 border-red-300 dark:bg-red-950 dark:border-red-800'
}
const statNum = {
  neutral: 'text-slate-900 dark:text-slate-50',
  success: 'text-green-700 dark:text-green-400',
  danger: 'text-red-700 dark:text-red-400'
}
const badge = {
  error: 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200',
  warning: 'bg-amber-200 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  info: 'bg-sky-200 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
  success: 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200'
}
const rowTint = {
  error: 'bg-red-50/60 dark:bg-red-500/5',
  warning: 'bg-amber-50/60 dark:bg-amber-500/5',
  info: '',
  success: ''
}
</script>

<style scoped>
.mail-enter-active,
.mail-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mail-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.mail-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .mail-enter-active,
  .mail-leave-active {
    transition: none;
  }
}
</style>
