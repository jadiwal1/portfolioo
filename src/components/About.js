"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hello! I'm Deepak Jadiwal, a passionate Full Stack Developer based in India. 
            I hold a <span className="font-semibold text-gray-900">BSc in Information Technology (IT)</span> and have over <span className="font-semibold text-gray-900">3 years of professional experience</span> in the tech industry.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I specialize in building high-quality web applications using modern technologies. My journey has been driven by a curiosity to learn and a desire to create impactful digital solutions. When I'm not coding, you can find me exploring new tech trends or contributing to open-source projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">3+</h3>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">10+</h3>
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">BSc IT</h3>
            <p className="text-gray-600 font-medium">Bachelor of Science in Information Technology</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;