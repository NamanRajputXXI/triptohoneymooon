import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

export const getProductData = async ({ params }) => {
  const response = await fetch(
    `http://localhost:3000/api/${params.category}/${params.id}`,
    {
      cache: "no-store",
    }
  );

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
  return productsData;
};

const Page = async ({ params }) => {
  const singleProductData = await getProductData({ params });
  console.log("singleproduct", singleProductData);

  return (
    <div>
      <Navbar />
      {singleProductData && (
        <div>
          <h1 className="text-4xl font-bold">
            {singleProductData.document.heading}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Page;
