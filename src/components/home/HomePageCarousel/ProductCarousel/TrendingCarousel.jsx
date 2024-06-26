"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import trendingCarouselData from "@/data/trendingCarouselData";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import PreviousButton from "@/components/global/Carousel/CarouselButton/PreviousButton";
import NextButton from "@/components/global/Carousel/CarouselButton/NextButton";
import CarouselImageLoader from "@/components/LazyLoading/CarouselImageLoader";

const TrendingCarousel = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 8,
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
              perView: 2,
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 4,
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
    <section>
      <div className="mx-auto md:py-20 py-10 max-w-[1340px] px-6 sm:px-6 lg:ps-8">
        <div className="max-w-7xl sm:px-8 items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h1 className="text-center md:text-5xl text-2xl">
            Trending Packages
          </h1>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <PreviousButton handlePrevSlide={handlePrevSlide} />
            <NextButton handleNextSlide={handleNextSlide} />
          </div>
        </div>

        <div className="sm:mt-16 mt-8 lg:col-span-2 sm:px-8 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {trendingCarouselData.map((item, i) => (
              <div className="keen-slider__slide" key={i}>
                <Link href={item.link}>
                  <div className="rounded-xl overflow-hidden">
                    <CarouselImageLoader
                      src={item.imageUrl}
                      alt={item.title}
                      className="object-cover w-full h-96 md:w-96"
                      containerClass="w-full h-96 md:w-96"
                    />
                  </div>
                  <div className="flex w-full text-gray-500 px-1 mt-3 text-sm justify-between items-center">
                    <p>{item.days}</p>
                    <div className="flex items-center gap-2">
                      <FaStar color="green" />
                      4.8 (120)
                    </div>
                  </div>
                  <div className="flex w-full text-sm px-1 mt-3 justify-between items-center">
                    <p>{item.title}</p>
                  </div>

                  <button className="flex w-full text-lg mt-3 text-white bg-red-500 font-medium rounded-lg px-2 py-3 justify-center items-center">
                    Explore
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCarousel;
