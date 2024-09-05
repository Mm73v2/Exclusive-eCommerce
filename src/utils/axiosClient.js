import axios from "axios";
const apiKey = import.meta.env.VITE_REST_API_KEY;
const apiUrl = "https://strapi-ecommerce-production-0eac.up.railway.app/api";

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default axiosClient;
