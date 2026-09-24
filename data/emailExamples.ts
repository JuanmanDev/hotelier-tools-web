// Example emails the dashboard sends, rebuilt from the real templates in the app
// (automated checks report, pricing autopilot, failed task alert, waitlist message)
// with invented data. The app writes these emails in English or Spanish, so the
// examples come in those two languages only.

import type { PlatformSlide } from './platform'

export type EmailLang = 'en' | 'es'
type Text = Record<EmailLang, string>
type Tone = 'neutral' | 'success' | 'danger'
type Level = 'error' | 'warning' | 'info' | 'success'

export type EmailBlock =
  | { type: 'p', text: Text, strong?: string }
  | { type: 'muted', text: Text }
  | { type: 'stats', cards: { value: string, label: Text, tone?: Tone }[] }
  | { type: 'table', columns: Text[], rows: { level?: Level, cells: (string | Text)[] }[] }
  | { type: 'buttons', items: { label: Text, primary?: boolean }[] }
  | { type: 'pre', text: string }
  | { type: 'cta', label: Text }

export interface EmailExample {
  id: string
  features: PlatformSlide['id'][]
  /** 'report' = branded report to the hotel; 'guest' = plain message the guest receives */
  kind: 'report' | 'guest'
  time: string
  subject: Text
  /** Title in the branded header of report emails */
  title?: Text
  blocks: EmailBlock[]
  /** Guest emails are plain text, one entry per line */
  lines?: Record<EmailLang, string[]>
}

const t = (en: string, es: string): Text => ({ en, es })

export const emailExamples: EmailExample[] = [
  {
    id: 'checks',
    features: ['checks', 'overview'],
    kind: 'report',
    time: '07:00',
    subject: t('🚨 Automated Checks (2026-10-12 → 2026-10-19) — 3 problems', '🚨 Comprobaciones automáticas (2026-10-12 → 2026-10-19) — 3 problemas'),
    title: t('Automated Checks Report', 'Informe de comprobaciones automáticas'),
    blocks: [
      { type: 'p', text: t('Period:', 'Periodo:'), strong: '2026-10-12 → 2026-10-19' },
      { type: 'muted', text: t('Looking 7 days ahead for arrivals.', 'Revisando las llegadas de los próximos 7 días.') },
      {
        type: 'stats',
        cards: [
          { value: '42', label: t('Reservations checked', 'Reservas revisadas') },
          { value: '3', label: t('Open issues', 'Problemas abiertos'), tone: 'danger' },
          { value: '5', label: t('Fixed on their own', 'Resueltos solos'), tone: 'success' }
        ]
      },
      {
        type: 'table',
        columns: [t('Level', 'Nivel'), t('Guest', 'Huésped'), t('Stay', 'Estancia'), t('Room', 'Habitación'), t('Problem', 'Problema')],
        rows: [
          { level: 'error', cells: ['M. Keller', '14/10 → 16/10', 'Doble 2', t('Do-not-rebook list: matched by email.', 'Lista de no volver a reservar: coincide el email.')] },
          { level: 'warning', cells: ['Thomas Weber', '15/10 → 17/10', 'Doble 5', t('ID document: missing for 1 of 2 guests.', 'Documento de identidad: falta para 1 de 2 huéspedes.')] },
          { level: 'warning', cells: ['Laura Martín', '16/10 → 19/10', 'Doble 3', t('Unpaid balance: 120,00 € still due.', 'Saldo pendiente: faltan 120,00 €.')] }
        ]
      },
      { type: 'cta', label: t('⚙️ Configure checks', '⚙️ Configurar comprobaciones') }
    ]
  },
  {
    id: 'pricing',
    features: ['pricing'],
    kind: 'report',
    time: '03:15',
    subject: t('Pricing autopilot: 4 changes in Little Hotelier (2026-10-16 → 2026-10-17)', 'Autopilot de precios: 4 cambios en Little Hotelier (2026-10-16 → 2026-10-17)'),
    title: t('Price changes published', 'Cambios de precio publicados'),
    blocks: [
      { type: 'p', text: t('The pricing autopilot wrote these changes to Little Hotelier on 12 Oct 2026, 03:15.', 'El autopilot de precios ha escrito estos cambios en Little Hotelier el 12 oct 2026, 03:15.') },
      {
        type: 'stats',
        cards: [
          { value: '4', label: t('Changes', 'Cambios') },
          { value: '3', label: t('Increases', 'Subidas'), tone: 'success' },
          { value: '1', label: t('Decreases', 'Bajadas'), tone: 'danger' }
        ]
      },
      {
        type: 'table',
        columns: [t('Date', 'Fecha'), t('Room', 'Habitación'), t('Before', 'Antes'), t('After', 'Después'), t('Why', 'Por qué')],
        rows: [
          { cells: [t('Fri 2026-10-16', 'vie 2026-10-16'), 'Doble', '€88.00', '€106.00 (+20.5%)', t('Local fair · demand up', 'Feria local · más demanda')] },
          { cells: [t('Fri 2026-10-16', 'vie 2026-10-16'), 'Suite', '€140.00', '€159.00 (+13.6%)', t('Local fair · competitor floor', 'Feria local · mínimo de competencia')] },
          { cells: [t('Sat 2026-10-17', 'sáb 2026-10-17'), 'Doble', '€92.00', '€110.00 (+19.6%)', t('Local fair · 2 rooms left', 'Feria local · quedan 2 habitaciones')] },
          { cells: [t('Sat 2026-10-17', 'sáb 2026-10-17'), 'Individual', '€70.00', '€64.00 (−8.6%)', t('Similar hotels are cheaper', 'Hoteles similares más baratos')] }
        ]
      },
      { type: 'cta', label: t('See the history and the why behind every change', 'Ver el historial y el porqué de cada cambio') }
    ]
  },
  {
    id: 'failure',
    features: ['invoicing', 'automations'],
    kind: 'report',
    time: '09:30',
    subject: t('⚠️ The scheduled task "Invoice at checkout" failed', '⚠️ La tarea programada "Factura al salir" ha fallado'),
    title: t('Scheduled task failed', 'Tarea programada fallida'),
    blocks: [
      { type: 'p', text: t('The scheduled task "Invoice at checkout" could not finish (2026-10-12T09:30:00Z), so this check is still pending.', 'La tarea programada "Factura al salir" no se pudo completar (2026-10-12T09:30:00Z), por lo que la revisión correspondiente ha quedado pendiente.') },
      {
        type: 'buttons',
        items: [
          { label: t('See invoices waiting to be sent', 'Ver facturas pendientes de enviar'), primary: true },
          { label: t('See the error log', 'Ver el registro del error') },
          { label: t('Review the task', 'Revisar la tarea') }
        ]
      },
      { type: 'pre', text: 'Little Hotelier: the password has expired (401). Automated work is paused until it is updated.' },
      { type: 'p', text: t('The task will retry on its schedule, and the next successful run will also send the invoices from the last 7 days that were left behind. You only get this alert the first time it fails.', 'La tarea se reintentará según su programación, y la próxima ejecución correcta enviará también las facturas de los últimos 7 días que se quedaron sin enviar. Este aviso se envía solo la primera vez que falla.') }
    ]
  },
  {
    id: 'waitlist',
    features: ['waitlist'],
    kind: 'guest',
    time: '11:42',
    subject: t('Availability for 2026-10-12 → 2026-10-16', 'Disponibilidad para 2026-10-12 → 2026-10-16'),
    blocks: [],
    lines: {
      en: [
        'Hi Ana,',
        '',
        'A room has become available for the dates you were waiting for (2026-10-12 → 2026-10-16):',
        '',
        '• Double room — 1 available',
        '',
        'Book now (subject to availability): hotel-example.com/book',
        '',
        'Nothing is held yet — the room can go at any moment.',
        'Best option right now: Double room.',
        '',
        '—',
        'Hotel Example · Calle Mayor 1, Zamora · +34 900 000 000'
      ],
      es: [
        'Hola Ana,',
        '',
        'Se ha liberado una habitación para las fechas que estabas esperando (2026-10-12 → 2026-10-16):',
        '',
        '• Habitación doble — 1 disponible',
        '',
        'Reserva ahora (sujeto a disponibilidad): hotel-ejemplo.com/reservar',
        '',
        'No hay nada reservado todavía — la disponibilidad puede desaparecer en cualquier momento.',
        'Mejor opción ahora mismo: Habitación doble.',
        '',
        '—',
        'Hotel Ejemplo · Calle Mayor 1, Zamora · +34 900 000 000'
      ]
    }
  }
]

export const emailsForFeature = (id?: PlatformSlide['id']) =>
  id ? emailExamples.filter(e => e.features.includes(id)) : emailExamples
