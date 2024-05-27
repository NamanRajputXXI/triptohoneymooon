import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative md:mt-20 mt-10 h-fit  md:py-20 w-full bg-red-900">
      <div className="absolute h-full w-full inset-0 bg-black bg-opacity-60"></div>
      <div className="grid max-w-7xl lg:gap-8  gap-10 mx-auto relative z-10 font-medium    lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start text-white justify-center p-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Policy</h1>
            <div className="flex flex-col gap-3">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Support</h1>
            <div className="flex flex-col gap-3">
              <p>Contact Us</p>
              <p>About Us</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-10">
          <div className="flex flex-col    gap-3">
            <h1 className="text-xl font-semibold">Quick Link</h1>
            <div className="flex flex-col gap-3">
              <p>Home</p>
              <p>Trending Destination</p>
              <p>Domestic Destination</p>
              <p>Popular Destination</p>
              <p>International Destination </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl  font-semibold">Follow Us on</h1>
            <div className="flex items-center gap-3">
              <Link href={"ab"}>
                <FaFacebook size={30} color="#1877F2" />
              </Link>
              <Link href={"ab"}>
                <FaInstagram size={30} color="#FCAF45" />
              </Link>
              <Link href={"ab"}>
                <FaYoutube size={30} color="#CD201F" />
              </Link>
            </div>
          </div>
          <div className="flex  flex-col gap-3">
            <h1 className="text-xl  font-semibold">Sign Up</h1>
            <div className="flex  flex-col gap-3">
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                omnis, a cum amet sed officia dolorem atque quibusdam
                dignissimos cupiditate.
              </p>
              <div className="flex sm:flex-row flex-col sm:items-center gap-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="px-5 py-2 placeholder:text-white sm:w-auto w-64  bg-gray-400 text-white flex items-center  rounded-xl"
                />
                <button className="flex sm:w-auto w-32 items-center justify-center px-5 py-2 text-black bg-white rounded-xl">
                  send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl md:pb-0 pb-10 mt-5 md:flex-row flex-col gap-5 px-5 relative z-10 text-gray-400 mx-auto flex items-center justify-between">
        <p>@Triptohoneymoon 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
