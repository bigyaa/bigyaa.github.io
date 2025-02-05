import React from 'react';
import { motion } from 'framer-motion';

const Controls = ({ canvasRef, currentColor, setCurrentColor, brushSize, setBrushSize, isEraser, setIsEraser }) => {
    const colorPalette = [
        '#000000', '#FF8A8A', '#BC9F8B', '#A1D6B2', '#A594F9',
        '#295F98', '#A0E9FF', '#FFD700', '#FF6F61', '#8A2BE2',
        '#00CED1', '#FF69B4', '#32CD32', '#FFA07A', '#6A5ACD',
        '#FFC0CB', '#362FD9',
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
            <div className="flex space-x-1">
                {colorPalette.map((color) => (
                    <motion.button
                        key={color}
                        className={`w-7 h-7 rounded-full border-2 ${currentColor === color ? 'border-gray-600' : 'border-white'} shadow-md`}
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
            <div className="flex items-center space-x-2">
                {[2, 6, 10, 14].map((size) => (
                    <motion.button
                        key={size}
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${brushSize === size ? 'bg-gray-300' : 'bg-white'} border border-gray-400`}
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
                className={`p-2 rounded-md ${isEraser ? 'bg-gray-500 text-white' : 'bg-white-200'} border border-gray-300`}
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
                className="p-2 rounded-md bg-red-500 text-white border border-red-600"
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