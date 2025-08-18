import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useParallaxElements } from "@/hooks/use-parallax";
import { useEffect } from "react";

export default function Home() {
  useParallaxElements(); // Initialize subtle parallax effects
  
  useEffect(() => {
    // Enable smooth scrolling for the body
    document.body.classList.add('smooth-scroll');
    
    // Load external scripts
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadGSAP = async () => {
      try {
        // Load GSAP
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
        // Load ScrollTrigger
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');
        console.log('GSAP loaded successfully');
      } catch (error) {
        console.error('Failed to load GSAP:', error);
      }
    };

    // Load Font Awesome
    const loadFontAwesome = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(link);
    };

    // Load Google Fonts
    const loadGoogleFonts = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    };

    loadGSAP();
    loadFontAwesome();
    loadGoogleFonts();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
