import { useGSAP, useGSAPRef } from "@/hooks/use-gsap";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  const sectionRef = useGSAPRef<HTMLElement>();

  useGSAP(() => {
    if (window.gsap && window.ScrollTrigger && sectionRef.current) {
      window.gsap.from(sectionRef.current.querySelectorAll('.animate-on-scroll'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }
  }, []);

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Resume file should be in public directory
    link.download = 'Hitesh_Zade_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="resume" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900 parallax-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Download my resume to learn more about my experience, skills, and background
          </p>
          
          <div className="max-w-md mx-auto bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 shadow-2xl animate-on-scroll">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Hitesh Zade Resume
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              PDF • Updated Sept 2025
            </p>
            
            <Button
              onClick={handleDownloadResume}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}
