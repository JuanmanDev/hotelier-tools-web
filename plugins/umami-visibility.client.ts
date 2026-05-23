export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null;
  
  if (process.client && window.IntersectionObserver) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const dataStr = target.getAttribute('data-umami-view');
          
          let trackData = { section_name: 'unknown_element' };
          if (dataStr) {
            try {
              const parsed = JSON.parse(dataStr);
              if (typeof parsed === 'object') trackData = { ...trackData, ...parsed };
              else trackData.section_name = String(parsed);
            } catch {
              trackData.section_name = dataStr;
            }
          }
          
          if (typeof umTrackEvent === 'function') {
            umTrackEvent('section_view', trackData).catch(() => {});
          }
          
          if (observer) observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    // Initial scan
    setTimeout(() => {
      document.querySelectorAll('[data-umami-view]').forEach(el => {
        if (observer) observer.observe(el);
      });
    }, 500);

    // Scan after route changes
    nuxtApp.hook('page:finish', () => {
      setTimeout(() => {
        document.querySelectorAll('[data-umami-view]').forEach(el => {
          if (observer) observer.observe(el);
        });
      }, 500);
    });
  }
});
