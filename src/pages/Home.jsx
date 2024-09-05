import HeroSection from "../components/HeroSection/HeroSection";
import FlashSales from "../components/FlashSalesSection/FlashSales";
import CategoriesSection from "../components/Categories/CategoriesSection";
import BestSelling from "../components/BestSellingSection/BestSelling";
import CtaSection from "../components/CtaSection/CtaSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import NewArrival from "../components/NewArrivalSection/NewArrival";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="wrapper">
      <HeroSection />
      <FlashSales />
      <CategoriesSection />
      <BestSelling />
      <CtaSection />
      <ProductsSection />
      <NewArrival />
      <Testimonial />
    </div>
  );
};

export default Home;
