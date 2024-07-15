"use client";
import React, { useState } from "react";
import RightSideSection from "./RightSideSection";
import LeftSideSection from "./left/LeftSideSection";

const MidSection = ({
  id,
  category,
  heading,
  exclusions,
  headerImages,
  inclusions,
  itinerary,
  overView,
  duration,
  tripHighlights,
  knowBeforeYouGo,
  totalCustomer,
  rating,
  reviewImageGallary,
  refundPolicy,
  paymentPolicy,
  cancellationPolicy,
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
        id={id}
        category={category}
        heading={heading}
        exclusions={exclusions}
        headerImages={headerImages}
        inclusions={inclusions}
        itinerary={itinerary}
        overView={overView}
        duration={duration}
        tripHighlights={tripHighlights}
        knowBeforeYouGo={knowBeforeYouGo}
        totalCustomer={totalCustomer}
        rating={rating}
        reviewImageGallary={reviewImageGallary}
        refundPolicy={refundPolicy}
        paymentPolicy={paymentPolicy}
        cancellationPolicy={cancellationPolicy}
        saveInr={saveInr}
        packageCategory={packageCategory}
        itineraryDetails={itineraryDetails}
        itineraryCarousel={itineraryCarousel}
        days={days}
        destination={destination}
        activities={activities}
      />
    </div>
  );
};

export default MidSection;
