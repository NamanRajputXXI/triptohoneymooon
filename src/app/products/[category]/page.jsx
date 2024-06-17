import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import ProductCategoryCard from "@/components/productCategory/ProductCategoryCard";
import Link from "next/link"; // Using relative import

export const getProductsData = async ({ params, page = 1, limit = 10 }) => {
  try {
    const response = await fetch(
      `https://triptohoneymooon.vercel.app//api/${params.category}?page=${page}&limit=${limit}`,
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
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-5 flex flex-col gap-10">
        <InfiniteScroll params={params} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
