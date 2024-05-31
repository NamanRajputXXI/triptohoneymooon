import React from "react";

const HowItWorks = () => {
  return (
    <section className="sm:py-20 py-10">
      <div className="max-w-7xl px-5 md:gap-8 gap-4 flex-col items-center mx-auto h-fit flex">
        <h5 className="text-red-600 font-bold text-xl md:text-2xl">
          Buy a Gift Card
        </h5>
        <p className="md:text-5xl text-3xl text-center font-bold">
          How it Works
        </p>
        <div className="grid lg:grid-cols-3  grid-cols-1 gap-24  lg:gap-20">
          <div className="flex  relative  gap-5 flex-col items-center justify-start h-fit">
            <img
              src="https://images.unsplash.com/photo-1608755727748-dfa2e44f255b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpZnRzfGVufDB8MHwwfHx8MA%3D%3D  "
              className="object-cover rounded-2xl h-[250px] object-center w-full"
              alt=""
            />
            <p className="text-3xl font-extrabold">You Choose</p>
            <p className=" font-normal text-xl xl:text-2xl text-center">
              You choose what to send and the gift size.
            </p>
            <div className="lg:flex hidden -right-[75px] top-24  absolute">
              <img
                src="https://cdn.pixabay.com/photo/2016/06/04/09/32/arrow-1435215_640.png"
                className="w-16 -rotate-90  h-16"
                alt=""
              />
            </div>
            <div className="lg:hidden flex left-1/2 transform -translate-x-1/2 -bottom-20  absolute">
              <img
                src="https://cdn.pixabay.com/photo/2016/06/04/09/32/arrow-1435215_640.png"
                className="w-16  h-16"
                alt=""
              />
            </div>
          </div>
          <div className="flex  relative gap-5 flex-col items-center  h-fit">
            <img
              src="https://cdn.pixabay.com/photo/2019/12/03/07/34/gift-4669449_640.jpg "
              className="object-cover rounded-2xl h-[250px]  object-center w-full"
              alt=""
            />
            <p className="text-3xl font-extrabold">They Select</p>
            <p className=" font-normal  text-xl xl:text-2xl text-center">
              They choose from dozens of options to get exactly what they want.
            </p>
            <div className="lg:flex hidden -right-[75px] top-24  absolute">
              <img
                src="https://cdn.pixabay.com/photo/2016/06/04/09/32/arrow-1435215_640.png"
                className="w-16 h-16 -rotate-90"
                alt=""
              />
            </div>
            <div className="lg:hidden flex left-1/2 transform -translate-x-1/2 -bottom-20  absolute">
              <img
                src="https://cdn.pixabay.com/photo/2016/06/04/09/32/arrow-1435215_640.png"
                className="w-16  h-16"
                alt=""
              />
            </div>
          </div>
          <div className="flex relative gap-5 flex-col items-center  h-fit">
            <img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
              className="object-cover rounded-2xl h-[250px]  object-center w-full"
              alt=""
            />
            <p className="text-3xl font-extrabold">We Deliver</p>
            <p className=" font-normal  text-xl xl:text-2xl text-center">
              We box up their choices in our signature awning box and deliver
              directly to their door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
