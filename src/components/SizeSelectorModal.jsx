import React from 'react';
import { platformSizes } from '../presets/platformSizes';

const SizeSelectorModal = ({ onSelect, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 z-50 flex items-center justify-center p-5">
      {/* Back Arrow */}
      <button
        onClick={onCancel}
        className="fixed top-6 left-6 w-10 h-10 flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="w-full max-w-4xl bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Select Platform Size</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(platformSizes).map(([key, { width, height, label, ratio }]) => (
            <div
              key={key}
              onClick={() => onSelect(key)}
              className="p-6 bg-gradient-to-br from-purple-600 to-purple-800 border-2 border-purple-500 border-opacity-30 rounded-xl cursor-pointer text-center text-white transition-all hover:scale-105 hover:shadow-xl hover:border-opacity-100"
            >
              <h3 className="text-xl font-semibold mb-2">{label}</h3>
              <p className="text-sm opacity-90">{width} × {height}</p>
              <p className="text-xs opacity-70 mt-1">{ratio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SizeSelectorModal;