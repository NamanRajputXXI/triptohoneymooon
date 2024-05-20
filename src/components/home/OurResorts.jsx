"use client";

import React, { useEffect, useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticCarouselData from "@/data/domesticCarouselData";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { FaRegHeart, FaStar } from "react-icons/fa";
const OurResorts = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1, // Default to 1 review visible
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 4, // Show 3 reviews on screens >= 1024px
              spacing: 12,
            },
          },
        },
      });
    }
  }, []);

  const handlePrevSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.prev();
    }
  };

  const handleNextSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.next();
    }
  };
  return (
    <section className="bg-red-100 py-20">
      <div className="mx-auto max-w-7xl px-5  ">
        <h1 className="text-5xl font-semibold mb-10">Our Resorts</h1>
        <div className="relative">
          <button
            className="absolute sm:flex hidden top-[35%] bg-white rounded-full p-3 -right-8 z-50 "
            aria-label="Next slide"
            onClick={handleNextSlide}
          >
            <FaArrowRightLong size={30} color="black" />
          </button>
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="absolute sm:flex hidden top-[35%] bg-white rounded-full p-3 -left-8 z-50 "
          >
            <FaArrowLeftLong size={30} color="black" />
          </button>

          <div ref={sliderContainer} className="keen-slider">
            {domesticCarouselData.map((item, i) => (
              <Link href={item.link} key={i}>
                <div
                  className="keen-slider__slide bg-white rounded-xl pb-3"
                  key={i}
                >
                  <div className="flex flex-col rounded-b-xl h-fit flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="object-cover rounded-t-xl object-center h-96 w-full md:w-96"
                    />
                    <div className="flex absolute top-5 right-5 z-50 justify-center items-center p-3 rounded-full bg-white">
                      <FaRegHeart color="#2e3190" size={20} />
                    </div>
                    <div className="rounded-xl bg-opacity-5 absolute w-full h-full py-6">
                      <div className="flex h-full items-end  relative pb-6">
                        <div className="text-xl gap-3  text-center flex items-center justify-center font-semibold absolute py-2 px-4  mx-4 rounded-xl bg-black bg-opacity-60 w-fit leading-5 lg:leading-7 text-white">
                          <FaStar color="#FFD700" size={20} /> 4.6
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3">
                    <p className="font-medum text-[#2e3190] font-bold">
                      The Yahami Resort
                    </p>
                    <p className="font-medum flex items-center justify-center gap-1 text-[#2e3190] font-bold">
                      {" "}
                      <IoLocationOutline color="#2e3190" size={20} />
                      Nepal
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center py-2 px-3">
                    <p className="font-medum text-[#2e3190] font-bold">
                      9847576356
                    </p>
                    <p className="font-medum flex items-center justify-center gap-1 text-[#2e3190] font-bold">
                      {" "}
                      <IoLocationOutline color="#2e3190" size={20} />
                      Nepal
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center py-2 px-3">
                    <p className="font-medum text-[#2e3190] font-bold">
                      9847576356
                    </p>
                    <p className="font-medum flex items-center justify-center gap-1 text-[#2e3190] font-bold">
                      {" "}
                      <IoLocationOutline color="#2e3190" size={20} />
                      Nepal
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 items-center justify-center sm:hidden flex gap-4 lg:mt-0">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full border flex justify-center  items-center bg-[black] border-red-[#ED9122] p-3 text-rose-600 transition  hover:text-white"
          >
            <FaArrowLeftLong size={20} color="white" />
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
            className="rounded-full border bg-[black]  p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
          >
            <FaArrowRightLong size={20} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurResorts;
