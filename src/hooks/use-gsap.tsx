import { useEffect, useRef, MutableRefObject } from "react";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export function useGSAP(
  callback: (gsap: any, ScrollTrigger: any) => void,
  dependencies: any[] = []
) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && !hasRun.current) {
      // Register ScrollTrigger plugin
      if (window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
      }
      
      callback(window.gsap, window.ScrollTrigger);
      hasRun.current = true;
    }
  }, dependencies);
}

export function useGSAPRef<T extends HTMLElement>(): MutableRefObject<T | null> {
  return useRef<T>(null);
}
