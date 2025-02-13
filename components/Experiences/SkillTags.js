import { motion } from "framer-motion";
import React from "react";

const SkillTags = ({ skills, selectedSkills, toggleSkill }) => {
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
            className={`px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide transition-all ${
              isSelected
                ? "bg-pink-300 text-lavender-900 border-lavender-300 shadow-sm hover:shadow-md"
                : "bg-pink-50 text-lavender-700 border-lavender-200 hover:bg-pink-100 hover:shadow"
            }`}
          >
            {skill}
          </motion.button>
        );
      })}
    </div>
  );
};

export default SkillTags;
