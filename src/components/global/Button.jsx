import React from "react";

const Button = ({ btnText }) => {
  return (
    <button className="px-8 w-fit py-2 text-white flex text-lg items-center justify-center bg-[#cf331a] rounded-lg">
      {btnText}
    </button>
  );
};

export default Button;
