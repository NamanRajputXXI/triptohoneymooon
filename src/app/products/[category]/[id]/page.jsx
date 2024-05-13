import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

export const getProductData = async ({ params }) => {
  const response = await fetch(`api/${params.category}/${params.id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error(`Error fetching data. Status: ${response.status}`);
    return [];
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    console.error("Response is not in JSON format");
    return [];
  }

  const productsData = await response.json();
  return productsData.data;
};

const Page = async ({ params }) => {
  const singleProductData = await getProductData({ params });

  return (
    <div>
      {singleProductData && (
        <>
          <Navbar />
          <h1>{singleProductData.heading}</h1>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
