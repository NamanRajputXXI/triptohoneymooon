import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[300px] md:h-[500px] w-full bg-[url('https://images.unsplash.com/photo-1497256654106-4a29efafb831?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex font-medium flex-col text-white p-10 md:p-20">
        <h1 className="md:text-4xl text-2xl">Let&apos;s EXPLORE</h1>
        <h1 className="md:text-9xl text-5xl">ANDAMAN</h1>
      </div>
    </section>
  );
};

export default HeroSection;
