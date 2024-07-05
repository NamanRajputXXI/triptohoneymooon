"use client";

import { useState, useEffect } from "react";
import RequestQuotePopup from "./RequestQuotePopup";

const PopupWrapper = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showPopup) return null;

  return <RequestQuotePopup onClose={() => setShowPopup(false)} />;
};

export default PopupWrapper;
