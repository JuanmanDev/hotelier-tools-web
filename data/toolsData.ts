export interface ToolData {
  id: string
  category: 'chrome-extension' | 'automation'
  icon: string
  status: 'available' | 'beta' | 'coming-soon'
  linkTo: string
}

export const toolsData: ToolData[] = [
  // Main tool categories that link to existing pages
  {
    id: 'ui-scripts-collection',
    category: 'chrome-extension',
    icon: 'i-heroicons-computer-desktop',
    status: 'available',
    linkTo: '/tools/ui'
  },
  {
    id: 'bot-automations-collection',
    category: 'automation',
    icon: 'i-heroicons-cpu-chip',
    status: 'available',
    linkTo: '/tools/bot'
  },
  
  // Individual UI script cards
  {
    id: 'booking-commission-calculator',
    category: 'chrome-extension',
    icon: 'i-heroicons-calculator',
    status: 'available',
    linkTo: '/tools/ui/show-booking-commissions'
  },
  {
    id: 'tables-full-width',
    category: 'chrome-extension',
    icon: 'i-heroicons-table-cells',
    status: 'available',
    linkTo: '/tools/ui/tables-full-width'
  },
  {
    id: 'compact-calendar-ui',
    category: 'chrome-extension',
    icon: 'i-heroicons-calendar-days',
    status: 'available',
    linkTo: '/tools/ui/compact-calendar-ui'
  },
  {
    id: 'prices-display',
    category: 'chrome-extension',
    icon: 'i-heroicons-currency-dollar',
    status: 'available',
    linkTo: '/tools/ui/prices-display'
  },
  {
    id: 'touch-screen-optimization',
    category: 'chrome-extension',
    icon: 'i-heroicons-device-tablet',
    status: 'available',
    linkTo: '/tools/ui/improve-style-touch-screens'
  },
  
  // Individual Bot automation cards
  {
    id: 'auto-checkout-bot',
    category: 'automation',
    icon: 'i-heroicons-arrow-right-start-on-rectangle',
    status: 'beta',
    linkTo: '/tools/bot/checkout'
  },
  {
    id: 'payment-validator-bot',
    category: 'automation',
    icon: 'i-heroicons-credit-card',
    status: 'beta',
    linkTo: '/tools/bot/payments'
  },
  {
    id: 'unconfirmed-reservations-bot',
    category: 'automation',
    icon: 'i-heroicons-exclamation-triangle',
    status: 'available',
    linkTo: '/tools/bot/unconfirmed'
  },
  {
    id: 'guest-management-bot',
    category: 'automation',
    icon: 'i-heroicons-user-group',
    status: 'beta',
    linkTo: '/tools/bot/guests'
  },
  {
    id: 'pricing-optimization-bot',
    category: 'automation',
    icon: 'i-heroicons-chart-bar-square',
    status: 'beta',
    linkTo: '/tools/bot/prices'
  },
  {
    id: 'invoice-management-bot',
    category: 'automation',
    icon: 'i-heroicons-document-text',
    status: 'coming-soon',
    linkTo: '/tools/bot/invoices'
  }
]
