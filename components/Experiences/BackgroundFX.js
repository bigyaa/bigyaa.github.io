import React from 'react';
import { motion } from 'framer-motion';

const BackgroundFX = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 🌟 Soft pastel animated blobs */}
        <motion.div
            className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-200 rounded-full opacity-40 blur-[50px]"
            animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
        <motion.div
            className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-pink-200 rounded-full opacity-40 blur-[50px]"
            animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        />
        <motion.div
            className="absolute top-[30%] left-[10%] w-64 h-64 bg-purple-300 rounded-full opacity-30 blur-[50px]"
            animate={{ x: [0, -10, 0], y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        <motion.div
            className="absolute bottom-[25%] right-[15%] w-60 h-60 bg-lavender-300 rounded-full opacity-30 blur-[50px]"
            animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut' }}
        />
    </div>
);

export default BackgroundFX;