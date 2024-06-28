import React from "react";

const PaginationButton = ({ onClick, disabled, children, active }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg ${
        disabled ? " cursor-not-allowed" : active ? "bg-red-600 text-white" : ""
      } text-black font-semibold transition duration-300`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
