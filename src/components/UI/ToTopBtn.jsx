import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
const ToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="z-50 rounded-full p-3 animate-bounce bg-black fixed right-12 bottom-12"
      >
        <ArrowUp className="text-white" size={25} />
      </button>
    )
  );
};

export default ToTopBtn;
