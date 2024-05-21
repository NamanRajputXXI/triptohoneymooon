"use client";
import Button from "../global/Button";
import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import popularCarouselData from "@/data/popularCarouselData";
import Link from "next/link";
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
          perView: 2, // Default to 1 review visible
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
    <section className="w-full md:flex hidden flex-col  my-20 pt-20 mx-auto bg-red-100 ">
      <h1 className=" md:text-5xl text-2xl text-center pb-20">
        Popular Destination
      </h1>
      <div className="flex relative w-full">
        <div className="w-1/2 h-[700px]">
          <img
            className="h-[700px] w-full"
            src="https://images.unsplash.com/photo-1551083078-41faef705799?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHJvbWFudGljfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="w-1/2 bg-red-100 px-8 py-5 flex gap-5 flex-col">
          <h1 className="text-2xl font-semibold ">Place Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet
            voluptatum dolore et delectus neque ad repellat modi, nihil maxime?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            veritatis.
          </p>
          <p className="flex items-center gap-2 font-semibold text-xl">
            4000.00 <span className="text-red-600">Per head</span>
          </p>
          <div className="flex items-center gap-5">
            <Button btnText={"Book Now"} />
            <button className="border-2 text-black font-semibold border-red-600 py-2 px-4 rounded-xl flex justify-center items-center">
              Know More
            </button>
          </div>
        </div>
        <div className="absolute  -bottom-8 right-0">
          <div className="mx-auto my-20 xl:max-w-[1000px] lg:max-w-[800px] max-w-[700px] px-4 sm:px-6     lg:ps-8 ">
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

            <div className=" mt-16  lg:col-span-2   px-3 lg:mx-0">
              <div ref={sliderContainer} className="keen-slider">
                {popularCarouselData.map((item, i) => (
                  <div className="keen-slider__slide" key={i}>
                    <Link href={item.link}>
                      <div className="flex flex-shrink-0 relative w-full  sm:w-72">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="object-cover rounded-2xl object-center h-72 w-full md:w-72"
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
