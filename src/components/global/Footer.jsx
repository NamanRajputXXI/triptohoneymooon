import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative h-fit py-20 w-full bg-[url('https://images.unsplash.com/photo-1497120573086-6219573cf71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGhvbmV5bW9vbnxlbnwwfDB8MHx8fDA%3D')] bg-cover bg-center">
      <div className="absolute h-full w-full  inset-0 bg-black bg-opacity-60"></div>
      <div className="grid max-w-7xl gap-8 mx-auto relative z-10 font-medium  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-start text-white justify-center p-10">
        <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-8">
          <h1 className="text-2xl font-semibold">TRIP TO HONEYMOON</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            esse. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
            inventore!
          </p>
        </div>
        <div className="flex flex-col  items-center lg:pl-20 gap-5">
          <h1 className="text-xl font-semibold">Policy</h1>
          <div className="flex flex-col gap-1">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
        <div className="flex flex-col items-center  lg:pl-20  gap-5">
          <h1 className="text-xl font-semibold">Support</h1>
          <div className="flex flex-col gap-1">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
        <div className="flex flex-col items-center  lg:pl-20  gap-5">
          <h1 className="text-xl  font-semibold">Contact Us</h1>
          <div className="flex flex-col gap-1">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
      <hr className="relative mx-10  my-10 z-10 h-1" />
      <div className="max-w-7xl  md:flex-row flex-col gap-5 px-5 relative z-10 text-white mx-auto flex items-center justify-between">
        <p>@Triptohoneymoon 2024 All Rights Reserved</p>
        <div className="flex items-center gap-3">
          <p>Follow us on</p>
          <div className="flex items-center gap-3">
            <Link href={"ab"}>
              <FaFacebook size={30} />
            </Link>
            <Link href={"ab"}>
              <FaInstagram size={30} color="pink" />
            </Link>
            <Link href={"ab"}>
              <FaYoutube size={30} color="red" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
