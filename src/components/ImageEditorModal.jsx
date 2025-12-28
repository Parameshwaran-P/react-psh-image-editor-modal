import React, { useRef } from 'react';
import CanvasEditor from './CanvasEditor';
import RightToolbar from './RightToolbar';
import BottomActions from './BottomActions';
import { canvasToBlob, downloadFromCanvas } from '../utils/imageExport';

const ImageEditorModal = ({ image, settings, onSettingsChange, onSubmit, onCancel, onBackToSizeSelector }) => {
  const canvasRef = useRef(null);

  const handleCropChange = (newCrop) => {
    onSettingsChange({
      ...settings,
      crop: newCrop
    });
  };

  const handleSubmit = async () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const file = await canvasToBlob(canvas);
      onSubmit(file);
    }
  };

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      downloadFromCanvas(canvas);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 flex items-center justify-center p-5">
      {/* Back Arrow */}
      <button
        onClick={onBackToSizeSelector}
        className="fixed top-6 left-6 w-10 h-10 flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="w-full max-w-6xl h-[90vh] bg-slate-800 bg-opacity-60 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Canvas Area */}
        <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800">
          <CanvasEditor 
            image={image} 
            settings={settings}
            onCropChange={handleCropChange}
          />
        </div>

        {/* Sidebar - Resizable */}
        <div className="w-80 flex z-10 flex-col bg-slate-800 border-l border-gray-700 shadow-2xl">
          <RightToolbar 
            settings={settings} 
            onSettingsChange={onSettingsChange}
            imageData={image}
          />
          
          {/* Bottom Actions */}
          <div className="p-4 bg-slate-900 border-t border-gray-700">
            <BottomActions
              onSubmit={handleSubmit}
              onDownload={handleDownload}
              onCancel={onCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditorModal;