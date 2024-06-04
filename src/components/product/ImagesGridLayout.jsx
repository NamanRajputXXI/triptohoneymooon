import React from "react";

const ImagesGridLayout = ({ carouselImageUrl }) => {
  return (
    <section className="my-5">
      <div className=" h-full  ">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 ">
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-72">
              <img
                src={carouselImageUrl[0]}
                loading="lazy"
                alt="image-1"
                className="absolute inset-0 h-full w-full object-cover object-center "
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-72">
              <img
                src={carouselImageUrl[1]}
                loading="lazy"
                alt="image-2"
                className="absolute inset-0 h-full w-full object-cover object-center "
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-72">
              <img
                src={carouselImageUrl[2]}
                loading="lazy"
                alt="image-3"
                className="absolute inset-0 h-full w-full object-cover object-center "
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-72">
              <img
                src={carouselImageUrl[3]}
                loading="lazy"
                alt="image-4"
                className="absolute inset-0 h-full w-full object-cover object-center "
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesGridLayout;
