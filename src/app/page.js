"use client";

import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import TypingText from "@/components/TypingText";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
  
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for the children
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Background />

      <main className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 px-6 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              <span className="block mb-4">Hi There, I'm</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                Deepak Jadiwal
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 text-xl md:text-2xl">
              I Am Into{" "}
              <span className="text-indigo-600 font-semibold">
                <TypingText />
              </span>
            </motion.p>

            {/* BUTTON */}
            <motion.a
              variants={itemVariants}
              href="#about"
              className="inline-block mt-8 bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              animate={{
                scale: [1, 1.02, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              }}
            >
              About Me ↓
            </motion.a>

            {/* SOCIAL ICONS */}
            <motion.div
              variants={containerVariants}
              className="flex gap-6 mt-8 text-2xl"
            >
              <motion.a variants={itemVariants} className="hover:text-indigo-600 transition-colors" href="#"><FaLinkedin /></motion.a>
              <motion.a variants={itemVariants} className="hover:text-indigo-600 transition-colors" href="#"><FaGithub /></motion.a>
              <motion.a variants={itemVariants} className="hover:text-indigo-600 transition-colors" href="#"><FaTwitter /></motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-50"></div>
              <Image
                src="/avatar.png"
                alt="avatar"
                width={300}
                height={300}
                className="rounded-full relative z-10 shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </main>
      <About />
      <Skills />
      <Contact />
    </>
  );
}
