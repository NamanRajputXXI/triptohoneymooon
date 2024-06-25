import React from "react";

const DestinationButton = ({ isSelected, onClick, children }) => (
  <button
    className={`md:px-4 px-1 py-2 rounded ${
      isSelected ? "bg-blue-500 text-white" : "bg-gray-200"
    }`}
    onClick={onClick}
    aria-pressed={isSelected}
  >
    {children}
  </button>
);
export default DestinationButton;
