import React from 'react';
import { motion } from 'framer-motion';

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
    setSelectedSkills
}) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-6xl mx-auto mb-8"            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* 🔍 Search Bar & Year Filters */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <input
                    type="text"
                    placeholder="Search by role, company, skill..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 
                    focus:ring-2 focus:ring-pink-400 focus:outline-none bg-white shadow-sm"
                />

                {/* 📅 Year Range Input */}
                <div className="flex items-center gap-2">
                    <label className="text-sm font-semibold text-gray-700">Year:</label>
                    <input
                        type="number"
                        className="w-20 px-2 py-1 rounded-lg border border-gray-300 text-center 
                        text-gray-700 bg-white shadow-sm"
                        value={yearRange[0]}
                        onChange={(e) => {
                            const newValue = parseInt(e.target.value) || 2015;
                            setYearRange([newValue, yearRange[1]]);
                        }}
                    />
                    <span className="text-gray-600">–</span>
                    <input
                        type="number"
                        className="w-20 px-2 py-1 rounded-lg border border-gray-300 text-center 
                        text-gray-700 bg-white shadow-sm"
                        value={yearRange[1]}
                        onChange={(e) => {
                            const newValue = parseInt(e.target.value) || 2030;
                            setYearRange([yearRange[0], newValue]);
                        }}
                    />
                </div>
            </div>

            {/* 🎯 Skill Filters */}
            <div className="mt-4">
                <h3 className="text-md font-semibold text-gray-700 mb-2">Filter by Skills:</h3>
                <div className="flex flex-wrap gap-2">
                    {allSkills.map((skill) => {
                        const isSelected = selectedSkills.includes(skill);
                        return (
                            <motion.button
                                key={skill}
                                whileTap={{ scale: 0.95 }}
                                className={`px-3 py-1 rounded-full border text-xs font-semibold uppercase 
                                transition-all shadow-md ${isSelected
                                        ? "bg-pink-300 text-lavender-900 border-lavender-300 shadow-sm hover:shadow-md"
                                        : "bg-white text-lavender-700 border-lavender-200 hover:bg-pink-100 hover:shadow"
                                    }`}
                                onClick={() => toggleSkill(skill)}
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
                <div className="flex items-center space-x-2">
                    <label className="text-sm font-semibold text-gray-700">Sort:</label>
                    <button
                        onClick={() => setSortOrder('asc')}
                        className={`px-3 py-1 rounded-l-lg border text-sm font-medium 
                        transition-all ${sortOrder === 'asc'
                                ? "bg-pink-300 text-lavender-900 border-lavender-300 shadow-sm hover:shadow-md"
                                : "bg-white text-lavender-700 border-lavender-200 hover:bg-pink-100 hover:shadow"
                            }`}
                    >
                        Asc
                    </button>
                    <button
                        onClick={() => setSortOrder('desc')}
                        className={`px-3 py-1 rounded-r-lg border text-sm font-medium 
                        transition-all ${sortOrder === 'desc'
                                ? "bg-pink-300 text-lavender-900 border-lavender-300 shadow-sm hover:shadow-md"
                                : "bg-white text-lavender-700 border-lavender-200 hover:bg-pink-100 hover:shadow"
                            }`}
                    >
                        Desc
                    </button>
                </div>

                {/* 🔄 Reset Filters Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold border border-gray-300 
                    hover:bg-gray-300 transition-all shadow-sm"
                    onClick={() => {
                        setSearchQuery('');
                        setYearRange([2015, 2030]);
                        setSelectedSkills([]);
                    }}
                >
                    Reset Filters
                </motion.button>
            </div>
        </motion.div>
    );
};

export default SearchFilters;