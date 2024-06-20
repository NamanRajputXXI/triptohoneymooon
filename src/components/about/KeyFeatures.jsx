import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { BiSolidDiscount } from "react-icons/bi";

const KeyFeatures = () => {
  return (
    <section className="sm:my-20 my-10">
      <div className="max-w-7xl h-full pb-20 mx-auto items-center px-6  gap-10 grid grid-cols-1 place-items-start place-content-center lg:grid-cols-2 ">
        <div className="flex w-full lg:items-start items-center lg:justify-start justify-center flex-col gap-10">
          <div className="flex lg:items-start lg:justify-center items-center justify-center flex-col gap-8">
            <h5 className="text-red-600 font-bold text-3xl">Travel Point</h5>
            <p className="text-4xl font-bold">We Offer Best Services</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            </p>
          </div>
          <div className="flex gap-10 flex-col">
            <div className="flex items-center gap-5">
              <div className="flex justify-center items-center rounded-xl p-5 bg-pink-800">
                <FaMapLocationDot size={30} color="white" />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold">We Offer Best Services</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex justify-center items-center rounded-xl p-5 bg-yellow-500">
                <BsCalendarDate size={30} color="white" />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold">We Offer Best Services</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae,
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex justify-center items-center rounded-xl p-5 bg-orange-600">
                <BiSolidDiscount size={30} color="white" />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold">We Offer Best Services</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:items-start items-center lg:justify-start justify-center h-full w-full relative flex-col">
          <div className="flex lg:items-start items-center lg:justify-start justify-center h-full w-full">
            <img
              src="https://cdn.pixabay.com/photo/2012/02/25/19/09/romantic-16955_1280.jpg"
              className="sm:w-4/5  w-full rounded-full lg:h-[700px] sm:h-[500px] h-[400px] object-cover"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-24 right-0 rounded-full  border-[20px] border-red-100">
            <img
              src="https://images.unsplash.com/photo-1550155864-3033f844da36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="xl:w-[300px] w-[200px] xl:h-[500px] lg:h-[400px] h-[280px] rounded-full object-cover"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
