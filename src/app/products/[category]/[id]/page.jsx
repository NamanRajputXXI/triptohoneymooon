import { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Navbar from "@/components/global/Navbar";
import ImagesGridLayout from "@/components/product/ImagesGridLayout";
import MidSection from "@/components/product/MidSection";

// Dynamically import components with loading priority
const DynamicFooter = dynamic(() => import("@/components/global/Footer"), {
  ssr: true,
});
const DynamicInclusionExclusion = dynamic(
  () => import("@/components/product/left/InclusionExclusion"),
  { ssr: false }
);
const DynamicRelatedProductsCarousel = dynamic(
  () => import("@/components/product/RelatedProductsCarousel"),
  { ssr: false, loading: () => <SkeletonLoader /> }
);
const DynamicReviews = dynamic(
  () => import("@/components/product/reviews/Reviews"),
  { ssr: false, loading: () => <SkeletonLoader /> }
);
const DynamicAccordionItem = dynamic(
  () => import("@/components/product/AccordianItem"),
  { ssr: false, loading: () => <SkeletonLoader /> }
);
const DynamicAdditionalInfo = dynamic(
  () => import("@/components/product/AdditionalInfo"),
  { ssr: false, loading: () => <SkeletonLoader /> }
);
const DynamicPopupWrapper = dynamic(
  () => import("@/components/home/Popup/PopupWrapper"),
  { ssr: false }
);

const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

const ErrorComponent = ({ message }) => (
  <div className="error-message text-red-500 p-4 bg-red-100 rounded">
    <Navbar />
    <p>{message}</p>
  </div>
);

export const getProductData = async ({ params }) => {
  try {
    const response = await fetch(
      `https://triptohoneymooon.vercel.app/api/states/${params.category}/${params.id}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok)
      throw new Error(`Error fetching data. Status: ${response.status}`);

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json"))
      throw new Error("Response is not in JSON format");

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Page = async ({ params }) => {
  const { category: urlCategory, id: urlId } = params;
  const singleProductData = await getProductData({ params });

  if (!singleProductData?.document)
    return <ErrorComponent message="Error fetching product data." />;

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
  const id = urlId;
  const category = urlCategory;

  console.log("Page props - id:", id, "category:", category);

  return (
    <div className="bg-white">
      <Navbar />
      <ImagesGridLayout headerImages={headerImages} />
      <MidSection
        id={id}
        category={category}
        heading={heading}
        exclusions={exclusions}
        headerImages={headerImages}
        inclusions={inclusions}
        itinerary={itinerary}
        overView={overView}
        duration={duration}
        tripHighlights={tripHighlights}
        knowBeforeYouGo={knowBeforeYouGo}
        totalCustomer={totalCustomer}
        rating={rating}
        reviewImageGallary={reviewImageGallary}
        refundPolicy={refundPolicy}
        paymentPolicy={paymentPolicy}
        cancellationPolicy={cancellationPolicy}
        saveInr={saveInr}
        packageCategory={packageCategory}
        itineraryDetails={itineraryDetails}
        itineraryCarousel={itineraryCarousel}
        days={days}
        destination={destination}
        activities={activities}
      />

      <Suspense fallback={<SkeletonLoader />}>
        <div className="flex px-5 items-center justify-center max-w-7xl mx-auto">
          <Image
            src="/endOfTripBanner.png"
            width={1200}
            height={160}
            alt="End of Trip Banner"
            className="object-cover object-center"
            loading="lazy"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority={false}
          />
        </div>
        <DynamicInclusionExclusion
          inclusions={inclusions}
          exclusions={exclusions}
        />
        <div className="px-5">
          <DynamicAccordionItem
            content={knowBeforeYouGo}
            title="Know Before You Go"
          />
          <DynamicAdditionalInfo />
          <DynamicRelatedProductsCarousel />
          <DynamicReviews
            reviews={reviews}
            totalCustomer={totalCustomer}
            rating={rating}
            reviewImageGallary={reviewImageGallary}
          />
          <DynamicAccordionItem
            content={cancellationPolicy}
            title="Cancellation Policy"
          />
          <DynamicAccordionItem content={refundPolicy} title="Refund Policy" />
          <DynamicAccordionItem
            content={paymentPolicy}
            title="Payment Policy"
          />
        </div>
      </Suspense>
      <DynamicPopupWrapper />
      <DynamicFooter />
    </div>
  );
};

export default Page;
