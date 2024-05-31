import React from "react";
import Button from "../global/Button";

const GiftExpHero = () => {
  return (
    <section className="sm:my-20 px-5 my-10">
      <div
        className="flex max-w-7xl sm:px-10 px-5 items-center mx-auto h-[450px] sm:h-[600px] rounded-3xl sm:py-10 p-5 bg-cover bg-center "
        style={{
          backgroundImage: "url('./giftherobg.png')",
        }}
      >
        <div className="flex rounded-2xl gap-8 w-[470px] flex-col h-fit bg-white p-5 sm:p-10">
          <h1 className="sm:text-4xl text-3xl font-bold leading-10">
            Let them <span className="text-red-600">choose</span> <br /> their
            favorites
          </h1>
          <p className="text-xl font-light">
            Send a sweet gift to your friend, colleague or loved one through
            email or text.
          </p>
          <Button btnText={"Send a Gift"} />
        </div>
      </div>
    </section>
  );
};

export default GiftExpHero;
