import React, { useRef, useState, useEffect } from 'react';
import Hero from './Hero.tsx';
import { motion } from 'framer-motion';

const Header = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [isEraser, setIsEraser] = useState(false);
  const [brushSize, setBrushSize] = useState(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set initial drawing styles
    ctx.strokeStyle = currentColor;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 2;

    // Draw grid
    drawGrid(ctx);
  }, []);

  const drawGrid = (ctx) => {
    ctx.beginPath();
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;

    // Vertical lines
    for (let x = 0; x <= window.innerWidth; x += 20) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, window.innerHeight);
    }

    // Horizontal lines
    for (let y = 0; y <= window.innerHeight; y += 20) {
      ctx.moveTo(0, y);
      ctx.lineTo(window.innerWidth, y);
    }

    ctx.stroke();
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);
    setLastX(x);
    setLastY(y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
  };

  const toggleEraser = () => {
    setIsEraser(!isEraser);
    const ctx = canvasRef.current.getContext('2d');
    ctx.strokeStyle = isEraser ? currentColor : '#ffffff';
  };

  // Update draw function to use brush size
  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.strokeStyle = isEraser ? '#ffffff' : currentColor;
    ctx.lineWidth = brushSize;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastX(x);
    setLastY(y);
  };

  const colorPalette = [
    '#000000', // Black
    '#FFFF00', // Yellow
    '#FF8A8A', // Light Red
    '#BC9F8B', // Light Brown
    '#A1D6B2', // Light Green
    '#A594F9', // Light Purple
    '#295F98', // Dark Blue
    '#A0E9FF', // Light Blue
    '#FFD700', // Gold
    '#FF6F61', // Coral
    '#8A2BE2', // Blue Violet
    '#00CED1', // Dark Turquoise
    '#FF69B4', // Hot Pink
    '#32CD32', // Lime Green
    '#FFA07A', // Light Salmon
    '#6A5ACD',  // Slate Blue
    '#FFC0CB', // Pink
    '#362FD9', // Dark Purple
  ];

  return (
    <header className="min-h-screen flex items-center justify-center relative bg-gradient-to-bl from-pink-50 via-lavender-50 to-lavender-100">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />

      {/* Controls Panel */}
      <motion.div
        className="absolute bottom-8 left-8 flex items-center space-x-6 z-20 bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Color Palette */}
        <div className="flex space-x-2">
          {colorPalette.map((color) => (
            <motion.button
              key={color}
              className={`w-8 h-8 rounded-full border-2 ${currentColor === color ? 'border-gray-600' : 'border-white'} shadow-lg`}
              style={{ backgroundColor: color }}
              onClick={() => setCurrentColor(color)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Brush Size Selector */}
        <div className="flex items-center space-x-2">
          {[2, 4, 6, 8].map((size) => (
            <motion.button
              key={size}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${brushSize === size ? 'bg-gray-200' : 'bg-white'} border border-gray-300`}
              onClick={() => setBrushSize(size)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className="rounded-full bg-black"
                style={{ width: size, height: size }}
              />
            </motion.button>
          ))}
        </div>

        {/* Eraser Toggle */}
        <motion.button
          className={`p-2 rounded-lg ${isEraser ? 'bg-blue-500 text-white' : 'bg-white'} border border-gray-300`}
          onClick={toggleEraser}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Eraser
        </motion.button>

        {/* Clear Canvas */}
        <motion.button
          className="p-2 rounded-lg bg-red-500 text-white"
          onClick={clearCanvas}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Clear
        </motion.button>
      </motion.div>
      <Hero />
    </header>
  );
};

export default Header;