import React from "react";

const PaginationButton = ({ onClick, disabled, children, active }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ${
        disabled
          ? "bg-gray-500 cursor-not-allowed"
          : active
          ? "bg-red-500 text-white"
          : "bg-gray-500 "
      } text-white transition duration-300`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
