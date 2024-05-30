"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticCarouselData from "@/data/domesticCarouselData";
import { FaStar } from "react-icons/fa";

const TestimonialSlider = () => {
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
              perView: 1, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1, // Show 4 reviews on screens >= 1024px
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
      <section className=" pb-20 sm:pb-10 ">
        <div className="mx-auto relative  max-w-[1340px] px-5 sm:px-6     lg:ps-8 ">
          <div className="max-w-7xl relative hidden z-50 sm:px-8 items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <button
              aria-label="Previous slide"
              onClick={handlePrevSlide}
              className="rounded-full border absolute z-[100] md:top-48 sm:top-36 top-[400px] sm:left-0 flex justify-center  items-center bg-red-900 border-red-[#ED9122] p-6 text-rose-600 transition  hover:text-white"
            >
              <span className="inline-block h-7 w-7">
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
              className="rounded-full  bg-red-900  absolute z-[100] md:top-48 sm:top-36 top-[400px] sm:right-0 p-6 flex justify-center items-center text-rose-600 transition  hover:text-white"
            >
              <span className="inline-block h-7 w-7">
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

          <div className="  lg:col-span-2 sm:px-8   lg:mx-0">
            <div ref={sliderContainer} className="keen-slider">
              {domesticCarouselData.map((item, i) => (
                <div className="keen-slider__slide" key={i}>
                  <div className="flex flex-shrink-0 relative h-fit py-16  bg-white rounded-2xl w-auto">
                    <div className="flex w-full px-6 flex-col items-center   gap-5 h-full">
                      <img
                        src="https://cdn.pixabay.com/photo/2024/02/15/13/52/students-8575444_640.png"
                        alt=""
                        className="h-20 w-20 object-cover rounded-full"
                      />
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold text-center">
                          Mukesh Kapoor /
                        </p>
                        <p className="text-2xl font-bold text-red-600">
                          Kashmir
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaStar size={30} color="#eab308" />
                        <FaStar size={30} color="#eab308" />
                        <FaStar size={30} color="#eab308" />
                        <FaStar size={30} color="#eab308" />
                        <FaStar size={30} color="#eab308" />
                      </div>
                      <p className="md:w-2/3 w-full text-center md:text-xl text-base md:font-bold font-normal">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iure quisquam magnam, beatae magni laboriosam sed
                        dolor eum repudiandae ratione ab aliquam sequi vero,
                        enim voluptatibus nulla dolore libero expedita ad!
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl relative flex z-50 sm:px-8 items-end justify-center gap-5 mt-5 sm:hidden sm:pe-6 lg:pe-8">
            <button
              aria-label="Previous slide"
              onClick={handlePrevSlide}
              className="rounded-full border  z-[100] flex justify-center  items-center bg-red-900 border-red-[#ED9122] sm:p-6 p-4 text-rose-600 transition  hover:text-white"
            >
              <span className="inline-block h-7 w-7">
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
              className="rounded-full  bg-red-900  z-[100] sm:p-6 p-4 flex justify-center items-center text-rose-600 transition  hover:text-white"
            >
              <span className="inline-block h-7 w-7">
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
        </div>
      </section>
    </>
  );
};

export default TestimonialSlider;
