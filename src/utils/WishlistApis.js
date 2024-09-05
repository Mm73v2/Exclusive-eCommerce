import axiosClient from "./axiosClient";
const getWishlist = (email) =>
  axiosClient.get(
    `/wishlists?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );
export default { getWishlist };
