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
        className="flex justify-between items-center p-2 md:p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex gap-4 items-center">
          <button className="md:px-3 px-2 flex items-center gap-2 py-1 min-w-20 justify-center  bg-red-600 text-white font-semibold md:font-bold cursor-pointer rounded-xl">
            <p>{day}</p>
          </button>
          <p className=" md:text-xl text-base font-semibold md:font-bold">
            {heading}
          </p>
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
            <div className=" py-5 md:flex-row flex-col flex gap-5">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  loading="lazy"
                  alt=""
                  className="xl:h-64 h-48 object-cover object-center lg:w-64 w-full md:w-48 xl:w-80 rounded-xl"
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
