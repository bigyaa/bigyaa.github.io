import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import experiences from '../data/experiences'; // updated data with summary & skills

// Parent container variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Each card’s fade/slide-in
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Collapsible bullets
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

// Helper to parse numeric year from e.g. "2019-06"
function parseYear(dateStr) {
  const parsed = parseInt(dateStr.split('-')[0], 10);
  return isNaN(parsed) ? 0 : parsed;
}

// Skills tags as small pastel pills
function SkillTags({ skills }) {
  if (!skills || skills.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="bg-pink-100 text-pink-700 text-xs font-medium px-2 py-1 rounded-full border border-pink-200"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

// Timeline Card
function TimelineCard({ item, displayType }) {
  const [showBullets, setShowBullets] = useState(false);
  const verticalMode = displayType === 'timeline'; // 'timeline' vs. 'minimal'

  return (
    <motion.div
      variants={itemVariants}
      className={`relative mb-12 ${verticalMode ? 'md:w-1/2 px-4' : 'w-full px-2'}`}
    >
      {/* Bullet + connector line if in timeline mode */}
      {verticalMode && (
        <div className="absolute -left-10 md:-left-12 top-0 flex flex-col items-center">
          <div className="flex-1 bg-pink-200 w-1 mt-0" />
        </div>
      )}

      {/* The card container */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative p-6 rounded-xl shadow-md border border-pink-100 bg-gradient-to-br from-white via-pink-50 to-pink-50 overflow-hidden transition-transform duration-300"
      >
        {/* Subtle floating shapes */}
        <motion.div
          className="absolute -top-4 -right-4 w-16 h-16 bg-pink-100/20 rounded-full blur-md"
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-50/20 rounded-full blur-xl"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        />

        {/* Title & Basic Info */}
        <h3 className="relative text-xl font-bold text-pink-600 z-10 mb-1">
          {item.role}
        </h3>
        <p className="relative text-md font-semibold z-10 mb-1 text-gray-700">
          {item.company} | {item.date}
        </p>
        <p className="relative mb-2 text-sm italic z-10 text-gray-500">
          {item.location}
        </p>

        {/* Summary */}
        <p className="relative text-sm text-gray-600 z-10">{item.summary}</p>

        {/* Skills row */}
        <SkillTags skills={item.skills} />

        {/* Collapsible bullet points */}
        {item.bullets?.length > 0 && (
          <>
            <button
              onClick={() => setShowBullets(!showBullets)}
              className="relative z-10 mt-3 px-4 py-2 bg-pink-200 rounded-full text-sm font-semibold text-pink-800 hover:bg-pink-300 transition-colors"
            >
              {showBullets ? 'Show Less' : 'Learn More'}
            </button>
            <AnimatePresence>
              {showBullets && (
                <motion.ul
                  key="bullets"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={bulletVariants}
                  className="relative list-disc ml-5 mt-4 text-sm space-y-2 z-10 text-gray-600"
                >
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

// Main Timeline
export default function Timeline() {
  const [displayType, setDisplayType] = useState('timeline');
  const [searchTerm, setSearchTerm] = useState('');
  const [startYear, setStartYear] = useState(2015);
  const [endYear, setEndYear] = useState(2030);

  // Filter experiences
  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return experiences.filter((e) => {
      const yearInt = parseYear(e.date);
      if (yearInt < startYear || yearInt > endYear) return false;

      // search role, company, location, summary
      if (
        e.role.toLowerCase().includes(term) ||
        e.company.toLowerCase().includes(term) ||
        e.location.toLowerCase().includes(term) ||
        e.summary?.toLowerCase().includes(term)
      ) {
        return true;
      }
      // search bullets
      return e.bullets?.some((b) => b.toLowerCase().includes(term));
    });
  }, [searchTerm, startYear, endYear]);

  return (
    <section className="relative py-16 text-center text-background min-h-screen bg-pink-50 overflow-hidden">
      {/* Soft pastel overlay */}
      <div
        className="absolute inset-0 bg-pink-100 opacity-20 pointer-events-none"
        style={{ zIndex: -1 }}
      />

      {/* Floating circles (lightened) */}
      <motion.div
        className="absolute top-[-5rem] left-[-5rem] w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-5rem] right-[-5rem] w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />

      <h2 className="text-4xl font-bold mb-10 text-pink-700">Experience</h2>

      {/* Control panel: search, year range, toggle */}
      <div className="max-w-4xl mx-auto mb-10 px-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by role, bullet, etc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white"
        />

        {/* Year Range */}
        <div className="flex items-center space-x-2">
          <label className="text-sm font-semibold text-gray-700">Year:</label>
          <input
            type="number"
            className="w-16 px-2 py-1 rounded-md border border-pink-200 bg-white"
            value={startYear}
            onChange={(e) => setStartYear(Number(e.target.value) || 0)}
          />
          <span className="text-gray-600">–</span>
          <input
            type="number"
            className="w-16 px-2 py-1 rounded-md border border-pink-200 bg-white"
            value={endYear}
            onChange={(e) => setEndYear(Number(e.target.value) || 9999)}
          />
        </div>

        {/* Toggle layout */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDisplayType('timeline')}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${displayType === 'timeline'
                ? 'bg-pink-400 text-white'
                : 'bg-white text-pink-500 border border-pink-300 hover:bg-pink-200'
              }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setDisplayType('minimal')}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${displayType === 'minimal'
                ? 'bg-pink-400 text-white'
                : 'bg-white text-pink-500 border border-pink-300 hover:bg-pink-200'
              }`}
          >
            Minimal
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        {displayType === 'timeline' && (
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-pink-200" />
        )}

        <motion.div
          className={`flex flex-col ${displayType === 'timeline'
              ? 'md:flex-row md:flex-wrap'
              : 'md:flex-col'
            }`}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {filteredData.length > 0 ? (
              filteredData.map((exp) => (
                <TimelineCard
                  key={exp.id}
                  item={exp}
                  displayType={displayType}
                />
              ))
            ) : (
              <motion.div
                className="w-full text-gray-500 mt-8"
                variants={itemVariants}
              >
                No matching experiences found.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}