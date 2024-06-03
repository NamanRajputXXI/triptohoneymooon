import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

export const getProductData = async ({ params }) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/${params.category}/${params.id}`,
      {
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

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Page = async ({ params }) => {
  const singleProductData = await getProductData({ params });

  if (!singleProductData || !singleProductData.document) {
    return (
      <div>
        <Navbar />
        <div>Error fetching product data.</div>
      </div>
    );
  }

  const { heading, carouselImageUrl } = singleProductData.document;

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-4xl font-bold">{heading}</h1>
        {carouselImageUrl.map((img, i) => (
          <img src={img} alt={`Carousel Image ${i + 1}`} key={i} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
