"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="relative bg-darkBlue py-20 px-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-orange-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            MUBARRA NAZ
          </motion.h1>
          <motion.h2
            className="text-3xl font-semibold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mt-6 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A skilled software engineer with a passion for crafting innovative
            solutions. Thriving in designing efficient applications, I'm
            excited to dive into Web3.0 and Metaverse. Let's collaborate and
            push boundaries together!
          </motion.p>
          <motion.button
            className="mt-8 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            Let’s Connect
          </motion.button>
        </div>

        {/* Image Content */}
        <motion.div
          className="relative md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-cover bg-center rounded-l-full"
            style={{
              backgroundImage: "url('/modern-technology.jpg')", // Replace with your image path
            }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
}
