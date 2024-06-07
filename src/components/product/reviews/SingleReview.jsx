import React from "react";
import { FaStar } from "react-icons/fa6";

const SingleReview = () => {
  return (
    <div className="p-5 border-[1px] rounded-xl flex flex-col gap-5 border-gray-300 max-w-7xl mx-auto">
      <div className="flex w-full  justify-between">
        <div className="flex items-center gap-5">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_640.jpg"
            className="rounded-full w-10 h-10  object-cover object-center"
            alt=""
          />
          <div className="flex  flex-col">
            <p className="text-xl font-bold">Vinay Ojha</p>
            <p className="text-sm font-normal text-gray-500">
              Reviewed : 30 Oct 2023
            </p>
          </div>
        </div>
        <div className=" flex   gap-2 text-green-800">
          <FaStar color="green" size={20} />
          <p>5.0/5</p>
        </div>
      </div>
      <p className="text-gray-500 ">
        Booked :
        <span className=" text-black font-bold">
          Switzerland Honeymoon Package For 7 Days
        </span>
      </p>
      <p className="text-gray-700">
        The trip was the best... From the booking till the last day, the whole
        process was awesome... The operation spoc Kritik was super fab in all
        the coordination and arrangements... The best part was that he was
        available at all times... He was just a message away... The stay hotels,
        the travel arrangements, the food, the sight seeing was just breath
        taking... I did not want to come back, it was all soo wonderful... I
        have already recommended thrillophilia to many of my friends and I am
        definitely going to book my international trips with thrillophilia...
      </p>
      <div className="grid gap-3 grid-cols-4 lg:grid-cols-6">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/21/18/47/beach-2772913_640.jpg"
          className="object-cover rounded-xl object-center"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/09/21/18/47/beach-2772913_640.jpg"
          className="object-cover rounded-xl object-center"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/09/21/18/47/beach-2772913_640.jpg"
          className="object-cover rounded-xl object-center"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/09/21/18/47/beach-2772913_640.jpg"
          className="object-cover rounded-xl object-center"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/09/21/18/47/beach-2772913_640.jpg"
          className="object-cover lg:flex hidden rounded-xl object-center"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/09/21/18/47/beach-2772913_640.jpg"
          className="object-cover lg:flex hidden rounded-xl object-center"
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleReview;
