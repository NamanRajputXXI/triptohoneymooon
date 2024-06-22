"use client";

import { useState, useEffect } from "react";
import RequestQuotePopup from "./RequestQuotePopup";

const PopupWrapper = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return <RequestQuotePopup onClose={() => setShowPopup(false)} />;
};

export default PopupWrapper;
