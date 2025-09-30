import { useGSAP, useGSAPRef } from "@/hooks/use-gsap";
import MyImage from "../img/myImage2.png";

export function AboutSection() {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-slate-800 parallax-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              5 Years of Frontend Excellence
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate frontend developer with nearly 5 years of experience creating engaging, 
              responsive, and user-friendly web applications. My journey in web development has been 
              driven by a love for clean code, innovative design, and seamless user experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in modern JavaScript frameworks and have a keen eye for detail when it 
              comes to UI/UX design. I believe in writing maintainable code and staying up-to-date 
              with the latest industry trends and best practices.
            </p>
            
            {/* <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-500 mb-2">30+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </div> */}
          </div>
          
          <div className="relative animate-on-scroll">
            <img 
              src={MyImage}
              alt="Professional developer portrait" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-80 animate-float-delayed-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
