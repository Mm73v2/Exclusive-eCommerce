import SectionHeader from "../UI/SectionHeader";
import Product from "../Product/Product";
import { useContext } from "react";
import Context from "../../store/Context";
const BestSelling = () => {
  const { products } = useContext(Context);
  return (
    <section className="mt-32">
      <SectionHeader subtitle="This Month" title="Best Selling Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 max-sm:mt-10">
        {products.slice(0, 4).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.attributes.title}
            price={product.attributes.price}
            img={product.attributes.banner.data.attributes.url}
            rate={product.attributes.rate}
            hasDiscount={product.attributes.discount}
            isNew={product.attributes.isNew}
            reviews={product.attributes.reviews}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
