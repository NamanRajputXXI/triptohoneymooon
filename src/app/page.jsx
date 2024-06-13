// "use client";

// import Navbar from "@/components/global/Navbar";
// import HeroSection from "@/components/home/HeroSection";
// import WeddingBannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/WeddingBannerCarousel";
// import HeroSectionCarousel from "@/components/home/HomePageCarousel/HeroSectionCarousel";
// import PopularDestinationSection from "@/components/home/PopularDestinationSection";
// import dynamic from "next/dynamic";

// const TrendingCarousel = dynamic(
//   () =>
//     import(
//       "@/components/home/HomePageCarousel/ProductCarousel/TrendingCarousel"
//     ),
//   { ssr: false }
// );
// const BestSellingCarousel = dynamic(
//   () =>
//     import(
//       "@/components/home/HomePageCarousel/ProductCarousel/BestSellingCarousel"
//     ),
//   { ssr: false }
// );
// const DomesticCarousel = dynamic(
//   () =>
//     import(
//       "@/components/home/HomePageCarousel/ProductCarousel/DomesticCarousel"
//     ),
//   { ssr: false }
// );
// const InternationalCarousel = dynamic(
//   () =>
//     import(
//       "@/components/home/HomePageCarousel/ProductCarousel/InternationalCarousel"
//     ),
//   { ssr: false }
// );
// const AttractivePlannerCarousel = dynamic(
//   () => import("@/components/home/HomePageCarousel/AttractivePlannerCarousel"),
//   { ssr: false }
// );
// const AboutUsSection = dynamic(
//   () => import("@/components/home/AboutUsSection"),
//   { ssr: false }
// );
// const PopularCarousel = dynamic(
//   () =>
//     import(
//       "@/components/home/HomePageCarousel/ProductCarousel/PopularCarousel"
//     ),
//   { ssr: false }
// );
// const MultiImagerBannerCarousel = dynamic(
//   () =>
//     import(
//       "@/components/home/HomePageCarousel/BannerCarousel/MultiImagerBannerCarousel"
//     ),
//   { ssr: false }
// );
// const BannerCarousel = dynamic(
//   () =>
//     import("@/components/home/HomePageCarousel/BannerCarousel/BannerCarousel"),
//   { ssr: false }
// );
// const InternationDestinationSection = dynamic(
//   () => import("@/components/home/InternationDestinationSection"),
//   { ssr: false }
// );

// const DomesticDestinationSection = dynamic(
//   () => import("@/components/home/DomesticDestination"),
//   { ssr: false }
// );
// const OurResorts = dynamic(() => import("@/components/home/OurResorts"), {
//   ssr: false,
// });
// const OurServices = dynamic(() => import("@/components/home/OurServices"), {
//   ssr: false,
// });
// const Footer = dynamic(() => import("@/components/global/Footer"), {
//   ssr: false,
// });

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <WeddingBannerCarousel />
//       <HeroSection />
//       <HeroSectionCarousel />
//       <TrendingCarousel />
//       <BestSellingCarousel />
//       <DomesticCarousel />
//       <InternationalCarousel />
//       <AttractivePlannerCarousel />
//       <AboutUsSection />
//       <PopularCarousel />
//       <MultiImagerBannerCarousel />
//       <BannerCarousel />
//       <InternationDestinationSection />
//       <PopularDestinationSection />
//       <DomesticDestinationSection />
//       <OurResorts />
//       <OurServices />
//       <Footer />
//     </>
//   );
// }

"use client";

import Loading from "@/components/LazyLoading/Loading";
import Navbar from "@/components/global/Navbar";
import HeroSection from "@/components/home/HeroSection";
import WeddingBannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/WeddingBannerCarousel";
import HeroSectionCarousel from "@/components/home/HomePageCarousel/HeroSectionCarousel";
import React, { lazy, Suspense } from "react";
import { InView } from "react-intersection-observer";

// Lazy loaded components
const TrendingCarousel = lazy(() =>
  import("@/components/home/HomePageCarousel/ProductCarousel/TrendingCarousel")
);
const BestSellingCarousel = lazy(() =>
  import(
    "@/components/home/HomePageCarousel/ProductCarousel/BestSellingCarousel"
  )
);
const DomesticCarousel = lazy(() =>
  import("@/components/home/HomePageCarousel/ProductCarousel/DomesticCarousel")
);
const InternationalCarousel = lazy(() =>
  import(
    "@/components/home/HomePageCarousel/ProductCarousel/InternationalCarousel"
  )
);
const AttractivePlannerCarousel = lazy(() =>
  import("@/components/home/HomePageCarousel/AttractivePlannerCarousel")
);
const AboutUsSection = lazy(() => import("@/components/home/AboutUsSection"));
const PopularCarousel = lazy(() =>
  import("@/components/home/HomePageCarousel/ProductCarousel/PopularCarousel")
);
const MultiImagerBannerCarousel = lazy(() =>
  import(
    "@/components/home/HomePageCarousel/BannerCarousel/MultiImagerBannerCarousel"
  )
);
const BannerCarousel = lazy(() =>
  import("@/components/home/HomePageCarousel/BannerCarousel/BannerCarousel")
);
const InternationDestinationSection = lazy(() =>
  import("@/components/home/InternationDestinationSection")
);
const DomesticDestinationSection = lazy(() =>
  import("@/components/home/DomesticDestination")
);
const PopularDestinationSection = lazy(() =>
  import("@/components/home/PopularDestinationSection")
);
const OurResorts = lazy(() => import("@/components/home/OurResorts"));
const OurServices = lazy(() => import("@/components/home/OurServices"));
const Footer = lazy(() => import("@/components/global/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <WeddingBannerCarousel />
      <HeroSection />
      <HeroSectionCarousel />
      <InViewComponent>
        <TrendingCarousel />
      </InViewComponent>
      <InViewComponent>
        <BestSellingCarousel />
      </InViewComponent>
      <InViewComponent>
        <DomesticCarousel />
      </InViewComponent>
      <InViewComponent>
        <InternationalCarousel />
      </InViewComponent>
      <InViewComponent>
        <AttractivePlannerCarousel />
      </InViewComponent>
      <InViewComponent>
        <AboutUsSection />
      </InViewComponent>
      <InViewComponent>
        <PopularCarousel />
      </InViewComponent>
      <InViewComponent>
        <MultiImagerBannerCarousel />
      </InViewComponent>
      <InViewComponent>
        <BannerCarousel />
      </InViewComponent>
      <InViewComponent>
        <InternationDestinationSection />
      </InViewComponent>
      <InViewComponent>
        <PopularDestinationSection />
      </InViewComponent>
      <InViewComponent>
        <DomesticDestinationSection />
      </InViewComponent>
      <InViewComponent>
        <OurResorts />
      </InViewComponent>
      <InViewComponent>
        <OurServices />
      </InViewComponent>
      <InViewComponent>
        <Footer />
      </InViewComponent>
    </>
  );
}

const InViewComponent = ({ children }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref}>
          {inView ? (
            <Suspense fallback={<Loading />}>{children}</Suspense>
          ) : (
            <div style={{ minHeight: "1px" }} /> // Empty div with minimum height
          )}
        </div>
      )}
    </InView>
  );
};
