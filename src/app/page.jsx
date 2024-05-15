"use client";
import DestinationList from "@/components/global/DestinationList";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import AdsCarousel from "@/components/home/AdsCarousel";
import BrandingSidebar from "@/components/home/BrandingSidebar";
import HeroSection from "@/components/home/HeroSection";
import AttractivePlannerCarousel from "@/components/home/HomePageCarousel/AttractivePlannerCarousel";
import BannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/BannerCarousel";
import MultiImagerBannerCarousel from "@/components/home/HomePageCarousel/BannerCarousel/MultiImagerBannerCarousel";
import BestSellingCarousel from "@/components/home/HomePageCarousel/ProductCarousel/BestSellingCarousel";
import DomesticCarousel from "@/components/home/HomePageCarousel/ProductCarousel/DomesticCarousel";
import InternationalCarousel from "@/components/home/HomePageCarousel/ProductCarousel/InternationalCarousel";
import PopularCarousel from "@/components/home/HomePageCarousel/ProductCarousel/PopularCarousel";
import TrendingCarousel from "@/components/home/HomePageCarousel/ProductCarousel/TrendingCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DomesticCarousel />
      <InternationalCarousel />
      <PopularCarousel />
      <TrendingCarousel />
      <BestSellingCarousel />
      <BrandingSidebar />
      <MultiImagerBannerCarousel />
      <BannerCarousel />
      <AttractivePlannerCarousel />
      <Footer />
      <DestinationList />
    </>
  );
}
