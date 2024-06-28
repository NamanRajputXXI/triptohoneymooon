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
        <div className="flex items-center bg-white rounded-full shadow-md">
          <FaSearch className="absolute left-4 text-gray-400" />
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Search your romantic destination..."
            className="w-full px-4 py-3 pl-12 rounded-full focus:outline-none text-gray-800"
          />
        </div>
        {showSuggestions && input && (
          <ul className="absolute w-full mt-1 bg-white rounded-lg shadow-lg overflow-hidden">
            {filteredSuggestions.length ? (
              filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                >
                  <FaSearch className="mr-3 text-gray-400" />
                  <Link href={`/products/${suggestion.toLowerCase()}`}>
                    <span
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-gray-700"
                    >
                      {suggestion}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-700">
                No suggestions available
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DestinationSearchBar;
