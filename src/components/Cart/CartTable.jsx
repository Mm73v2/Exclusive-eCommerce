import Context from "../../store/Context";
import ProductRow from "./ProductRow";

const CartTable = ({ cart, quantityHandler, quantities }) => {
  return (
    <div className="font-sans overflow-x-auto">
      <table className="min-w-full divide-gray-200 border-separate border-spacing-y-10">
        <thead className="whitespace-nowrap">
          <tr>
            <th className="px-4 py-4 text-lg text-left font-medium tracking-wider">
              Product
            </th>
            <th className="px-4 py-4 text-lg text-left font-medium tracking-wider">
              Price
            </th>
            <th className="px-4 py-4 text-lg text-left font-medium tracking-wider">
              Quantity
            </th>
            <th className="px-4 py-4 text-lg text-left font-medium tracking-wider">
              Subtotal
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-gray-200 whitespace-nowrap">
          {cart.map((item) => (
            <ProductRow
              quantityHandler={quantityHandler}
              key={item.id}
              id={item.id}
              img={
                item.attributes.products.data[0].attributes.banner.data
                  .attributes.url
              }
              title={item.attributes.products.data[0].attributes.title}
              price={item.attributes.products.data[0].attributes.price}
              quantity={item.attributes.quantity}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
