import { DrawingEvent } from '../types';

/**
 * Get the position of a mouse or touch event relative to the canvas
 * @param e - Mouse or touch event
 * @param canvas - Canvas element
 * @returns Object with x and y coordinates
 */
export const getEventPosition = (e: DrawingEvent, canvas: HTMLCanvasElement) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  
  let clientX: number, clientY: number;
  
  if ('touches' in e && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  
  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY,
  };
};

/**
 * Resize canvas to match its display size while preserving content
 * @param canvas - Canvas element to resize
 */
export const resizeCanvas = (canvas: HTMLCanvasElement): void => {
  const rect = canvas.getBoundingClientRect();
  const newWidth = rect.width;
  const newHeight = rect.height;
  
  // Only resize if dimensions actually changed
  if (canvas.width !== newWidth || canvas.height !== newHeight) {
    // Save current content
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    // Resize canvas
    canvas.width = newWidth;
    canvas.height = newHeight;
    
    // Restore content if there was any
    if (imageData.width > 0 && imageData.height > 0) {
      ctx.putImageData(imageData, 0, 0);
    }
  }
};

/**
 * Clear the entire canvas
 * @param canvas - Canvas element to clear
 */
export const clearCanvas = (canvas: HTMLCanvasElement): void => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

/**
 * Draw a line on the canvas
 * @param ctx - Canvas 2D context
 * @param fromX - Starting x coordinate
 * @param fromY - Starting y coordinate
 * @param toX - Ending x coordinate
 * @param toY - Ending y coordinate
 * @param color - Stroke color
 * @param brushSize - Line width
 * @param isEraser - Whether to use eraser mode
 */
export const drawLine = (
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  brushSize: number,
  isEraser: boolean
): void => {
  ctx.beginPath();
  ctx.lineWidth = brushSize;
  ctx.lineCap = 'round';

  if (isEraser) {
    ctx.globalCompositeOperation = 'destination-out';
  } else {
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = color;
  }

  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
};
