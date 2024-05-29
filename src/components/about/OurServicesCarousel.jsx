"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticCarouselData from "@/data/domesticCarouselData";
import Link from "next/link";
import { MdOutlineDiscount } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
const OurServicesCarousel = () => {
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
              perView: 2.5, // Show 4 reviews on screens >= 1024px
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
    <>
      <div className="mx-auto  max-w-7xl  ">
        {/* <div className="max-w-7xl sm:px-8 items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <div className="mt-8 flex gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                onClick={handlePrevSlide}
                className="rounded-full border flex justify-center  items-center bg-gray-400 border-red-[#ED9122] p-3 text-rose-600 transition  hover:text-white"
              >
                <span className="inline-block h-5 w-5">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="text-white" // Apply 'text-black' class directly here
                  >
                    <path
                      fill="currentColor"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </span>
              </button>
              <button
                aria-label="Next slide"
                onClick={handleNextSlide}
                className="rounded-full  bg-gray-400  p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
              >
                <span className="inline-block h-5 w-5">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="text-white" // Change this class to 'text-black'
                  >
                    <path
                      fill="currentColor"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div> */}

        <div className="   sm:px-8   lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {domesticCarouselData.map((item, i) => (
              <div className="keen-slider__slide" key={i}>
                <Link href={item.link}>
                  <div className="flex flex-shrink-0 sm:px-0 px-5  relative w-full sm:w-auto">
                    <div className="bg-white gap-5  flex items-center justify-between flex-col py-5 px-5 rounded-xl  h-64 w-full md:w-[500px]">
                      <MdOutlineTravelExplore size={40} color="purple" />
                      <p className="font-bold text-2xl">Best Tour Guide</p>
                      <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam, dignissimos explicabo vel ut voluptatibus,
                        ipsa,
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServicesCarousel;
