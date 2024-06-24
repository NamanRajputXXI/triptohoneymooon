// import React from "react";

// const HotelImages = ({ images, hotelName }) => (
//   <div className="flex sm:flex-row flex-col gap-5 w-full sm:p-4 p-1 items-center">
//     {images.map((image, index) => (
//       <div key={index} className="sm:w-1/2 w-full flex flex-col gap-3">
//         <img
//           src={image}
//           className="w-full rounded-lg"
//           alt={`Image of ${hotelName}`}
//           loading="lazy"
//         />
//       </div>
//     ))}
//   </div>
// );

// export default HotelImages;

import React from "react";

const HotelImages = ({ images, hotelName }) => (
  <div className="flex sm:flex-row flex-col gap-5 w-full sm:p-4 p-1 items-center">
    {images.map((image, index) => (
      <div key={index} className="sm:w-1/2 w-full flex flex-col gap-3">
        <img
          src={image}
          className="w-full rounded-lg"
          alt={`Image of ${hotelName}`}
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

export default HotelImages;
