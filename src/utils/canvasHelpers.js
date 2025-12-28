// // utils/imageHelpers.js
// export const getCroppedImg = (imageSrc, pixelCrop) => {
//   return new Promise((resolve, reject) => {
//     const image = new Image();
//     image.src = imageSrc;
//     image.onload = () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = pixelCrop.width;
//       canvas.height = pixelCrop.height;
//       const ctx = canvas.getContext("2d");

//       ctx.drawImage(
//         image,
//         pixelCrop.x,
//         pixelCrop.y,
//         pixelCrop.width,
//         pixelCrop.height,
//         0,
//         0,
//         pixelCrop.width,
//         pixelCrop.height
//       );

//       canvas.toBlob((blob) => {
//         const file = new File([blob], "cropped_image.png", { type: "image/png" });
//         resolve(URL.createObjectURL(file));
//       }, "image/png");
//     };
//     image.onerror = reject;
//   });
// };

// export const resizeImage = (imageSrc, width, height, format = "png") => {
//   return new Promise((resolve, reject) => {
//     const image = new Image();
//     image.src = imageSrc;
//     image.onload = () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = width;
//       canvas.height = height;
//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(image, 0, 0, width, height);

//       canvas.toBlob(
//         (blob) => {
//           const file = new File([blob], `resized_image.${format}`, { type: `image/${format}` });
//           resolve(URL.createObjectURL(file));
//         },
//         `image/${format}`,
//         1
//       );
//     };
//     image.onerror = reject;
//   });
// };

// export const renderImageToCanvas = (canvas, image, settings) => {
//   const ctx = canvas.getContext('2d');
//   const { zoom, brightness, contrast, saturation, crop, dimensions } = settings;

//   canvas.width = dimensions.width;
//   canvas.height = dimensions.height;

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;

//   // Calculate crop area
//   const sx = (image.width * crop.x) / 100;
//   const sy = (image.height * crop.y) / 100;
//   const sWidth = (image.width * crop.width) / 100;
//   const sHeight = (image.height * crop.height) / 100;

//   // Calculate zoom positioning
//   const scaledWidth = canvas.width * zoom;
//   const scaledHeight = canvas.height * zoom;
//   const offsetX = (canvas.width - scaledWidth) / 2;
//   const offsetY = (canvas.height - scaledHeight) / 2;

//   ctx.drawImage(image, sx, sy, sWidth, sHeight, offsetX, offsetY, scaledWidth, scaledHeight);
// };

// export const loadImageFromFile = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const img = new Image();
//       img.onload = () => resolve({ img, dataUrl: event.target.result });
//       img.onerror = reject;
//       img.src = event.target.result;
//     };
//     reader.onerror = reject;
//     reader.readAsDataURL(file);
//   });
// };

export const renderImageToCanvas = (canvas, image, settings) => {
  const ctx = canvas.getContext('2d');
  const { zoom, brightness, contrast, saturation, crop, dimensions } = settings;

  canvas.width = dimensions.width;
  canvas.height = dimensions.height;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Apply filters
  ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;

  // Calculate the source crop area (what part of the original image to use)
  const sx = (image.width * crop.x) / 100;
  const sy = (image.height * crop.y) / 100;
  const sWidth = (image.width * crop.width) / 100;
  const sHeight = (image.height * crop.height) / 100;

  // Draw the cropped portion to fill the entire canvas
  ctx.drawImage(
    image,
    sx, sy, sWidth, sHeight,  // Source: cropped area from original image
    0, 0, canvas.width, canvas.height  // Destination: fill entire canvas
  );
};

export const loadImageFromFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => resolve({ img, dataUrl: event.target.result });
      img.onerror = reject;
      img.src = event.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
