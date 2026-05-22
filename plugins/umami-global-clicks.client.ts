export default defineNuxtPlugin(() => {
  const { umTrackEvent } = useUmami();

  document.addEventListener('click', (event) => {
    // Find closest interactive element
    const target = event.target as HTMLElement;
    const interactiveEl = target?.closest?.('a, button, [role="button"]') as HTMLElement;
    
    if (interactiveEl) {
      // Extract details
      const tag = interactiveEl.tagName.toLowerCase();
      let text = interactiveEl.textContent?.trim()?.replace(/\s+/g, ' ')?.substring(0, 50) || '';
      const href = interactiveEl.getAttribute('href') || '';
      const id = interactiveEl.id || '';
      
      // If it's just an icon or empty button, try aria-label
      if (!text) {
        text = interactiveEl.getAttribute('aria-label') || '';
      }
      
      // Don't track if we can't identify it at all
      if (!text && !id && !href) return;

      const eventName = `click_${tag}`;
      const eventData: Record<string, string | number | boolean> = {};
      
      if (text) eventData.text = text;
      if (href) eventData.href = href;
      if (id) eventData.id = id;

      // Track the event
      umTrackEvent(eventName, eventData);
    }
  }, { capture: true }); // Use capture to ensure we get it even if propagation is stopped
});
