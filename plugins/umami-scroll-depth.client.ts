export default defineNuxtPlugin(() => {

  let maxScroll = 0;
  let trackedDepths = new Set<number>();

  document.addEventListener('scroll', () => {
    // Calculate scroll percentage
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight <= 0) return;
    
    const scrolled = (window.scrollY / docHeight) * 100;
    if (scrolled > maxScroll) {
      maxScroll = scrolled;
    }

    // Check thresholds: 25, 50, 75, 100
    const thresholds = [25, 50, 75, 100];
    thresholds.forEach(threshold => {
      if (maxScroll >= threshold && !trackedDepths.has(threshold)) {
        trackedDepths.add(threshold);
        if (typeof umTrackEvent === 'function') {
          umTrackEvent('scroll_depth', {
            depth_percentage: threshold,
            path: window.location.pathname
          }).catch(() => {});
        }
      }
    });
  }, { passive: true }); // Passive listener for performance

  // Reset scroll depths on route change
  const router = useRouter();
  router.afterEach(() => {
    maxScroll = 0;
    trackedDepths.clear();
  });
});
