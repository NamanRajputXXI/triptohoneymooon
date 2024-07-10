import React, { useState } from "react";
import ItiniraryAccordian from "./Itinerary/ItiniraryAccordian";
import ItineraryCarousel from "../carousel/ItineraryCarousel";
import Stay from "./Stay/Stay";
import ActivityAccordian from "./Activities/ActivityAccordian";

const Tabs = ({
  itineraryCarousel,
  itineraryDetails,
  days,
  destination,
  activities,
  selected,
  setSelected,
  packageCategory,
}) => {
  const [activeTab, setActiveTab] = useState("itinerary");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-nowrap overflow-x-auto bg-gray-100 rounded p-2 mb-4">
        <button
          className={`flex-shrink-0 mr-2 py-2 px-3 rounded text-xs sm:text-sm md:text-base whitespace-nowrap ${
            activeTab === "itinerary"
              ? "bg-[#cf331a] text-white"
              : "text-gray-600 bg-white"
          }`}
          onClick={() => handleTabClick("itinerary")}
        >
          Itinerary
        </button>
        <button
          className={`flex-shrink-0 mr-2 py-2 px-3 rounded text-xs sm:text-sm md:text-base whitespace-nowrap ${
            activeTab === "activities"
              ? "bg-[#cf331a] text-white"
              : "text-gray-600 bg-white"
          }`}
          onClick={() => handleTabClick("activities")}
        >
          Activities
        </button>
        <button
          className={`flex-shrink-0 py-2 px-3 rounded text-xs sm:text-sm md:text-base whitespace-nowrap ${
            activeTab === "stay"
              ? "bg-[#cf331a] text-white"
              : "text-gray-600 bg-white"
          }`}
          onClick={() => handleTabClick("stay")}
        >
          Stay
        </button>
      </div>

      <div className="a">
        {activeTab === "itinerary" && (
          <div>
            <ItineraryCarousel
              days={days}
              destination={destination}
              itineraryCarousel={itineraryCarousel}
            />
            {itineraryDetails.map((item, i) => (
              <div key={i}>
                <ItiniraryAccordian
                  day={item.day}
                  heading={item.heading}
                  details={item.details}
                  images={item.images}
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === "activities" && (
          <div>
            {activities.map((activity, i) => (
              <div key={i}>
                <ActivityAccordian index={i} activity={activity} />
              </div>
            ))}
            <ItineraryCarousel
              days={days}
              destination={destination}
              itineraryCarousel={itineraryCarousel}
            />
          </div>
        )}

        {activeTab === "stay" && (
          <div>
            <Stay
              selected={selected}
              setSelected={setSelected}
              packageCategory={packageCategory}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
