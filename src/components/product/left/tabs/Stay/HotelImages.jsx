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

//   return (
//     <div className="w-full">
//       <div className="flex sm:flex-row flex-col gap-5 w-full sm:p-4 p-1 items-center">
//         {images.slice(0, 3).map((image, index) => (
//           <div key={index} className="sm:w-1/3 w-full flex flex-col gap-3">
//             <img
//               src={image}
//               className="w-full h-48 object-cover rounded-lg cursor-pointer"
//               alt={`Image of ${hotelName}`}
//               loading="lazy"
//               onClick={() => openGallery(index)}
//             />
//           </div>
//         ))}
//       </div>
//       {images.length > 3 && (
//         <div className="text-center mt-4">
//           <button
//             onClick={() => openGallery(3)}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             See All Images
//           </button>
//         </div>
//       )}
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
//           <img
//             src={images[currentImageIndex]}
//             alt={`Image ${currentImageIndex + 1} of ${hotelName}`}
//             className="max-h-[90vh] max-w-[90vw] object-contain"
//           />
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

import React, { useState } from "react";

const HotelImages = ({ images, hotelName }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="w-full">
      <div className="flex sm:flex-row flex-col gap-5 w-full sm:p-4 p-1 items-center">
        {safeImages.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="sm:w-1/3 w-full flex flex-col gap-3 relative"
          >
            <img
              src={image}
              className="w-full h-48 object-cover rounded-lg cursor-pointer"
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
            <img
              src={safeImages[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1} of ${hotelName}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
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
