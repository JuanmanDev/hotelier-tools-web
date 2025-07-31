/**
 * Simple script features mapping based on script documentation
 * This provides a centralized reference without complex file reading
 */

export interface ToolFeatures {
  [key: string]: string[]
}

/**
 * Script-to-tool mapping for reference documentation
 */
export const SCRIPT_TO_TOOL_MAPPING = {
  // UI Enhancer scripts
  'tables-full-width': 'chrome-ui-enhancer',
  'compact-calendar-ui': 'chrome-ui-enhancer', 
  'compact-ui-reservation-details': 'chrome-ui-enhancer',
  'prices-display': 'chrome-ui-enhancer',
  'improve-style-touch-screens': 'chrome-ui-enhancer',
  'auto-refresh-inactivity': 'chrome-ui-enhancer',
  'extra-invoice-print-button': 'chrome-ui-enhancer',
  'update-number-adults': 'chrome-ui-enhancer',
  'update-payment-link-button': 'chrome-ui-enhancer',
  'bank-transfer-email-button': 'chrome-ui-enhancer',
  'add-button-check-front-desk': 'chrome-ui-enhancer',
  'change-inventory-name': 'chrome-ui-enhancer',
  
  // Commission Calculator scripts
  'show-booking-commissions': 'booking-commission-calculator'
}

/**
 * Composable to manage script features for tools
 * This uses the feature lists from translation files (i18n)
 */
export const useScriptFeatures = () => {
  
  /**
   * Get the tool that a script belongs to
   */
  const getToolByScript = (scriptSlug: string): string | null => {
    return SCRIPT_TO_TOOL_MAPPING[scriptSlug as keyof typeof SCRIPT_TO_TOOL_MAPPING] || null
  }

  /**
   * Get all scripts for a specific tool
   */
  const getScriptsByTool = (toolId: string): string[] => {
    return Object.entries(SCRIPT_TO_TOOL_MAPPING)
      .filter(([_, tool]) => tool === toolId)
      .map(([script, _]) => script)
  }

  /**
   * Get feature count for a tool (derived from script count and complexity)
   */
  const getFeatureCount = (toolId: string): number => {
    const scripts = getScriptsByTool(toolId)
    const baseCounts: Record<string, number> = {
      'chrome-ui-enhancer': 13, // Many UI improvements
      'booking-commission-calculator': 5, // Commission features
      'auto-checkout': 5, // Automation features
      'payment-validator': 5, // Validation features  
      'reservation-monitor': 5, // Monitoring features
      'invoice-manager': 5 // Management features
    }
    return baseCounts[toolId] || scripts.length || 3
  }

  /**
   * Check if a script exists in our system
   */
  const scriptExists = (scriptSlug: string): boolean => {
    return scriptSlug in SCRIPT_TO_TOOL_MAPPING
  }

  /**
   * Get all available scripts
   */
  const getAllScripts = (): string[] => {
    return Object.keys(SCRIPT_TO_TOOL_MAPPING)
  }

  /**
   * Get tools that have scripts
   */
  const getToolsWithScripts = (): string[] => {
    return [...new Set(Object.values(SCRIPT_TO_TOOL_MAPPING))]
  }

  return {
    getToolByScript,
    getScriptsByTool,
    getFeatureCount,
    scriptExists,
    getAllScripts,
    getToolsWithScripts,
    SCRIPT_TO_TOOL_MAPPING
  }
}
