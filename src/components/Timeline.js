import React, { useState } from 'react';
import { Chrono } from 'react-chrono';
import { motion, AnimatePresence } from 'framer-motion';
import experiences from '../data/experiences'; // Your experiences data

// Animation variants for collapsible bullet points
const bulletVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

// A collapsible node to replicate your \"Learn More\" logic
function CollapsibleBullets({ experience }) {
  const [showBullets, setShowBullets] = useState(false);

  return (
    <div className="relative text-black">
      <h3 className="text-xl font-bold text-softPink mb-1">
        {experience.company}
      </h3>
      <p className="text-md font-semibold mb-1">
        {experience.role} | {experience.date}
      </p>
      <p className="mb-3 text-sm italic">{experience.location}</p>

      {/* Toggle button */}
      <button
        onClick={() => setShowBullets((prev) => !prev)}
        className="px-4 py-2 bg-pink-300 text-black rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors mb-2"
      >
        {showBullets ? 'Show Less' : 'Learn More'}
      </button>

      {/* Animate presence of bullet points */}
      <AnimatePresence>
        {showBullets && (
          <motion.ul
            key="bulletList"
            className="list-disc ml-5 mt-2 text-sm space-y-2"
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
    </div>
  );
}

export default function Timeline() {
  // Convert experiences to Chrono's format; ensure date is a string
  const items = experiences.map((exp) => ({
    title: `${exp.role} @ ${exp.company}`,
    // If exp.date is something like \"Aug 2020 - Aug 2022\",
    // Chrono will simply display it as-is on the timeline.
    date: exp.date,
    // Provide our collapsible bullets as card content
    cardDetailedText: <CollapsibleBullets experience={exp} />,
  }));

  return (
    <section className="relative py-20 text-center text-background overflow-hidden">
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

      <div className="max-w-6xl mx-auto p-4">
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          scrollable={{ scrollbar: true }}
          cardHeight={170}
          cardWidth={500}
          useReadMore={false} // We manage collapsible content ourselves
          theme={{
            primary: '#F472B6', // Pink highlight
            secondary: '#F3F4F6',
            cardBgColor: '#FFFFFF',
            cardForeColor: '#111827',
            titleColor: '#111827',
            titleColorActive: '#F472B6',
          }}
          classNames={{
            card:
              'bg-white p-6 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 hover:shadow-xl transition-shadow duration-300',
            cardDetailedText: 'mt-2 text-gray-700',
            cardSubTitle: 'text-lg font-semibold text-pink-500',
            cardText: 'text-base text-gray-600',
            cardTitle: 'text-2xl font-bold text-gray-900 mb-2',
            controls: 'my-controls',
            date: 'text-sm text-gray-500 mt-1',
            title: 'text-xl font-bold text-gray-900',
          }}
        />
      </div>
    </section>
  );
}