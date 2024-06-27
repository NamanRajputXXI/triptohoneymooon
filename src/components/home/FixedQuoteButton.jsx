"use client";

import React from "react";
import { MdCall } from "react-icons/md";

const FixedQuoteButton = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onClick}
        className="group relative bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="flex flex-col items-center">
          <MdCall className="text-3xl mb-1" />
          <span className="text-xs font-bold">REQUEST</span>
          <span className="text-xs font-bold">QUOTE</span>
        </div>
      </button>
      <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
        FREE
      </div>
    </div>
  );
};

export default FixedQuoteButton;
