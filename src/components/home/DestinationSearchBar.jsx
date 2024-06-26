// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { FaSearch } from "react-icons/fa";

// const DestinationSearchBar = () => {
//   const [input, setInput] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://triptohoneymooon.vercel.app/api"
//         );
//         const collections = Object.keys(response.data.data);
//         setSuggestions(collections);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     const userInput = e.target.value;
//     setInput(userInput);

//     if (userInput.length > 0) {
//       const filtered = suggestions.filter((suggestion) =>
//         suggestion.toLowerCase().includes(userInput.toLowerCase())
//       );
//       setFilteredSuggestions(filtered);
//       setShowSuggestions(true);
//     } else {
//       setFilteredSuggestions([]);
//       setShowSuggestions(false);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setInput(suggestion);
//     setFilteredSuggestions([]);
//     setShowSuggestions(false);
//   };

//   return (
//     <div className=" mx-auto max-w-2xl px-4">
//       <h2 className="sm:text-3xl text-2xl font-bold text-white mb-6 text-center">
//         Discover dreamy destinations for your honeymoon with us
//       </h2>

//       <div className="relative">
//         <div className="flex items-center">
//           <div className="relative flex-grow">
//             <input
//               type="text"
//               value={input}
//               onChange={handleChange}
//               placeholder="Search your romantic destination..."
//               className="w-full px-4 py-3 pl-12 rounded-l-full focus:outline-none text-gray-800"
//             />
//             <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//           <Link href={`/products/${input.toLowerCase()}`}>
//             <button className="px-6 py-3 bg-[#cf331a] text-white rounded-r-full  transition duration-300 ease-in-out focus:outline-none">
//               Search
//             </button>
//           </Link>
//         </div>
//         {showSuggestions && input && (
//           <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg z-10">
//             {filteredSuggestions.length ? (
//               filteredSuggestions.map((suggestion, index) => (
//                 <li
//                   key={index}
//                   className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition duration-200 text-gray-800"
//                 >
//                   <Link href={`/products/${suggestion.toLowerCase()}`}>
//                     <span onClick={() => handleSuggestionClick(suggestion)}>
//                       {suggestion}
//                     </span>
//                   </Link>
//                 </li>
//               ))
//             ) : (
//               <li className="px-4 py-2 text-gray-500">
//                 No suggestions available
//               </li>
//             )}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DestinationSearchBar;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const DestinationSearchBar = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://triptohoneymooon.vercel.app/api"
        );
        const collections = Object.keys(response.data.data);
        setSuggestions(collections);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);

    if (userInput.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(userInput.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="mx-auto max-w-2xl px-4">
      <h2 className="sm:text-3xl text-2xl font-bold text-white mb-6 text-center">
        Discover dreamy destinations for your honeymoon with us
      </h2>

      <div className="relative">
        <div className="flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Search your romantic destination..."
              className="w-full px-4 py-3 pl-12 rounded-l-full focus:outline-none text-gray-800"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Link href={`/products/${input.toLowerCase()}`}>
            <button className="px-6 py-3 bg-[#cf331a] text-white rounded-r-full transition duration-300 ease-in-out focus:outline-none hover:bg-[#b52d17]">
              Search
            </button>
          </Link>
        </div>
        {showSuggestions && input && (
          <ul className="absolute w-full mt-1 z-10">
            {filteredSuggestions.length ? (
              filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer text-white hover:text-gray-200 transition duration-200"
                >
                  <Link href={`/products/${suggestion.toLowerCase()}`}>
                    <span
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full"
                    >
                      {suggestion}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-white">No suggestions available</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DestinationSearchBar;
