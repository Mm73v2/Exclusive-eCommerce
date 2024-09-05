import ProductRate from "../Product/ProductRate";
import ProductInfoBox from "./ProductInfoBox";
import ProductInfoColors from "./ProductInfoColors";
import ProductInfoControls from "./ProductInfoControls";
import ProductInfoSizes from "./ProductInfoSizes";

const ProductDetails = ({ id, title, rate, reviews, price, description }) => {
  return (
    <div className="flex flex-col gap-4 col-span-4 max-md:col-span-9">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex gap-3">
        <ProductRate rate={rate} reviews={reviews} />{" "}
        <span className="text-gray-400">|</span>
        <span className="text-secondary">In Stock</span>
      </div>

      <h2 className="text-2xl font-semibold">${price?.toFixed(2)}</h2>
      <p className="text-sm pb-8 border-b-2 border-gray-400">{description}</p>

      <ProductInfoColors />
      <ProductInfoSizes />

      <ProductInfoControls id={id} />

      <ProductInfoBox />
    </div>
  );
};

export default ProductDetails;
