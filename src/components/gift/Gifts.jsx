import React from "react";

const Gifts = () => {
  return (
    <section className=" pb-20">
      <div className="max-w-xl p-10 flex-col mx-auto items-center gap-8 flex">
        <h5 className="text-red-600 font-bold text-xl md:text-2xl">
          Buy a Gift Card
        </h5>
        <p className="md:text-5xl text-3xl text-center font-bold">
          How it Works
        </p>
        <div className="grid grid-cols-3 py-10 gap-8">
          <div className=" w-64 p-8 h-64 flex items-center justify-center bg-red-200 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1623284060556-37e5ff559dd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlc3xlbnwwfDB8MHx8fDA%3D"
              className="object-cover rounded-2xl object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
