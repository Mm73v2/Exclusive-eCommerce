import SectionHeader from "../UI/SectionHeader";
const NewArrival = () => {
  return (
    <section className="mt-32">
      <SectionHeader subtitle="Featured" title="New Arrival" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 rounded-lg p-4 bg-black relative">
          <div className="flex justify-center">
            <img src="/new-arrival1.png" alt="ps-5" />
            <div className="absolute bottom-10 left-10">
              <h2 className="text-white font-semibold text-2xl mb-4">
                PlayStation 5
              </h2>
              <p className="text-white text-sm mb-4">
                Black and White version of the PS5 <br /> coming out on sale.
              </p>
              <a className="underline font-medium text-white mb-4" href="#">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-6">
          {/* Full-width card */}
          <div className="shadow-md rounded-lg p-4 relative bg-black">
            <div className="flex justify-end">
              <img src="/new-arrival2.png" alt="ps-5" />
            </div>

            <div className="absolute bottom-10 left-10">
              <h2 className="text-lg font-semibold text-white mb-4">
                Women's Collection
              </h2>
              <p className="text-textPrimary mb-4">
                Featured women collections that <br /> give you another vibe
              </p>
              <a className="underline font-medium text-white mb-4" href="#">
                Shop Now
              </a>
            </div>
          </div>

          {/* Two half-width cards stacked horizontally */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First half-width card */}
            <div className="shadow-md rounded-lg p-4 relative bg-black">
              <div className="flex justify-center">
                <img src="/new-arrival2.png" alt="ps-5" />
              </div>

              <div className="absolute bottom-10 left-10">
                <h2 className="text-lg font-semibold text-white mb-4">
                  Speakers
                </h2>
                <p className="text-textPrimary mb-4">
                  Amazon wireless speakers
                </p>
                <a className="underline font-medium text-white mb-4" href="#">
                  Shop Now
                </a>
              </div>
            </div>

            {/* Second half-width card */}
            <div className="bg-black rounded-lg relative p-4">
              <div className="flex justify-center">
                <img src="/new-arrival3.png" alt="ps-5" />
              </div>

              <div className="absolute bottom-10 left-10">
                <h2 className="text-lg font-semibold text-white mb-4">
                  Perfume
                </h2>
                <p className="text-textPrimary mb-4">GUCCI INTENSE-OUD EDP</p>
                <a className="underline font-medium text-white mb-4" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
