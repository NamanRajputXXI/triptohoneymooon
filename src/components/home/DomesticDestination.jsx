"use client";
import React from "react";
import Button from "../global/Button";

const DomesticDestinationSection = () => {
  return (
    <section className=" max-w-7xl mx-auto  pb-10  md:pb-20 lg:pt-44">
      <div className="xl:mx-0 mx-6">
        <div className="xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center grid gap-5 w-full">
          <img
            src="https://images.unsplash.com/photo-1501901609772-df0848060b33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-full w-[280px] h-[280px] object-cover object-center sm:w-[300px] sm:h-[300px] place-self-center "
            alt=""
            loading="lazy"
          />
          <div className="bg-red-300 rounded-full py-5 px-5 md:px-10 place-self-center  h-[280px ] w-[280px] sm:h-[300px] sm:w-[300px] flex items-center justify-center ">
            <div className="w-full items-center justify-center  flex gap-3 flex-col">
              <h1 className="text-xxl font-semibold ">Romantic Goa</h1>
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
            className="rounded-full sm:w-[300px]  object-cover object-center sm:h-[300px] h-[280px] w-[280px] place-self-center "
            loading="lazy"
            alt=""
          />
          <div className="bg-red-300 rounded-full py-5 px-5 md:px-10 place-self-center  h-[280px] w-[280px]  sm:h-[300px] sm:w-[300px] flex items-center justify-center ">
            <div className="w-full items-center justify-center  flex gap-3 flex-col">
              <h1 className="text-xxl font-semibold ">Serene Kerala</h1>
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
