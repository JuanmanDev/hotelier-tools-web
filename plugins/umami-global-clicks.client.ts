export default defineNuxtPlugin(() => {

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

      let eventName = `click_${tag}`;
      const eventData: Record<string, string | number | boolean> = {};
      
      if (text) eventData.text = text;
      if (href) eventData.href = href;
      if (id) eventData.id = id;
      
      // Ultra-detailed data
      eventData.clientX = event.clientX;
      eventData.clientY = event.clientY;
      eventData.innerWidth = window.innerWidth;
      eventData.innerHeight = window.innerHeight;
      
      let path = '';
      let curr: HTMLElement | null = interactiveEl;
      while (curr && curr !== document.body) {
        path = curr.tagName.toLowerCase() + (curr.id ? `#${curr.id}` : '') + (curr.className ? `.${curr.className.replace(/\s+/g, '.')}` : '') + (path ? ` > ${path}` : '');
        curr = curr.parentElement;
      }
      eventData.domPath = path.substring(0, 200);
      // Check for explicit data-umami-click data
      const umamiClickData = interactiveEl.getAttribute('data-umami-click');
      if (umamiClickData) {
        try {
          const parsed = JSON.parse(umamiClickData);
          if (parsed && typeof parsed === 'object') {
            Object.assign(eventData, parsed);
            if (parsed.name) eventName = parsed.name;
          }
        } catch {
          eventData.target = umamiClickData;
        }
      }

      // Track the event directly
      if (typeof umTrackEvent === 'function') {
        umTrackEvent(eventName, eventData).catch(() => {});
      }
    }
  }, { capture: true }); // Use capture to ensure we get it even if propagation is stopped
});
