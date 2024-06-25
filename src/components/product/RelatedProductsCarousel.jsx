"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import domesticCarouselData from "@/data/domesticCarouselData";
import { IoCall } from "react-icons/io5";
const RelatedProductsCarousel = () => {
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
              perView: 3, // Show 4 reviews on screens >= 1024px
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
      <section className=" ">
        <div className="mx-auto max-w-[1340px]  pt-20 sm:pt-32     lg:ps-8 ">
          <div className="max-w-7xl  items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <h1 className="text-center font-bold   md:text-3xl text-2xl  ">
              Related Products
            </h1>
            <div className="mt-8 sm:flex hidden gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                onClick={handlePrevSlide}
                className="rounded-full border flex justify-center  items-center bg-gray-400 p-3 text-rose-600 transition  hover:text-white"
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
                className="rounded-full border bg-gray-400 p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
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
          </div>

          <div className=" sm:mt-16 mt-8 lg:col-span-2  lg:mx-0">
            <div ref={sliderContainer} className="keen-slider">
              {domesticCarouselData.map((item, i) => (
                <div className="keen-slider__slide" key={i}>
                  <Link href={item.link}>
                    <div className="flex flex-shrink-0 relative w-full ">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="object-cover rounded-xl object-center h-96 w-full "
                        loading="lazy"
                      />
                    </div>
                    <div className="flex w-full text-gray-500 px-1 mt-3 text-sm justify-between item-center">
                      <p className="">{item.days}</p>
                      <div className="flex items-center gap-2">
                        <FaStar color="green" />
                        4.8 (120)
                      </div>
                    </div>
                    <div className="flex w-full text-sm px-1 mt-3  justify-between item-center">
                      <p>{item.title}</p>
                    </div>
                    <div className="flex gap-3 mt-3 px-1 items-center">
                      <p className="text-sx font-bold">INR 87,999</p>
                      <p className="text-xs text-gray-500">INR 98,000</p>
                      <div className="bg-green-200 text-xs font-semibold text-green-900 px-2 py-1">
                        SAVE INR 33,100
                      </div>
                    </div>

                    <div className="flex gap-3 px-1 items-center">
                      <div className="flex items border-red-600 mt-3 border-[1px] px-3 rounded-xl center h-full py-2 ">
                        <IoCall size={32} color="red" />
                      </div>
                      <button className="flex w-full text-lg  mt-3  text-white bg-red-500 font-medium rounded-lg px-2 py-3 justify-center item-center">
                        Explore
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 items-center justify-center sm:hidden flex gap-4 lg:mt-0">
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
        </div>
      </section>
    </>
  );
};

export default RelatedProductsCarousel;
