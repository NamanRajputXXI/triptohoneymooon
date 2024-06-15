"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const ItineraryCarousel = ({ itineraryCarousel, days, destination }) => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 0,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1,
              spacing: 8,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 1,
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1,
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
    <div className="mx-auto max-w-[1340px] relative">
      {/* Carousel Buttons */}
      <div className="absolute inset-y-0 flex items-center justify-between w-full px-4 z-10">
        <button
          aria-label="Previous slide"
          onClick={handlePrevSlide}
          className="rounded-full flex justify-center items-center bg-black bg-opacity-60 border-[1px] border-white p-3 text-rose-600 transition hover:text-white"
        >
          <span className="inline-block h-5 w-5">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="text-white"
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
          className="rounded-full bg-black bg-opacity-60 border-[1px] p-3 flex justify-center items-center text-rose-600 transition hover:text-white"
        >
          <span className="inline-block h-5 w-5">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className=" flex left-3 items-center gap-2 absolute z-[50] bottom-3  text-white font-extrabold">
        <p className="text-5xl">{days}</p>
        <div className="flex flex-col ">
          <p className="text-sm font-normal">Days in</p>
          <p className="text-lg">{destination}</p>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="lg:col-span-2">
        <div ref={sliderContainer} className="keen-slider">
          {itineraryCarousel.map((item, i) => (
            <div className="keen-slider__slide" key={i}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <div className="absolute w-full h-full rounded-xl bg-black bg-opacity-30"></div>
                <img
                  src={item}
                  alt="image"
                  className="object-cover rounded-xl object-center h-80 w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryCarousel;
