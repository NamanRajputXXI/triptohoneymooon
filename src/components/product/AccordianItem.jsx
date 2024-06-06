"use client";
import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border max-w-7xl mx-auto my-10 rounded-lg ">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="md:text-2xl sm:text-xl text-lg font-bold">{title}</h3>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="p-4 border-t">
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
