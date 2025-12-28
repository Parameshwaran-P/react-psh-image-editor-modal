import React, { useState } from 'react';

const RightToolbar = ({ settings, onSettingsChange, imageData }) => {
  const { zoom, brightness, contrast, saturation, crop, dimensions } = settings;
  const [resizeMode, setResizeMode] = useState('no-change');
  const [customWidth, setCustomWidth] = useState('');
  const [customHeight, setCustomHeight] = useState('');

  const handleChange = (key, value) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const handleCropChange = (key, value) => {
    onSettingsChange({
      ...settings,
      crop: { ...crop, [key]: value }
    });
  };

  const handleResizeChange = (mode) => {
    setResizeMode(mode);
    
    let newDimensions = { ...dimensions };
    
    if (mode === 'no-change') {
      newDimensions = imageData ? { width: imageData.width, height: imageData.height } : dimensions;
    } else if (mode === '25-smaller') {
      newDimensions = { width: Math.round(dimensions.width * 0.75), height: Math.round(dimensions.height * 0.75) };
    } else if (mode === '50-smaller') {
      newDimensions = { width: Math.round(dimensions.width * 0.5), height: Math.round(dimensions.height * 0.5) };
    } else if (mode === '75-smaller') {
      newDimensions = { width: Math.round(dimensions.width * 0.25), height: Math.round(dimensions.height * 0.25) };
    } else if (mode === 'fit-800') {
      const maxDim = 800;
      const ratio = Math.min(maxDim / dimensions.width, maxDim / dimensions.height);
      newDimensions = { width: Math.round(dimensions.width * ratio), height: Math.round(dimensions.height * ratio) };
    }
    
    onSettingsChange({ ...settings, dimensions: newDimensions });
  };

  const handleCustomResize = () => {
    const width = parseInt(customWidth) || dimensions.width;
    const height = parseInt(customHeight) || dimensions.height;
    onSettingsChange({ ...settings, dimensions: { width, height } });
  };

  const SliderControl = ({ label, value, onChange, min = 0, max = 200, step = 1, unit = '%' }) => (
    <div className="mb-5">
      <label className="block text-sm font-semibold mb-2 text-white">
        {label}: <span className="text-purple-300 font-bold">{value}{unit}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-purple-500"
      />
    </div>
  );

  const originalDimensions = imageData ? { width: imageData.width, height: imageData.height } : dimensions;
  const croppedWidth = Math.round((originalDimensions.width * crop.width) / 100);
  const croppedHeight = Math.round((originalDimensions.height * crop.height) / 100);

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-slate-800">
      <h3 className="text-white text-xl font-bold mb-6 pb-3 border-b border-gray-600">Edit Controls</h3>

      {/* Resize Section */}
      <div className="mb-6 pb-6 border-b border-gray-600">
        <h4 className="text-white text-base font-bold mb-3">Resize Image</h4>
        
        <label className="block text-sm font-semibold mb-2 text-white">Select new size:</label>
        <select
          value={resizeMode}
          onChange={(e) => handleResizeChange(e.target.value)}
          className="w-full p-2.5 bg-gray-700 text-white rounded-lg border-2 border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none mb-3 text-sm font-medium"
        >
          <option value="no-change">No change</option>
          <option value="25-smaller">25% smaller</option>
          <option value="50-smaller">50% smaller</option>
          <option value="75-smaller">75% smaller</option>
          <option value="fit-800">Fit to screen: 800 resolution</option>
          <option value="custom">Custom Size...</option>
        </select>

        {resizeMode === 'custom' && (
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Width"
                value={customWidth}
                onChange={(e) => setCustomWidth(e.target.value)}
                className="flex-1 p-2 bg-gray-700 text-white text-sm rounded-lg border-2 border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none font-medium"
              />
              <span className="text-white self-center text-sm font-bold">×</span>
              <input
                type="number"
                placeholder="Height"
                value={customHeight}
                onChange={(e) => setCustomHeight(e.target.value)}
                className="flex-1 p-2 bg-gray-700 text-white text-sm rounded-lg border-2 border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none font-medium"
              />
            </div>
            <button
              onClick={handleCustomResize}
              className="w-full px-4 py-2 bg-purple-600 text-white text-sm font-bold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Apply Custom Size
            </button>
          </div>
        )}

        {/* Image Info Table */}
        <div className="mt-3 text-xs bg-slate-900 rounded-lg p-3 border border-gray-700">
          <div className="grid grid-cols-3 gap-2">
            <div className="font-bold text-white">Your Image</div>
            <div className="text-center font-bold text-white">Width(px)</div>
            <div className="text-center font-bold text-white">Height(px)</div>
            
            <div className="text-gray-300 font-semibold">Original</div>
            <div className="text-center text-white font-semibold">{originalDimensions.width}</div>
            <div className="text-center text-white font-semibold">{originalDimensions.height}</div>
            
            <div className="text-gray-300 font-semibold">Cropped</div>
            <div className="text-center text-white font-semibold">{croppedWidth}</div>
            <div className="text-center text-white font-semibold">{croppedHeight}</div>
            
            <div className="text-green-400 font-bold">Final</div>
            <div className="text-center text-green-400 font-bold">{dimensions.width}</div>
            <div className="text-center text-green-400 font-bold">{dimensions.height}</div>
          </div>
        </div>
      </div>

      <SliderControl
        label="Zoom"
        value={zoom}
        onChange={(val) => handleChange('zoom', val)}
        min={0.5}
        max={3}
        step={0.1}
        unit="x"
      />

      <SliderControl
        label="Brightness"
        value={brightness}
        onChange={(val) => handleChange('brightness', val)}
      />

      <SliderControl
        label="Contrast"
        value={contrast}
        onChange={(val) => handleChange('contrast', val)}
      />

      <SliderControl
        label="Saturation"
        value={saturation}
        onChange={(val) => handleChange('saturation', val)}
      />

      <div className="border-t border-gray-600 pt-4 mt-4">
        <h4 className="text-white text-base font-bold mb-4">Crop Position</h4>
        
        <SliderControl
          label="Crop X"
          value={crop.x}
          onChange={(val) => handleCropChange('x', val)}
          max={50}
        />

        <SliderControl
          label="Crop Y"
          value={crop.y}
          onChange={(val) => handleCropChange('y', val)}
          max={50}
        />
      </div>
    </div>
  );
};

export default RightToolbar;