import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("itinerary");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex gap-1  px-2   rounded bg-gray-100 mb-4">
        <button
          className={`mr-4 py-2 px-4  my-2 rounded md:text-base text-xs sm:text-sm ${
            activeTab === "itinerary"
              ? "bg-[#cf331a] text-white"
              : "text-gray-600 bg-white"
          }`}
          onClick={() => handleTabClick("itinerary")}
        >
          {" "}
          Itinerary
        </button>
        <button
          className={`mr-4 md:text-base my-2 text-xs sm:text-sm py-2 px-4 rounded ${
            activeTab === "summarised"
              ? "bg-[#cf331a] text-white"
              : "text-gray-600 bg-white"
          }`}
          onClick={() => handleTabClick("summarised")}
        >
          Summarised View
        </button>
        <button
          className={`mr-4 md:text-base my-2 text-xs sm:text-sm py-2 px-4 rounded ${
            activeTab === "activities"
              ? "bg-[#cf331a] text-white"
              : "text-gray-600 bg-white"
          }`}
          onClick={() => handleTabClick("activities")}
        >
          Activities
        </button>
        <button
          className={`mr-4 md:text-base my-2 text-xs sm:text-sm py-2 px-4 rounded ${
            activeTab === "stay"
              ? "bg-[#cf331a] text-white"
              : "text-gray-600 bg-white"
          }`}
          onClick={() => handleTabClick("stay")}
        >
          Stay
        </button>
        <button
          className={` py-2 px-4 md:text-base my-2 text-xs sm:text-sm rounded ${
            activeTab === "transfers"
              ? "bg-[#cf331a] text-white"
              : "text-gray-600 bg-white"
          }`}
          onClick={() => handleTabClick("transfers")}
        >
          Transfers
        </button>
      </div>
      <div className="p-4 border border-gray-300 rounded">
        {activeTab === "itinerary" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Itinerary</h2>
            {/* Content for Items Itinerary */}
          </div>
        )}
        {activeTab === "summarised" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Summarised View</h2>
            {/* Content for Summarised View */}
          </div>
        )}
        {activeTab === "activities" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Activities</h2>
            {/* Content for Activities */}
          </div>
        )}
        {activeTab === "stay" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Stay</h2>
            {/* Content for Stay */}
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
