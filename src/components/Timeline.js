import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import experiences from '../data/experiences';

/*** ANIMATION VARIANTS ***/
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

/*** UTIL: PARSE YEAR ***/
function parseYear(dateStr) {
  const parsed = parseInt(dateStr.split('-')[0], 10);
  return isNaN(parsed) ? 0 : parsed;
}

/*** SKILL TAGS ***/
function SkillTags({ skills, selectedSkills, toggleSkill }) {
  if (!skills || skills.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {skills.map((skill, idx) => {
        const isSelected = selectedSkills.includes(skill);
        return (
          <motion.button
            key={idx}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation(); 
              toggleSkill(skill);
            }}
            className={`px-3 py-1 rounded-full border text-xs font-medium transition-colors ${
              isSelected
                ? 'bg-pink-300 text-pink-900 border-pink-300 shadow-sm'
                : 'bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200 hover:border-pink-300'
            }`}
          >
            {skill}
          </motion.button>
        );
      })}
    </div>
  );
}

/*** TIMELINE CARD ***/
function TimelineCard({ item, displayType, selectedSkills, toggleSkill }) {
  const [showBullets, setShowBullets] = useState(false);
  const [verticalMode, setVerticalMode] = useState(false);

  useEffect(() => {
    setVerticalMode(displayType === 'timeline');
  }, [displayType]);

  return (
    <motion.div
      variants={itemVariants}
      className={`relative mb-12 ${verticalMode ? 'md:w-1/2 px-4' : 'w-full px-2'}`}
    >
      {/* Connector line if timeline mode */}
      {verticalMode && (
        <div className="absolute -left-10 md:-left-12 top-0 flex flex-col items-center">
          <div className="flex-1 bg-pink-200 w-1 mt-0" />
        </div>
      )}

      {/* Card container */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative p-6 rounded-xl shadow-md border border-pink-100 bg-gradient-to-br from-white via-pink-50 to-pink-50 overflow-hidden transition-transform duration-300"
      >
        {/* Floating shapes */}
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

        {/* Title & Info */}
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
        <SkillTags
          skills={item.skills}
          selectedSkills={selectedSkills}
          toggleSkill={toggleSkill}
        />

        {/* Expand bullet points */}
        {item.bullets?.length > 0 && (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowBullets(!showBullets)}
              className="relative z-10 mt-3 px-4 py-2 bg-pink-200 rounded-full text-sm font-semibold text-pink-800 hover:bg-pink-300 transition-colors"
            >
              {showBullets ? 'Show Less' : 'Learn More'}
            </motion.button>
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

/*** MAIN TIMELINE COMPONENT ***/
export default function Timeline() {
  // Layout & Sorting
  const [displayType, setDisplayType] = useState('timeline'); // 'timeline' or 'minimal'
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'

  // Searching, Year Range
  const [searchTerm, setSearchTerm] = useState('');
  const [startYear, setStartYear] = useState(2015);
  const [endYear, setEndYear] = useState(2030);

  // Skill-based filtering
  const [selectedSkills, setSelectedSkills] = useState([]);

  // 1) Gather all unique skills
  const allSkills = useMemo(() => {
    const skillSet = new Set();
    experiences.forEach((exp) => {
      exp.skills?.forEach((skill) => skillSet.add(skill));
    });
    return Array.from(skillSet).sort();
  }, []);

  // 2) Toggle skill filter
  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  // 3) Filter + sort experiences
  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase();

    let filtered = experiences.filter((e) => {
      // Date range check
      const yearInt = parseYear(e.date);
      if (yearInt < startYear || yearInt > endYear) return false;

      // Search fields
      const textMatch =
        e.role.toLowerCase().includes(term) ||
        e.company.toLowerCase().includes(term) ||
        e.location.toLowerCase().includes(term) ||
        e.summary?.toLowerCase().includes(term) ||
        e.skills?.some((s) => s.toLowerCase().includes(term)) ||
        e.bullets?.some((b) => b.toLowerCase().includes(term));

      if (!textMatch) return false;

      // Must contain all selected skills
      if (selectedSkills.length > 0) {
        const hasAll = selectedSkills.every((skill) =>
          e.skills?.includes(skill)
        );
        if (!hasAll) return false;
      }
      return true;
    });

    // Sort by date
    filtered.sort((a, b) => {
      const aYear = parseYear(a.date);
      const bYear = parseYear(b.date);
      return sortOrder === 'asc' ? aYear - bYear : bYear - aYear;
    });

    return filtered;
  }, [searchTerm, startYear, endYear, selectedSkills, sortOrder]);

  // 4) Print or Download
  const handlePrint = () => {
    window.print();
  };

  // Match count for user feedback
  const matchCount = filteredData.length;

  return (
    <section className="relative py-16 text-center text-background min-h-screen bg-pink-50 overflow-hidden">
      {/* Soft pastel overlay */}
      <div
        className="absolute inset-0 bg-pink-100 opacity-20 pointer-events-none"
        style={{ zIndex: -1 }}
      />

      {/* Floating circles */}
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

      <h2 className="text-4xl font-bold mb-6 text-pink-700">Experience</h2>

      {/* CONTROL PANEL */}
      <div className="max-w-4xl mx-auto mb-6 px-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search role, company, bullet..."
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
      </div>

      {/* SECONDARY CONTROLS: Skills, Sort, Print, Match Count */}
      <div className="max-w-4xl mx-auto mb-8 px-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
        {/* Skills Filter */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {allSkills.map((skill) => {
            const selected = selectedSkills.includes(skill);
            return (
              <motion.button
                key={skill}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-full border text-sm font-medium transition-colors ${
                  selected
                    ? 'bg-pink-300 text-pink-900 border-pink-300'
                    : 'bg-white text-pink-600 border-pink-200 hover:bg-pink-100'
                }`}
              >
                {skill}
              </motion.button>
            );
          })}
        </div>

        {/* Sort & Layout & Print */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          {/* Sort By Date */}
          <div className="flex items-center space-x-1">
            <label className="text-sm font-semibold text-gray-700">Sort:</label>
            <button
              onClick={() => setSortOrder('asc')}
              className={`px-3 py-1 rounded-l-md border text-sm font-medium ${
                sortOrder === 'asc'
                  ? 'bg-pink-400 text-white border-pink-400'
                  : 'bg-white text-pink-600 border-pink-200 hover:bg-pink-100'
              }`}
            >
              Asc
            </button>
            <button
              onClick={() => setSortOrder('desc')}
              className={`px-3 py-1 rounded-r-md border text-sm font-medium ${
                sortOrder === 'desc'
                  ? 'bg-pink-400 text-white border-pink-400'
                  : 'bg-white text-pink-600 border-pink-200 hover:bg-pink-100'
              }`}
            >
              Desc
            </button>
          </div>

          {/* Toggle Timeline/Minimal */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDisplayType('timeline')}
              className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                displayType === 'timeline'
                  ? 'bg-pink-400 text-white'
                  : 'bg-white text-pink-500 border border-pink-300 hover:bg-pink-200'
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setDisplayType('minimal')}
              className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                displayType === 'minimal'
                  ? 'bg-pink-400 text-white'
                  : 'bg-white text-pink-500 border border-pink-300 hover:bg-pink-200'
              }`}
            >
              Minimal
            </button>
          </div>

          {/* Print/Download */}
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-white text-pink-500 border border-pink-300 rounded-md hover:bg-pink-100 font-semibold transition-colors"
          >
            Print / PDF
          </button>
        </div>
      </div>

      {/* Matches Found */}
      <div className="mb-8 text-gray-600">
        {matchCount > 0 ? (
          <p>{matchCount} matching experience{matchCount > 1 ? 's' : ''} found</p>
        ) : (
          <p>No matching experiences found.</p>
        )}
      </div>

      {/* TIMELINE or MINIMAL LAYOUT */}
      <div className="max-w-5xl mx-auto px-4 relative">
        {displayType === 'timeline' && (
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-pink-200" />
        )}

        <motion.div
          className={`flex flex-col ${
            displayType === 'timeline'
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