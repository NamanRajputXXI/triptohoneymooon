import React from "react";
import Button from "../global/Button";

const Account = () => {
  return (
    <section className="md:py-20 py-10">
      <div className="flex max-w-7xl items-center gap-10 lg:flex-row flex-col-reverse justify-between mx-auto p-5 md:p-10">
        <div className="flex flex-col lg:w-2/3 w-full gap-5 lg:gap-10">
          <h5 className="text-red-600 font-bold text-xl md:text-2xl">
            Corporate Account
          </h5>
          <p className="md:text-5xl text-3xl font-bold">
            Your Brand. Only Sweetner
          </p>
          <p>
            Set up a free corporate account for custom branding and more options
            to make your Sugarwish gifts stand out!
          </p>
          <Button btnText={"Get Started"} />
        </div>
        <div className="lg:w-1/3 w-full">
          <img
            className="rounded-2xl w-full"
            src="https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_1280.jpg"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Account;
