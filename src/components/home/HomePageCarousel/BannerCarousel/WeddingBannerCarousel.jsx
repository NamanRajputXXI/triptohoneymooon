import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const WeddingBannerCarousel = () => {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden h-32 sm:h-48  relative">
      <div
        className={`flex transition items-center  rounded-xl ease-out duration-500`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => {
          return (
            <img
              key={i}
              className="min-h-32 sm:min-h-48 w-full  object-cover"
              src={s}
              alt={`Slide ${i}`}
            />
          );
        })}
      </div>

      <div className="absolute top-0 sm:h-48 h-32 w-full justify-between items-center flex px-10 text-3xl">
        {/* <button onClick={previousSlide}>
          <FaArrowLeft color="white" size={20} />
        </button>
        <button onClick={nextSlide}>
          <FaArrowRight color="white" size={20} />
        </button> */}
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-2 h-2 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default WeddingBannerCarousel;
