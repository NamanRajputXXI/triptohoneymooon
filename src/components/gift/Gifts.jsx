import React from "react";
import Button from "../global/Button";

const Gifts = () => {
  return (
    <section className="">
      <div className="max-w-7xl gap-10 items-center justify-between mx-auto md:p-10 p-5 grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <img
            src="https://cdn.pixabay.com/photo/2023/01/21/20/26/heart-7735087_640.jpg"
            className="bg-cover bg-center rounded-2xl w-full"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-red-600 font-bold text-xl md:text-2xl">
            Happiness Delivered
          </h1>
          <p className="md:text-3xl text-2xl  font-bold">
            Father&apos;s Day is June 16! Are you ready to celebrate the
            Grandpas, Uncles, Papas, Pop-Pops, and other rad dads in your life?
          </p>
          <Button btnText={`Send a Valentines Wish`} />
        </div>
      </div>
    </section>
  );
};

export default Gifts;
