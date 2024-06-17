"use client";
import React, { useState } from "react";

const RightSideSectionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    coupleCount: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

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

    if (!formData.coupleCount || formData.coupleCount <= 0) {
      errors.coupleCount = "Couple Count must be greater than 0";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check for coupleCount field and only allow values greater than 0
    if (name === "coupleCount") {
      if (value === "" || parseInt(value) > 0) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setResult("Sending....");

      const formDataToSubmit = new FormData();
      formDataToSubmit.append(
        "access_key",
        "8203b704-160f-4dd1-96c4-8b52b46ff79e"
      );
      formDataToSubmit.append("fullName", formData.fullName);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("travelDate", formData.travelDate);
      formDataToSubmit.append("coupleCount", formData.coupleCount);
      formDataToSubmit.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          travelDate: "",
          coupleCount: "",
          message: "",
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
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
          className={`w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 ${
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
          className={`w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 ${
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
          className={`w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 ${
            errors.phone ? "focus:ring-red-500" : "focus:ring-black"
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
          title="Travel Date*"
          className={`w-1/2 mr-2 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 ${
            errors.travelDate ? "focus:ring-red-500" : "focus:ring-black"
          }`}
        />
        {errors.travelDate && (
          <p className="text-red-500 text-sm mt-1">{errors.travelDate}</p>
        )}
        <input
          type="number"
          name="coupleCount"
          value={formData.coupleCount}
          onChange={handleChange}
          placeholder="Couple Count*"
          min="1"
          className={`w-1/2 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 ${
            errors.coupleCount ? "focus:ring-red-500" : "focus:ring-black"
          }`}
        />
        {errors.coupleCount && (
          <p className="text-red-500 text-sm mt-1">{errors.coupleCount}</p>
        )}
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message..."
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <button
        type="submit"
        className="bg-[#cf331a] w-full rounded-xl py-3 px-4 text-white"
      >
        SEND ENQUIRY
      </button>
      {result && <p className="mt-4 text-center">{result}</p>}
    </form>
  );
};

export default RightSideSectionForm;
