import React from "react";

const PreviousButton = ({ handlePrevSlide }) => {
  return (
    <button
      aria-label="Previous slide"
      onClick={handlePrevSlide}
      className="rounded-full  flex justify-center  items-center bg-gray-400  p-3 text-rose-600 transition  hover:text-white"
    >
      <span className="inline-block h-5 w-5">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="text-white" // Apply 'text-black' class directly here
        >
          <path
            fill="currentColor"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </span>
    </button>
  );
};

export default PreviousButton;
