// import React, { useState } from "react";

// const HotelImages = ({ images, hotelName }) => {
//   const [showGallery, setShowGallery] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const openGallery = (index) => {
//     setShowGallery(true);
//     setCurrentImageIndex(index);
//   };

//   const closeGallery = () => {
//     setShowGallery(false);
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   // Ensure we have an array of images
//   const safeImages = Array.isArray(images) ? images : [];

//   return (
//     <div className="w-full">
//       <div className="flex sm:flex-row flex-col gap-5 w-full sm:p-4 p-1 items-center">
//         {safeImages.slice(0, 3).map((image, index) => (
//           <div
//             key={index}
//             className="sm:w-1/3 w-full flex flex-col gap-3 relative"
//           >
//             <img
//               src={image}
//               className="w-full h-48 object-cover rounded-lg cursor-pointer"
//               alt={`Image ${index + 1} of ${hotelName}`}
//               loading="lazy"
//               onClick={() => openGallery(index)}
//             />
//             {index === 2 && safeImages.length > 3 && (
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   openGallery(3);
//                 }}
//                 className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md text-sm font-semibold"
//               >
//                 See All
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//       {showGallery && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
//           <button
//             onClick={closeGallery}
//             className="absolute top-4 right-4 text-white text-6xl"
//           >
//             &times;
//           </button>
//           <button
//             onClick={prevImage}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-8xl"
//           >
//             &#8249;
//           </button>
//           {safeImages[currentImageIndex] && (
//             <img
//               src={safeImages[currentImageIndex]}
//               alt={`Image ${currentImageIndex + 1} of ${hotelName}`}
//               className="max-h-[90vh] max-w-[90vw] object-contain"
//             />
//           )}
//           <button
//             onClick={nextImage}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-8xl"
//           >
//             &#8250;
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelImages;

import React, { useState, useEffect } from "react";

const HotelImages = ({ images, hotelName }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const openGallery = (index) => {
    setShowGallery(true);
    setCurrentImageIndex(index);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Ensure we have an array of images
  const safeImages = Array.isArray(images) ? images : [];

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = reject;
      });
    };

    Promise.all(safeImages.map(loadImage))
      .then(setLoadedImages)
      .catch(console.error);
  }, [safeImages]);

  const ImageLoader = () => (
    <div className="absolute rounded-lg inset-0 bg-gray-300 animate-pulse z-10">
      <div className="h-full w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-[shimmer_1.5s_infinite] rounded-xl"></div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex sm:flex-row flex-col gap-5 w-full sm:p-4 p-1 items-center">
        {safeImages.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="sm:w-1/3 w-full flex flex-col gap-3 relative"
          >
            {!loadedImages.includes(image) && <ImageLoader />}
            <img
              src={image}
              className={`w-full h-48 object-cover rounded-lg cursor-pointer ${
                loadedImages.includes(image) ? "opacity-100" : "opacity-0"
              }`}
              alt={`Image ${index + 1} of ${hotelName}`}
              loading="lazy"
              onClick={() => openGallery(index)}
            />
            {index === 2 && safeImages.length > 3 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openGallery(3);
                }}
                className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md text-sm font-semibold"
              >
                See All
              </button>
            )}
          </div>
        ))}
      </div>
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white text-6xl"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-8xl"
          >
            &#8249;
          </button>
          {safeImages[currentImageIndex] && (
            <>
              {!loadedImages.includes(safeImages[currentImageIndex]) && (
                <div className="max-h-[90vh] max-w-[90vw]">
                  <ImageLoader />
                </div>
              )}
              <img
                src={safeImages[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1} of ${hotelName}`}
                className={`max-h-[90vh] max-w-[90vw] object-contain ${
                  loadedImages.includes(safeImages[currentImageIndex])
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            </>
          )}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-8xl"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default HotelImages;
