import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

const page = ({ searchParams }) => {
  const {
    selected,
    setSelected,
    id,
    category,
    heading,
    exclusions,
    inclusions,
    itinerary,
    overView,
    duration,
    totalCustomer,
    rating,
    refundPolicy,
    cancellationPolicy,
    saveInr,
    packageCategory,
    itineraryDetails,
    days,
    destination,
    activities,
  } = searchParams;
  console.log(
    selected,
    setSelected,
    id,
    category,
    heading,
    exclusions,
    inclusions,
    itinerary,
    overView,
    duration,
    totalCustomer,
    rating,
    refundPolicy,
    cancellationPolicy,
    saveInr,
    packageCategory,
    itineraryDetails,
    days,
    destination,
    activities
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <h1>{rating}</h1>
        <h2>{totalCustomer}</h2>
      </div>
      <Footer />
    </>
  );
};

export default page;
