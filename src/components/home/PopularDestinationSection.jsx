"use client";
import Button from "../global/Button";
import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import popularCarouselData from "@/data/popularCarouselData";
import Link from "next/link";
import { HiPlay } from "react-icons/hi2";
import { MdOutlineDiscount } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const PopularDestinationSection = () => {
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
              perView: 3, // Show 2 reviews on screens >= 768px
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
    <section className="w-full flex-col relative my-20 md:pt-20 mx-auto bg-red-100 ">
      <div className="   absolute  md:top-10 -top-3 z-10  sm:right-3  right-1  ">
        <img
          src="/heroSectionImages/hearts.png"
          className=" object-cover w-8 h-10   md:w-16 md:h-20"
          alt=""
        />
      </div>
      <div className=" lg:flex hidden z-10 absolute right-6 top-80  ">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/15/19/17/couple-8764348_1280.png"
          className="    md:w-72 md:h-[400px]"
          alt=""
        />
      </div>

      <h1 className=" md:text-5xl text-2xl text-center pb-10">
        Popular Destination
      </h1>
      <div className="flex lg:flex-row flex-col relative w-full">
        <div className="lg:w-1/2  relative w-full lg:h-[700px] md:h-[500px] h-[300px]">
          <img
            className="lg:h-[800px] object-cover md:h-[500px] h-[300px] w-full"
            src="https://images.unsplash.com/photo-1551083078-41faef705799?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHJvbWFudGljfGVufDB8fDB8fHww"
            alt=""
          />
          <HiPlay
            className="absolute lg:top-64  lg:-right-10 top-[38%] right-[38%] "
            size={80}
            color="#cf331a"
          />
        </div>
        <div className="lg:w-1/2 w-full bg-red-100 px-8 py-5 flex gap-5 flex-col">
          <h1 className="text-2xl font-semibold ">Place Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet
            voluptatum dolore et
          </p>
          <p className="flex items-center gap-2 font-semibold text-xl">
            4000.00 <span className="text-red-600">Per head</span>
          </p>
          <div className="flex items-center gap-5">
            <Button btnText={"Book Now"} />
            <button className="border-2 text-black font-semibold border-red-600 sm:py-2 py-1 px-4 rounded-xl flex justify-center items-center">
              Know More
            </button>
          </div>
        </div>
        <div className="lg:absolute  lg:-bottom-28 lg:right-0">
          <div className="mx-auto my-20 xl:max-w-[1000px] lg:max-w-[800px] max-w-7xl px-6 sm:px-6     lg:ps-8 ">
            {/* <div className="max-w-7xl sm:px-8 items-end justify-between sm:flex sm:pe-6 lg:pe-8">
              <div className="mt-8 flex gap-4 lg:mt-0">
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
            <div className=" mt-8 z-[50]  lg:col-span-2   px-3 lg:mx-0">
              <div ref={sliderContainer} className="keen-slider">
                {popularCarouselData.map((item, i) => (
                  <div className="keen-slider__slide" key={i}>
                    <Link href={item.link}>
                      <div className="flex flex-shrink-0 relative  w-full">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="object-cover z-50 rounded-2xl object-center h-[360px]  w-full"
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
    </section>
  );
};

export default PopularDestinationSection;
