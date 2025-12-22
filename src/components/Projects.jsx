import { FaGithub, FaExternalLinkAlt, FaFolder, FaFingerprint, FaUtensils, FaChartLine, FaTerminal } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Biometric Staff Management System",
      description: "Built for Pan-Atlantic University to automate attendance for 5 operational units. Features fingerprint authentication to eliminate proxy attendance, automated email shift notifications, and a complex shift-swapping logic engine for Supervisors.",
      tech: ["Java", "SQL", "Biometric SDK", "JavaMail API"],
      github: "https://github.com/os4yomore/PAU-SMS", 
      type: "Enterprise Software",
      icon: <FaFingerprint className="text-2xl" />
    },
    {
      title: "Cafeteria Automation Suite",
      description: "Designed to solve financial leakage and ticket fraud in the university cafeteria. Implements role-based dashboards (Kitchen vs. Server vs. Management), real-time inventory alerts, and automated sales reporting for the Head of Unit.",
      tech: ["Java", "MySQL", "Real-time Alerts", "Reporting"],
      github: "https://github.com/os4yomore/Cafeteria-Management-System-Java-",
      type: "System Automation",
      icon: <FaUtensils className="text-2xl" />
    },
    {
      title: "Student Result Management System",
      description: "A high-performance C++ CLI application for managing academic records. Features secure user authentication, automated CGPA calculation, and file-based persistence (CSV) to handle student grades and data efficiently without a heavy database engine.",
      tech: ["C++", "File I/O", "Algorithms", "CLI"],
      github: "https://github.com/os4yomore/baby-RMS",
      type: "Systems Programming",
      icon: <FaTerminal className="text-2xl" />
    },
    {
      title: "Stock Price Simulation",
      description: "A financial modeling tool that utilizes stochastic processes (Brownian Motion) to simulate and visualize future stock price evolutions. Built to predict market trends under uncertainty.",
      tech: ["Python", "Matplotlib", "NumPy", "Statistics"],
      github: "https://github.com/os4yomore/baby-quant",
      type: "Financial Engineering",
      icon: <FaChartLine className="text-2xl" />
    },
    {
      title: "Thesis: Safe RL for Healthcare",
      description: "My final year research project. Investigating Safe Reinforcement Learning techniques to optimize personalized pain management strategies for Sickle Cell Disease patients.",
      tech: ["Python", "PyTorch", "Reinforcement Learning", "Healthcare"],
      github: "#", 
      type: "Academic Research",
      status: "In Progress",
      icon: <FaChartLine className="text-2xl" />
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-6 font-serif">
            My Projects
          </h2>
          <p className="text-pink-800/70 max-w-2xl mx-auto text-lg">
            Engineering solutions for <span className="font-bold text-pink-700">Enterprise</span>, <span className="font-bold text-pink-700">Finance</span>, and <span className="font-bold text-pink-700">Healthcare</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              // Logic to span 2 columns if it's the last item and we have an odd number (5)
              className={`bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 p-8 shadow-xl hover:shadow-pink-200/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col ${index === 4 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}
            >
              {/* Card Header: Icon + Type */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-pink-100 rounded-2xl text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  {project.icon || <FaFolder className="text-2xl" />}
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-pink-500 uppercase tracking-wider bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                    {project.type}
                    </span>
                    {project.status && (
                        <span className="mt-2 text-[10px] font-bold text-white uppercase tracking-wider bg-pink-400 px-2 py-0.5 rounded-full animate-pulse">
                        {project.status}
                        </span>
                    )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-pink-900 mb-3 group-hover:text-pink-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-pink-900/80 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/60 text-pink-700 text-sm font-medium rounded-lg border border-pink-100">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer: Links */}
              <div className="flex items-center gap-4 pt-6 border-t border-pink-200/50 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-800 font-bold hover:text-pink-500 transition-colors"
                >
                  <FaGithub className="text-xl" /> 
                  <span>View Code</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;