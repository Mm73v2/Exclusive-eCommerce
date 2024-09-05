import { Link } from "react-router-dom";

const CartSubtotal = ({ totalPrice, isCartEmpty }) => {
  return (
    <div className="p-4 border-black border rounded flex flex-col max-sm:w-full max-sm:mt-8 w-[500px]">
      <h2 className="font-semibold text-lg mb-4">Cart Total</h2>
      <div className="flex justify-between border-b-2 mb-8 pb-3">
        <h3>Subtotal:</h3>
        <p className="font-medium">${totalPrice}</p>
      </div>

      <div className="flex justify-between border-b-2 mb-8 pb-3">
        <h3>Shipping:</h3>
        <p className="font-medium">Free</p>
      </div>

      <div className="flex justify-between mb-8">
        <h3>Total:</h3>
        <p className="font-medium">${totalPrice}</p>
      </div>

      <Link
        to={isCartEmpty > 0 ? "/checkout" : "/"}
        className="bg-primary text-white rounded py-4 px-14 hover:opacity-90 mx-auto"
      >
        Proccess to checkout
      </Link>
    </div>
  );
};

export default CartSubtotal;
