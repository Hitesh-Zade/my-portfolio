import { useGSAP, useGSAPRef } from "@/hooks/use-gsap";
import { useTypewriter } from "@/hooks/use-typewriter";
import { FloatingShapes } from "./floating-shapes";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const heroRef = useGSAPRef<HTMLElement>();
  const contentRef = useGSAPRef<HTMLDivElement>();
  
  const typewriterText = useTypewriter({
    words: ['Frontend Developer', 'UI Developer', 'Reactjs Developer'],
    typeSpeed: 100,
    deleteSpeed: 50,
    delayBetweenWords: 2000,
  });

  useGSAP(() => {
    if (window.gsap && contentRef.current) {
      window.gsap.from(contentRef.current, {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out"
      });
    }
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-3d bg-gradient-to-br from-blue-50 via-purple-50/50 to-blue-50 dark:from-slate-900 dark:via-blue-900/30 dark:to-slate-900"
    >
      <FloatingShapes />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'moveGrid 20s linear infinite'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div ref={contentRef} className="hero-content">
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 relative">
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="gradient-text relative">
                Hitesh Zade
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light my-10 text-gray-700 dark:text-gray-300">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            4.9 years of crafting exceptional web experiences with modern technologies and creative solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
