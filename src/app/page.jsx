import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import AdsCarousel from "@/components/home/AdsCarousel";
import BrandingCarousel from "@/components/home/BrandingCarousel";
import BrandingSidebar from "@/components/home/BrandingSidebar";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <BrandingCarousel />
      <HeroSection />
      <BrandingSidebar />
      <AdsCarousel />
      <Footer />
    </>
  );
}
