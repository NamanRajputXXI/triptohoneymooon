import React from "react";
import { FaStar } from "react-icons/fa";
import RightSideSectionForm from "./RightSideSectionForm";
const RightSideSection = () => {
  return (
    <section className="flex order-1 flex-col gap-10">
      <div className="flex gap-5 flex-col px-3 py-5 rounded-2xl border-[1px] border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">
            INR 99,800
            <span className="text-gray-400 font-normal text-xs">
              per person
            </span>
          </p>
          <div className="flex items-center">
            <FaStar size={20} color="green" />
            4.7 <span>(531)</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl line-through text-gray-600">INR 1,32,900</p>
          <div className="flex items-center">
            <div className="flex items-center rounded-xl text-[10px] justify-center p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              SUMMER SALE !
            </div>
          </div>
        </div>
        <hr className="bg-gray-200 h-[1px]" />
        <button className="bg-[#cf331a] w-full rounded-xl py-3 px-4 text-white">
          SEND EQUIRY
        </button>
      </div>
      <div className="flex gap-5 flex-col px-3 py-5 rounded-2xl border-[1px] border-gray-200">
        <p className="font-bold ">
          Glimpse Of Switzerland | FREE FIFA Museum Tickets
        </p>
        <div className="flex items-center justify-between">
          <p>
            INR 99,800{" "}
            <span className="text-gray-400 font-normal text-xs">
              INR 1,32,900
            </span>
          </p>
          <div className="bg-green-200 text-xs font-semibold text-green-900 px-2 py-1">
            SAVE INR 33,100
          </div>
        </div>
        <RightSideSectionForm />
      </div>
    </section>
  );
};

export default RightSideSection;
