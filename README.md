react-psh-image-editor-modal

A premium, Canva-like image editor modal for React.
Crop, resize, adjust, and export images effortlessly with a modern, production-ready UI.

One-button integration • Responsive • Built for real apps

✨ Features

>> Crop & Zoom (powered by react-easy-crop)

>> Resize Images

>> Percentage resize (25%, 50%, 75%)

>> Fit-to-screen (800px)

>> Custom width & height

>> Social media presets (Instagram, YouTube, etc.)

Image Adjustments

>> Zoom

>> Brightness

>> Contrast

>> Saturation

Export Formats

>> PNG

>> JPG / JPEG

>> WEBP

Live preview

>> Download or submit edited image

>> Fully responsive (mobile + desktop)

>> Reusable modal component

>> Premium, Canva-style UI

>> Installation
npm install react-psh-image-editor-modal


or

yarn add react-psh-image-editor-modal

Basic Usage:
import { useState } from 'react';
import ImageEditorModal from 'react-psh-image-editor-modal';

function App() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button onClick={() => setOpen(true)}>
        Open Image Editor
      </button>

      {open && image && (
        <ImageEditorModal
          image={image}
          onSubmit={(file) => {
            console.log('Edited image:', file);
            setOpen(false);
          }}
          onCancel={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default App;

Use Cases:

>> Social media image creators

>> Profile & cover photo editors

>>E-commerce product uploads

>>Blog & CMS platforms

>>Marketing dashboards

>>Any React app that needs image editing

Design Philosophy

>> Build once.

>> Reuse everywhere.

>> Premium experience by default.

>> No complex configs.

>> No UI headaches.

>>Just drop in and edit images.

Tech Stack

>> React

>> Tailwind CSS

>> react-easy-crop

>> Canvas API

License

MIT © PSH

>> Support

If you find this package useful:

>> Star the repo

>> Share with fellow developers

>> Suggestions & PRs are welcome