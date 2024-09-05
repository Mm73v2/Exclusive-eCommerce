import Sidebar from "./Sidebar";
import HeroSwiper from "./HeroSwiper";

const HeroSection = () => {
  return (
    <div className="max-lg:flex-col flex gap-10">
      <Sidebar />
      <HeroSwiper />
    </div>
  );
};

export default HeroSection;
