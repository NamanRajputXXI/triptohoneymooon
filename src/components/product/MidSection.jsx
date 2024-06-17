"use client";
import React, { useState } from "react";
import RightSideSection from "./RightSideSection";
import LeftSideSection from "./left/LeftSideSection";

const MidSection = ({
  heading,
  itinerary,
  overView,
  duration,
  tripHighlights,
  totalCustomer,
  rating,
  saveInr,
  packageCategory,
  itineraryDetails,
  itineraryCarousel,
  days,
  destination,
  activities,
}) => {
  const [selected, setSelected] = useState(0); // Set initial value to 0 (first category)
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 px-5 max-w-7xl mx-auto gap-5 py-4">
      <LeftSideSection
        itineraryDetails={itineraryDetails}
        itineraryCarousel={itineraryCarousel}
        packageCategory={packageCategory}
        overView={overView}
        heading={heading}
        tripHighlights={tripHighlights}
        duration={duration}
        itinerary={itinerary}
        rating={rating}
        days={days}
        destination={destination}
        activities={activities}
        selected={selected}
        setSelected={setSelected}
      />
      <RightSideSection
        selected={selected}
        setSelected={setSelected}
        rating={rating}
        totalCustomer={totalCustomer}
        saveInr={saveInr}
        heading={heading}
        packageCategory={packageCategory}
      />
    </div>
  );
};

export default MidSection;
