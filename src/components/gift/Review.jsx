import React from "react";
import { FaStar } from "react-icons/fa";
const Review = () => {
  return (
    <section className="md:py-20 px-5 py-10">
      <div className="max-w-7xl md:flex-row flex-col   items-center bg-purple-950 rounded-2xl mx-auto flex   md:p-10 p-5">
        <div className="flex-col gap-5 flex justify-center items-center  py-5">
          <p className="md:text-5xl text-white text-center sm:text-xl px-2   text-sm font-bold">
            “I love how easy it is to order and it makes everyone so happy.”
          </p>
          <p className="text-gray-300 sm:text-base text-sm sm:text-start text-center  font-bold flex items-center text-bold">
            Gayle, Google Reviewer
          </p>
          <div className="flex sm:flex-row flex-col sm:justify-start justify-center text-white text-xl sm:text-3xl font-bold gap-5 items-center">
            4.9
            <div className="flex gap-2 items-center">
              <FaStar color="#eab308" size={30} />
              <FaStar color="#eab308" size={30} />
              <FaStar color="#eab308" size={30} />
              <FaStar color="#eab308" size={30} />
              <FaStar color="#eab308" size={30} />
              <p className="font-medium text-sm sm:text-base">
                (1,089 Google Reviews)
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="giftReviewImage.png "
            className="object-cover sm:h-auto h-[200px] object-center"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Review;
