"use client";
import React, { useState } from "react";

const ItiniraryAccordian = ({ heading, day, details, images }) => {
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
          </button>
          <p className=" sm:text-xl text-lg font-bold">{heading}</p>
        </div>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="p-4 border-t">
          {details.map((detail, i) => (
            <p key={i}>{detail}</p>
          ))}
          {images && (
            <div className=" py-5 flex gap-5">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt=""
                  className="h-64 object-cover object-center w-80 rounded-xl"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItiniraryAccordian;
