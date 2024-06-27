"use client";
import React, { useEffect, useRef } from "react";
import Button from "../global/Button";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticCarouselData from "@/data/domesticCarouselData";
import popularCarouselData from "@/data/popularCarouselData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const CarouselImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover rounded-2xl ${className}`}
      loading="lazy"
    />
  );
};

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
          "(min-width: 640px)": {
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
              perView: 3, // Show 3 reviews on screens >= 1024px
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
    <section className=" md:flex-row flex-col flex md:gap-5 h-fit w-full  py-10 sm:py-20">
      <div className="flex relative md:w-2/3 w-full justify-between md:rounded-r-2xl gap-10 flex-col h-fit py-10  bg-[url('https://images.unsplash.com/photo-1497256654106-4a29efafb831?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
        <div className="absolute inset-0 md:rounded-r-2xl h-full w-full bg-black bg-opacity-40"></div>
        <div className="flex gap-10">
          <div className=" relative w-1/2 md:gap-10 gap-5 px-6 md:px-0 md:pl-10 z-10 flex flex-col text-white ">
            <h1 className="text-white text-4xl md:text-7xl  font-bold">
              Majestic Destinations
            </h1>
            <div className="flex w-full relative gap-5">
              <div className="flex flex-col w-full gap-10">
                <p className="md:w-[400px] w-[280px] ">
                  Explore breathtaking honeymoon destinations. Create
                  unforgettable memories with tailored packages for romantic
                  getaways.
                </p>
                <Button btnText={"Explore Now >>"} />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-6  z-[100]   w-full lg:ps-8">
          <div className=" z-[50] lg:col-span-2 px-3 lg:mx-0">
            <div className="relative flex gap-4">
              <button
                aria-label="Previous slide"
                onClick={handlePrevSlide}
                className="  absolute xl:top-32  md:top-28 top-36 -left-5 md:-left-6 z-[100]  flex justify-center  items-center"
              >
                <div className="md:flex hidden ">
                  <FaArrowLeftLong color="white" size={40} />
                </div>
                <div className="md:hidden flex">
                  <FaArrowLeftLong color="white" size={20} />
                </div>
              </button>
              <button
                aria-label="Next slide"
                onClick={handleNextSlide}
                className="flex justify-center  items-center absolute xl:top-32 md:top-28 top-36 -right-5 md:-right-6 z-[100] "
              >
                <div className="md:flex hidden ">
                  <FaArrowRightLong color="white" size={40} />
                </div>
                <div className="md:hidden flex ">
                  <FaArrowRightLong color="white" size={20} />
                </div>
              </button>
            </div>

            <div ref={sliderContainer} className="keen-slider">
              {popularCarouselData.map((item, i) => (
                <div className="keen-slider__slide" key={i}>
                  <Link href={item.link}>
                    <div className="flex flex-shrink-0 relative w-full">
                      <CarouselImage
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-[300px]  lg:h-[300px]"
                        loading="lazy"
                      />
                      <div className=" rounded-xl bg-opacity-5 absolute w-full h-full py-3">
                        <div className="flex h-full items-end  relative pb-6">
                          <h3 className="text-xl lg:text-2xl text-center flex items-center justify-center font-semibold absolute h-12 bg-black bg-opacity-50 w-full leading-5 lg:leading-7 text-white">
                            {item.destination}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:gap-10 px-5 md:px-10 md:py-10 py-5 md:rounded-l-2xl flex-col md:w-1/3 w-full h-full gap-5 3xl:h-[685px]  md:h-[760px] bg-red-900 justify-center">
        <div className="flex  w-full text-white flex-col justify-center gap-10">
          <p className="text-xl">Company Name</p>
          <p className="sm:text-4xl font-medium text-2xl">Event Planner</p>
        </div>
        <div className=" w-full ">
          <img
            className="w-full h-96 rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfDF8MHx8fDA%3D"
            alt=""
          />
        </div>
        <button className="sm:px-8 px-4 py-1  sm:py-2 sm:w-36 w-28 flex items-center text-black justify-center bg-red-200 rounded-lg">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default InternationDestinationSection;
