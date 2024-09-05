const CtaSection = () => {
  return (
    <section className="mt-32 bg-black p-8 px-16 rounded flex flex-col gap-4 justify-between md:flex-row">
      <div className="flex flex-col gap-8">
        <h5 className="text-secondary text-sm">Categoires</h5>
        <h2 className="text-white text-4xl line-clamp-3 leading-normal font-semibold">
          Enhance Your Music Experience
        </h2>
        <div className="flex gap-3 mb-4">
          <div className="flex flex-col justify-center items-center bg-slate-200 rounded-full px-3 w-[60px] h-[60px]">
            <h4 className="font-semibold text-lg">23</h4>
            <span className="text-xs font-medium mb-1">Hours</span>
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-200 rounded-full px-3 w-[60px] h-[60px]">
            <h4 className="font-semibold text-lg">23</h4>
            <span className="text-xs font-medium mb-1">Days</span>
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-200 rounded-full px-3 w-[60px] h-[60px]">
            <h4 className="font-semibold text-lg">23</h4>
            <span className="text-xs font-medium mb-1">Minutes</span>
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-200 rounded-full px-3 w-[60px] h-[60px]">
            <h4 className="font-semibold text-lg">23</h4>
            <span className="text-xs font-medium mb-1">Seconds</span>
          </div>
        </div>
        <button className="bg-secondary text-white p-4 px-16 w-fit rounded-lg hover:opacity-90 transition-opacity">
          Buy Now
        </button>
      </div>
      <div className="max-w-[500px] mx-auto lg:mx-0">
        <img className="mt-10 w-full mx-auto" src="/cta1.png" alt="" />
      </div>
    </section>
  );
};

export default CtaSection;
