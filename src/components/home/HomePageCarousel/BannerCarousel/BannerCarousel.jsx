import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const BannerCarousel = () => {
  return (
    <div className="h-full  md:py-20 py-10">
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
          <div className="swiper-slide   flex justify-center items-center">
            <img
              src="/advertiseBanner.jpg"
              className="w-full object-fill   sm:h-96  h-32"
              alt=""
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide  bg-white flex justify-center items-center">
            <img
              src="/advertiseBanner.jpg"
              className="w-full  sm:h-96  h-32 object-fill "
              loading="lazy"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide   bg-white flex justify-center items-center">
            <img
              src="/advertiseBanner.jpg"
              className="w-full sm:h-96  h-32 object-fill  "
              loading="lazy"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide   bg-white flex justify-center items-center">
            <img
              src="/advertiseBanner.jpg"
              className="w-full  sm:h-96  h-32 object-fill "
              loading="lazy"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
