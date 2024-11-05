// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-textPrimary">
      <h2 className="text-4xl font-bold mb-8 text-accent">About Me</h2>
      <motion.div
        className="bg-primary max-w-4xl mx-auto p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg">
          Full Stack Software Engineer with 5+ years of experience delivering robust, scalable front-end and back-end solutions using
          JavaScript, Python, Java, React.js, and Node.js. Skilled at leading cross-functional teams and driving code quality through comprehensive reviews and optimizations.
        </p>
      </motion.div>
    </section>
  );
}

export default About;