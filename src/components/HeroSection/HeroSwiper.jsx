import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import HeroSwiperItem from "./HeroSwiperItem";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
const HeroSwiper = () => {
  SwiperCore.use([Autoplay, Pagination]);
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      className="w-full"
    >
      <SwiperSlide>
        <HeroSwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSwiperItem />
      </SwiperSlide>

      <div className="swiper-pagination flex justify-center"></div>
    </Swiper>
  );
};

export default HeroSwiper;
