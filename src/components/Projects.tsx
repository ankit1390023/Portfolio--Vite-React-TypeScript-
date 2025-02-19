import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  image: string;
  details: string[];
}

const projects: Project[] = [
  {
    title: "Food Delivery Website",
    description: "A full-stack food delivery platform built with Next.js and MongoDB",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "JWT"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    details: [
      "Developed a full-stack platform using Next.js for server-side rendering",
      "Designed responsive UI with Tailwind CSS",
      "Integrated MongoDB and Mongoose for data management",
      "Implemented JWT-based authentication",
      "Built real-time order tracking system",
      "Deployed on Vercel for optimized performance"
    ]
  },
  {
    title: "Job Portal App",
    description: "MERN stack job portal with advanced features",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    details: [
      "Developed using MERN stack",
      "Implemented JWT authentication",
      "Created RESTful API with Express.js",
      "Designed responsive UI with React and Tailwind",
      "Managed job listings with MongoDB"
    ]
  },
  {
    title: "Weather Application",
    description: "Real-time weather app using external API",
    technologies: ["React", "Weather API", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://weather-app.demo",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
    details: [
      "Built with React and Weather API integration",
      "Implemented responsive design",
      "Added state management for weather updates",
      "Created dynamic weather visualization"
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 text-foreground"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="text-accent hover:text-accent/80">
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="text-accent hover:text-accent/80">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="glass rounded-lg p-8 max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-foreground">{selectedProject.title}</h3>
              <ul className="list-disc list-inside mb-6">
                {selectedProject.details.map((detail, index) => (
                  <li key={index} className="text-foreground/80 mb-2">{detail}</li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
