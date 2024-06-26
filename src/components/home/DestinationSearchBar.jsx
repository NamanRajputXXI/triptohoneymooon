import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const DestinationSearchBar = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Fetch data from API
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://triptohoneymooon.vercel.app/api"
          );
          // Extract keys (collection names) from data
          const collections = Object.keys(response.data.data);
          setSuggestions(collections);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
      fetchData();
    }
  }, [isMounted]);

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
    <div className="max-w-7xl mx-auto flex justify-center items-center my-10">
      <div className="relative w-full max-w-md">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Type to search..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <Link href={`/products/${input.toLowerCase()}`}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
              Search
            </button>
          </Link>
        </div>
        {showSuggestions && input && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto">
            {filteredSuggestions.length ? (
              filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  <Link href={`/products/${suggestion.toLowerCase()}`}>
                    <span onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4  py-2">No suggestions available</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DestinationSearchBar;
