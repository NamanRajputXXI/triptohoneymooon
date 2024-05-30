import React from "react";
import TestimonialSlider from "./TestimonialSLider";

const Testimonial = () => {
  return (
    <section className="sm:py-20 py-10">
      <div className="max-w-7xl mx-auto gap-10 flex flex-col">
        <h5 className="text-red-600 font-bold text-center text-3xl">
          Testimonial
        </h5>
        <p className="text-4xl font-bold text-center">Trust Our Clients</p>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonial;
