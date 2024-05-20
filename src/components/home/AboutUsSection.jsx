import React from "react";
import Button from "../global/Button";

const AboutUsSection = () => {
  return (
    <section className="w-full  bg-red-100">
      <div className=" max-w-7xl gap-5  mx-auto pt-20 bg-red-100 px-2 flex md:flex-row flex-col items-center justify-center md:justify-between">
        <div className="flex md:w-1/2 w-full md:px-0 px-5 pb-20 flex-col gap-5">
          <h1 className="text-5xl font-semibold">About us</h1>
          <p className="lg:text-lg text-base leading-6 text-gray-500 tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            in temporibus vel corrupti. Iste temporibus animi et non at, dolor
            modi maiores quaerat facilis iusto autem numquam illo expedita
            molestias dolorem consequatur voluptas sint dolore similique, hic
            fugiat sunt. Quidem.
          </p>
          <Button className="w-1/2" btnText={"Know More"} />
        </div>
        <div className="md:w-1/2 w-full md:px-0 px-5  items-end justify-center flex gap-5">
          <div className="h-full sm:flex hidden w-full">
            <img
              className="lg:h-64 mb-5 h-32 w-full rounded-t-full"
              src="https://images.unsplash.com/photo-1519307212971-dd9561667ffb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZXltb29ufGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="lg:h-full sm:flex hidden w-full sm:h-64  ">
            <img
              className="h-ful w-full h-full rounded-t-full"
              src="https://images.unsplash.com/photo-1576604303800-f2435c2db6bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbmV5bW9vbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
