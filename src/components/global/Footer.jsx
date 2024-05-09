import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full font-Briem min-h-screen flex items-center justify-center bg-black">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full md:w-2/3 font-Briem">
            Plan Your Honeymoon with Us
          </h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full font-Briem md:w-2/3 text-white">
            Let us help you create unforgettable memories on your dream
            honeymoon. Our experts will plan every detail to make it a magical
            experience.
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <a className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
              Get Started
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between">
            <div className="">
              <svg
                width="84"
                height="25"
                viewBox="0 0 84 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path elements */}
              </svg>
            </div>
            <Link
              href={"/about"}
              className="hidden md:block cursor-pointer text-white uppercase"
            >
              About Us
            </Link>
            <Link
              href={"/destination"}
              className="hidden md:block cursor-pointer text-white uppercase"
            >
              Destinations
            </Link>
            <Link
              href={"/packages"}
              className="hidden md:block cursor-pointer text-white uppercase"
            >
              Packages
            </Link>
            <Link
              href={"contact"}
              className="hidden md:block cursor-pointer text-white uppercase"
            >
              Contact
            </Link>
            <div className="flex flex-row space-x-8 items-center justify-between">
              <a>
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG path element */}
                </svg>
              </a>
              <a>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG path elements */}
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG path element */}
                </svg>
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-12 text-white">
            &copy; {new Date().getFullYear()} Trip to Honeymoon. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
