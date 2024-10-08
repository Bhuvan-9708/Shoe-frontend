import HeroSection from "@/components/homePage/HeroSection/HeroSection";
import Categories from "@/components/homePage/Categories/Categories";
import HomeGallery from "@/components/homePage/HomeGallery/HomeGallery";
import PopularProducts from "@/components/homePage/PopularProducts/PopularProducts";
import ShoeCollection from "@/components/homePage/ShoeCollection/ShoeCollection";
import BestSellingProducts from "@/components/homePage/BestSellingProducts/BestSellingProducts";
import { WeOffer } from "@/components/homePage/WeOffer/WeOffer";
import Testimonial from "@/components/homePage/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <HomeGallery />
      <PopularProducts />
      <ShoeCollection />
      <BestSellingProducts />
      <WeOffer />
      <Testimonial />
    </>
  );
};

export default HomePage;
