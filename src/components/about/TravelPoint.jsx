import React from "react";
import { MdOutlineDiscount } from "react-icons/md";

const TravelPoint = () => {
  return (
    <section className="sm:py-20  py-10">
      <div className="flex max-w-[1450px] md:flex-row flex-col items-center justify-between h-fit   gap-10">
        <div className="w-full">
          <div className="md:h-[500px] h-[350px] relative xl:w-[800px] lg:w-[600px] md:w-[450px] rounded-r-full bg-yellow-400">
            <img
              src="./aboutUsCouple.png"
              className="absolute object-cover lg:h-[850px] sm:h-[600px] lg:w-[550px] w-[300px] h-[400px] sm:w-[400px] bottom-0 md:left-0 sm:left-10 left-0 "
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 px-3">
          <h5 className="text-red-600 font-bold text-3xl">Travel Point</h5>
          <p className="text-4xl font-bold">
            We Helping You Find Your Dream Location
          </p>
          {/* <div className="flex items-center gap-2 text-xl px-5 py-3 bg-white rounded-2xl w-fit font-medium">
            <MdOutlineDiscount size={30} color="#ef4444" /> Discount Price
          </div> */}
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            magni qui aperiam hic facere alias nesciunt explicabo aliquam
            repudiandae autem!
          </p>
          {/* 
          <div className="grid gap-4 md:items-center md:justify-center items-center justify-center grid-cols-2 md:pr-5">
            <div className="flex bg-red-600 text-white  w-full  md:w-fit  h-fit px-5 py-5 sm:py-10 md:py-5  items-center justify-center rounded-2xl flex-col gap-3">
              <p>500+</p>
              <p>Honeymoon Packages</p>
            </div>
            <div className="flex bg-yellow-500 text-white w-full md:w-fit h-fit  px-5  py-5 sm:py-10 md:py-5  items-center justify-center rounded-2xl flex-col gap-3">
              <p>500+</p>
              <p>Honeymoon Packages</p>
            </div>
            <div className="flex bg-purple-900 text-white w-full md:w-fit h-fit  px-5  py-5 sm:py-10 md:py-5 items-center justify-center rounded-2xl flex-col gap-3">
              <p>500+</p>
              <p>Honeymoon Packages</p>
            </div>
            <div className="flex bg-pink-700 text-white w-full  md:w-fit h-fit  px-5 py-5 sm:py-10 md:py-5 items-center justify-center rounded-2xl flex-col gap-3">
              <p>500+</p>
              <p>Honeymoon Packages</p>
            </div>
          </div> */}
          <div className="grid gap-4 md:w-3/2 w-full h-fit place-items-stretch grid-cols-2 md:pr-5">
            <div className="flex bg-red-600 text-white w-full h-32 px-5 py-5 sm:py-10 md:py-5 items-center justify-center rounded-2xl flex-col gap-3 text-center">
              <p className="xl:text-5xl text-3xl font-bold">500+</p>
              <p className="sm:text-lg text-sm xl:text-xl">
                Honeymoon Packages
              </p>
            </div>
            <div className="flex bg-yellow-500 text-white w-full  h-32 px-5 py-5 sm:py-10 md:py-5 items-center justify-center rounded-2xl flex-col gap-3 text-center">
              <p className="xl:text-5xl text-3xl font-bold">100</p>
              <p className="sm:text-lg text-sm xl:text-xl">Luxury Hotels</p>
            </div>
            <div className="flex bg-purple-900 text-white w-full h-32 px-5 py-5 sm:py-10 md:py-5 items-center justify-center rounded-2xl flex-col gap-3 text-center">
              <p className="xl:text-5xl text-3xl font-bold">7</p>
              <p className="sm:text-lg text-sm xl:text-xl">Premium Airlines</p>
            </div>
            <div className="flex bg-pink-700 text-white w-full h-32 px-5 py-5 sm:py-10 md:py-5 items-center justify-center rounded-2xl flex-col gap-3 text-center">
              <p className="xl:text-5xl text-3xl font-bold">2k +</p>
              <p className="sm:text-lg text-sm xl:text-xl">Premium Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPoint;
