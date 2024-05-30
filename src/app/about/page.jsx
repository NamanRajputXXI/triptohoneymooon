import AboutUs from "@/components/about/AboutUs";
import KeyFeatures from "@/components/about/KeyFeatures";
import NewsLetter from "@/components/about/NewsLetter";
import OurServices from "@/components/about/OurServices";
import TravelPoint from "@/components/about/TravelPoint";
import CompanyStatsSection from "@/components/global/CompanyStatsSection";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <OurServices />
      <TravelPoint />
      <KeyFeatures />
      <CompanyStatsSection />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default page;
