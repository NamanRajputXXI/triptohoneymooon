import React from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
const InclusionExclusion = ({ inclusions, exclusions }) => {
  return (
    <div className="border-[1px] w-full md:my-20 my-10 p-5 rounded-xl border-gray-400  max-w-7xl mx-auto">
      <p className="font-bold pb-5 text-xl">What is inside the package</p>
      <hr className="h-[1px] bg-gray-400" />
      <div className="flex py-5 w-full  gap-5 justify-between">
        <div className="w-1/2">
          <p className="font-bold text-lg">Inclusions</p>
          <div className="pt-3">
            {inclusions.map((inclusion, i) => (
              <div className="flex items-center gap-3" key={i}>
                <TiTick size={20} color="green" />
                <p>{inclusion}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <p className="font-bold text-lg">Exclusions</p>
          <div className="pt-3 w-full">
            {exclusions.map((exclusion, i) => (
              <div className="flex items-center gap-3" key={i}>
                <RxCross2 size={20} color="red" /> <p>{exclusion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InclusionExclusion;
