import axiosClient from "./axiosClient";

const getLatestProducts = (limit) => axiosClient.get(`/products?populate=*`);

const getProductDetails = (id) => axiosClient.get(`/products/${id}?populate=*`);

const getProductsByCategory = (category) =>
  axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

const getProductInfo = (id) => axiosClient.get(`/products/${id}?populate=*`);

export default {
  getLatestProducts,
  getProductDetails,
  getProductsByCategory,
  getProductInfo,
};
