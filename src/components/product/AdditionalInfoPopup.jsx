// import React from "react";

// const AdditionalInfoPopup = () => {
//   return (
//     <div className="h-screen fixed flex bg-black bg-opacity-30">hello</div>
//   );
// };

// export default AdditionalInfoPopup;
"use client";
import React from "react";

const AdditionalInfoPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center sm:px-10 px-5 bg-black bg-opacity-50  z-50">
      <div className="bg-white text-gray-700 flex flex-col gap-5 max-w-5xl h-[500px] sm:h-[500px] overflow-y-auto mx-auto p-3 sm:p-6 rounded-lg shadow-xl relative">
        <div className="flex  items-center justify-between">
          <p className="sm:text-4xl text-xl font-bold ">
            Additional Information
          </p>
          <button
            className=" text-gray-500 text-3xl hover:text-gray-800"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="flex flex-col gap-5 sm:pr-10">
          <p className="underline text-xl">About Tour :</p>
          <p className="sm:text-base text-xs">
            There is a place that strings a distant chord of fascination within,
            a place that came straight out of an artist’s imagination,
            Switzerland is indeed a land of bountiful beauty. The snow-covered
            Swiss Alps and the scenic lakes amidst the mountainous backdrops are
            something that would captivate your inner being.
          </p>
          <p className="sm:text-base text-xs">
            The city of Zurich, famed for being Europe’s largest financial
            centre, is the gateway to the fantasy land of white-washed mountains
            and snowy escapades. When you venture out for Mount Titlis on
            Rotair, you will step into the world of Narnia to which Lucy opened
            the wardrobe door. Your astonishment doesn’t cease here, wait till
            you discover Lucerne, a city graced with medieval architecture,
            snuggled on the edge of Lake Lucerne amidst a snow-capped mountain.
            A tour to Zurich will involve all the European delights starting
            from its first Cog railway, cascading Rhine Falls to Zurich’s little
            surprises like the Swiss National Museum, Zurich Opera house, and
            Fifa Football Museum, this 5-day tour to Switzerland will give you
            the best experience you can think of.
          </p>
          <p className="text-xl underline">Quick info:</p>
          <div className="flex gap-2 items-center">
            <p className="font-bold"> Duration :</p>
            <p className="sm:text-base text-xs">6 Days, 5 Nights</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold"> Start Point: </p>
            <p className="sm:text-base text-xs">Zurich Airport (ZRH)</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold"> Endpoint: </p>
            <p className="sm:text-base text-xs">Zurich Airport (ZRH)</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-5">
          <p className="underline font-bold">Inclusions :</p>
          <div className="flex items-center gap-3">
            <p className="font-bold">Accommodation :</p>
            <p className="sm:text-base text-xs">
              5 nights accommodation in a hotel in Zurich.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Meals :</p>
            <p className="sm:text-base text-xs">
              Breakfast from day 2 to day 6
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Transfers :</p>
            <p className="sm:text-base text-xs">
              Transfers using Swiss Pass from trains or other public transport
              as per the itinerary.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Visa assistance : </p>
            <p className="sm:text-base text-xs">
              It will be provided (Charges are not included)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Swiss Pass : </p>
            <p className="sm:text-base text-xs">
              5 Days second class continuous Swiss Pass
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoPopup;
