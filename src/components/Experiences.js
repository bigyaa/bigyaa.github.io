import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import experiences from '../data/experiences';

// Container and item variants for staggering animations
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      // Stagger the children animations
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Variants for the collapsible bullet points
const bulletVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Card for each experience
function ExperienceCard({ experience }) {
  // Track whether bullets are displayed
  const [showBullets, setShowBullets] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      // A playful hover effect for the entire card
      whileHover={{ scale: 1.06, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="relative bg-lightBlue p-6 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 cursor-pointer overflow-hidden"
    >
      {/* Floating white shapes for visual interest */}
      <motion.div
        className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full blur-md"
        animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/20 rounded-full blur-xl"
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
      />

      {/* Actual experience info */}
      <h3 className="relative text-xl font-bold text-softPink z-10">
        {experience.company}
      </h3>
      <p className="relative text-md font-semibold z-10">
        {experience.role} | {experience.date}
      </p>
      <p className="relative mb-4 text-sm italic z-10">{experience.location}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowBullets((prev) => !prev);
        }}
        className="relative z-10 px-4 py-2 bg-pink-300 text-black rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors"
      >
        {showBullets ? 'Show Less' : 'Learn More'}
      </button>

      {/* Collapsible bullet points with animation */}
      <AnimatePresence>
        {showBullets && (
          <motion.ul
            key="bulletList"
            className="relative list-disc ml-5 mt-4 text-sm space-y-2 z-10"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={bulletVariants}
          >
            {experience.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Main Experience component
export default function Experience() {
  return (
    <motion.section
      // Slight scale-in on enter
      className="relative py-20 text-center text-background overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100"
        style={{ zIndex: -1 }}
      />

      {/* Floating circles for a playful effect */}
      <motion.div
        className="absolute top-[-5rem] left-[-5rem] w-72 h-72 bg-lightPurple rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-5rem] right-[-5rem] w-72 h-72 bg-lightBlue rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />

      {/* Experience Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {experiences?.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </motion.div>
    </motion.section>
  );
}