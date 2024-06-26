"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const SingleReview = ({ review }) => {
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
      (prevIndex) => (prevIndex + 1) % review.imageGallary.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + review.imageGallary.length) %
        review.imageGallary.length
    );
  };

  return (
    <div className="p-5 border-[1px] rounded-xl flex flex-col gap-5 border-gray-300 max-w-7xl mx-auto">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-5">
          <img
            src={review.imageGallary[0]}
            className="rounded-full w-10 h-10 object-cover object-center"
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-xl font-bold">{review.name}</p>
            <p className="text-sm font-normal text-gray-500">
              Reviewed: {review.date}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-green-800">
          <FaStar color="green" size={20} />
          <p>{review.rating}/5</p>
        </div>
      </div>
      <p className="text-gray-500">
        Booked:{" "}
        <span className="text-black font-bold">{review.packageName}</span>
      </p>
      <p className="text-gray-700">{review.review}</p>
      <div className=" relative grid gap-3 grid-cols-2 sm:grid-cols-4">
        {review.imageGallary.slice(0, 4).map((image, i) => (
          <img
            key={i}
            src={image}
            className="w-full h-48 object-cover rounded-xl cursor-pointer"
            alt={`Review image ${i + 1}`}
            onClick={() => openGallery(i)}
          />
        ))}
        {review.imageGallary.length > 4 && (
          <button
            onClick={() => openGallery(4)}
            className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md text-sm font-semibold"
          >
            See All
          </button>
        )}
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
            src={review.imageGallary[currentImageIndex]}
            alt={`Review image ${currentImageIndex + 1}`}
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
    </div>
  );
};

export default SingleReview;
