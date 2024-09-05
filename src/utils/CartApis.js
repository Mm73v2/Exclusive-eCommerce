import axiosClient from "./axiosClient";

const getCartItems = (email) =>
  axiosClient.get(
    `/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );

// const addProductToCart = async (productId, email) => {
//   const res = await getCartItems(email);
//   const cart = await res.data.data;

//   if (cart) {
//     let cartId = null;
//     let productQuantity = 1;
//     cart.forEach((cartItem) => {
//       if (cartItem?.attributes?.products?.data[0]?.id === productId) {
//         cartId = cartItem.id;
//         productQuantity = cartItem.attributes.quantity;
//       }
//     });

//     if (cartId) {
//       const payload = {
//         data: {
//           quantity: productQuantity + 1,
//         },
//       };

//       axiosClient.put(`/carts/${cartId}`, payload);
//     } else {
//       const payload = {
//         data: {
//           email,
//           products: [productId],
//           quantity: productQuantity,
//         },
//       };

//       axiosClient.post(`/carts`, payload);
//     }
//   }
// };

export default { getCartItems };
