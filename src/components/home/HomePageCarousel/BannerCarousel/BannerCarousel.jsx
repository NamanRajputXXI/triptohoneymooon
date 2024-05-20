// import { useState } from "react";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs";
// export default function BannerCarousel() {
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
//     <div className="overflow-hidden py-5 max-w-7xl mx-auto rounded-xl my-20 h-64  sm:h-96 relative">
//       <div
//         className={`flex  transition rounded-xl ease-out duration-500`}
//         style={{
//           transform: `translateX(-${current * 100}%)`,
//         }}
//       >
//         {slides.map((s, i) => {
//           return <img key={i} className="rounded-xl min-h-64 px-5" src={s} />;
//         })}
//       </div>

//       {/* <div className="absolute top-0 sm:h-96 h-64 w-full justify-between items-center flex text-white px-10 text-3xl">
//         <button onClick={previousSlide}>
//           <BsFillArrowLeftCircleFill />
//         </button>
//         <button onClick={nextSlide}>
//           <BsFillArrowRightCircleFill />
//         </button>
//       </div> */}

//       <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
//         {slides.map((s, i) => {
//           return (
//             <div
//               onClick={() => {
//                 setCurrent(i);
//               }}
//               key={"circle" + i}
//               className={`rounded-full w-2 h-2 cursor-pointer  ${
//                 i == current ? "bg-white" : "bg-gray-500"
//               }`}
//             ></div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function BannerCarousel() {
  const slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden py-5 max-w-7xl mx-auto rounded-xl my-20 h-64 sm:h-96 relative">
      <div
        className={`flex rounded-xl transition ease-out duration-500`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => (
          <div key={i} className="w-full rounded-xl flex-shrink-0 px-5">
            <img
              className="rounded-xl w-full object-cover"
              src={s}
              alt={`Slide ${i}`}
            />
          </div>
        ))}
      </div>
      {/* <div className="absolute top-0 sm:h-96 h-64 w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div> */}
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-full w-2 h-2 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
