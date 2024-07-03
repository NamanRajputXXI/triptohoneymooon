import React from "react";
import ProductCategoryCard from "@/components/productCategory/ProductCategoryCard";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";

export const getProductsData = async ({ params }) => {
  try {
    const response = await fetch(
      `https://triptohoneymooon.vercel.app/api/states/${params.category}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching data. Status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not in JSON format");
    }

    const { data = [] } = (await response.json()) ?? {};
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Page = async ({ params }) => {
  const products = await getProductsData({ params });

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-5 flex flex-col gap-10">
        <div className="grid justify-center md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          {products.map((product) => (
            <ProductCategoryCard
              key={product._id}
              category={params.category}
              duration={product.duration}
              destinationId={product._id}
              src={product.imageUrl}
              heading={product.heading}
              thumbnail={product.thumbnail}
              previousPrice={product.previousPrice}
              price={product.price}
              rating={product.rating}
              totalCustomer={product.totalCustomer}
              saveInr={product.saveInr}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
