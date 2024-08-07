import Button from "../global/Button";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import popularCarouselData from "@/data/popularCarouselData";
import Link from "next/link";
import PreviousButton from "../global/Carousel/CarouselButton/PreviousButton";
import NextButton from "../global/Carousel/CarouselButton/NextButton";

const VideoPlayer = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

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

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="lg:w-1/2 relative w-full lg:h-[700px] md:h-[500px] h-[300px]">
      {isLoaded === false && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
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
        ref={videoRef}
        id="videoPlayer"
        className="lg:h-[800px] lg:rounded-r-2xl object-cover md:h-[500px] h-[300px] w-full cursor-pointer"
        src={src}
        autoPlay
        loop
        muted
        onClick={togglePlayPause}
        onLoadStart={handleVideoLoadStart}
        onCanPlay={handleVideoCanPlay}
        onError={handleVideoError}
      />
    </div>
  );
};

const PopularDestinationSection = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const [selectedItem, setSelectedItem] = useState(popularCarouselData[0]);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        dragSpeed: false,
        drag: false,
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
    <section className="w-full flex-col h-fit py-10 relative md:py-20 mx-auto">
      <div className="absolute md:top-10 -top-3 z-10 sm:right-3 right-1">
        <img
          src="/heroSectionImages/hearts.png"
          className="object-cover w-8 h-10 md:w-16 md:h-20"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="z-10 absolute sm:bottom-80 bottom-[300px] right-0 sm:right-10 lg:right-10 lg:bottom-36 md:right-10 md:bottom-60">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/15/19/17/couple-8764348_1280.png"
          className="h-60 w-40 md:w-72 md:h-[400px]"
          alt=""
          loading="lazy"
        />
      </div>

      <h1 className="md:text-5xl text-2xl text-center pb-10">
        Popular Destination
      </h1>
      <div className="flex rounded-2xl lg:flex-row flex-col relative w-full">
        <VideoPlayer src={selectedItem.videoUrl} />
        <div className="lg:w-1/2 w-full  px-8 py-5 flex gap-5 flex-col">
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
              <div className="lg:flex hidden absolute -left-24 top-44 flex-row gap-2">
                <PreviousButton handlePrevSlide={handlePrevSlide} />
                <NextButton handleNextSlide={handleNextSlide} />
              </div>
              <div className="flex lg:hidden gap-4 mb-4">
                <PreviousButton handlePrevSlide={handlePrevSlide} />
                <NextButton handleNextSlide={handleNextSlide} />
              </div>
              <div
                ref={sliderContainer}
                className="keen-slider bg-white rounded-2xl"
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
