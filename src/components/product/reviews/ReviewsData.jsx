import React from "react";
import { FaStar } from "react-icons/fa";
const ReviewsData = ({ totalCustomer, rating }) => {
  return (
    <section className=" my-10">
      <div className="max-w-7xl flex flex-col gap-8 mx-auto p-5">
        <p className="text-xl font-bold">Reviews({totalCustomer})</p>
        <div className="flex   flex-col md:flex-row lg:w-[80%] w-full gap-20">
          <div className="flex flex-col  gap-3 items-center">
            <div className="flex items-center gap-2">
              <FaStar size={20} color="green" />
              <FaStar size={30} color="green" />
              <FaStar size={40} color="green" />
              <FaStar size={30} color="green" />
              <FaStar size={20} color="green" />
            </div>
            <p className="text-5xl font-extrabold text-green-800">{rating}</p>
            <p className="text-xl  underline  text-green-800">
              From 65+ countries
            </p>
          </div>
          <div className="flex border-l-[1px] border-gray-400 pl-10 flex-col w-full">
            <div className="flex text-xl  text-gray-700  gap-3 items-center w-full">
              5 <FaStar color="orange" size={20} />
              <div className="h-2 w-full rounded-xl bg-neutral-200 dark:bg-neutral-600">
                <div
                  className="h-2 rounded-xl bg-primary bg-red-600"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div className="flex text-xl  text-gray-700  gap-3 items-center">
              4 <FaStar color="orange" size={20} />
              <div className="h-2 rounded-xl  w-full bg-neutral-200 dark:bg-neutral-600">
                <div
                  className="h-2 rounded-xl  bg-primary bg-red-600"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="flex text-xl  text-gray-700  gap-3 items-center">
              3 <FaStar color="orange" size={20} />
              <div className="h-2 rounded-xl  w-full bg-neutral-200 dark:bg-neutral-600">
                <div
                  className="h-2 rounded-xl  bg-primary bg-red-600"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>
            <div className="flex text-xl  text-gray-700  gap-3 items-center">
              2 <FaStar color="orange" size={20} />
              <div className="h-2 rounded-xl  w-full bg-neutral-200 dark:bg-neutral-600">
                <div
                  className="h-2 rounded-xl  bg-primary bg-red-600"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
            <div className="flex text-xl  text-gray-700  gap-3 items-center">
              1 <FaStar color="orange" size={20} />
              <div className="h-2 rounded-xl  w-full bg-neutral-200 dark:bg-neutral-600">
                <div
                  className="h-2 rounded-xl  bg-primary bg-red-600"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsData;
