// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold text-yellow-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Bigya Bajracharya
        </motion.h1>
        <p className="text-xl mt-4 text-yellow-200">Full Stack Software Engineer</p>
        <motion.button
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          View My Work
        </motion.button>
      </div>
    </header>
  );
}

export default Header;