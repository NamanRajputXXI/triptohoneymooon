"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="flex font-medium text-sm leading-6 flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white  py-4">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="inline-flex items-center gap-x-2 text-xl font-semibold"
              href="/"
            >
              <Image src={"/logo.png"} width={160} height={70} alt="Logo" />
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
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
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
              <Link
                className=" hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300  duration-300"
                href="/"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                className=" hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 duration-300 "
                href="/about"
              >
                About Us
              </Link>
              <Link
                className=" hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 duration-300"
                href="/contact"
              >
                Domestic
              </Link>
              <Link
                className=" hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 duration-300"
                href="/blog"
              >
                International
              </Link>
              <Link
                className=" hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300  duration-300"
                href="/blog"
              >
                Blogs
              </Link>
              <Link
                className=" hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 duration-300"
                href="/blog"
              >
                Gift an experience
              </Link>
              <Button />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
