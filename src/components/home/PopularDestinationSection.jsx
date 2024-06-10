import Button from "../global/Button";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import popularCarouselData from "@/data/popularCarouselData";
import Link from "next/link";
import { HiPlay, HiPause } from "react-icons/hi";

const VideoPlayer = ({ src, isPlaying, setIsPlaying }) => {
  const [isLoaded, setIsLoaded] = useState(undefined);

  const handlePlayPause = () => {
    const video = document.getElementById("videoPlayer");
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoLoadStart = () => {
    console.log("Video load started");
    setIsLoaded(false);
  };

  const handleVideoCanPlay = () => {
    console.log("Video can play");
    setIsLoaded(true);
  };

  const handleVideoError = (e) => {
    console.error("Video error:", e);
    setIsLoaded(undefined);
  };

  useEffect(() => {
    const video = document.getElementById("videoPlayer");
    if (!isPlaying) {
      video.pause();
    }
  }, [isPlaying, src]);

  return (
    <div className="lg:w-1/2 relative w-full lg:h-[700px] md:h-[500px] h-[300px]">
      {isLoaded === false && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-pink-100">
          <video
            src="https://cdn.pixabay.com/video/2023/02/17/151030-799903854_large.mp4"
            className="h-full w-full"
            autoPlay
            loop
            muted
          />
        </div>
      )}
      <video
        id="videoPlayer"
        className="lg:h-[800px] lg:rounded-r-2xl object-cover md:h-[500px] h-[300px] w-full"
        src={src}
        autoPlay={isPlaying}
        loop
        muted
        onLoadStart={handleVideoLoadStart}
        onCanPlay={handleVideoCanPlay}
        onError={handleVideoError}
      />
      {isPlaying ? (
        <HiPause
          className="absolute lg:top-64 lg:-right-10 top-[38%] right-[38%]"
          size={80}
          color="#cf331a"
          onClick={handlePlayPause}
        />
      ) : (
        <HiPlay
          className="absolute lg:top-64 lg:-right-10 top-[38%] right-[38%]"
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
  const [selectedItem, setSelectedItem] = useState(popularCarouselData[0]);
  const [isPlaying, setIsPlaying] = useState(true);

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
              perView: 3,
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 3,
              spacing: 12,
            },
          },
          "(min-width: 1624px)": {
            slides: {
              origin: "auto",
              perView: 3,
              spacing: 12,
            },
          },
        },
      });

      keenSlider.current.on("slideChanged", () => {
        const currentSlide = keenSlider.current.track.details.rel;
        console.log("Slide changed to:", currentSlide);
        setSelectedItem(popularCarouselData[currentSlide]);
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
    <section className="w-full flex-col h-fit py-10 relative md:py-20 mx-auto bg-red-100">
      <div className="absolute md:top-10 -top-3 z-10 sm:right-3 right-1">
        <img
          src="/heroSectionImages/hearts.png"
          className="object-cover w-8 h-10 md:w-16 md:h-20"
          alt=""
        />
      </div>
      <div className="z-10 absolute sm:bottom-80 bottom-[300px] right-0 sm:right-10 lg:right-10 lg:bottom-36 md:right-10 md:bottom-60">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/15/19/17/couple-8764348_1280.png"
          className="h-60 w-40 md:w-72 md:h-[400px]"
          alt=""
        />
      </div>

      <h1 className="md:text-5xl text-2xl text-center pb-10">
        Popular Destination
      </h1>
      <div className="flex rounded-2xl lg:flex-row flex-col relative w-full">
        <VideoPlayer
          src={selectedItem.videoUrl}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <div className="lg:w-1/2 w-full bg-red-100 px-8 py-5 flex gap-5 flex-col">
          <h1 className="text-2xl font-semibold">{`Explore ${selectedItem.destination}`}</h1>
          <p>{selectedItem.title}</p>
          <ul className="list-disc px-5 text-gray-800">
            <li>Candle Night Dinner</li>
            <li>Free Ride</li>
            <li>Flower Decoration</li>
          </ul>
          <div className="flex items-center gap-5">
            <Button btnText={"Book Now"} />
          </div>
        </div>
        <div className="lg:absolute z-10 lg:-bottom-28 lg:right-0">
          <div className="mx-auto my-20 popular-destination-carousel 5xl:max-w-[1800px] 4xl:max-w-[1660px] 3xl:max-w-[1440px] 2xl:max-w-[1150px] xl:max-w-[1000px] lg:max-w-[800px] max-w-7xl px-6 sm:px-6 lg:ps-8">
            <div className="mt-8 relative z-10 lg:col-span-2 px-3 lg:mx-0">
              <div className="mt-8 absolute -bottom-14 z-[50] flex gap-4 lg:mt-0">
                <button
                  aria-label="Previous slide"
                  onClick={handlePrevSlide}
                  className="rounded-full border flex justify-center  items-center bg-red-600 p-3 text-rose-600 transition  hover:text-white"
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
                  className="rounded-full  bg-red-600 p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
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
