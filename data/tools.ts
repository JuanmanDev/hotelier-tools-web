/**
 * Tools Data Manager
 * This file provides a centralized way to manage tool information
 * and reference script content without copy-paste
 */

export interface ToolData {
  id: string
  category: 'chrome-extension' | 'automation'
  icon: string
  status: 'available' | 'beta' | 'coming-soon'
  linkTo: string
}

/**
 * Script mapping - maps tools to their corresponding script files
 * This creates a reference system that avoids copy-paste
 */
export const SCRIPT_MAPPING = {
  'chrome-ui-enhancer': [
    'tables-full-width',
    'compact-calendar-ui', 
    'compact-ui-reservation-details',
    'prices-display',
    'improve-style-touch-screens',
    'auto-refresh-inactivity',
    'extra-invoice-print-button',
    'update-number-adults',
    'update-payment-link-button',
    'bank-transfer-email-button',
    'add-button-check-front-desk',
    'change-inventory-name'
  ],
  'booking-commission-calculator': [
    'show-booking-commissions'
  ],
  'auto-checkout': [] as string[],
  'payment-validator': [] as string[],
  'reservation-monitor': [] as string[],
  'invoice-manager': [] as string[]
} as const

export type ToolId = keyof typeof SCRIPT_MAPPING

/**
 * Tools data for carousel and showcase components
 */
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

/**
 * Get tool configuration with references to script files
 */
export const getToolsData = () => {
  const tools = [
    {
      id: 'chrome-ui-enhancer' as ToolId,
      category: 'chrome-extension',
      status: 'available',
      scripts: SCRIPT_MAPPING['chrome-ui-enhancer'],
      github: 'https://github.com/JuanmanDev/TampermonkeyLittleHotelier',
      documentation: '/tools/ui'
    },
    {
      id: 'booking-commission-calculator' as ToolId, 
      category: 'chrome-extension',
      status: 'available',
      scripts: SCRIPT_MAPPING['booking-commission-calculator'],
      github: 'https://github.com/JuanmanDev/TampermonkeyLittleHotelier',
      documentation: '/tools/ui'
    },
    {
      id: 'auto-checkout' as ToolId,
      category: 'automation', 
      status: 'beta',
      scripts: SCRIPT_MAPPING['auto-checkout'],
      documentation: '/tools/bot/checkout'
    },
    {
      id: 'payment-validator' as ToolId,
      category: 'automation',
      status: 'beta', 
      scripts: SCRIPT_MAPPING['payment-validator'],
      documentation: '/tools/bot/payments'
    },
    {
      id: 'reservation-monitor' as ToolId,
      category: 'automation',
      status: 'available',
      scripts: SCRIPT_MAPPING['reservation-monitor'],
      documentation: '/tools/bot/unconfirmed'
    },
    {
      id: 'invoice-manager' as ToolId,
      category: 'automation',
      status: 'coming-soon',
      scripts: SCRIPT_MAPPING['invoice-manager'],
      documentation: '/tools/bot/invoices'
    }
  ]

  return tools
}

/**
 * Get scripts for a specific tool
 */
export const getToolScripts = (toolId: string) => {
  return SCRIPT_MAPPING[toolId as ToolId] || []
}

/**
 * Get all script slugs
 */
export const getAllScriptSlugs = () => {
  return Object.values(SCRIPT_MAPPING).flat()
}

/**
 * Get tool by script slug
 */
export const getToolByScript = (scriptSlug: string) => {
  for (const [toolId, scripts] of Object.entries(SCRIPT_MAPPING)) {
    if (scripts.includes(scriptSlug as never)) {
      return toolId
    }
  }
  return null
}
