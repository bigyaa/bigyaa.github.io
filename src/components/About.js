// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-20 text-center text-textPrimary bg-gradient-to-b from-backgroundStart to-backgroundEnd">
      <motion.h2
        className="text-5xl font-bold mb-12 text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="bg-primary max-w-4xl mx-auto p-8 rounded-lg shadow-2xl border-2 border-opacity-10 border-white hover:border-opacity-30 transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <p className="text-lg leading-relaxed text-gray-300">
          Full Stack Software Engineer with 5+ years of experience delivering
          robust, scalable front-end and back-end solutions using JavaScript,
          Python, Java, React.js, and Node.js. Skilled at leading
          cross-functional teams and driving code quality through comprehensive
          reviews and optimizations.
        </p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-secondary transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;