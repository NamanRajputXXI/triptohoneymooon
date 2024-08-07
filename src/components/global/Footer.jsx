"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  const [showAdvertiseForm, setShowAdvertiseForm] = useState(false);
  const [advertiseFormData, setAdvertiseFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [advertiseErrors, setAdvertiseErrors] = useState({});
  const [advertiseResult, setAdvertiseResult] = useState("");

  const toggleQuoteForm = () => {
    setShowQuoteForm(!showQuoteForm);
  };

  const toggleAdvertiseForm = () => {
    setShowAdvertiseForm(!showAdvertiseForm);
  };

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

  const validateAdvertiseForm = () => {
    let errors = {};
    let isValid = true;

    if (!advertiseFormData.name) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!advertiseFormData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(advertiseFormData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }
    if (!advertiseFormData.phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    }
    if (!advertiseFormData.company) {
      errors.company = "Company name is required";
      isValid = false;
    }

    setAdvertiseErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdvertiseChange = (e) => {
    const { name, value } = e.target;
    setAdvertiseFormData({ ...advertiseFormData, [name]: value });
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
      formDataToSubmit.append("subject", "New Quote Request");

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

  const handleAdvertiseSubmit = async (e) => {
    e.preventDefault();

    if (validateAdvertiseForm()) {
      setAdvertiseResult("Sending....");

      const formDataToSubmit = new FormData();
      formDataToSubmit.append(
        "access_key",
        "8203b704-160f-4dd1-96c4-8b52b46ff79e"
      );
      formDataToSubmit.append("name", advertiseFormData.name);
      formDataToSubmit.append("email", advertiseFormData.email);
      formDataToSubmit.append("phone", advertiseFormData.phone);
      formDataToSubmit.append("company", advertiseFormData.company);
      formDataToSubmit.append("message", advertiseFormData.message);
      formDataToSubmit.append("subject", "New Advertising Inquiry");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataToSubmit,
        });

        const data = await response.json();

        if (data.success) {
          setAdvertiseResult("Form Submitted Successfully");
          setAdvertiseFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
        } else {
          console.log("Error", data);
          setAdvertiseResult(data.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setAdvertiseResult("An error occurred. Please try again.");
      }
    }
  };

  return (
    <footer className="relative h-fit w-full bg-red-900 text-white">
      <div className="absolute h-full w-full inset-0 bg-black bg-opacity-60"></div>
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid xl:grid-cols-4 2xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Policy</h2>
            <ul className="space-y-2 flex flex-col">
              <Link href={"/privacyPolicy"}>Privacy Policy</Link>
              <Link href={"/terms"}>Terms of use</Link>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-4">Support</h2>
            <ul className="flex flex-col gap-2">
              <Link href={"/contact"}>Contact Us</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/credit"}>Credit</Link>
            </ul>
          </div>
          <div className="flex flex-col items-start">
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
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Trending Destination</Link>
              <Link href={"/"}>Domestic Destination</Link>
              <Link href={"/"}>Popular Destination</Link>
              <Link href={"/"}>International Destination</Link>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Advertise with Us</h2>
            <p className="mb-4">
              Reach our audience of honeymoon travelers. Advertise your services
              or products with us.
            </p>
            <button
              onClick={toggleAdvertiseForm}
              className="px-4 py-2 bg-white text-black rounded"
            >
              Contact for Advertising
            </button>
          </div>
          <div className="flex flex-col">
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
            <div className="flex flex-col pt-10">
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
            </div>
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
                className="w-full bg-[#cf331a] text-white p-2 rounded"
              >
                Submit
              </button>
            </form>
            {result && <p className="mt-4 text-center">{result}</p>}
            <button
              onClick={toggleQuoteForm}
              className="absolute top-0 right-4 text-black text-4xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {showAdvertiseForm && (
        <div className="fixed inset-0 px-3 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white relative text-black p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Advertise with Us</h2>
            <form onSubmit={handleAdvertiseSubmit}>
              <input
                type="text"
                name="name"
                value={advertiseFormData.name}
                onChange={handleAdvertiseChange}
                placeholder="Name"
                className={`w-full p-2 mb-2 border rounded ${
                  advertiseErrors.name ? "border-red-500" : ""
                }`}
              />
              {advertiseErrors.name && (
                <p className="text-red-500 text-sm mb-2">
                  {advertiseErrors.name}
                </p>
              )}
              <input
                type="email"
                name="email"
                value={advertiseFormData.email}
                onChange={handleAdvertiseChange}
                placeholder="Email"
                className={`w-full p-2 mb-2 border rounded ${
                  advertiseErrors.email ? "border-red-500" : ""
                }`}
              />
              {advertiseErrors.email && (
                <p className="text-red-500 text-sm mb-2">
                  {advertiseErrors.email}
                </p>
              )}
              <input
                type="tel"
                name="phone"
                value={advertiseFormData.phone}
                onChange={handleAdvertiseChange}
                placeholder="Phone"
                className={`w-full p-2 mb-2 border rounded ${
                  advertiseErrors.phone ? "border-red-500" : ""
                }`}
              />
              {advertiseErrors.phone && (
                <p className="text-red-500 text-sm mb-2">
                  {advertiseErrors.phone}
                </p>
              )}
              <input
                type="text"
                name="company"
                value={advertiseFormData.company}
                onChange={handleAdvertiseChange}
                placeholder="Company Name"
                className={`w-full p-2 mb-2 border rounded ${
                  advertiseErrors.company ? "border-red-500" : ""
                }`}
              />
              {advertiseErrors.company && (
                <p className="text-red-500 text-sm mb-2">
                  {advertiseErrors.company}
                </p>
              )}
              <textarea
                name="message"
                value={advertiseFormData.message}
                onChange={handleAdvertiseChange}
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
            {advertiseResult && (
              <p className="mt-4 text-center">{advertiseResult}</p>
            )}
            <button
              onClick={toggleAdvertiseForm}
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
