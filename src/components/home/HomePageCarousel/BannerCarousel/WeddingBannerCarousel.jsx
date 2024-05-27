import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const WeddingBannerCarousel = () => {
  return (
    <div className="h-44  px-5 pt-3 pb-3 bg-white">
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
              src="https://images.unsplash.com/photo-1566953484261-e8a30188ad75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlYXV0aWZ1bCUyMHBsYWNlfGVufDB8MHwwfHx8MA%3D%3D"
              className="w-full  rounded-2xl object-cover h-36"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide rounded-2xl bg-white flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1565523925028-812f891b0e8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwZGVzdGluYXRpb258ZW58MHwwfDB8fHww"
              className="w-full object-cover h-36 rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide  rounded-2xl bg-white flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1519941459598-a1588781b56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXV0aWZ1bCUyMGRlc3RpbmF0aW9ufGVufDB8MHwwfHx8MA%3D%3D"
              className="w-full object-cover h-36 rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide rounded-2xl  bg-white flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1691336770830-4b157e3767cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlYXV0aWZ1bCUyMGRlc3RpbmF0aW9ufGVufDB8MHwwfHx8MA%3D%3D"
              className="w-full object-cover h-36 rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WeddingBannerCarousel;
