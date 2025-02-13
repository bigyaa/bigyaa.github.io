import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import experiences from "../../data/experiences";
import { parseYearRange } from "../../utils/index.js";
const TimelineCard = React.lazy(() => import("./TimelineCard"));
const SearchFilters = React.lazy(() => import("./SearchFilters"));

/*** ANIMATION VARIANTS ***/
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

/*** MAIN TIMELINE COMPONENT ***/
const Experiences = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [yearRange, setYearRange] = useState([2015, 2030]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [sortOrder, setSortOrder] = useState("desc");

    /*** 🔍 Extract Unique Skills ***/
    const allSkills = useMemo(() => {
        const skills = new Set();
        experiences.forEach((exp) => exp.skills?.forEach((skill) => skills.add(skill)));
        return Array.from(skills).sort();
    }, []);

    /*** ✅ Toggle Skill Selection ***/
    const toggleSkill = (skill) => {
        setSelectedSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };

    /*** 🏷 Filter and Sort Experiences ***/
    const filteredData = useMemo(() => {
        return experiences
            .filter((exp) => {
                const yearMatches = parseYearRange(exp.date, yearRange[0], yearRange[1]);
                const searchLower = searchQuery.toLowerCase();

                const textMatch =
                    searchQuery === '' ||
                    exp.role.toLowerCase().includes(searchLower) ||
                    exp.company.toLowerCase().includes(searchLower) ||
                    exp.location.toLowerCase().includes(searchLower) ||
                    exp.summary?.toLowerCase().includes(searchLower) ||
                    exp.skills?.some((s) => s.toLowerCase().includes(searchLower)) ||
                    exp.bullets?.some((b) => b.toLowerCase().includes(searchLower));

                return textMatch && yearMatches &&
                    (selectedSkills.length === 0 || selectedSkills.every((skill) => exp.skills?.includes(skill)));
            })
            .sort((a, b) => {
                const aYear = parseInt(a.date.match(/\b\d{4}\b/)[0], 10);
                const bYear = parseInt(b.date.match(/\b\d{4}\b/)[0], 10);
                return sortOrder === 'asc' ? aYear - bYear : bYear - aYear;
            });
    }, [searchQuery, yearRange, selectedSkills, sortOrder]);
    return (
        <section className="relative py-16 md:py-20 text-center min-h-screen bg-gradient-to-br from-pink-50 via-lavender-100 to-white-100">
            {/* 🔷 PAGE TITLE */}
            <motion.h2
                className="text-4xl font-bold mb-6 text-lavender-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Experience
            </motion.h2>

            {/* 🔎 SEARCH & FILTERS (Clearly Separated) */}
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <SearchFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    yearRange={yearRange}
                    setYearRange={setYearRange}
                    allSkills={allSkills}
                    selectedSkills={selectedSkills}
                    toggleSkill={toggleSkill}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                    setSelectedSkills={setSelectedSkills}
                />
            </div>

            {/* 📌 MATCHING RESULTS COUNT */}
            <div className="text-gray-600 text-lg mt-3 mb-6 md:mb-8">
                {filteredData.length > 0 ? (
                    <p>{filteredData.length} matching experience{filteredData.length > 1 ? "s" : ""} found</p>
                ) : (
                    <p>No matching experiences found.</p>
                )}
            </div>

            {/* 🔥 EXPERIENCE TIMELINE CARDS */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-0 max-w-6xl mx-auto"
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
                                selectedSkills={selectedSkills}
                                toggleSkill={toggleSkill}
                            // displayType="timeline"
                            />
                        ))
                    ) : (
                        <motion.div className="w-full text-gray-500 mt-8 text-center" variants={containerVariants}>
                            No matching experiences found.
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Experiences;