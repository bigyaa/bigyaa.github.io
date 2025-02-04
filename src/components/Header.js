import React, { useRef, useState, useEffect } from 'react';
import Hero from './Hero.tsx';
import { motion } from 'framer-motion';

const Header = () => {
  const canvasRef = useRef(null);
  const gridCanvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [isEraser, setIsEraser] = useState(false);
  const [brushSize, setBrushSize] = useState(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gridCanvas = gridCanvasRef.current;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gridCanvas.width = window.innerWidth;
      gridCanvas.height = window.innerHeight;
      drawGrid(gridCanvas.getContext('2d'));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const drawGrid = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = 'rgba(135, 206, 250, 0.4)'; // Light blue grid lines
    ctx.lineWidth = 0.6;

    // Horizontal Notebook Lines
    for (let y = 30; y <= ctx.canvas.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(ctx.canvas.width, y);
      ctx.stroke();
    }

    // Vertical Dotted Lines for Graph Feel
    ctx.strokeStyle = 'rgba(135, 206, 250, 0.2)';
    for (let x = 50; x <= ctx.canvas.width; x += 50) {
      ctx.beginPath();
      ctx.setLineDash([2, 8]); // Dotted effect
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);
      ctx.stroke();
    }
    ctx.setLineDash([]); // Reset dashed line
  };

  const startDrawing = (e) => {
    const { clientX, clientY } = e;
    setIsDrawing(true);
    setLastX(clientX);
    setLastY(clientY);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';

    if (isEraser) {
      ctx.globalCompositeOperation = 'destination-out'; // Erase instead of drawing
      ctx.strokeStyle = 'rgba(0,0,0,1)';
    } else {
      ctx.globalCompositeOperation = 'source-over'; // Normal drawing
      ctx.strokeStyle = currentColor;
    }

    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    setLastX(e.clientX);
    setLastY(e.clientY);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const colorPalette = [
    '#000000', '#FF8A8A', '#BC9F8B', '#A1D6B2', '#A594F9',
    '#295F98', '#A0E9FF', '#FFD700', '#FF6F61', '#8A2BE2',
    '#00CED1', '#FF69B4', '#32CD32', '#FFA07A', '#6A5ACD',
    '#FFC0CB', '#362FD9',
  ];

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-10 via-lavender-10 to-pink-10">
      {/* Grid Canvas (Grid stays even when clearing) */}
      <canvas ref={gridCanvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />

      {/* Drawing Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />

      {/* Floating Controls */}
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
                setCurrentColor(color)
                setIsEraser(false)
              }}
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
              className={`w-7 h-7 rounded-full flex items-center justify-center ${brushSize === size ? 'bg-gray-300' : 'bg-white'} border border-gray-400`}
              onClick={() => setBrushSize(size)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="rounded-full bg-black" style={{ width: size, height: size }} />
            </motion.button>
          ))}
        </div>

        {/* Eraser Toggle */}
        <motion.button
          className={`p-2 rounded-md ${isEraser ? 'bg-gray-500 text-white' : 'bg-white-200'} border border-gray-300`}
          onClick={() => setIsEraser(!isEraser)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🧽 Eraser
        </motion.button>

        {/* Clear Canvas */}
        <motion.button
          className="p-2 rounded-md bg-red-500 text-white border border-red-600"
          onClick={clearCanvas}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🗑️ Clear
        </motion.button>
      </motion.div>

      {/* Hero Section */}
      <Hero />
    </header>
  );
};

export default Header;