import { useContext, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Heart, Eye, Trash2, LoaderCircle } from "lucide-react";
import Context from "../../store/Context";
import ProductRate from "./ProductRate";

const Product = ({
  id,
  title,
  price,
  img,
  rate,
  reviews,
  hasDiscount,
  isNew,
  inWishlist,
}) => {
  const ctx = useContext(Context);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const addProductHandler = () => {
    if (ctx.user) {
      if (isLoading) return;
      ctx.addProduct(id, ctx.user.email, 1);
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600);
    } else {
      navigate("/login");
    }
  };

  const addToWishListHandler = () => {
    if (ctx.user) {
      ctx.addToWishlist(id);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col gap-y-3 mb-5 group">
      <div className="relative bg-grayBg  p-3 rounded-lg text-center">
        <img
          className="mx-auto w-full h-[220px] object-contain"
          src={img}
          alt="product"
        />
        {hasDiscount > 0 && !isNew && (
          <p className="text-white bg-primary py-1 px-5 absolute top-3 rounded-lg text-sm">
            -{(((price - hasDiscount) / price) * 100).toFixed(0)}%
          </p>
        )}
        {isNew && (
          <p className="text-white bg-secondary py-1 px-5 absolute top-3 rounded-lg text-sm">
            New
          </p>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={addToWishListHandler}
            className={`bg-white ${
              pathname === "/wishlist" ? (!inWishlist ? "hidden" : "block") : ""
            } rounded-full p-1 cursor-pointer`}
          >
            {inWishlist ? <Trash2 /> : pathname !== "/wishlist" && <Heart />}
          </button>

          {!inWishlist && (
            <Link
              to={`/product/${id}`}
              className="bg-white rounded-full p-1 cursor-pointer"
            >
              <Eye />
            </Link>
          )}
        </div>
        <button
          onClick={addProductHandler}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute text-white bg-black text-center w-full py-2 rounded-b bottom-0 left-0"
        >
          {isLoading ? (
            <div className="flex gap-2 items-center justify-center">
              Adding
              <LoaderCircle className="animate-spin" />
            </div>
          ) : (
            "Add To Cart"
          )}
        </button>
      </div>
      <h2 className="uppercase font-semibold">{title}</h2>
      <div className="flex gap-3">
        <h3 className="text-primary font-medium">
          ${hasDiscount > 0 ? hasDiscount : price}
        </h3>

        {hasDiscount > 0 && (
          <h3 className="text-gray-400 line-through font-medium">${price}</h3>
        )}
      </div>
      {!inWishlist && <ProductRate rate={rate} reviews={reviews} />}
    </div>
  );
};

export default Product;
