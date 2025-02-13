import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
const SkillTags = React.lazy(() => import("./SkillTags"));

const TimelineCard = ({ item, displayType, selectedSkills, toggleSkill }) => {
  const [showBullets, setShowBullets] = useState(false);
  const [verticalMode, setVerticalMode] = useState(false);

  useEffect(() => {
    setVerticalMode(displayType === "timeline");
  }, [displayType]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const bulletVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`relative mb-16 flex justify-center ${
        verticalMode ? "md:w-1/2 px-4" : "w-full px-2"
      }`}
      whileHover={{ scale: 1.06, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {verticalMode && (
        <div className="absolute -left-10 md:-left-14 top-0 flex flex-col items-center">
          <div className="flex-1 border-l-2 border-dotted border-l-lavender-300 mt-0" />
        </div>
      )}

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative w-full max-w-md p-6 rounded-lg shadow-lg border border-lavender-200 bg-gradient-to-br from-white via-lavender-50 to-lavender-50 overflow-hidden transition-transform duration-300"
      >
        <motion.div
          className="absolute -top-3 -right-3 w-14 h-14 bg-pink-100/30 rounded-full blur-md"
          animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-3 -left-3 w-20 h-20 bg-pink-50/30 rounded-full blur-xl"
          animate={{ y: [0, -6, 0], x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        />

        <h3 className="relative text-2xl font-extrabold text-lavender-700 z-10 mb-1">
          {item.role}
        </h3>
        <p className="relative text-base font-medium z-10 mb-1 text-gray-700">
          {item.company} | {item.date}
        </p>
        <p className="relative mb-2 text-sm italic z-10 text-gray-500">
          {item.location}
        </p>

        <p className="relative text-sm text-gray-600 z-10 leading-relaxed">
          {item.summary}
        </p>

        <SkillTags
          skills={item.skills}
          selectedSkills={selectedSkills}
          toggleSkill={toggleSkill}
        />

        {item.bullets?.length > 0 && (
          <>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowBullets(!showBullets)}
              className="relative z-10 mt-4 px-5 py-2 bg-pink-200 rounded-full text-sm font-semibold text-lavender-800 hover:bg-pink-300 transition-all"
            >
              {showBullets ? "Show Less" : "Learn More"}
            </motion.button>
            <AnimatePresence>
              {showBullets && (
                <motion.ul
                  key="bullets"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={bulletVariants}
                  className="relative list-disc ml-5 mt-3 text-sm space-y-2 z-10 text-gray-600"
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
};

export default TimelineCard;

