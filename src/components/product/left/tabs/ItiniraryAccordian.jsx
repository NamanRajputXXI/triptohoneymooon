"use client";
import React, { useState } from "react";

const ItiniraryAccordian = ({ title, content, day, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border max-w-7xl mx-auto my-10 rounded-lg ">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex gap-4 items-center">
          <button className="px-3 flex items-center gap-2 py-1  bg-red-600 text-white font-bold cursor-pointer rounded-xl">
            <p>{day}</p>
            {index + 1}
          </button>
          <p className=" sm:text-xl text-lg font-bold">{title}</p>
        </div>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && <div className="p-4 border-t">{content}</div>}
    </div>
  );
};

export default ItiniraryAccordian;
