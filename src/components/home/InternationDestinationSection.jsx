"use client";
import React, { useEffect, useRef } from "react";
import Button from "../global/Button";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticCarouselData from "@/data/domesticCarouselData";
import popularCarouselData from "@/data/popularCarouselData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const InternationDestinationSection = () => {
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
    <section className="bg-red-100 h-fit  w-full py-10 sm:py-20">
      <div className="max-w-7xl pb-10 flex flex-col gap-10 mx-auto">
        <div className="flex w-full items-center justify-between px-5">
          <h5 className=" text-2xl">International Destination</h5>
          <Button btnText={"Explore All"} />
        </div>
      </div>
      <div className="flex relative h-fit py-20 w-full bg-[url('https://images.unsplash.com/photo-1497256654106-4a29efafb831?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
        <div className="absolute inset-0 h-full w-full bg-black bg-opacity-30"></div>
        <div className="flex gap-10">
          <div className=" relative gap-10 pl-10   z-10 flex flex-col text-white ">
            <h1 className="text-white text-7xl font-bold">
              Majestic Destinations
            </h1>
            <div className="flex w-full  gap-10">
              <div className="flex flex-col gap-10">
                <p className="w-[400px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  dicta nesciunt totam, sunt saepe corporis veniam illum dolor
                  accusamus et.
                </p>
                <Button btnText={"Explore Now >>"} />
              </div>

              <div className="mx-auto  xl:max-w-[1000px] lg:max-w-[800px] max-w-7xl px-6 sm:px-6     lg:ps-8 ">
                {/* <div className="max-w-7xl  sm:px-8 items-end justify-between sm:flex sm:pe-6 lg:pe-8">
                  <div className="mt-8 flex gap-4 lg:mt-0">
                    <button
                      aria-label="Previous slide"
                      onClick={handlePrevSlide}
                      className="rounded-full border   flex justify-center  items-center bg-[#ED9122] border-red-[#ED9122] p-3 text-rose-600 transition  hover:text-white"
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
                <div className=" z-[50]  lg:col-span-2   px-3 lg:mx-0">
                  <div className="relative flex gap-4">
                    <button
                      aria-label="Previous slide"
                      onClick={handlePrevSlide}
                      className="  absolute top-32  -left-6 z-[100]  flex justify-center  items-center"
                    >
                      <FaArrowLeftLong color="white" size={40} />
                    </button>
                    <button
                      aria-label="Next slide"
                      onClick={handleNextSlide}
                      className="flex justify-center  items-center absolute top-32  -right-6 z-[100] "
                    >
                      <FaArrowRightLong color="white" size={40} />
                    </button>
                  </div>

                  <div ref={sliderContainer} className="keen-slider">
                    {popularCarouselData.map((item, i) => (
                      <div className="keen-slider__slide" key={i}>
                        <Link href={item.link}>
                          <div className="flex flex-shrink-0 relative  w-full">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="object-cover z-50 rounded-2xl object-center h-72  w-full"
                            />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationDestinationSection;
