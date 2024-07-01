import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const WeddingBannerCarousel = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleVisibility}
        className="absolute top-1 right-1 z-10 bg-white bg-opacity-70 text-gray-700 px-2 py-1 rounded-md text-xs font-medium hover:bg-opacity-100 transition-all duration-300"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && (
        <div className="md:h-32 sm:h-24 h-16   my-3">
          <Swiper
            className="h-full"
            spaceBetween={4}
            slidesPerView={1}
            pagination={{ clickable: true }}
            effect={"coverflow"}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
          >
            <SwiperSlide>
              <div className="swiper-slide  flex justify-center items-center">
                <img
                  src="/homePageBannerImage.png"
                  className="w-full md:h-32 sm:h-24 h-16"
                  loading="lazy"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide  bg-white flex justify-center items-center">
                <img
                  src="/homePageBannerImage.png"
                  className="w-full md:h-32 sm:h-24 h-16 "
                  loading="lazy"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide  bg-white flex justify-center items-center">
                <img
                  src="/homePageBannerImage.png"
                  className="w-full md:h-32 sm:h-24 h-16 "
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide  bg-white flex justify-center items-center">
                <img
                  src="/homePageBannerImage.png"
                  className="w-full md:h-32 sm:h-24 h-16 rounded-2xl"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default WeddingBannerCarousel;
