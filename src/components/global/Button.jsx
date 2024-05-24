import React from "react";
import { IoCallOutline } from "react-icons/io5";

const Button = ({ btnText }) => {
  return (
    <button className="md:px-8 px-4 w-fit py-2 text-white flex md:text-lg sm:text-base text-sm items-center justify-center bg-[#cf331a] rounded-lg">
      {btnText}
    </button>
  );
};

export default Button;
