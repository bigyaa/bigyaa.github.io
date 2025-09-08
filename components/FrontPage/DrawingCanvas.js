import React, { useState, useEffect, useRef } from 'react';

const DrawingCanvas = ({ canvasRef, currentColor, brushSize, isEraser }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);
  const scrollRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, [canvasRef]);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lastXRef.current = x;
    lastYRef.current = y;
    scrollRef.current = { x: window.scrollX, y: window.scrollY };
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';

    if (isEraser) {
      ctx.globalCompositeOperation = 'destination-out';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
    }

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const currentScrollX = window.scrollX;
    const currentScrollY = window.scrollY;
    const scrollDX = currentScrollX - scrollRef.current.x;
    const scrollDY = currentScrollY - scrollRef.current.y;
    lastXRef.current -= scrollDX;
    lastYRef.current -= scrollDY;
    scrollRef.current = { x: currentScrollX, y: currentScrollY };

    ctx.moveTo(lastXRef.current, lastYRef.current);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastXRef.current = x;
    lastYRef.current = y;
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-10"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
  );
};

export default DrawingCanvas;