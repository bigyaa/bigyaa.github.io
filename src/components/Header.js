import React, { useRef, useState, useEffect } from 'react';
import Hero from './Hero.tsx';

const Header = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

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

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 2;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastX(x);
    setLastY(y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <header className="min-h-screen flex items-center justify-center relative">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <div className="absolute bottom-8 left-8 flex space-x-4 z-20">
        {['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00'].map((color) => (
          <button
            key={color}
            className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
            style={{ backgroundColor: color }}
            onClick={() => setCurrentColor(color)}
          />
        ))}
      </div>
      <Hero />
    </header>
  );
};

export default Header;