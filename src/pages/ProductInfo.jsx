import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../store/Context";
import ProductApis from "../utils/ProductApis";
import ProductDetails from "../components/ProductInfo/ProductDetails";
import Product from "../components/Product/Product";

const ProductInfo = () => {
  const { products } = useContext(Context);

  const { productId } = useParams();

  const [productData, setProductData] = useState({});

  useEffect(() => {
    ProductApis.getProductInfo(productId).then((res) =>
      setProductData(res.data.data)
    );
  }, [productId]);

  const filteredProducts = products
    .filter(
      (product) =>
        product.attributes.category === productData.attributes?.category
    )
    .map((product) => (
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
    ));

  return (
    <div className="wrapper mt-24">
      <div className="grid grid-cols-9 lg:grid-cols-9 gap-8">
        <div className="flex flex-col gap-4 col-span-2 max-md:col-span-3">
          <div className="px-4 w-fit bg-gray-100 rounded">
            <img
              className="w-[150px] object-contain h-[130px]"
              src={productData.attributes?.banner.data.attributes.url}
              alt={productData.attributes?.title}
            />
          </div>
          <div className="px-4 w-fit bg-gray-100 rounded">
            <img
              className="w-[150px] object-contain h-[130px]"
              src={productData.attributes?.banner.data.attributes.url}
              alt={productData.attributes?.title}
            />
          </div>
          <div className="px-4 w-fit bg-gray-100 rounded">
            <img
              className="w-[150px] object-contain h-[130px]"
              src={productData.attributes?.banner.data.attributes.url}
              alt={productData.attributes?.title}
            />
          </div>
          <div className="px-4 w-fit bg-gray-100 rounded">
            <img
              className="w-[150px] object-contain h-[130px]"
              src={productData.attributes?.banner.data.attributes.url}
              alt={productData.attributes?.title}
            />
          </div>
        </div>
        <div className="bg-gray-100 flex items-center justify-center col-span-3 max-md:col-span-6">
          <img
            className="w-full object-contain"
            src={productData.attributes?.banner.data.attributes.url}
            alt={productData.attributes?.title}
          />
        </div>

        <ProductDetails
          id={productData.id}
          title={productData.attributes?.title}
          rate={productData.attributes?.rate}
          reviews={productData.attributes?.reviews}
          price={productData.attributes?.price}
          description={productData.attributes?.description}
        />
      </div>

      <div className="mt-24 flex justify-between items-center">
        <h4 className="font-semibold text-primary text-xl mb-6 relative before:content-[''] before:absolute before:left-0 before:top-1/2 pl-10 before:transform before:translate-y-[-50%] before:bg-primary before:w-[23px] before:h-[50px] before:rounded">
          Related Item
        </h4>
      </div>

      <div className="mt-8 grid gap-8 grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredProducts}
      </div>
    </div>
  );
};

export default ProductInfo;
