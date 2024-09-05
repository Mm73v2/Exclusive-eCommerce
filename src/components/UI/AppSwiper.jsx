import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
const AppSwiper = ({ children, swiperRef, rows }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      breakpoints={{
        640: { slidesPerView: 2 }, // sm
        768: { slidesPerView: 3 }, // md
        1024: { slidesPerView: 4 }, // lg
        1280: { slidesPerView: 5 }, // xl
      }}
    >
      {children}
    </Swiper>
  );
};

export default AppSwiper;
