import React from 'react';

const BottomActions = ({ onSubmit, onDownload }) => {
  return (
    <div className="flex justify-end gap-3">
      <button
        onClick={onDownload}
        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
      >
        ⬇ Download
      </button>
      <button
        onClick={onSubmit}
        className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
      >
        ✓ Submit
      </button>
    </div>
  );
};

export default BottomActions;
