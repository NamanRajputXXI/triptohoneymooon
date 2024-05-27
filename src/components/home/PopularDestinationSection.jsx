import Button from "../global/Button";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import popularCarouselData from "@/data/popularCarouselData";
import Link from "next/link";
import { HiPlay, HiPause } from "react-icons/hi";

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    const video = document.getElementById("videoPlayer");
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="lg:w-1/2  relative w-full lg:h-[700px] md:h-[500px] h-[300px]">
      <video
        id="videoPlayer"
        className="lg:h-[800px] lg:rounded-r-2xl object-cover md:h-[500px] h-[300px] w-full"
        src={src}
        autoPlay
        loop
        muted
      />
      {isPlaying ? (
        <HiPause
          className="absolute lg:top-64  lg:-right-10 top-[38%] right-[38%] "
          size={80}
          color="#cf331a"
          onClick={handlePlayPause}
        />
      ) : (
        <HiPlay
          className="absolute lg:top-64  lg:-right-10 top-[38%] right-[38%] "
          size={80}
          color="#cf331a"
          onClick={handlePlayPause}
        />
      )}
    </div>
  );
};

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
          "(min-width: 1624px)": {
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

  return (
    <section className="w-full flex-col  h-fit py-10 relative  md:py-20    mx-auto bg-red-100 ">
      <div className="   absolute md:top-10 -top-3 z-10  sm:right-3  right-1  ">
        <img
          src="/heroSectionImages/hearts.png"
          className=" object-cover w-8 h-10 md:w-16 md:h-20"
          alt=""
        />
      </div>
      <div className="  z-10 absolute sm:bottom-80 bottom-[300px]  right-0 sm:right-10 lg:right-10 lg:bottom-36 md:right-10 md:bottom-60   ">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/15/19/17/couple-8764348_1280.png"
          className="  h-60 w-40  md:w-72 md:h-[400px]"
          alt=""
        />
      </div>

      <h1 className=" md:text-5xl text-2xl text-center pb-10">
        Popular Destination
      </h1>
      <div className="flex rounded-2xl lg:flex-row flex-col relative w-full">
        <VideoPlayer
          src="https://cdn.pixabay.com/video/2023/01/15/146632-789534284_large.mp4"
          className="rounded-2xl"
        />
        <div className="lg:w-1/2 w-full bg-red-100 px-8 py-5 flex gap-5 flex-col">
          <h1 className="text-2xl font-semibold ">Exlore Kashmir</h1>
          <p>
            Romantic Kashmir: Unforgettable Honeymoon Getaway in the Himalayas
          </p>
          <p className="flex items-center gap-2 font-semibold text-xl">
            8000 <span className="text-red-600">Per head</span>
          </p>
          <div className="flex items-center gap-5">
            <Button btnText={"Book Now"} />
            <button className="border-2 text-black font-semibold border-red-600 sm:py-2 py-1 px-4 rounded-xl flex justify-center items-center">
              Know More
            </button>
          </div>
        </div>
        <div className="lg:absolute z-10  lg:-bottom-28 lg:right-0">
          <div className="mx-auto my-20 popular-destination-carousel 2xl:max-w-[1150px] xl:max-w-[1000px] lg:max-w-[800px] max-w-7xl px-6 sm:px-6     lg:ps-8 ">
            <div className=" mt-8 z-10 lg:col-span-2 px-3 lg:mx-0">
              <div
                ref={sliderContainer}
                className="keen-slider bg-red-100 rounded-2xl"
              >
                {popularCarouselData.map((item, i) => (
                  <div className="keen-slider__slide" key={i}>
                    <Link href={item.link}>
                      <div className="flex flex-shrink-0 relative w-full">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="object-cover z-50 rounded-2xl object-center h-[360px] w-full"
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
