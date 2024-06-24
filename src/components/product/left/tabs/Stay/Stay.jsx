// "use client";
// import React, { useState, useMemo, useCallback } from "react";
// import DestinationButton from "./DestinationButton";
// import HotelCard from "./HotelCard";

// const Stay = ({ selected, packageCategory }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [selectedDestination, setSelectedDestination] = useState(0);

//   const selectedCategory = useMemo(
//     () => packageCategory?.[selected],
//     [packageCategory, selected]
//   );

//   const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

//   if (!selectedCategory) return <div>No data available</div>;

//   const { category, hotels } = selectedCategory;

//   return (
//     <div className="border max-w-7xl mx-auto rounded-lg">
//       <div
//         className="flex justify-between items-center p-4 cursor-pointer"
//         onClick={toggleOpen}
//         aria-expanded={isOpen}
//       >
//         <p className="sm:text-xl text-lg font-bold">
//           Hotel Details for {category} Category
//         </p>
//         <span
//           className={`transform transition-transform ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         >
//           &#9660;
//         </span>
//       </div>
//       {isOpen && (
//         <div className="sm:p-4 p-2 border-t">
//           <div className="flex flex-col gap-5">
//             <div className="bg-gray-300 flex justify-between items-center p-4 rounded-lg w-full">
//               <p>Hotels List for the {category} Category</p>
//             </div>
//             <p className="text-blue-600 font-bold">
//               Stays will be allocated based on availability or similar category
//             </p>
//             <div className="flex space-x-2 mb-4">
//               {hotels.map((destination, index) => (
//                 <DestinationButton
//                   key={destination.destination}
//                   isSelected={selectedDestination === index}
//                   onClick={() => setSelectedDestination(index)}
//                 >
//                   {destination.destination}
//                 </DestinationButton>
//               ))}
//             </div>
//             {hotels[selectedDestination].hotelName.map((hotel, index) => (
//               <HotelCard key={hotel.hotelName} hotel={hotel} index={index} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Stay;

"use client";
import React, { useState, useMemo, useCallback } from "react";
import DestinationButton from "./DestinationButton";
import HotelCard from "./HotelCard";

const Stay = ({ selected, packageCategory }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedDestination, setSelectedDestination] = useState(0);

  const selectedCategory = useMemo(
    () => packageCategory?.[selected],
    [packageCategory, selected]
  );

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  if (!selectedCategory) return <div>No data available</div>;

  const { category, hotels } = selectedCategory;

  return (
    <div className="border max-w-7xl mx-auto rounded-lg">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <p className="sm:text-xl text-lg font-bold">
          Hotel Details for {category} Category
        </p>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="sm:p-4 p-2 border-t">
          <div className="flex flex-col gap-5">
            <div className="bg-gray-300 flex justify-between items-center p-4 rounded-lg w-full">
              <p>Hotels List for the {category} Category</p>
            </div>
            <p className="text-blue-600 font-bold">
              Stays will be allocated based on availability or similar category
            </p>
            <div className="flex space-x-2 mb-4">
              {hotels.map((destination, index) => (
                <DestinationButton
                  key={destination.destination}
                  isSelected={selectedDestination === index}
                  onClick={() => setSelectedDestination(index)}
                >
                  {destination.destination}
                </DestinationButton>
              ))}
            </div>
            {hotels[selectedDestination].hotelName.map((hotel, index) => (
              <HotelCard key={hotel.hotelName} hotel={hotel} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Stay;
