import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const DestinationSearchBar = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchUrl, setSearchUrl] = useState("");
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://triptohoneymooon.vercel.app/api/states"
        );
        setSuggestions(response.data.states);
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

    setSearchUrl(`/products/${userInput.toLowerCase()}`);
    setActiveSuggestionIndex(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setSearchUrl(`/products/${suggestion.toLowerCase()}`);
  };

  const handleSearch = () => {
    let searchTerm;
    if (
      activeSuggestionIndex >= 0 &&
      activeSuggestionIndex < filteredSuggestions.length
    ) {
      searchTerm = filteredSuggestions[activeSuggestionIndex];
    } else {
      searchTerm = input;
    }
    setInput(searchTerm);
    setSearchUrl(`/products/${searchTerm.toLowerCase()}`);
    setShowSuggestions(false);
    setTimeout(() => {
      document.getElementById("searchLink").click();
    }, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : -1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4">
      <h2 className="sm:text-3xl text-2xl font-bold text-white mb-6 text-center">
        Discover dreamy destinations for your honeymoon with us
      </h2>

      <div className="relative">
        <div className="flex gap-2 h-fit flex-col py-2 bg-white rounded-2xl px-2 shadow-md relative">
          <div className="flex bg-white items-center">
            <FaSearch className="absolute left-4 text-gray-400" />
            <input
              type="text"
              value={input}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Search your romantic destination..."
              className="w-full px-4 py-1 bg-white pl-12 rounded-full focus:outline-none text-gray-800"
            />
            <Link href={searchUrl} id="searchLink" className="hidden">
              Search
            </Link>
          </div>
          {showSuggestions && input && (
            <ul className="w-full bg-white overflow-hidden z-10">
              {filteredSuggestions.length ? (
                filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className={`px-2 py-2 hover:bg-gray-100 rounded-xl cursor-pointer ${
                      index === activeSuggestionIndex ? "bg-gray-100" : ""
                    }`}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <span className="block w-full text-gray-700">
                      {suggestion}
                    </span>
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
    </div>
  );
};

export default DestinationSearchBar;
