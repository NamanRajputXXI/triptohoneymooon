import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const WeddingBannerCarousel = () => {
  return (
    <div className="md:h-32 sm:h-24 h-16  rounded-2xl sm:px-5 px-2  my-3 ">
      <Swiper
        className="h-full"
        spaceBetween={4}
        slidesPerView={1}
        pagination={{ clickable: true }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide>
          <div className="swiper-slide rounded-2xl  flex justify-center items-center">
            <img
              src="/AdsBanner.jpg"
              className="w-full  rounded-2xl  md:h-32 sm:h-24 h-16 "
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide rounded-2xl bg-white flex justify-center items-center">
            <img
              src="/AdsBanner.jpg"
              className="w-full md:h-32 sm:h-24 h-16   rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide  rounded-2xl bg-white flex justify-center items-center">
            <img
              src="/AdsBanner.jpg"
              className="w-full  md:h-32 sm:h-24 h-16   rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide rounded-2xl  bg-white flex justify-center items-center">
            <img
              src="/AdsBanner.jpg"
              className="w-full  md:h-32 sm:h-24 h-16  rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WeddingBannerCarousel;
