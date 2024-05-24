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
              perView: 3, // Show 2 reviews on screens >= 768px
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
          "(min-width: 1296px)": {
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
    <section className="bg-red-100 w-full ">
      <div className="flex absolute sm:px-5 px-2  mt-[220px]  sm:mt-[248px] items-center justify-between w-full mx-auto ">
        <img
          src="/heroSectionImages/hearts.png"
          className=" object-cover rotate-45 sm:w-16 w-6 h-8 sm:h-20"
          alt=""
        />
        <img
          src="/heroSectionImages/hearts.png"
          className=" object-cover rotate-45  sm:w-16 w-6 h-8 sm:h-20"
          alt=""
        />
      </div>
      <div className="mx-auto sm:mt-[-150px] mt-[-100px] max-w-[1340px] px-4  sm:px-6  ">
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="max-w-7xl grid md:grid-cols-6 grid-cols-1 gap-5  md:gap-10 px-5 my-20  py-4 bg-white rounded-xl   items-center  mx-auto">
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <p className="text-lg justify-center md:flex hidden font-semibold">
              Find Your <br /> Holidays
            </p>
            <p className="text-lg md:hidden font-semibold">
              Find Your Holidays
            </p>
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
      </div>
    </section>
  );
};

export default HeroSectionCarousel;
