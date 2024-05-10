import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchDataa = async () => {
      try {
        const res = await fetch("/api/getData");
        const data = await res.json();
        setPackages(data.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchDataa();
  }, []);

  return (
    <div>
      <h1>Packages</h1>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg._id}>
            <h2>{pkg.destination}</h2>
            <p>{pkg.about}</p>
            <p>{pkg.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
