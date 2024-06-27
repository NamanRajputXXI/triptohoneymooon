// import React, { useState } from "react";

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className=" dark:bg-gray-900">
//       <div className="container max-w-4xl px-6 py-10 mx-auto">
//         <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
//           Frequently asked questions
//         </h1>

//         <div className="mt-12 space-y-2">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="flex items-center justify-between w-full p-8"
//               >
//                 <h1 className="font-semibold text-gray-700 dark:text-white">
//                   {faq.question}
//                 </h1>

//                 <span
//                   className={`${
//                     openIndex === index
//                       ? "text-gray-400 bg-gray-200"
//                       : "text-white bg-blue-500"
//                   } rounded-full transform transition-transform duration-300`}
//                   style={{
//                     transform:
//                       openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
//                   }}
//                 >
//                   {openIndex === index ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M18 12H6"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                       />
//                     </svg>
//                   )}
//                 </span>
//               </button>

//               <div
//                 className={`transition-all duration-500 overflow-hidden ${
//                   openIndex === index ? "max-h-screen px-8 pb-8" : "max-h-0"
//                 }`}
//               >
//                 <p className="text-sm text-gray-500 dark:text-gray-300">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const faqs = [
//   {
//     question: "What destinations do you offer for honeymoon trips?",
//     answer:
//       "We offer a wide range of destinations within India and internationally, including romantic getaways in Goa, Kerala, the Maldives, Bali, and more.",
//   },
//   {
//     question: "How can we book a honeymoon trip with you?",
//     answer:
//       "You can book your honeymoon trip by visiting our website, browsing our packages, and filling out the booking form. You can also contact our customer service for personalized assistance.",
//   },
//   {
//     question: "What is included in the honeymoon packages?",
//     answer:
//       "Our honeymoon packages typically include accommodations, meals, sightseeing tours, and various romantic experiences like candlelight dinners and spa sessions. Each package varies, so please check the details of your selected package.",
//   },
//   {
//     question: "Do you offer customized honeymoon packages?",
//     answer:
//       "Yes, we offer customized honeymoon packages tailored to your preferences and budget. You can contact our team to discuss your requirements, and we'll create a personalized itinerary for you.",
//   },
//   {
//     question: "Is travel insurance included in the packages?",
//     answer:
//       "Travel insurance is not included in our standard packages. However, we highly recommend purchasing travel insurance to cover any unforeseen circumstances. We can assist you in getting a suitable insurance plan.",
//   },
//   {
//     question: "What is your cancellation policy?",
//     answer:
//       "Our cancellation policy varies depending on the package and the time of cancellation. Please refer to the terms and conditions of your specific package for detailed information.",
//   },
//   {
//     question: "Do you offer assistance with visa applications?",
//     answer:
//       "Yes, we provide assistance with visa applications for international destinations. Our team will guide you through the process and help you gather the necessary documents.",
//   },
// ];

// export default Faq;

import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="">
      <div className="container max-w-4xl px-6 py-16 mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 dark:text-white">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg  overflow-hidden transition-all duration-300 ease-in-out "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
                  {faq.question}
                </h2>

                <span
                  className={`${
                    openIndex === index ? "bg-red-500 rotate-45" : "bg-red-500"
                  } p-2 rounded-full text-white transition-all duration-300 ease-in-out`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "What destinations do you offer for honeymoon trips?",
    answer:
      "We offer a wide range of destinations within India and internationally, including romantic getaways in Goa, Kerala, the Maldives, Bali, and more.",
  },
  {
    question: "How can we book a honeymoon trip with you?",
    answer:
      "You can book your honeymoon trip by visiting our website, browsing our packages, and filling out the booking form. You can also contact our customer service for personalized assistance.",
  },
  {
    question: "What is included in the honeymoon packages?",
    answer:
      "Our honeymoon packages typically include accommodations, meals, sightseeing tours, and various romantic experiences like candlelight dinners and spa sessions. Each package varies, so please check the details of your selected package.",
  },
  {
    question: "Do you offer customized honeymoon packages?",
    answer:
      "Yes, we offer customized honeymoon packages tailored to your preferences and budget. You can contact our team to discuss your requirements, and we'll create a personalized itinerary for you.",
  },
  {
    question: "Is travel insurance included in the packages?",
    answer:
      "Travel insurance is not included in our standard packages. However, we highly recommend purchasing travel insurance to cover any unforeseen circumstances. We can assist you in getting a suitable insurance plan.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy varies depending on the package and the time of cancellation. Please refer to the terms and conditions of your specific package for detailed information.",
  },
  {
    question: "Do you offer assistance with visa applications?",
    answer:
      "Yes, we provide assistance with visa applications for international destinations. Our team will guide you through the process and help you gather the necessary documents.",
  },
];

export default Faq;
