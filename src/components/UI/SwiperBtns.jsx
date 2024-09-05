import { ArrowRight, ArrowLeft } from "lucide-react";

const SwiperBtns = ({ swiperRef }) => {
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="flex gap-4 mt-4 md:ml-auto ml-0 mb-4">
      <button
        onClick={handlePrev}
        className="bg-gray-200 text-black p-3 rounded-full hover:text-white hover:bg-primary transition-colors"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={handleNext}
        className="bg-gray-200 text-black p-3 rounded-full hover:text-white hover:bg-primary transition-colors"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default SwiperBtns;
