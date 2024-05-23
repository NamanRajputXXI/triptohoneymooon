"use client";
import DestinationList from "@/components/global/DestinationList";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import AboutUsSection from "@/components/home/AboutUsSection";
import AdsCarousel from "@/components/home/AdsCarousel";
import BrandingSidebar from "@/components/home/BrandingSidebar";
import DomesticDestinationSection from "@/components/home/DomesticDestination";
import HeroSection from "@/components/home/HeroSection";
import AttractivePlannerCarousel from "@/components/home/HomePageCarousel/AttractivePlannerCarousel";
import BannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/BannerCarousel";
import MultiImagerBannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/MultiImagerBannerCarousel";
import WeddingBannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/WeddingBannerCarousel";
import HeroSectionCarousel from "@/components/home/HomePageCarousel/HeroSectionCarousel";
import BestSellingCarousel from "@/components/home/HomePageCarousel/ProductCarousel/BestSellingCarousel";
import DomesticCarousel from "@/components/home/HomePageCarousel/ProductCarousel/DomesticCarousel";
import InternationalCarousel from "@/components/home/HomePageCarousel/ProductCarousel/InternationalCarousel";
import PopularCarousel from "@/components/home/HomePageCarousel/ProductCarousel/PopularCarousel";
import TrendingCarousel from "@/components/home/HomePageCarousel/ProductCarousel/TrendingCarousel";
import InternationDestinationSection from "@/components/home/InternationDestinationSection";
import OurResorts from "@/components/home/OurResorts";
import OurServices from "@/components/home/OurServices";
import PopularDestinationSection from "@/components/home/PopularDestinationSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <WeddingBannerCarousel />
      <HeroSection />
      <HeroSectionCarousel />
      <AboutUsSection />
      <DomesticCarousel />
      <InternationalCarousel />
      <PopularCarousel />
      <TrendingCarousel />
      <BestSellingCarousel />
      {/* <MultiImagerBannerCarousel />
      <BannerCarousel /> */}
      {
        <div className="lg:flex hidden">
          <InternationDestinationSection />
        </div>
      }
      <PopularDestinationSection />
      <DomesticDestinationSection />
      <OurResorts />
      <OurServices />
      <Footer />
      <DestinationList />
    </>
  );
}
