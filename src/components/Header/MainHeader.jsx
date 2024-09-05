import { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Context from "../../store/Context";
import { X, Search, Heart, ShoppingCart, Menu, UserRound } from "lucide-react";

const MainHeader = () => {
  const ctx = useContext(Context);
  const [showNavbar, setShowNavbar] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);
  const [wishlistBounce, setWishlistBounce] = useState(false);

  const showNavbarHandler = () => {
    setShowNavbar((prev) => !prev);
  };
  const profileDropdownHandler = () => {
    setProfileDropdown((prev) => !prev);
  };

  const wishlistAmount = ctx.wishlist.length;

  const totalAmount = ctx.cart.reduce(
    (total, quantity) => total + quantity.attributes.quantity,
    0
  );

  useEffect(() => {
    setCartBounce(true);
    setTimeout(() => {
      setCartBounce(false);
    }, 300);
  }, [ctx.cart]);

  useEffect(() => {
    setWishlistBounce(true);
    setTimeout(() => {
      setWishlistBounce(false);
    }, 300);
  }, [ctx.wishlist]);

  return (
    <header className="bg-white border-b py-4 tracking-wide relative z-50">
      <div className="wrapper flex">
        <div className="flex justify-between items-center lg:gap-y-2 w-full">
          <Link to="/" className="font-bold text-2xl" href="#">
            Exclusive
          </Link>

          <div
            className={`lg:ml-10 ${
              !showNavbar ? "max-lg:hidden" : "block"
            } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            <button
              onClick={showNavbarHandler}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <X />
            </button>

            <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="#">Exclusive</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-[15px] block font-medium"
                      : "text-[15px] block hover:underline"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-[15px] block font-medium"
                      : "text-[15px] block hover:underline"
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-[15px] block font-medium"
                      : "text-[15px] block hover:underline"
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-[15px] block font-medium"
                      : "text-[15px] block hover:underline"
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-3 gap-y-4">
            <div className="flex items-center bg-gray-100 focus-within:border-gray-400 px-5 py-3 max-xl:hidden">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full text-sm bg-transparent outline-none pr-2 text-[12px] xl:text-[14px]"
              />
              <Search className="cursor-pointer" size={20} />
            </div>

            <div className="flex items-center space-x-8">
              <Link to="/wishlist" className="relative cursor-pointer">
                <Heart />
                <span
                  className={`absolute ${
                    wishlistBounce ? "transfrom scale-150" : ""
                  } -right-1 -top-4 rounded-full bg-red-500 px-1 transition-all py-0 text-xs text-white`}
                >
                  {ctx.wishlist.length > 0 && wishlistAmount}
                </span>
              </Link>

              <Link to={"/cart"} className="relative cursor-pointer">
                <ShoppingCart />
                {ctx.user && (
                  <span
                    className={`absolute ${
                      cartBounce ? "transfrom scale-150" : ""
                    } -right-1 -top-4 rounded-full transition-all bg-red-500 px-1 py-0 text-xs text-white`}
                  >
                    {ctx.cart.length > 0 && totalAmount}
                  </span>
                )}
              </Link>

              {ctx.user && (
                <div className="relative">
                  <button onClick={profileDropdownHandler} type="button">
                    <UserRound />
                  </button>

                  <div
                    className={`z-10 ${
                      profileDropdown ? "block" : "hidden"
                    } bg-white divide-y divide-gray-100 rounded-lg w-[100px] shadow absolute -left-1/2 top-full`}
                  >
                    <ul className="py-2 text-sm text-gray-700 rounded bg-gra-100">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 rounded hover:bg-primary hover:text-white"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => ctx.logout()}
                          className="block px-4 py-2 rounded hover:bg-primary hover:text-white"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <button onClick={showNavbarHandler} className="lg:hidden">
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
