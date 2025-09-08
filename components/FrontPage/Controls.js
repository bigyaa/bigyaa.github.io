import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { COLOR_PALETTE, DRAWING_CONFIG, ARIA_LABELS, ANIMATION_DURATION } from '../../constants';
import { clearCanvas } from '../../utils/canvas';

const Controls = ({ canvasRef, currentColor, setCurrentColor, brushSize, setBrushSize, isEraser, setIsEraser }) => {

    // Memoized clear canvas handler
    const handleClearCanvas = useCallback(() => {
        if (canvasRef.current) {
            clearCanvas(canvasRef.current);
        }
    }, [canvasRef]);

    // Memoized color selection handler
    const handleColorSelect = useCallback((color) => {
        setCurrentColor(color);
        setIsEraser(false);
    }, [setCurrentColor, setIsEraser]);

    // Memoized eraser toggle handler
    const handleEraserToggle = useCallback(() => {
        setIsEraser(!isEraser);
        setCurrentColor('#ffffff');
    }, [isEraser, setIsEraser, setCurrentColor]);

    return (
        <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-200"
            style={{ zIndex: DRAWING_CONFIG.CONTROLS_Z_INDEX }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIMATION_DURATION.NORMAL }}
        >
            {/* Color Palette */}
            <div className="flex space-x-1" role="group" aria-label={ARIA_LABELS.COLOR_PALETTE}>
                {COLOR_PALETTE.map(({ color, label }) => (
                    <motion.button
                        key={color}
                        aria-label={`Select ${label} color`}
                        role="button"
                        tabIndex={0}
                        className={`w-7 h-7 rounded-full border-2 ${
                            currentColor === color ? 'border-gray-600' : 'border-white'
                        } shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorSelect(color)}
                        whileHover={{ scale: 1.4 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>

            {/* Brush Size Selector */}
            <div className="flex items-center space-x-2" role="group" aria-label={ARIA_LABELS.BRUSH_SIZE_SELECTOR}>
                {DRAWING_CONFIG.BRUSH_SIZES.map((size) => (
                    <motion.button
                        key={size}
                        aria-label={`Select brush size ${size}`}
                        role="button"
                        tabIndex={0}
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${
                            brushSize === size ? 'bg-gray-300' : 'bg-white'
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
                aria-label={ARIA_LABELS.TOGGLE_ERASER}
                role="button"
                tabIndex={0}
                className={`p-2 rounded-md ${
                    isEraser ? 'bg-gray-500 text-white' : 'bg-white'
                } border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                onClick={handleEraserToggle}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
            >
                🧽
            </motion.button>

            {/* Clear Canvas */}
            <motion.button
                aria-label={ARIA_LABELS.CLEAR_CANVAS}
                role="button"
                tabIndex={0}
                className="p-2 rounded-md bg-red-500 text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={handleClearCanvas}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
            >
                🗑️
            </motion.button>
        </motion.div>
    );
};

export default Controls;