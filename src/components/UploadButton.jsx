import React, { useRef } from 'react';

const UploadButton = ({ onUpload, name }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a valid image file (.png, .jpg, .jpeg, .webp)');
      return;
    }

    onUpload(file);
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept=".png,.jpg,.jpeg,.webp"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
      >
       {`${name}`}
      </button>
    </>
  );
};

export default UploadButton;