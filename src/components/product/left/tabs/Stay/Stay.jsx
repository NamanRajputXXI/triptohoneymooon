"use client";
import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
const Stay = ({ selected, setSelected, packageCategory }) => {
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
          <p className=" sm:text-xl text-lg font-bold">
            Hotel Details for {packageCategory[selected].category} Category
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
        <div className="sm:p-4 p-2 border-t">
          <div className="flex flex-col gap-5">
            <div className="bg-gray-300 flex justify-between items-center p-4 rounded-lg w-full">
              <p>
                Hotels List for the {packageCategory[selected].category}{" "}
                Category
              </p>
            </div>
            <p className="text-blue-600 font-bold">
              Stays will be allocated based on availability or similar category
            </p>
            {packageCategory[selected].hotels.map((hotel, i) => (
              <div className="flex flex-col gap-5" key={i}>
                <div className="flex text-xl font-bold items-center gap-2">
                  {i + 1}.<h1>{hotel.hotelName}</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold">Amenities</h1>
                  <ul>
                    {hotel.amenities.map((amenity, i) => (
                      <div className="flex gap-1 items-center" key={i}>
                        <p>{i + 1}.</p> <li>{amenity}</li>
                      </div>
                    ))}
                  </ul>
                </div>
                <div className="flex sm:flex-row flex-col gap-5 w-full sm:p-4 p-1  items-center">
                  {hotel.images.map((image, i) => (
                    <div
                      className="sm:w-1/2 w-full flex flex-col gap-3"
                      key={i}
                    >
                      <img src={image} className="w-full rounded-lg" alt="" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Stay;
