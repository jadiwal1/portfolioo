"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Cready",
    period: "August 2025 - Present",
    description: "Building secure and scalable FinTech systems using Node.js, Express.js, TypeORM, and PostgreSQL. Contributing to a loan aggregation platform and implementing Loan Against Mutual Funds (LAS) workflows. Designed backend APIs for lead generation and integrated multiple banking APIs."
  },
  {
    role: "Full Stack Developer",
    company: "Enpointe IO IT Services PVT LTD",
    period: "Jun 2024 - July 2025",
    description: "Backend development and CMS building for client projects like Novo Cinema. Designed scalable CMS supporting operations across Qatar, Oman, and UAE. Implemented RBAC and developed features for Movie Sessions and Offer Management."
  },
  {
    role: "Full Stack Developer",
    company: "CATV Business Process Automation Pvt. Ltd.",
    period: "August 2023 - Jun 2024",
    description: "Developed an Office Management System using React.js, JavaScript, and Bootstrap. Built backend services using Node.js, Express.js, and MySQL. Delivered end-to-end features enhancing UI functionality and usability."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">Work Experience</h2>
          <p className="mt-4 text-lg text-gray-600">My professional journey</p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-indigo-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{exp.role}</h3>
                  <time className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full mt-1 sm:mt-0">{exp.period}</time>
                </div>
                <div className="text-indigo-600 font-medium mb-2 text-sm">{exp.company}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;