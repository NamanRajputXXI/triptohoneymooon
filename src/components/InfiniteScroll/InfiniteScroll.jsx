"use client";
import React, { useEffect, useState } from "react";
import { getProductsData } from "@/app/products/[category]/page";
import ProductCategoryCard from "../productCategory/ProductCategoryCard";

const InfiniteScroll = ({ params }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showCount, setShowCount] = useState(12); // Initial number of items to display
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const newData = await getProductsData({ params, page });
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
    };

    fetchData();
  }, [params, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (page < totalPages) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, totalPages]);

  return (
    <div>
      <div className="grid justify-center md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
        {data.slice(0, showCount).map((destination, index) => (
          <div key={index}>
            <ProductCategoryCard
              category={params.category}
              duration={destination.duration}
              destinationId={destination._id}
              src={destination.imageUrl}
              heading={destination.heading}
              thumbnail={destination.thumbnail}
              previousPrice={destination.previousPrice}
              price={destination.price}
              rating={destination.rating}
              totalCustomer={destination.totalCustomer}
              saveInr={destination.saveInr}
            />
          </div>
        ))}
      </div>
      {data.length > showCount && (
        <div className="w-full pt-16 flex items-center justify-center">
          <button
            className="mx-auto  border-2 border-red-600 cursor-pointer px-4 py-2  text-2xl text-center text-red-600 rounded"
            onClick={() => setShowCount(showCount + 6)}
          >
            Load More Products
          </button>
        </div>
      )}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;
