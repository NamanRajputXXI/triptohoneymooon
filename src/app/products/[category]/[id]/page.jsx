import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import ImagesGridLayout from "@/components/product/ImagesGridLayout";
import InclusionExclusion from "@/components/product/left/InclusionExclusion";
import LeftSideSection from "@/components/product/left/LeftSideSection";
import RightSideSection from "@/components/product/RightSideSection";

export const getProductData = async ({ params }) => {
  try {
    const response = await fetch(
      `http://localhost:3002/api/${params.category}/${params.id}`,
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

  const {
    heading,
    subHeading,
    carouselImageUrl,
    mapSrc,
    packageOptions,
    exclusions,
    inclusions,
    itinerary,
    overView,
    duration,
    imageUrl,
  } = singleProductData.document;

  return (
    <div className="bg-red-50">
      <Navbar />
      <ImagesGridLayout carouselImageUrl={carouselImageUrl} />
      <div className="grid md:grid-cols-3 grid-cols-1 px-5 max-w-7xl mx-auto gap-5 py-4">
        <LeftSideSection
          overView={overView}
          heading={heading}
          duration={duration}
          itinerary={itinerary}
        />
        <RightSideSection />
      </div>
      <InclusionExclusion inclusions={inclusions} exclusions={exclusions} />

      <Footer />
    </div>
  );
};

export default Page;
