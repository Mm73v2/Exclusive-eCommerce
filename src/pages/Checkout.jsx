import { useContext } from "react";
import Context from "../store/Context";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import CheckoutCart from "../components/Checkout/CheckoutCart";
const Checkout = () => {
  const { cart } = useContext(Context);
  const totalPrice = cart.reduce((acc, entry) => {
    const quantity = entry.attributes.quantity;

    const entryTotal = entry.attributes.products.data.reduce(
      (productAcc, product) => {
        return productAcc + product.attributes.price * quantity;
      },
      0
    );
    return acc + entryTotal;
  }, 0);

  return (
    <div className="wrapper mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <CheckoutForm />
        <CheckoutCart products={cart} subtotal={totalPrice} />
      </div>
    </div>
  );
};

export default Checkout;
