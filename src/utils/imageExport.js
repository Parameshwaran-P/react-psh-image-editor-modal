// export const canvasToBlob = (canvas, format = 'image/png', quality = 1) => {
//   return new Promise((resolve) => {
//     canvas.toBlob((blob) => {
//       const file = new File([blob], `psh-edited-${Date.now()}.png`, { type: format });
//       resolve(file);
//     }, format, quality);
//   });
// };

// export const downloadFromCanvas = (canvas, filename = `psh-image-${Date.now()}.png`) => {
//   const link = document.createElement('a');
//   link.download = filename;
//   link.href = canvas.toDataURL('image/png');
//   link.click();
// };

export const canvasToBlob = (canvas, format = 'image/png', quality = 1) => {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      const file = new File([blob], `psh-edited-${Date.now()}.png`, { type: format });
      resolve(file);
    }, format, quality);
  });
};

export const downloadFromCanvas = (canvas, filename = `psh-image-${Date.now()}.png`) => {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
};