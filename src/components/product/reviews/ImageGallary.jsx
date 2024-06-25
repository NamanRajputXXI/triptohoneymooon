"use client";

import React, { useState } from "react";

const ImageGallary = ({ reviewImageGallary = [] }) => {
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
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % reviewImageGallary.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + reviewImageGallary.length) % reviewImageGallary.length
    );
  };

  // Ensure we have at least one image
  if (reviewImageGallary.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <section className="my-5 md:px-5">
      <div className="max-w-7xl flex flex-col mx-auto">
        <div className="flex items-start justify-start gap-5 w-full flex-col">
          <p className="text-start text-2xl font-bold">
            Traveller Image Gallery
          </p>
          <div className="flex md:flex-row flex-col md:h-[600px] gap-2 md:gap-3">
            <div
              className="md:w-1/2 w-full h-full overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openGallery(0)}
            >
              <img
                src={reviewImageGallary[0]}
                alt="Traveller Image 1"
                className="h-full w-full object-cover object-center image-zoom"
                loading="lazy"
              />
            </div>
            <div className="grid md:gap-3 gap-2 w-full md:w-1/2 h-full grid-cols-2">
              {reviewImageGallary.slice(1, 5).map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl relative cursor-pointer"
                  onClick={() => openGallery(index + 1)}
                >
                  <img
                    src={img}
                    alt={`Traveller Image ${index + 2}`}
                    className="object-cover h-full w-full object-center image-zoom"
                    loading="lazy"
                  />
                  {index === 3 && reviewImageGallary.length > 5 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openGallery(5);
                      }}
                      className="absolute md:bottom-4 md:text-base text-sm md:right-4 bottom-2 right-2 bg-white text-black md:px-4 md:py-2 px-2 py-1 rounded-md"
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
          {reviewImageGallary[currentImageIndex] && (
            <img
              src={reviewImageGallary[currentImageIndex]}
              alt={`Traveller Image ${currentImageIndex + 1}`}
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
    </section>
  );
};

export default ImageGallary;
