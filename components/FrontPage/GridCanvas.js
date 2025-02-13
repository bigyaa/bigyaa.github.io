import React, { useRef, useEffect } from 'react';

const GridCanvas = () => {
    const gridCanvasRef = useRef(null);

    useEffect(() => {
        const canvas = gridCanvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawGrid(ctx);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    const drawGrid = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.strokeStyle = 'rgba(135, 206, 250, 0.4)';
        ctx.lineWidth = 0.6;

        // Horizontal Notebook Lines
        for (let y = 30; y <= ctx.canvas.height; y += 30) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(ctx.canvas.width, y);
            ctx.stroke();
        }

        // Vertical Dotted Lines
        ctx.strokeStyle = 'rgba(135, 206, 250, 0.2)';
        ctx.setLineDash([2, 8]);
        for (let x = 50; x <= ctx.canvas.width; x += 50) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, ctx.canvas.height);
            ctx.stroke();
        }
        ctx.setLineDash([]);
    };

    return <canvas ref={gridCanvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />;
};

export default GridCanvas;