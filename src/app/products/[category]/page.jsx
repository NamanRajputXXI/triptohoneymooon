import React from "react";
import ProductCategoryCard from "@/components/productCategory/ProductCategoryCard";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";

const ErrorComponent = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-grow flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Products Coming Soon</h2>
        <p className="text-lg">
          We are working on adding products to this category. Please check back
          soon!
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

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

  if (products.length === 0) {
    return <ErrorComponent />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow max-w-7xl mx-auto my-10 px-5 flex flex-col gap-10">
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
    </div>
  );
};

export default Page;
