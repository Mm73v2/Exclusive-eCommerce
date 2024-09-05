import { useContext } from "react";
import { SwiperSlide } from "swiper/react";
import Context from "../../store/Context";
import AppSwiper from "../UI/AppSwiper";
import Product from "../Product/Product";

const ProductSwiper = ({ swiperRef }) => {
  const { products } = useContext(Context);

  return (
    <AppSwiper swiperRef={swiperRef}>
      {products
        .filter((product) => product.attributes.discount > 0)
        .map((product) => (
          <SwiperSlide key={product.id}>
            <Product
              id={product.id}
              title={product.attributes.title}
              price={product.attributes.price}
              img={product.attributes.banner.data.attributes.url}
              rate={product.attributes.rate}
              hasDiscount={product.attributes.discount}
              isNew={product.attributes.isNew}
              reviews={product.attributes.reviews}
            />
          </SwiperSlide>
        ))}
    </AppSwiper>
  );
};

export default ProductSwiper;
