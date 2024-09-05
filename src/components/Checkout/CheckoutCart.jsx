const CheckoutCart = ({ products, subtotal }) => {
  return (
    <div className="flex flex-col gap-8 p-10">
      {products.map((product) => (
        <div key={product.id} className="flex justify-between items-center">
          <div className="flex max-sm:flex-col gap-4 items-center">
            <img
              src={
                product.attributes.products.data[0].attributes.banner.data
                  .attributes.url
              }
              className="w-[100px]"
              alt={product.attributes.products.data[0].attributes.title}
            />
            <h2 className="font-semibold text-lg max-md:text-[15px]">
              {product.attributes.products.data[0].attributes.title} (
              {product.attributes.quantity})
            </h2>
          </div>
          <p className="font-semibold">
            $
            {product.attributes.products.data[0].attributes.price *
              product.attributes.quantity}
          </p>
        </div>
      ))}
      <div className="flex justify-between border-b-2  pb-3">
        <h3>Subtotal:</h3>
        <p className="font-medium">${subtotal}</p>
      </div>
      <div className="flex justify-between border-b-2  pb-3">
        <h3>Shipping:</h3>
        <p className="font-medium">Free</p>
      </div>
      <div className="flex justify-between">
        <h3>Total:</h3>
        <p className="font-medium">${subtotal}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center mb-4">
          <input
            name="payment"
            id="bank"
            type="radio"
            value="Bank"
            className="h-4 w-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
          />
          <label htmlFor="bank" className="ml-2 text-gray-500">
            Bank
          </label>
        </div>
        <img className="w-fit" src="/checkout1.png" alt="" />
      </div>

      <div className="flex items-center">
        <input
          name="payment"
          id="cashOnDelivery"
          type="radio"
          value="Cash on delivery"
          className="h-4 w-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
        />
        <label htmlFor="cashOnDelivery" className="ml-2 text-gray-500">
          Cash on delivery
        </label>
      </div>
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
    </div>
  );
};

export default CheckoutCart;
