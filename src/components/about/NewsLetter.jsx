import React from "react";

const NewsLetter = () => {
  return (
    <section className="sm:my-20 my-10">
      <div className="max-w-7xl gap-10 mx-auto px-6 flex flex-col ">
        <h5 className="text-red-600 text-center font-bold text-2xl sm:text-3xl">
          Subscribe To Our News Letter
        </h5>
        <p className="sm:text-4xl text-2xl text-center font-bold">
          Prepare Yourself & let&apos;s Explore the <br /> Beauty of the World
        </p>
        <div className="flex sm:px-6 items-center gap-4 sm:gap-8">
          <input
            type="text"
            className=" px-5 w-full h-10 sm:h-16 rounded-xl bg-white"
            placeholder="Your Email"
          />
          <button className="bg-purple-950 text-white sm:text-base text-sm flex items-center justify-center px-5 sm:h-16 h-10 rounded-xl">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
