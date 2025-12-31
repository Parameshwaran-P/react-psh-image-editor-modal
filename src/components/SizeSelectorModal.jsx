import React from 'react';
import { platformSizes } from '../presets/platformSizes';

const SizeSelectorModal = ({ onSelect, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6
      bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-y-auto">

      {/* Back Button */}
      <button
        onClick={onCancel}
        className="fixed top-4 left-4 sm:top-6 sm:left-6
          w-9 h-9 sm:w-10 sm:h-10
          flex items-center justify-center
          bg-white/10 hover:bg-white/20
          rounded-full transition-all"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Modal */}
      <div className="w-full max-w-4xl bg-gray-800/60 backdrop-blur-md
        rounded-2xl shadow-2xl
        p-5 sm:p-8"
      >
        <h2 className="text-white text-xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Select Platform Size
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {Object.entries(platformSizes).map(
            ([key, { width, height, label, ratio }]) => (
              <div
                key={key}
                onClick={() => onSelect(key)}
                className="p-4 sm:p-6
                  bg-gradient-to-br from-purple-600 to-purple-800
                  border-2 border-purple-500/30
                  rounded-xl cursor-pointer text-center text-white
                  transition-all duration-200
                  active:scale-95
                  hover:scale-105 hover:shadow-xl hover:border-purple-400"
              >
                <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">
                  {label}
                </h3>
                <p className="text-sm opacity-90">
                  {width} × {height}
                </p>
                <p className="text-xs opacity-70 mt-1">
                  {ratio}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SizeSelectorModal;
