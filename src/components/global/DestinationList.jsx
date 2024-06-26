"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const DestinationList = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setCollections(Object.keys(data.data));
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div>
      <h2>Collections</h2>
      {collections.length > 0 ? (
        <ul>
          {collections.map((category, index) => (
            <li key={index}>
              {console.log("collection:", category)}
              {category && (
                <Link href={`/products/${category}`}>{category}</Link>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No collections found.</p>
      )}
    </div>
  );
};

export default DestinationList;
