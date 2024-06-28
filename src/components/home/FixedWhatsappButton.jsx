// @/components/global/FixedWhatsAppButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FixedWhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/7303522478", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed left-4 bottom-4 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default FixedWhatsAppButton;
