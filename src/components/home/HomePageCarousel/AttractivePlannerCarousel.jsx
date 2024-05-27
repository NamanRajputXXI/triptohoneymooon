"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
const plannerBanners = [
  {
    imageUrl: `https://images.unsplash.com/photo-1552260877-1a9b447ea294?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwaW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D`,
    title: "Bhutan",
    link: "/products/bhutan",
  },
  {
    imageUrl: `https://images.unsplash.com/photo-1607076491230-c19d278071ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D`,
    title: "Bangladesh",
    link: "/product-category/international/bangladesh",
  },
  {
    imageUrl: `https://images.unsplash.com/photo-1639798479313-20c174cfc5ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0aWZ1bCUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D`,
    title: "Mauritious",
    link: "/product-category/international/mauritious",
  },
  {
    imageUrl: `https://images.unsplash.com/photo-1552260877-1a9b447ea294?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwaW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D`,
    title: "Switzerland",
    link: "/product-category/international/switzerland",
  },
  {
    imageUrl: `https://images.unsplash.com/photo-1639798479313-20c174cfc5ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0aWZ1bCUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D`,
    title: "Dubai",
    link: "/products/dubai",
  },
];
import Link from "next/link";
const AttractivePlannerCarousel = () => {
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
              perView: 2.5, // Show 3 reviews on screens >= 1024px
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
    <section className="">
      <div className="mx-auto max-w-[1340px] px-4 my-10 sm:my-20 sm:px-6    lg:ps-8 ">
        <div className="max-w-7xl sm:px-8 items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h1 className="text-center   md:text-5xl text-2xl  ">
            Attractive Planner
          </h1>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={handlePrevSlide}
              className="rounded-full border flex justify-center  items-center bg-gray-500 p-3 text-rose-600 transition  hover:text-white"
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
              className="rounded-full  bg-gray-500  p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
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

        <div className=" sm:mt-16 mt-8 lg:col-span-2 sm:px-8  px-3 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {plannerBanners.map((item, i) => (
              <Link href={item.link} key={i}>
                <div className="keen-slider__slide" key={i}>
                  <div className="flex flex-shrink-0 rounded-2xl relative w-full sm:w-auto">
                    <div className="flex rounded-2xl sm:pl-4  pl-0  sm:gap-0 gap-5 sm:flex-row flex-col items-center w-full h-72 bg-red-900 justify-between">
                      <div className="flex sm:w-1/2 w-full p-4 text-white flex-col  justify-center gap-3">
                        {/* <p className="text-sm">Company Name</p> */}
                        <p className="sm:text-2xl text-xl">Wedding Planner</p>
                        <button className="sm:px-8 px-4 py-1  sm:py-2 sm:w-36 w-28 flex items-center text-black justify-center bg-red-200 rounded-lg">
                          Book Now
                        </button>
                      </div>
                      <div className="sm:w-1/2  w-full  h-full">
                        <img
                          className="w-full h-full rounded-r-2xl object-cover"
                          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfDF8MHx8fDA%3D"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractivePlannerCarousel;
