import { useEffect } from "react";

export function useParallaxElements() {
  useEffect(() => {
    const elements = document.querySelectorAll('.parallax-bg');
    
    const handleScroll = () => {
      elements.forEach((element: any, index) => {
        // Subtle parallax speeds to prevent overlap - alternating directions
        const speed = index % 2 === 0 ? -0.05 : 0.03; // Alternating subtle movement
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Apply parallax when element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate element's center position relative to viewport
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const distanceFromCenter = elementCenter - viewportCenter;
          
          // Apply parallax based on distance from viewport center
          const rate = distanceFromCenter * speed;
          element.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
      });
    };

    // Call handleScroll initially to set initial positions
    handleScroll();
    
    const throttledScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);
}

// Simple throttle function
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}