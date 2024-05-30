// import React from "react";
// import OurServicesCarousel from "./OurServicesCarousel";

// const OurServices = () => {
//   return (
//     <section className="my-20 ">
//       <div className=" gap-5 items-center flex justif  max-w-[1350px] ">
//         <div className="flex flex-col w-1/3 gap-5">
//           <h1 className="text-4xl font-bold text-red-700">Services</h1>
//           <p className="text-5xl font-bold">Our top value category for you</p>
//         </div>
//         <div className="w-2/3">
//           <OurServicesCarousel />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;

import React from "react";
import OurServicesCarousel from "./OurServicesCarousel";

const OurServices = () => {
  return (
    <section className="my-20">
      <div className="max-w-[1350px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-end gap-5">
        <div className="flex flex-col w-full lg:w-1/3 gap-5 sm:px-8 px-5 ">
          <p className="md:text-5xl text-3xl  font-bold">
            Our top value category for you
          </p>
        </div>
        <div className="w-full lg:w-2/3">
          <OurServicesCarousel />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
