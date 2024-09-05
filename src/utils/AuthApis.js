import axiosClient from "./axiosClient";

const registerUser = (data) => axiosClient.post("/auth/local/register", data);

const loginUser = (data) => axiosClient.post("/auth/local", data);

export default {
  registerUser,
  loginUser,
};
