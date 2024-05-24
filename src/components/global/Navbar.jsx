"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    const baseClass =
      "hover:text-[#cf331a] text-gray-500 text-[#cf331a] duration-300 relative text-lg w-fit block ";
    const activeClass = "text-[#cf331a] ";
    return currentPath === path ? `${baseClass} ${activeClass}` : baseClass;
  };

  return (
    <section className="flex bg-white font-medium text-sm leading-6 flex-wrap sm:justify-start sm:flex-nowrap w-full  pt-4">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="inline-flex items-center gap-x-2 text-xl font-semibold"
            href="/"
          >
            <Image
              src={"/logo.png"}
              className="md:flex hidden"
              width={280}
              height={120}
              alt="Logo"
            />
            <Image
              src={"/logo.png"}
              width={200}
              className="md:hidden flex"
              height={80}
              alt="Logo"
            />
          </a>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-image-and-text-1"
              aria-controls="navbar-image-and-text-1"
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              {isOpen ? (
                <RxCross1 className="hs-collapse-open:block " size={20} />
              ) : (
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          id="navbar-image-and-text-1"
          className={`hs-collapse ${
            isOpen ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
        >
          <div className="flex font-medium flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={getLinkClass("/about")}>
              About
            </Link>
            <Link href="/domestic" className={getLinkClass("/domestic")}>
              Domestic
            </Link>
            <Link
              href="/international"
              className={getLinkClass("/international")}
            >
              International
            </Link>
            <Link href="/blog" className={getLinkClass("/blog")}>
              Blogs
            </Link>
            <Link
              href="/giftAnExperience"
              className={getLinkClass("/giftAnExperience")}
            >
              Gift an experience
            </Link>
            <Button btnText={"1800-121-4252"} />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
