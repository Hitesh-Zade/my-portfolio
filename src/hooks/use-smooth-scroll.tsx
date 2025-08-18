import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    let rafId: number;
    let currentScroll = window.pageYOffset;
    let targetScroll = window.pageYOffset;
    let isScrolling = false;

    const smoothScrollTo = (target: number) => {
      targetScroll = target;
      if (!isScrolling) {
        isScrolling = true;
        animateScroll();
      }
    };

    const animateScroll = () => {
      const diff = targetScroll - currentScroll;
      const delta = diff * 0.1;
      
      if (Math.abs(delta) < 0.5) {
        currentScroll = targetScroll;
        isScrolling = false;
        return;
      }
      
      currentScroll += delta;
      window.scrollTo(0, currentScroll);
      
      rafId = requestAnimationFrame(animateScroll);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scrollAmount = e.deltaY * 2;
      smoothScrollTo(Math.max(0, targetScroll + scrollAmount));
    };

    // Only enable custom smooth scroll on desktop
    if (window.innerWidth > 768) {
      document.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      document.removeEventListener('wheel', handleWheel);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
}