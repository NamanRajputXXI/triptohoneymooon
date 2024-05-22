"use client";
import React, { useEffect, useRef } from "react";
import Button from "../global/Button";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticCarouselData from "@/data/domesticCarouselData";
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
    <section className="bg-red-100 h-[650px] w-full py-10 sm:py-20">
      <div className="max-w-7xl pb-10 flex flex-col gap-10 mx-auto">
        <div className="flex w-full items-center justify-between px-5">
          <h5 className=" text-2xl">International Destination</h5>
          <Button btnText={"Explore All"} />
        </div>
      </div>
      <div className="flex relative h-full w-full bg-[url('https://images.unsplash.com/photo-1497256654106-4a29efafb831?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
        <div className="absolute inset-0 h-full w-full bg-black bg-opacity-30"></div>
        <div className="flex gap-10">
          <div className=" relative gap-10 pl-10 pt-10  z-10 flex flex-col text-white ">
            <h1 className="text-white text-7xl font-bold">
              Majestic Destinations
            </h1>
            <div className="flex max-w-7xl mx-auto justify-between gap-10">
              <div className="flex flex-col gap-10">
                <p className="w-[400px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  dicta nesciunt totam, sunt saepe corporis veniam illum dolor
                  accusamus et.
                </p>
                <Button btnText={"Explore Now >>"} />
              </div>

              {/* <div className="mx-auto  xl:max-w-[800px] px-4 max-w-[700px]   sm:px-6    lg:ps-8 ">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationDestinationSection;
