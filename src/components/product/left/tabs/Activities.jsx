// import React, { useState } from "react";
// import ItiniraryAccordian from "./ItiniraryAccordian";
// import ItineraryCarousel from "../carousel/ItineraryCarousel";
// import { FaBed } from "react-icons/fa";
// import { BsCupHot } from "react-icons/bs";
// import { GiAirBalloon } from "react-icons/gi";

// const Activities = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex max-w-7xl mx-auto flex-col gap-5">
//       <div className="border w-full  rounded-lg ">
//         <div
//           className="flex justify-between items-center p-4 cursor-pointer"
//           onClick={toggleAccordion}
//         >
//           <div className="flex gap-4 items-center">
//             <button className="px-2 text-sm flex items-center justify-center gap-2 py-1  bg-red-600 text-white  cursor-pointer rounded-xl">
//               Day 1
//             </button>
//             <p className=" sm:text-xl text-lg font-bold">Arrival in Zurich</p>
//           </div>
//           <span
//             className={`transform transition-transform ${
//               isOpen ? "rotate-180" : ""
//             }`}
//           >
//             &#9660;
//           </span>
//         </div>
//         {isOpen && (
//           <div className="p-5">
//             <div className="flex pb-2 flex-col">
//               <div className="flex items-center gap-2">
//                 <GiAirBalloon size={20} />
//                 <p className="text-sm text-gray-500">Activity</p>
//               </div>
//               <p className="text-xl font-bold">
//                 Swiss Continuous Pass - 6 Days Pass
//               </p>
//             </div>
//             <ItineraryCarousel />
//           </div>
//         )}
//       </div>
//       <div className="border w-full mx-auto  rounded-lg ">
//         <div
//           className="flex justify-between items-center p-4 cursor-pointer"
//           onClick={toggleAccordion}
//         >
//           <div className="flex gap-4 items-center pb-2">
//             <button className="px-2 text-sm flex items-center justify-center gap-2 py-1  bg-red-600 text-white  cursor-pointer rounded-xl">
//               Day 2
//             </button>
//             <p className=" sm:text-xl text-lg font-bold">
//               Day Trip to Mount Titlis | Lucerne Walking Tour with Cruise
//             </p>
//           </div>
//           <span
//             className={`transform transition-transform ${
//               isOpen ? "rotate-180" : ""
//             }`}
//           >
//             &#9660;
//           </span>
//         </div>
//         {isOpen && (
//           <div className="p-5">
//             <div className="flex flex-col pb-2">
//               <div className="flex items-center gap-2">
//                 <GiAirBalloon size={20} />
//                 <p className="text-sm text-gray-500">Activity</p>
//               </div>
//               <p className="text-xl font-bold">
//                 Mount Titlis Tour, Switzerland - With Swiss Pass With Ice Flyer
//               </p>
//             </div>
//             <ItineraryCarousel />
//             <div className="flex flex-col gap-5 py-5">
//               <p>You’ll be covering these amazing experiences</p>
//               <div
//                 className="flex gap-5 items-center
//               "
//               >
//                 <div className="flex flex-col gap-2">
//                   <img
//                     src="https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074_1280.jpg"
//                     className="rounded-xl"
//                     alt=""
//                   />
//                   <p>1. Mount Titlis</p>
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <img
//                     src="https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074_1280.jpg"
//                     className="rounded-xl"
//                     alt=""
//                   />
//                   <p>2. Titlis Cliff Walk</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="border w-full mx-auto  rounded-lg ">
//         <div
//           className="flex justify-between items-center p-4 cursor-pointer"
//           onClick={toggleAccordion}
//         >
//           <div className="flex gap-4 items-center pb-2">
//             <button className="px-2 text-sm flex items-center justify-center gap-2 py-1  bg-red-600 text-white  cursor-pointer rounded-xl">
//               Day 3
//             </button>
//             <p className=" sm:text-xl text-lg font-bold">
//               Rhine Falls Boat Trip
//             </p>
//           </div>
//           <span
//             className={`transform transition-transform ${
//               isOpen ? "rotate-180" : ""
//             }`}
//           >
//             &#9660;
//           </span>
//         </div>
//         {isOpen && (
//           <div className="p-5">
//             <div className="flex flex-col pb-2">
//               <div className="flex items-center gap-2">
//                 <GiAirBalloon size={20} />
//                 <p className="text-sm text-gray-500">Activity</p>
//               </div>
//               <p className="text-xl font-bold">
//                 Mount Titlis Tour, Switzerland - With Swiss Pass With Ice Flyer
//               </p>
//             </div>
//             <ItineraryCarousel />
//             <div className="flex flex-col gap-5 py-5">
//               <p>You’ll be covering these amazing experiences</p>
//               <div
//                 className="flex gap-5 items-center
//               "
//               >
//                 <div className="flex flex-col gap-2">
//                   <img
//                     src="https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074_1280.jpg"
//                     className="rounded-xl w-1/2"
//                     alt=""
//                   />
//                   <p>1. Mount Titlis</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Activities;

import React, { useState } from "react";
import ItiniraryAccordian from "./ItiniraryAccordian";
import ItineraryCarousel from "../carousel/ItineraryCarousel";
import { FaBed } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import { GiAirBalloon } from "react-icons/gi";
import MultiImageCarousel from "../carousel/MultiImageCarousel";

const Activities = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex max-w-7xl mx-auto flex-col gap-5">
      <div className="border w-full  rounded-lg ">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleAccordion(0)}
        >
          <div className="flex gap-4 items-center">
            <button className="px-2 text-sm flex items-center justify-center gap-2 py-1  bg-red-600 text-white  cursor-pointer rounded-xl">
              Day 1
            </button>
            <p className=" sm:text-xl text-lg font-bold">Arrival in Zurich</p>
          </div>
          <span
            className={`transform transition-transform ${
              openAccordionIndex === 0 ? "rotate-180" : ""
            }`}
          >
            &#9660;
          </span>
        </div>
        {openAccordionIndex === 0 && (
          <div className="p-5">
            <div className="flex pb-2 flex-col">
              <div className="flex items-center gap-2">
                <GiAirBalloon size={20} />
                <p className="text-sm text-gray-500">Activity</p>
              </div>
              <p className="text-xl font-bold">
                Swiss Continuous Pass - 6 Days Pass
              </p>
            </div>
            <ItineraryCarousel />
          </div>
        )}
      </div>
      <div className="border w-full mx-auto  rounded-lg ">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleAccordion(1)}
        >
          <div className="flex gap-4 items-center pb-2">
            <button className="px-2 text-sm flex items-center justify-center gap-2 py-1  bg-red-600 text-white  cursor-pointer rounded-xl">
              Day 2
            </button>
            <p className=" sm:text-xl text-lg font-bold">
              Day Trip to Mount Titlis | Lucerne Walking Tour with Cruise
            </p>
          </div>
          <span
            className={`transform transition-transform ${
              openAccordionIndex === 1 ? "rotate-180" : ""
            }`}
          >
            &#9660;
          </span>
        </div>
        {openAccordionIndex === 1 && (
          <div className="p-5">
            <div className="flex flex-col pb-2">
              <div className="flex items-center gap-2">
                <GiAirBalloon size={20} />
                <p className="text-sm text-gray-500">Activity</p>
              </div>
              <p className="text-xl font-bold">
                Mount Titlis Tour, Switzerland - With Swiss Pass With Ice Flyer
              </p>
            </div>
            <ItineraryCarousel />
            <div className="flex flex-col gap-5 py-5">
              <p>You will be covering these amazing experiences</p>
              <div
                className="flex gap-5 items-center
              "
              >
                <div className="flex flex-col gap-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074_1280.jpg"
                    className="rounded-xl"
                    alt=""
                  />
                  <p>1. Mount Titlis</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074_1280.jpg"
                    className="rounded-xl"
                    alt=""
                  />
                  <p>2. Titlis Cliff Walk</p>
                </div>
              </div>
            </div>
            <MultiImageCarousel />
          </div>
        )}
      </div>
      <div className="border w-full mx-auto  rounded-lg ">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleAccordion(2)}
        >
          <div className="flex gap-4 items-center pb-2">
            <button className="px-2 text-sm flex items-center justify-center gap-2 py-1  bg-red-600 text-white  cursor-pointer rounded-xl">
              Day 3
            </button>
            <p className=" sm:text-xl text-lg font-bold">
              Rhine Falls Boat Trip
            </p>
          </div>
          <span
            className={`transform transition-transform ${
              openAccordionIndex === 2 ? "rotate-180" : ""
            }`}
          >
            &#9660;
          </span>
        </div>
        {openAccordionIndex === 2 && (
          <div className="p-5">
            <div className="flex flex-col pb-2">
              <div className="flex items-center gap-2">
                <GiAirBalloon size={20} />
                <p className="text-sm text-gray-500">Activity</p>
              </div>
              <p className="text-xl font-bold">
                Mount Titlis Tour, Switzerland - With Swiss Pass With Ice Flyer
              </p>
            </div>
            <ItineraryCarousel />
            <div className="flex flex-col gap-5 py-5">
              <p>You will be covering these amazing experiences</p>
              <div
                className="flex gap-5 items-center
              "
              >
                <div className="flex flex-col gap-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074_1280.jpg"
                    className="rounded-xl w-1/2"
                    alt=""
                  />
                  <p>1. Mount Titlis</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activities;
