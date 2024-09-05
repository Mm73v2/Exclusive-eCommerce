import { useEffect, useRef, useState } from "react";
import SectionHeader from "../UI/SectionHeader";
import ProductSwiper from "./ProductSwiper";
import SwiperBtns from "../UI/SwiperBtns";

const FlashSales = () => {
  const swiperRef = useRef(null);

  const [time, setTime] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }
        if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        }
        if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        }
        if (days > 0) {
          return {
            ...prevTime,
            days: days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        return { days: 3, hours: 3, minutes: 3, seconds: 3 };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);
  return (
    <section className="mt-32">
      <div className="flex flex-col md:flex-row md:items-center gap-16 mb-8">
        <SectionHeader subtitle="Today's" title="Flash Sales" />
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Days</span>
            <h4 className="font-semibold text-2xl text-center tracking-wide">
              {String(time.days).padStart(2, "0")}{" "}
              <span className="text-primary ml-2">:</span>
            </h4>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Hours</span>
            <h4 className="font-semibold text-2xl text-center tracking-wide">
              {String(time.hours).padStart(2, "0")}{" "}
              <span className="text-primary ml-2">:</span>
            </h4>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Minutes</span>
            <h4 className="font-semibold text-2xl text-center tracking-wide">
              {String(time.minutes).padStart(2, "0")}{" "}
              <span className="text-primary ml-2">:</span>
            </h4>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Seconds</span>
            <h4 className="font-semibold text-2xl text-center tracking-wide">
              {String(time.seconds).padStart(2, "0")}
            </h4>
          </div>
        </div>
        <SwiperBtns swiperRef={swiperRef} />
      </div>

      <ProductSwiper swiperRef={swiperRef} />

      <a
        href="#products"
        className="text-white w-fit bg-primary rounded py-3 px-7 flex mx-auto mt-8 hover:opacity-90 transition-all"
      >
        View all products
      </a>
    </section>
  );
};

export default FlashSales;
