import React from "react";
import { motion } from "framer-motion";

const SearchFilters = ({
    searchQuery,
    setSearchQuery,
    yearRange,
    setYearRange,
    allSkills,
    selectedSkills,
    toggleSkill,
    sortOrder,
    setSortOrder,
    setSelectedSkills,
}) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-6xl mx-auto mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* 🔍 Search Bar & Year Filters */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <label className="sr-only" htmlFor="search">
                    Search by role, company, or skill
                </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search by role, company, skill..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 
                    focus:ring-2 focus:ring-pink-400 focus:outline-none bg-white shadow-sm"
                    aria-label="Search experiences by role, company, or skill"
                />

                {/* 📅 Year Range Input */}
                <div className="flex items-center gap-2">
                    <label htmlFor="year-start" className="text-sm font-semibold text-gray-700">
                        Year:
                    </label>
                    <input
                        id="year-start"
                        type="number"
                        className="w-20 px-2 py-1 rounded-lg border border-gray-300 text-center 
                        text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none"
                        value={yearRange[0]}
                        onChange={(e) => {
                            const newValue = parseInt(e.target.value) || 2015;
                            setYearRange([newValue, yearRange[1]]);
                        }}
                        aria-label="Start year filter"
                    />
                    <span className="text-gray-600">–</span>
                    <input
                        id="year-end"
                        type="number"
                        className="w-20 px-2 py-1 rounded-lg border border-gray-300 text-center 
                        text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none"
                        value={yearRange[1]}
                        onChange={(e) => {
                            const newValue = parseInt(e.target.value) || 2030;
                            setYearRange([yearRange[0], newValue]);
                        }}
                        aria-label="End year filter"
                    />
                </div>
            </div>

            {/* 🎯 Skill Filters */}
            <div className="mt-4">
                <h3 className="text-md font-semibold text-gray-700 mb-2">
                    Filter by Skills:
                </h3>
                <div
                    className="flex flex-wrap gap-2"
                    aria-label="Skill filter options"
                    role="group"
                    aria-live="polite"
                >
                    {allSkills.map((skill) => {
                        const isSelected = selectedSkills.includes(skill);
                        return (
                            <motion.button
                                key={skill}
                                whileTap={{ scale: 0.95 }}
                                className={`px-3 py-1 rounded-full border text-xs font-semibold uppercase 
                                transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 ${isSelected
                                        ? "bg-pink-300 text-lavender-900 border-lavender-300 shadow-sm hover:shadow-md"
                                        : "bg-white text-lavender-700 border-lavender-200 hover:bg-pink-100 hover:shadow"
                                    }`}
                                onClick={() => toggleSkill(skill)}
                                aria-pressed={isSelected}
                                role="button"
                                aria-label={`Filter by ${skill}`}
                            >
                                {skill}
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* 🔄 Sorting & Reset Options */}
            <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* ⏳ Sort Order */}
                <div className="flex items-center space-x-2" role="group" aria-label="Sort options">
                    <label htmlFor="sort-order" className="text-sm font-semibold text-gray-700">
                        Sort:
                    </label>
                    <button
                        id="sort-order"
                        onClick={() => setSortOrder("asc")}
                        className={`px-3 py-1 rounded-l-lg border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-pink-400 ${sortOrder === "asc"
                                ? "bg-pink-300 text-lavender-900 border-lavender-300 shadow-sm hover:shadow-md"
                                : "bg-white text-lavender-700 border-lavender-200 hover:bg-pink-100 hover:shadow"
                            }`}
                        aria-pressed={sortOrder === "asc"}
                        aria-label="Sort by ascending date"
                    >
                        Asc
                    </button>
                    <button
                        onClick={() => setSortOrder("desc")}
                        className={`px-3 py-1 rounded-r-lg border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-pink-400 ${sortOrder === "desc"
                                ? "bg-pink-300 text-lavender-900 border-lavender-300 shadow-sm hover:shadow-md"
                                : "bg-white text-lavender-700 border-lavender-200 hover:bg-pink-100 hover:shadow"
                            }`}
                        aria-pressed={sortOrder === "desc"}
                        aria-label="Sort by descending date"
                    >
                        Desc
                    </button>
                </div>

                {/* 🔄 Reset Filters Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold border border-gray-300 
                    hover:bg-gray-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                    onClick={() => {
                        setSearchQuery("");
                        setYearRange([2015, 2030]);
                        setSelectedSkills([]);
                    }}
                    aria-label="Reset all filters"
                >
                    Reset Filters
                </motion.button>
            </div>
        </motion.div>
    );
};

export default SearchFilters;