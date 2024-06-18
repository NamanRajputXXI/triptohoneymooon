"use client";
import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import { FaPlateWheat } from "react-icons/fa6";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Tabs from "./tabs/Tabs";

const LeftSideSection = ({
  heading,
  duration,
  itineraryDetails,
  itineraryCarousel,
  tripHighlights,
  packageCategory,
  days,
  destination,
  activities,
  selected,
  setSelected,
}) => {
  return (
    <div className="md:col-span-2">
      <div className="flex flex-col gap-5">
        <p className="text-4xl font-bold">
          {heading}
          <span className="text-gray-500 text-xs">Only for Couples</span>
        </p>
        <button className="py-2 px-1 w-40 bg-[#cf331a] text-white rounded-xl">
          {duration}
        </button>

        <div className="flex flex-col gap-3 md:text-base text-xs sm:text-sm justify-between border-t-[1px] border-b-[1px] py-5 border-gray-200">
          <p className="font-bold">Choose Hotel Category</p>
          <div className="flex gap-2 items-center">
            {packageCategory.map((category, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 relative cursor-pointer"
                onClick={() => setSelected(i)}
              >
                <img
                  src={category.imageUrl}
                  alt=""
                  className={`h-32 rounded-xl p-1 w-32 ${
                    selected === i
                      ? "border-red-600 border-2"
                      : "border-white border-2"
                  }`}
                />
                <p className="text-white absolute top-24 left-3 font-extrabold">
                  {category.category}
                </p>
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500">Starting From</p>
                  <p className="font-extrabold text-[13px]">
                    ₹ {category.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:text-base text-xs sm:text-sm flex-row justify-between  py-5 ">
          <div className="flex flex-row text-gray-500 items-center gap-1 sm:gap-3">
            <FaBed size={30} />
            <p>Stay Included</p>
          </div>
          <div className="flex flex-row text-gray-500 items-center  gap-1 sm:gap-3">
            <FaPlateWheat size={30} />
            <p>Breakfast Included</p>
          </div>
          <div className="flex flex-row text-gray-500 items-center  gap-1 sm:gap-3">
            <BsFillBalloonHeartFill size={30} />
            <p>Stay Updated</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Stay Category</p>
          <div className="flex w-40 border-[#cf331a] relative border-[1px] rounded-2xl py-3 px-3">
            <p>{packageCategory[selected].category}</p>
            <div className="flex bg-[#cf331a] rounded-tr-xl items-center right-0 top-0 justify-center absolute">
              <TiTick color="white" size={20} />
            </div>
          </div>
        </div>

        <div className="py-5">
          <p className="font-bold">Trip Highlights</p>
          {tripHighlights.map((item, i) => (
            <div className="flex flex-col " key={i}>
              <p className="text-gray-600 my-2 ">
                {i + 1}. {item}
              </p>
            </div>
          ))}
        </div>

        <Tabs
          itineraryCarousel={itineraryCarousel}
          itineraryDetails={itineraryDetails}
          days={days}
          destination={destination}
          activities={activities}
          selected={selected}
          setSelected={setSelected}
          packageCategory={packageCategory}
        />
      </div>
    </div>
  );
};

export default LeftSideSection;
