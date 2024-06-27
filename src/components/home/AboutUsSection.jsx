import React from "react";
import Button from "../global/Button";

const AboutUsSection = () => {
  return (
    <section
      className="w-full py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/pinkShadeAboutUs.jpg')" }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row  gap-5 items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              About us
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              TriptoHoneymoon.com offers exclusive honeymoon packages for
              couples and promotes top wedding and event planners. We ensure
              unforgettable experiences, tailored to your desires. Discover
              romance and celebration with our expert team dedicated to crafting
              the perfect honeymoon journey and connecting you with the best
              event professionals.
            </p>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
              btnText="Know More"
            />
          </div>
          <div className="md:w-1/2 w-full sm:flex-row flex-col flex justify-end space-x-4 relative">
            <div className="sm:w-2/5 sm:flex hidden w-full">
              <img
                className="w-full h-64 object-cover rounded-t-full"
                src="https://images.unsplash.com/photo-1519307212971-dd9561667ffb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZXltb29ufGVufDB8fDB8fHww"
                alt="Couple on beach"
              />
            </div>
            <div className="sm:w-3/5 w-[90%]">
              <img
                className="w-full h-80 object-cover rounded-t-full"
                src="https://images.unsplash.com/photo-1576604303800-f2435c2db6bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbmV5bW9vbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Couple proposal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
