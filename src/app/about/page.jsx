import AboutUs from "@/components/about/AboutUs";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );
};

export default page;
