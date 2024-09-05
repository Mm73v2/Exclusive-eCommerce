import { ArrowRight } from "lucide-react";

const HeroSwiperItem = () => {
  return (
    <div className="flex justify-between max-md:flex-col items-center gap-8 bg-black py-16 px-16 w-full mt-10">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <img src="/hero-2.png" alt="image" />
          <h5 className="text-white text-sm">iPhone 13 Series</h5>
        </div>
        <h2 className="text-5xl text-white leading-relaxed">
          Up to 10% off Voucher
        </h2>
        <a
          href="#"
          className="text-white border-b border-gray-300 pb-1 w-fit flex gap-2"
        >
          Shop Now <ArrowRight />
        </a>
      </div>
      <div className="w-fit h-fit">
        <img
          className="w-full min-w-[300px] h-full object-cover"
          src="/hero-1.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default HeroSwiperItem;
