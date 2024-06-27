"use client";
import React from "react";
import Button from "../global/Button";

const DomesticDestinationSection = () => {
  return (
    <section className=" max-w-7xl mx-auto  pb-10  md:pb-20 lg:pt-44">
      <div className="xl:mx-0 mx-6">
        <div className="lg:grid-cols-2 grid-cols-1 place-items-center grid gap-20 w-full">
          <img
            src="https://images.unsplash.com/photo-1501901609772-df0848060b33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-full w-[280px] h-[280px] object-cover object-center sm:w-[400px] sm:h-[400px] place-self-center lg:place-self-end"
            alt=""
            loading="lazy"
          />
          <div className="bg-red-300 rounded-full py-5 px-5 md:px-10 place-self-center lg:place-self-start h-[280px ] w-[280px] sm:h-[400px] sm:w-[400px] flex items-center justify-center ">
            <div className="w-full items-center justify-center  flex gap-5 flex-col">
              <h1 className="text-2xl font-semibold ">Romantic Goa</h1>
              <p>
                Experience the perfect beach honeymoon with stunning sunsets and
                vibrant nightlife.
              </p>
              <p className="flex items-center  gap-2  text-xl">
                6000.00 <span className="text-red-600">Per head</span>
              </p>
              <div className="flex items-center gap-5">
                <Button btnText={"Book Now"} />
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1500771967326-9b2f6200d1c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            className="rounded-full sm:w-[400px]  object-cover object-center sm:h-[400px] h-[280px] w-[280px] place-self-center lg:place-self-end"
            loading="lazy"
            alt=""
          />
          <div className="bg-red-300 rounded-full py-5 px-5 md:px-10 place-self-center lg:place-self-start h-[280px] w-[280px]  sm:h-[400px] sm:w-[400px] flex items-center justify-center ">
            <div className="w-full items-center justify-center  flex gap-5 flex-col">
              <h1 className="text-2xl font-semibold ">Serene Kerala</h1>
              <p>
                Discover backwaters, lush landscapes, and romantic houseboat
                experiences in God Own Country.
              </p>
              <p className="flex m items-center gap-2 font-semibold text-xl">
                8000.00 <span className="text-red-600">Per head</span>
              </p>
              <div className="flex items-center gap-5">
                <Button btnText={"Book Now"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomesticDestinationSection;
