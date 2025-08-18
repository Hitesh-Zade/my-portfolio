import { useGSAP } from "@/hooks/use-gsap";
import { useRef } from "react";

export function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.gsap && containerRef.current) {
      const shapes = containerRef.current.querySelectorAll('.floating-shape');
      
      shapes.forEach((shape, index) => {
        window.gsap.to(shape, {
          duration: 6 + index,
          y: -20 - (index * 5),
          rotation: 360,
          ease: "none",
          repeat: -1,
          yoyo: true,
          delay: index * 0.5
        });
      });
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none"
    >
      <div className="floating-shape absolute top-20 left-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
      <div className="floating-shape absolute top-40 right-20 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
      <div className="floating-shape absolute bottom-40 left-20 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
      <div className="floating-shape absolute bottom-20 right-10 w-6 h-6 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full"></div>
      <div className="floating-shape absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
      <div className="floating-shape absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"></div>
    </div>
  );
}
