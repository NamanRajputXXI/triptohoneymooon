"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticCarouselData from "@/data/domesticCarouselData";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
const HeroSectionCarousel = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        autoplay: true,
        slides: {
          origin: "center",
          perView: 1, // Default to 1 review visible
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 2, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 4, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 5, // Show 3 reviews on screens >= 1024px
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
    <section className="bg-red-100 px-5">
      <div className="mx-auto sm:mt-[-150px] mt-[-100px] max-w-[1340px] px-4  sm:px-6    lg:ps-8 ">
        {/* <div className="max-w-7xl sm:px-8 items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <div className="mt-8 sm:flex hidden gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={handlePrevSlide}
              className="rounded-full border flex justify-center  items-center bg-[#ED9122] border-red-[#ED9122] p-3 text-rose-600 transition  hover:text-white"
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
              className="rounded-full border bg-[#ED9122] border-[#ED9122] p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
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

        <div className="  lg:col-span-2 sm:px-8  px-3 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {domesticCarouselData.map((item, i) => (
              <Link href={item.link} key={i}>
                <div className="keen-slider__slide" key={i}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="object-cover rounded-xl object-center h-48 sm:h-60 w-full md:w-60"
                    />
                    {/* <div className=" rounded-xl bg-opacity-5 absolute w-full h-full py-6">
                      <div className="flex h-full items-end  relative pb-6">
                        <h3 className="text-xl lg:text-2xl text-center flex items-center justify-center font-semibold absolute h-16 bg-black bg-opacity-50 w-full leading-5 lg:leading-7 text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl grid md:grid-cols-6 grid-cols-1 gap-5 md:gap-10 px-5 mt-20  py-4 bg-white rounded-xl   items-center  mx-auto">
        <div className="col-span-2 md:col-span-1 flex justify-center">
          <p className="text-lg justify-center md:flex hidden font-semibold">
            Find Your <br /> Holidays
          </p>
          <p className="text-lg md:hidden font-semibold">Find Your Holidays</p>
        </div>
        <div className="col-span-2 md:border-l-2 md:border-gray-300 pl-8 flex items-center gap-5">
          <p>TO</p>
          <input type="text" className="bg-gray-200 w-full p-2" />
        </div>
        <div className="col-span-2  flex items-center gap-5">
          <p>FROM</p>
          <input type="text" className="bg-gray-200 w-full p-2" />
        </div>
        <div className=" flex col-span-2 md:col-span-1  justify-center md:border-l-2 md:p-2 md:border-gray-300  md:justify-end items-center gap-2 ">
          {/* <CiSearch className="lg:text-lg md:text-lg" /> */}
          <p className="text-lg font-semibold">Search</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionCarousel;
