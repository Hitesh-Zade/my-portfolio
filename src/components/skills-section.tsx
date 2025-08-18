import { useGSAP, useGSAPRef } from "@/hooks/use-gsap";

export function SkillsSection() {
  const sectionRef = useGSAPRef<HTMLElement>();

  useGSAP(() => {
    if (window.gsap && window.ScrollTrigger && sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.skill-card');
      
      cards.forEach((card, i) => {
        window.gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          duration: 0.6,
          y: 50,
          opacity: 0,
          delay: i * 0.1,
          ease: 'power2.out'
        });
      });
    }
  }, []);

  const skills = [
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500", description: "Semantic markup and modern HTML features" },
    { name: "CSS3(SASS)", icon: "fab fa-css3-alt", color: "text-blue-500", description: "Advanced styling and animations" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500", description: "ES6+ and modern JavaScript" },
    { name: "React.js", icon: "fab fa-react", color: "text-cyan-500", description: "Component-based architecture" },
    { name: "Tailwind CSS", icon: "fas fa-wind", color: "text-teal-500", description: "Utility-first CSS framework" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-500", description: "Responsive grid system" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-red-500", description: "Version control and collaboration" },
    { name: "jQuery", icon: "fas fa-dollar-sign", color: "text-green-500", description: "DOM manipulation and AJAX" },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-20 bg-white dark:bg-slate-900 parallax-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`${skill.icon} ${skill.color}`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
