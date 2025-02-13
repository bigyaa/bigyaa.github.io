import React from 'react';
import { motion } from 'framer-motion';

const Controls = ({ canvasRef, currentColor, setCurrentColor, brushSize, setBrushSize, isEraser, setIsEraser }) => {
    const colorPalette = [
        { color: '#000000', label: 'Black' },
        { color: '#FF8A8A', label: 'Light Red' },
        { color: '#BC9F8B', label: 'Light Brown' },
        { color: '#A1D6B2', label: 'Light Green' },
        { color: '#A594F9', label: 'Light Purple' },
        { color: '#295F98', label: 'Dark Blue' },
        { color: '#A0E9FF', label: 'Light Blue' },
        { color: '#FFD700', label: 'Gold' },
        { color: '#FF6F61', label: 'Coral' },
        { color: '#8A2BE2', label: 'Blue Violet' },
        { color: '#00CED1', label: 'Dark Turquoise' },
        { color: '#FF69B4', label: 'Hot Pink' },
        { color: '#32CD32', label: 'Lime Green' },
        { color: '#FFA07A', label: 'Light Salmon' },
        { color: '#6A5ACD', label: 'Slate Blue' },
        { color: '#FFC0CB', label: 'Pink' },
        { color: '#362FD9', label: 'Dark Purple' },
    ];

    const clearCanvas = () => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    return (
        <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Color Palette */}
            <div className="flex space-x-1" role="group" aria-label="Color Palette">
                {colorPalette.map(({ color, label }) => (
                    <motion.button
                        key={color}
                        aria-label={`Select ${label} color`}
                        role="button"
                        tabIndex={0}
                        className={`w-7 h-7 rounded-full border-2 ${currentColor === color ? 'border-gray-600' : 'border-white'
                            } shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        style={{ backgroundColor: color }}
                        onClick={() => {
                            setCurrentColor(color);
                            setIsEraser(false);
                        }}
                        whileHover={{ scale: 1.4 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>

            {/* Brush Size Selector */}
            <div className="flex items-center space-x-2" role="group" aria-label="Brush Size Selector">
                {[2, 6, 10, 14].map((size) => (
                    <motion.button
                        key={size}
                        aria-label={`Select brush size ${size}`}
                        role="button"
                        tabIndex={0}
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${brushSize === size ? 'bg-gray-300' : 'bg-white'
                            } border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        onClick={() => setBrushSize(size)}
                        whileHover={{ scale: 1.4 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="rounded-full bg-black" style={{ width: size, height: size }} />
                    </motion.button>
                ))}
            </div>

            {/* Eraser Toggle */}
            <motion.button
                aria-label="Toggle Eraser"
                role="button"
                tabIndex={0}
                className={`p-2 rounded-md ${isEraser ? 'bg-gray-500 text-white' : 'bg-white'
                    } border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                onClick={() => {
                    setIsEraser(!isEraser);
                    setCurrentColor('#ffffff');
                }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
            >
                🧽
            </motion.button>

            {/* Clear Canvas */}
            <motion.button
                aria-label="Clear Canvas"
                role="button"
                tabIndex={0}
                className="p-2 rounded-md bg-red-500 text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={clearCanvas}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
            >
                🗑️
            </motion.button>
        </motion.div>
    );
};

export default Controls;