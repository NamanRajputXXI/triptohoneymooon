import React from "react";
import { FaStar } from "react-icons/fa6";

const SingleReview = ({ review }) => {
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
            <p className="text-xl font-bold">{review.name}</p>
            <p className="text-sm font-normal text-gray-500">
              Reviewed : {review.date}
            </p>
          </div>
        </div>
        <div className=" flex   gap-2 text-green-800">
          <FaStar color="green" size={20} />
          <p>{review.rating}/5</p>
        </div>
      </div>
      <p className="text-gray-500 ">
        Booked :
        <span className=" text-black font-bold">{review.packageName}</span>
      </p>
      <p className="text-gray-700">{review.review}</p>
      <div className="grid gap-3 grid-cols-4 lg:grid-cols-6">
        {review.imageGallary.map((image, i) => (
          <img
            key={i}
            src={image}
            className="object-cover lg:flex hidden rounded-xl object-center"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default SingleReview;
