import React, { useState } from "react";
import { GiAirBalloon } from "react-icons/gi";

const ActivityAccordian = ({ activity, index }) => {
  console.log(activity);
  const [isOpen, setIsOpen] = useState(false);
  console.log(activity);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border mx-auto my-10 rounded-lg ">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-2">
          <span className="font-bold mr-5">{index + 1}.</span>
          <GiAirBalloon size={20} />
          <p className="text-sm text-gray-500">{activity.activityHeading}</p>
        </div>

        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="p-4 flex flex-col gap-5 border-t">
          <p>{activity.about}</p>

          <div className="flex gap-5">
            {activity.images.map((item, i) => (
              <div className="flex flex-col gap-3" key={i}>
                <img
                  src={item.image}
                  className="h-46 w-80 object-center object-cover "
                  alt=""
                  loading="lazy"
                />
                <p>{item.heading}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityAccordian;
