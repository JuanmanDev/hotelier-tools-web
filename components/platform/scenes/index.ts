import type { Component } from 'vue'
import type { PlatformSlide } from '~/data/platform'
import OverviewScene from './OverviewScene.vue'
import InvoicingScene from './InvoicingScene.vue'
import ChecksScene from './ChecksScene.vue'
import PricingScene from './PricingScene.vue'
import InboxScene from './InboxScene.vue'
import AiScene from './AiScene.vue'
import ReportsScene from './ReportsScene.vue'
import WaitlistScene from './WaitlistScene.vue'
import AutomationsScene from './AutomationsScene.vue'
import DeveloperScene from './DeveloperScene.vue'

// Animated app mock for each feature, shared by the home carousel and the feature pages
export const scenes: Record<PlatformSlide['id'], Component> = {
  overview: OverviewScene,
  invoicing: InvoicingScene,
  checks: ChecksScene,
  pricing: PricingScene,
  inbox: InboxScene,
  ai: AiScene,
  reports: ReportsScene,
  waitlist: WaitlistScene,
  automations: AutomationsScene,
  developer: DeveloperScene
}
