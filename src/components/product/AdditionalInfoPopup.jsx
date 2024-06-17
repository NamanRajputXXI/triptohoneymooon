"use client";
import React from "react";

const AdditionalInfoPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center sm:px-10 px-5 bg-black bg-opacity-50 z-50">
      <div className="bg-white text-gray-700 flex flex-col gap-5 max-w-5xl h-[500px] sm:h-[500px] overflow-y-auto mx-auto p-3 sm:p-6 rounded-lg shadow-xl relative">
        <div className="flex items-center justify-between">
          <p className="sm:text-4xl text-xl font-bold">
            Additional Information
          </p>
          <button
            className="text-gray-500 text-3xl hover:text-gray-800"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="flex flex-col gap-5 sm:pr-10">
          <p className="underline text-xl">About Tour :</p>
          <p className="sm:text-base text-xs">
            The Andaman Islands are a tropical paradise that offer pristine
            beaches, crystal-clear waters, and an abundance of marine life. The
            archipelago is an ideal destination for those seeking a relaxing
            getaway as well as adventure enthusiasts looking to explore
            underwater marvels through scuba diving and snorkeling.
          </p>
          <p className="sm:text-base text-xs">
            Starting from Port Blair, the capital city known for its rich
            history and vibrant culture, you will journey through the islands
            visiting famous spots like Havelock Island, known for its stunning
            Radhanagar Beach, and Neil Island, a serene escape with its lush
            greenery and beautiful coral reefs. This 6-day tour will provide you
            with a blend of relaxation and adventure, making for an
            unforgettable experience.
          </p>
          <p className="text-xl underline">Quick info:</p>
          <div className="flex gap-2 items-center">
            <p className="font-bold">Duration :</p>
            <p className="sm:text-base text-xs">6 Days, 5 Nights</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold">Start Point:</p>
            <p className="sm:text-base text-xs">Port Blair Airport (IXZ)</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold">End Point:</p>
            <p className="sm:text-base text-xs">Port Blair Airport (IXZ)</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-5">
          <p className="underline font-bold">Inclusions :</p>
          <div className="flex items-center gap-3">
            <p className="font-bold">Accommodation :</p>
            <p className="sm:text-base text-xs">
              5 nights accommodation in hotels across Port Blair, Havelock, and
              Neil Island.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Meals :</p>
            <p className="sm:text-base text-xs">
              Breakfast from day 2 to day 6.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Transfers :</p>
            <p className="sm:text-base text-xs">
              Airport transfers and inter-island transfers by ferry and cab as
              per the itinerary.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Sightseeing :</p>
            <p className="sm:text-base text-xs">
              Sightseeing tours as mentioned in the itinerary including visits
              to Cellular Jail, Radhanagar Beach, Elephant Beach, Bharatpur
              Beach, and more.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Activities :</p>
            <p className="sm:text-base text-xs">
              Complimentary snorkeling session at Elephant Beach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoPopup;
