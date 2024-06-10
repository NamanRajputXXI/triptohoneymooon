"use client";
import React, { useState } from "react";
import { FaBed } from "react-icons/fa";

const Stay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border max-w-7xl mx-auto  rounded-lg ">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex gap-4 items-center">
          <button className="px-3 flex items-center gap-2 py-1  bg-red-600 text-white font-bold cursor-pointer rounded-xl">
            <p>Day 1</p>
          </button>
          <p className=" sm:text-xl text-lg font-bold">Arrival in Zurich</p>
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
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <FaBed size={30} color="gray" />
              <p>Stay at</p>
            </div>
            <p className="font-bold">Check-In At Deluxe Hotel In Zurich</p>
            <div className="bg-gray-300 flex justify-between items-center p-4 rounded-lg w-full">
              <div className="flex flex-col ">
                <p>check in</p>
                <p>11:00 am</p>
              </div>
              <div className="flex flex-col">
                <p>check out</p>
                <p>6:00 pm</p>
              </div>
            </div>
            <p className="text-blue-600 font-bold">
              Stays will be allocated based on availability or similar category
            </p>
            <div className="flex gap-5 w-full p-4  items-center">
              <img
                src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg"
                className="w-1/2 rounded-lg"
                alt=""
              />

              <img
                src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg"
                className="w-1/2 rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stay;
