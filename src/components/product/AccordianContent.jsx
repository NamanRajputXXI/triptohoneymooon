import React, { useState } from "react";

const AccordionContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "More on Switzerland Tourism",
      content: "This is the content for Accordion Item 1.",
    },
    {
      title: "Accordion Item 2",
      content: "This is the content for Accordion Item 2.",
    },
    {
      title: "Accordion Item 3",
      content: "This is the content for Accordion Item 3.",
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`accordion-item border border-gray-300 rounded-md mb-4 ${
            activeIndex === index ? "bg-gray-100" : ""
          }`}
        >
          <div
            className="accordion-header px-4 py-3 flex justify-between items-center cursor-pointer"
            onClick={() => handleAccordionClick(index)}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <span
              className={`accordion-icon ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content px-4 py-3 text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionContent;
