import { useGSAP, useGSAPRef } from "@/hooks/use-gsap";
import { ExternalLink, Github } from "lucide-react";
import movix from "../img/movix.png"
import brainwave from "../img/brainwave.png"
import expense from "../img/expense.png"
import project from "../img/project.png"
import ticTacToe from "../img/tictactoe.png"

export function ProjectsSection() {
  const sectionRef = useGSAPRef<HTMLElement>();

  useGSAP(() => {
    if (window.gsap && window.ScrollTrigger && sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.project-card');
      
      cards.forEach((card, i) => {
        window.gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          duration: 0.8,
          y: 60,
          opacity: 0,
          delay: i * 0.2,
          ease: 'power3.out'
        });
      });
    }
  }, []);

  const projects = [
    {
      title: "Movix",
      description: "A web application that allows users to search for movies by title, view detailed information such as release year, genre, cast, and ratings, and explore trending films.",
      image: movix,
      technologies: ["React", "JavaScript", "Axios"],
      colors: ["bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300", "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300", "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300"],
      links: {
        live: "https://moviex-eta.vercel.app/",
        code: "https://github.com/Hitesh-Zade/Moviex"
      }
    },
    {
      title: "Brainwave",
      description: "Brainwave — an AI chat landing page that showcases the power of intelligent conversations and productivity upgrades with a modern, sleek design.",
      image: brainwave,
      technologies: ["React", "Javascript", "Tailwind"],
      colors: ["bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300", "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300", "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300"],
      links: {
        live: "https://brainwave-landing-page-41oe.vercel.app/",
        code: "https://github.com/Hitesh-Zade/brainwave-landing-page"
      }
    },
    {
      title: "Expense Tracker",
      description: "A personal finance management application with real-time balance updates, transaction categorization, and persistent local storage.",
      image: expense,
      technologies: ["React", "Tailwind", "Firebase"],
      colors: ["bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300", "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300", "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"],
      links: {
        live: "https://expense-tracker-indol-alpha-64.vercel.app/",
        code: "https://github.com/Hitesh-Zade/expense-tracker"
      }
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, animated weather icons, and responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["HTML5", "CSS3", "jQuery"],
      colors: ["bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300", "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300", "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300"],
      links: {
        live: "https://moviex-eta.vercel.app/",
        code: "https://github.com/Hitesh-Zade/Moviex"
      }
    },
    {
      title: "Project Management",
      description: "A project management web application that allows users to create, organize, and manage tasks effectively with a clean and intuitive interface",
      image: project,
      technologies: ["React", "JavaScript"],
      colors: ["bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300", "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-300", "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300"],
      links: {
        live: "https://project-management-iota-two.vercel.app/",
        code: "https://github.com/Hitesh-Zade/project_management"
      }
    },
    {
      title: "Tic Tac Toe",
      description: "A classic Tic Tac Toe game built with a simple and interactive interface where two players can play against each other.",
      image: ticTacToe,
      technologies: ["React", "JavaScript"],
      colors: ["bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300", "bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-300", "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300"],
      links: {
        live: "https://tic-tac-toe-lac-phi-29.vercel.app/",
        code: "https://github.com/Hitesh-Zade/TicTacToe"
      }
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-20 bg-gray-50 dark:bg-slate-800 parallax-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of projects that showcase my skills and creativity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card bg-white dark:bg-slate-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl group"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${project.colors[techIndex]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
}
