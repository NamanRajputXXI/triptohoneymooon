import AboutUs from "@/components/about/AboutUs";
import CompanyStatsSection from "@/components/global/CompanyStatsSection";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <CompanyStatsSection />
      <Footer />
    </>
  );
};

export default page;
