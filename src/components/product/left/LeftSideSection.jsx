// "use client";
// import React, { useState } from "react";
// import { FaBed } from "react-icons/fa";
// import { FaPlateWheat } from "react-icons/fa6";
// import { BsFillBalloonHeartFill } from "react-icons/bs";
// import { TiTick } from "react-icons/ti";
// import Tabs from "./Tabs";
// import Accordian from "../AccordianItem";
// import InclusionExclusion from "./InclusionExclusion";
// const LeftSideSection = ({ heading, duration, itinerary }) => {
//   const [selected, setSelected] = useState(null);
//   const overView = [
//     "Nestled in the northernmost region of India, Kashmir is a breathtaking paradise renowned for its stunning landscapes, rich cultural heritage, and serene tranquility.",
//     "Kashmir's natural beauty is unparalleled. The valley is embraced by the towering peaks of the Himalayas and Pir Panjal ranges, creating a spellbinding panorama of snow-capped mountains, verdant meadows, and crystal-clear streams.",
//     "Kashmir boasts a rich cultural tapestry woven from centuries of history and tradition. The valley has been a melting pot of diverse influences, including Hindu, Muslim, and Buddhist heritage.",
//     " Kashmir is home to a multitude of sacred sites and spiritual retreats, each imbued with a sense of serenity and devotion. ",
//   ];
//   return (
//     <div className="md:col-span-2">
//       <div className="flex flex-col gap-5">
//         <p className="text-4xl font-bold">{heading}</p>
//         <button className="py-2 px-1 w-40 bg-[#cf331a] text-white rounded-xl">
//           {duration}
//         </button>
//         {/* <div className="flex flex-col gap-3 md:text-base text-xs sm:text-sm justify-between border-t-[1px] border-b-[1px] py-5 border-gray-200">
//           <p className="font-bold">Choose Trip Duration</p>
//           <div className="flex gap-2 items-center">
//             <div className="flex flex-col gap-1 relative">
//               <img
//                 src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
//                 alt=""
//                 className="h-32  border-red-600 border-2 p-1 rounded-xl w-32"
//               />
//               <p className="text-white absolute top-24 left-3 font-extrabold">
//                 6 Days
//               </p>
//               <div className="flex flex-col">
//                 <p className="text-xs  text-gray-500 ">Starting From</p>
//                 <p className="font-extrabold text-[13px]">₹ 99,800</p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-1 relative">
//               <img
//                 src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
//                 alt=""
//                 className="h-32 rounded-xl  w-32"
//               />
//               <p className="text-white absolute top-24 left-3 font-extrabold">
//                 7 Days
//               </p>
//               <div className="flex flex-col ">
//                 <p className="text-xs  text-gray-500">Starting From</p>
//                 <p className="font-extrabold text-[13px]">₹ 77,577</p>
//               </div>
//             </div>
//             <div className="flex relative flex-col ">
//               <img
//                 src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
//                 alt=""
//                 className="h-32 rounded-xl  w-32"
//               />
//               <p className="text-white absolute top-24 left-3 font-extrabold">
//                 8 Days
//               </p>
//               <div className="flex flex-col">
//                 <p className="text-xs  text-gray-500">Starting From</p>
//                 <p className="font-extrabold  text-[13px]">₹ 1,42,000</p>
//               </div>
//             </div>
//             <div className="flex flex-col relative gap-1">
//               <img
//                 src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
//                 alt=""
//                 className="h-32 rounded-xl   w-32"
//               />
//               <p className="text-white absolute top-24 left-3 font-extrabold">
//                 9 Days
//               </p>
//               <div className="flex flex-col">
//                 <p className="text-xs text-gray-500">Starting From</p>
//                 <p className="font-extrabold  text-[13px]">₹ 1,12,500</p>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         <div className="flex flex-col gap-3 md:text-base text-xs sm:text-sm justify-between border-t-[1px] border-b-[1px] py-5 border-gray-200">
//           <p className="font-bold">Choose Trip Duration</p>
//           <div className="flex gap-2 items-center">
//             <div
//               className="flex flex-col gap-1 relative cursor-pointer"
//               onClick={() => setSelected(0)}
//             >
//               <img
//                 src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
//                 alt=""
//                 className={`h-32 rounded-xl p-1 w-32 ${
//                   selected === 0
//                     ? "border-red-600 border-2"
//                     : "border-white border-2"
//                 }`}
//               />
//               <p className="text-white absolute top-24 left-3 font-extrabold">
//                 6 Days
//               </p>
//               <div className="flex flex-col">
//                 <p className="text-xs text-gray-500">Starting From</p>
//                 <p className="font-extrabold text-[13px]">₹ 99,800</p>
//               </div>
//             </div>
//             <div
//               className="flex flex-col gap-1  relative cursor-pointer"
//               onClick={() => setSelected(1)}
//             >
//               <img
//                 src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
//                 alt=""
//                 className={`h-32 rounded-xl p-1 w-32 ${
//                   selected === 1
//                     ? "border-red-600 border-2"
//                     : "border-white border-2"
//                 }`}
//               />
//               <p className="text-white absolute top-24 left-3 font-extrabold">
//                 7 Days
//               </p>
//               <div className="flex flex-col">
//                 <p className="text-xs text-gray-500">Starting From</p>
//                 <p className="font-extrabold text-[13px]">₹ 77,577</p>
//               </div>
//             </div>
//             <div
//               className="flex flex-col gap-1  relative cursor-pointer"
//               onClick={() => setSelected(2)}
//             >
//               <img
//                 src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
//                 alt=""
//                 className={`h-32 rounded-xl p-1 w-32 ${
//                   selected === 2
//                     ? "border-red-600 border-2"
//                     : "border-white border-2"
//                 }`}
//               />
//               <p className="text-white absolute top-24 left-3 font-extrabold">
//                 8 Days
//               </p>
//               <div className="flex flex-col">
//                 <p className="text-xs text-gray-500">Starting From</p>
//                 <p className="font-extrabold text-[13px]">₹ 1,42,000</p>
//               </div>
//             </div>
//             <div
//               className="flex flex-col gap-1 relative cursor-pointer"
//               onClick={() => setSelected(3)}
//             >
//               <img
//                 src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
//                 alt=""
//                 className={`h-32 rounded-xl p-1 w-32 ${
//                   selected === 3
//                     ? "border-red-600 border-2"
//                     : "border-white border-2"
//                 }`}
//               />
//               <p className="text-white absolute top-24 left-3 font-extrabold">
//                 9 Days
//               </p>
//               <div className="flex flex-col">
//                 <p className="text-xs text-gray-500">Starting From</p>
//                 <p className="font-extrabold text-[13px]">₹ 1,12,500</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex md:text-base text-xs sm:text-sm flex-row justify-between  py-5 ">
//           <div className="flex flex-row text-gray-500 items-center gap-1 sm:gap-3">
//             <FaBed size={30} />
//             <p>Stay Included</p>
//           </div>
//           <div className="flex flex-row text-gray-500 items-center  gap-1 sm:gap-3">
//             <FaPlateWheat size={30} />
//             <p>Breakfast Included</p>
//           </div>
//           <div className="flex flex-row text-gray-500 items-center  gap-1 sm:gap-3">
//             <BsFillBalloonHeartFill size={30} />
//             <p>Stay Updated</p>
//           </div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <p className="font-bold">Destinaation Routes</p>
//           <div className="flex border-[#cf331a] relative border-[1px] rounded-2xl py-3 px-3">
//             <p>Zurich</p>
//             <div className="flex bg-[#cf331a] rounded-tr-xl items-center right-0 top-0 justify-center absolute">
//               <TiTick color="white" size={20} />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <p className="font-bold">Stay Category</p>
//           <div className="flex w-40 border-[#cf331a] relative border-[1px] rounded-2xl py-3 px-3">
//             <p>Duluxe</p>
//             <div className="flex bg-[#cf331a] rounded-tr-xl items-center right-0 top-0 justify-center absolute">
//               <TiTick color="white" size={20} />
//             </div>
//           </div>
//         </div>
//         <div className="py-5">
//           <p className="font-bold">Trip Highlights</p>
//           {overView.map((item, i) => (
//             <div className="flex flex-col " key={i}>
//               {/* <p className="text-bold text-xl">{item.heading}</p> */}
//               <p className="text-gray-600 my-2 ">
//                 {i + 1}. {item}
//               </p>
//             </div>
//           ))}
//         </div>
//         <Tabs />
//         {/* <Accordian itinerary={itinerary} /> */}
//       </div>
//     </div>
//   );
// };

// export default LeftSideSection;

"use client";
import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import { FaPlateWheat } from "react-icons/fa6";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Tabs from "./tabs/Tabs";
import Accordian from "../AccordianItem";
import InclusionExclusion from "./InclusionExclusion";

const LeftSideSection = ({ heading, duration, itinerary, tripHighlights }) => {
  const [selected, setSelected] = useState(0); // Set initial value to 0

  const overView = [
    "Nestled in the northernmost region of India, Kashmir is a breathtaking paradise renowned for its stunning landscapes, rich cultural heritage, and serene tranquility.",
    "Kashmir's natural beauty is unparalleled. The valley is embraced by the towering peaks of the Himalayas and Pir Panjal ranges, creating a spellbinding panorama of snow-capped mountains, verdant meadows, and crystal-clear streams.",
    "Kashmir boasts a rich cultural tapestry woven from centuries of history and tradition. The valley has been a melting pot of diverse influences, including Hindu, Muslim, and Buddhist heritage.",
    " Kashmir is home to a multitude of sacred sites and spiritual retreats, each imbued with a sense of serenity and devotion. ",
  ];

  return (
    <div className="md:col-span-2">
      <div className="flex flex-col gap-5">
        <p className="text-4xl font-bold">
          {heading}
          <span className="text-gray-500 text-xs">Only for Couples</span>
        </p>
        <button className="py-2 px-1 w-40 bg-[#cf331a] text-white rounded-xl">
          {duration}
        </button>

        <div className="flex flex-col gap-3 md:text-base text-xs sm:text-sm justify-between border-t-[1px] border-b-[1px] py-5 border-gray-200">
          <p className="font-bold">Choose Hotel Category</p>
          <div className="flex gap-2 items-center">
            <div
              className="flex flex-col gap-1 relative cursor-pointer"
              onClick={() => setSelected(0)}
            >
              <img
                src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
                alt=""
                className={`h-32 rounded-xl p-1 w-32 ${
                  selected === 0
                    ? "border-red-600 border-2"
                    : "border-white border-2"
                }`}
              />
              <p className="text-white absolute top-24 left-3 font-extrabold">
                6 Days
              </p>
              <div className="flex flex-col">
                <p className="text-xs text-gray-500">Starting From</p>
                <p className="font-extrabold text-[13px]">₹ 99,800</p>
              </div>
            </div>
            <div
              className="flex flex-col gap-1  relative cursor-pointer"
              onClick={() => setSelected(1)}
            >
              <img
                src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
                alt=""
                className={`h-32 rounded-xl p-1 w-32 ${
                  selected === 1
                    ? "border-red-600 border-2"
                    : "border-white border-2"
                }`}
              />
              <p className="text-white absolute top-24 left-3 font-extrabold">
                7 Days
              </p>
              <div className="flex flex-col">
                <p className="text-xs text-gray-500">Starting From</p>
                <p className="font-extrabold text-[13px]">₹ 77,577</p>
              </div>
            </div>
            <div
              className="flex flex-col gap-1  relative cursor-pointer"
              onClick={() => setSelected(2)}
            >
              <img
                src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
                alt=""
                className={`h-32 rounded-xl p-1 w-32 ${
                  selected === 2
                    ? "border-red-600 border-2"
                    : "border-white border-2"
                }`}
              />
              <p className="text-white absolute top-24 left-3 font-extrabold">
                8 Days
              </p>
              <div className="flex flex-col">
                <p className="text-xs text-gray-500">Starting From</p>
                <p className="font-extrabold text-[13px]">₹ 1,42,000</p>
              </div>
            </div>
            <div
              className="flex flex-col gap-1 relative cursor-pointer"
              onClick={() => setSelected(3)}
            >
              <img
                src="https://cdn.pixabay.com/photo/2019/10/25/01/01/tbilisi-4575709_640.jpg"
                alt=""
                className={`h-32 rounded-xl p-1 w-32 ${
                  selected === 3
                    ? "border-red-600 border-2"
                    : "border-white border-2"
                }`}
              />
              <p className="text-white absolute top-24 left-3 font-extrabold">
                9 Days
              </p>
              <div className="flex flex-col">
                <p className="text-xs text-gray-500">Starting From</p>
                <p className="font-extrabold text-[13px]">₹ 1,12,500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:text-base text-xs sm:text-sm flex-row justify-between  py-5 ">
          <div className="flex flex-row text-gray-500 items-center gap-1 sm:gap-3">
            <FaBed size={30} />
            <p>Stay Included</p>
          </div>
          <div className="flex flex-row text-gray-500 items-center  gap-1 sm:gap-3">
            <FaPlateWheat size={30} />
            <p>Breakfast Included</p>
          </div>
          <div className="flex flex-row text-gray-500 items-center  gap-1 sm:gap-3">
            <BsFillBalloonHeartFill size={30} />
            <p>Stay Updated</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Destinaation Routes</p>
          <div className="flex border-[#cf331a] relative border-[1px] rounded-2xl py-3 px-3">
            <p>Zurich</p>
            <div className="flex bg-[#cf331a] rounded-tr-xl items-center right-0 top-0 justify-center absolute">
              <TiTick color="white" size={20} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Stay Category</p>
          <div className="flex w-40 border-[#cf331a] relative border-[1px] rounded-2xl py-3 px-3">
            <p>Duluxe</p>
            <div className="flex bg-[#cf331a] rounded-tr-xl items-center right-0 top-0 justify-center absolute">
              <TiTick color="white" size={20} />
            </div>
          </div>
        </div>

        <div className="py-5">
          <p className="font-bold">Trip Highlights</p>
          {tripHighlights.map((item, i) => (
            <div className="flex flex-col " key={i}>
              <p className="text-gray-600 my-2 ">
                {i + 1}. {item}
              </p>
            </div>
          ))}
        </div>

        <Tabs />
      </div>
    </div>
  );
};

export default LeftSideSection;
