import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const InternationalSectionCarousel = (props) => {
  const [sliderRef] = useKeenSlider({ slidesPerView: 3, spacing: 15 });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-medium h-[300px]">
        1
      </div>
      <div className="keen-slider__slide bg-gradient-to-r from-yellow-400 to-red-500 flex items-center justify-center text-white text-4xl font-medium h-[300px]">
        2
      </div>
      <div className="keen-slider__slide bg-gradient-to-r from-lime-400 to-green-600 flex items-center justify-center text-white text-4xl font-medium h-[300px]">
        3
      </div>
      <div className="keen-slider__slide bg-gradient-to-r from-teal-400 to-blue-400 flex items-center justify-center text-white text-4xl font-medium h-[300px]">
        4
      </div>
      <div className="keen-slider__slide bg-gradient-to-r from-pink-400 to-red-500 flex items-center justify-center text-white text-4xl font-medium h-[300px]">
        5
      </div>
      <div className="keen-slider__slide bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-medium h-[300px]">
        6
      </div>
    </div>
  );
};
export default InternationalSectionCarousel;
