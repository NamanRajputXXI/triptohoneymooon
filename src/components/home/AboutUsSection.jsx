import React from "react";
import Button from "../global/Button";

const AboutUsSection = () => {
  return (
    <section className="w-full my-20 bg-red-200">
      <div className=" max-w-7xl gap-5  mx-auto pt-10 bg-red-200 px-2 flex md:flex-row flex-col items-center justify-center md:justify-between">
        <div className="flex md:w-1/2 relative w-full md:px-0 px-5 pb-20 flex-col gap-5">
          <div className="   absolute  md:bottom-[70px] bottom-14 right-0   md:w-1/2  ">
            <img
              src="/heroSectionImages/hearts.png"
              className=" object-cover  w-16 h-20"
              alt=""
            />
          </div>
          <h1 className="sm:text-5xl text-3xl font-semibold">About us</h1>
          <p className="lg:text-lg text-base leading-6 text-gray-500 tracking-wide">
            TriptoHoneymoon.com offers exclusive honeymoon packages for couples
            and promotes top wedding and event planners. We ensure unforgettable
            experiences, tailored to your desires. Discover romance and
            celebration with our expert team dedicated to crafting the perfect
            honeymoon journey and connecting you with the best event
            professionals.
          </p>
          <Button className="w-1/2" btnText={"Know More"} />
        </div>
        <div className="md:w-1/2 w-full px-1  relative  items-end justify-center flex gap-5">
          <div className=" sm:flex hidden absolute lg:top-16 lg:left-60   -top-10   ">
            <img
              src="/heroSectionImages/hearts.png"
              className=" object-cover  w-16 h-20"
              alt=""
            />
          </div>
          <div className="h-full sm:flex hidden w-full">
            <img
              className="lg:h-64 lg:ml-24 ml-0 h-full lg:mb-5 mb-0  lg:w-48 w-full rounded-t-full"
              src="https://images.unsplash.com/photo-1519307212971-dd9561667ffb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZXltb29ufGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="lg:h-full sm:flex hidden w-full h-full  ">
            <img
              className=" w-full h-full rounded-t-full"
              src="https://images.unsplash.com/photo-1576604303800-f2435c2db6bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbmV5bW9vbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
