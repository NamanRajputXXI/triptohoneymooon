import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const ProductCategoryCard = ({
  category,
  destinationId,
  rating,
  totalCustomer,
  heading,
  duration,
  price,
  thumbnail,
  previousPrice,
  saveInr,
}) => {
  return (
    <div>
      <Link href={`/products/${category}/${destinationId}`}>
        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src={thumbnail}
            loading="lazy"
            alt={"image"}
            className="object-cover rounded-xl object-center h-72 md:h-96 w-full md:w-96"
          />
        </div>
        <div className="flex w-full text-gray-500 px-1 mt-3 text-sm justify-between item-center">
          <p className="">{duration}</p>
          <div className="flex items-center gap-2">
            <FaStar color="green" />
            {rating} ({totalCustomer})
          </div>
        </div>
        <div className="flex w-full text-sm px-1 mt-3  justify-between item-center">
          <p>{heading}</p>
        </div>
        <div className="flex gap-3 mt-3 px-1 items-center">
          <p className="text-sx font-bold">INR {price}</p>
          <p className="text-xs line-through text-gray-500">{previousPrice}</p>
          <div className="bg-green-200 text-xs font-semibold text-green-900 px-2 py-1">
            SAVE INR {saveInr}
          </div>
        </div>
        <div className="flex gap-3 px-1 items-center">
          <div className="flex items border-red-600 mt-3 border-[1px] px-3 rounded-xl center h-full py-2 ">
            <IoCall size={32} color="red" />
          </div>
          <button className="flex w-full text-lg  mt-3  text-white bg-red-500 font-medium rounded-lg px-2 py-3 justify-center item-center">
            Explore
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCategoryCard;
