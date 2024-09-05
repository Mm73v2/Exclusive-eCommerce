import { Truck, RotateCw } from "lucide-react";
const ProductInfoBox = () => {
  return (
    <div className="mt-8 border border-gray-300">
      <div className="border-b-2 border-gray-300 p-4 flex items-center space-x-4 py-8 group hover:bg-primary transition-colors">
        <Truck size={40} className="text-black group-hover:text-white" />
        <div>
          <h2 className="text-xl font-medium mb-1 group-hover:text-white">
            Free Delivery
          </h2>
          <p className="text-gray-600 underline group-hover:text-white">
            Enter your postal code for Delivery Availability
          </p>
        </div>
      </div>

      <div className="p-4 flex items-center space-x-4 py-8 group hover:bg-primary transition-colors">
        <RotateCw size={40} className="text-black group-hover:text-white" />
        <div>
          <h2 className="text-xl font-medium mb-1 group-hover:text-white">
            Return Delivery
          </h2>
          <p className="text-gray-600 group-hover:text-white">
            Free 30 Days Delivery Returns.
            <a
              href="#"
              className="text-blue-600 underline group-hover:text-white ml-2"
            >
              Details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoBox;
