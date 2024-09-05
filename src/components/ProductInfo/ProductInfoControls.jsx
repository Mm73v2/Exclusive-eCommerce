import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../store/Context";
import getUser from "../../utils/getUser";
import { Minus, Plus, Heart } from "lucide-react";

const ProductInfoControls = ({ id }) => {
  const { addToWishlist, addProduct } = useContext(Context);

  const navigate = useNavigate();

  const user = getUser();

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addToWishListHandler = () => {
    if (user) {
      addToWishlist(id);
    } else {
      navigate("/login");
    }
  };

  const addToCartHandler = () => {
    if (user) {
      addProduct(id, user.email, quantity);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex max-xl:flex-col xl-items-center gap-4 mt-4">
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-fit">
        <button
          onClick={decrement}
          className="px-4 py-3 text-gray-700 group hover:bg-primary transition-colors"
        >
          <Minus className="group-hover:text-white" size={25} />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-12 text-center border-l border-r border-gray-300 outline-none"
          min="1"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
        />
        <button
          onClick={increment}
          className="px-4 py-3 text-gray-700 group hover:bg-primary transition-colors"
        >
          <Plus className="group-hover:text-white" size={25} />
        </button>
      </div>
      <div className="flex gap-4">
        <button
          onClick={addToCartHandler}
          className="bg-primary text-white px-8 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
        >
          Buy Now
        </button>

        <button
          onClick={addToWishListHandler}
          className="p-3 border border-gray-300 rounded-md group hover:bg-primary hover:border-primary transition-colors"
        >
          <Heart size={24} className="text-gray-700 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProductInfoControls;
