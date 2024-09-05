import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { LoaderCircle } from "lucide-react";
import Context from "../store/Context";
import CartTable from "../components/Cart/CartTable";
import CartSubtotal from "../components/Cart/CartSubtotal";
import loading from "../../public/loading.json";

const Cart = () => {
  const ctx = useContext(Context);
  const [quantities, setQuantities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const totalPrice = ctx.cart.reduce((acc, entry) => {
    const quantity = entry.attributes.quantity;

    const entryTotal = entry.attributes.products.data.reduce(
      (productAcc, product) => {
        return productAcc + product.attributes.price * quantity;
      },
      0
    );
    return acc + entryTotal;
  }, 0);

  const quantityHandler = (data) => {
    const productIndex = quantities.findIndex((el) => el.id === data.id);
    if (productIndex !== -1) {
      quantities[productIndex].productQuantity = data.productQuantity;
      setQuantities([...quantities]);
    } else {
      setQuantities((prevQuantites) => [...prevQuantites, data]);
    }
  };

  const updateCartHandler = () => {
    if (quantities.length) {
      setIsLoading(true);
      ctx.updateProductQuantity(quantities);
      setTimeout(async () => {
        setIsLoading(false);
      }, 1500);
      setQuantities([]);
    }
  };

  useEffect(() => {
    if (ctx.cart) {
      setIsLoading(false);
    }
  }, [ctx.cart]);

  return (
    <div className="wrapper mt-16">
      {isLoading ? (
        <div className="w-1/4 mx-auto">
          <Lottie animationData={loading} />
        </div>
      ) : (
        <>
          {ctx.cart.length > 0 ? (
            <CartTable cart={ctx.cart} quantityHandler={quantityHandler} />
          ) : (
            <h3 className="mt-8 mb-24 text-2xl font-medium text-center">
              Your cart is empty.
            </h3>
          )}
        </>
      )}
      <div className="flex justify-between mt-4">
        <Link
          to="/"
          className="py-4 px-8 sm:px-10 border border-black hover:bg-primary hover:border-primary hover:text-white font-medium rounded transition-all"
        >
          Back To Shop
        </Link>
        <button
          onClick={updateCartHandler}
          className="py-4 px-8 sm:px-10 border border-black hover:bg-primary hover:border-primary hover:text-white font-medium rounded transition-all"
        >
          {isLoading ? (
            <div className="flex gap-2 items-center">
              Updating
              <LoaderCircle className="animate-spin" />
            </div>
          ) : (
            "Update Cart"
          )}
        </button>
      </div>
      <div className="mt-8 flex max-lg:flex-col justify-between gap-8">
        <form className="flex max-sm:flex-col gap-4 h-fit">
          <input
            type="text"
            className="outline-none rounded p-2 border border-black"
            placeholder="Copun code"
          />
          <button
            className="bg-primary text-white rounded py-2 px-8 hover:opacity-90"
            type="submit"
          >
            Apply Copun
          </button>
        </form>
        <CartSubtotal
          isCartEmpty={ctx.cart.length}
          totalPrice={totalPrice}
          className="w-1/4"
        />
      </div>
    </div>
  );
};

export default Cart;

{
  /*  */
}
