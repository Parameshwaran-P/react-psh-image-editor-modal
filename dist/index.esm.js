import React, { useRef, useState, useEffect } from 'react';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = false,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = true, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), true), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine(e, r, n, t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var UploadButton = function UploadButton(_ref) {
  var onUpload = _ref.onUpload,
    name = _ref.name;
  var fileInputRef = useRef(null);
  var handleFileChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var file, validTypes;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            file = e.target.files[0];
            if (file) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            validTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
            if (validTypes.includes(file.type)) {
              _context.n = 2;
              break;
            }
            alert('Please upload a valid image file (.png, .jpg, .jpeg, .webp)');
            return _context.a(2);
          case 2:
            onUpload(file);
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleFileChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: ".png,.jpg,.jpeg,.webp",
    onChange: handleFileChange,
    className: "hidden"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    className: "px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
  }, "".concat(name)));
};

var platformSizes = {
  instagram: {
    width: 1080,
    height: 1080,
    label: 'Instagram Post',
    ratio: '1:1'
  },
  'instagram-story': {
    width: 1080,
    height: 1920,
    label: 'Instagram Story',
    ratio: '9:16'
  },
  facebook: {
    width: 1200,
    height: 630,
    label: 'Facebook Post',
    ratio: '1.91:1'
  },
  linkedin: {
    width: 1200,
    height: 627,
    label: 'LinkedIn Post',
    ratio: '1.91:1'
  },
  youtube: {
    width: 1280,
    height: 720,
    label: 'YouTube Thumbnail',
    ratio: '16:9'
  },
  twitter: {
    width: 1200,
    height: 675,
    label: 'Twitter Post',
    ratio: '16:9'
  },
  custom: {
    width: 800,
    height: 800,
    label: 'Custom Size',
    ratio: 'Custom'
  }
};

var SizeSelectorModal = function SizeSelectorModal(_ref) {
  var onSelect = _ref.onSelect,
    onCancel = _ref.onCancel;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center px-4 py-6\r bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    className: "fixed top-4 left-4 sm:top-6 sm:left-6\r w-9 h-9 sm:w-10 sm:h-10\r flex items-center justify-center\r bg-white/10 hover:bg-white/20\r rounded-full transition-all"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-5 h-5 sm:w-6 sm:h-6 text-white",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 19l-7-7 7-7"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-4xl bg-gray-800/60 backdrop-blur-md\r rounded-2xl shadow-2xl\r p-5 sm:p-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center"
  }, "Select Platform Size"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
  }, Object.entries(platformSizes).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      _ref3$ = _ref3[1],
      width = _ref3$.width,
      height = _ref3$.height,
      label = _ref3$.label,
      ratio = _ref3$.ratio;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      onClick: function onClick() {
        return onSelect(key);
      },
      className: "p-4 sm:p-6\r bg-gradient-to-br from-purple-600 to-purple-800\r border-2 border-purple-500/30\r rounded-xl cursor-pointer text-center text-white\r transition-all duration-200\r active:scale-95\r hover:scale-105 hover:shadow-xl hover:border-purple-400"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-base sm:text-xl font-semibold mb-1 sm:mb-2"
    }, label), /*#__PURE__*/React.createElement("p", {
      className: "text-sm opacity-90"
    }, width, " \xD7 ", height), /*#__PURE__*/React.createElement("p", {
      className: "text-xs opacity-70 mt-1"
    }, ratio));
  }))));
};

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

var renderImageToCanvas = function renderImageToCanvas(canvas, image, settings) {
  var ctx = canvas.getContext('2d');
  settings.zoom;
    var brightness = settings.brightness,
    contrast = settings.contrast,
    saturation = settings.saturation,
    crop = settings.crop,
    dimensions = settings.dimensions;
  canvas.width = dimensions.width;
  canvas.height = dimensions.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Apply filters
  ctx.filter = "brightness(".concat(brightness, "%) contrast(").concat(contrast, "%) saturate(").concat(saturation, "%)");

  // Calculate the source crop area (what part of the original image to use)
  var sx = image.width * crop.x / 100;
  var sy = image.height * crop.y / 100;
  var sWidth = image.width * crop.width / 100;
  var sHeight = image.height * crop.height / 100;

  // Draw the cropped portion to fill the entire canvas
  ctx.drawImage(image, sx, sy, sWidth, sHeight,
  // Source: cropped area from original image
  0, 0, canvas.width, canvas.height // Destination: fill entire canvas
  );
};
var loadImageFromFile = function loadImageFromFile(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        return resolve({
          img: img,
          dataUrl: event.target.result
        });
      };
      img.onerror = reject;
      img.src = event.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

var CanvasEditor = function CanvasEditor(_ref) {
  var image = _ref.image,
    settings = _ref.settings,
    onCropChange = _ref.onCropChange;
  var canvasRef = useRef(null);
  var containerRef = useRef(null);
  var dragStartRef = useRef({
    x: 0,
    y: 0
  });
  var cropStartRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDragging = _useState2[0],
    setIsDragging = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    dragHandle = _useState4[0],
    setDragHandle = _useState4[1];
  var _useState5 = useState({
      x: 10,
      y: 10,
      width: 80,
      height: 80
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    cropBox = _useState6[0],
    setCropBox = _useState6[1];
  var _useState7 = useState({
      width: 0,
      height: 0
    }),
    _useState8 = _slicedToArray(_useState7, 2);
    _useState8[0];
    var setCanvasSize = _useState8[1];
  useEffect(function () {
    if (image && canvasRef.current) {
      renderImageToCanvas(canvasRef.current, image, settings);
      // Update canvas size for overlay positioning
      var rect = canvasRef.current.getBoundingClientRect();
      setCanvasSize({
        width: rect.width,
        height: rect.height
      });
    }
  }, [image, settings]);
  useEffect(function () {
    setCropBox({
      x: settings.crop.x,
      y: settings.crop.y,
      width: settings.crop.width,
      height: settings.crop.height
    });
  }, [settings.crop]);

  // const handleMouseDown = (e, handle) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setIsDragging(true);
  //   setDragHandle(handle);
  // };
  var handleMouseDown = function handleMouseDown(e, handle) {
    e.preventDefault();
    e.stopPropagation();
    var rect = canvasRef.current.getBoundingClientRect();
    dragStartRef.current = {
      x: (e.clientX - rect.left) / rect.width * 100,
      y: (e.clientY - rect.top) / rect.height * 100
    };
    cropStartRef.current = _objectSpread2({}, cropBox);
    setIsDragging(true);
    setDragHandle(handle);
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (!isDragging || !canvasRef.current) return;
    var rect = canvasRef.current.getBoundingClientRect();
    var mouseX = (e.clientX - rect.left) / rect.width * 100;
    var mouseY = (e.clientY - rect.top) / rect.height * 100;
    var dx = mouseX - dragStartRef.current.x;
    var dy = mouseY - dragStartRef.current.y;
    var newCrop = _objectSpread2({}, cropStartRef.current);
    if (dragHandle === 'move') {
      newCrop.x = Math.min(100 - newCrop.width, Math.max(0, cropStartRef.current.x + dx));
      newCrop.y = Math.min(100 - newCrop.height, Math.max(0, cropStartRef.current.y + dy));
    }
    if (dragHandle === 'nw') {
      newCrop.x = Math.max(0, cropStartRef.current.x + dx);
      newCrop.y = Math.max(0, cropStartRef.current.y + dy);
      newCrop.width = cropStartRef.current.width - dx;
      newCrop.height = cropStartRef.current.height - dy;
    }
    if (dragHandle === 'ne') {
      newCrop.y = Math.max(0, cropStartRef.current.y + dy);
      newCrop.width = cropStartRef.current.width + dx;
      newCrop.height = cropStartRef.current.height - dy;
    }
    if (dragHandle === 'sw') {
      newCrop.x = Math.max(0, cropStartRef.current.x + dx);
      newCrop.width = cropStartRef.current.width - dx;
      newCrop.height = cropStartRef.current.height + dy;
    }
    if (dragHandle === 'se') {
      newCrop.width = cropStartRef.current.width + dx;
      newCrop.height = cropStartRef.current.height + dy;
    }

    // ✅ Minimum size + bounds
    if (newCrop.width >= 10 && newCrop.height >= 10 && newCrop.x + newCrop.width <= 100 && newCrop.y + newCrop.height <= 100) {
      setCropBox(newCrop);
      onCropChange(newCrop);
    }
  };
  var handleMouseUp = function handleMouseUp() {
    setIsDragging(false);
    setDragHandle(null);
  };
  useEffect(function () {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return function () {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full h-full flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: "relative inline-block"
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "max-w-full max-h-full rounded-lg shadow-2xl block relative",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute border-2 border-purple-400 cursor-move",
    style: {
      left: "".concat(cropBox.x, "%"),
      top: "".concat(cropBox.y, "%"),
      width: "".concat(cropBox.width, "%"),
      height: "".concat(cropBox.height, "%"),
      boxShadow: '0 0 0 9999px rgba(0,0,0,0.6)',
      zIndex: 10
    },
    onMouseDown: function onMouseDown(e) {
      return handleMouseDown(e, 'move');
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute w-6 h-6 bg-white border-3 border-purple-500 rounded-full cursor-nw-resize shadow-lg",
    style: {
      left: '-12px',
      top: '-12px',
      zIndex: 100
    },
    onMouseDown: function onMouseDown(e) {
      return handleMouseDown(e, 'nw');
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute w-6 h-6 bg-white border-3 border-purple-500 rounded-full cursor-ne-resize shadow-lg",
    style: {
      right: '-12px',
      top: '-12px',
      zIndex: 100
    },
    onMouseDown: function onMouseDown(e) {
      return handleMouseDown(e, 'ne');
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute w-6 h-6 bg-white border-3 border-purple-500 rounded-full cursor-sw-resize shadow-lg",
    style: {
      left: '-12px',
      bottom: '-12px',
      zIndex: 100
    },
    onMouseDown: function onMouseDown(e) {
      return handleMouseDown(e, 'sw');
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute w-6 h-6 bg-white border-3 border-purple-500 rounded-full cursor-se-resize shadow-lg",
    style: {
      right: '-12px',
      bottom: '-12px',
      zIndex: 100
    },
    onMouseDown: function onMouseDown(e) {
      return handleMouseDown(e, 'se');
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none"
  }, _toConsumableArray(Array(9)).map(function (_, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "border border-white border-opacity-40"
    });
  })))));
};

var RightToolbar = function RightToolbar(_ref) {
  var settings = _ref.settings,
    onSettingsChange = _ref.onSettingsChange,
    imageData = _ref.imageData;
  var zoom = settings.zoom,
    brightness = settings.brightness,
    contrast = settings.contrast,
    saturation = settings.saturation,
    crop = settings.crop,
    dimensions = settings.dimensions;
  var _useState = useState('no-change'),
    _useState2 = _slicedToArray(_useState, 2),
    resizeMode = _useState2[0],
    setResizeMode = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    customWidth = _useState4[0],
    setCustomWidth = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    customHeight = _useState6[0],
    setCustomHeight = _useState6[1];
  var handleChange = function handleChange(key, value) {
    onSettingsChange(_objectSpread2(_objectSpread2({}, settings), {}, _defineProperty({}, key, value)));
  };
  var handleCropChange = function handleCropChange(key, value) {
    onSettingsChange(_objectSpread2(_objectSpread2({}, settings), {}, {
      crop: _objectSpread2(_objectSpread2({}, crop), {}, _defineProperty({}, key, value))
    }));
  };
  var handleResizeChange = function handleResizeChange(mode) {
    setResizeMode(mode);
    var newDimensions = _objectSpread2({}, dimensions);
    if (mode === 'no-change') {
      newDimensions = imageData ? {
        width: imageData.width,
        height: imageData.height
      } : dimensions;
    } else if (mode === '25-smaller') {
      newDimensions = {
        width: Math.round(dimensions.width * 0.75),
        height: Math.round(dimensions.height * 0.75)
      };
    } else if (mode === '50-smaller') {
      newDimensions = {
        width: Math.round(dimensions.width * 0.5),
        height: Math.round(dimensions.height * 0.5)
      };
    } else if (mode === '75-smaller') {
      newDimensions = {
        width: Math.round(dimensions.width * 0.25),
        height: Math.round(dimensions.height * 0.25)
      };
    } else if (mode === 'fit-800') {
      var maxDim = 800;
      var ratio = Math.min(maxDim / dimensions.width, maxDim / dimensions.height);
      newDimensions = {
        width: Math.round(dimensions.width * ratio),
        height: Math.round(dimensions.height * ratio)
      };
    }
    onSettingsChange(_objectSpread2(_objectSpread2({}, settings), {}, {
      dimensions: newDimensions
    }));
  };
  var handleCustomResize = function handleCustomResize() {
    var width = parseInt(customWidth) || dimensions.width;
    var height = parseInt(customHeight) || dimensions.height;
    onSettingsChange(_objectSpread2(_objectSpread2({}, settings), {}, {
      dimensions: {
        width: width,
        height: height
      }
    }));
  };
  var SliderControl = function SliderControl(_ref2) {
    var label = _ref2.label,
      value = _ref2.value,
      _onChange = _ref2.onChange,
      _ref2$min = _ref2.min,
      min = _ref2$min === void 0 ? 0 : _ref2$min,
      _ref2$max = _ref2.max,
      max = _ref2$max === void 0 ? 200 : _ref2$max,
      _ref2$step = _ref2.step,
      step = _ref2$step === void 0 ? 1 : _ref2$step,
      _ref2$unit = _ref2.unit,
      unit = _ref2$unit === void 0 ? '%' : _ref2$unit;
    return /*#__PURE__*/React.createElement("div", {
      className: "mb-4 sm:mb-5"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-xs sm:text-sm font-semibold mb-2 text-white"
    }, label, ":", ' ', /*#__PURE__*/React.createElement("span", {
      className: "text-purple-300 font-bold"
    }, value, unit)), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: min,
      max: max,
      step: step,
      value: value,
      onChange: function onChange(e) {
        return _onChange(parseFloat(e.target.value));
      },
      className: "w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-purple-500"
    }));
  };
  var originalDimensions = imageData ? {
    width: imageData.width,
    height: imageData.height
  } : dimensions;
  var croppedWidth = Math.round(originalDimensions.width * crop.width / 100);
  var croppedHeight = Math.round(originalDimensions.height * crop.height / 100);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-800"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-3 border-b border-gray-600"
  }, "Edit Controls"), /*#__PURE__*/React.createElement("div", {
    className: "mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-gray-600"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-white text-sm sm:text-base font-bold mb-3"
  }, "Resize Image"), /*#__PURE__*/React.createElement("label", {
    className: "block text-xs sm:text-sm font-semibold mb-2 text-white"
  }, "Select new size:"), /*#__PURE__*/React.createElement("select", {
    value: resizeMode,
    onChange: function onChange(e) {
      return handleResizeChange(e.target.value);
    },
    className: "w-full p-3 sm:p-2.5 bg-gray-700 text-white rounded-lg border-2 border-gray-600\r focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none\r mb-3 text-sm font-medium"
  }, /*#__PURE__*/React.createElement("option", {
    value: "no-change"
  }, "No change"), /*#__PURE__*/React.createElement("option", {
    value: "25-smaller"
  }, "25% smaller"), /*#__PURE__*/React.createElement("option", {
    value: "50-smaller"
  }, "50% smaller"), /*#__PURE__*/React.createElement("option", {
    value: "75-smaller"
  }, "75% smaller"), /*#__PURE__*/React.createElement("option", {
    value: "fit-800"
  }, "Fit to screen: 800 resolution"), /*#__PURE__*/React.createElement("option", {
    value: "custom"
  }, "Custom Size...")), resizeMode === 'custom' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "Width",
    value: customWidth,
    onChange: function onChange(e) {
      return setCustomWidth(e.target.value);
    },
    className: "flex-1 p-3 sm:p-2 bg-gray-700 text-white text-sm rounded-lg\r border-2 border-gray-600 focus:border-purple-400 focus:ring-2\r focus:ring-purple-400 focus:outline-none font-medium"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:block text-white self-center text-sm font-bold"
  }, "\xD7"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "Height",
    value: customHeight,
    onChange: function onChange(e) {
      return setCustomHeight(e.target.value);
    },
    className: "flex-1 p-3 sm:p-2 bg-gray-700 text-white text-sm rounded-lg\r border-2 border-gray-600 focus:border-purple-400 focus:ring-2\r focus:ring-purple-400 focus:outline-none font-medium"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleCustomResize,
    className: "w-full px-4 py-2 bg-purple-600 text-white text-sm font-bold\r rounded-lg hover:bg-purple-700 transition-colors"
  }, "Apply Custom Size")), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 text-xs bg-slate-900 rounded-lg p-3 border border-gray-700 overflow-x-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-2 min-w-[260px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-white"
  }, "Your Image"), /*#__PURE__*/React.createElement("div", {
    className: "text-center font-bold text-white"
  }, "Width(px)"), /*#__PURE__*/React.createElement("div", {
    className: "text-center font-bold text-white"
  }, "Height(px)"), /*#__PURE__*/React.createElement("div", {
    className: "text-gray-300 font-semibold"
  }, "Original"), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-white font-semibold"
  }, originalDimensions.width), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-white font-semibold"
  }, originalDimensions.height), /*#__PURE__*/React.createElement("div", {
    className: "text-gray-300 font-semibold"
  }, "Cropped"), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-white font-semibold"
  }, croppedWidth), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-white font-semibold"
  }, croppedHeight), /*#__PURE__*/React.createElement("div", {
    className: "text-green-400 font-bold"
  }, "Final"), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-green-400 font-bold"
  }, dimensions.width), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-green-400 font-bold"
  }, dimensions.height)))), /*#__PURE__*/React.createElement(SliderControl, {
    label: "Zoom",
    value: zoom,
    onChange: function onChange(val) {
      return handleChange('zoom', val);
    },
    min: 0.5,
    max: 3,
    step: 0.1,
    unit: "x"
  }), /*#__PURE__*/React.createElement(SliderControl, {
    label: "Brightness",
    value: brightness,
    onChange: function onChange(val) {
      return handleChange('brightness', val);
    }
  }), /*#__PURE__*/React.createElement(SliderControl, {
    label: "Contrast",
    value: contrast,
    onChange: function onChange(val) {
      return handleChange('contrast', val);
    }
  }), /*#__PURE__*/React.createElement(SliderControl, {
    label: "Saturation",
    value: saturation,
    onChange: function onChange(val) {
      return handleChange('saturation', val);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-gray-600 pt-4 mt-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-white text-sm sm:text-base font-bold mb-3 sm:mb-4"
  }, "Crop Position"), /*#__PURE__*/React.createElement(SliderControl, {
    label: "Crop X",
    value: crop.x,
    onChange: function onChange(val) {
      return handleCropChange('x', val);
    },
    max: 50
  }), /*#__PURE__*/React.createElement(SliderControl, {
    label: "Crop Y",
    value: crop.y,
    onChange: function onChange(val) {
      return handleCropChange('y', val);
    },
    max: 50
  })));
};

var BottomActions = function BottomActions(_ref) {
  var onSubmit = _ref.onSubmit,
    onDownload = _ref.onDownload;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onDownload,
    className: "px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
  }, "\u2B07 Download"), /*#__PURE__*/React.createElement("button", {
    onClick: onSubmit,
    className: "px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
  }, "\u2713 Submit"));
};

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

var canvasToBlob = function canvasToBlob(canvas) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image/png';
  var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return new Promise(function (resolve) {
    canvas.toBlob(function (blob) {
      var file = new File([blob], "psh-edited-".concat(Date.now(), ".png"), {
        type: format
      });
      resolve(file);
    }, format, quality);
  });
};
var downloadFromCanvas = function downloadFromCanvas(canvas) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "psh-image-".concat(Date.now(), ".png");
  var link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
};

var ImageEditorModal = function ImageEditorModal(_ref) {
  var image = _ref.image,
    settings = _ref.settings,
    onSettingsChange = _ref.onSettingsChange,
    onSubmit = _ref.onSubmit,
    onCancel = _ref.onCancel,
    onBackToSizeSelector = _ref.onBackToSizeSelector;
  useRef(null);
  var handleCropChange = function handleCropChange(newCrop) {
    onSettingsChange(_objectSpread2(_objectSpread2({}, settings), {}, {
      crop: newCrop
    }));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var canvas, file;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            canvas = document.querySelector('canvas');
            if (!canvas) {
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return canvasToBlob(canvas);
          case 1:
            file = _context.v;
            onSubmit(file);
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleDownload = function handleDownload() {
    var canvas = document.querySelector('canvas');
    if (canvas) {
      downloadFromCanvas(canvas);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\r flex items-center justify-center p-3 sm:p-5 overflow-hidden"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBackToSizeSelector,
    className: "fixed top-4 left-4 sm:top-6 sm:left-6\r w-9 h-9 sm:w-10 sm:h-10\r flex items-center justify-center\r bg-white/10 hover:bg-white/20\r rounded-full transition-all z-20"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-5 h-5 sm:w-6 sm:h-6 text-white",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 19l-7-7 7-7"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-6xl h-[95vh] sm:h-[90vh]\r bg-slate-800/60 backdrop-blur-lg\r rounded-xl sm:rounded-2xl shadow-2xl\r overflow-hidden flex flex-col md:flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex items-center justify-center\r p-4 sm:p-8\r bg-gradient-to-br from-gray-900 to-gray-800"
  }, /*#__PURE__*/React.createElement(CanvasEditor, {
    image: image,
    settings: settings,
    onCropChange: handleCropChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-80\r flex flex-col\r bg-slate-800 border-t md:border-t-0 md:border-l border-gray-700\r shadow-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto"
  }, /*#__PURE__*/React.createElement(RightToolbar, {
    settings: settings,
    onSettingsChange: onSettingsChange,
    imageData: image
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-3 sm:p-4 bg-slate-900 border-t border-gray-700"
  }, /*#__PURE__*/React.createElement(BottomActions, {
    onSubmit: handleSubmit,
    onDownload: handleDownload,
    onCancel: onCancel
  })))));
};

var PSHImageEditor = function PSHImageEditor(_ref) {
  var onSubmit = _ref.onSubmit,
    name = _ref.name;
    _ref.width;
    _ref.height;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setUploadedFile = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    imageData = _useState4[0],
    setImageData = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showSizeSelector = _useState6[0],
    setShowSizeSelector = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showEditor = _useState8[0],
    setShowEditor = _useState8[1];
  var _useState9 = useState({
      zoom: 1,
      brightness: 100,
      contrast: 100,
      saturation: 100,
      crop: {
        x: 0,
        y: 0,
        width: 100,
        height: 100
      },
      dimensions: {
        width: 800,
        height: 800
      }
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    settings = _useState0[0],
    setSettings = _useState0[1];
  var handleUpload = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(file) {
      var _yield$loadImageFromF, img, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return loadImageFromFile(file);
          case 1:
            _yield$loadImageFromF = _context.v;
            img = _yield$loadImageFromF.img;
            _yield$loadImageFromF.dataUrl;
            setUploadedFile(file);
            setImageData(img);
            setShowSizeSelector(true);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('Error loading image:', _t);
            alert('Failed to load image. Please try again.');
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function handleUpload(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSizeSelect = function handleSizeSelect(platformKey) {
    var size = platformSizes[platformKey];
    setSettings(_objectSpread2(_objectSpread2({}, settings), {}, {
      dimensions: {
        width: size.width,
        height: size.height
      }
    }));
    setShowSizeSelector(false);
    setShowEditor(true);
  };
  var handleBackToSizeSelector = function handleBackToSizeSelector() {
    setShowEditor(false);
    setShowSizeSelector(true);
  };
  var handleEditorSubmit = function handleEditorSubmit(file) {
    onSubmit(file);
    resetEditor();
  };
  var resetEditor = function resetEditor() {
    setUploadedFile(null);
    setImageData(null);
    setShowSizeSelector(false);
    setShowEditor(false);
    setSettings({
      zoom: 1,
      brightness: 100,
      contrast: 100,
      saturation: 100,
      crop: {
        x: 0,
        y: 0,
        width: 100,
        height: 100
      },
      dimensions: {
        width: 800,
        height: 800
      }
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, !showSizeSelector && !showEditor && /*#__PURE__*/React.createElement(UploadButton, {
    onUpload: handleUpload,
    name: name
  }), showSizeSelector && /*#__PURE__*/React.createElement(SizeSelectorModal, {
    onSelect: handleSizeSelect,
    onCancel: resetEditor
  }), showEditor && imageData && /*#__PURE__*/React.createElement(ImageEditorModal, {
    image: imageData,
    settings: settings,
    onSettingsChange: setSettings,
    onSubmit: handleEditorSubmit,
    onCancel: resetEditor,
    onBackToSizeSelector: handleBackToSizeSelector
  }));
};

export { PSHImageEditor as default };
