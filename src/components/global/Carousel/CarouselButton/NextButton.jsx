import React from "react";

const NextButton = ({ handleNextSlide }) => {
  return (
    <button
      aria-label="Next slide"
      onClick={handleNextSlide}
      className="rounded-full  bg-gray-400  p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
    >
      <span className="inline-block h-5 w-5">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="text-white" // Change this class to 'text-black'
        >
          <path
            fill="currentColor"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </span>
    </button>
  );
};

export default NextButton;
