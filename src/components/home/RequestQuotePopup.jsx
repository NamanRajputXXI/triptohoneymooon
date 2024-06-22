"use client";

import React, { useState, useEffect } from "react";

const RequestQuotePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      document.body.style.overflow = "hidden"; // Disable scrolling on body
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset"; // Re-enable scrolling on body
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "unset"; // Re-enable scrolling on body
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white h-fit relative p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8 mx-4">
        <div className="flex flex-col md:flex-row">
          {/* Left side - QR Code */}
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4">Scan for WhatsApp</h3>
            <img
              src="/qr/whatsAppChatQr.jpg"
              alt="WhatsApp QR Code"
              className="w-48 h-48"
            />
            <p className="mt-4 text-center text-sm text-gray-600">
              Scan this QR code to chat with us on WhatsApp
            </p>
          </div>

          {/* Right side - Request Quote Form */}
          <div className="md:w-1/2">
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
                className="w-full bg-[#cf331a] text-white p-2 rounded transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <button
          onClick={closePopup}
          className="absolute top-2 right-4 text-black text-4xl hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default RequestQuotePopup;
