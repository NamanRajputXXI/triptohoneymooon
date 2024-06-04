import React from "react";

const LeftSideSection = ({ heading }) => {
  return (
    <div className="col-span-2">
      <p className="text-4xl font-bold">{heading}</p>
    </div>
  );
};

export default LeftSideSection;
