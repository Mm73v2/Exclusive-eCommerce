import { useContext } from "react";
import Context from "../store/Context";
import Product from "../components/Product/Product";

const Wishlist = () => {
  const { wishlist, products, addWishlistToCart } = useContext(Context);

  const wishlistProducts = wishlist.map((product) => (
    <Product
      key={product.id}
      id={product.attributes.products.data[0].id}
      title={product.attributes.products.data[0].attributes.title}
      price={product.attributes.products.data[0].attributes.price}
      img={
        product.attributes.products.data[0].attributes.banner.data.attributes
          .url
      }
      rate={product.attributes.products.data[0].attributes.rate}
      hasDiscount={product.attributes.products.data[0].attributes.discount}
      isNew={product.attributes.products.data[0].attributes.isNew}
      reviews={product.attributes.products.data[0].attributes.reviews}
      inWishlist={true}
    />
  ));

  const relatedProducts = products
    .slice(0, 5)
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
    <div className="wrapper mt-16">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">Wishlist ({wishlist.length})</h2>
        <button
          onClick={addWishlistToCart}
          className="border px-6 py-3 bg-transparent rounded hover:text-white hover:bg-primary transition-colors"
        >
          Move All To Bag
        </button>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid gap-8 grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
          {wishlistProducts}
        </div>
      ) : (
        <h3 className="text-3xl font-medium mt-8 text-center">
          Your wishlist is empty.
        </h3>
      )}

      <div className="mt-24 flex justify-between items-center">
        <h4 className="font-semibold text-xl mb-6 relative before:content-[''] before:absolute before:left-0 before:top-1/2 pl-10 before:transform before:translate-y-[-50%] before:bg-primary before:w-[23px] before:h-[50px] before:rounded">
          Just for you
        </h4>
        <button className="border px-10 py-3 bg-transparent rounded hover:text-white hover:bg-primary transition-colors">
          See All
        </button>
      </div>

      <div className="mt-8 grid gap-8 grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {relatedProducts}
      </div>
    </div>
  );
};

export default Wishlist;
