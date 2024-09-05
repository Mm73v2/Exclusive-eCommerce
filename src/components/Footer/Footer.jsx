import {
  SendHorizontal,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="wrapper bg-black text-white py-12 mt-32">
      <div className=" mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Exclusive</h3>
          <p className="mb-4">Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="mt-4 flex max-sm:w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full text-black rounded-l-md outline-none"
            />
            <button className="bg-white text-black p-2 rounded-r-md">
              <SendHorizontal />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mt-4">exclusive@gmail.com</p>
          <p className="mt-4">+88015-88888-9999</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Account</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/profile"
                className="text-gray-400 hover:text-white transition-colors"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Login / Register
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms Of Use
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Download App</h3>
          <p className="text-gray-400 mb-4">Save $3 with App New User Only</p>
          <div className="flex gap-4">
            <img src="/footer1.png" alt="QR Code" />

            <div className="flex flex-col justify-between">
              <a href="#">
                <img src="/footer2.png" alt="Google Play" />
              </a>

              <a href="#">
                <img src="/footer3.png" alt="App Store" />
              </a>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-3 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm">
        <p>© Copyright Mohamed Abobakr 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
