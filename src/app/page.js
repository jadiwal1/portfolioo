"use client";

import Background from "@/components/Background";
import TypingText from "@/components/TypingText";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";


export default function Home() {
  
  return (
    <main className="relative min-h-screen flex items-center">
      <Background />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-56 px-6 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="block mb-4">Hi There,</span>
            <span className="block">
              I’m Deepak <span className="text-orange-500">Jadiwal</span>
            </span>
          </h1>


          <p className="mt-6 text-xl">
            I Am Into{" "}
            <span className="text-red-600 font-semibold">
              <TypingText />
            </span>
          </p>

          {/* BUTTON */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#about"
            className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md"
          >
            About Me ↓
          </motion.a>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 text-xl">
            <a className="hover:text-indigo-600" href="#"><FaLinkedin /></a>
            <a className="hover:text-indigo-600" href="#"><FaGithub /></a>
            <a className="hover:text-indigo-600" href="#"><FaTwitter /></a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="bg-yellow-400 rounded-full p-6 shadow-xl"
          >
            <Image
              src="/avatar.png"
              alt="avatar"
              width={260}
              height={260}
              className="rounded-full"
            />
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}
