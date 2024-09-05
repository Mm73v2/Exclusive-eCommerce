import { useEffect, useState } from "react";
import Context from "./Context";
import ProdcutApis from "../utils/ProductApis";
import axiosClient from "../utils/axiosClient";
import CartApis from "../utils/CartApis";
import WishlistApis from "../utils/WishlistApis";
import getUser from "../utils/getUser";

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    ProdcutApis.getLatestProducts().then((res) => setProducts(res.data.data));

    const storedUser = getUser();

    if (storedUser && storedUser.email !== user?.email) {
      setUser(storedUser);
    }

    if (storedUser) {
      CartApis.getCartItems(storedUser.email).then((res) =>
        setCart(res.data.data)
      );

      CartApis.getCartItems(storedUser.email).then((res) =>
        setCart(res.data.data)
      );

      WishlistApis.getWishlist(storedUser.email).then((res) =>
        setWishlist(res.data.data)
      );
    }
  }, [ProdcutApis.getLatestProducts, user]);

  const addProduct = async (productId, email, quantity = 1) => {
    if (cart) {
      let cartId = null;
      let productQuantity = 1;
      cart.forEach((cartItem) => {
        if (cartItem?.attributes?.products?.data[0]?.id === productId) {
          cartId = cartItem.id;
          productQuantity = cartItem.attributes.quantity;
        }
      });

      if (cartId) {
        const payload = {
          data: {
            quantity: productQuantity + quantity,
          },
        };

        await axiosClient.put(`/carts/${cartId}`, payload);
      } else {
        const payload = {
          data: {
            email,
            products: [productId],
            quantity: quantity,
          },
        };

        await axiosClient.post(`/carts`, payload);
      }
    }
    await CartApis.getCartItems(user.email).then((res) =>
      setCart(res.data.data)
    );
  };

  const removeProductFromCart = async (productId) => {
    await axiosClient.delete(`/carts/${productId}`);
    await CartApis.getCartItems(user.email).then((res) =>
      setCart(res.data.data)
    );
  };

  const updateProductQuantity = (products) => {
    const requests = products.map(async (product) => {
      const payload = {
        data: {
          quantity: product.productQuantity,
        },
      };

      return await axiosClient.put(`/carts/${product.id}`, payload);
    });
    Promise.all(requests)
      .then(() => {
        return CartApis.getCartItems(user.email).then((res) =>
          setCart(res.data.data)
        );
      })
      .then((res) => setCart(res.data.data));
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setCart([]);
    setWishlist([]);
    window.location.href = "/";
  };

  const addToWishlist = async (productId) => {
    if (wishlist) {
      let wishlistId = null;
      wishlist.forEach((wishlistItem) => {
        if (wishlistItem?.attributes?.products?.data[0]?.id === productId) {
          wishlistId = wishlistItem.id;
        }
      });

      if (wishlistId) {
        await axiosClient.delete(`/wishlists/${wishlistId}`);
      } else {
        const payload = {
          data: {
            email: user.email,
            products: [productId],
          },
        };
        await axiosClient.post(`/wishlists`, payload);
      }
    }
    await WishlistApis.getWishlist(user.email).then((res) =>
      setWishlist(res.data.data)
    );
  };

  const emptyWishlist = (id) => {
    axiosClient.delete(`/wishlists/${id}`);
  };

  const addWishlistToCart = async () => {
    try {
      const productsToMove = wishlist.filter(
        (wishlistItem) =>
          !cart.some(
            (cartItem) =>
              cartItem.attributes.products.data[0].id ===
              wishlistItem.attributes.products.data[0].id
          )
      );

      if (productsToMove.length === 0) {
        const requests = wishlist.map(
          async (product) => await emptyWishlist(product.id)
        );
        setWishlist([]);
        return;
      }

      const requests = productsToMove.map(async (product) => {
        await addProduct(product.attributes.products.data[0].id, user.email);
        await emptyWishlist(product.id);
      });

      await Promise.all(requests);

      setWishlist([]);
      console.log("Wishlist emptied and products moved to the cart.");
    } catch (error) {
      console.error("Error moving products to the cart:", error);
    }
  };

  const appState = {
    products: products,
    cart,
    addProduct,
    removeProductFromCart,
    user,
    setUser,
    updateProductQuantity,
    logout,
    wishlist,
    addToWishlist,
    addWishlistToCart,
  };
  return <Context.Provider value={appState}>{children}</Context.Provider>;
};

export default ContextProvider;
