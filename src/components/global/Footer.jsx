"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const toggleQuoteForm = () => {
    setShowQuoteForm(!showQuoteForm);
  };

  return (
    <footer className="relative h-fit w-full bg-red-900 text-white">
      <div className="absolute h-full w-full inset-0 bg-black bg-opacity-60"></div>
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center ">
            <h2 className="text-xl font-semibold mb-4">Policy</h2>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-4">Support</h2>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="flex flex-col items-center ">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Trending Destination</li>
              <li>Domestic Destination</li>
              <li>Popular Destination</li>
              <li>International Destination</li>
            </ul>
          </div>
          <div className="flex flex-col items-center ">
            <h2 className="text-xl font-semibold mb-4">Follow Us on</h2>
            <div className="flex space-x-4 mb-8">
              <Link href="https://www.facebook.com/people/Trip-to-Honeymoon/61551720045200/">
                <FaFacebook size={30} color="#1877F2" />
              </Link>
              <Link href="https://www.instagram.com/triptohoneymoon_official/">
                <FaInstagram size={30} color="#FCAF45" />
              </Link>
              <Link href="#">
                <FaYoutube size={30} color="#CD201F" />
              </Link>
            </div>
            <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
            <p className="mb-4">
              Sign up to receive exclusive offers on honeymoon packages, updates
              on romantic destinations, and tips for planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 bg-gray-700 rounded"
              />
              <button className="px-4 py-2 bg-white text-black rounded">
                Send
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <h2 className="text-xl font-semibold mb-4">Connect with Us</h2>
            <p className="mb-4">Scan to chat on WhatsApp</p>
            <img
              src="/qr/whatsAppChatQr.jpg"
              alt="WhatsApp QR Code"
              className="w-32 h-32 mb-4"
            />
            <button
              onClick={toggleQuoteForm}
              className="px-4 py-2 bg-white text-black rounded"
            >
              Request a Quote
            </button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>@Triptohoneymoon 2024 All Rights Reserved</p>
          <p>Unit of Admire Tours & Holidays Pvt. Ltd</p>
        </div>
      </div>

      {showQuoteForm && (
        <div className="fixed inset-0 px-3 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white relative text-black p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                placeholder="Destination"
                className="w-full p-2 mb-2 border rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 mb-2 border rounded"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#cf331a] text-white p-2 rounded"
              >
                Submit
              </button>
            </form>
            <button
              onClick={toggleQuoteForm}
              className="absolute top-0 right-4 text-black text-4xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
