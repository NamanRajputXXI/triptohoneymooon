// "use client";
// import DestinationList from "@/components/global/DestinationList";
// import Footer from "@/components/global/Footer";
// import Navbar from "@/components/global/Navbar";
// import AboutUsSection from "@/components/home/AboutUsSection";
// import AdsCarousel from "@/components/home/AdsCarousel";
// import BrandingSidebar from "@/components/home/BrandingSidebar";
// import DomesticDestinationSection from "@/components/home/DomesticDestination";
// import HeroSection from "@/components/home/HeroSection";
// import AttractivePlannerCarousel from "@/components/home/HomePageCarousel/AttractivePlannerCarousel";
// import BannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/BannerCarousel";
// import MultiImagerBannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/MultiImagerBannerCarousel";
// import WeddingBannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/WeddingBannerCarousel";
// import HeroSectionCarousel from "@/components/home/HomePageCarousel/HeroSectionCarousel";
// import BestSellingCarousel from "@/components/home/HomePageCarousel/ProductCarousel/BestSellingCarousel";
// import DomesticCarousel from "@/components/home/HomePageCarousel/ProductCarousel/DomesticCarousel";
// import InternationalCarousel from "@/components/home/HomePageCarousel/ProductCarousel/InternationalCarousel";
// import PopularCarousel from "@/components/home/HomePageCarousel/ProductCarousel/PopularCarousel";
// import TrendingCarousel from "@/components/home/HomePageCarousel/ProductCarousel/TrendingCarousel";
// import InternationDestinationSection from "@/components/home/InternationDestinationSection";
// import OurResorts from "@/components/home/OurResorts";
// import OurServices from "@/components/home/OurServices";
// import PopularDestinationSection from "@/components/home/PopularDestinationSection";

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

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/global/Navbar"), {
  ssr: false,
});
const WeddingBannerCarousel = dynamic(
  () =>
    import(
      "@/components/home/HomePageCarousel/BannerCarousel/WeddingBannerCarousel"
    ),
  { ssr: false }
);
const HeroSection = dynamic(() => import("@/components/home/HeroSection"), {
  ssr: false,
});
const HeroSectionCarousel = dynamic(
  () => import("@/components/home/HomePageCarousel/HeroSectionCarousel"),
  { ssr: false }
);
const TrendingCarousel = dynamic(
  () =>
    import(
      "@/components/home/HomePageCarousel/ProductCarousel/TrendingCarousel"
    ),
  { ssr: false }
);
const BestSellingCarousel = dynamic(
  () =>
    import(
      "@/components/home/HomePageCarousel/ProductCarousel/BestSellingCarousel"
    ),
  { ssr: false }
);
const DomesticCarousel = dynamic(
  () =>
    import(
      "@/components/home/HomePageCarousel/ProductCarousel/DomesticCarousel"
    ),
  { ssr: false }
);
const InternationalCarousel = dynamic(
  () =>
    import(
      "@/components/home/HomePageCarousel/ProductCarousel/InternationalCarousel"
    ),
  { ssr: false }
);
const AttractivePlannerCarousel = dynamic(
  () => import("@/components/home/HomePageCarousel/AttractivePlannerCarousel"),
  { ssr: false }
);
const AboutUsSection = dynamic(
  () => import("@/components/home/AboutUsSection"),
  { ssr: false }
);
const PopularCarousel = dynamic(
  () =>
    import(
      "@/components/home/HomePageCarousel/ProductCarousel/PopularCarousel"
    ),
  { ssr: false }
);
const MultiImagerBannerCarousel = dynamic(
  () =>
    import(
      "@/components/home/HomePageCarousel/BannerCarousel/MultiImagerBannerCarousel"
    ),
  { ssr: false }
);
const BannerCarousel = dynamic(
  () =>
    import("@/components/home/HomePageCarousel/BannerCarousel/BannerCarousel"),
  { ssr: false }
);
const InternationDestinationSection = dynamic(
  () => import("@/components/home/InternationDestinationSection"),
  { ssr: false }
);
const PopularDestinationSection = dynamic(
  () => import("@/components/home/PopularDestinationSection"),
  { ssr: false }
);
const DomesticDestinationSection = dynamic(
  () => import("@/components/home/DomesticDestination"),
  { ssr: false }
);
const OurResorts = dynamic(() => import("@/components/home/OurResorts"), {
  ssr: false,
});
const OurServices = dynamic(() => import("@/components/home/OurServices"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/global/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <WeddingBannerCarousel />
      <HeroSection />
      <HeroSectionCarousel />
      <TrendingCarousel />
      <BestSellingCarousel />
      <DomesticCarousel />
      <InternationalCarousel />
      <AttractivePlannerCarousel />
      <AboutUsSection />
      <PopularCarousel />
      <MultiImagerBannerCarousel />
      <BannerCarousel />
      <InternationDestinationSection />
      <PopularDestinationSection />
      <DomesticDestinationSection />
      <OurResorts />
      <OurServices />
      <Footer />
    </>
  );
}
