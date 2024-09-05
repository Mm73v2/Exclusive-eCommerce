import { useContext, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import Context from "../../store/Context";
import SectionHeader from "../UI/SectionHeader";
import SwiperBtns from "../UI/SwiperBtns";
import Product from "../Product/Product";
import AppSwiper from "../UI/AppSwiper";
const ProductsSection = () => {
  const swiperRef = useRef(null);
  const { products } = useContext(Context);
  return (
    <section className="mt-32" id="products">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <SectionHeader subtitle="Our Products" title="Explore Our Products" />
        <SwiperBtns swiperRef={swiperRef} />
      </div>
      <AppSwiper swiperRef={swiperRef} rows={2}>
        {products.map((product) => (
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
    </section>
  );
};

export default ProductsSection;
