import { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import AppSwiper from "../UI/AppSwiper";
import SectionHeader from "../UI/SectionHeader";
import SwiperBtns from "../UI/SwiperBtns";
import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  const swiperRef = useRef(null);
  return (
    <section className="mt-32">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <SectionHeader subtitle="Categories" title="Browse By Category" />
        <SwiperBtns swiperRef={swiperRef} />
      </div>

      <AppSwiper swiperRef={swiperRef}>
        <SwiperSlide>
          <CategoryItem img="/Category-CellPhone.png" title="Phones" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem img="/Category-Computer.png" title="Computers" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem img="/Category-SmartWatch.png" title="SmartWatch" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem img="/Category-Camera.png" title="Camera" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem img="/Category-Headphone.png" title="HeadPhones" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem img="/Category-Gamepad.png" title="Gaming" />
        </SwiperSlide>
      </AppSwiper>
    </section>
  );
};

export default CategoriesSection;
