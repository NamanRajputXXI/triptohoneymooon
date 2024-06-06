"use client";
import React, { useState } from "react";

const RightSideSectionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    travellerCount: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.fullName) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.travelDate) {
      errors.travelDate = "Travel Date is required";
      isValid = false;
    }

    if (!formData.travellerCount) {
      errors.travellerCount = "Traveller Count is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission logic here
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4 rounded-md">
      <div className="mb-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name*"
          className={`w-full px-3 py-2 border  border-gray-200 rounded-md focus:outline-none focus:ring-2 ${
            errors.fullName ? "focus:ring-red-500" : "focus:ring-black"
          }`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
          className={`w-full px-3 py-2  border border-gray-200 rounded-md focus:outline-none focus:ring-2 ${
            errors.email ? "focus:ring-red-500" : "focus:ring-black"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <div className="mb-4 flex">
        <div className="flex-shrink-0 mr-2 bg-gray-200 rounded-l-md">
          <span className="px-3 flex justify-center items-center py-2 text-gray-500">
            +91
          </span>
        </div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone*"
          className={`w-full px-3 py-2  border border-gray-200 rounded-md focus:outline-none focus:ring-2 ${
            errors.email ? "focus:ring-red-500" : "focus:ring-black"
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>
      <div className="mb-4 flex">
        <input
          type="date"
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
          placeholder="Travel Date*"
          className={`w-1/2 mr-2 px-3 py-2 border  border-gray-200 rounded-md focus:outline-none focus:ring-2 ${
            errors.travelDate ? "focus:ring-red-500" : "focus:ring-black"
          }`}
        />
        {errors.travelDate && (
          <p className="text-red-500 text-sm mt-1">{errors.travelDate}</p>
        )}
        <input
          type="number"
          name="travellerCount"
          value={formData.travellerCount}
          onChange={handleChange}
          placeholder="Traveller Count*"
          className={`w-1/2 px-3 py-2 border border-gray-200  rounded-md focus:outline-none focus:ring-2 ${
            errors.travellerCount ? "focus:ring-red-500" : "focus:ring-black"
          }`}
        />
        {errors.travellerCount && (
          <p className="text-red-500 text-sm mt-1">{errors.travellerCount}</p>
        )}
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message..."
          className="w-full px-3 py-2 border border-gray-200  rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <button
        type="submit"
        className="bg-[#cf331a] w-full rounded-xl py-3 px-4 text-white"
      >
        SEND EQUIRY
      </button>
    </form>
  );
};

export default RightSideSectionForm;
