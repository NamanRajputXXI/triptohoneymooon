"use client";
import React, { useEffect, useState, useCallback } from "react";
import { getProductsData } from "@/app/products/[category]/page";
import ProductCategoryCard from "../productCategory/ProductCategoryCard";
import useSWRInfinite from "swr/infinite";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const InfiniteScroll = ({ initialData, params }) => {
  const [showCount, setShowCount] = useState(12);

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `https://triptohoneymooon.vercel.app/api/${params.category}?page=${
      pageIndex + 1
    }&limit=12`;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialData: [initialData],
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const destinations = data ? [].concat(...data) : [];
  const isLoadingMore =
    size > 0 && data && typeof data[size - 1] === "undefined";
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 12);

  const loadMore = useCallback(() => {
    if (!isReachingEnd && !isLoadingMore) {
      setSize(size + 1);
    }
  }, [isReachingEnd, isLoadingMore, setSize, size]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore]);

  if (error) return <div>Failed to load</div>;

  return (
    <div>
      <div className="grid justify-center md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
        {destinations.slice(0, showCount).map((destination) => (
          <ProductCategoryCard
            key={destination._id}
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
        ))}
      </div>
      {destinations.length > showCount && (
        <div className="w-full pt-16 flex items-center justify-center">
          <button
            className="mx-auto border-2 border-red-600 cursor-pointer px-4 py-2 text-2xl text-center text-red-600 rounded"
            onClick={() => setShowCount(showCount + 6)}
          >
            Load More Products
          </button>
        </div>
      )}
      {isLoadingMore && <div>Loading more...</div>}
    </div>
  );
};

export default InfiniteScroll;
