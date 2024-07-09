import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const FixedWhatsAppButton = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const hasClicked = sessionStorage.getItem("whatsappClicked");
    if (!hasClicked) {
      setShowNotification(true);
    }
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/7303522478", "_blank");
    setShowNotification(false);
    sessionStorage.setItem("whatsappClicked", "true");
  };

  return (
    <div
      onClick={openWhatsApp}
      className="fixed left-4 bottom-4 z-50 cursor-pointer p-4 rounded-full bg-[#25D366] text-white transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
    >
      {showNotification && (
        <div className="h-5 w-5 -top-1 right-0 flex items-center justify-center rounded-full absolute bg-red-600 text-white">
          1
        </div>
      )}
      <FaWhatsapp size={24} />
    </div>
  );
};

export default FixedWhatsAppButton;
