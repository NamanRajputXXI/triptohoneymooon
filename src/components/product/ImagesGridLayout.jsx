import React from "react";

const ImagesGridLayout = ({ carouselImageUrl }) => {
  return (
    <section className="my-5 px-5">
      <div className="max-w-7xl flex flex-col mx-auto ">
        <div className="flex items-start justify-start gap-5 w-full flex-col">
          <div className="flex md:flex-row flex-col  md:h-[600px] gap-2 md:gap-3">
            <div className="md:w-1/2 w-full h-full">
              <img
                src="https://cdn.pixabay.com/photo/2021/07/18/17/42/waterfall-6476205_640.jpg"
                alt=""
                className=" h-full w-full object-cover rounded-xl object-center"
              />
            </div>
            <div className="grid md:gap-3 gap-2 w-full md:w-1/2 h-full  grid-cols-2">
              <img
                src="https://cdn.pixabay.com/photo/2021/11/23/06/45/city-6818066_640.jpg"
                alt=""
                className="object-cover h-full rounded-xl object-center"
              />
              <img
                src="https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_640.jpg"
                alt=""
                className="object-cover h-full rounded-xl  object-center"
              />
              <img
                src="https://cdn.pixabay.com/photo/2020/06/17/17/02/sea-5310426_640.jpg"
                alt=""
                className="object-cover h-full rounded-xl object-center"
              />
              <img
                src="https://cdn.pixabay.com/photo/2020/08/29/18/50/coastal-5527726_640.jpg"
                alt=""
                className="object-cover h-full rounded-xl object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesGridLayout;
