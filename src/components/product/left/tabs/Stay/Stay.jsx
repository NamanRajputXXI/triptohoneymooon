"use client";
import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
const Stay = () => {
  const [isOpen, setIsOpen] = useState(true);

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
        <div className="sm:p-4 p-2 border-t">
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
            <div className="flex sm:flex-row flex-col gap-5 w-full sm:p-4 p-1  items-center">
              <div className="sm:w-1/2 w-full flex flex-col gap-3">
                <img
                  src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg"
                  className="w-full rounded-lg"
                  alt=""
                />
                <p>Swiss Chocolate by Fassbind</p>
              </div>
              <div className="sm:w-1/2 w-full flex flex-col gap-3">
                <img
                  src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg"
                  className="w-full rounded-lg"
                  alt=""
                />
                <p>ibis Zurich City West</p>
              </div>
            </div>
          </div>
          <div className="px-5 w-full h-80">
            <div className="bg-blue-100 flex flex-col gap-5 p-5 w-full h-fit">
              <p className="text-gray-400 font-bold">1 Room - 1 Guest</p>
              <div className="bg-gray-500 w-full h-[1px]"></div>
              <div className="flex items-center gap-5">
                <div className="bg-blue-300 rounded-lg flex items-center justify-center px-2 py-1 text-blue-700">
                  Room 1
                </div>
                <p>1 Adult</p>
              </div>
              <div className="bg-gray-500 w-full h-[1px]"></div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  <div className="flex  gap-2 items-center">
                    <p>Inclusions :</p>{" "}
                    <span className="flex items-center gap-1">
                      <BsCupHot size={20} color="gray" /> Breakfast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stay;
