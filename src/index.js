import React, { useState } from 'react';
import UploadButton from './components/UploadButton';
import SizeSelectorModal from './components/SizeSelectorModal';
import ImageEditorModal from './components/ImageEditorModal';
import { platformSizes } from './presets/platformSizes';
import { loadImageFromFile } from './utils/canvasHelpers';
import './styles/index.css';

const PSHImageEditor = ({ onSubmit, name, width, height }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [showSizeSelector, setShowSizeSelector] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [settings, setSettings] = useState({
    zoom: 1,
    brightness: 100,
    contrast: 100,
    saturation: 100,
    crop: { x: 0, y: 0, width: 100, height: 100 },
    dimensions: { width: 800, height: 800 }
  });

  const handleUpload = async (file) => {
    try {
      const { img, dataUrl } = await loadImageFromFile(file);
      setUploadedFile(file);
      setImageData(img);
      setShowSizeSelector(true);
    } catch (error) {
      console.error('Error loading image:', error);
      alert('Failed to load image. Please try again.');
    }
  };

  const handleSizeSelect = (platformKey) => {
    const size = platformSizes[platformKey];
    setSettings({
      ...settings,
      dimensions: { width: size.width, height: size.height }
    });
    setShowSizeSelector(false);
    setShowEditor(true);
  };

  const handleBackToSizeSelector = () => {
    setShowEditor(false);
    setShowSizeSelector(true);
  };

  const handleEditorSubmit = (file) => {
    onSubmit(file);
    resetEditor();
  };

  const resetEditor = () => {
    setUploadedFile(null);
    setImageData(null);
    setShowSizeSelector(false);
    setShowEditor(false);
    setSettings({
      zoom: 1,
      brightness: 100,
      contrast: 100,
      saturation: 100,
      crop: { x: 0, y: 0, width: 100, height: 100 },
      dimensions: { width: 800, height: 800 }
    });
  };

  return (
    <>
      {!showSizeSelector && !showEditor && (
        <UploadButton onUpload={handleUpload} name={name} />
      )}

      {showSizeSelector && (
        <SizeSelectorModal
          onSelect={handleSizeSelect}
          onCancel={resetEditor}
        />
      )}

      {showEditor && imageData && (
        <ImageEditorModal
          image={imageData}
          settings={settings}
          onSettingsChange={setSettings}
          onSubmit={handleEditorSubmit}
          onCancel={resetEditor}
          onBackToSizeSelector={handleBackToSizeSelector}
        />
      )}
    </>
  );
};

export default PSHImageEditor;
