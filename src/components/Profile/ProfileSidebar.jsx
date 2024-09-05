import { Link } from "react-router-dom";

const ProfileSidebar = () => {
  return (
    <aside className="col-span-1 max-lg:col-span-3">
      <h2 className="font-semibold text-lg mb-4">Manage My Account</h2>
      <ul className="pl-8">
        <li className="text-primary mb-2">
          <a href="#">My Profile</a>
        </li>
        <li className=" mb-2 text-gray-500 hover:text-primary transition-colors">
          <a href="#">Address Book</a>
        </li>
        <li className=" mb-2 text-gray-500 hover:text-primary transition-colors">
          <a href="#">My Payment Options</a>
        </li>
      </ul>

      <h2 className="font-semibold text-lg mb-4">My Orders</h2>
      <ul className="pl-8">
        <li className="mb-2 text-gray-500 hover:text-primary transition-colors">
          <a href="#">My Returns</a>
        </li>
        <li className=" mb-2 text-gray-500 hover:text-primary transition-colors">
          <a href="#">My Canellations</a>
        </li>
      </ul>

      <Link to="/wishlist" className="font-semibold text-lg mb-4">
        My Wishlist
      </Link>
    </aside>
  );
};

export default ProfileSidebar;
