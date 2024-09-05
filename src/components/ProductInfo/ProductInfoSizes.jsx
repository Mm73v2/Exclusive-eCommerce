import { useState } from "react";

const ProductInfoSizes = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="flex items-center gap-4 mt-4">
      <h2 className="font-semibold text-lg">Sizes:</h2>
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`px-4 py-2 border rounded-md ${
            selectedSize === size
              ? "bg-red-600 text-white"
              : "bg-white text-gray-700 border-gray-300"
          } transition-colors duration-200`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default ProductInfoSizes;
