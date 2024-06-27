import React from "react";

const PaginationButton = ({ onClick, disabled, children, active }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg ${
        disabled
          ? "bg-black cursor-not-allowed"
          : active
          ? "bg-red-600 text-white"
          : "bg-black"
      } text-white transition duration-300`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
