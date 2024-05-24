// "use client";
// import React, { useEffect, useRef } from "react";
// import Button from "../global/Button";
// import KeenSlider from "keen-slider";
// import "keen-slider/keen-slider.min.css";
// import domesticCarouselData from "@/data/domesticCarouselData";
// import popularCarouselData from "@/data/popularCarouselData";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import Link from "next/link";

// const InternationDestinationSection = () => {
//   const sliderContainer = useRef(null);
//   const keenSlider = useRef(null);

//   useEffect(() => {
//     if (sliderContainer.current && !keenSlider.current) {
//       keenSlider.current = new KeenSlider(sliderContainer.current, {
//         loop: true,
//         slides: {
//           origin: "center",
//           perView: 1, // Default to 1 review visible
//           spacing: 8,
//         },
//         breakpoints: {
//           "(min-width: 288px)": {
//             slides: {
//               origin: "auto",
//               perView: 1, // Show 2 reviews on screens >= 768px
//               spacing: 8,
//             },
//           },
//           "(min-width: 768px)": {
//             slides: {
//               origin: "auto",
//               perView: 2, // Show 2 reviews on screens >= 768px
//               spacing: 8,
//             },
//           },
//           "(min-width: 1024px)": {
//             slides: {
//               origin: "auto",
//               perView: 4, // Show 3 reviews on screens >= 1024px
//               spacing: 12,
//             },
//           },
//         },
//       });
//     }
//   }, []);

//   const handlePrevSlide = () => {
//     if (keenSlider.current) {
//       keenSlider.current.prev();
//     }
//   };

//   const handleNextSlide = () => {
//     if (keenSlider.current) {
//       keenSlider.current.next();
//     }
//   };
//   return (
//     <section className="bg-red-100 h-fit  w-full py-10 sm:py-20">
//       <div className="max-w-7xl pb-10 flex flex-col gap-10 mx-auto">
//         <div className="flex w-full items-center justify-between px-5">
//           <h5 className=" text-2xl">International Destination</h5>
//           <Button btnText={"Explore All"} />
//         </div>
//       </div>
//       <div className="flex relative h-fit py-20 pb-44 w-full bg-[url('https://images.unsplash.com/photo-1497256654106-4a29efafb831?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
//         <div className="absolute inset-0 h-fit w-full bg-black bg-opacity-30"></div>
//         <div className="flex gap-10">
//           <div className=" relative gap-10 pl-10   z-10 flex flex-col text-white ">
//             <h1 className="text-white text-7xl font-bold">
//               Majestic Destinations
//             </h1>
//             <div className="flex w-full relative gap-10">
//               <div className="flex flex-col gap-10">
//                 <p className="w-[400px]">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
//                   dicta nesciunt totam, sunt saepe corporis veniam illum dolor
//                   accusamus et.
//                 </p>
//                 <Button btnText={"Explore Now >>"} />
//               </div>

//               <div className="mx-auto absolute -bottom-32 left-[400px]   xl:max-w-[1000px]   lg:ps-8 ">
//                 <div className=" z-[50]  lg:col-span-2   px-3 lg:mx-0">
//                   <div className="relative flex gap-4">
//                     <button
//                       aria-label="Previous slide"
//                       onClick={handlePrevSlide}
//                       className="  absolute top-32  -left-6 z-[100]  flex justify-center  items-center"
//                     >
//                       <FaArrowLeftLong color="white" size={40} />
//                     </button>
//                     <button
//                       aria-label="Next slide"
//                       onClick={handleNextSlide}
//                       className="flex justify-center  items-center absolute top-32  -right-6 z-[100] "
//                     >
//                       <FaArrowRightLong color="white" size={40} />
//                     </button>
//                   </div>

//                   <div ref={sliderContainer} className="keen-slider">
//                     {popularCarouselData.map((item, i) => (
//                       <div className="keen-slider__slide" key={i}>
//                         <Link href={item.link}>
//                           <div className="flex flex-shrink-0 relative  w-full">
//                             <img
//                               src={item.imageUrl}
//                               alt={item.title}
//                               className="object-cover z-50 rounded-2xl object-center h-72  w-full"
//                             />
//                           </div>
//                         </Link>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InternationDestinationSection;

"use client";
import React, { useEffect, useRef } from "react";
import Button from "../global/Button";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticCarouselData from "@/data/domesticCarouselData";
import popularCarouselData from "@/data/popularCarouselData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const CarouselImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover rounded-2xl ${className}`}
    />
  );
};

const InternationDestinationSection = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1, // Default to 1 review visible
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 640px)": {
            slides: {
              origin: "auto",
              perView: 2, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 3, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 4, // Show 3 reviews on screens >= 1024px
              spacing: 12,
            },
          },
        },
      });
    }
  }, []);

  const handlePrevSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.prev();
    }
  };

  const handleNextSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.next();
    }
  };

  return (
    <section className="bg-red-100 h-fit w-full py-10 sm:py-20">
      <div className="max-w-7xl pb-10 flex flex-col gap-10 mx-auto">
        <div className="flex w-full items-center justify-between px-5">
          <h5 className=" text-2xl">International Destination</h5>
          <Button btnText={"Explore All"} />
        </div>
      </div>
      <div className="flex relative  gap-10 flex-col h-fit py-20 md:pb-44 pb-20 w-full bg-[url('https://images.unsplash.com/photo-1497256654106-4a29efafb831?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
        <div className="absolute inset-0 h-fit w-full bg-black bg-opacity-90"></div>
        <div className="flex gap-10">
          <div className=" relative md:gap-10 gap-5 px-6 md:px-0 md:pl-10 z-10 flex flex-col text-white ">
            <h1 className="text-white text-4xl md:text-7xl font-bold">
              Majestic Destinations
            </h1>
            <div className="flex w-full relative gap-10">
              <div className="flex flex-col gap-10">
                <p className="md:w-[400px] w-full ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  dicta nesciunt totam, sunt saepe corporis veniam illum dolor
                  accusamus et.
                </p>
                <Button btnText={"Explore Now >>"} />
              </div>

              {/* <div className="mx-auto absolute -bottom-32 left-[400px] lg:max-w-[600px] xl:max-w-[1000px] lg:ps-8">
                <div className=" z-[50] lg:col-span-2 px-3 lg:mx-0">
                  <div className="relative flex gap-4">
                    <button
                      aria-label="Previous slide"
                      onClick={handlePrevSlide}
                      className="  absolute top-32  -left-6 z-[100]  flex justify-center  items-center"
                    >
                      <FaArrowLeftLong color="white" size={40} />
                    </button>
                    <button
                      aria-label="Next slide"
                      onClick={handleNextSlide}
                      className="flex justify-center  items-center absolute top-32  -right-6 z-[100] "
                    >
                      <FaArrowRightLong color="white" size={40} />
                    </button>
                  </div>

                  <div ref={sliderContainer} className="keen-slider">
                    {popularCarouselData.map((item, i) => (
                      <div className="keen-slider__slide" key={i}>
                        <Link href={item.link}>
                          <div className="flex flex-shrink-0 relative w-full">
                            <CarouselImage
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full sm:h-72 md:h-96 lg:h-[200px] xl:h-[300px]"
                            />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mx-auto px-6 md:px-0 xl:bottom-10 bottom-5 md:absolute z-[100]  xl:left-[400px] left-[250px] lg:left-80 md:w-2/3 w-full lg:ps-8">
          <div className=" z-[50] lg:col-span-2 px-3 lg:mx-0">
            <div className="relative flex gap-4">
              <button
                aria-label="Previous slide"
                onClick={handlePrevSlide}
                className="  absolute xl:top-32  md:top-28 top-36 -left-5 md:-left-6 z-[100]  flex justify-center  items-center"
              >
                <div className="md:flex hidden ">
                  <FaArrowLeftLong color="white" size={40} />
                </div>
                <div className="md:hidden flex">
                  <FaArrowLeftLong color="white" size={20} />
                </div>
              </button>
              <button
                aria-label="Next slide"
                onClick={handleNextSlide}
                className="flex justify-center  items-center absolute xl:top-32 md:top-28 top-36 -right-5 md:-right-6 z-[100] "
              >
                <div className="md:flex hidden ">
                  <FaArrowRightLong color="white" size={40} />
                </div>
                <div className="md:hidden flex ">
                  <FaArrowRightLong color="white" size={20} />
                </div>
              </button>
            </div>

            <div ref={sliderContainer} className="keen-slider">
              {popularCarouselData.map((item, i) => (
                <div className="keen-slider__slide" key={i}>
                  <Link href={item.link}>
                    <div className="flex flex-shrink-0 relative w-full">
                      <CarouselImage
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-[300px]  lg:h-[250px] xl:h-[300px]"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationDestinationSection;
