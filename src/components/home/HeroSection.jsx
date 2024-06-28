import React from "react";
import DestinationSearchBar from "./DestinationSearchBar";

const HeroSection = () => {
  return (
    <section className="relative h-[400px]  sm:h-[500px] w-full bg-[url('https://images.unsplash.com/photo-1497256654106-4a29efafb831?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-full">
        <DestinationSearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
