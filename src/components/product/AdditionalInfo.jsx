import React from "react";

const AdditionalInfo = () => {
  return (
    <section className="md:my-20 my-10">
      <div className="max-w-7xl rounded-2xl flex flex-col gap-10 mx-auto bg-gray-300 p-5">
        <p>Additional Information</p>
        <div className="flex w-full justify-between">
          <p className="underline">About the Tour :-</p>
          <p>Read more</p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
