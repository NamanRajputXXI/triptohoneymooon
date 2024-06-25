// import React from "react";
// import { TiTick } from "react-icons/ti";
// import { RxCross2 } from "react-icons/rx";
// const InclusionExclusion = ({ inclusions, exclusions }) => {
//   return (
//     <section className="px-5">
//       <div className="border-[1px] w-full md:mb-20 mb-10 p-5 rounded-xl border-gray-400  max-w-7xl mx-auto">
//         <p className="font-bold pb-5 text-xl">What is inside the package</p>
//         <hr className="h-[1px] bg-gray-400" />
//         <div className="flex py-5 w-full md:flex-row flex-col  gap-5 justify-between">
//           <div className="md:w-1/2 w-full">
//             <p className="font-bold text-lg">Inclusions</p>
//             <div className="pt-3">
//               {inclusions.map((inclusion, i) => (
//                 <div className="flex items-center gap-3" key={i}>
//                   <div className="flex items-center justify-center h-10 w-10">
//                     <TiTick size={20} color="green" />
//                   </div>
//                   <p>{inclusion}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="md:w-1/2 pl-10  w-full">
//             <p className="font-bold text-lg">Exclusions</p>
//             <div className="pt-3 w-full">
//               {exclusions.map((exclusion, i) => (
//                 <div className="flex items-center gap-3" key={i}>
//                   <div className="flex items-center justify-center h-10 w-10">
//                     <RxCross2 size={20} color="red" />
//                   </div>
//                   <p>{exclusion}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InclusionExclusion;

import React from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const InclusionExclusion = ({ inclusions, exclusions }) => {
  return (
    <section className="px-5">
      <div className="border-[1px] w-full md:mb-20 mb-10 p-5 rounded-xl border-gray-400 max-w-7xl mx-auto">
        <p className="font-bold pb-5 text-xl">What is inside the package</p>
        <hr className="h-[1px] bg-gray-400" />
        <div className="flex py-5 w-full md:flex-row flex-col gap-5 justify-between">
          <div className="md:w-1/2 w-full">
            <p className="font-bold text-lg mb-3">Inclusions</p>
            <div className="space-y-2">
              {inclusions.map((inclusion, i) => (
                <div className="flex items-start" key={i}>
                  <div className="flex-shrink-0 w-6 h-6 mt-1 mr-2">
                    <TiTick size={20} color="green" />
                  </div>
                  <p className="flex-grow">{inclusion}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full md:pl-10">
            <p className="font-bold text-lg mb-3">Exclusions</p>
            <div className="space-y-2">
              {exclusions.map((exclusion, i) => (
                <div className="flex items-start" key={i}>
                  <div className="flex-shrink-0 w-6 h-6 mt-1 mr-2">
                    <RxCross2 size={20} color="red" />
                  </div>
                  <p className="flex-grow">{exclusion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusionExclusion;
