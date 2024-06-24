// import React, { useState } from "react";
// import { GiAirBalloon } from "react-icons/gi";

// const ActivityAccordian = ({ activity, index }) => {
//   console.log(activity);
//   const [isOpen, setIsOpen] = useState(true);
//   console.log(activity);
//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div className="border mx-auto my-10 rounded-lg ">
//       <div
//         className="flex justify-between items-center p-4 cursor-pointer"
//         onClick={toggleAccordion}
//       >
//         <div className="flex items-center gap-2">
//           <span className="font-bold mr-5">{index + 1}.</span>
//           <GiAirBalloon size={20} />
//           <p className="text-sm text-gray-500">{activity.activityHeading}</p>
//         </div>

//         <span
//           className={`transform transition-transform ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         >
//           &#9660;
//         </span>
//       </div>
//       {isOpen && (
//         <div className="p-4 flex flex-col gap-5 border-t">
//           <p>{activity.about}</p>

//           <div className="flex gap-5">
//             {activity.images.map((item, i) => (
//               <div className="flex flex-col gap-3" key={i}>
//                 <img
//                   src={item.image}
//                   className="h-46 w-80 rounded-lg object-center object-cover "
//                   alt=""
//                   loading="lazy"
//                 />
//                 {/* <p>{item.heading}</p> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ActivityAccordian;

import React, { useState } from "react";
import { GiAirBalloon } from "react-icons/gi";

const ActivityAccordian = ({ activity, index }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const openGallery = (index) => {
    setShowGallery(true);
    setCurrentImageIndex(index);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % activity.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + activity.images.length) % activity.images.length
    );
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
            {activity.images.slice(0, 3).map((item, i) => (
              <div className="flex flex-col gap-3 relative" key={i}>
                <img
                  src={item.image}
                  className="h-46 w-80 rounded-lg object-center object-cover cursor-pointer"
                  alt=""
                  loading="lazy"
                  onClick={() => openGallery(i)}
                />
                {i === 2 && activity.images.length > 3 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery(3);
                    }}
                    className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md text-sm font-semibold"
                  >
                    See All
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white text-6xl"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-8xl"
          >
            &#8249;
          </button>
          {activity.images[currentImageIndex] && (
            <img
              src={activity.images[currentImageIndex].image}
              alt={`Activity Image ${currentImageIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          )}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-8xl"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default ActivityAccordian;
