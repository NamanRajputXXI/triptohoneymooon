import Account from "@/components/gift/Account";
import GiftExpHero from "@/components/gift/GiftExpHero";
import Gifts from "@/components/gift/Gifts";
import HowItWorks from "@/components/gift/HowItWorks";
import Review from "@/components/gift/Review";
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
      <Account />
      <Review />
      <Footer />
    </>
  );
};

export default page;
