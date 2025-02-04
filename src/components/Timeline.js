import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import experiences from '../data/experiences';
import TimelineCard from './TimelineCard.tsx';
import { parseYear } from '../utils/index.js';

/*** ANIMATION VARIANTS ***/
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/*** MAIN TIMELINE COMPONENT ***/
const Timeline = () => {
  const [displayType, setDisplayType] = useState('timeline');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [startYear, setStartYear] = useState(2015);
  const [endYear, setEndYear] = useState(2030);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const allSkills = useMemo(() => {
    const skillSet = new Set();
    experiences.forEach((exp) => {
      exp.skills?.forEach((skill) => skillSet.add(skill));
    });
    return Array.from(skillSet).sort();
  }, []);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase();

    let filtered = experiences.filter((e) => {
      const yearInt = parseYear(e.date);
      if (yearInt < startYear || yearInt > endYear) return false;

      const textMatch =
        e.role.toLowerCase().includes(term) ||
        e.company.toLowerCase().includes(term) ||
        e.location.toLowerCase().includes(term) ||
        e.summary?.toLowerCase().includes(term) ||
        e.skills?.some((s) => s.toLowerCase().includes(term)) ||
        e.bullets?.some((b) => b.toLowerCase().includes(term));

      if (!textMatch) return false;

      if (selectedSkills.length > 0) {
        const hasAll = selectedSkills.every((skill) =>
          e.skills?.includes(skill)
        );
        if (!hasAll) return false;
      }
      return true;
    });

    filtered.sort((a, b) => {
      const aYear = parseYear(a.date);
      const bYear = parseYear(b.date);
      return sortOrder === 'asc' ? aYear - bYear : bYear - aYear;
    });

    return filtered;
  }, [searchTerm, startYear, endYear, selectedSkills, sortOrder]);

  const handlePrint = () => {
    window.print();
  };

  const matchCount = filteredData.length;

  return (
    <section className="relative py-16 text-center text-background min-h-screen bg-gradient-to-bl from-pink-50 via-lavender-50 to-lavender-100 overflow-hidden">
      <motion.div
        className="absolute top-[-5rem] left-[-3rem] w-60 h-60 bg-lavender-200 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-5rem] right-[-3rem] w-60 h-60 bg-lavender-200 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />

      <h2 className="text-4xl font-bold mb-6 text-lavender-700">Experience</h2>

      <div className="max-w-4xl mx-auto mb-6 px-4 flex flex-row sm:flex-row items-center gap-4 justify-between">
        <input
          type="text"
          placeholder="Search role, company, bullet..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-col flex-grow px-4 py-2 rounded-md border border-lavender-200 focus:outline-none focus:ring-2 focus:ring-lavender-300 bg-white text-sm"
        />

        <div className="flex items-center space-x-2">
          <label className="text-sm font-semibold text-gray-700">Year:</label>
          <input
            type="number"
            className="flex-col flex-grow  px-2 py-1 rounded-md border border-lavender-200 bg-white text-sm"
            value={startYear}
            onChange={(e) => setStartYear(Number(e.target.value) || 0)}
          />
          <span className="text-gray-600">–</span>
          <input
            type="number"
            className="flex-col flex-grow  px-2 py-1 rounded-md border border-lavender-200 bg-white text-sm"
            value={endYear}
            onChange={(e) => setEndYear(Number(e.target.value) || 9999)}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-8 px-4 flex sm:flex-row items-center gap-4 justify-between">
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {allSkills.map((skill) => {
            const selected = selectedSkills.includes(skill);
            return (
              <motion.button
                key={skill}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-full border text-sm font-medium uppercase transition-colors ${selected
                  ? 'bg-pink-200 text-white border-lavender-300'
                  : 'bg-white text-lavender-700 border-lavender-200 hover:bg-pink-100'
                  }`}
              >
                {skill}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-8 px-4 flex sm:flex-row gap-4 justify-end">

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center space-x-1">
            <label className="text-sm font-semibold text-gray-700">Sort:</label>
            <button
              onClick={() => setSortOrder('asc')}
              className={`px-3 py-1 rounded-l-md border text-sm font-medium ${sortOrder === 'asc'
                ? 'bg-pink-200 text-white border-lavender-400'
                : 'bg-white text-lavender-600 border-lavender-200 hover:bg-pink-50'
                }`}
            >
              Asc
            </button>
            <button
              onClick={() => setSortOrder('desc')}
              className={`px-3 py-1 rounded-r-md border text-sm font-medium ${sortOrder === 'desc'
                ? 'bg-pink-200 text-white border-lavender-400'
                : 'bg-white text-lavender-600 border-lavender-200 hover:bg-pink-50'
                }`}
            >
              Desc
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDisplayType('timeline')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors  text-sm ${displayType === 'timeline'
                ? 'bg-pink-200 text-white'
                : 'bg-white text-lavender-600 border border-lavender-300 hover:bg-pink-100'
                }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setDisplayType('minimal')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors  text-sm ${displayType === 'minimal'
                ? 'bg-pink-200 text-white'
                : 'bg-white text-lavender-600 border border-lavender-300 hover:bg-pink-100'
                }`}
            >
              Minimal
            </button>
          </div>

          <button
            onClick={() => handlePrint()}
            className="px-3 py-1 bg-white text-lavender-600 border border-lavender-300 rounded-md hover:bg-pink-100 font-semibold transition-colors text-sm"
          >
            Print / Download
          </button>
        </div>
      </div>

      <div className="mb-10 text-gray-600">
        {matchCount > 0 ? (
          <p>
            {matchCount} matching experience
            {matchCount > 1 ? 's' : ''} found
          </p>
        ) : (
          <p>No matching experiences found.</p>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-2 relative">
        {displayType === 'timeline' && (
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 border-dotted border-lavender-300 border-l-2" />
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
                  selectedSkills={selectedSkills}
                  toggleSkill={toggleSkill}
                />
              ))
            ) : (
              <motion.div
                className="w-full text-gray-500 mt-8 text-center"
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
};

export default Timeline;
