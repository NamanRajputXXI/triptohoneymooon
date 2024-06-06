"use client";
import React from "react";
import { FaBed } from "react-icons/fa";
import { FaPlateWheat } from "react-icons/fa6";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Tabs from "./Tabs";
import Accordian from "../AccordianItem";
import InclusionExclusion from "./InclusionExclusion";
const LeftSideSection = ({ heading, duration, overView, itinerary }) => {
  return (
    <div className="md:col-span-2">
      <div className="flex flex-col gap-5">
        <p className="text-4xl font-bold">{heading}</p>
        <button className="py-2 px-1 w-40 bg-[#cf331a] text-white rounded-xl">
          {duration}
        </button>
        <div className="flex md:text-base text-xs sm:text-sm flex-row justify-between border-t-[1px] border-b-[1px] py-5 border-gray-200">
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
          <p className="font-bold">Destinaation Routes</p>
          <div className="flex border-[#cf331a] relative border-[1px] rounded-2xl py-3 px-3">
            <p>Zurich</p>
            <div className="flex bg-[#cf331a] rounded-tr-xl items-center right-0 top-0 justify-center absolute">
              <TiTick color="white" size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Stay Category</p>
          <div className="flex w-40 border-[#cf331a] relative border-[1px] rounded-2xl py-3 px-3">
            <p>Duluxe</p>
            <div className="flex bg-[#cf331a] rounded-tr-xl items-center right-0 top-0 justify-center absolute">
              <TiTick color="white" size={20} />
            </div>
          </div>
        </div>
        <div className="py-5">
          <p className="font-bold">Trip Highlights</p>
          {overView.slice(0, 4).map((item, i) => (
            <div className="flex flex-col " key={i}>
              {/* <p className="text-bold text-xl">{item.heading}</p> */}
              <p className="text-gray-600 my-2 text-lg">
                {i + 1}. {item.text}
              </p>
            </div>
          ))}
        </div>
        <Tabs />
        {/* <Accordian itinerary={itinerary} /> */}
      </div>
    </div>
  );
};

export default LeftSideSection;
