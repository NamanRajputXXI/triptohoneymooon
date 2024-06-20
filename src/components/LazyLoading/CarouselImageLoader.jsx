import React, { useState } from "react";

const CarouselImageLoader = ({ src, alt, className, containerClass }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={` relative ${containerClass}`}>
      {isLoading && (
        <div className="absolute  inset-0 bg-gray-300 animate-pulse z-10">
          <div className="h-full w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-[shimmer_1.5s_infinite] rounded-xl"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`  ${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
        onLoad={handleImageLoad}
        loading="lazy"
      />
    </div>
  );
};

export default CarouselImageLoader;
