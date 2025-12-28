import React, { useRef, useEffect, useState } from 'react';
import { renderImageToCanvas } from '../utils/canvasHelpers';

const CanvasEditor = ({ image, settings, onCropChange }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
const cropStartRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragHandle, setDragHandle] = useState(null);
  const [cropBox, setCropBox] = useState({ x: 10, y: 10, width: 80, height: 80 });
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (image && canvasRef.current) {
      renderImageToCanvas(canvasRef.current, image, settings);
      // Update canvas size for overlay positioning
      const rect = canvasRef.current.getBoundingClientRect();
      setCanvasSize({ width: rect.width, height: rect.height });
    }
  }, [image, settings]);

  useEffect(() => {
    setCropBox({
      x: settings.crop.x,
      y: settings.crop.y,
      width: settings.crop.width,
      height: settings.crop.height
    });
  }, [settings.crop]);

  // const handleMouseDown = (e, handle) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setIsDragging(true);
  //   setDragHandle(handle);
  // };
  const handleMouseDown = (e, handle) => {
  e.preventDefault();
  e.stopPropagation();

  const rect = canvasRef.current.getBoundingClientRect();

  dragStartRef.current = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  };

  cropStartRef.current = { ...cropBox };

  setIsDragging(true);
  setDragHandle(handle);
};

const handleMouseMove = (e) => {
  if (!isDragging || !canvasRef.current) return;

  const rect = canvasRef.current.getBoundingClientRect();

  const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
  const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

  const dx = mouseX - dragStartRef.current.x;
  const dy = mouseY - dragStartRef.current.y;

  let newCrop = { ...cropStartRef.current };

  if (dragHandle === 'move') {
    newCrop.x = Math.min(
      100 - newCrop.width,
      Math.max(0, cropStartRef.current.x + dx)
    );
    newCrop.y = Math.min(
      100 - newCrop.height,
      Math.max(0, cropStartRef.current.y + dy)
    );
  }

  if (dragHandle === 'nw') {
    newCrop.x = Math.max(0, cropStartRef.current.x + dx);
    newCrop.y = Math.max(0, cropStartRef.current.y + dy);
    newCrop.width = cropStartRef.current.width - dx;
    newCrop.height = cropStartRef.current.height - dy;
  }

  if (dragHandle === 'ne') {
    newCrop.y = Math.max(0, cropStartRef.current.y + dy);
    newCrop.width = cropStartRef.current.width + dx;
    newCrop.height = cropStartRef.current.height - dy;
  }

  if (dragHandle === 'sw') {
    newCrop.x = Math.max(0, cropStartRef.current.x + dx);
    newCrop.width = cropStartRef.current.width - dx;
    newCrop.height = cropStartRef.current.height + dy;
  }

  if (dragHandle === 'se') {
    newCrop.width = cropStartRef.current.width + dx;
    newCrop.height = cropStartRef.current.height + dy;
  }

  // ✅ Minimum size + bounds
  if (
    newCrop.width >= 10 &&
    newCrop.height >= 10 &&
    newCrop.x + newCrop.width <= 100 &&
    newCrop.y + newCrop.height <= 100
  ) {
    setCropBox(newCrop);
    onCropChange(newCrop);
  }
};


  const handleMouseUp = () => {
    setIsDragging(false);
    setDragHandle(null);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div ref={containerRef} className="relative inline-block">
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-full rounded-lg shadow-2xl block relative"
          style={{ position: 'relative', zIndex: 1 }}
        />
        
        {/* Crop Overlay - positioned absolutely over canvas */}
        <div
          className="absolute border-2 border-purple-400 cursor-move"
          style={{
            left: `${cropBox.x}%`,
            top: `${cropBox.y}%`,
            width: `${cropBox.width}%`,
            height: `${cropBox.height}%`,
            boxShadow: '0 0 0 9999px rgba(0,0,0,0.6)',
            zIndex: 10
          }}
          onMouseDown={(e) => handleMouseDown(e, 'move')}
        >
          {/* Corner Handles - with higher z-index */}
          <div
            className="absolute w-6 h-6 bg-white border-3 border-purple-500 rounded-full cursor-nw-resize shadow-lg"
            style={{ left: '-12px', top: '-12px', zIndex: 100 }}
            onMouseDown={(e) => handleMouseDown(e, 'nw')}
          />
          <div
            className="absolute w-6 h-6 bg-white border-3 border-purple-500 rounded-full cursor-ne-resize shadow-lg"
            style={{ right: '-12px', top: '-12px', zIndex: 100 }}
            onMouseDown={(e) => handleMouseDown(e, 'ne')}
          />
          <div
            className="absolute w-6 h-6 bg-white border-3 border-purple-500 rounded-full cursor-sw-resize shadow-lg"
            style={{ left: '-12px', bottom: '-12px', zIndex: 100 }}
            onMouseDown={(e) => handleMouseDown(e, 'sw')}
          />
          <div
            className="absolute w-6 h-6 bg-white border-3 border-purple-500 rounded-full cursor-se-resize shadow-lg"
            style={{ right: '-12px', bottom: '-12px', zIndex: 100 }}
            onMouseDown={(e) => handleMouseDown(e, 'se')}
          />
          
          {/* Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-white border-opacity-40" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasEditor;