import { Truck, Headset, ShieldCheck } from "lucide-react";
const Testimonial = () => {
  return (
    <section className="mt-32">
      <div className="grid grid-col-1 md:grid-cols-3 place-items-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="bg-gray-200 rounded-full p-4">
            <div className="bg-black rounded-full p-3">
              <Truck color="white" size={30} />
            </div>
          </div>
          <h2 className="uppercase text-2xll font-semibold">
            free and fast delivery
          </h2>
          <p className="text-sm line-clamp-1">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="bg-gray-200 rounded-full p-4">
            <div className="bg-black rounded-full p-3">
              <Headset color="white" size={30} />
            </div>
          </div>
          <h2 className="uppercase text-2xll font-semibold">
            24/7 customer service
          </h2>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="bg-gray-200 rounded-full p-4">
            <div className="bg-black rounded-full p-3">
              <ShieldCheck color="white" size={30} />
            </div>
          </div>
          <h2 className="uppercase text-2xll font-semibold">
            money back gurantee
          </h2>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
