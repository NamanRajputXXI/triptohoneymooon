// import React from "react";

// const HotelAmenities = ({ amenities }) => {
//   return (
//     <div className="flex flex-col gap-2">
//       <h2 className="text-xl font-bold">Amenities</h2>
//       <ul>
//         {amenities.map((amenity, index) => (
//           <li key={index} className="flex gap-1 items-center">
//             <span>{index + 1}.</span> {amenity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HotelAmenities;

import React from "react";

const HotelAmenities = ({ amenities }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Amenities</h2>
      <ul>
        {amenities.map((amenity, index) => (
          <li key={index} className="flex gap-1 items-center">
            <span>{index + 1}.</span> {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelAmenities;
