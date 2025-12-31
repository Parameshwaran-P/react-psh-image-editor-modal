import React, { useRef } from 'react';
import CanvasEditor from './CanvasEditor';
import RightToolbar from './RightToolbar';
import BottomActions from './BottomActions';
import { canvasToBlob, downloadFromCanvas } from '../utils/imageExport';

const ImageEditorModal = ({
  image,
  settings,
  onSettingsChange,
  onSubmit,
  onCancel,
  onBackToSizeSelector
}) => {
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
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900
      flex items-center justify-center p-3 sm:p-5 overflow-hidden">

      {/* Back Button */}
      <button
        onClick={onBackToSizeSelector}
        className="fixed top-4 left-4 sm:top-6 sm:left-6
        w-9 h-9 sm:w-10 sm:h-10
        flex items-center justify-center
        bg-white/10 hover:bg-white/20
        rounded-full transition-all z-20"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Modal Container */}
      <div
        className="w-full max-w-6xl h-[95vh] sm:h-[90vh]
        bg-slate-800/60 backdrop-blur-lg
        rounded-xl sm:rounded-2xl shadow-2xl
        overflow-hidden flex flex-col md:flex-row"
      >
        {/* Canvas Area */}
        <div
          className="flex-1 flex items-center justify-center
          p-4 sm:p-8
          bg-gradient-to-br from-gray-900 to-gray-800"
        >
          <CanvasEditor
            image={image}
            settings={settings}
            onCropChange={handleCropChange}
          />
        </div>

        {/* Right Toolbar → Bottom Panel on Mobile */}
        <div
          className="w-full md:w-80
          flex flex-col
          bg-slate-800 border-t md:border-t-0 md:border-l border-gray-700
          shadow-2xl"
        >
          <div className="flex-1 overflow-y-auto">
            <RightToolbar
              settings={settings}
              onSettingsChange={onSettingsChange}
              imageData={image}
            />
          </div>

          {/* Bottom Actions */}
          <div className="p-3 sm:p-4 bg-slate-900 border-t border-gray-700">
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
