import React from "react";

const PaginationButton = ({ onClick, disabled, children, active }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-2 ${
        disabled
          ? " cursor-not-allowed"
          : active
          ? "font-bold text-xl text-red-500 "
          : ""
      } text-black font-semibold transition duration-300`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
