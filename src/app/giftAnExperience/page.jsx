import GiftExpHero from "@/components/gift/GiftExpHero";
import Gifts from "@/components/gift/Gifts";
import HowItWorks from "@/components/gift/HowItWorks";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <GiftExpHero />
      <HowItWorks />
      <Gifts />
      <Footer />
    </>
  );
};

export default page;
