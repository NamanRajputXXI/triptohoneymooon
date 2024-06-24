// import { Suspense, lazy } from "react";
// import dynamic from "next/dynamic";
// import Head from "next/head";
// import Navbar from "@/components/global/Navbar";

// const DynamicInfiniteScroll = lazy(() =>
//   import("@/components/InfiniteScroll/InfiniteScroll")
// );
// const DynamicFooter = dynamic(() => import("@/components/global/Footer"), {
//   ssr: true,
// });

// const SkeletonLoader = () => (
//   <div className="animate-pulse">
//     <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
//     <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//   </div>
// );

// export const getProductsData = async ({ params, page = 1, limit = 12 }) => {
//   try {
//     const response = await fetch(
//       `https://triptohoneymooon.vercel.app/api/${params.category}?page=${page}&limit=${limit}`,
//       {
//         method: "GET",
//         next: { revalidate: 3600 }, // Revalidate every hour
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Error fetching data. Status: ${response.status}`);
//     }

//     const contentType = response.headers.get("content-type");
//     if (!contentType || !contentType.includes("application/json")) {
//       throw new Error("Response is not in JSON format");
//     }

//     const { data = [] } = (await response.json()) ?? {};
//     return data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// const Page = async ({ params }) => {
//   const initialData = await getProductsData({ params });

//   return (
//     <>
//       <Head>
//         <title>{`${params.category} - Trip to Honeymoon`}</title>
//         <meta
//           name="description"
//           content={`Explore our ${params.category} packages for your perfect honeymoon.`}
//         />
//         <link rel="preconnect" href="https://triptohoneymooon.vercel.app" />
//         <link rel="dns-prefetch" href="https://triptohoneymooon.vercel.app" />
//       </Head>
//       <Navbar />
//       <div className="max-w-7xl mx-auto my-10 px-5 flex flex-col gap-10">
//         <Suspense fallback={<SkeletonLoader />}>
//           <DynamicInfiniteScroll initialData={initialData} params={params} />
//         </Suspense>
//       </div>
//       <DynamicFooter />
//     </>
//   );
// };

// export default Page;

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
