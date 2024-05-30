import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
const KeyFeatures = () => {
  return (
    <section className="sm:my-20 my-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 ">
        <div className="flex flex-col">
          <div className="flex flex-col gap-8">
            <h5 className="text-red-600 font-bold text-3xl">Travel Point</h5>
            <p className="text-4xl font-bold">We Offer Best Services</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              corrupti sint vel repudiandae asperiores maxime modi doloremque
              unde nesciunt placeat.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-5">
              <FaMapLocationDot />
              <div className="flex flex-col">
                <p>We Offer Best Services</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, laborum repellat. Sed aliquid aut earum similique
                  quos eos, voluptatibus alias.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <FaMapLocationDot />
              <div className="flex flex-col">
                <p>We Offer Best Services</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, laborum repellat. Sed aliquid aut earum similique
                  quos eos, voluptatibus alias.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <FaMapLocationDot />
              <div className="flex flex-col">
                <p>We Offer Best Services</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, laborum repellat. Sed aliquid aut earum similique
                  quos eos, voluptatibus alias.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <FaMapLocationDot />
              <div className="flex flex-col">
                <p>We Offer Best Services</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, laborum repellat. Sed aliquid aut earum similique
                  quos eos, voluptatibus alias.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <img
            src="https://cdn.pixabay.com/photo/2012/02/25/19/09/romantic-16955_1280.jpg"
            className="w-full h-[500px] object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
