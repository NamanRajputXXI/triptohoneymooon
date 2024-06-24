// "use client";
// import React, { useState } from "react";

// const ImagesGridLayout = ({ headerImages }) => {
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
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex(
//       (prevIndex) => (prevIndex - 1 + headerImages.length) % headerImages.length
//     );
//   };

//   return (
//     <section className="my-5 px-5">
//       <div className="max-w-7xl flex flex-col mx-auto">
//         <div className="flex items-start justify-start gap-5 w-full flex-col">
//           <div className="flex md:flex-row flex-col md:h-[600px] gap-2 md:gap-3">
//             <div
//               className="md:w-1/2 w-full h-full overflow-hidden rounded-xl cursor-pointer"
//               onClick={() => openGallery(0)}
//             >
//               <img
//                 src={headerImages[0]}
//                 alt=""
//                 className="h-full w-full object-cover object-center image-zoom"
//                 loading="lazy"
//               />
//             </div>
//             <div className="grid md:gap-3 gap-2 w-full md:w-1/2 h-full grid-cols-2">
//               {headerImages.slice(1, 5).map((img, index) => (
//                 <div
//                   key={index}
//                   className="overflow-hidden rounded-xl relative cursor-pointer"
//                   onClick={() => openGallery(index + 1)}
//                 >
//                   <img
//                     src={img}
//                     alt=""
//                     className="object-cover h-full w-full object-center image-zoom"
//                     loading="lazy"
//                   />
//                   {index === 3 && (
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         openGallery(5);
//                       }}
//                       className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md"
//                     >
//                       See All
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
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
//           <img
//             src={headerImages[currentImageIndex]}
//             alt=""
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
//     </section>
//   );
// };

// export default ImagesGridLayout;

"use client";
import React, { useState } from "react";

const ImagesGridLayout = ({ headerImages }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index) => {
    setShowGallery(true);
    // Ensure the index is within bounds
    setCurrentImageIndex(index % headerImages.length);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + headerImages.length) % headerImages.length
    );
  };

  return (
    <section className="my-5 px-5">
      <div className="max-w-7xl flex flex-col mx-auto">
        <div className="flex items-start justify-start gap-5 w-full flex-col">
          <div className="flex md:flex-row flex-col md:h-[600px] gap-2 md:gap-3">
            <div
              className="md:w-1/2 w-full h-full overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openGallery(0)}
            >
              <img
                src={headerImages[0]}
                alt=""
                className="h-full w-full object-cover object-center image-zoom"
                loading="lazy"
              />
            </div>
            <div className="grid md:gap-3 gap-2 w-full md:w-1/2 h-full grid-cols-2">
              {headerImages.slice(1, 5).map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl relative cursor-pointer"
                  onClick={() => openGallery(index + 1)}
                >
                  <img
                    src={img}
                    alt=""
                    className="object-cover h-full w-full object-center image-zoom"
                    loading="lazy"
                  />
                  {index === 3 && headerImages.length > 5 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openGallery(0); // Start from the beginning when "See All" is clicked
                      }}
                      className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md"
                    >
                      See All
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
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
          <img
            src={headerImages[currentImageIndex]}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-8xl"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
};

export default ImagesGridLayout;
