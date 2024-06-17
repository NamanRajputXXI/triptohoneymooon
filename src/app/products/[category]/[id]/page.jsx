import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import AccordionItem from "@/components/product/AccordianItem";
import AdditionalInfo from "@/components/product/AdditionalInfo";
import ImagesGridLayout from "@/components/product/ImagesGridLayout";
import InclusionExclusion from "@/components/product/left/InclusionExclusion";
import LeftSideSection from "@/components/product/left/LeftSideSection";
import Reviews from "@/components/product/reviews/Reviews";
import RightSideSection from "@/components/product/RightSideSection";
import RelatedProductsCarousel from "@/components/product/RelatedProductsCarousel";
import MidSection from "@/components/product/MidSection";

export const getProductData = async ({ params }) => {
  try {
    const response = await fetch(
      `https://triptohoneymooon.vercel.app/api/${params.category}/${params.id}`,
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
    exclusions,
    headerImages,
    inclusions,
    itinerary,
    overView,
    duration,
    tripHighlights,
    knowBeforeYouGo,
    totalCustomer,
    rating,
    reviewImageGallary,
    refundPolicy,
    paymentPolicy,
    cancellationPolicy,
    reviews,
    saveInr,
    packageCategory,
    itineraryDetails,
    itineraryCarousel,
    days,
    destination,
    activities,
  } = singleProductData.document;

  return (
    <div className="bg-white">
      <Navbar />
      <ImagesGridLayout headerImages={headerImages} />

      {/* <LeftSideSection
          itineraryDetails={itineraryDetails}
          itineraryCarousel={itineraryCarousel}
          packageCategory={packageCategory}
          overView={overView}
          heading={heading}
          tripHighlights={tripHighlights}
          duration={duration}
          itinerary={itinerary}
          rating={rating}
          days={days}
          destination={destination}
          activities={activities}
        />
        <RightSideSection
          price={price}
          previousPrice={previousPrice}
          rating={rating}
          totalCustomer={totalCustomer}
          saveInr={saveInr}
          heading={heading}
        /> */}
      <MidSection
        itineraryDetails={itineraryDetails}
        itineraryCarousel={itineraryCarousel}
        packageCategory={packageCategory}
        overView={overView}
        heading={heading}
        tripHighlights={tripHighlights}
        duration={duration}
        itinerary={itinerary}
        rating={rating}
        days={days}
        destination={destination}
        activities={activities}
        totalCustomer={totalCustomer}
        saveInr={saveInr}
      />

      <div className="flex px-5 items-center justify-center max-w-7xl mx-auto ">
        <img
          src="/endOfTripBanner.png"
          className=" object-cover object-center h-[150px] md:h-[160px]"
          alt=""
        />
      </div>
      <InclusionExclusion inclusions={inclusions} exclusions={exclusions} />
      <div className="px-5">
        <AccordionItem content={knowBeforeYouGo} title={"Know Befor You Go"} />
        <AdditionalInfo />
        <RelatedProductsCarousel />
        <Reviews
          reviews={reviews}
          totalCustomer={totalCustomer}
          rating={rating}
          reviewImageGallary={reviewImageGallary}
        />
        <AccordionItem
          content={cancellationPolicy}
          title={"Cancellation Policy"}
        />
        <AccordionItem content={refundPolicy} title={"Refund Policy"} />
        <AccordionItem content={paymentPolicy} title={"Payment Policy"} />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
