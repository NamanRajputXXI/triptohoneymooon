"use client";

import React, { useState, useEffect } from "react";

const RequestQuotePopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.fullName) {
      errors.fullName = "Name is required";
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

    if (!formData.destination) {
      errors.destination = "Destination is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      formDataToSubmit.append("destination", formData.destination);
      formDataToSubmit.append("message", formData.message);

      try {
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
            destination: "",
            message: "",
          });

          setTimeout(() => {
            onClose();
          }, 1000);
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setResult("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white h-fit relative p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8 mx-4">
        <div className="flex flex-col md:flex-row">
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

          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Name"
                className={`w-full p-2 mb-2 border rounded ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mb-2">{errors.fullName}</p>
              )}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full p-2 mb-2 border rounded ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-2">{errors.email}</p>
              )}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className={`w-full p-2 mb-2 border rounded ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mb-2">{errors.phone}</p>
              )}
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Destination"
                className={`w-full p-2 mb-2 border rounded ${
                  errors.destination ? "border-red-500" : ""
                }`}
              />
              {errors.destination && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.destination}
                </p>
              )}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
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
            {result && <p className="mt-4 text-center">{result}</p>}
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-black text-4xl hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default RequestQuotePopup;
