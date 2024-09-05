import { useState } from "react";
import { ArrowDown } from "lucide-react";

const TopHeader = () => {
  const [dropdown, setDropdown] = useState(false);
  const showDropdownHandler = () => {
    console.log("test");
    setDropdown((prev) => !prev);
  };
  return (
    <div className="bg-black  py-3 block lg:flex wrapper relative">
      <h2 className="text-textPrimary text-sm md:text-base mx-auto">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a className="ml-5 underline text-white font-bold" href="#">
          Shop Now
        </a>
      </h2>
      <div
        className="flex items-center justify-center max-sm:mt-3 gap-1 text-textPrimary cursor-pointer"
        onClick={showDropdownHandler}
      >
        English
        <ArrowDown size={18} />
        <ul
          className={`absolute ${
            dropdown ? "block" : "hidden"
          } top-full shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] w-max divide-y max-h-96 overflow-auto`}
        >
          <li className="py-3 px-5 hover:bg-gray-100 bg-gray-100 text-gray-800 text-sm cursor-pointer">
            English
          </li>
          <li className="py-3 px-5 hover:bg-gray-100 text-gray-800 text-sm cursor-pointer">
            Arabic
          </li>
          <li className="py-3 px-5 hover:bg-gray-100 text-gray-800 text-sm cursor-pointer">
            French
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
