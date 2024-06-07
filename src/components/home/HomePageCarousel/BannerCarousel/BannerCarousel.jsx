import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const BannerCarousel = () => {
  return (
    <div className="h-96  rounded-2xl px-5  my-3 ">
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
              src="/advertiseBanner.jpg"
              className="w-full object-fill  rounded-2xl  h-96"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide rounded-2xl bg-white flex justify-center items-center">
            <img
              src="/advertiseBanner.jpg"
              className="w-full  h-96 object-fill rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide  rounded-2xl bg-white flex justify-center items-center">
            <img
              src="/advertiseBanner.jpg"
              className="w-full h-96 object-fill  rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide rounded-2xl  bg-white flex justify-center items-center">
            <img
              src="/advertiseBanner.jpg"
              className="w-full  h-96 object-fill rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
