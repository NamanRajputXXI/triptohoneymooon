import React from "react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const PreviewPage = ({ searchParams }) => {
  const {
    heading,
    duration,
    destination,
    startDate,
    endDate,
    origin,
    roomDetails,
    totalPrice,
  } = searchParams;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Review package</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div className="flex-grow bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">{heading}</h2>

            <div className="flex items-center gap-4 mb-4">
              <span>{startDate}</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {duration}
              </span>
              <span>
                {endDate} / From {origin}
              </span>
            </div>

            <p className="mb-6">{roomDetails}</p>

            <h3 className="text-xl font-semibold mb-4">1. Traveller Details</h3>
            <div className="mb-6">
              <p className="mb-2">
                Login to view your Saved Travellers list, get special offers and
                more
              </p>
              <button className="text-blue-600 font-semibold">
                Login Now →
              </button>
            </div>

            <h4 className="font-semibold mb-2">2 Travellers - {roomDetails}</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                <div>
                  <p className="text-blue-600">Add Traveller</p>
                  <p className="text-sm text-gray-500">
                    *ADULT - SHOULD BE ABOVE 18 YEARS
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                <div>
                  <p className="text-blue-600">Add Traveller</p>
                  <p className="text-sm text-gray-500">
                    *ADULT - SHOULD BE ABOVE 12 YEARS
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Please enter contact details
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email*
                  </label>
                  <input
                    type="email"
                    placeholder="Eg. John.doe@email.com"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Code*
                  </label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option>+91</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile*
                  </label>
                  <input
                    type="tel"
                    placeholder="Eg. 980 123 8910"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
              </div>

              <div className="border-t border-b py-6">
                <h3 className="text-xl font-semibold mb-4">
                  Please enter GST details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Eg. Bangalore"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      GST State*
                    </label>
                    <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                      <option>Select State</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Eg. House Number, Street Name, etc."
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Special Requests</h3>
                <textarea
                  placeholder="Enter your special requests here"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">GRAND TOTAL - 2 Adults</h3>
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                23% OFF
              </span>
            </div>
            <p className="text-3xl font-bold mb-4">₹{totalPrice}</p>
            <p className="text-sm text-gray-500 mb-4">(Inclusive of GST)</p>

            <div className="space-y-2 mb-6">
              <label className="flex items-center">
                <input type="radio" className="mr-2" checked />
                <span>Book Now Pay Later</span>
              </label>
              <label className="flex items-center">
                <input type="radio" className="mr-2" />
                <span>Pay Full Amount Now</span>
              </label>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold mb-4">
              Continue
            </button>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2">Important Information</h4>
              <p className="text-sm text-gray-600">
                By clicking on the Continue button below to proceed with the
                booking, I confirm that I have read and I accept Cancellation
                Policy, User Agreement, Terms of Service and Privacy Policy of
                MakeMyTrip
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreviewPage;
