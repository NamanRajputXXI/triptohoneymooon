import React from "react";
import { FaStar } from "react-icons/fa";
import RightSideSectionForm from "./RightSideSectionForm";
const RightSideSection = ({
  price,
  previousPrice,
  rating,
  totalCustomer,
  saveInr,
  heading,
}) => {
  return (
    <section className="flex order-1 flex-col gap-10">
      <div className="flex gap-5 flex-col px-3 py-5 rounded-2xl border-[1px] border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">
            INR {price}
            <span className="text-gray-400 pl-1 font-normal text-xs">
              per person
            </span>
          </p>
          <div className="flex items-center">
            <FaStar size={20} color="green" />
            {rating} <span>({totalCustomer})</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl line-through text-gray-600">
            INR {previousPrice}
          </p>
          <div className="flex items-center">
            <div className="flex items-center rounded-xl text-[10px] justify-center px-4 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              Monsoon SALE !
            </div>
          </div>
        </div>
        <hr className="bg-gray-200 h-[1px]" />
        <button className="bg-[#cf331a] w-full rounded-xl py-3 px-4 text-white">
          SEND EQUIRY
        </button>
      </div>
      <div className="flex gap-5 flex-col px-3 py-5 rounded-2xl border-[1px] border-gray-200">
        <p className="font-bold ">{heading}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl">
            INR {price}
            <span className="text-gray-400 line-through pl-2 font-normal text-xs">
              INR {previousPrice}
            </span>
          </p>
          <div className="bg-green-200 text-xs font-semibold text-green-900 px-2 py-1">
            SAVE INR {saveInr}
          </div>
        </div>
        <RightSideSectionForm />
      </div>
    </section>
  );
};

export default RightSideSection;
