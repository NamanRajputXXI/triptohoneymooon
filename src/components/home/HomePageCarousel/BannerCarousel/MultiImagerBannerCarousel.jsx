// import React, { useState } from "react";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs";

// const MultiImagerBannerCarousel = () => {
//   let slides = [
//     "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
//     "https://wallpapercave.com/wp/wp3386769.jpg",
//     "https://wallpaperaccess.com/full/809523.jpg",
//     "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
//   ];
//   let [current, setCurrent] = useState(0);

//   let previousSlide = () => {
//     if (current === 0) setCurrent(slides.length - 1);
//     else setCurrent(current - 1);
//   };

//   let nextSlide = () => {
//     if (current === slides.length - 1) setCurrent(0);
//     else setCurrent(current + 1);
//   };

//   return (
//     <div className="flex sm:flex-row flex-col my-20 px-5 justify-end sm:h-64 h-48 items-center max-w-7xl mx-auto gap-3">
//       <div className="flex image-carousel lg:w-1/2 sm:w-1/3 w-full sm:h-64 h-48 ">
//         <div className="overflow-hidden rounded-xl sm:h-64 h-48 relative">
//           <div
//             className={`flex transition h-full ease-out duration-500`}
//             style={{ transform: `translateX(-${current * 100}%)` }}
//           >
//             {slides.map((s, i) => {
//               return <img key={i} className="h-full" src={s} alt="" />;
//             })}
//           </div>
//           <div className="absolute top-0 sm:h-64 h-48 w-full justify-between items-center flex text-white lg:px-10 px-2 text-3xl">
//             <button onClick={previousSlide}>
//               <BsFillArrowLeftCircleFill />
//             </button>
//             <button onClick={nextSlide}>
//               <BsFillArrowRightCircleFill />
//             </button>
//           </div>
//           <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
//             {slides.map((s, i) => {
//               return (
//                 <div
//                   onClick={() => {
//                     setCurrent(i);
//                   }}
//                   key={"circle" + i}
//                   className={`rounded-full w-2 h-2 cursor-pointer ${
//                     i == current ? "bg-white" : "bg-gray-500"
//                   }`}
//                 ></div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center gap-3  lg:w-1/2 sm:w-2/3 w-full">
//         <div className="flex w-1/3 sm:h-64 h-48 rounded-xl overflow-hidden">
//           <img
//             className="rounded-xl w-full transition-all duration-500 hover:scale-110"
//             src="https://plus.unsplash.com/premium_photo-1664541337081-421a05d7e6ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8MXwwfHx8MA%3D%3D"
//             alt=""
//           />
//         </div>
//         <div className="flex w-1/3 sm:h-64 h-48 rounded-xl overflow-hidden">
//           <img
//             className="rounded-xl w-full transition-all duration-500 hover:scale-110"
//             src="https://images.unsplash.com/photo-1481841580057-e2b9927a05c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlfGVufDB8MXwwfHx8MA%3D%3D"
//             alt=""
//           />
//         </div>
//         <div className="flex w-1/3   sm:h-64 h-48 rounded-xl overflow-hidden">
//           <img
//             className="rounded-xl transition-all w-full duration-500 hover:scale-110"
//             src="https://images.unsplash.com/photo-1591969851586-adbbd4accf81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXBsZXxlbnwwfDF8MHx8fDA%3D"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiImagerBannerCarousel;
import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const MultiImagerBannerCarousel = () => {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="flex lg:flex-row flex-col  my-10 sm:my-20 px-5 justify-end h-fit lg:h-64 items-center max-w-7xl mx-auto gap-3">
      <div className="flex image-carousel w-full lg:w-1/2 h-48 sm:h-64 ">
        <div className="overflow-hidden rounded-xl h-48 sm:h-64 relative">
          <div
            className={`flex transition ease-out duration-500`}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s, i) => {
              return <img key={i} src={s} alt="" loading="lazy" />;
            })}
          </div>

          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s, i) => {
              return (
                <div
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={"circle" + i}
                  className={`rounded-full w-2 h-2 cursor-pointer ${
                    i == current ? "bg-white" : "bg-gray-500"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full  lg:w-1/2">
        <div className="flex w-1/3 h-44 sm:h-64 rounded-xl overflow-hidden">
          <img
            className="rounded-xl w-full object-cover object-center transition-all duration-500 hover:scale-110"
            src="https://plus.unsplash.com/premium_photo-1664541337081-421a05d7e6ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8MXwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex w-1/3 h-44 sm:h-64 rounded-xl overflow-hidden">
          <img
            className="rounded-xl w-full object-cover object-center transition-all duration-500 hover:scale-110"
            src="https://images.unsplash.com/photo-1481841580057-e2b9927a05c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlfGVufDB8MXwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex w-1/3  h-44 sm:h-64 rounded-xl overflow-hidden">
          <img
            className="rounded-xl object-cover object-center transition-all w-full duration-500 hover:scale-110"
            src="https://images.unsplash.com/photo-1591969851586-adbbd4accf81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXBsZXxlbnwwfDF8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MultiImagerBannerCarousel;
