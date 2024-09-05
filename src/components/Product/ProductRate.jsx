import { useParams } from "react-router-dom";
import { Star, StarHalf } from "lucide-react";
const ProductRate = ({ rate, reviews }) => {
  const { productId } = useParams();

  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: 5 }, (_, index) => {
        if (index + 1 <= Math.floor(rate)) {
          return (
            <Star
              size={15}
              key={index}
              fill="#ffad33"
              className="text-[#ffad33]"
            />
          );
        } else if (index < rate && rate % 1 !== 0) {
          return (
            <StarHalf
              size={15}
              key={index}
              fill="#ffad33"
              className="text-[#ffad33]"
            />
          );
        } else {
          return (
            <Star size={15} key={index} fill="none" className="text-gray-300" />
          );
        }
      })}
      <span className="text-gray-400 font-medium">
        ({reviews}
        {!isNaN(+productId) ? " Reviews" : ""})
      </span>
    </div>
  );
};

export default ProductRate;
