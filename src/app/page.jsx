"use client";

import React, { lazy, Suspense, useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import Loading from "@/components/LazyLoading/Loading";
import Navbar from "@/components/global/Navbar";
import HeroSection from "@/components/home/HeroSection";
import WeddingBannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/WeddingBannerCarousel";
import HeroSectionCarousel from "@/components/home/HomePageCarousel/HeroSectionCarousel";
import FixedQuoteButton from "@/components/home/FixedQuoteButton";
import { FaWhatsapp } from "react-icons/fa";
import FixedWhatsAppButton from "@/components/home/FixedWhatsappButton";

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
const Faq = lazy(() => import("@/components/home/Faq"));
const Blog = lazy(() => import("@/components/home/Blog/Blog"));

const RequestQuotePopup = lazy(() =>
  import("@/components/home/Popup/RequestQuotePopup")
);

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown before
    const hasShownPopup = sessionStorage.getItem("hasShownPopup");

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasShownPopup", "true");
      }, 6000); // Open popup after 6 seconds

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <FixedWhatsAppButton />
      <FixedQuoteButton onClick={openPopup} />
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
        <div className="w-full md:py-20 py-10">
          <img src="/honeymoonBannerHomePage.png" alt="" />
        </div>
      </InViewComponent>
      <InViewComponent>
        <DomesticCarousel />
      </InViewComponent>
      <InViewComponent>
        <InternationalCarousel />
      </InViewComponent>
      <InViewComponent>
        <BannerCarousel />
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
        <Blog />
      </InViewComponent>
      <InViewComponent>
        <Faq />
      </InViewComponent>
      <InViewComponent>
        <Footer />
      </InViewComponent>

      {showPopup && (
        <Suspense fallback={<Loading />}>
          <RequestQuotePopup onClose={closePopup} />
        </Suspense>
      )}
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
            <div style={{ minHeight: "1px" }} />
          )}
        </div>
      )}
    </InView>
  );
};
