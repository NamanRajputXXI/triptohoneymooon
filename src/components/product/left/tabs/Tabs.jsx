import React, { useState } from "react";
import ItiniraryAccordian from "./Itinerary/ItiniraryAccordian";
import ItineraryCarousel from "../carousel/ItineraryCarousel";
// import Activities from "./Activities";
import Stay from "./Stay/Stay";
import ActivityAccordian from "./Activities/ActivityAccordian";

const Tabs = ({
  itineraryCarousel,
  itineraryDetails,
  days,
  destination,
  activities,
}) => {
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
        </div>
      </div>
      <div className="p-4 border rounded-xl border-gray-300 ">
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
            <Stay />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
