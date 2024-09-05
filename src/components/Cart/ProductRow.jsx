import { useEffect, useState, useContext } from "react";
import Context from "../../store/Context";
import { X } from "lucide-react";
const ProductRow = ({ id, img, title, quantity, price, quantityHandler }) => {
  const ctx = useContext(Context);

  const [quantityInput, setQuantityInput] = useState("");

  const handleChange = (e) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/\D/g, "");

    if (inputValue && Number(inputValue) < 10) {
      inputValue = `0${inputValue}`;
    }

    setQuantityInput(inputValue);
    quantityHandler({ id, productQuantity: +inputValue });
  };

  useEffect(() => {
    if (quantity < 10) {
      setQuantityInput(`0${quantity}`);
    } else {
      setQuantityInput(quantity);
    }
  }, [quantity]);

  return (
    <tr className="shadow">
      <td className="px-4 py-4 font-semibold text-gray-800 flex max-md:flex-col items-center gap-4 relative group">
        <img className="w-[100px]" src={img} alt="" />
        <h2 className="font-semibold text-lg">{title}</h2>
        <button
          onClick={() => ctx.removeProductFromCart(id)}
          className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 bg-primary rounded-full p-1 cursor-pointer transition-opacity duration-300"
        >
          <X className="text-white" size={15} />
        </button>
      </td>
      <td className="px-4 py-4 font-semibold text-gray-800">${price}</td>
      <td className="px-4 py-4 font-semibold text-gray-800">
        <input
          onChange={handleChange}
          value={quantityInput}
          type="number"
          min="1"
          max="50"
          className="outline-none w-fit border p-2 rounded"
        />
      </td>
      <td className="px-4 py-4 font-semibold text-gray-800">
        ${price * quantity}
      </td>
    </tr>
  );
};

export default ProductRow;
