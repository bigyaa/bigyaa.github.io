import React, { useState, useRef } from 'react';
const Hero = React.lazy(() => import("./Hero"));
const DrawingCanvas = React.lazy(() => import("./DrawingCanvas"));
const GridCanvas = React.lazy(() => import("./GridCanvas"));
const Controls = React.lazy(() => import("./Controls"));

const FrontPage = ({ resume }) => {
  const canvasRef = useRef(null);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(4);
  const [isEraser, setIsEraser] = useState(false);

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-10 via-lavender-10 to-pink-10">
      {/* Grid Layer (Always Visible) */}
      <GridCanvas />

      {/* Drawing Layer */}
      <DrawingCanvas
        canvasRef={canvasRef}
        currentColor={currentColor}
        brushSize={brushSize}
        isEraser={isEraser}
      />

      {/* Controls (Color, Brush Size, Eraser, Clear) */}
      <Controls
        canvasRef={canvasRef}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        isEraser={isEraser}
        setIsEraser={setIsEraser}
      />

      {/* Hero Section */}
      <Hero resume={resume} />
    </header>
  );
};

export default FrontPage;