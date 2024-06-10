"use client";
import React, { useState } from "react";
import AdditionalInfoPopup from "./AdditionalInfoPopup";

// const AdditionalInfo = () => {
//   return (
//     <section className="md:my-20 my-10">
//       <div className="max-w-7xl rounded-2xl flex flex-col gap-10 mx-auto bg-gray-300 p-5">
//         <p>Additional Information</p>
//         <div className="flex w-full justify-between">
//           <p className="underline">About the Tour :-</p>
//           <p>Read more</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdditionalInfo;

const AdditionalInfo = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="md:my-20 my-10 relative">
      <div className="max-w-7xl rounded-2xl flex flex-col gap-10 mx-auto bg-gray-300 p-5">
        <p>Additional Information</p>
        <div className="flex w-full justify-between">
          <p className="underline">About the Tour :-</p>
          <p className="cursor-pointer" onClick={openPopup}>
            Read more
          </p>
        </div>
      </div>

      {isPopupOpen && <AdditionalInfoPopup onClose={closePopup} />}
    </section>
  );
};

export default AdditionalInfo;
