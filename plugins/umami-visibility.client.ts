export default defineNuxtPlugin((nuxtApp) => {
  const { umTrackEvent } = useUmami();
  
  // Only create observer if supported
  if (!window.IntersectionObserver) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        const name = target.getAttribute('data-umami-view-name') || 'unknown_element';
        
        // Track the view event
        umTrackEvent('section_view', { section_name: name });
        
        // Stop observing once tracked
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 }); // Require 50% visibility to count as "seen"

  nuxtApp.vueApp.directive('umami-view', {
    mounted(el: HTMLElement, binding) {
      const name = binding.value || el.id || 'unnamed_section';
      el.setAttribute('data-umami-view-name', name);
      observer.observe(el);
    },
    unmounted(el: HTMLElement) {
      observer.unobserve(el);
    }
  });
});
