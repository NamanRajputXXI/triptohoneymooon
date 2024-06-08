import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import AccordionItem from "@/components/product/AccordianItem";
import AdditionalInfo from "@/components/product/AdditionalInfo";
import ImagesGridLayout from "@/components/product/ImagesGridLayout";
import InclusionExclusion from "@/components/product/left/InclusionExclusion";
import LeftSideSection from "@/components/product/left/LeftSideSection";
import ReviewsData from "@/components/product/reviews/ReviewsData";
import Reviews from "@/components/product/reviews/Reviews";
import RightSideSection from "@/components/product/RightSideSection";
import cancellationPolicy from "@/data/productPageData/cancellationPolicy";
import RelatedProductsCarousel from "@/components/product/RelatedProductsCarousel";

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
    <div className="bg-white">
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
      <div className="flex px-5 items-center justify-center max-w-7xl mx-auto ">
        <img
          src="/endOfTripBanner.png"
          className=" object-cover object-center h-[150px] md:h-[160px]"
          alt=""
        />
      </div>
      <InclusionExclusion inclusions={inclusions} exclusions={exclusions} />
      <div className="px-5">
        <AccordionItem
          content={cancellationPolicy}
          title={"Know Befor You Go"}
        />
        <AdditionalInfo />
        <RelatedProductsCarousel />
        {/* <Reviews /> */}
        <Reviews />

        <AccordionItem
          content={cancellationPolicy}
          title={"Cancellation Policy"}
        />
        <AccordionItem content={cancellationPolicy} title={"Refund Policy"} />
        <AccordionItem
          content={cancellationPolicy}
          title={"Confirmation Policy"}
        />
        <AccordionItem
          content={cancellationPolicy}
          title={"Payment Term Policy"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
