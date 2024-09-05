import React from "react";

const ProductInfoColors = () => {
  return (
    <div className="flex items-center gap-4">
      <h2 className="font-semibold text-lg">Colours:</h2>
      <label className="flex items-center">
        <input type="radio" value="red" className="hidden peer" name="color" />
        <span className="w-6 h-6 bg-red-500 rounded-full border-2 border-transparent peer-checked:border-black cursor-pointer"></span>
      </label>
      <label className="flex items-center">
        <input type="radio" value="red" className="hidden peer" name="color" />
        <span className="w-6 h-6 bg-blue-500 rounded-full border-2 border-transparent peer-checked:border-black cursor-pointer"></span>
      </label>
    </div>
  );
};

export default ProductInfoColors;
