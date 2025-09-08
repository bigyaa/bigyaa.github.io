import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DRAWING_CONFIG } from '../../constants';
import { getEventPosition, resizeCanvas, drawLine } from '../../utils/canvas';

const DrawingCanvas = ({ canvasRef, currentColor, brushSize, isEraser }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  // Memoized resize handler to prevent unnecessary re-renders
  const handleResize = useCallback(() => {
    if (canvasRef.current) {
      resizeCanvas(canvasRef.current);
    }
  }, [canvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initial resize
    handleResize();

    // Resize on window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [canvasRef, handleResize]);

  // Memoized event handlers to prevent unnecessary re-renders
  const startDrawing = useCallback((e) => {
    e.preventDefault();
    if (!canvasRef.current) return;
    
    setIsDrawing(true);
    const pos = getEventPosition(e, canvasRef.current);
    lastXRef.current = pos.x;
    lastYRef.current = pos.y;
  }, [canvasRef]);

  const stopDrawing = useCallback(() => {
    setIsDrawing(false);
  }, []);

  const draw = useCallback((e) => {
    if (!isDrawing || !canvasRef.current) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pos = getEventPosition(e, canvas);
    
    drawLine(
      ctx,
      lastXRef.current,
      lastYRef.current,
      pos.x,
      pos.y,
      currentColor,
      brushSize,
      isEraser
    );

    lastXRef.current = pos.x;
    lastYRef.current = pos.y;
  }, [isDrawing, canvasRef, currentColor, brushSize, isEraser]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ 
        zIndex: DRAWING_CONFIG.CANVAS_Z_INDEX,
        touchAction: 'none' 
      }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
      role="img"
      aria-label="Interactive drawing canvas"
    />
  );
};

export default DrawingCanvas;