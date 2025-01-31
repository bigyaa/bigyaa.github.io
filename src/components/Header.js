// src/components/Header.js
import React, { useEffect, useRef, useState } from 'react';
import Hero from './Hero.tsx';

function Header() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#FFD700'); // Default color: yellow

  // Color palette options
  const colors = ['#FFD700', '#FF5733', '#33FF57', '#3357FF', '#FF33A1'];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw the blue grid (only once)
    const drawGrid = () => {
      ctx.strokeStyle = '#ADD8E6'; // Light blue color for the grid
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Draw the grid only once
    drawGrid();

    // Handle drawing on the canvas
    const getCoordinates = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.touches) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      } else {
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    const startDrawing = (e) => {
      setIsDrawing(true);
      const { x, y } = getCoordinates(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      const { x, y } = getCoordinates(e);
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath(); // Start a new path for the next segment
      ctx.moveTo(x, y);
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      ctx.beginPath(); // Start a new path for the next stroke
    };

    // Event listeners for drawing
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Touch event listeners for mobile compatibility
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    // Cleanup
    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);

      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
    };
  }, [isDrawing, selectedColor]); // Re-run effect if isDrawing or selectedColor changes

  return (
    <header className="min-h-screen flex items-center justify-center relative">
      {/* Canvas for grid and drawing */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'white' }}
      />

      {/* Background Animation (Optional) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 animate-gradient-x"></div>
      </div>

      {/* Content */}
      <Hero />

      {/* Color Palette */}
      <div className="absolute bottom-8 left-8 flex space-x-4 z-10">
        {colors.map((color, index) => (
          <button
            key={index}
            className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;