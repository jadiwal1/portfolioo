"use client";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiTypescript, SiPostgresql, SiMysql } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">My Skills</h2>
          <p className="mt-4 text-lg text-gray-600">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center gap-4 group"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;