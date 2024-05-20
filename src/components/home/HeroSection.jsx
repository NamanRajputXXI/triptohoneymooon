import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-[url('https://images.unsplash.com/photo-1497256654106-4a29efafb831?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex flex-col text-white py-10 px-10">
        <h1 className="text-4xl">Let&apos;s EXPLORE</h1>
        <h1 className="text-7xl">ANDAMAN</h1>
      </div>
    </section>
  );
};

export default HeroSection;
