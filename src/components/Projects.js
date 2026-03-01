"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description: "A full-featured online store with cart, checkout, and payment integration.",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "Task Management App",
//     description: "A productivity tool to organize tasks with drag-and-drop functionality.",
//     tech: ["Next.js", "Firebase", "Tailwind CSS"],
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "Portfolio Website",
//     description: "Personal portfolio website showcasing skills and projects with animations.",
//     tech: ["Next.js", "Framer Motion", "Tailwind"],
//     github: "#",
//     live: "#",
//   }
// ];

// Currently no projects to display
const projects = [];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600">Check out some of my recent work</p>
        </motion.div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a href={project.github} className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                      <FaGithub /> Code
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-16 px-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-center"
          >
            <FaLaptopCode className="text-6xl text-indigo-300 mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Projects Coming Soon!</h3>
            <p className="text-gray-600 max-w-md">
              I am currently working on some exciting projects. Stay tuned for updates!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;