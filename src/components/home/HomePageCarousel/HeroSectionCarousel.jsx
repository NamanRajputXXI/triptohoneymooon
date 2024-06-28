"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticCarouselData from "@/data/domesticCarouselData";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import DestinationSearchBar from "../DestinationSearchBar";
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
              perView: 1, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 420px)": {
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
    <section className=" w-full md:pb-20 pb-10 ">
      <div className="flex absolute sm:px-5 px-2  mt-[220px]  sm:mt-[280px] items-center justify-between w-full mx-auto ">
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
                      loading="lazy"
                    />
                    <div className=" rounded-xl bg-opacity-5 absolute w-full h-full py-3">
                      <div className="flex h-full items-end  relative pb-6">
                        <h3 className="text-xl lg:text-2xl text-center flex items-center justify-center font-semibold absolute h-12 bg-black bg-opacity-50 w-full leading-5 lg:leading-7 text-white">
                          {item.destinaion}
                        </h3>
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

export default HeroSectionCarousel;
