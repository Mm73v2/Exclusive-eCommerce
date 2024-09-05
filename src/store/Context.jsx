import React from "react";
const Context = React.createContext({
  products: [],
  addProduct: () => {},
  removeProductFromCart: () => {},
  cart: [],
  getCartData: () => {},
  user: {},
  setUser: () => {},
  updateProductQuantity: () => {},
  logout: () => {},
  wishlist: [],
  addToWishlist: () => {},
  addWishlistToCart: () => {},
});

export default Context;
