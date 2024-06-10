import React, { useState } from "react";
import ItiniraryAccordian from "./ItiniraryAccordian";
import ItiniraryData from "@/data/productPageData/ItiniraryData";
import ItineraryCarousel from "../carousel/ItineraryCarousel";
import SummarizedView from "./SummarizedView";
import Activities from "./Activities";
import Stay from "./Stay";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("itinerary");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex sm:flex-row flex-col gap-1  px-2   rounded bg-gray-100 mb-4">
        <div className="flex gap-1">
          <button
            className={`sm:mr-4 mr-1 py-2 sm:px-4 px-2  my-2 rounded md:text-base text-xs sm:text-sm ${
              activeTab === "itinerary"
                ? "bg-[#cf331a] text-white"
                : "text-gray-600 bg-white"
            }`}
            onClick={() => handleTabClick("itinerary")}
          >
            Itinerary
          </button>
          <button
            className={`sm:mr-4 mr-1 md:text-base my-2 text-xs sm:text-sm py-2 px-2 sm:px-4 rounded ${
              activeTab === "summarised"
                ? "bg-[#cf331a] text-white"
                : "text-gray-600 bg-white"
            }`}
            onClick={() => handleTabClick("summarised")}
          >
            Summarised View
          </button>
          <button
            className={`sm:mr-4 mr-1 md:text-base my-2 text-xs sm:text-sm py-2 px-2 sm:px-4 rounded ${
              activeTab === "activities"
                ? "bg-[#cf331a] text-white"
                : "text-gray-600 bg-white"
            }`}
            onClick={() => handleTabClick("activities")}
          >
            Activities
          </button>
        </div>

        <div className="flex gap-1">
          <button
            className={`sm:mr-4 mr-1   md:text-base my-2 text-xs sm:text-sm py-2 px-2 sm:px-4 rounded-xl ${
              activeTab === "stay"
                ? "bg-[#cf331a] text-white"
                : "text-gray-600 bg-white"
            }`}
            onClick={() => handleTabClick("stay")}
          >
            Stay
          </button>
          <button
            className={` py-2 px-2 sm:px-4 md:text-base my-2 text-xs sm:text-sm rounded-xl ${
              activeTab === "transfers"
                ? "bg-[#cf331a] text-white"
                : "text-gray-600 bg-white"
            }`}
            onClick={() => handleTabClick("transfers")}
          >
            Transfers
          </button>
        </div>
      </div>
      <div className="p-4 border rounded-xl border-gray-300 ">
        {activeTab === "itinerary" && (
          <div>
            <ItineraryCarousel />
            {ItiniraryData.map((item, i) => (
              <div key={i}>
                <ItiniraryAccordian
                  day={item.day}
                  index={i}
                  title={item.heading}
                  content={item.overview}
                />
              </div>
            ))}
          </div>
        )}
        {activeTab === "summarised" && (
          <div>
            <SummarizedView />
          </div>
        )}
        {activeTab === "activities" && (
          <div>
            <Activities />
          </div>
        )}
        {activeTab === "stay" && (
          <div>
            <Stay />
          </div>
        )}
        {activeTab === "transfers" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Transfers</h2>
            {/* Content for Transfers */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
