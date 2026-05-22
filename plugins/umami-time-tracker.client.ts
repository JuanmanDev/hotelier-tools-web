export default defineNuxtPlugin((nuxtApp) => {
  const { umTrackEvent } = useUmami();
  let startTime = Date.now();
  let currentPath = '';

  const trackTimeSpent = () => {
    if (!currentPath) return;
    
    const endTime = Date.now();
    const timeSpentSeconds = Math.round((endTime - startTime) / 1000);
    
    // Only track if they spent more than 1 second (to ignore instant redirects)
    if (timeSpentSeconds > 1) {
      umTrackEvent('time_spent', {
        path: currentPath,
        seconds: timeSpentSeconds
      });
    }
  };

  nuxtApp.hook('page:finish', () => {
    // Record the new path and start time
    currentPath = window.location.pathname;
    startTime = Date.now();
  });

  const router = useRouter();
  router.beforeEach((to, from) => {
    if (from.path !== to.path) {
      trackTimeSpent();
    }
  });

  // Track time when closing tab
  window.addEventListener('beforeunload', () => {
    trackTimeSpent();
  });
  
  // Track visibility changes (e.g. user goes to another tab)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      trackTimeSpent();
    } else {
      // Reset timer when coming back
      startTime = Date.now();
    }
  });
});
